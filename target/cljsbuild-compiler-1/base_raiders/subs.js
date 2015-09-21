// Compiled by ClojureScript 0.0-3211 {}
goog.provide('base_raiders.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
