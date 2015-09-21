(ns base-raiders.core-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [base-raiders.graph :as g]))

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

  #_(testing "closest node"
    (is (= (g/path-to-closest-node skills [:physical-force :climb] :dodge)
           [:dodge :move :climb])
        "finds the closest node - 1")
    (is (= (g/path-to-closest-node skills [:security :parry] :resist-damage)
           [:resist-damage :stress-cap :physical-force :climb :move :stealth :dexterity :security])
        "finds the closest node - 2"))


  #_(testing "game-cost-of-selection"
    (is (= (g/game-cost-of-selection skills skill-costs [:stress-cap] :resist-damage)
           3)
        "one edge/one possibility")
    (is (= (g/game-cost-of-selection skills skill-costs [:stress-cap :dexterity] :move)
           4)
        "multiple edges")
    #_(is (= (g/game-cost-of-selection skills skill-costs [:resist-damage] :parry)
           6)
        "considers max path cost")
    #_(is (= (g/game-cost-of-selection skills skill-costs (g/shortest-path skills [] :dodge))
           2)
        "with nothing else selected, consider only the cost of the node")
    #_(is (= (g/game-cost-of-selection skills skill-costs (g/shortest-path skills [:init-physical] :stress-cap))
           2)
        "with only non-connected nodes selected, only the cost of the node applies")))
