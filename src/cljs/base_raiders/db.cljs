(ns base-raiders.db)

(def skills {:resist-damage  {:stress-cap-h 1}
             :stress-cap-h     {:physical-force 2
                              :resist-damage 1}
             :physical-force {:climb 1 :leap 1
                              :stress-cap-h 2}
             :climb          {:move 1 :physical-force 1}
             :leap           {:move 1 :physical-force 1}
             :move           {:dodge 0 :stealth 2
                              :climb 1 :leap 1}
             :dodge          {:move 0}
             :stealth        {:move 2 :dexterity 1}
             :dexterity      {:stealth 1 :security 1 :strike 2}
             :strike         {:parry 0 :dexterity 2}
             :parry          {:strike 0}
             :security       {:dexterity 1 :notice 1}
             :notice         {:security 1 :shoot 2}
             :shoot          {:notice 2}
             :init-physical  {:init-mental 2 :init-social 2}
             :init-mental    {:init-physical 2 :init-social 2}
             :init-social    {:init-physical 2 :init-mental 2}})

(def skill-costs {:resist-damage  2
                  :stress-cap-h     2
                  :physical-force 1
                  :climb          1
                  :leap           1
                  :move           1
                  :dodge          2
                  :stealth        1
                  :dexterity      1
                  :strike         1
                  :parry          1
                  :security       1
                  :notice         1
                  :shoot          2
                  :init-physical  2
                  :init-mental    2
                  :init-social    2})

(def skill-labels {:resist-damage  "Resist Damage"
                   :stress-cap-h   "Stress Cap. [Health]"
                   :physical-force "Physical Force"
                   :climb          "Climb"
                   :leap           "Leap"
                   :move           "Move"
                   :dodge          "Dodge"
                   :stealth        "Stealth"
                   :dexterity      "Dexterity"
                   :strike         "Strike"
                   :parry          "Parry"
                   :security       "Security"
                   :notice         "Notice"
                   :shoot          "Shoot"
                   :init-physical  "Initiative [Physical]"
                   :init-mental    "Initiative [Mental]"
                   :init-social    "Initiative [Social]"})

(def max-path-cost 4)

(def default-db
  {:name        "Base Raiders Skills"
   :skills       skills
   :skill-costs  skill-costs
   :skill-labels skill-labels
   :selected     [:security :shoot :notice :leap :resist-damage :parry]})