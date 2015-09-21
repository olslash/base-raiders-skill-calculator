(defproject base-raiders "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]
                 [secretary "1.2.3"]
                 [aysylu/loom "0.5.4"]
                 [figwheel "0.3.6"]
                 [figwheel-sidecar "0.3.6"]]

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target" 
                                    "test/js" ]
  
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]

                        :figwheel {:on-jsload "base-raiders.core/mount-root"
                                   :nrepl-port 7888}

                        :compiler {:main base-raiders.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :source-map-timestamp true}}

                       {:id "test"
                        :source-paths ["src/cljs" "test/cljs"]
                        :notify-command ["phantomjs" "test/unit-test.js" "test/unit-test.html"]
                        :compiler {:optimizations :whitespace
                                   :pretty-print true
                                   :output-to "test/js/app_test.js"
                                   :warnings {:single-segment-namespace false}}}

                       {:id "min"
                        :source-paths ["src/cljs"]
                        :compiler {:main base-raiders.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
