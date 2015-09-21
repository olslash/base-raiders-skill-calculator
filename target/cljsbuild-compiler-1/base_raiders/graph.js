// Compiled by ClojureScript 0.0-3211 {}
goog.provide('base_raiders.graph');
goog.require('cljs.core');
base_raiders.graph.skills = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dodge","dodge",-1556666427),new cljs.core.Keyword(null,"physical-force","physical-force",-1879630490),new cljs.core.Keyword(null,"init-physical","init-physical",-2001457878),new cljs.core.Keyword(null,"climb","climb",-1345384598),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"init-mental","init-mental",-714921330),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"dexterity","dexterity",-1437655148),new cljs.core.Keyword(null,"init-social","init-social",-1702534278),new cljs.core.Keyword(null,"parry","parry",1604471676),new cljs.core.Keyword(null,"leap","leap",-97645251),new cljs.core.Keyword(null,"stress-cap","stress-cap",401347453),new cljs.core.Keyword(null,"stealth","stealth",-1775911138),new cljs.core.Keyword(null,"resist-damage","resist-damage",681307391)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"climb","climb",-1345384598),(1),new cljs.core.Keyword(null,"leap","leap",-97645251),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-mental","init-mental",-714921330),(2),new cljs.core.Keyword(null,"init-social","init-social",-1702534278),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),(1),new cljs.core.Keyword(null,"physical-force","physical-force",-1879630490),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dodge","dodge",-1556666427),(0),new cljs.core.Keyword(null,"stealth","stealth",-1775911138),(2),new cljs.core.Keyword(null,"climb","climb",-1345384598),(1),new cljs.core.Keyword(null,"leap","leap",-97645251),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-physical","init-physical",-2001457878),(2),new cljs.core.Keyword(null,"init-social","init-social",-1702534278),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parry","parry",1604471676),(0),new cljs.core.Keyword(null,"dexterity","dexterity",-1437655148),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stealth","stealth",-1775911138),(1),new cljs.core.Keyword(null,"security","security",886963079),(1),new cljs.core.Keyword(null,"strike","strike",-1173815471),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-physical","init-physical",-2001457878),(2),new cljs.core.Keyword(null,"init-mental","init-mental",-714921330),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strike","strike",-1173815471),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),(1),new cljs.core.Keyword(null,"physical-force","physical-force",-1879630490),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physical-force","physical-force",-1879630490),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),(2),new cljs.core.Keyword(null,"dexterity","dexterity",-1437655148),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stress-cap","stress-cap",401347453),(1)], null)]);
base_raiders.graph.skill_costs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dodge","dodge",-1556666427),new cljs.core.Keyword(null,"physical-force","physical-force",-1879630490),new cljs.core.Keyword(null,"init-physical","init-physical",-2001457878),new cljs.core.Keyword(null,"climb","climb",-1345384598),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"init-mental","init-mental",-714921330),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"dexterity","dexterity",-1437655148),new cljs.core.Keyword(null,"init-social","init-social",-1702534278),new cljs.core.Keyword(null,"leap","leap",-97645251),new cljs.core.Keyword(null,"stress-cap","stress-cap",401347453),new cljs.core.Keyword(null,"stealth","stealth",-1775911138),new cljs.core.Keyword(null,"resist-damage","resist-damage",681307391)],[(2),(1),(2),(1),(1),(2),(1),(1),(2),(1),(2),(1),(2)]);
base_raiders.graph.max_path_cost = (4);
base_raiders.graph.neighbors = (function base_raiders$graph$neighbors(graph,node){

if(cljs.core.truth_(graph.call(null,node))){
return cljs.core.vec.call(null,cljs.core.keys.call(null,graph.call(null,node)));
} else {
return null;
}
});
base_raiders.graph.edge_cost = (function base_raiders$graph$edge_cost(graph,from,to){

var cost = to.call(null,from.call(null,graph));
if(cljs.core._EQ_.call(null,from,to)){
return (0);
} else {
if((cost == null)){
return (0);
} else {
return cost;

}
}
});
/**
 * http://codereview.stackexchange.com/questions/15961/depth-first-search-algorithm-in-clojure
 */
base_raiders.graph.dfs = (function base_raiders$graph$dfs(graph,goal){
return (function base_raiders$graph$dfs_$_search(path,visited){
var current = cljs.core.peek.call(null,path);
if(cljs.core._EQ_.call(null,goal,current)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null);
} else {
return cljs.core.mapcat.call(null,((function (current){
return (function (p1__21452_SHARP_){
return base_raiders$graph$dfs_$_search.call(null,cljs.core.conj.call(null,path,p1__21452_SHARP_),cljs.core.conj.call(null,visited,p1__21452_SHARP_));
});})(current))
,cljs.core.remove.call(null,visited,cljs.core.keys.call(null,graph.call(null,current))));
}
});
});
/**
 * Returns a lazy sequence of all directed paths from start to goal
 * within graph.
 */
base_raiders.graph.paths_between = (function base_raiders$graph$paths_between(graph,start,goal){
return base_raiders.graph.dfs.call(null,graph,goal).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),cljs.core.PersistentHashSet.fromArray([start], true));
});
base_raiders.graph.cost_of_path_movement = (function base_raiders$graph$cost_of_path_movement(graph,path){

var x__4654__auto__ = base_raiders.graph.max_path_cost;
var y__4655__auto__ = cljs.core.first.call(null,cljs.core.reduce.call(null,((function (x__4654__auto__){
return (function (p__21455,next){
var vec__21456 = p__21455;
var cost = cljs.core.nth.call(null,vec__21456,(0),null);
var prev = cljs.core.nth.call(null,vec__21456,(1),null);
var new_cost = (cost + base_raiders.graph.edge_cost.call(null,graph,prev,next));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_cost,next], null);
});})(x__4654__auto__))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.first.call(null,path)], null),path));
return ((x__4654__auto__ < y__4655__auto__) ? x__4654__auto__ : y__4655__auto__);
});
base_raiders.graph.compare_paths = (function base_raiders$graph$compare_paths(graph,path1,path2){

var cost1 = base_raiders.graph.cost_of_path_movement.call(null,graph,path1);
var cost2 = base_raiders.graph.cost_of_path_movement.call(null,graph,path2);
return cljs.core.compare.call(null,cost1,cost2);
});
base_raiders.graph.cheapest_path = (function base_raiders$graph$cheapest_path(graph,from,to){

var paths = base_raiders.graph.paths_between.call(null,graph,from,to);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,paths),(1))){
return cljs.core.first.call(null,paths);
} else {
return cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core.partial.call(null,base_raiders.graph.compare_paths,graph),paths));
}
});
