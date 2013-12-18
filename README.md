cljs-breakout
=============

Simple breakout clone in clojurescript to test out my workflow

Goals:
------

* Fast decent TDD at least for the core logic, with autotest
* Fast automatic compilation to cljs
* Play with David Nolen's description of separating events and logic with core.async

To make go:
-----------
Create a hard link for core files (game.cljs, linalg.cljs) in src/clj
as a .clj file. This lets you use regular repl/midje/autotest. Obviously
any of the files you hard link need to be clj/cljs cross compatible.

Run lein cljsbuild auto breakout in one window, and a regular lein repl
with midje autotest in another. Best of both worlds and fast :-)

