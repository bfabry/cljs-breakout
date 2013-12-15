(ns breakout.game
  (:require [breakout.linalg :as linalg]))

(def player-speed (* 0.010 500))
(def ball-speed (* 0.015 500))

(def initial-game
  {:screen {:width 500, :height 500}
   :player {:position [225 10] :width 50 :height 10 :id "player1" :velocity {:speed 0 :x 1.0 :y 0.0}}
   :ball {:position [240 250]
          :width 20
          :height 20
          :radius 10
          :id "ball1"
          :velocity {:speed ball-speed, :x 0.6 :y -0.4}}
   :ticks-gone 0
   :keys-down #{}})

(defn process-keyup [{:keys [keys-down] :as state} keyn]
  (assoc state :keys-down (disj keys-down keyn)))

(defn process-keydown [{:keys [keys-down] :as state} keyn]
  (assoc state :keys-down (conj keys-down keyn)))


(defn new-object-position [object screen pos-delta]
  (let [current-x (get-in object [:position 0])
        current-y (get-in object [:position 1])
        new-x (+ current-x (pos-delta 0))
        new-y (+ current-y (pos-delta 1))
        width (object :width)
        height (object :height)
        screen-w (screen :width)
        screen-h (screen :height)
        maximum-x (- screen-w width)
        maximum-y screen-h
        minimum-x 0
        minimum-y height]
    [(min maximum-x (max minimum-x new-x)) (min maximum-y (max minimum-y new-y))]))

(defn move-object [{:keys [screen] :as state} object-key]
  (assoc-in state [object-key :position]
             (let [{{:keys [x y speed]} :velocity :as object} (state object-key)]
               (new-object-position object screen [(* speed x) (* speed y)]))))

(defn update-player-speed [{:keys [player keys-down] :as state}]
  (assoc-in state [:player :velocity]
            (case keys-down
              #{:right} {:speed player-speed, :x 1.0, :y 0.0}
              #{:left} {:speed player-speed, :x -1.0, :y 0.0}
              {:speed 0, :x 1.0, :y 0.0})))

(defn update-ball-velocity [{:keys [screen ball player] :as state}]
  (let [left-wall {:position [-5 (screen :height)] :width 5 :height (screen :height)}
        top-wall {:position [0 (+ (screen :height) 5)] :width (screen :width) :height 5}
        right-wall {:position [(screen :width) (screen :height)] :width 5 :height (screen :height)}
        bottom-wall {:position [0 0] :width (screen :width) :height 5}
        collisions (apply clojure.set/union
                          (map #(linalg/collisions-with % ball) [left-wall top-wall right-wall bottom-wall player]))
        ]

    (update-in state [:ball :velocity]
               (fn [{:keys [speed x y] :as velocity}]
                 (cond-> velocity
                   (collisions :top) (assoc :y (Math/abs y))
                   (collisions :bottom) (assoc :y (- (Math/abs y)))
                   (collisions :left) (assoc :x (- (Math/abs x)))
                   (collisions :right) (assoc :x (Math/abs x)))))))

(defn move-player [state]
  (-> state
      (update-player-speed)
      (move-object :player)))

(defn move-ball [state]
  (-> state
      (update-ball-velocity)
      (move-object :ball)))

(defn process-gametick [state tick]
  (-> state
      (assoc :ticks-gone tick)
      (move-player)
      (move-ball)))

