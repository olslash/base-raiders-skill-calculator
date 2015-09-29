(ns base-raiders.graph
  (:require
    [base-raiders.db :refer [max-path-cost]]))

(defn neighbors [graph node]
  "the neighbors of a node"
  (if (graph node)
    (-> (graph node) keys vec)
    nil))

(defn edge-cost [graph from to]
  "the edge-cost to move from a node to one of its neighbors -> number"
  (let [cost (to (from graph))]
    (cond
      (= from to) 0
      (nil? cost) 0
      :else cost)))

(defn- dfs
  "http://codereview.stackexchange.com/questions/15961/depth-first-search-algorithm-in-clojure"
  [graph goal]
  (fn search
    [path visited]
    (let [current (peek path)]
      (if (= goal current)
        [path]
        (->> current graph keys
             (remove visited)
             (mapcat #(search (conj path %) (conj visited %))))))))

(defn paths-between
  "Returns a lazy sequence of all directed paths from start to goal
  within graph."
  [graph start goal]
  ((dfs graph goal) [start] #{start}))


(defn cost-of-path-movement [graph path]
  "total edge-cost of movement along the provided path,
  considering the game's max cost -> number"
  (min max-path-cost
       (first (reduce
                (fn [[cost prev] next]
                  (let [new-cost (+ cost
                                    (edge-cost graph prev next))]
                    [new-cost next]))
                [0 (first path)]
                path))))

(defn compare-paths [graph path1 path2]
  "compare two paths by movement cost"
  (let [cost1 (cost-of-path-movement graph path1)
        cost2 (cost-of-path-movement graph path2)
        cost-comparison (compare cost1 cost2)
        length-comparison (compare (count path1) (count path2))]
    (cond
      ;nils float right
      (nil? path1) 1
      (nil? path2) -1
      :else (if (= 0 cost-comparison)                       ; same costs, use shorter path
              length-comparison
              cost-comparison))))

(defn cheapest-path [graph from to]
  "the cheapest path between from and to -> [:a :b :c]"
  (let [paths (paths-between graph from to)]
    (first (sort (partial compare-paths graph) paths))))

(defn path-to-cheapest-node [graph selected node]
  "finds the path to the closest node in [selected] to the provided node -> [:a :b :c]"
  (let [paths         (map #(cheapest-path graph node %1) selected)
        cheapest-path (first (sort (partial compare-paths graph) paths))]
    (or cheapest-path
        [node])))        ; node itself if no other paths

#_(defn cheapest-path-cost [graph selected node]
  "the cost of the cheapest path between two nodes -> number"
  (cost-of-path-movement graph
                         (path-to-cheapest-node graph selected node)))


#_(defn game-cost-to-make-selection [graph costs selected node]
  "cost of selecting -node- given [selected] other nodes -> number"
  (let [path-to-cheapest (path-to-cheapest-node graph selected node)
        skill-cost ((last path-to-cheapest) costs)
        path-cost (cost-of-path-movement graph path-to-cheapest)]
    (+ skill-cost path-cost)))

(defn game-cost-of-board [graph costs selected]
  "the total cost of the currently selected skills"
  (let [nodes-cost (reduce + (map #(%1 costs) selected))
        paths-cost (loop [unconnected-nodes selected
                          sum 0]
                     (if (empty? unconnected-nodes)
                       sum
                       (let [to-connect (first unconnected-nodes)
                             cheapest-path (path-to-cheapest-node graph (remove
                                                                          (partial = to-connect)
                                                                          selected) to-connect)
                             connected (last cheapest-path)
                             cost (cost-of-path-movement graph cheapest-path)]
                         (recur (remove #(or (= %1 connected)
                                             (= %1 to-connect))
                                        unconnected-nodes)
                                (+ cost sum)))))]
    (+ nodes-cost paths-cost)))

(defn selected-edges [graph selected-nodes]
  "returns pairs of [from to] for all the edges between selected nodes in the graph"
  (let [paths (map (fn [node]
                     (path-to-cheapest-node graph (remove #(= node %) selected-nodes) node))
                   selected-nodes)]
    (mapcat #(partition 2 1 %) paths)))

(defn filter-single-direction [selected-edges]
  "given a collection of bi-directional paths between nodes, distinct so only one edge per pair remains"
  (vec (reduce (fn [acc [from to]]
                 (if ((complement contains?) acc [to from])
                   (conj acc [from to])
                   acc)) #{} (set selected-edges))))