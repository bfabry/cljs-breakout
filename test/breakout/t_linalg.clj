(ns breakout.t_linalg
  (:use midje.sweet)
  (:require [breakout.linalg :as linalg]))

(def screen {:width 100 :height 100})

(def square-at-origin {:position [0 0] :width 10 :height 10})
(fact "can detect ball collisions"
      (linalg/collisions-with square-at-origin {:position [0 10] :radius 5}) => #{:top}
      (linalg/collisions-with square-at-origin {:position [0 -10] :radius 5}) => #{:bottom}
      (linalg/collisions-with square-at-origin {:position [-10 0] :radius 5}) => #{:left}
      (linalg/collisions-with square-at-origin {:position [10 0] :radius 5}) => #{:right}
      (linalg/collisions-with square-at-origin {:position [11 0] :radius 5}) => set()
      (linalg/collisions-with square-at-origin {:position [-1 1] :radius 5}) => #{:top :left}
      )

(fact "can see an intersection"
      (linalg/intersects? {:position [-10 0] :radius 5} [[0 0] [10 0]]) => false
      (linalg/intersects? {:position [-10 0] :radius 5} [[0 0] [0 -10]]) => true)

(fact "can get the magnitude of a vector"
      (linalg/magnitude [5 5]) => (roughly 7.07))

(fact "can get dot product of two vectors"
      (linalg/dot [3 4] [2 4]) => 22)

(fact "can get the vector from point a to point b"
      (linalg/segment-vec [0 0] [5 10]) => [5 10])
