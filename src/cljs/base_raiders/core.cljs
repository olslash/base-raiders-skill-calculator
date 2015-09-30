(ns base-raiders.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [base-raiders.graph]
              [base-raiders.handlers]
              [base-raiders.subs]
              [base-raiders.routes :as routes]
              [base-raiders.views :as views]))

(.initializeTouchEvents js/React true)

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
