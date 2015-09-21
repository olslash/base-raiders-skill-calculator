// Compiled by ClojureScript 0.0-3211 {}
goog.provide('base_raiders.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
base_raiders.routes.hook_browser_navigation_BANG_ = (function base_raiders$routes$hook_browser_navigation_BANG_(){
var G__10336 = (new goog.History());
goog.events.listen(G__10336,goog.history.EventType.NAVIGATE,((function (G__10336){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__10336))
);

G__10336.setEnabled(true);

return G__10336;
});
base_raiders.routes.app_routes = (function base_raiders$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__10245__auto___10345 = (function (params__10246__auto__){
if(cljs.core.map_QMARK_.call(null,params__10246__auto__)){
var map__10341 = params__10246__auto__;
var map__10341__$1 = ((cljs.core.seq_QMARK_.call(null,map__10341))?cljs.core.apply.call(null,cljs.core.hash_map,map__10341):map__10341);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10246__auto__)){
var vec__10342 = params__10246__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__10245__auto___10345);


var action__10245__auto___10346 = (function (params__10246__auto__){
if(cljs.core.map_QMARK_.call(null,params__10246__auto__)){
var map__10343 = params__10246__auto__;
var map__10343__$1 = ((cljs.core.seq_QMARK_.call(null,map__10343))?cljs.core.apply.call(null,cljs.core.hash_map,map__10343):map__10343);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10246__auto__)){
var vec__10344 = params__10246__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__10245__auto___10346);


return base_raiders.routes.hook_browser_navigation_BANG_.call(null);
});
