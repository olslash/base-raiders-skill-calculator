(ns base-raiders.views
    (:require
      [clojure.string :refer [join]]
      [re-frame.core :as re-frame :refer [subscribe dispatch]]
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
                     :stress-cap-h   [0 1]
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





(defn node [{:keys [x y text]}]
  (let [node-scale 20
        text-x-offset 60
        text-y-offset 10
        shape (map (fn [[pt-x pt-y]]
                     [(-> pt-x
                          (* node-scale)
                          (+ x))
                      (-> pt-y
                          (* node-scale)
                          (+ y))])
                   [[0 1] [1 2] [5 2] [6 1] [5 0] [1 0]])]
    [:g {:style (:node styles)}
     [:polygon {:points (join " " (map #(join "," %) shape))}]

     [:g {:style (:label styles)}
      [:text {:x (+ text-x-offset x) :y (+ text-y-offset y) :text-anchor "middle"}
       [:tspan {:dy "1em"} text]]]]))

(defn edge [{:keys [x1 x2 y1 y2]}]
  (let [x-scale 60
        y-scale 20]
    [:g {:style (:edge styles)}
     [:line {:x1 (+ x-scale x1)
             :x2 (+ x-scale x2)
             :y1 (+ y-scale y1)
             :y2 (+ y-scale y2)}]]))



(defn grid [node-positions graph skill-labels]
  (let [x-scale 200
        y-scale 100]
    (into [:svg {:height 1000
                 :width  1000}]

          ; edges
          [(for [[start-node neighbors] graph]
             (let [connected-nodes (keys neighbors)]
               (for [neighbor connected-nodes]
                 ^{:key (str start-node neighbor)} [edge {:x1 (* x-scale (first (start-node node-positions)))
                                                          :y1 (* y-scale (second (start-node node-positions)))
                                                          :x2 (* x-scale (first (neighbor node-positions)))
                                                          :y2 (* y-scale (second (neighbor node-positions)))}])))

           ; nodes
           (for [[skill [x y]] node-positions]
             ^{:key (str x y)} [node {:x    (* x x-scale)
                                      :y    (* y y-scale)
                                      :text (skill skill-labels)}])])))


(defn test-panel []
  (let [score (subscribe [:current-score])]
    (fn []
      (grid node-positions db/skills db/skill-labels)


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
