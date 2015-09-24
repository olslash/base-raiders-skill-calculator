(ns base-raiders.views
    (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]))

;; --------------------
(defn home-panel []
  (let [name (subscribe [:name])]
    (fn []
      [:div (str "Hello from " @name ". This is the Home Page.")
       [:div [:a {:href "#/about"} "go to About Page"]]])))

(defn about-panel []
  (fn []
    [:div "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))



(defn test-panel []
  (let [score (subscribe [:current-score])]
    (fn []
      [:div "The score is" @score
       [:div {:on-click #(do (print "onclick")
                             (dispatch [:set-selected-skills [:shoot :move :leap]]))} "go to Home Page"]])))



;; --------------------
(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :test-panel [] [test-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      (panels @active-panel))))
