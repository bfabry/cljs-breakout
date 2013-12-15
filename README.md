cljs-breakout
=============

Simple breakout clone in clojurescript to test out my workflow

.h1 Goals

* Fast decent TDD at least for the core logic, with autotest
* Fast automatic compilation to cljs
* Play with core.async, separate i/o, presentation, and logic.

Delete anything in cljs that's also in clj, and hard link it from the
clj folder with a .cljs extension. Ugly, but works for now

Run lein cljsbuilt auto breakout in one window, and a regular lein repl
with midje autotest in another. Best of both worlds and fast :-)

