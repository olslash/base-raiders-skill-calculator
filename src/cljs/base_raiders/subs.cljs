(ns base-raiders.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame :refer [register-sub]]))

(register-sub
 :name
 (fn [db]
   (reaction (:name @db))))

(register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))


(defn current-score-sub
  [db]
  (let [selected (get-in @db :selected)]))

(register-sub
  :current-score
  (fn [db _]
    (reaction (current-score-sub @db))))

