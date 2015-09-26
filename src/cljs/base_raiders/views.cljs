(ns base-raiders.views
    (:require [re-frame.core :as re-frame :refer [subscribe dispatch]]
              [base-raiders.db :as db]))

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


(def styles {:node  {:stroke       "#333"
                     :stroke-width "1px"
                     :fill         "#DDD"}

             :label {:fill "#333"}

             :edge  {:stroke       "#333"
                     :stroke-width "1px"}})


(def node-positions {:init-physical  [1 0]
                     :init-mental    [1 1]
                     :init-social    [2 1]
                     :resist-damage  [0 0]
                     :stress-cap     [0 1]
                     :physical-force [0 2]
                     :leap           [1 2]
                     :climb          [0 3]
                     :move           [1 3]
                     :dodge          [2 3]
                     :stealth        [1 4]
                     :parry          [2 4]
                     :dexterity      [1 5]
                     :strike         [2 5]
                     :security       [0 5]
                     :notice         [0 6]
                     :shoot          [2 6]})





(defn node [{:keys [height width x y]}]
  [:g {:style (:node styles)}
   [:rect {:height height
           :width  width
           :x      x
           :y      y}]
   #_[:g {:style (:label styles)}
    [:text
     [:tspan {:dy "1em" :x "1"} "this is the text"] ]]])

(defn edge [{:keys [x1 x2 y1 y2]}]
  [:g {:style (:edge styles)}
   [:line {:x1 x1
           :x2 x2
           :y1 y1
           :y2 y2}]])



(defn grid [node-positions graph]
  (into [:svg {:height 1000
               :width 1000}]

        [(for [[_ [x y]] node-positions]                    ; nodes
           (node {:height 10
                  :width  10
                  :x      (* x 50)
                  :y      (* y 50)}))
         (for [[node neighbors] graph]
           (let [adjacent-nodes (keys neighbors)]
             (into [:g] (map #(edge {:x1 (* 50 (first (node node-positions)))
                                     :y1 (* 50 (second (node node-positions)))
                                     :x2 (* 50 (first (% node-positions)))
                                     :y2 (* 50 (second (% node-positions)))})
                             adjacent-nodes))))]))


(defn test-panel []
  (let [score (subscribe [:current-score])]
    (fn []
      (grid node-positions db/skills)


      #_[:div "The score is" @score
       [:svg {:height 1000 :width 1000}
        [node {:height 100 :width 100 :x 10 :y 10}]]
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
