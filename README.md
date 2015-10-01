# Base Raiders Skill Calculator

A skill calculator for the [Base Raiders](http://www.baseraiders.com) RPG. Written with ClojureScript and [re-frame](https://github.com/Day8/re-frame). 

Based on [this page from the game manual](http://www.baseraiders.com/wp-content/uploads/2014/07/Base_Raiders_Skill.pdf).

### DEMO
[Here.](http://olslash.github.io/base-raiders-skill-calculator)

## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

### Run tests:

```
lein clean
lein cljsbuild auto test
```

## Production Build

```
lein clean
lein cljsbuild once min
```
