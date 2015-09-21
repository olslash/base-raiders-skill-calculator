// Compiled by ClojureScript 0.0-3211 {}
goog.provide('test_runner');
goog.require('cljs.core');
goog.require('base_raiders.core_test');
goog.require('cljs.test');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (m){
cljs.core.println.call(null,"\nRan",new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)),"assertions.");

cljs.core.println.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m),"errors.");

return (window["test-failures"] = (new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)));
}));
test_runner.runner = (function test_runner$runner(){
return cljs.test.run_block.call(null,(function (){var env21991 = cljs.test.empty_env.call(null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322));
var summary21992 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env21991,summary21992){
return (function (){
cljs.test.set_env_BANG_.call(null,env21991);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"base-raiders.core-test","base-raiders.core-test",-599122027,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10505__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10505__auto__,env21991,summary21992){
return (function (){
if((env__10505__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10505__auto__,env21991,summary21992))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return base_raiders.core_test.skills;},new cljs.core.Symbol("base-raiders.core-test","skills","base-raiders.core-test/skills",1850070391,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"base-raiders.core-test","base-raiders.core-test",-599122027,null),new cljs.core.Symbol(null,"skills","skills",-1695734343,null),"/Users/mrobb/Dev/clojure/base-raiders/test/cljs/base_raiders/core_test.cljs",12,6,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(base_raiders.core_test.skills)?base_raiders.core_test.skills.cljs$lang$test:null)])),new cljs.core.Var(function(){return base_raiders.core_test.skill_costs;},new cljs.core.Symbol("base-raiders.core-test","skill-costs","base-raiders.core-test/skill-costs",2104899238,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"base-raiders.core-test","base-raiders.core-test",-599122027,null),new cljs.core.Symbol(null,"skill-costs","skill-costs",-908073360,null),"/Users/mrobb/Dev/clojure/base-raiders/test/cljs/base_raiders/core_test.cljs",17,6,22,22,cljs.core.List.EMPTY,null,(cljs.core.truth_(base_raiders.core_test.skill_costs)?base_raiders.core_test.skill_costs.cljs$lang$test:null)])),new cljs.core.Var(function(){return base_raiders.core_test.max_path_cost;},new cljs.core.Symbol("base-raiders.core-test","max-path-cost","base-raiders.core-test/max-path-cost",-1927176370,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"base-raiders.core-test","base-raiders.core-test",-599122027,null),new cljs.core.Symbol(null,"max-path-cost","max-path-cost",961138584,null),"/Users/mrobb/Dev/clojure/base-raiders/test/cljs/base_raiders/core_test.cljs",19,6,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(base_raiders.core_test.max_path_cost)?base_raiders.core_test.max_path_cost.cljs$lang$test:null)])),new cljs.core.Var(function(){return base_raiders.core_test.graph_search;},new cljs.core.Symbol("base-raiders.core-test","graph-search","base-raiders.core-test/graph-search",1355721053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"base-raiders.core-test","base-raiders.core-test",-599122027,null),new cljs.core.Symbol(null,"graph-search","graph-search",-954828413,null),"/Users/mrobb/Dev/clojure/base-raiders/test/cljs/base_raiders/core_test.cljs",22,10,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(base_raiders.core_test.graph_search)?base_raiders.core_test.graph_search.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10505__auto__,env21991,summary21992){
return (function (){
if((env__10505__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10505__auto__,env21991,summary21992))
], null));
})());
});})(env21991,summary21992))
,((function (env21991,summary21992){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"base-raiders.core-test","base-raiders.core-test",-599122027,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env21991,summary21992))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env21991,summary21992){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary21992,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary21992),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env21991,summary21992))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env21991,summary21992){
return (function (){
cljs.test.set_env_BANG_.call(null,env21991);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary21992));

return cljs.test.clear_env_BANG_.call(null);
});})(env21991,summary21992))
], null));
})());
});
