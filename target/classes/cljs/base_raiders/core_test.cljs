(ns base-raiders.core-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [base-raiders.graph :as g]))

(def skills {:resist-damage  {:stress-cap 1}
             :stress-cap     {:physical-force 2}
             :physical-force {:climb 1 :leap 1}
             :climb          {:move 1}
             :leap           {:move 1 :physical-force :1}
             :move           {:dodge 0 :stealth :2}
             :dodge          {:move 0}
             :stealth        {:move 2 :dexterity 1}
             :dexterity      {:stealth 1 :security 1 :strike 2}
             :strike         {:parry 0 :dexterity 2}})





(deftest graph-search
  (testing "neighbors"
    (is (= (g/neighbors skills :move)
           [:dodge :stealth])
        "finds neighbors of a node")
    (is (= (g/neighbors skills :not-in-graph)
           nil)
        "returns nil if the node is not found"))

  (testing "move-cost"
    (is (= (g/move-cost skills :stealth :dodge)
           nil)
        "returns nil if no path exists")
    (is (= (g/move-cost skills :climb :climb)
           0)
        "returns 0 for a node to itself")
    (is (= (g/move-cost skills :dexterity :strike)
           2)
        "gives the correct cost"))

  (testing "path-between"
    (is (= (g/path-between skills :move :move)
           [:move])
        "correct result for a node to itself")
    #_(is (= (g/path-between skills :move :init-physical)
           nil)
        "correct result if no path is found")
    #_(is (= (g/path-between skills :resist-damage :leap)
           [:resist-damage :stress-cap :physical-force :leap])
        "correct path with one possibility")
    #_(is (= (g/path-between skills :resist-damage :climb)
           [:resist-damage :stress-cap :physical-force :climb])
        "correct path with one possibility - 2")
    #_(is (let [path (g/path-between skills :resist-damage :move)]
          (or (= path [:resist-damage :stress-cap :physical-force :climb :move])
              (= path [:resist-damage :stress-cap :physical-force :leap :move])))
        "correct path with more than one possibility")))
