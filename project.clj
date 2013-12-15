(defproject breakout "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2080"]
                 [crate "0.2.4"]
                 [midje "1.6-beta1"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]]

  :plugins [[lein-cljsbuild "1.0.1-SNAPSHOT"]
            [lein-midje "3.1.1"]
            [com.cemerick/clojurescript.test "0.2.1"]
            [com.cemerick/austin "0.1.3"]]

  :source-paths ["src/clj" "test"]

  :cljsbuild {
    :builds [{:id "breakout"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "breakout.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
