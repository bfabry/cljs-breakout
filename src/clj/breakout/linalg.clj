(ns breakout.linalg)

(defn square [x]
  (* x x))

(defn segment-vec [[x1 y1] [x2 y2]]
  [(- x2 x1) (- y2 y1)])

(defn magnitude [[x1 y1]]
  (Math/sqrt
    (+
     (square x1)
     (square y1))))

(defn unit-vec [[x y :as posvec]]
  [(/ x (magnitude posvec)) (/ y (magnitude posvec))])

(defn dot [[x1 y1] [x2 y2]]
  (+ (* x1 x2) (* y1 y2)))

(defn scalar-mul [[x y] c]
  [(* x c) (* y c)])

(defn add-vec [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(defn intersects? [{b-position :position b-radius :radius}
                   [[x1 y1 :as seg-start] [x2 y2 :as seg-end]]]
  (let [ball-centre [(+ (b-position 0) b-radius) (- (b-position 1) b-radius)]
        segment-vector (segment-vec [x1 y1] [x2 y2])
        ball-vector (segment-vec seg-start ball-centre)
        seg-vec-mag (magnitude segment-vector)
        proj-mag (dot ball-vector (unit-vec segment-vector))
        point-on-segment (max 0 (min seg-vec-mag proj-mag))
        segment-projection (scalar-mul (unit-vec segment-vector) point-on-segment)
        closest-point (add-vec seg-start segment-projection)
        dx (magnitude (segment-vec closest-point ball-centre))]
    (<= dx b-radius)))

(defn collisions-with [{o-position :position o-width :width o-height :height} ball]
  (let [tl-corner o-position
        tr-corner [(+ (o-position 0) o-width) (o-position 1)]
        bl-corner [(o-position 0) (- (o-position 1) o-height)]
        br-corner [(+ (o-position 0) o-width) (- (o-position 1) o-height)]

        left-segment [tl-corner bl-corner]
        right-segment [tr-corner br-corner]
        top-segment [tl-corner tr-corner]
        bottom-segment [bl-corner br-corner]]

    (cond-> #{}
      (intersects? ball left-segment) (conj :left)
      (intersects? ball right-segment) (conj :right)
      (intersects? ball top-segment) (conj :top)
      (intersects? ball bottom-segment) (conj :bottom))))

