(ns breakout.t_game
  (:use midje.sweet)
  (:require [breakout.game :as game]))

(def screen {:width 100 :height 100})

(def square-at-origin {:position [0 0] :width 10 :height 10})
(fact "can detect ball collisions"
      (game/collisions-with square-at-origin {:position [0 10] :radius 5}) => #{:top}
      (game/collisions-with square-at-origin {:position [0 -10] :radius 5}) => #{:bottom}
      (game/collisions-with square-at-origin {:position [-10 0] :radius 5}) => #{:left}
      (game/collisions-with square-at-origin {:position [10 0] :radius 5}) => #{:right}
      (game/collisions-with square-at-origin {:position [11 0] :radius 5}) => set()
      (game/collisions-with square-at-origin {:position [-1 1] :radius 5}) => #{:top :left}
      )

(fact "can see an intersection"
      (game/intersects? {:position [-10 0] :radius 5} [[0 0] [10 0]]) => false
      (game/intersects? {:position [-10 0] :radius 5} [[0 0] [0 -10]]) => true)

(fact "can get the magnitude of a vector"
      (game/magnitude [5 5]) => (roughly 7.07))

(fact "can get dot product of two vectors"
      (game/dot [3 4] [2 4]) => 22)

(fact "can get the vector from point a to point b"
      (game/segment-vec [0 0] [5 10]) => [5 10])
