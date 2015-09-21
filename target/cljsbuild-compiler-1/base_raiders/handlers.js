// Compiled by ClojureScript 0.0-3211 {}
goog.provide('base_raiders.handlers');
goog.require('cljs.core');
goog.require('base_raiders.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return base_raiders.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__10351){
var vec__10352 = p__10351;
var _ = cljs.core.nth.call(null,vec__10352,(0),null);
var active_panel = cljs.core.nth.call(null,vec__10352,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
