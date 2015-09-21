(ns base-raiders.graph)
(def skills {:resist-damage  {:stress-cap 1}
             :stress-cap     {:physical-force 2}
             :physical-force {:climb 1 :leap 1}
             :climb          {:move 1 :physical-force 1}
             :leap           {:move 1 :physical-force 1}
             :move           {:dodge 0 :stealth 2
                              :climb 1 :leap 1}
             :dodge          {:move 0}
             :stealth        {:move 2 :dexterity 1}
             :dexterity      {:stealth 1 :security 1 :strike 2}
             :strike         {:parry 0 :dexterity 2}
             :parry          {:strike 0}
             :init-physical  {:init-mental 2 :init-social 2}
             :init-mental    {:init-physical 2 :init-social 2}
             :init-social    {:init-physical 2 :init-mental 2}})

(def skill-costs {:resist-damage  2
                  :stress-cap     2
                  :physical-force 1
                  :climb          1
                  :leap           1
                  :move           1
                  :dodge          2
                  :stealth        1
                  :dexterity      1
                  :strike         1
                  :init-physical  2
                  :init-mental    2
                  :init-social    2})

(def max-path-cost 4)


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
        cost2 (cost-of-path-movement graph path2)]
    (compare cost1 cost2)))

(defn cheapest-path [graph from to]
  "the cheapest path between from and to -> [:a :b :c]"
  (let [paths (paths-between graph from to)]
    ; if 1 path, just return it
    (if (= (count paths) 1)
      (first paths)
      (first (sort (partial compare-paths graph) paths)))
    ; compare the paths by score, not actual length

    #_(first (sort paths))))

#_(defn path-to-cheapest-node [graph selected node]
  "finds the path to the closest node in [selected] to the provided node -> [:a :b :c]"
  (let [paths (map #(shortest-path graph node %1) selected)]
    (first (sort paths))))


#_(defn game-cost-of-selection [graph costs selected node]
  "cost of selecting -node- given [selected] other nodes -> number"
  (let [max-path-cost 4
        path-to-closest (path-to-closest-node graph selected node)
        skill-cost ((last path-to-closest) costs)
        path-cost  (min (cost-of-path-movement graph path-to-closest) max-path-cost)]
    (print path-to-closest)
    (+ skill-cost path-cost)))




; given a bunch of selected nodes, what is the lowest possible cost to add a selected node?











#_(defn cost-of-skills-on-path [skills path]
    (reduce (fn [cost skill]
              (let [skill-cost (skill skills)]
                (+ cost skill-cost)))
            0
            path))

#_(defn game-cost-of-path [graph skills path]
    ; game rules
    (let [max-path-cost 4
          path-cost (min (cost-of-path-movement graph path) max-path-cost)
          skills-cost (cost-of-skills-on-path skills path)]
      (+ path-cost skills-cost)))