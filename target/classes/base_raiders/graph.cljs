(ns base-raiders.graph)
(def skills {:resist-damage  {:stress-cap 1}
             :stress-cap     {:physical-force 2}
             :physical-force {:climb 1 :leap 1}
             :climb          {:move 1}
             :leap           {:move 1 :physical-force :1}
             :move           {:dodge 0 :stealth :2}
             :dodge          {:move 0}
             :stealth        {:move 2 :dexterity 1}
             :dexterity      {:stealth 1 :security 1 :strike 2}
             :strike         {:parry 0 :dexterity 2}
             :init-physical  {:init-mental 2 :init-social 2}
             :init-mental    {:init-physical 2 :init-social 2}
             :init-social    {:init-physical 2 :init-mental 2}})

(defn neighbors [net node]
  "the neighbors of a node"
  (if (net node)
    (-> (net node) keys vec)
    nil))

(defn move-cost [net from to]
  "the cost to move from a node to one of its neighbors"
  (if (= from to)
    0
    (to (from net))))


;(defn path-between [net from to]
;  "finds a path between two nodes as a vector like [:a :b: :c].
;  In the dataset, all paths from one node to another are equal length,
;  so no need to do a shortest-path algorithm"
;  (loop [path     []
;         explored #{}
;         frontier [from]]
;    (if (empty? frontier)
;      nil
;      (let [node (peek frontier)]
;        (if (= node to)
;          (conj path node)
;          (recur (conj path node)
;                 (conj explored node)
;                 (into (pop frontier) (remove explored
;                                              (neighbors net node)))))))))

(defn path-between [net from to]
  "finds a path between two nodes as a vector like [:a :b: :c]."
  ((fn search [from to path]
     (map (fn [node]
            (let [path (conj path node)]
              (print (str "hi" node path))
              (if (= node to)
                path
                (search node to path))))
          (neighbors net from)))
    from to []))


; map over each of the children
; map into their unvisited children etc
; at the end, if the frontier is empty, that branch is nil
; if it's found the node, we have that path
; then compact and choose the shortest



#_(defn cost-of-path [net from to]
  (let [path (path-between net from to)]
    (reduce path 0 (fn [cost next]
                     (print cost)
                     (+ cost
                        (move-cost net (last path) next))))))

; (move-cost 0 1)
; (move-cost 1 2)
; (move-cost 2 3)
; ... etc
