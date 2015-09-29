(ns base-raiders.views
    (:require
      [clojure.string :refer [join]]
      [re-frame.core :as re-frame :refer [subscribe dispatch]]))

;; --------------------
#_(defn home-panel []
  (let [name (subscribe [:name])]
    (fn []
      [:div (str "Hello from " @name ". This is the Home Page.")
       [:div [:a {:href "#/about"} "go to About Page"]]])))

#_(defn about-panel []
  (fn []
    [:div "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))


(def styles {:grid          {:margin "25px"}

             :node          {:stroke       "#333"
                             :stroke-width "1px"
                             :fill         "#DDD"}

             :node-selected {:fill "#888"}

             :label         {:fill        "#333"
                             :font-family "sans-serif"}

             :edge          {:stroke "#333"}

             :edge-0        {:stroke-width "4px"}

             :edge-1        {:stroke-width "2px"}

             :edge-2        {:stroke-width     "2px"
                             :stroke-dasharray "10,10"
                             :d                "M5 40 l215 0"}

             :edge-selected {:stroke "#D88"}})


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
                     :shoot          [2 6]
                     :examine        [0 7]
                     :information    [0 8]
                     :research       [1 8]

                     :languages      [2 7]
                     :treat-scope    [2 8]
                     :environment    [2 9]
                     :transport      [2 10]

                     :stress-cap-r   [3 8]
                     :esteem         [3 9]
                     :networking     [4 9]
                     :wealth         [4 8]
                     :influence      [5 9]
                     :conversation   [4 10]
                     :insight        [3 10]
                     :convince       [4 11]
                     :guile          [4 12]
                     :disguise       [4 13]
                     :inspire        [5 11]
                     :menace         [5 10]
                     :willpower      [5 12]
                     :stress-cap-c   [5 13]

                     :dismantle      [3 11]
                     :repair         [3 12]
                     :craft          [3 13]
                     :workspace      [3 14]})





(defn node [{:keys [x y text selected on-click]}]
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
    [:g {:on-click on-click
         :style (if selected
                  (merge (:node styles)
                         (:node-selected styles))
                  (:node styles))}
     [:polygon {:points (join " " (map #(join "," %) shape))}]

     [:g {:style (:label styles)}
      [:text {:x (+ text-x-offset x) :y (+ text-y-offset y) :text-anchor "middle"}
       [:tspan {:dy "1em"} text]]]]))

(defn edge [{:keys [x1 x2 y1 y2 selected cost]}]
  (let [x-scale 60
        y-scale 20
        style (merge (:edge styles)
                     (when selected (:edge-selected styles))
                     (case cost
                       0 (:edge-0 styles)
                       1 (:edge-1 styles)
                       2 (:edge-2 styles)))]
    [:g {:style style}
     [:line {:x1 (+ x-scale x1)
             :x2 (+ x-scale x2)
             :y1 (+ y-scale y1)
             :y2 (+ y-scale y2)}]]))



(defn grid [{:keys [node-positions graph node-labels selected-skills selected-edges]}]
  (let [x-scale 200
        y-scale 100
        already-drawn-edges   (transient #{})]
    (into [:svg {:style (:grid styles)
                 :height 2000
                 :width  1500}]

          ; edges
          [(for [[start-node neighbors] graph]
             (let [connected-nodes (keys neighbors)]
               (for [neighbor connected-nodes]
                 (when ((complement contains?) already-drawn-edges [neighbor start-node])
                   (conj! already-drawn-edges [start-node neighbor])
                   (let [cost (get-in graph [start-node neighbor])]
                     ^{:key (str start-node neighbor)} [edge {:selected (or (contains? (set selected-edges) [start-node neighbor])
                                                                            (contains? (set selected-edges) [neighbor start-node]))
                                                              :cost     cost
                                                              :x1       (* x-scale (first (start-node node-positions)))
                                                              :y1       (* y-scale (second (start-node node-positions)))
                                                              :x2       (* x-scale (first (neighbor node-positions)))
                                                              :y2       (* y-scale (second (neighbor node-positions)))}])))))

           ; nodes
           (for [[skill [x y]] node-positions]
             ^{:key (str x y)} [node {:on-click #(dispatch [:toggle-skill skill])
                                      :x        (* x x-scale)
                                      :y        (* y y-scale)
                                      :text     (skill node-labels)
                                      :selected (skill (set selected-skills))}])])))


(defn home-panel []
  (let [skill-labels    (subscribe [:skill-labels])
        skill-graph     (subscribe [:skills])
        selected-skills (subscribe [:selected-skills])
        selected-edges  (subscribe [:selected-edges])
        score           (subscribe [:current-score])]
    (fn []
      [:div
       [:div "The score is " @score]
       [grid {:node-positions node-positions
              :graph           @skill-graph
              :node-labels     @skill-labels
              :selected-skills @selected-skills
              :selected-edges  @selected-edges}]])))



;; --------------------
(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
;(defmethod panels :about-panel [] [about-panel])
;(defmethod panels :test-panel [] [test-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      (panels @active-panel))))
