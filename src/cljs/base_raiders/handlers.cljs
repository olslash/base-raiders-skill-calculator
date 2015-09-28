(ns base-raiders.handlers
    (:require [re-frame.core :as re-frame]
              [base-raiders.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

#_(re-frame/register-handler
  :select-skill
  (fn [db [_ skill]]
    (conj skill (:selected db))))

#_(re-frame/register-handler
  :deselect-skill
  (fn [db [_ skill]]
    (vec (remove #(= skill %) (:selected db)))))

(re-frame/register-handler
  :toggle-skill
  (fn [db [_ skill]]
    (let [selected (:selected db)]
      (assoc db :selected
                (if (contains? (set selected) skill)
                  (vec (remove #(= skill %) selected))      ; remove
                  (conj selected skill))))))                     ; add
