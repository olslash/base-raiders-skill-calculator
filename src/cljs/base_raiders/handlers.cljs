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

(re-frame/register-handler
  :set-selected-skills
  (fn [db [_ skills]]
    (print (str "handler" skills))
    (assoc db :selected skills)))