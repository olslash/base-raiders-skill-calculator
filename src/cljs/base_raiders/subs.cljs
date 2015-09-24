(ns base-raiders.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame :refer [register-sub]]
              [base-raiders.graph :as g]
              [base-raiders.db :as db]))
(enable-console-print!)

(register-sub
 :name
 (fn [db]
   (reaction (:name @db))))

(register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))


(register-sub
  :current-score
  (fn [db _]
    (reaction
      (let [selected-skills (get-in @db [:selected])]
        (print (str "selected skills in sub:" selected-skills))
        (g/game-cost-of-board db/skills db/skill-costs selected-skills)))))
