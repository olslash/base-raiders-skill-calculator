(ns base-raiders.handlers
    (:require [re-frame.core :as re-frame]
              [re-frame.middleware :refer [after]]
              [base-raiders.db :as db]
              [base-raiders.routes :as routes]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/register-handler
  :set-skills
  (fn [db [_ skills]]
    (let []
      (assoc db :selected skills))))


(re-frame/register-handler
  :toggle-skill
  (after (fn [db]
           (routes/update-url-token (str "?skills=" (:selected db))))) ; update url

  (fn [db [_ skill]]
    (let [selected (:selected db)
          new-db   (assoc db :selected
                             (if (contains? (set selected) skill)
                               (vec (remove #(= skill %) selected))      ; remove
                               (conj selected skill)))]
      new-db)))                     ; add


