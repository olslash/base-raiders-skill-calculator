// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__7864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto__){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto__){
return (function (state_11300){
var state_val_11301 = (state_11300[(1)]);
if((state_val_11301 === (7))){
var inst_11285 = (state_11300[(2)]);
var state_11300__$1 = (function (){var statearr_11302 = state_11300;
(statearr_11302[(7)] = inst_11285);

return statearr_11302;
})();
var statearr_11303_11323 = state_11300__$1;
(statearr_11303_11323[(2)] = null);

(statearr_11303_11323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (1))){
var state_11300__$1 = state_11300;
var statearr_11304_11324 = state_11300__$1;
(statearr_11304_11324[(2)] = null);

(statearr_11304_11324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (4))){
var inst_11272 = (state_11300[(8)]);
var inst_11272__$1 = (state_11300[(2)]);
var inst_11273 = cljs.core.meta.call(null,inst_11272__$1);
var inst_11274 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_11273);
var state_11300__$1 = (function (){var statearr_11305 = state_11300;
(statearr_11305[(8)] = inst_11272__$1);

return statearr_11305;
})();
if(cljs.core.truth_(inst_11274)){
var statearr_11306_11325 = state_11300__$1;
(statearr_11306_11325[(1)] = (5));

} else {
var statearr_11307_11326 = state_11300__$1;
(statearr_11307_11326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (6))){
var inst_11281 = cljs.core.async.timeout.call(null,(0));
var state_11300__$1 = state_11300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11300__$1,(9),inst_11281);
} else {
if((state_val_11301 === (3))){
var inst_11298 = (state_11300[(2)]);
var state_11300__$1 = state_11300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11300__$1,inst_11298);
} else {
if((state_val_11301 === (12))){
var inst_11272 = (state_11300[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11300,(11),Object,null,(10));
var inst_11293 = re_frame.handlers.handle.call(null,inst_11272);
var state_11300__$1 = state_11300;
var statearr_11308_11327 = state_11300__$1;
(statearr_11308_11327[(2)] = inst_11293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (2))){
var state_11300__$1 = state_11300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11300__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_11301 === (11))){
var inst_11286 = (state_11300[(2)]);
var inst_11287 = re_frame.router.purge_chan.call(null);
var inst_11288 = re_frame$router$router_loop.call(null);
var inst_11289 = (function(){throw inst_11286})();
var state_11300__$1 = (function (){var statearr_11309 = state_11300;
(statearr_11309[(9)] = inst_11287);

(statearr_11309[(10)] = inst_11288);

return statearr_11309;
})();
var statearr_11310_11328 = state_11300__$1;
(statearr_11310_11328[(2)] = inst_11289);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (9))){
var inst_11283 = (state_11300[(2)]);
var state_11300__$1 = state_11300;
var statearr_11311_11329 = state_11300__$1;
(statearr_11311_11329[(2)] = inst_11283);

(statearr_11311_11329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (5))){
var inst_11276 = reagent.core.flush.call(null);
var inst_11277 = cljs.core.async.timeout.call(null,(20));
var state_11300__$1 = (function (){var statearr_11312 = state_11300;
(statearr_11312[(11)] = inst_11276);

return statearr_11312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11300__$1,(8),inst_11277);
} else {
if((state_val_11301 === (10))){
var inst_11295 = (state_11300[(2)]);
var state_11300__$1 = (function (){var statearr_11313 = state_11300;
(statearr_11313[(12)] = inst_11295);

return statearr_11313;
})();
var statearr_11314_11330 = state_11300__$1;
(statearr_11314_11330[(2)] = null);

(statearr_11314_11330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11301 === (8))){
var inst_11279 = (state_11300[(2)]);
var state_11300__$1 = state_11300;
var statearr_11315_11331 = state_11300__$1;
(statearr_11315_11331[(2)] = inst_11279);

(statearr_11315_11331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7864__auto__))
;
return ((function (switch__7802__auto__,c__7864__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__7803__auto__ = null;
var re_frame$router$router_loop_$_state_machine__7803__auto____0 = (function (){
var statearr_11319 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11319[(0)] = re_frame$router$router_loop_$_state_machine__7803__auto__);

(statearr_11319[(1)] = (1));

return statearr_11319;
});
var re_frame$router$router_loop_$_state_machine__7803__auto____1 = (function (state_11300){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e11320){if((e11320 instanceof Object)){
var ex__7806__auto__ = e11320;
var statearr_11321_11332 = state_11300;
(statearr_11321_11332[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11333 = state_11300;
state_11300 = G__11333;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__7803__auto__ = function(state_11300){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__7803__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__7803__auto____1.call(this,state_11300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__7803__auto____0;
re_frame$router$router_loop_$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__7803__auto____1;
return re_frame$router$router_loop_$_state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto__))
})();
var state__7866__auto__ = (function (){var statearr_11322 = f__7865__auto__.call(null);
(statearr_11322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto__);

return statearr_11322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto__))
);

return c__7864__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});
