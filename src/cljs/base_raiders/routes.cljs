(ns base-raiders.routes
    (:require-macros [secretary.core :refer [defroute]])
    (:import goog.History)
    (:require
      [cljs.reader :refer [read-string]]
      [secretary.core :as secretary]
      [goog.events :as events]
      [goog.history.EventType :as EventType]
      [re-frame.core :as re-frame]))

(def h (History.))

(defn hook-browser-navigation! []
  (doto h
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn update-url-token [token]
  (.replaceToken h token))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  ;; --------------------
  ;; define routes here
  (defroute "/" [query-params]
            (when-not (empty? (:skills query-params))
              (re-frame/dispatch [:set-skills (read-string (:skills query-params))]))

            (re-frame/dispatch [:set-active-panel :home-panel query-params]))

  (defroute "/about" []
    (re-frame/dispatch [:set-active-panel :about-panel]))

  (defroute "/test" []
            (re-frame/dispatch [:set-active-panel :test-panel]))

  ;; --------------------
  (hook-browser-navigation!))
