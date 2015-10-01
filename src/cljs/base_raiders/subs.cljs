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
  :skills
  (fn [db _]
    (reaction (:skills @db))))

(register-sub
  :skill-costs
  (fn [db _]
    (reaction (:skill-costs @db))))

(register-sub
  :skill-labels
  (fn [db _]
    (reaction (:skill-labels @db))))

(register-sub
  :selected-skills
  (fn [db _]
    (reaction (:selected @db))))

(register-sub
  :selected-edges
  (fn [db _]
    (reaction
      (let [skills (get-in @db [:skills])
            selected-skills (get-in @db [:selected])]
        (g/filter-single-direction
          (g/selected-edges skills selected-skills))))))

(register-sub
  :current-score
  (fn [db _]
    (reaction
      (let [selected-skills (get-in @db [:selected])]
        #_(print (str "selected skills in sub:" selected-skills))
        (g/game-cost-of-board db/skills db/skill-costs selected-skills)))))
