(ns base-raiders.graph-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [base-raiders.graph :as g]))

(def skills {:resist-damage  {:stress-cap 1}
             :stress-cap     {:physical-force 2
                              :resist-damage 1}
             :physical-force {:climb 1 :leap 1
                              :stress-cap 2}
             :climb          {:move 1 :physical-force 1}
             :leap           {:move 1 :physical-force 1}
             :move           {:dodge 0 :stealth 2
                              :climb 1 :leap 1}
             :dodge          {:move 0}
             :stealth        {:move 2 :dexterity 1}
             :dexterity      {:stealth 1 :security 1 :strike 2}
             :strike         {:parry 0 :dexterity 2}
             :parry          {:strike 0}
             :security       {:dexterity 1 :notice 1}
             :notice         {:security 1 :shoot 2}
             :shoot          {:notice 2}
             :init-physical  {:init-mental 2 :init-social 2}
             :init-mental    {:init-physical 2 :init-social 2}
             :init-social    {:init-physical 2 :init-mental 2}

             :dismantle      {:repair 0}
             :repair         {:dismantle 0 :craft 1}
             :craft          {:repair 1 :workspace 1}
             :workspace      {:craft 1}})

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
                  :parry          1
                  :security       1
                  :notice         1
                  :shoot          2
                  :init-physical  2
                  :init-mental    2
                  :init-social    2

                  :dismantle      1
                  :repair         1
                  :craft          1
                  :workspace      1})


(def max-path-cost 4)

