(ns breakout.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [goog.style :as style]
            [crate.core :as crate]
            [clojure.browser.repl :as repl]
            [breakout.game :as game]
            [cljs.core.async :refer [put! chan <! close! timeout sliding-buffer]]))

(defn log-obj [obj]
  (.log js/console (clj->js obj))
  obj)

(def left-key 37)
(def right-key 39)

(defn capture-kb-events [element ev-type]
  (let [out (chan)]
    (events/listen element ev-type
                   (fn [e]
                     (cond
                       (= (.-keyCode e) left-key) (put! out :left)
                       (= (.-keyCode e) right-key) (put! out :right))))
    out))

(defn keydowns [element]
  (capture-kb-events element "keydown"))

(defn keyups [element]
  (capture-kb-events element "keyup"))

(def game-tick-channel
  (let [out (chan)]
    (go
      (loop [t 0]
        (>! out t)
        (<! (timeout 10))
        (recur (+ t 10))))
    out))

(defn run-game [element]
  (let [keydowns-chan (keydowns element)
        keyups-chan (keyups element)
        game-states (chan (sliding-buffer 2))]
    (go
      (loop [state game/initial-game]
        (put! game-states state)
        (recur (alt! keydowns-chan ([v] (game/process-keydown state v))
                     keyups-chan ([v] (game/process-keyup state v))
                     game-tick-channel ([v] (game/process-gametick state v))))))
    game-states))

(defn set-el-pos [el screen pos]
  (style/setPosition el (pos 0) (- (screen :height) (pos 1))))

(.appendChild (dom/getElement "body") (crate/html [:div.breakout {:id "gameboard"}
                                                   [:div.player {:id "player1"}]
                                                   [:div.ball {:id "ball1"}]]))

(defn set-size [el obj]
  (apply style/setSize [el (obj :width) (obj :height)]))

(defn set-radius [el {w :width}]
  (style/setStyle el "-webkit-border-radius" (/ w 2.0))
  (style/setStyle el "-moz-border-radius" (/ w 2.0))
  (style/setStyle el "border-radius" (/ w 2.0)))


(defn render-gameboard [board-el {:keys [ball screen player] :as state}]
  (set-size board-el screen)
  (set-size (dom/getElement (player :id)) player)
  (set-size (dom/getElement (ball :id)) ball)
  (set-radius (dom/getElement (ball :id)) ball)
  (set-el-pos (dom/getElement (player :id)) screen (player :position))
  (set-el-pos (dom/getElement (ball :id)) screen (ball :position)))

(let [game-states (run-game (dom/getElement "body"))]
  (go (loop []
        (render-gameboard (dom/getElement "gameboard") (<! game-states))
        (recur))))

