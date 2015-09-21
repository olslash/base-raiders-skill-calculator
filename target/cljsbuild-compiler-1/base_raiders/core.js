// Compiled by ClojureScript 0.0-3211 {}
goog.provide('base_raiders.core');
goog.require('cljs.core');
goog.require('base_raiders.graph');
goog.require('reagent.core');
goog.require('base_raiders.views');
goog.require('base_raiders.routes');
goog.require('base_raiders.subs');
goog.require('base_raiders.handlers');
goog.require('re_frame.core');
base_raiders.core.mount_root = (function base_raiders$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_raiders.views.main_panel], null),document.getElementById("app"));
});
base_raiders.core.init = (function base_raiders$core$init(){
base_raiders.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return base_raiders.core.mount_root.call(null);
});
goog.exportSymbol('base_raiders.core.init', base_raiders.core.init);
