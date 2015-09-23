(ns base-raiders.subs-test
  (:require
    [cljs.test :refer-macros [deftest testing is]]
    [base-raiders.subs :as subs]))


(deftest subscription-handlers
  (testing "current-score-sub"
    (is (= 1 1)
        "does something")))