(deftest graph-search
  (testing "neighbors"
    (is (= (set (g/neighbors skills :move))
           (set [:dodge :stealth :climb :leap]))
        "finds neighbors of a node")
    (is (= (g/neighbors skills :not-in-graph)
           nil)
        "returns nil if the node is not found"))

  (testing "edge-cost"
    (is (= (g/edge-cost skills :stealth :dodge)
           0)
        "returns 0 if no path exists")
    (is (= (g/edge-cost skills :climb :climb)
           0)
        "returns 0 for a node to itself")
    (is (= (g/edge-cost skills :dexterity :strike)
           2)
        "gives the correct cost"))

  (testing "paths-between"
    (is (let [paths (g/paths-between skills :resist-damage :move)]
          (= (set paths)
             #{[:resist-damage :stress-cap :physical-force :climb :move]
               [:resist-damage :stress-cap :physical-force :leap :move]}))
        "correct result from a leaf")
    (is (let [paths (g/paths-between skills :move :stress-cap)]
          (= (set paths)
             #{[:move :climb :physical-force :stress-cap]
               [:move :leap :physical-force :stress-cap]}))
        "correct result from the middle of the graph"))

  (testing "cost-of-path-movement"
    (is (= (g/cost-of-path-movement skills [:resist-damage :stress-cap])
           1)
        "short path")
    (is (= (g/cost-of-path-movement skills [:physical-force :leap :move :dodge])
           2)
        "med path")
    (is (= (g/cost-of-path-movement skills [:resist-damage :stress-cap
                                            :physical-force :climb :move
                                            :stealth :dexterity :strike :parry])
           max-path-cost)
        "considers max path cost"))

  (testing "cheapest-path"
    (is (= (g/cheapest-path skills :move :move)
           [:move])
        "correct result for a node to itself")
    (is (= (g/cheapest-path skills :move :dodge)
           [:move :dodge])
        "correct result for a node to its neighbor")
    (is (= (g/cheapest-path skills :move :init-physical)
           nil)
        "correct result if no path is found")
    (is (let [path  (g/cheapest-path skills :resist-damage :leap)]
          (or (= path [:resist-damage :stress-cap :physical-force :leap])
              (= path [:resist-damage :stress-cap :physical-force :climb :move :leap])))
        "correct path -- one is longer but both score the same because of max-path-costs")
    (is (let [path (g/cheapest-path skills :resist-damage :move)]
          (or (= path [:resist-damage :stress-cap :physical-force :climb :move])
              (= path [:resist-damage :stress-cap :physical-force :leap :move])))
        "correct path with two equal possibilities"))

  (testing "path-to-cheapest-node"
    (is (= (g/path-to-cheapest-node skills [:init-physical] :move)
           [:move])
        "the node itself is cheapest when no other paths exist")
    (is (= (g/path-to-cheapest-node skills [:init-physical :strike] :move)
           [:move :stealth :dexterity :strike])
        "correct result when one path is nil")
    (is (= (g/path-to-cheapest-node skills [:physical-force :climb] :dodge)
           [:dodge :move :climb])
        "finds the path to the cheapest node - 1")
    (is (= (g/path-to-cheapest-node skills [:security :parry] :resist-damage)
           [:resist-damage :stress-cap :physical-force :climb :move :stealth :dexterity :security])
        "finds the path to the cheapest node - 2")
    (is (= (g/path-to-cheapest-node skills [:stress-cap :dexterity] :move)
           [:move :stealth :dexterity])
        "finds the path to the cheapest node - 3")
    (is (= (g/path-to-cheapest-node skills [:resist-damage] :climb)
           [:climb :physical-force :stress-cap :resist-damage])
        "selects the shorter path if two different-length paths have the same score"))

  #_(testing "cheapest-path-cost"
    (is (= (g/cheapest-path-cost skills [:physical-force] :move)
           2)
        "1")
    (is (= (g/cheapest-path-cost skills [:resist-damage] :leap)
           4)
        "2"))


  #_(testing "game-cost-to-make-selection"
    (is (= (g/game-cost-to-make-selection skills skill-costs [:stress-cap] :resist-damage)
           3)
        "one edge/one possibility")
    (is (= (g/game-cost-to-make-selection skills skill-costs [:stress-cap :dexterity] :move)
           4)
        "multiple edges")
    (is (= (g/game-cost-to-make-selection skills skill-costs [:resist-damage] :parry)
           6)
        "considers max path cost")
    (is (= (g/game-cost-to-make-selection skills skill-costs [] :dodge)
           2)
        "with nothing else selected, consider only the cost of the node")
    (is (= (g/game-cost-to-make-selection skills skill-costs [:init-physical] :leap)
           1)
        "with only non-connected nodes selected, only the cost of the node applies"))

  (testing "game-cost-of-board"
    (is (= (g/game-cost-of-board skills skill-costs [:init-physical])
           2)
        "one skill selected")
    (is (= (g/game-cost-of-board skills skill-costs [:security :strike])
           5)
        "two skills selected")
    (is (= (g/game-cost-of-board skills skill-costs [:stress-cap :dexterity :move])
           11)
        "three skills selected")
    (is (= (g/game-cost-of-board skills skill-costs [:security :dexterity :init-physical])
           5)
        "unconnected skills")
    (is (= (g/game-cost-of-board skills skill-costs [:parry :resist-damage :move])
           12)
        "3 skills selected")
    (is (= (g/game-cost-of-board skills skill-costs [:leap :move :stealth :dexterity])
           7)
        "follows a path properly")

    (is (= (g/game-cost-of-board skills skill-costs [:workspace :craft :repair :dismantle])
           6)
        "reversed path shouldn't score differently 1")
    (is (= (g/game-cost-of-board skills skill-costs [:dismantle :repair :craft :workspace])
           6)
        "reversed path shouldn't score differently 2"))

  (testing "selected-edges"
    (is (let [selected-edges (set (g/selected-edges skills [:leap :move]))]
          (and (contains? selected-edges [:leap :move])
               (contains? selected-edges [:move :leap])))
        "has both path directions")
    (is (let [selected-edges (set (g/selected-edges skills [:resist-damage :climb]))]
          (and (contains? selected-edges [:resist-damage :stress-cap])
               (contains? selected-edges [:stress-cap :resist-damage])

               (contains? selected-edges [:stress-cap :physical-force])
               (contains? selected-edges [:physical-force :stress-cap])

               (contains? selected-edges [:physical-force :climb])
               (contains? selected-edges [:climb :physical-force])))
        "has all pairs in a path"))

  (testing "filter-single-direction"
    (is (=  (g/filter-single-direction [[:a :b] [:c :d] [:b :a] [:d :c]])
            [[:a :b] [:c :d]]))))
