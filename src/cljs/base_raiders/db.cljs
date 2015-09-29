(ns base-raiders.db)

(def skills {:resist-damage  {:stress-cap-h 1}
             :stress-cap-h   {:physical-force 2
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
             :init-social    {:init-physical 2 :init-mental 2}

             :examine        {:information 1}
             :information    {:examine 1 :research 1}
             :research       {:information 1}

             :languages      {}
             :treat-scope    {}
             :environment    {}
             :transport      {}

             :stress-cap-r   {:esteem 1}
             :esteem         {:stress-cap-r 1 :networking 1}
             :networking     {:esteem 1 :wealth 1 :influence 1 :conversation 1}
             :wealth         {:networking 1}
             :influence      {:networking 1}
             :conversation   {:networking 1 :convince 0 :insight 1}
             :insight        {:conversation 1}
             :convince       {:conversation 0 :inspire 1 :guile 1}
             :guile          {:convince 1 :disguise 1}
             :disguise       {:guile 1}
             :inspire        {:convince 1 :menace 1 :willpower 1}
             :menace         {:inspire 1}
             :willpower      {:inspire 1 :stress-cap-c 2}
             :stress-cap-c   {:willpower 2}

             :dismantle      {:repair 0}
             :repair         {:dismantle 0 :craft 1}
             :craft          {:repair 1 :workspace 1}
             :workspace      {:craft 1}})

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
                  :init-social    2

                  :examine        1
                  :information    1
                  :research       1

                  :languages      1
                  :treat-scope    2
                  :environment    1
                  :transport      1

                  :stress-cap-r   2
                  :esteem         1
                  :networking     1
                  :wealth         1
                  :influence      1
                  :conversation   1
                  :insight        1
                  :convince       1
                  :guile          1
                  :disguise       1
                  :inspire        1
                  :menace         1
                  :willpower      1
                  :stress-cap-c   2

                  :dismantle      1
                  :repair         1
                  :craft          1
                  :workspace      1})

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
                   :init-social    "Initiative [Social]"

                   :examine        "Examine"
                   :information    "Information"
                   :research       "Research"

                   :languages      "Languages"
                   :treat-scope    "Treatment [Scope]"
                   :environment    "Environment"
                   :transport      "Transport"

                   :stress-cap-r   "Stress Cap. [Reputation]"
                   :esteem         "Esteem"
                   :networking     "Networking"
                   :wealth         "Wealth"
                   :influence      "Influence"
                   :conversation   "Conversation"
                   :insight        "Insight"
                   :convince       "Convince"
                   :guile          "Guile"
                   :disguise       "Disguise"
                   :inspire        "Inspire"
                   :menace         "Menace"
                   :willpower      "Willpower"
                   :stress-cap-c   "Stress Cap. [Composure]"

                   :dismantle      "Dismantle"
                   :repair         "Repair"
                   :craft          "Craft"
                   :workspace      "Workspace"})

(def max-path-cost 4)

(def default-db
  {:name         "Base Raiders Skills"
   :skills       skills
   :skill-costs  skill-costs
   :skill-labels skill-labels
   :selected     []})