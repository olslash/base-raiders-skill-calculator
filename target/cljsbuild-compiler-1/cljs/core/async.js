// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t11339 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11339 = (function (f,fn_handler,meta11340){
this.f = f;
this.fn_handler = fn_handler;
this.meta11340 = meta11340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11339.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11341){
var self__ = this;
var _11341__$1 = this;
return self__.meta11340;
});

cljs.core.async.t11339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11341,meta11340__$1){
var self__ = this;
var _11341__$1 = this;
return (new cljs.core.async.t11339(self__.f,self__.fn_handler,meta11340__$1));
});

cljs.core.async.t11339.cljs$lang$type = true;

cljs.core.async.t11339.cljs$lang$ctorStr = "cljs.core.async/t11339";

cljs.core.async.t11339.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t11339");
});

cljs.core.async.__GT_t11339 = (function cljs$core$async$fn_handler_$___GT_t11339(f__$1,fn_handler__$1,meta11340){
return (new cljs.core.async.t11339(f__$1,fn_handler__$1,meta11340));
});

}

return (new cljs.core.async.t11339(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__11343 = buff;
if(G__11343){
var bit__5009__auto__ = null;
if(cljs.core.truth_((function (){var or__4335__auto__ = bit__5009__auto__;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return G__11343.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11343.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11343);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11343);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__11345 = arguments.length;
switch (G__11345) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__11348 = arguments.length;
switch (G__11348) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11350 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11350);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11350,ret){
return (function (){
return fn1.call(null,val_11350);
});})(val_11350,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__11352 = arguments.length;
switch (G__11352) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5220__auto___11354 = n;
var x_11355 = (0);
while(true){
if((x_11355 < n__5220__auto___11354)){
(a[x_11355] = (0));

var G__11356 = (x_11355 + (1));
x_11355 = G__11356;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11357 = (i + (1));
i = G__11357;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11361 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11361 = (function (flag,alt_flag,meta11362){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11362 = meta11362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11361.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11363){
var self__ = this;
var _11363__$1 = this;
return self__.meta11362;
});})(flag))
;

cljs.core.async.t11361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11363,meta11362__$1){
var self__ = this;
var _11363__$1 = this;
return (new cljs.core.async.t11361(self__.flag,self__.alt_flag,meta11362__$1));
});})(flag))
;

cljs.core.async.t11361.cljs$lang$type = true;

cljs.core.async.t11361.cljs$lang$ctorStr = "cljs.core.async/t11361";

cljs.core.async.t11361.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t11361");
});})(flag))
;

cljs.core.async.__GT_t11361 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t11361(flag__$1,alt_flag__$1,meta11362){
return (new cljs.core.async.t11361(flag__$1,alt_flag__$1,meta11362));
});})(flag))
;

}

return (new cljs.core.async.t11361(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t11367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11367 = (function (cb,flag,alt_handler,meta11368){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11368 = meta11368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11367.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11369){
var self__ = this;
var _11369__$1 = this;
return self__.meta11368;
});

cljs.core.async.t11367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11369,meta11368__$1){
var self__ = this;
var _11369__$1 = this;
return (new cljs.core.async.t11367(self__.cb,self__.flag,self__.alt_handler,meta11368__$1));
});

cljs.core.async.t11367.cljs$lang$type = true;

cljs.core.async.t11367.cljs$lang$ctorStr = "cljs.core.async/t11367";

cljs.core.async.t11367.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t11367");
});

cljs.core.async.__GT_t11367 = (function cljs$core$async$alt_handler_$___GT_t11367(cb__$1,flag__$1,alt_handler__$1,meta11368){
return (new cljs.core.async.t11367(cb__$1,flag__$1,alt_handler__$1,meta11368));
});

}

return (new cljs.core.async.t11367(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11370_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11370_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11371_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11371_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4335__auto__ = wport;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11372 = (i + (1));
i = G__11372;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4335__auto__ = ret;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4323__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4323__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4323__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5375__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5375__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11375){
var map__11376 = p__11375;
var map__11376__$1 = ((cljs.core.seq_QMARK_.call(null,map__11376))?cljs.core.apply.call(null,cljs.core.hash_map,map__11376):map__11376);
var opts = map__11376__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11373){
var G__11374 = cljs.core.first.call(null,seq11373);
var seq11373__$1 = cljs.core.next.call(null,seq11373);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11374,seq11373__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__11378 = arguments.length;
switch (G__11378) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7864__auto___11427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___11427){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___11427){
return (function (state_11402){
var state_val_11403 = (state_11402[(1)]);
if((state_val_11403 === (7))){
var inst_11398 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11404_11428 = state_11402__$1;
(statearr_11404_11428[(2)] = inst_11398);

(statearr_11404_11428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (1))){
var state_11402__$1 = state_11402;
var statearr_11405_11429 = state_11402__$1;
(statearr_11405_11429[(2)] = null);

(statearr_11405_11429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (4))){
var inst_11381 = (state_11402[(7)]);
var inst_11381__$1 = (state_11402[(2)]);
var inst_11382 = (inst_11381__$1 == null);
var state_11402__$1 = (function (){var statearr_11406 = state_11402;
(statearr_11406[(7)] = inst_11381__$1);

return statearr_11406;
})();
if(cljs.core.truth_(inst_11382)){
var statearr_11407_11430 = state_11402__$1;
(statearr_11407_11430[(1)] = (5));

} else {
var statearr_11408_11431 = state_11402__$1;
(statearr_11408_11431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (13))){
var state_11402__$1 = state_11402;
var statearr_11409_11432 = state_11402__$1;
(statearr_11409_11432[(2)] = null);

(statearr_11409_11432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (6))){
var inst_11381 = (state_11402[(7)]);
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11402__$1,(11),to,inst_11381);
} else {
if((state_val_11403 === (3))){
var inst_11400 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11402__$1,inst_11400);
} else {
if((state_val_11403 === (12))){
var state_11402__$1 = state_11402;
var statearr_11410_11433 = state_11402__$1;
(statearr_11410_11433[(2)] = null);

(statearr_11410_11433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (2))){
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11402__$1,(4),from);
} else {
if((state_val_11403 === (11))){
var inst_11391 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
if(cljs.core.truth_(inst_11391)){
var statearr_11411_11434 = state_11402__$1;
(statearr_11411_11434[(1)] = (12));

} else {
var statearr_11412_11435 = state_11402__$1;
(statearr_11412_11435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (9))){
var state_11402__$1 = state_11402;
var statearr_11413_11436 = state_11402__$1;
(statearr_11413_11436[(2)] = null);

(statearr_11413_11436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (5))){
var state_11402__$1 = state_11402;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11414_11437 = state_11402__$1;
(statearr_11414_11437[(1)] = (8));

} else {
var statearr_11415_11438 = state_11402__$1;
(statearr_11415_11438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (14))){
var inst_11396 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11416_11439 = state_11402__$1;
(statearr_11416_11439[(2)] = inst_11396);

(statearr_11416_11439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (10))){
var inst_11388 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11417_11440 = state_11402__$1;
(statearr_11417_11440[(2)] = inst_11388);

(statearr_11417_11440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (8))){
var inst_11385 = cljs.core.async.close_BANG_.call(null,to);
var state_11402__$1 = state_11402;
var statearr_11418_11441 = state_11402__$1;
(statearr_11418_11441[(2)] = inst_11385);

(statearr_11418_11441[(1)] = (10));


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
}
}
});})(c__7864__auto___11427))
;
return ((function (switch__7802__auto__,c__7864__auto___11427){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_11422 = [null,null,null,null,null,null,null,null];
(statearr_11422[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_11422[(1)] = (1));

return statearr_11422;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_11402){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e11423){if((e11423 instanceof Object)){
var ex__7806__auto__ = e11423;
var statearr_11424_11442 = state_11402;
(statearr_11424_11442[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11443 = state_11402;
state_11402 = G__11443;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_11402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_11402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___11427))
})();
var state__7866__auto__ = (function (){var statearr_11425 = f__7865__auto__.call(null);
(statearr_11425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___11427);

return statearr_11425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___11427))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11627){
var vec__11628 = p__11627;
var v = cljs.core.nth.call(null,vec__11628,(0),null);
var p = cljs.core.nth.call(null,vec__11628,(1),null);
var job = vec__11628;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7864__auto___11810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___11810,res,vec__11628,v,p,job,jobs,results){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___11810,res,vec__11628,v,p,job,jobs,results){
return (function (state_11633){
var state_val_11634 = (state_11633[(1)]);
if((state_val_11634 === (2))){
var inst_11630 = (state_11633[(2)]);
var inst_11631 = cljs.core.async.close_BANG_.call(null,res);
var state_11633__$1 = (function (){var statearr_11635 = state_11633;
(statearr_11635[(7)] = inst_11630);

return statearr_11635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11633__$1,inst_11631);
} else {
if((state_val_11634 === (1))){
var state_11633__$1 = state_11633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11633__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7864__auto___11810,res,vec__11628,v,p,job,jobs,results))
;
return ((function (switch__7802__auto__,c__7864__auto___11810,res,vec__11628,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0 = (function (){
var statearr_11639 = [null,null,null,null,null,null,null,null];
(statearr_11639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__);

(statearr_11639[(1)] = (1));

return statearr_11639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1 = (function (state_11633){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e11640){if((e11640 instanceof Object)){
var ex__7806__auto__ = e11640;
var statearr_11641_11811 = state_11633;
(statearr_11641_11811[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11812 = state_11633;
state_11633 = G__11812;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = function(state_11633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1.call(this,state_11633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___11810,res,vec__11628,v,p,job,jobs,results))
})();
var state__7866__auto__ = (function (){var statearr_11642 = f__7865__auto__.call(null);
(statearr_11642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___11810);

return statearr_11642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___11810,res,vec__11628,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11643){
var vec__11644 = p__11643;
var v = cljs.core.nth.call(null,vec__11644,(0),null);
var p = cljs.core.nth.call(null,vec__11644,(1),null);
var job = vec__11644;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5220__auto___11813 = n;
var __11814 = (0);
while(true){
if((__11814 < n__5220__auto___11813)){
var G__11645_11815 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11645_11815) {
case "async":
var c__7864__auto___11817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11814,c__7864__auto___11817,G__11645_11815,n__5220__auto___11813,jobs,results,process,async){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (__11814,c__7864__auto___11817,G__11645_11815,n__5220__auto___11813,jobs,results,process,async){
return (function (state_11658){
var state_val_11659 = (state_11658[(1)]);
if((state_val_11659 === (7))){
var inst_11654 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
var statearr_11660_11818 = state_11658__$1;
(statearr_11660_11818[(2)] = inst_11654);

(statearr_11660_11818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11659 === (6))){
var state_11658__$1 = state_11658;
var statearr_11661_11819 = state_11658__$1;
(statearr_11661_11819[(2)] = null);

(statearr_11661_11819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11659 === (5))){
var state_11658__$1 = state_11658;
var statearr_11662_11820 = state_11658__$1;
(statearr_11662_11820[(2)] = null);

(statearr_11662_11820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11659 === (4))){
var inst_11648 = (state_11658[(2)]);
var inst_11649 = async.call(null,inst_11648);
var state_11658__$1 = state_11658;
if(cljs.core.truth_(inst_11649)){
var statearr_11663_11821 = state_11658__$1;
(statearr_11663_11821[(1)] = (5));

} else {
var statearr_11664_11822 = state_11658__$1;
(statearr_11664_11822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11659 === (3))){
var inst_11656 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11658__$1,inst_11656);
} else {
if((state_val_11659 === (2))){
var state_11658__$1 = state_11658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11658__$1,(4),jobs);
} else {
if((state_val_11659 === (1))){
var state_11658__$1 = state_11658;
var statearr_11665_11823 = state_11658__$1;
(statearr_11665_11823[(2)] = null);

(statearr_11665_11823[(1)] = (2));


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
});})(__11814,c__7864__auto___11817,G__11645_11815,n__5220__auto___11813,jobs,results,process,async))
;
return ((function (__11814,switch__7802__auto__,c__7864__auto___11817,G__11645_11815,n__5220__auto___11813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0 = (function (){
var statearr_11669 = [null,null,null,null,null,null,null];
(statearr_11669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__);

(statearr_11669[(1)] = (1));

return statearr_11669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1 = (function (state_11658){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e11670){if((e11670 instanceof Object)){
var ex__7806__auto__ = e11670;
var statearr_11671_11824 = state_11658;
(statearr_11671_11824[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11825 = state_11658;
state_11658 = G__11825;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = function(state_11658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1.call(this,state_11658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__;
})()
;})(__11814,switch__7802__auto__,c__7864__auto___11817,G__11645_11815,n__5220__auto___11813,jobs,results,process,async))
})();
var state__7866__auto__ = (function (){var statearr_11672 = f__7865__auto__.call(null);
(statearr_11672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___11817);

return statearr_11672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(__11814,c__7864__auto___11817,G__11645_11815,n__5220__auto___11813,jobs,results,process,async))
);


break;
case "compute":
var c__7864__auto___11826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11814,c__7864__auto___11826,G__11645_11815,n__5220__auto___11813,jobs,results,process,async){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (__11814,c__7864__auto___11826,G__11645_11815,n__5220__auto___11813,jobs,results,process,async){
return (function (state_11685){
var state_val_11686 = (state_11685[(1)]);
if((state_val_11686 === (7))){
var inst_11681 = (state_11685[(2)]);
var state_11685__$1 = state_11685;
var statearr_11687_11827 = state_11685__$1;
(statearr_11687_11827[(2)] = inst_11681);

(statearr_11687_11827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11686 === (6))){
var state_11685__$1 = state_11685;
var statearr_11688_11828 = state_11685__$1;
(statearr_11688_11828[(2)] = null);

(statearr_11688_11828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11686 === (5))){
var state_11685__$1 = state_11685;
var statearr_11689_11829 = state_11685__$1;
(statearr_11689_11829[(2)] = null);

(statearr_11689_11829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11686 === (4))){
var inst_11675 = (state_11685[(2)]);
var inst_11676 = process.call(null,inst_11675);
var state_11685__$1 = state_11685;
if(cljs.core.truth_(inst_11676)){
var statearr_11690_11830 = state_11685__$1;
(statearr_11690_11830[(1)] = (5));

} else {
var statearr_11691_11831 = state_11685__$1;
(statearr_11691_11831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11686 === (3))){
var inst_11683 = (state_11685[(2)]);
var state_11685__$1 = state_11685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11685__$1,inst_11683);
} else {
if((state_val_11686 === (2))){
var state_11685__$1 = state_11685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11685__$1,(4),jobs);
} else {
if((state_val_11686 === (1))){
var state_11685__$1 = state_11685;
var statearr_11692_11832 = state_11685__$1;
(statearr_11692_11832[(2)] = null);

(statearr_11692_11832[(1)] = (2));


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
});})(__11814,c__7864__auto___11826,G__11645_11815,n__5220__auto___11813,jobs,results,process,async))
;
return ((function (__11814,switch__7802__auto__,c__7864__auto___11826,G__11645_11815,n__5220__auto___11813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0 = (function (){
var statearr_11696 = [null,null,null,null,null,null,null];
(statearr_11696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__);

(statearr_11696[(1)] = (1));

return statearr_11696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1 = (function (state_11685){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e11697){if((e11697 instanceof Object)){
var ex__7806__auto__ = e11697;
var statearr_11698_11833 = state_11685;
(statearr_11698_11833[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11834 = state_11685;
state_11685 = G__11834;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = function(state_11685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1.call(this,state_11685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__;
})()
;})(__11814,switch__7802__auto__,c__7864__auto___11826,G__11645_11815,n__5220__auto___11813,jobs,results,process,async))
})();
var state__7866__auto__ = (function (){var statearr_11699 = f__7865__auto__.call(null);
(statearr_11699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___11826);

return statearr_11699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(__11814,c__7864__auto___11826,G__11645_11815,n__5220__auto___11813,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11835 = (__11814 + (1));
__11814 = G__11835;
continue;
} else {
}
break;
}

var c__7864__auto___11836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___11836,jobs,results,process,async){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___11836,jobs,results,process,async){
return (function (state_11721){
var state_val_11722 = (state_11721[(1)]);
if((state_val_11722 === (9))){
var inst_11714 = (state_11721[(2)]);
var state_11721__$1 = (function (){var statearr_11723 = state_11721;
(statearr_11723[(7)] = inst_11714);

return statearr_11723;
})();
var statearr_11724_11837 = state_11721__$1;
(statearr_11724_11837[(2)] = null);

(statearr_11724_11837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11722 === (8))){
var inst_11707 = (state_11721[(8)]);
var inst_11712 = (state_11721[(2)]);
var state_11721__$1 = (function (){var statearr_11725 = state_11721;
(statearr_11725[(9)] = inst_11712);

return statearr_11725;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11721__$1,(9),results,inst_11707);
} else {
if((state_val_11722 === (7))){
var inst_11717 = (state_11721[(2)]);
var state_11721__$1 = state_11721;
var statearr_11726_11838 = state_11721__$1;
(statearr_11726_11838[(2)] = inst_11717);

(statearr_11726_11838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11722 === (6))){
var inst_11702 = (state_11721[(10)]);
var inst_11707 = (state_11721[(8)]);
var inst_11707__$1 = cljs.core.async.chan.call(null,(1));
var inst_11708 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11709 = [inst_11702,inst_11707__$1];
var inst_11710 = (new cljs.core.PersistentVector(null,2,(5),inst_11708,inst_11709,null));
var state_11721__$1 = (function (){var statearr_11727 = state_11721;
(statearr_11727[(8)] = inst_11707__$1);

return statearr_11727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11721__$1,(8),jobs,inst_11710);
} else {
if((state_val_11722 === (5))){
var inst_11705 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11721__$1 = state_11721;
var statearr_11728_11839 = state_11721__$1;
(statearr_11728_11839[(2)] = inst_11705);

(statearr_11728_11839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11722 === (4))){
var inst_11702 = (state_11721[(10)]);
var inst_11702__$1 = (state_11721[(2)]);
var inst_11703 = (inst_11702__$1 == null);
var state_11721__$1 = (function (){var statearr_11729 = state_11721;
(statearr_11729[(10)] = inst_11702__$1);

return statearr_11729;
})();
if(cljs.core.truth_(inst_11703)){
var statearr_11730_11840 = state_11721__$1;
(statearr_11730_11840[(1)] = (5));

} else {
var statearr_11731_11841 = state_11721__$1;
(statearr_11731_11841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11722 === (3))){
var inst_11719 = (state_11721[(2)]);
var state_11721__$1 = state_11721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11721__$1,inst_11719);
} else {
if((state_val_11722 === (2))){
var state_11721__$1 = state_11721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11721__$1,(4),from);
} else {
if((state_val_11722 === (1))){
var state_11721__$1 = state_11721;
var statearr_11732_11842 = state_11721__$1;
(statearr_11732_11842[(2)] = null);

(statearr_11732_11842[(1)] = (2));


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
});})(c__7864__auto___11836,jobs,results,process,async))
;
return ((function (switch__7802__auto__,c__7864__auto___11836,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0 = (function (){
var statearr_11736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__);

(statearr_11736[(1)] = (1));

return statearr_11736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1 = (function (state_11721){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e11737){if((e11737 instanceof Object)){
var ex__7806__auto__ = e11737;
var statearr_11738_11843 = state_11721;
(statearr_11738_11843[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11844 = state_11721;
state_11721 = G__11844;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = function(state_11721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1.call(this,state_11721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___11836,jobs,results,process,async))
})();
var state__7866__auto__ = (function (){var statearr_11739 = f__7865__auto__.call(null);
(statearr_11739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___11836);

return statearr_11739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___11836,jobs,results,process,async))
);


var c__7864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto__,jobs,results,process,async){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto__,jobs,results,process,async){
return (function (state_11777){
var state_val_11778 = (state_11777[(1)]);
if((state_val_11778 === (7))){
var inst_11773 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11779_11845 = state_11777__$1;
(statearr_11779_11845[(2)] = inst_11773);

(statearr_11779_11845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (20))){
var state_11777__$1 = state_11777;
var statearr_11780_11846 = state_11777__$1;
(statearr_11780_11846[(2)] = null);

(statearr_11780_11846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (1))){
var state_11777__$1 = state_11777;
var statearr_11781_11847 = state_11777__$1;
(statearr_11781_11847[(2)] = null);

(statearr_11781_11847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (4))){
var inst_11742 = (state_11777[(7)]);
var inst_11742__$1 = (state_11777[(2)]);
var inst_11743 = (inst_11742__$1 == null);
var state_11777__$1 = (function (){var statearr_11782 = state_11777;
(statearr_11782[(7)] = inst_11742__$1);

return statearr_11782;
})();
if(cljs.core.truth_(inst_11743)){
var statearr_11783_11848 = state_11777__$1;
(statearr_11783_11848[(1)] = (5));

} else {
var statearr_11784_11849 = state_11777__$1;
(statearr_11784_11849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (15))){
var inst_11755 = (state_11777[(8)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11777__$1,(18),to,inst_11755);
} else {
if((state_val_11778 === (21))){
var inst_11768 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11785_11850 = state_11777__$1;
(statearr_11785_11850[(2)] = inst_11768);

(statearr_11785_11850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (13))){
var inst_11770 = (state_11777[(2)]);
var state_11777__$1 = (function (){var statearr_11786 = state_11777;
(statearr_11786[(9)] = inst_11770);

return statearr_11786;
})();
var statearr_11787_11851 = state_11777__$1;
(statearr_11787_11851[(2)] = null);

(statearr_11787_11851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (6))){
var inst_11742 = (state_11777[(7)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11777__$1,(11),inst_11742);
} else {
if((state_val_11778 === (17))){
var inst_11763 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11763)){
var statearr_11788_11852 = state_11777__$1;
(statearr_11788_11852[(1)] = (19));

} else {
var statearr_11789_11853 = state_11777__$1;
(statearr_11789_11853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (3))){
var inst_11775 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11777__$1,inst_11775);
} else {
if((state_val_11778 === (12))){
var inst_11752 = (state_11777[(10)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11777__$1,(14),inst_11752);
} else {
if((state_val_11778 === (2))){
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11777__$1,(4),results);
} else {
if((state_val_11778 === (19))){
var state_11777__$1 = state_11777;
var statearr_11790_11854 = state_11777__$1;
(statearr_11790_11854[(2)] = null);

(statearr_11790_11854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (11))){
var inst_11752 = (state_11777[(2)]);
var state_11777__$1 = (function (){var statearr_11791 = state_11777;
(statearr_11791[(10)] = inst_11752);

return statearr_11791;
})();
var statearr_11792_11855 = state_11777__$1;
(statearr_11792_11855[(2)] = null);

(statearr_11792_11855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (9))){
var state_11777__$1 = state_11777;
var statearr_11793_11856 = state_11777__$1;
(statearr_11793_11856[(2)] = null);

(statearr_11793_11856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (5))){
var state_11777__$1 = state_11777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11794_11857 = state_11777__$1;
(statearr_11794_11857[(1)] = (8));

} else {
var statearr_11795_11858 = state_11777__$1;
(statearr_11795_11858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (14))){
var inst_11755 = (state_11777[(8)]);
var inst_11757 = (state_11777[(11)]);
var inst_11755__$1 = (state_11777[(2)]);
var inst_11756 = (inst_11755__$1 == null);
var inst_11757__$1 = cljs.core.not.call(null,inst_11756);
var state_11777__$1 = (function (){var statearr_11796 = state_11777;
(statearr_11796[(8)] = inst_11755__$1);

(statearr_11796[(11)] = inst_11757__$1);

return statearr_11796;
})();
if(inst_11757__$1){
var statearr_11797_11859 = state_11777__$1;
(statearr_11797_11859[(1)] = (15));

} else {
var statearr_11798_11860 = state_11777__$1;
(statearr_11798_11860[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (16))){
var inst_11757 = (state_11777[(11)]);
var state_11777__$1 = state_11777;
var statearr_11799_11861 = state_11777__$1;
(statearr_11799_11861[(2)] = inst_11757);

(statearr_11799_11861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (10))){
var inst_11749 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11800_11862 = state_11777__$1;
(statearr_11800_11862[(2)] = inst_11749);

(statearr_11800_11862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (18))){
var inst_11760 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11801_11863 = state_11777__$1;
(statearr_11801_11863[(2)] = inst_11760);

(statearr_11801_11863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (8))){
var inst_11746 = cljs.core.async.close_BANG_.call(null,to);
var state_11777__$1 = state_11777;
var statearr_11802_11864 = state_11777__$1;
(statearr_11802_11864[(2)] = inst_11746);

(statearr_11802_11864[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
});})(c__7864__auto__,jobs,results,process,async))
;
return ((function (switch__7802__auto__,c__7864__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0 = (function (){
var statearr_11806 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__);

(statearr_11806[(1)] = (1));

return statearr_11806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1 = (function (state_11777){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e11807){if((e11807 instanceof Object)){
var ex__7806__auto__ = e11807;
var statearr_11808_11865 = state_11777;
(statearr_11808_11865[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11866 = state_11777;
state_11777 = G__11866;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__ = function(state_11777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1.call(this,state_11777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7803__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto__,jobs,results,process,async))
})();
var state__7866__auto__ = (function (){var statearr_11809 = f__7865__auto__.call(null);
(statearr_11809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto__);

return statearr_11809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto__,jobs,results,process,async))
);

return c__7864__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__11868 = arguments.length;
switch (G__11868) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__11871 = arguments.length;
switch (G__11871) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__11874 = arguments.length;
switch (G__11874) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7864__auto___11926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___11926,tc,fc){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___11926,tc,fc){
return (function (state_11900){
var state_val_11901 = (state_11900[(1)]);
if((state_val_11901 === (7))){
var inst_11896 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11902_11927 = state_11900__$1;
(statearr_11902_11927[(2)] = inst_11896);

(statearr_11902_11927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (1))){
var state_11900__$1 = state_11900;
var statearr_11903_11928 = state_11900__$1;
(statearr_11903_11928[(2)] = null);

(statearr_11903_11928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (4))){
var inst_11877 = (state_11900[(7)]);
var inst_11877__$1 = (state_11900[(2)]);
var inst_11878 = (inst_11877__$1 == null);
var state_11900__$1 = (function (){var statearr_11904 = state_11900;
(statearr_11904[(7)] = inst_11877__$1);

return statearr_11904;
})();
if(cljs.core.truth_(inst_11878)){
var statearr_11905_11929 = state_11900__$1;
(statearr_11905_11929[(1)] = (5));

} else {
var statearr_11906_11930 = state_11900__$1;
(statearr_11906_11930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (13))){
var state_11900__$1 = state_11900;
var statearr_11907_11931 = state_11900__$1;
(statearr_11907_11931[(2)] = null);

(statearr_11907_11931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (6))){
var inst_11877 = (state_11900[(7)]);
var inst_11883 = p.call(null,inst_11877);
var state_11900__$1 = state_11900;
if(cljs.core.truth_(inst_11883)){
var statearr_11908_11932 = state_11900__$1;
(statearr_11908_11932[(1)] = (9));

} else {
var statearr_11909_11933 = state_11900__$1;
(statearr_11909_11933[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (3))){
var inst_11898 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11900__$1,inst_11898);
} else {
if((state_val_11901 === (12))){
var state_11900__$1 = state_11900;
var statearr_11910_11934 = state_11900__$1;
(statearr_11910_11934[(2)] = null);

(statearr_11910_11934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (2))){
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11900__$1,(4),ch);
} else {
if((state_val_11901 === (11))){
var inst_11877 = (state_11900[(7)]);
var inst_11887 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11900__$1,(8),inst_11887,inst_11877);
} else {
if((state_val_11901 === (9))){
var state_11900__$1 = state_11900;
var statearr_11911_11935 = state_11900__$1;
(statearr_11911_11935[(2)] = tc);

(statearr_11911_11935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (5))){
var inst_11880 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11881 = cljs.core.async.close_BANG_.call(null,fc);
var state_11900__$1 = (function (){var statearr_11912 = state_11900;
(statearr_11912[(8)] = inst_11880);

return statearr_11912;
})();
var statearr_11913_11936 = state_11900__$1;
(statearr_11913_11936[(2)] = inst_11881);

(statearr_11913_11936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (14))){
var inst_11894 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11914_11937 = state_11900__$1;
(statearr_11914_11937[(2)] = inst_11894);

(statearr_11914_11937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (10))){
var state_11900__$1 = state_11900;
var statearr_11915_11938 = state_11900__$1;
(statearr_11915_11938[(2)] = fc);

(statearr_11915_11938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (8))){
var inst_11889 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
if(cljs.core.truth_(inst_11889)){
var statearr_11916_11939 = state_11900__$1;
(statearr_11916_11939[(1)] = (12));

} else {
var statearr_11917_11940 = state_11900__$1;
(statearr_11917_11940[(1)] = (13));

}

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
}
}
});})(c__7864__auto___11926,tc,fc))
;
return ((function (switch__7802__auto__,c__7864__auto___11926,tc,fc){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_11921 = [null,null,null,null,null,null,null,null,null];
(statearr_11921[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_11921[(1)] = (1));

return statearr_11921;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_11900){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e11922){if((e11922 instanceof Object)){
var ex__7806__auto__ = e11922;
var statearr_11923_11941 = state_11900;
(statearr_11923_11941[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11942 = state_11900;
state_11900 = G__11942;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_11900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_11900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___11926,tc,fc))
})();
var state__7866__auto__ = (function (){var statearr_11924 = f__7865__auto__.call(null);
(statearr_11924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___11926);

return statearr_11924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___11926,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto__){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto__){
return (function (state_11989){
var state_val_11990 = (state_11989[(1)]);
if((state_val_11990 === (7))){
var inst_11985 = (state_11989[(2)]);
var state_11989__$1 = state_11989;
var statearr_11991_12007 = state_11989__$1;
(statearr_11991_12007[(2)] = inst_11985);

(statearr_11991_12007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11990 === (6))){
var inst_11978 = (state_11989[(7)]);
var inst_11975 = (state_11989[(8)]);
var inst_11982 = f.call(null,inst_11975,inst_11978);
var inst_11975__$1 = inst_11982;
var state_11989__$1 = (function (){var statearr_11992 = state_11989;
(statearr_11992[(8)] = inst_11975__$1);

return statearr_11992;
})();
var statearr_11993_12008 = state_11989__$1;
(statearr_11993_12008[(2)] = null);

(statearr_11993_12008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11990 === (5))){
var inst_11975 = (state_11989[(8)]);
var state_11989__$1 = state_11989;
var statearr_11994_12009 = state_11989__$1;
(statearr_11994_12009[(2)] = inst_11975);

(statearr_11994_12009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11990 === (4))){
var inst_11978 = (state_11989[(7)]);
var inst_11978__$1 = (state_11989[(2)]);
var inst_11979 = (inst_11978__$1 == null);
var state_11989__$1 = (function (){var statearr_11995 = state_11989;
(statearr_11995[(7)] = inst_11978__$1);

return statearr_11995;
})();
if(cljs.core.truth_(inst_11979)){
var statearr_11996_12010 = state_11989__$1;
(statearr_11996_12010[(1)] = (5));

} else {
var statearr_11997_12011 = state_11989__$1;
(statearr_11997_12011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11990 === (3))){
var inst_11987 = (state_11989[(2)]);
var state_11989__$1 = state_11989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11989__$1,inst_11987);
} else {
if((state_val_11990 === (2))){
var state_11989__$1 = state_11989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11989__$1,(4),ch);
} else {
if((state_val_11990 === (1))){
var inst_11975 = init;
var state_11989__$1 = (function (){var statearr_11998 = state_11989;
(statearr_11998[(8)] = inst_11975);

return statearr_11998;
})();
var statearr_11999_12012 = state_11989__$1;
(statearr_11999_12012[(2)] = null);

(statearr_11999_12012[(1)] = (2));


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
});})(c__7864__auto__))
;
return ((function (switch__7802__auto__,c__7864__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7803__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7803__auto____0 = (function (){
var statearr_12003 = [null,null,null,null,null,null,null,null,null];
(statearr_12003[(0)] = cljs$core$async$reduce_$_state_machine__7803__auto__);

(statearr_12003[(1)] = (1));

return statearr_12003;
});
var cljs$core$async$reduce_$_state_machine__7803__auto____1 = (function (state_11989){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_11989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e12004){if((e12004 instanceof Object)){
var ex__7806__auto__ = e12004;
var statearr_12005_12013 = state_11989;
(statearr_12005_12013[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12014 = state_11989;
state_11989 = G__12014;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7803__auto__ = function(state_11989){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7803__auto____1.call(this,state_11989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7803__auto____0;
cljs$core$async$reduce_$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7803__auto____1;
return cljs$core$async$reduce_$_state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto__))
})();
var state__7866__auto__ = (function (){var statearr_12006 = f__7865__auto__.call(null);
(statearr_12006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto__);

return statearr_12006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto__))
);

return c__7864__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__12016 = arguments.length;
switch (G__12016) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto__){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto__){
return (function (state_12041){
var state_val_12042 = (state_12041[(1)]);
if((state_val_12042 === (7))){
var inst_12023 = (state_12041[(2)]);
var state_12041__$1 = state_12041;
var statearr_12043_12067 = state_12041__$1;
(statearr_12043_12067[(2)] = inst_12023);

(statearr_12043_12067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (1))){
var inst_12017 = cljs.core.seq.call(null,coll);
var inst_12018 = inst_12017;
var state_12041__$1 = (function (){var statearr_12044 = state_12041;
(statearr_12044[(7)] = inst_12018);

return statearr_12044;
})();
var statearr_12045_12068 = state_12041__$1;
(statearr_12045_12068[(2)] = null);

(statearr_12045_12068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (4))){
var inst_12018 = (state_12041[(7)]);
var inst_12021 = cljs.core.first.call(null,inst_12018);
var state_12041__$1 = state_12041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12041__$1,(7),ch,inst_12021);
} else {
if((state_val_12042 === (13))){
var inst_12035 = (state_12041[(2)]);
var state_12041__$1 = state_12041;
var statearr_12046_12069 = state_12041__$1;
(statearr_12046_12069[(2)] = inst_12035);

(statearr_12046_12069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (6))){
var inst_12026 = (state_12041[(2)]);
var state_12041__$1 = state_12041;
if(cljs.core.truth_(inst_12026)){
var statearr_12047_12070 = state_12041__$1;
(statearr_12047_12070[(1)] = (8));

} else {
var statearr_12048_12071 = state_12041__$1;
(statearr_12048_12071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (3))){
var inst_12039 = (state_12041[(2)]);
var state_12041__$1 = state_12041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12041__$1,inst_12039);
} else {
if((state_val_12042 === (12))){
var state_12041__$1 = state_12041;
var statearr_12049_12072 = state_12041__$1;
(statearr_12049_12072[(2)] = null);

(statearr_12049_12072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (2))){
var inst_12018 = (state_12041[(7)]);
var state_12041__$1 = state_12041;
if(cljs.core.truth_(inst_12018)){
var statearr_12050_12073 = state_12041__$1;
(statearr_12050_12073[(1)] = (4));

} else {
var statearr_12051_12074 = state_12041__$1;
(statearr_12051_12074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (11))){
var inst_12032 = cljs.core.async.close_BANG_.call(null,ch);
var state_12041__$1 = state_12041;
var statearr_12052_12075 = state_12041__$1;
(statearr_12052_12075[(2)] = inst_12032);

(statearr_12052_12075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (9))){
var state_12041__$1 = state_12041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12053_12076 = state_12041__$1;
(statearr_12053_12076[(1)] = (11));

} else {
var statearr_12054_12077 = state_12041__$1;
(statearr_12054_12077[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (5))){
var inst_12018 = (state_12041[(7)]);
var state_12041__$1 = state_12041;
var statearr_12055_12078 = state_12041__$1;
(statearr_12055_12078[(2)] = inst_12018);

(statearr_12055_12078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (10))){
var inst_12037 = (state_12041[(2)]);
var state_12041__$1 = state_12041;
var statearr_12056_12079 = state_12041__$1;
(statearr_12056_12079[(2)] = inst_12037);

(statearr_12056_12079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12042 === (8))){
var inst_12018 = (state_12041[(7)]);
var inst_12028 = cljs.core.next.call(null,inst_12018);
var inst_12018__$1 = inst_12028;
var state_12041__$1 = (function (){var statearr_12057 = state_12041;
(statearr_12057[(7)] = inst_12018__$1);

return statearr_12057;
})();
var statearr_12058_12080 = state_12041__$1;
(statearr_12058_12080[(2)] = null);

(statearr_12058_12080[(1)] = (2));


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
}
});})(c__7864__auto__))
;
return ((function (switch__7802__auto__,c__7864__auto__){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_12062 = [null,null,null,null,null,null,null,null];
(statearr_12062[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_12062[(1)] = (1));

return statearr_12062;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_12041){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_12041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e12063){if((e12063 instanceof Object)){
var ex__7806__auto__ = e12063;
var statearr_12064_12081 = state_12041;
(statearr_12064_12081[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12082 = state_12041;
state_12041 = G__12082;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_12041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_12041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto__))
})();
var state__7866__auto__ = (function (){var statearr_12065 = f__7865__auto__.call(null);
(statearr_12065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto__);

return statearr_12065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto__))
);

return c__7864__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj12084 = {};
return obj12084;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4323__auto__ = _;
if(and__4323__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4971__auto__ = (((_ == null))?null:_);
return (function (){var or__4335__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj12086 = {};
return obj12086;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t12308 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12308 = (function (cs,ch,mult,meta12309){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12309 = meta12309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12308.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t12308.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t12308.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t12308.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t12308.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t12308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12310){
var self__ = this;
var _12310__$1 = this;
return self__.meta12309;
});})(cs))
;

cljs.core.async.t12308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12310,meta12309__$1){
var self__ = this;
var _12310__$1 = this;
return (new cljs.core.async.t12308(self__.cs,self__.ch,self__.mult,meta12309__$1));
});})(cs))
;

cljs.core.async.t12308.cljs$lang$type = true;

cljs.core.async.t12308.cljs$lang$ctorStr = "cljs.core.async/t12308";

cljs.core.async.t12308.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t12308");
});})(cs))
;

cljs.core.async.__GT_t12308 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t12308(cs__$1,ch__$1,mult__$1,meta12309){
return (new cljs.core.async.t12308(cs__$1,ch__$1,mult__$1,meta12309));
});})(cs))
;

}

return (new cljs.core.async.t12308(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7864__auto___12529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___12529,cs,m,dchan,dctr,done){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___12529,cs,m,dchan,dctr,done){
return (function (state_12441){
var state_val_12442 = (state_12441[(1)]);
if((state_val_12442 === (7))){
var inst_12437 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12443_12530 = state_12441__$1;
(statearr_12443_12530[(2)] = inst_12437);

(statearr_12443_12530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (20))){
var inst_12342 = (state_12441[(7)]);
var inst_12352 = cljs.core.first.call(null,inst_12342);
var inst_12353 = cljs.core.nth.call(null,inst_12352,(0),null);
var inst_12354 = cljs.core.nth.call(null,inst_12352,(1),null);
var state_12441__$1 = (function (){var statearr_12444 = state_12441;
(statearr_12444[(8)] = inst_12353);

return statearr_12444;
})();
if(cljs.core.truth_(inst_12354)){
var statearr_12445_12531 = state_12441__$1;
(statearr_12445_12531[(1)] = (22));

} else {
var statearr_12446_12532 = state_12441__$1;
(statearr_12446_12532[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (27))){
var inst_12389 = (state_12441[(9)]);
var inst_12382 = (state_12441[(10)]);
var inst_12384 = (state_12441[(11)]);
var inst_12313 = (state_12441[(12)]);
var inst_12389__$1 = cljs.core._nth.call(null,inst_12382,inst_12384);
var inst_12390 = cljs.core.async.put_BANG_.call(null,inst_12389__$1,inst_12313,done);
var state_12441__$1 = (function (){var statearr_12447 = state_12441;
(statearr_12447[(9)] = inst_12389__$1);

return statearr_12447;
})();
if(cljs.core.truth_(inst_12390)){
var statearr_12448_12533 = state_12441__$1;
(statearr_12448_12533[(1)] = (30));

} else {
var statearr_12449_12534 = state_12441__$1;
(statearr_12449_12534[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (1))){
var state_12441__$1 = state_12441;
var statearr_12450_12535 = state_12441__$1;
(statearr_12450_12535[(2)] = null);

(statearr_12450_12535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (24))){
var inst_12342 = (state_12441[(7)]);
var inst_12359 = (state_12441[(2)]);
var inst_12360 = cljs.core.next.call(null,inst_12342);
var inst_12322 = inst_12360;
var inst_12323 = null;
var inst_12324 = (0);
var inst_12325 = (0);
var state_12441__$1 = (function (){var statearr_12451 = state_12441;
(statearr_12451[(13)] = inst_12325);

(statearr_12451[(14)] = inst_12324);

(statearr_12451[(15)] = inst_12359);

(statearr_12451[(16)] = inst_12323);

(statearr_12451[(17)] = inst_12322);

return statearr_12451;
})();
var statearr_12452_12536 = state_12441__$1;
(statearr_12452_12536[(2)] = null);

(statearr_12452_12536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (39))){
var state_12441__$1 = state_12441;
var statearr_12456_12537 = state_12441__$1;
(statearr_12456_12537[(2)] = null);

(statearr_12456_12537[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (4))){
var inst_12313 = (state_12441[(12)]);
var inst_12313__$1 = (state_12441[(2)]);
var inst_12314 = (inst_12313__$1 == null);
var state_12441__$1 = (function (){var statearr_12457 = state_12441;
(statearr_12457[(12)] = inst_12313__$1);

return statearr_12457;
})();
if(cljs.core.truth_(inst_12314)){
var statearr_12458_12538 = state_12441__$1;
(statearr_12458_12538[(1)] = (5));

} else {
var statearr_12459_12539 = state_12441__$1;
(statearr_12459_12539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (15))){
var inst_12325 = (state_12441[(13)]);
var inst_12324 = (state_12441[(14)]);
var inst_12323 = (state_12441[(16)]);
var inst_12322 = (state_12441[(17)]);
var inst_12338 = (state_12441[(2)]);
var inst_12339 = (inst_12325 + (1));
var tmp12453 = inst_12324;
var tmp12454 = inst_12323;
var tmp12455 = inst_12322;
var inst_12322__$1 = tmp12455;
var inst_12323__$1 = tmp12454;
var inst_12324__$1 = tmp12453;
var inst_12325__$1 = inst_12339;
var state_12441__$1 = (function (){var statearr_12460 = state_12441;
(statearr_12460[(18)] = inst_12338);

(statearr_12460[(13)] = inst_12325__$1);

(statearr_12460[(14)] = inst_12324__$1);

(statearr_12460[(16)] = inst_12323__$1);

(statearr_12460[(17)] = inst_12322__$1);

return statearr_12460;
})();
var statearr_12461_12540 = state_12441__$1;
(statearr_12461_12540[(2)] = null);

(statearr_12461_12540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (21))){
var inst_12363 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12465_12541 = state_12441__$1;
(statearr_12465_12541[(2)] = inst_12363);

(statearr_12465_12541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (31))){
var inst_12389 = (state_12441[(9)]);
var inst_12393 = done.call(null,null);
var inst_12394 = cljs.core.async.untap_STAR_.call(null,m,inst_12389);
var state_12441__$1 = (function (){var statearr_12466 = state_12441;
(statearr_12466[(19)] = inst_12393);

return statearr_12466;
})();
var statearr_12467_12542 = state_12441__$1;
(statearr_12467_12542[(2)] = inst_12394);

(statearr_12467_12542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (32))){
var inst_12383 = (state_12441[(20)]);
var inst_12382 = (state_12441[(10)]);
var inst_12381 = (state_12441[(21)]);
var inst_12384 = (state_12441[(11)]);
var inst_12396 = (state_12441[(2)]);
var inst_12397 = (inst_12384 + (1));
var tmp12462 = inst_12383;
var tmp12463 = inst_12382;
var tmp12464 = inst_12381;
var inst_12381__$1 = tmp12464;
var inst_12382__$1 = tmp12463;
var inst_12383__$1 = tmp12462;
var inst_12384__$1 = inst_12397;
var state_12441__$1 = (function (){var statearr_12468 = state_12441;
(statearr_12468[(20)] = inst_12383__$1);

(statearr_12468[(10)] = inst_12382__$1);

(statearr_12468[(21)] = inst_12381__$1);

(statearr_12468[(22)] = inst_12396);

(statearr_12468[(11)] = inst_12384__$1);

return statearr_12468;
})();
var statearr_12469_12543 = state_12441__$1;
(statearr_12469_12543[(2)] = null);

(statearr_12469_12543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (40))){
var inst_12409 = (state_12441[(23)]);
var inst_12413 = done.call(null,null);
var inst_12414 = cljs.core.async.untap_STAR_.call(null,m,inst_12409);
var state_12441__$1 = (function (){var statearr_12470 = state_12441;
(statearr_12470[(24)] = inst_12413);

return statearr_12470;
})();
var statearr_12471_12544 = state_12441__$1;
(statearr_12471_12544[(2)] = inst_12414);

(statearr_12471_12544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (33))){
var inst_12400 = (state_12441[(25)]);
var inst_12402 = cljs.core.chunked_seq_QMARK_.call(null,inst_12400);
var state_12441__$1 = state_12441;
if(inst_12402){
var statearr_12472_12545 = state_12441__$1;
(statearr_12472_12545[(1)] = (36));

} else {
var statearr_12473_12546 = state_12441__$1;
(statearr_12473_12546[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (13))){
var inst_12332 = (state_12441[(26)]);
var inst_12335 = cljs.core.async.close_BANG_.call(null,inst_12332);
var state_12441__$1 = state_12441;
var statearr_12474_12547 = state_12441__$1;
(statearr_12474_12547[(2)] = inst_12335);

(statearr_12474_12547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (22))){
var inst_12353 = (state_12441[(8)]);
var inst_12356 = cljs.core.async.close_BANG_.call(null,inst_12353);
var state_12441__$1 = state_12441;
var statearr_12475_12548 = state_12441__$1;
(statearr_12475_12548[(2)] = inst_12356);

(statearr_12475_12548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (36))){
var inst_12400 = (state_12441[(25)]);
var inst_12404 = cljs.core.chunk_first.call(null,inst_12400);
var inst_12405 = cljs.core.chunk_rest.call(null,inst_12400);
var inst_12406 = cljs.core.count.call(null,inst_12404);
var inst_12381 = inst_12405;
var inst_12382 = inst_12404;
var inst_12383 = inst_12406;
var inst_12384 = (0);
var state_12441__$1 = (function (){var statearr_12476 = state_12441;
(statearr_12476[(20)] = inst_12383);

(statearr_12476[(10)] = inst_12382);

(statearr_12476[(21)] = inst_12381);

(statearr_12476[(11)] = inst_12384);

return statearr_12476;
})();
var statearr_12477_12549 = state_12441__$1;
(statearr_12477_12549[(2)] = null);

(statearr_12477_12549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (41))){
var inst_12400 = (state_12441[(25)]);
var inst_12416 = (state_12441[(2)]);
var inst_12417 = cljs.core.next.call(null,inst_12400);
var inst_12381 = inst_12417;
var inst_12382 = null;
var inst_12383 = (0);
var inst_12384 = (0);
var state_12441__$1 = (function (){var statearr_12478 = state_12441;
(statearr_12478[(20)] = inst_12383);

(statearr_12478[(10)] = inst_12382);

(statearr_12478[(21)] = inst_12381);

(statearr_12478[(27)] = inst_12416);

(statearr_12478[(11)] = inst_12384);

return statearr_12478;
})();
var statearr_12479_12550 = state_12441__$1;
(statearr_12479_12550[(2)] = null);

(statearr_12479_12550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (43))){
var state_12441__$1 = state_12441;
var statearr_12480_12551 = state_12441__$1;
(statearr_12480_12551[(2)] = null);

(statearr_12480_12551[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (29))){
var inst_12425 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12481_12552 = state_12441__$1;
(statearr_12481_12552[(2)] = inst_12425);

(statearr_12481_12552[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (44))){
var inst_12434 = (state_12441[(2)]);
var state_12441__$1 = (function (){var statearr_12482 = state_12441;
(statearr_12482[(28)] = inst_12434);

return statearr_12482;
})();
var statearr_12483_12553 = state_12441__$1;
(statearr_12483_12553[(2)] = null);

(statearr_12483_12553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (6))){
var inst_12373 = (state_12441[(29)]);
var inst_12372 = cljs.core.deref.call(null,cs);
var inst_12373__$1 = cljs.core.keys.call(null,inst_12372);
var inst_12374 = cljs.core.count.call(null,inst_12373__$1);
var inst_12375 = cljs.core.reset_BANG_.call(null,dctr,inst_12374);
var inst_12380 = cljs.core.seq.call(null,inst_12373__$1);
var inst_12381 = inst_12380;
var inst_12382 = null;
var inst_12383 = (0);
var inst_12384 = (0);
var state_12441__$1 = (function (){var statearr_12484 = state_12441;
(statearr_12484[(29)] = inst_12373__$1);

(statearr_12484[(20)] = inst_12383);

(statearr_12484[(10)] = inst_12382);

(statearr_12484[(21)] = inst_12381);

(statearr_12484[(30)] = inst_12375);

(statearr_12484[(11)] = inst_12384);

return statearr_12484;
})();
var statearr_12485_12554 = state_12441__$1;
(statearr_12485_12554[(2)] = null);

(statearr_12485_12554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (28))){
var inst_12400 = (state_12441[(25)]);
var inst_12381 = (state_12441[(21)]);
var inst_12400__$1 = cljs.core.seq.call(null,inst_12381);
var state_12441__$1 = (function (){var statearr_12486 = state_12441;
(statearr_12486[(25)] = inst_12400__$1);

return statearr_12486;
})();
if(inst_12400__$1){
var statearr_12487_12555 = state_12441__$1;
(statearr_12487_12555[(1)] = (33));

} else {
var statearr_12488_12556 = state_12441__$1;
(statearr_12488_12556[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (25))){
var inst_12383 = (state_12441[(20)]);
var inst_12384 = (state_12441[(11)]);
var inst_12386 = (inst_12384 < inst_12383);
var inst_12387 = inst_12386;
var state_12441__$1 = state_12441;
if(cljs.core.truth_(inst_12387)){
var statearr_12489_12557 = state_12441__$1;
(statearr_12489_12557[(1)] = (27));

} else {
var statearr_12490_12558 = state_12441__$1;
(statearr_12490_12558[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (34))){
var state_12441__$1 = state_12441;
var statearr_12491_12559 = state_12441__$1;
(statearr_12491_12559[(2)] = null);

(statearr_12491_12559[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (17))){
var state_12441__$1 = state_12441;
var statearr_12492_12560 = state_12441__$1;
(statearr_12492_12560[(2)] = null);

(statearr_12492_12560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (3))){
var inst_12439 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12441__$1,inst_12439);
} else {
if((state_val_12442 === (12))){
var inst_12368 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12493_12561 = state_12441__$1;
(statearr_12493_12561[(2)] = inst_12368);

(statearr_12493_12561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (2))){
var state_12441__$1 = state_12441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12441__$1,(4),ch);
} else {
if((state_val_12442 === (23))){
var state_12441__$1 = state_12441;
var statearr_12494_12562 = state_12441__$1;
(statearr_12494_12562[(2)] = null);

(statearr_12494_12562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (35))){
var inst_12423 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12495_12563 = state_12441__$1;
(statearr_12495_12563[(2)] = inst_12423);

(statearr_12495_12563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (19))){
var inst_12342 = (state_12441[(7)]);
var inst_12346 = cljs.core.chunk_first.call(null,inst_12342);
var inst_12347 = cljs.core.chunk_rest.call(null,inst_12342);
var inst_12348 = cljs.core.count.call(null,inst_12346);
var inst_12322 = inst_12347;
var inst_12323 = inst_12346;
var inst_12324 = inst_12348;
var inst_12325 = (0);
var state_12441__$1 = (function (){var statearr_12496 = state_12441;
(statearr_12496[(13)] = inst_12325);

(statearr_12496[(14)] = inst_12324);

(statearr_12496[(16)] = inst_12323);

(statearr_12496[(17)] = inst_12322);

return statearr_12496;
})();
var statearr_12497_12564 = state_12441__$1;
(statearr_12497_12564[(2)] = null);

(statearr_12497_12564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (11))){
var inst_12342 = (state_12441[(7)]);
var inst_12322 = (state_12441[(17)]);
var inst_12342__$1 = cljs.core.seq.call(null,inst_12322);
var state_12441__$1 = (function (){var statearr_12498 = state_12441;
(statearr_12498[(7)] = inst_12342__$1);

return statearr_12498;
})();
if(inst_12342__$1){
var statearr_12499_12565 = state_12441__$1;
(statearr_12499_12565[(1)] = (16));

} else {
var statearr_12500_12566 = state_12441__$1;
(statearr_12500_12566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (9))){
var inst_12370 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12501_12567 = state_12441__$1;
(statearr_12501_12567[(2)] = inst_12370);

(statearr_12501_12567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (5))){
var inst_12320 = cljs.core.deref.call(null,cs);
var inst_12321 = cljs.core.seq.call(null,inst_12320);
var inst_12322 = inst_12321;
var inst_12323 = null;
var inst_12324 = (0);
var inst_12325 = (0);
var state_12441__$1 = (function (){var statearr_12502 = state_12441;
(statearr_12502[(13)] = inst_12325);

(statearr_12502[(14)] = inst_12324);

(statearr_12502[(16)] = inst_12323);

(statearr_12502[(17)] = inst_12322);

return statearr_12502;
})();
var statearr_12503_12568 = state_12441__$1;
(statearr_12503_12568[(2)] = null);

(statearr_12503_12568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (14))){
var state_12441__$1 = state_12441;
var statearr_12504_12569 = state_12441__$1;
(statearr_12504_12569[(2)] = null);

(statearr_12504_12569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (45))){
var inst_12431 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12505_12570 = state_12441__$1;
(statearr_12505_12570[(2)] = inst_12431);

(statearr_12505_12570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (26))){
var inst_12373 = (state_12441[(29)]);
var inst_12427 = (state_12441[(2)]);
var inst_12428 = cljs.core.seq.call(null,inst_12373);
var state_12441__$1 = (function (){var statearr_12506 = state_12441;
(statearr_12506[(31)] = inst_12427);

return statearr_12506;
})();
if(inst_12428){
var statearr_12507_12571 = state_12441__$1;
(statearr_12507_12571[(1)] = (42));

} else {
var statearr_12508_12572 = state_12441__$1;
(statearr_12508_12572[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (16))){
var inst_12342 = (state_12441[(7)]);
var inst_12344 = cljs.core.chunked_seq_QMARK_.call(null,inst_12342);
var state_12441__$1 = state_12441;
if(inst_12344){
var statearr_12509_12573 = state_12441__$1;
(statearr_12509_12573[(1)] = (19));

} else {
var statearr_12510_12574 = state_12441__$1;
(statearr_12510_12574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (38))){
var inst_12420 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12511_12575 = state_12441__$1;
(statearr_12511_12575[(2)] = inst_12420);

(statearr_12511_12575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (30))){
var state_12441__$1 = state_12441;
var statearr_12512_12576 = state_12441__$1;
(statearr_12512_12576[(2)] = null);

(statearr_12512_12576[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (10))){
var inst_12325 = (state_12441[(13)]);
var inst_12323 = (state_12441[(16)]);
var inst_12331 = cljs.core._nth.call(null,inst_12323,inst_12325);
var inst_12332 = cljs.core.nth.call(null,inst_12331,(0),null);
var inst_12333 = cljs.core.nth.call(null,inst_12331,(1),null);
var state_12441__$1 = (function (){var statearr_12513 = state_12441;
(statearr_12513[(26)] = inst_12332);

return statearr_12513;
})();
if(cljs.core.truth_(inst_12333)){
var statearr_12514_12577 = state_12441__$1;
(statearr_12514_12577[(1)] = (13));

} else {
var statearr_12515_12578 = state_12441__$1;
(statearr_12515_12578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (18))){
var inst_12366 = (state_12441[(2)]);
var state_12441__$1 = state_12441;
var statearr_12516_12579 = state_12441__$1;
(statearr_12516_12579[(2)] = inst_12366);

(statearr_12516_12579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (42))){
var state_12441__$1 = state_12441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12441__$1,(45),dchan);
} else {
if((state_val_12442 === (37))){
var inst_12400 = (state_12441[(25)]);
var inst_12313 = (state_12441[(12)]);
var inst_12409 = (state_12441[(23)]);
var inst_12409__$1 = cljs.core.first.call(null,inst_12400);
var inst_12410 = cljs.core.async.put_BANG_.call(null,inst_12409__$1,inst_12313,done);
var state_12441__$1 = (function (){var statearr_12517 = state_12441;
(statearr_12517[(23)] = inst_12409__$1);

return statearr_12517;
})();
if(cljs.core.truth_(inst_12410)){
var statearr_12518_12580 = state_12441__$1;
(statearr_12518_12580[(1)] = (39));

} else {
var statearr_12519_12581 = state_12441__$1;
(statearr_12519_12581[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12442 === (8))){
var inst_12325 = (state_12441[(13)]);
var inst_12324 = (state_12441[(14)]);
var inst_12327 = (inst_12325 < inst_12324);
var inst_12328 = inst_12327;
var state_12441__$1 = state_12441;
if(cljs.core.truth_(inst_12328)){
var statearr_12520_12582 = state_12441__$1;
(statearr_12520_12582[(1)] = (10));

} else {
var statearr_12521_12583 = state_12441__$1;
(statearr_12521_12583[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
});})(c__7864__auto___12529,cs,m,dchan,dctr,done))
;
return ((function (switch__7802__auto__,c__7864__auto___12529,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7803__auto__ = null;
var cljs$core$async$mult_$_state_machine__7803__auto____0 = (function (){
var statearr_12525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12525[(0)] = cljs$core$async$mult_$_state_machine__7803__auto__);

(statearr_12525[(1)] = (1));

return statearr_12525;
});
var cljs$core$async$mult_$_state_machine__7803__auto____1 = (function (state_12441){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_12441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e12526){if((e12526 instanceof Object)){
var ex__7806__auto__ = e12526;
var statearr_12527_12584 = state_12441;
(statearr_12527_12584[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12585 = state_12441;
state_12441 = G__12585;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7803__auto__ = function(state_12441){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7803__auto____1.call(this,state_12441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7803__auto____0;
cljs$core$async$mult_$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7803__auto____1;
return cljs$core$async$mult_$_state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___12529,cs,m,dchan,dctr,done))
})();
var state__7866__auto__ = (function (){var statearr_12528 = f__7865__auto__.call(null);
(statearr_12528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___12529);

return statearr_12528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___12529,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__12587 = arguments.length;
switch (G__12587) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj12590 = {};
return obj12590;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5375__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5375__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12595){
var map__12596 = p__12595;
var map__12596__$1 = ((cljs.core.seq_QMARK_.call(null,map__12596))?cljs.core.apply.call(null,cljs.core.hash_map,map__12596):map__12596);
var opts = map__12596__$1;
var statearr_12597_12600 = state;
(statearr_12597_12600[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12596,map__12596__$1,opts){
return (function (val){
var statearr_12598_12601 = state;
(statearr_12598_12601[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12596,map__12596__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_12599_12602 = state;
(statearr_12599_12602[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12591){
var G__12592 = cljs.core.first.call(null,seq12591);
var seq12591__$1 = cljs.core.next.call(null,seq12591);
var G__12593 = cljs.core.first.call(null,seq12591__$1);
var seq12591__$2 = cljs.core.next.call(null,seq12591__$1);
var G__12594 = cljs.core.first.call(null,seq12591__$2);
var seq12591__$3 = cljs.core.next.call(null,seq12591__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12592,G__12593,G__12594,seq12591__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t12722 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12722 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12723){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12723 = meta12723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12722.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12722.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12722.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12722.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12722.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12722.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12722.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12724){
var self__ = this;
var _12724__$1 = this;
return self__.meta12723;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12724,meta12723__$1){
var self__ = this;
var _12724__$1 = this;
return (new cljs.core.async.t12722(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12723__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12722.cljs$lang$type = true;

cljs.core.async.t12722.cljs$lang$ctorStr = "cljs.core.async/t12722";

cljs.core.async.t12722.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t12722");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12722 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t12722(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12723){
return (new cljs.core.async.t12722(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12723));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12722(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7864__auto___12841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___12841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___12841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12794){
var state_val_12795 = (state_12794[(1)]);
if((state_val_12795 === (7))){
var inst_12738 = (state_12794[(7)]);
var inst_12743 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12738);
var state_12794__$1 = state_12794;
var statearr_12796_12842 = state_12794__$1;
(statearr_12796_12842[(2)] = inst_12743);

(statearr_12796_12842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (20))){
var inst_12753 = (state_12794[(8)]);
var state_12794__$1 = state_12794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12794__$1,(23),out,inst_12753);
} else {
if((state_val_12795 === (1))){
var inst_12728 = (state_12794[(9)]);
var inst_12728__$1 = calc_state.call(null);
var inst_12729 = cljs.core.seq_QMARK_.call(null,inst_12728__$1);
var state_12794__$1 = (function (){var statearr_12797 = state_12794;
(statearr_12797[(9)] = inst_12728__$1);

return statearr_12797;
})();
if(inst_12729){
var statearr_12798_12843 = state_12794__$1;
(statearr_12798_12843[(1)] = (2));

} else {
var statearr_12799_12844 = state_12794__$1;
(statearr_12799_12844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (24))){
var inst_12746 = (state_12794[(10)]);
var inst_12738 = inst_12746;
var state_12794__$1 = (function (){var statearr_12800 = state_12794;
(statearr_12800[(7)] = inst_12738);

return statearr_12800;
})();
var statearr_12801_12845 = state_12794__$1;
(statearr_12801_12845[(2)] = null);

(statearr_12801_12845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (4))){
var inst_12728 = (state_12794[(9)]);
var inst_12734 = (state_12794[(2)]);
var inst_12735 = cljs.core.get.call(null,inst_12734,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12736 = cljs.core.get.call(null,inst_12734,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12737 = cljs.core.get.call(null,inst_12734,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12738 = inst_12728;
var state_12794__$1 = (function (){var statearr_12802 = state_12794;
(statearr_12802[(11)] = inst_12737);

(statearr_12802[(12)] = inst_12735);

(statearr_12802[(7)] = inst_12738);

(statearr_12802[(13)] = inst_12736);

return statearr_12802;
})();
var statearr_12803_12846 = state_12794__$1;
(statearr_12803_12846[(2)] = null);

(statearr_12803_12846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (15))){
var state_12794__$1 = state_12794;
var statearr_12804_12847 = state_12794__$1;
(statearr_12804_12847[(2)] = null);

(statearr_12804_12847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (21))){
var inst_12746 = (state_12794[(10)]);
var inst_12738 = inst_12746;
var state_12794__$1 = (function (){var statearr_12805 = state_12794;
(statearr_12805[(7)] = inst_12738);

return statearr_12805;
})();
var statearr_12806_12848 = state_12794__$1;
(statearr_12806_12848[(2)] = null);

(statearr_12806_12848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (13))){
var inst_12790 = (state_12794[(2)]);
var state_12794__$1 = state_12794;
var statearr_12807_12849 = state_12794__$1;
(statearr_12807_12849[(2)] = inst_12790);

(statearr_12807_12849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (22))){
var inst_12788 = (state_12794[(2)]);
var state_12794__$1 = state_12794;
var statearr_12808_12850 = state_12794__$1;
(statearr_12808_12850[(2)] = inst_12788);

(statearr_12808_12850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (6))){
var inst_12792 = (state_12794[(2)]);
var state_12794__$1 = state_12794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12794__$1,inst_12792);
} else {
if((state_val_12795 === (25))){
var state_12794__$1 = state_12794;
var statearr_12809_12851 = state_12794__$1;
(statearr_12809_12851[(2)] = null);

(statearr_12809_12851[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (17))){
var inst_12768 = (state_12794[(14)]);
var state_12794__$1 = state_12794;
var statearr_12810_12852 = state_12794__$1;
(statearr_12810_12852[(2)] = inst_12768);

(statearr_12810_12852[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (3))){
var inst_12728 = (state_12794[(9)]);
var state_12794__$1 = state_12794;
var statearr_12811_12853 = state_12794__$1;
(statearr_12811_12853[(2)] = inst_12728);

(statearr_12811_12853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (12))){
var inst_12768 = (state_12794[(14)]);
var inst_12754 = (state_12794[(15)]);
var inst_12749 = (state_12794[(16)]);
var inst_12768__$1 = inst_12749.call(null,inst_12754);
var state_12794__$1 = (function (){var statearr_12812 = state_12794;
(statearr_12812[(14)] = inst_12768__$1);

return statearr_12812;
})();
if(cljs.core.truth_(inst_12768__$1)){
var statearr_12813_12854 = state_12794__$1;
(statearr_12813_12854[(1)] = (17));

} else {
var statearr_12814_12855 = state_12794__$1;
(statearr_12814_12855[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (2))){
var inst_12728 = (state_12794[(9)]);
var inst_12731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12728);
var state_12794__$1 = state_12794;
var statearr_12815_12856 = state_12794__$1;
(statearr_12815_12856[(2)] = inst_12731);

(statearr_12815_12856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (23))){
var inst_12779 = (state_12794[(2)]);
var state_12794__$1 = state_12794;
if(cljs.core.truth_(inst_12779)){
var statearr_12816_12857 = state_12794__$1;
(statearr_12816_12857[(1)] = (24));

} else {
var statearr_12817_12858 = state_12794__$1;
(statearr_12817_12858[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (19))){
var inst_12776 = (state_12794[(2)]);
var state_12794__$1 = state_12794;
if(cljs.core.truth_(inst_12776)){
var statearr_12818_12859 = state_12794__$1;
(statearr_12818_12859[(1)] = (20));

} else {
var statearr_12819_12860 = state_12794__$1;
(statearr_12819_12860[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (11))){
var inst_12753 = (state_12794[(8)]);
var inst_12759 = (inst_12753 == null);
var state_12794__$1 = state_12794;
if(cljs.core.truth_(inst_12759)){
var statearr_12820_12861 = state_12794__$1;
(statearr_12820_12861[(1)] = (14));

} else {
var statearr_12821_12862 = state_12794__$1;
(statearr_12821_12862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (9))){
var inst_12746 = (state_12794[(10)]);
var inst_12746__$1 = (state_12794[(2)]);
var inst_12747 = cljs.core.get.call(null,inst_12746__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12748 = cljs.core.get.call(null,inst_12746__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12749 = cljs.core.get.call(null,inst_12746__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_12794__$1 = (function (){var statearr_12822 = state_12794;
(statearr_12822[(10)] = inst_12746__$1);

(statearr_12822[(17)] = inst_12748);

(statearr_12822[(16)] = inst_12749);

return statearr_12822;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12794__$1,(10),inst_12747);
} else {
if((state_val_12795 === (5))){
var inst_12738 = (state_12794[(7)]);
var inst_12741 = cljs.core.seq_QMARK_.call(null,inst_12738);
var state_12794__$1 = state_12794;
if(inst_12741){
var statearr_12823_12863 = state_12794__$1;
(statearr_12823_12863[(1)] = (7));

} else {
var statearr_12824_12864 = state_12794__$1;
(statearr_12824_12864[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (14))){
var inst_12754 = (state_12794[(15)]);
var inst_12761 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12754);
var state_12794__$1 = state_12794;
var statearr_12825_12865 = state_12794__$1;
(statearr_12825_12865[(2)] = inst_12761);

(statearr_12825_12865[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (26))){
var inst_12784 = (state_12794[(2)]);
var state_12794__$1 = state_12794;
var statearr_12826_12866 = state_12794__$1;
(statearr_12826_12866[(2)] = inst_12784);

(statearr_12826_12866[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (16))){
var inst_12764 = (state_12794[(2)]);
var inst_12765 = calc_state.call(null);
var inst_12738 = inst_12765;
var state_12794__$1 = (function (){var statearr_12827 = state_12794;
(statearr_12827[(18)] = inst_12764);

(statearr_12827[(7)] = inst_12738);

return statearr_12827;
})();
var statearr_12828_12867 = state_12794__$1;
(statearr_12828_12867[(2)] = null);

(statearr_12828_12867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (10))){
var inst_12754 = (state_12794[(15)]);
var inst_12753 = (state_12794[(8)]);
var inst_12752 = (state_12794[(2)]);
var inst_12753__$1 = cljs.core.nth.call(null,inst_12752,(0),null);
var inst_12754__$1 = cljs.core.nth.call(null,inst_12752,(1),null);
var inst_12755 = (inst_12753__$1 == null);
var inst_12756 = cljs.core._EQ_.call(null,inst_12754__$1,change);
var inst_12757 = (inst_12755) || (inst_12756);
var state_12794__$1 = (function (){var statearr_12829 = state_12794;
(statearr_12829[(15)] = inst_12754__$1);

(statearr_12829[(8)] = inst_12753__$1);

return statearr_12829;
})();
if(cljs.core.truth_(inst_12757)){
var statearr_12830_12868 = state_12794__$1;
(statearr_12830_12868[(1)] = (11));

} else {
var statearr_12831_12869 = state_12794__$1;
(statearr_12831_12869[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (18))){
var inst_12754 = (state_12794[(15)]);
var inst_12748 = (state_12794[(17)]);
var inst_12749 = (state_12794[(16)]);
var inst_12771 = cljs.core.empty_QMARK_.call(null,inst_12749);
var inst_12772 = inst_12748.call(null,inst_12754);
var inst_12773 = cljs.core.not.call(null,inst_12772);
var inst_12774 = (inst_12771) && (inst_12773);
var state_12794__$1 = state_12794;
var statearr_12832_12870 = state_12794__$1;
(statearr_12832_12870[(2)] = inst_12774);

(statearr_12832_12870[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12795 === (8))){
var inst_12738 = (state_12794[(7)]);
var state_12794__$1 = state_12794;
var statearr_12833_12871 = state_12794__$1;
(statearr_12833_12871[(2)] = inst_12738);

(statearr_12833_12871[(1)] = (9));


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
}
}
});})(c__7864__auto___12841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7802__auto__,c__7864__auto___12841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7803__auto__ = null;
var cljs$core$async$mix_$_state_machine__7803__auto____0 = (function (){
var statearr_12837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12837[(0)] = cljs$core$async$mix_$_state_machine__7803__auto__);

(statearr_12837[(1)] = (1));

return statearr_12837;
});
var cljs$core$async$mix_$_state_machine__7803__auto____1 = (function (state_12794){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_12794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e12838){if((e12838 instanceof Object)){
var ex__7806__auto__ = e12838;
var statearr_12839_12872 = state_12794;
(statearr_12839_12872[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12873 = state_12794;
state_12794 = G__12873;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7803__auto__ = function(state_12794){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7803__auto____1.call(this,state_12794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7803__auto____0;
cljs$core$async$mix_$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7803__auto____1;
return cljs$core$async$mix_$_state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___12841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7866__auto__ = (function (){var statearr_12840 = f__7865__auto__.call(null);
(statearr_12840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___12841);

return statearr_12840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___12841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj12875 = {};
return obj12875;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4323__auto__ = p;
if(and__4323__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4323__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4971__auto__ = (((p == null))?null:p);
return (function (){var or__4335__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4323__auto__ = p;
if(and__4323__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4323__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4971__auto__ = (((p == null))?null:p);
return (function (){var or__4335__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__12877 = arguments.length;
switch (G__12877) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4323__auto__ = p;
if(and__4323__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4971__auto__ = (((p == null))?null:p);
return (function (){var or__4335__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4323__auto__ = p;
if(and__4323__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4971__auto__ = (((p == null))?null:p);
return (function (){var or__4335__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4971__auto__)]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__12881 = arguments.length;
switch (G__12881) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4335__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4335__auto__,mults){
return (function (p1__12879_SHARP_){
if(cljs.core.truth_(p1__12879_SHARP_.call(null,topic))){
return p1__12879_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12879_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4335__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12882 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12882 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta12883){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta12883 = meta12883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12882.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12882.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12882.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t12882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12882.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12884){
var self__ = this;
var _12884__$1 = this;
return self__.meta12883;
});})(mults,ensure_mult))
;

cljs.core.async.t12882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12884,meta12883__$1){
var self__ = this;
var _12884__$1 = this;
return (new cljs.core.async.t12882(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta12883__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12882.cljs$lang$type = true;

cljs.core.async.t12882.cljs$lang$ctorStr = "cljs.core.async/t12882";

cljs.core.async.t12882.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t12882");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12882 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t12882(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta12883){
return (new cljs.core.async.t12882(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta12883));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12882(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7864__auto___13005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___13005,mults,ensure_mult,p){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___13005,mults,ensure_mult,p){
return (function (state_12956){
var state_val_12957 = (state_12956[(1)]);
if((state_val_12957 === (7))){
var inst_12952 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12958_13006 = state_12956__$1;
(statearr_12958_13006[(2)] = inst_12952);

(statearr_12958_13006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (20))){
var state_12956__$1 = state_12956;
var statearr_12959_13007 = state_12956__$1;
(statearr_12959_13007[(2)] = null);

(statearr_12959_13007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (1))){
var state_12956__$1 = state_12956;
var statearr_12960_13008 = state_12956__$1;
(statearr_12960_13008[(2)] = null);

(statearr_12960_13008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (24))){
var inst_12935 = (state_12956[(7)]);
var inst_12944 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12935);
var state_12956__$1 = state_12956;
var statearr_12961_13009 = state_12956__$1;
(statearr_12961_13009[(2)] = inst_12944);

(statearr_12961_13009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (4))){
var inst_12887 = (state_12956[(8)]);
var inst_12887__$1 = (state_12956[(2)]);
var inst_12888 = (inst_12887__$1 == null);
var state_12956__$1 = (function (){var statearr_12962 = state_12956;
(statearr_12962[(8)] = inst_12887__$1);

return statearr_12962;
})();
if(cljs.core.truth_(inst_12888)){
var statearr_12963_13010 = state_12956__$1;
(statearr_12963_13010[(1)] = (5));

} else {
var statearr_12964_13011 = state_12956__$1;
(statearr_12964_13011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (15))){
var inst_12929 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12965_13012 = state_12956__$1;
(statearr_12965_13012[(2)] = inst_12929);

(statearr_12965_13012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (21))){
var inst_12949 = (state_12956[(2)]);
var state_12956__$1 = (function (){var statearr_12966 = state_12956;
(statearr_12966[(9)] = inst_12949);

return statearr_12966;
})();
var statearr_12967_13013 = state_12956__$1;
(statearr_12967_13013[(2)] = null);

(statearr_12967_13013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (13))){
var inst_12911 = (state_12956[(10)]);
var inst_12913 = cljs.core.chunked_seq_QMARK_.call(null,inst_12911);
var state_12956__$1 = state_12956;
if(inst_12913){
var statearr_12968_13014 = state_12956__$1;
(statearr_12968_13014[(1)] = (16));

} else {
var statearr_12969_13015 = state_12956__$1;
(statearr_12969_13015[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (22))){
var inst_12941 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
if(cljs.core.truth_(inst_12941)){
var statearr_12970_13016 = state_12956__$1;
(statearr_12970_13016[(1)] = (23));

} else {
var statearr_12971_13017 = state_12956__$1;
(statearr_12971_13017[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (6))){
var inst_12937 = (state_12956[(11)]);
var inst_12887 = (state_12956[(8)]);
var inst_12935 = (state_12956[(7)]);
var inst_12935__$1 = topic_fn.call(null,inst_12887);
var inst_12936 = cljs.core.deref.call(null,mults);
var inst_12937__$1 = cljs.core.get.call(null,inst_12936,inst_12935__$1);
var state_12956__$1 = (function (){var statearr_12972 = state_12956;
(statearr_12972[(11)] = inst_12937__$1);

(statearr_12972[(7)] = inst_12935__$1);

return statearr_12972;
})();
if(cljs.core.truth_(inst_12937__$1)){
var statearr_12973_13018 = state_12956__$1;
(statearr_12973_13018[(1)] = (19));

} else {
var statearr_12974_13019 = state_12956__$1;
(statearr_12974_13019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (25))){
var inst_12946 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12975_13020 = state_12956__$1;
(statearr_12975_13020[(2)] = inst_12946);

(statearr_12975_13020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (17))){
var inst_12911 = (state_12956[(10)]);
var inst_12920 = cljs.core.first.call(null,inst_12911);
var inst_12921 = cljs.core.async.muxch_STAR_.call(null,inst_12920);
var inst_12922 = cljs.core.async.close_BANG_.call(null,inst_12921);
var inst_12923 = cljs.core.next.call(null,inst_12911);
var inst_12897 = inst_12923;
var inst_12898 = null;
var inst_12899 = (0);
var inst_12900 = (0);
var state_12956__$1 = (function (){var statearr_12976 = state_12956;
(statearr_12976[(12)] = inst_12897);

(statearr_12976[(13)] = inst_12900);

(statearr_12976[(14)] = inst_12898);

(statearr_12976[(15)] = inst_12899);

(statearr_12976[(16)] = inst_12922);

return statearr_12976;
})();
var statearr_12977_13021 = state_12956__$1;
(statearr_12977_13021[(2)] = null);

(statearr_12977_13021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (3))){
var inst_12954 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12956__$1,inst_12954);
} else {
if((state_val_12957 === (12))){
var inst_12931 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12978_13022 = state_12956__$1;
(statearr_12978_13022[(2)] = inst_12931);

(statearr_12978_13022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (2))){
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12956__$1,(4),ch);
} else {
if((state_val_12957 === (23))){
var state_12956__$1 = state_12956;
var statearr_12979_13023 = state_12956__$1;
(statearr_12979_13023[(2)] = null);

(statearr_12979_13023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (19))){
var inst_12937 = (state_12956[(11)]);
var inst_12887 = (state_12956[(8)]);
var inst_12939 = cljs.core.async.muxch_STAR_.call(null,inst_12937);
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12956__$1,(22),inst_12939,inst_12887);
} else {
if((state_val_12957 === (11))){
var inst_12897 = (state_12956[(12)]);
var inst_12911 = (state_12956[(10)]);
var inst_12911__$1 = cljs.core.seq.call(null,inst_12897);
var state_12956__$1 = (function (){var statearr_12980 = state_12956;
(statearr_12980[(10)] = inst_12911__$1);

return statearr_12980;
})();
if(inst_12911__$1){
var statearr_12981_13024 = state_12956__$1;
(statearr_12981_13024[(1)] = (13));

} else {
var statearr_12982_13025 = state_12956__$1;
(statearr_12982_13025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (9))){
var inst_12933 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12983_13026 = state_12956__$1;
(statearr_12983_13026[(2)] = inst_12933);

(statearr_12983_13026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (5))){
var inst_12894 = cljs.core.deref.call(null,mults);
var inst_12895 = cljs.core.vals.call(null,inst_12894);
var inst_12896 = cljs.core.seq.call(null,inst_12895);
var inst_12897 = inst_12896;
var inst_12898 = null;
var inst_12899 = (0);
var inst_12900 = (0);
var state_12956__$1 = (function (){var statearr_12984 = state_12956;
(statearr_12984[(12)] = inst_12897);

(statearr_12984[(13)] = inst_12900);

(statearr_12984[(14)] = inst_12898);

(statearr_12984[(15)] = inst_12899);

return statearr_12984;
})();
var statearr_12985_13027 = state_12956__$1;
(statearr_12985_13027[(2)] = null);

(statearr_12985_13027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (14))){
var state_12956__$1 = state_12956;
var statearr_12989_13028 = state_12956__$1;
(statearr_12989_13028[(2)] = null);

(statearr_12989_13028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (16))){
var inst_12911 = (state_12956[(10)]);
var inst_12915 = cljs.core.chunk_first.call(null,inst_12911);
var inst_12916 = cljs.core.chunk_rest.call(null,inst_12911);
var inst_12917 = cljs.core.count.call(null,inst_12915);
var inst_12897 = inst_12916;
var inst_12898 = inst_12915;
var inst_12899 = inst_12917;
var inst_12900 = (0);
var state_12956__$1 = (function (){var statearr_12990 = state_12956;
(statearr_12990[(12)] = inst_12897);

(statearr_12990[(13)] = inst_12900);

(statearr_12990[(14)] = inst_12898);

(statearr_12990[(15)] = inst_12899);

return statearr_12990;
})();
var statearr_12991_13029 = state_12956__$1;
(statearr_12991_13029[(2)] = null);

(statearr_12991_13029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (10))){
var inst_12897 = (state_12956[(12)]);
var inst_12900 = (state_12956[(13)]);
var inst_12898 = (state_12956[(14)]);
var inst_12899 = (state_12956[(15)]);
var inst_12905 = cljs.core._nth.call(null,inst_12898,inst_12900);
var inst_12906 = cljs.core.async.muxch_STAR_.call(null,inst_12905);
var inst_12907 = cljs.core.async.close_BANG_.call(null,inst_12906);
var inst_12908 = (inst_12900 + (1));
var tmp12986 = inst_12897;
var tmp12987 = inst_12898;
var tmp12988 = inst_12899;
var inst_12897__$1 = tmp12986;
var inst_12898__$1 = tmp12987;
var inst_12899__$1 = tmp12988;
var inst_12900__$1 = inst_12908;
var state_12956__$1 = (function (){var statearr_12992 = state_12956;
(statearr_12992[(12)] = inst_12897__$1);

(statearr_12992[(13)] = inst_12900__$1);

(statearr_12992[(14)] = inst_12898__$1);

(statearr_12992[(15)] = inst_12899__$1);

(statearr_12992[(17)] = inst_12907);

return statearr_12992;
})();
var statearr_12993_13030 = state_12956__$1;
(statearr_12993_13030[(2)] = null);

(statearr_12993_13030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (18))){
var inst_12926 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12994_13031 = state_12956__$1;
(statearr_12994_13031[(2)] = inst_12926);

(statearr_12994_13031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (8))){
var inst_12900 = (state_12956[(13)]);
var inst_12899 = (state_12956[(15)]);
var inst_12902 = (inst_12900 < inst_12899);
var inst_12903 = inst_12902;
var state_12956__$1 = state_12956;
if(cljs.core.truth_(inst_12903)){
var statearr_12995_13032 = state_12956__$1;
(statearr_12995_13032[(1)] = (10));

} else {
var statearr_12996_13033 = state_12956__$1;
(statearr_12996_13033[(1)] = (11));

}

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
}
});})(c__7864__auto___13005,mults,ensure_mult,p))
;
return ((function (switch__7802__auto__,c__7864__auto___13005,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_13000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13000[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_13000[(1)] = (1));

return statearr_13000;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_12956){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_12956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13001){if((e13001 instanceof Object)){
var ex__7806__auto__ = e13001;
var statearr_13002_13034 = state_12956;
(statearr_13002_13034[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13035 = state_12956;
state_12956 = G__13035;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_12956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_12956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___13005,mults,ensure_mult,p))
})();
var state__7866__auto__ = (function (){var statearr_13003 = f__7865__auto__.call(null);
(statearr_13003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___13005);

return statearr_13003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___13005,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__13037 = arguments.length;
switch (G__13037) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__13040 = arguments.length;
switch (G__13040) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__13043 = arguments.length;
switch (G__13043) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7864__auto___13113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___13113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___13113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13082){
var state_val_13083 = (state_13082[(1)]);
if((state_val_13083 === (7))){
var state_13082__$1 = state_13082;
var statearr_13084_13114 = state_13082__$1;
(statearr_13084_13114[(2)] = null);

(statearr_13084_13114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (1))){
var state_13082__$1 = state_13082;
var statearr_13085_13115 = state_13082__$1;
(statearr_13085_13115[(2)] = null);

(statearr_13085_13115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (4))){
var inst_13046 = (state_13082[(7)]);
var inst_13048 = (inst_13046 < cnt);
var state_13082__$1 = state_13082;
if(cljs.core.truth_(inst_13048)){
var statearr_13086_13116 = state_13082__$1;
(statearr_13086_13116[(1)] = (6));

} else {
var statearr_13087_13117 = state_13082__$1;
(statearr_13087_13117[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (15))){
var inst_13078 = (state_13082[(2)]);
var state_13082__$1 = state_13082;
var statearr_13088_13118 = state_13082__$1;
(statearr_13088_13118[(2)] = inst_13078);

(statearr_13088_13118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (13))){
var inst_13071 = cljs.core.async.close_BANG_.call(null,out);
var state_13082__$1 = state_13082;
var statearr_13089_13119 = state_13082__$1;
(statearr_13089_13119[(2)] = inst_13071);

(statearr_13089_13119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (6))){
var state_13082__$1 = state_13082;
var statearr_13090_13120 = state_13082__$1;
(statearr_13090_13120[(2)] = null);

(statearr_13090_13120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (3))){
var inst_13080 = (state_13082[(2)]);
var state_13082__$1 = state_13082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13082__$1,inst_13080);
} else {
if((state_val_13083 === (12))){
var inst_13068 = (state_13082[(8)]);
var inst_13068__$1 = (state_13082[(2)]);
var inst_13069 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13068__$1);
var state_13082__$1 = (function (){var statearr_13091 = state_13082;
(statearr_13091[(8)] = inst_13068__$1);

return statearr_13091;
})();
if(cljs.core.truth_(inst_13069)){
var statearr_13092_13121 = state_13082__$1;
(statearr_13092_13121[(1)] = (13));

} else {
var statearr_13093_13122 = state_13082__$1;
(statearr_13093_13122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (2))){
var inst_13045 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13046 = (0);
var state_13082__$1 = (function (){var statearr_13094 = state_13082;
(statearr_13094[(9)] = inst_13045);

(statearr_13094[(7)] = inst_13046);

return statearr_13094;
})();
var statearr_13095_13123 = state_13082__$1;
(statearr_13095_13123[(2)] = null);

(statearr_13095_13123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (11))){
var inst_13046 = (state_13082[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13082,(10),Object,null,(9));
var inst_13055 = chs__$1.call(null,inst_13046);
var inst_13056 = done.call(null,inst_13046);
var inst_13057 = cljs.core.async.take_BANG_.call(null,inst_13055,inst_13056);
var state_13082__$1 = state_13082;
var statearr_13096_13124 = state_13082__$1;
(statearr_13096_13124[(2)] = inst_13057);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (9))){
var inst_13046 = (state_13082[(7)]);
var inst_13059 = (state_13082[(2)]);
var inst_13060 = (inst_13046 + (1));
var inst_13046__$1 = inst_13060;
var state_13082__$1 = (function (){var statearr_13097 = state_13082;
(statearr_13097[(10)] = inst_13059);

(statearr_13097[(7)] = inst_13046__$1);

return statearr_13097;
})();
var statearr_13098_13125 = state_13082__$1;
(statearr_13098_13125[(2)] = null);

(statearr_13098_13125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (5))){
var inst_13066 = (state_13082[(2)]);
var state_13082__$1 = (function (){var statearr_13099 = state_13082;
(statearr_13099[(11)] = inst_13066);

return statearr_13099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13082__$1,(12),dchan);
} else {
if((state_val_13083 === (14))){
var inst_13068 = (state_13082[(8)]);
var inst_13073 = cljs.core.apply.call(null,f,inst_13068);
var state_13082__$1 = state_13082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13082__$1,(16),out,inst_13073);
} else {
if((state_val_13083 === (16))){
var inst_13075 = (state_13082[(2)]);
var state_13082__$1 = (function (){var statearr_13100 = state_13082;
(statearr_13100[(12)] = inst_13075);

return statearr_13100;
})();
var statearr_13101_13126 = state_13082__$1;
(statearr_13101_13126[(2)] = null);

(statearr_13101_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (10))){
var inst_13050 = (state_13082[(2)]);
var inst_13051 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13082__$1 = (function (){var statearr_13102 = state_13082;
(statearr_13102[(13)] = inst_13050);

return statearr_13102;
})();
var statearr_13103_13127 = state_13082__$1;
(statearr_13103_13127[(2)] = inst_13051);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13083 === (8))){
var inst_13064 = (state_13082[(2)]);
var state_13082__$1 = state_13082;
var statearr_13104_13128 = state_13082__$1;
(statearr_13104_13128[(2)] = inst_13064);

(statearr_13104_13128[(1)] = (5));


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
}
}
}
}
});})(c__7864__auto___13113,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7802__auto__,c__7864__auto___13113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_13108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13108[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_13108[(1)] = (1));

return statearr_13108;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_13082){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_13082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13109){if((e13109 instanceof Object)){
var ex__7806__auto__ = e13109;
var statearr_13110_13129 = state_13082;
(statearr_13110_13129[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13130 = state_13082;
state_13082 = G__13130;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_13082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_13082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___13113,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7866__auto__ = (function (){var statearr_13111 = f__7865__auto__.call(null);
(statearr_13111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___13113);

return statearr_13111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___13113,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__13133 = arguments.length;
switch (G__13133) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7864__auto___13188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___13188,out){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___13188,out){
return (function (state_13163){
var state_val_13164 = (state_13163[(1)]);
if((state_val_13164 === (7))){
var inst_13142 = (state_13163[(7)]);
var inst_13143 = (state_13163[(8)]);
var inst_13142__$1 = (state_13163[(2)]);
var inst_13143__$1 = cljs.core.nth.call(null,inst_13142__$1,(0),null);
var inst_13144 = cljs.core.nth.call(null,inst_13142__$1,(1),null);
var inst_13145 = (inst_13143__$1 == null);
var state_13163__$1 = (function (){var statearr_13165 = state_13163;
(statearr_13165[(7)] = inst_13142__$1);

(statearr_13165[(9)] = inst_13144);

(statearr_13165[(8)] = inst_13143__$1);

return statearr_13165;
})();
if(cljs.core.truth_(inst_13145)){
var statearr_13166_13189 = state_13163__$1;
(statearr_13166_13189[(1)] = (8));

} else {
var statearr_13167_13190 = state_13163__$1;
(statearr_13167_13190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13164 === (1))){
var inst_13134 = cljs.core.vec.call(null,chs);
var inst_13135 = inst_13134;
var state_13163__$1 = (function (){var statearr_13168 = state_13163;
(statearr_13168[(10)] = inst_13135);

return statearr_13168;
})();
var statearr_13169_13191 = state_13163__$1;
(statearr_13169_13191[(2)] = null);

(statearr_13169_13191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13164 === (4))){
var inst_13135 = (state_13163[(10)]);
var state_13163__$1 = state_13163;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13163__$1,(7),inst_13135);
} else {
if((state_val_13164 === (6))){
var inst_13159 = (state_13163[(2)]);
var state_13163__$1 = state_13163;
var statearr_13170_13192 = state_13163__$1;
(statearr_13170_13192[(2)] = inst_13159);

(statearr_13170_13192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13164 === (3))){
var inst_13161 = (state_13163[(2)]);
var state_13163__$1 = state_13163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13163__$1,inst_13161);
} else {
if((state_val_13164 === (2))){
var inst_13135 = (state_13163[(10)]);
var inst_13137 = cljs.core.count.call(null,inst_13135);
var inst_13138 = (inst_13137 > (0));
var state_13163__$1 = state_13163;
if(cljs.core.truth_(inst_13138)){
var statearr_13172_13193 = state_13163__$1;
(statearr_13172_13193[(1)] = (4));

} else {
var statearr_13173_13194 = state_13163__$1;
(statearr_13173_13194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13164 === (11))){
var inst_13135 = (state_13163[(10)]);
var inst_13152 = (state_13163[(2)]);
var tmp13171 = inst_13135;
var inst_13135__$1 = tmp13171;
var state_13163__$1 = (function (){var statearr_13174 = state_13163;
(statearr_13174[(11)] = inst_13152);

(statearr_13174[(10)] = inst_13135__$1);

return statearr_13174;
})();
var statearr_13175_13195 = state_13163__$1;
(statearr_13175_13195[(2)] = null);

(statearr_13175_13195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13164 === (9))){
var inst_13143 = (state_13163[(8)]);
var state_13163__$1 = state_13163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13163__$1,(11),out,inst_13143);
} else {
if((state_val_13164 === (5))){
var inst_13157 = cljs.core.async.close_BANG_.call(null,out);
var state_13163__$1 = state_13163;
var statearr_13176_13196 = state_13163__$1;
(statearr_13176_13196[(2)] = inst_13157);

(statearr_13176_13196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13164 === (10))){
var inst_13155 = (state_13163[(2)]);
var state_13163__$1 = state_13163;
var statearr_13177_13197 = state_13163__$1;
(statearr_13177_13197[(2)] = inst_13155);

(statearr_13177_13197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13164 === (8))){
var inst_13135 = (state_13163[(10)]);
var inst_13142 = (state_13163[(7)]);
var inst_13144 = (state_13163[(9)]);
var inst_13143 = (state_13163[(8)]);
var inst_13147 = (function (){var c = inst_13144;
var v = inst_13143;
var vec__13140 = inst_13142;
var cs = inst_13135;
return ((function (c,v,vec__13140,cs,inst_13135,inst_13142,inst_13144,inst_13143,state_val_13164,c__7864__auto___13188,out){
return (function (p1__13131_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13131_SHARP_);
});
;})(c,v,vec__13140,cs,inst_13135,inst_13142,inst_13144,inst_13143,state_val_13164,c__7864__auto___13188,out))
})();
var inst_13148 = cljs.core.filterv.call(null,inst_13147,inst_13135);
var inst_13135__$1 = inst_13148;
var state_13163__$1 = (function (){var statearr_13178 = state_13163;
(statearr_13178[(10)] = inst_13135__$1);

return statearr_13178;
})();
var statearr_13179_13198 = state_13163__$1;
(statearr_13179_13198[(2)] = null);

(statearr_13179_13198[(1)] = (2));


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
});})(c__7864__auto___13188,out))
;
return ((function (switch__7802__auto__,c__7864__auto___13188,out){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_13183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13183[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_13183[(1)] = (1));

return statearr_13183;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_13163){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_13163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13184){if((e13184 instanceof Object)){
var ex__7806__auto__ = e13184;
var statearr_13185_13199 = state_13163;
(statearr_13185_13199[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13200 = state_13163;
state_13163 = G__13200;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_13163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_13163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___13188,out))
})();
var state__7866__auto__ = (function (){var statearr_13186 = f__7865__auto__.call(null);
(statearr_13186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___13188);

return statearr_13186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___13188,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__13202 = arguments.length;
switch (G__13202) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7864__auto___13250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___13250,out){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___13250,out){
return (function (state_13226){
var state_val_13227 = (state_13226[(1)]);
if((state_val_13227 === (7))){
var inst_13208 = (state_13226[(7)]);
var inst_13208__$1 = (state_13226[(2)]);
var inst_13209 = (inst_13208__$1 == null);
var inst_13210 = cljs.core.not.call(null,inst_13209);
var state_13226__$1 = (function (){var statearr_13228 = state_13226;
(statearr_13228[(7)] = inst_13208__$1);

return statearr_13228;
})();
if(inst_13210){
var statearr_13229_13251 = state_13226__$1;
(statearr_13229_13251[(1)] = (8));

} else {
var statearr_13230_13252 = state_13226__$1;
(statearr_13230_13252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13227 === (1))){
var inst_13203 = (0);
var state_13226__$1 = (function (){var statearr_13231 = state_13226;
(statearr_13231[(8)] = inst_13203);

return statearr_13231;
})();
var statearr_13232_13253 = state_13226__$1;
(statearr_13232_13253[(2)] = null);

(statearr_13232_13253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13227 === (4))){
var state_13226__$1 = state_13226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13226__$1,(7),ch);
} else {
if((state_val_13227 === (6))){
var inst_13221 = (state_13226[(2)]);
var state_13226__$1 = state_13226;
var statearr_13233_13254 = state_13226__$1;
(statearr_13233_13254[(2)] = inst_13221);

(statearr_13233_13254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13227 === (3))){
var inst_13223 = (state_13226[(2)]);
var inst_13224 = cljs.core.async.close_BANG_.call(null,out);
var state_13226__$1 = (function (){var statearr_13234 = state_13226;
(statearr_13234[(9)] = inst_13223);

return statearr_13234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13226__$1,inst_13224);
} else {
if((state_val_13227 === (2))){
var inst_13203 = (state_13226[(8)]);
var inst_13205 = (inst_13203 < n);
var state_13226__$1 = state_13226;
if(cljs.core.truth_(inst_13205)){
var statearr_13235_13255 = state_13226__$1;
(statearr_13235_13255[(1)] = (4));

} else {
var statearr_13236_13256 = state_13226__$1;
(statearr_13236_13256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13227 === (11))){
var inst_13203 = (state_13226[(8)]);
var inst_13213 = (state_13226[(2)]);
var inst_13214 = (inst_13203 + (1));
var inst_13203__$1 = inst_13214;
var state_13226__$1 = (function (){var statearr_13237 = state_13226;
(statearr_13237[(10)] = inst_13213);

(statearr_13237[(8)] = inst_13203__$1);

return statearr_13237;
})();
var statearr_13238_13257 = state_13226__$1;
(statearr_13238_13257[(2)] = null);

(statearr_13238_13257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13227 === (9))){
var state_13226__$1 = state_13226;
var statearr_13239_13258 = state_13226__$1;
(statearr_13239_13258[(2)] = null);

(statearr_13239_13258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13227 === (5))){
var state_13226__$1 = state_13226;
var statearr_13240_13259 = state_13226__$1;
(statearr_13240_13259[(2)] = null);

(statearr_13240_13259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13227 === (10))){
var inst_13218 = (state_13226[(2)]);
var state_13226__$1 = state_13226;
var statearr_13241_13260 = state_13226__$1;
(statearr_13241_13260[(2)] = inst_13218);

(statearr_13241_13260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13227 === (8))){
var inst_13208 = (state_13226[(7)]);
var state_13226__$1 = state_13226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13226__$1,(11),out,inst_13208);
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
});})(c__7864__auto___13250,out))
;
return ((function (switch__7802__auto__,c__7864__auto___13250,out){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_13245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13245[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_13245[(1)] = (1));

return statearr_13245;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_13226){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_13226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13246){if((e13246 instanceof Object)){
var ex__7806__auto__ = e13246;
var statearr_13247_13261 = state_13226;
(statearr_13247_13261[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13262 = state_13226;
state_13226 = G__13262;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_13226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_13226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___13250,out))
})();
var state__7866__auto__ = (function (){var statearr_13248 = f__7865__auto__.call(null);
(statearr_13248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___13250);

return statearr_13248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___13250,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t13270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13270 = (function (ch,f,map_LT_,meta13271){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13271 = meta13271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13273 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13273 = (function (fn1,_,meta13271,map_LT_,f,ch,meta13274){
this.fn1 = fn1;
this._ = _;
this.meta13271 = meta13271;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13274 = meta13274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13273.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13263_SHARP_){
return f1.call(null,(((p1__13263_SHARP_ == null))?null:self__.f.call(null,p1__13263_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13275){
var self__ = this;
var _13275__$1 = this;
return self__.meta13274;
});})(___$1))
;

cljs.core.async.t13273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13275,meta13274__$1){
var self__ = this;
var _13275__$1 = this;
return (new cljs.core.async.t13273(self__.fn1,self__._,self__.meta13271,self__.map_LT_,self__.f,self__.ch,meta13274__$1));
});})(___$1))
;

cljs.core.async.t13273.cljs$lang$type = true;

cljs.core.async.t13273.cljs$lang$ctorStr = "cljs.core.async/t13273";

cljs.core.async.t13273.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t13273");
});})(___$1))
;

cljs.core.async.__GT_t13273 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t13273(fn1__$1,___$2,meta13271__$1,map_LT___$1,f__$1,ch__$1,meta13274){
return (new cljs.core.async.t13273(fn1__$1,___$2,meta13271__$1,map_LT___$1,f__$1,ch__$1,meta13274));
});})(___$1))
;

}

return (new cljs.core.async.t13273(fn1,___$1,self__.meta13271,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4323__auto__ = ret;
if(cljs.core.truth_(and__4323__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4323__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t13270.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13272){
var self__ = this;
var _13272__$1 = this;
return self__.meta13271;
});

cljs.core.async.t13270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13272,meta13271__$1){
var self__ = this;
var _13272__$1 = this;
return (new cljs.core.async.t13270(self__.ch,self__.f,self__.map_LT_,meta13271__$1));
});

cljs.core.async.t13270.cljs$lang$type = true;

cljs.core.async.t13270.cljs$lang$ctorStr = "cljs.core.async/t13270";

cljs.core.async.t13270.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t13270");
});

cljs.core.async.__GT_t13270 = (function cljs$core$async$map_LT__$___GT_t13270(ch__$1,f__$1,map_LT___$1,meta13271){
return (new cljs.core.async.t13270(ch__$1,f__$1,map_LT___$1,meta13271));
});

}

return (new cljs.core.async.t13270(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t13279 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13279 = (function (ch,f,map_GT_,meta13280){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13280 = meta13280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13281){
var self__ = this;
var _13281__$1 = this;
return self__.meta13280;
});

cljs.core.async.t13279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13281,meta13280__$1){
var self__ = this;
var _13281__$1 = this;
return (new cljs.core.async.t13279(self__.ch,self__.f,self__.map_GT_,meta13280__$1));
});

cljs.core.async.t13279.cljs$lang$type = true;

cljs.core.async.t13279.cljs$lang$ctorStr = "cljs.core.async/t13279";

cljs.core.async.t13279.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t13279");
});

cljs.core.async.__GT_t13279 = (function cljs$core$async$map_GT__$___GT_t13279(ch__$1,f__$1,map_GT___$1,meta13280){
return (new cljs.core.async.t13279(ch__$1,f__$1,map_GT___$1,meta13280));
});

}

return (new cljs.core.async.t13279(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t13285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13285 = (function (ch,p,filter_GT_,meta13286){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13286 = meta13286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13287){
var self__ = this;
var _13287__$1 = this;
return self__.meta13286;
});

cljs.core.async.t13285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13287,meta13286__$1){
var self__ = this;
var _13287__$1 = this;
return (new cljs.core.async.t13285(self__.ch,self__.p,self__.filter_GT_,meta13286__$1));
});

cljs.core.async.t13285.cljs$lang$type = true;

cljs.core.async.t13285.cljs$lang$ctorStr = "cljs.core.async/t13285";

cljs.core.async.t13285.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"cljs.core.async/t13285");
});

cljs.core.async.__GT_t13285 = (function cljs$core$async$filter_GT__$___GT_t13285(ch__$1,p__$1,filter_GT___$1,meta13286){
return (new cljs.core.async.t13285(ch__$1,p__$1,filter_GT___$1,meta13286));
});

}

return (new cljs.core.async.t13285(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__13289 = arguments.length;
switch (G__13289) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7864__auto___13332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___13332,out){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___13332,out){
return (function (state_13310){
var state_val_13311 = (state_13310[(1)]);
if((state_val_13311 === (7))){
var inst_13306 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
var statearr_13312_13333 = state_13310__$1;
(statearr_13312_13333[(2)] = inst_13306);

(statearr_13312_13333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (1))){
var state_13310__$1 = state_13310;
var statearr_13313_13334 = state_13310__$1;
(statearr_13313_13334[(2)] = null);

(statearr_13313_13334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (4))){
var inst_13292 = (state_13310[(7)]);
var inst_13292__$1 = (state_13310[(2)]);
var inst_13293 = (inst_13292__$1 == null);
var state_13310__$1 = (function (){var statearr_13314 = state_13310;
(statearr_13314[(7)] = inst_13292__$1);

return statearr_13314;
})();
if(cljs.core.truth_(inst_13293)){
var statearr_13315_13335 = state_13310__$1;
(statearr_13315_13335[(1)] = (5));

} else {
var statearr_13316_13336 = state_13310__$1;
(statearr_13316_13336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (6))){
var inst_13292 = (state_13310[(7)]);
var inst_13297 = p.call(null,inst_13292);
var state_13310__$1 = state_13310;
if(cljs.core.truth_(inst_13297)){
var statearr_13317_13337 = state_13310__$1;
(statearr_13317_13337[(1)] = (8));

} else {
var statearr_13318_13338 = state_13310__$1;
(statearr_13318_13338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (3))){
var inst_13308 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13310__$1,inst_13308);
} else {
if((state_val_13311 === (2))){
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13310__$1,(4),ch);
} else {
if((state_val_13311 === (11))){
var inst_13300 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
var statearr_13319_13339 = state_13310__$1;
(statearr_13319_13339[(2)] = inst_13300);

(statearr_13319_13339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (9))){
var state_13310__$1 = state_13310;
var statearr_13320_13340 = state_13310__$1;
(statearr_13320_13340[(2)] = null);

(statearr_13320_13340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (5))){
var inst_13295 = cljs.core.async.close_BANG_.call(null,out);
var state_13310__$1 = state_13310;
var statearr_13321_13341 = state_13310__$1;
(statearr_13321_13341[(2)] = inst_13295);

(statearr_13321_13341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (10))){
var inst_13303 = (state_13310[(2)]);
var state_13310__$1 = (function (){var statearr_13322 = state_13310;
(statearr_13322[(8)] = inst_13303);

return statearr_13322;
})();
var statearr_13323_13342 = state_13310__$1;
(statearr_13323_13342[(2)] = null);

(statearr_13323_13342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (8))){
var inst_13292 = (state_13310[(7)]);
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13310__$1,(11),out,inst_13292);
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
});})(c__7864__auto___13332,out))
;
return ((function (switch__7802__auto__,c__7864__auto___13332,out){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_13327 = [null,null,null,null,null,null,null,null,null];
(statearr_13327[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_13327[(1)] = (1));

return statearr_13327;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_13310){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_13310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13328){if((e13328 instanceof Object)){
var ex__7806__auto__ = e13328;
var statearr_13329_13343 = state_13310;
(statearr_13329_13343[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13344 = state_13310;
state_13310 = G__13344;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_13310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_13310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___13332,out))
})();
var state__7866__auto__ = (function (){var statearr_13330 = f__7865__auto__.call(null);
(statearr_13330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___13332);

return statearr_13330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___13332,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__13346 = arguments.length;
switch (G__13346) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7864__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto__){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto__){
return (function (state_13513){
var state_val_13514 = (state_13513[(1)]);
if((state_val_13514 === (7))){
var inst_13509 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
var statearr_13515_13556 = state_13513__$1;
(statearr_13515_13556[(2)] = inst_13509);

(statearr_13515_13556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (20))){
var inst_13479 = (state_13513[(7)]);
var inst_13490 = (state_13513[(2)]);
var inst_13491 = cljs.core.next.call(null,inst_13479);
var inst_13465 = inst_13491;
var inst_13466 = null;
var inst_13467 = (0);
var inst_13468 = (0);
var state_13513__$1 = (function (){var statearr_13516 = state_13513;
(statearr_13516[(8)] = inst_13465);

(statearr_13516[(9)] = inst_13490);

(statearr_13516[(10)] = inst_13468);

(statearr_13516[(11)] = inst_13467);

(statearr_13516[(12)] = inst_13466);

return statearr_13516;
})();
var statearr_13517_13557 = state_13513__$1;
(statearr_13517_13557[(2)] = null);

(statearr_13517_13557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (1))){
var state_13513__$1 = state_13513;
var statearr_13518_13558 = state_13513__$1;
(statearr_13518_13558[(2)] = null);

(statearr_13518_13558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (4))){
var inst_13454 = (state_13513[(13)]);
var inst_13454__$1 = (state_13513[(2)]);
var inst_13455 = (inst_13454__$1 == null);
var state_13513__$1 = (function (){var statearr_13519 = state_13513;
(statearr_13519[(13)] = inst_13454__$1);

return statearr_13519;
})();
if(cljs.core.truth_(inst_13455)){
var statearr_13520_13559 = state_13513__$1;
(statearr_13520_13559[(1)] = (5));

} else {
var statearr_13521_13560 = state_13513__$1;
(statearr_13521_13560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (15))){
var state_13513__$1 = state_13513;
var statearr_13525_13561 = state_13513__$1;
(statearr_13525_13561[(2)] = null);

(statearr_13525_13561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (21))){
var state_13513__$1 = state_13513;
var statearr_13526_13562 = state_13513__$1;
(statearr_13526_13562[(2)] = null);

(statearr_13526_13562[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (13))){
var inst_13465 = (state_13513[(8)]);
var inst_13468 = (state_13513[(10)]);
var inst_13467 = (state_13513[(11)]);
var inst_13466 = (state_13513[(12)]);
var inst_13475 = (state_13513[(2)]);
var inst_13476 = (inst_13468 + (1));
var tmp13522 = inst_13465;
var tmp13523 = inst_13467;
var tmp13524 = inst_13466;
var inst_13465__$1 = tmp13522;
var inst_13466__$1 = tmp13524;
var inst_13467__$1 = tmp13523;
var inst_13468__$1 = inst_13476;
var state_13513__$1 = (function (){var statearr_13527 = state_13513;
(statearr_13527[(8)] = inst_13465__$1);

(statearr_13527[(10)] = inst_13468__$1);

(statearr_13527[(11)] = inst_13467__$1);

(statearr_13527[(14)] = inst_13475);

(statearr_13527[(12)] = inst_13466__$1);

return statearr_13527;
})();
var statearr_13528_13563 = state_13513__$1;
(statearr_13528_13563[(2)] = null);

(statearr_13528_13563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (22))){
var state_13513__$1 = state_13513;
var statearr_13529_13564 = state_13513__$1;
(statearr_13529_13564[(2)] = null);

(statearr_13529_13564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (6))){
var inst_13454 = (state_13513[(13)]);
var inst_13463 = f.call(null,inst_13454);
var inst_13464 = cljs.core.seq.call(null,inst_13463);
var inst_13465 = inst_13464;
var inst_13466 = null;
var inst_13467 = (0);
var inst_13468 = (0);
var state_13513__$1 = (function (){var statearr_13530 = state_13513;
(statearr_13530[(8)] = inst_13465);

(statearr_13530[(10)] = inst_13468);

(statearr_13530[(11)] = inst_13467);

(statearr_13530[(12)] = inst_13466);

return statearr_13530;
})();
var statearr_13531_13565 = state_13513__$1;
(statearr_13531_13565[(2)] = null);

(statearr_13531_13565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (17))){
var inst_13479 = (state_13513[(7)]);
var inst_13483 = cljs.core.chunk_first.call(null,inst_13479);
var inst_13484 = cljs.core.chunk_rest.call(null,inst_13479);
var inst_13485 = cljs.core.count.call(null,inst_13483);
var inst_13465 = inst_13484;
var inst_13466 = inst_13483;
var inst_13467 = inst_13485;
var inst_13468 = (0);
var state_13513__$1 = (function (){var statearr_13532 = state_13513;
(statearr_13532[(8)] = inst_13465);

(statearr_13532[(10)] = inst_13468);

(statearr_13532[(11)] = inst_13467);

(statearr_13532[(12)] = inst_13466);

return statearr_13532;
})();
var statearr_13533_13566 = state_13513__$1;
(statearr_13533_13566[(2)] = null);

(statearr_13533_13566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (3))){
var inst_13511 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13513__$1,inst_13511);
} else {
if((state_val_13514 === (12))){
var inst_13499 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
var statearr_13534_13567 = state_13513__$1;
(statearr_13534_13567[(2)] = inst_13499);

(statearr_13534_13567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (2))){
var state_13513__$1 = state_13513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13513__$1,(4),in$);
} else {
if((state_val_13514 === (23))){
var inst_13507 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
var statearr_13535_13568 = state_13513__$1;
(statearr_13535_13568[(2)] = inst_13507);

(statearr_13535_13568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (19))){
var inst_13494 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
var statearr_13536_13569 = state_13513__$1;
(statearr_13536_13569[(2)] = inst_13494);

(statearr_13536_13569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (11))){
var inst_13465 = (state_13513[(8)]);
var inst_13479 = (state_13513[(7)]);
var inst_13479__$1 = cljs.core.seq.call(null,inst_13465);
var state_13513__$1 = (function (){var statearr_13537 = state_13513;
(statearr_13537[(7)] = inst_13479__$1);

return statearr_13537;
})();
if(inst_13479__$1){
var statearr_13538_13570 = state_13513__$1;
(statearr_13538_13570[(1)] = (14));

} else {
var statearr_13539_13571 = state_13513__$1;
(statearr_13539_13571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (9))){
var inst_13501 = (state_13513[(2)]);
var inst_13502 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13513__$1 = (function (){var statearr_13540 = state_13513;
(statearr_13540[(15)] = inst_13501);

return statearr_13540;
})();
if(cljs.core.truth_(inst_13502)){
var statearr_13541_13572 = state_13513__$1;
(statearr_13541_13572[(1)] = (21));

} else {
var statearr_13542_13573 = state_13513__$1;
(statearr_13542_13573[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (5))){
var inst_13457 = cljs.core.async.close_BANG_.call(null,out);
var state_13513__$1 = state_13513;
var statearr_13543_13574 = state_13513__$1;
(statearr_13543_13574[(2)] = inst_13457);

(statearr_13543_13574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (14))){
var inst_13479 = (state_13513[(7)]);
var inst_13481 = cljs.core.chunked_seq_QMARK_.call(null,inst_13479);
var state_13513__$1 = state_13513;
if(inst_13481){
var statearr_13544_13575 = state_13513__$1;
(statearr_13544_13575[(1)] = (17));

} else {
var statearr_13545_13576 = state_13513__$1;
(statearr_13545_13576[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (16))){
var inst_13497 = (state_13513[(2)]);
var state_13513__$1 = state_13513;
var statearr_13546_13577 = state_13513__$1;
(statearr_13546_13577[(2)] = inst_13497);

(statearr_13546_13577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13514 === (10))){
var inst_13468 = (state_13513[(10)]);
var inst_13466 = (state_13513[(12)]);
var inst_13473 = cljs.core._nth.call(null,inst_13466,inst_13468);
var state_13513__$1 = state_13513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13513__$1,(13),out,inst_13473);
} else {
if((state_val_13514 === (18))){
var inst_13479 = (state_13513[(7)]);
var inst_13488 = cljs.core.first.call(null,inst_13479);
var state_13513__$1 = state_13513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13513__$1,(20),out,inst_13488);
} else {
if((state_val_13514 === (8))){
var inst_13468 = (state_13513[(10)]);
var inst_13467 = (state_13513[(11)]);
var inst_13470 = (inst_13468 < inst_13467);
var inst_13471 = inst_13470;
var state_13513__$1 = state_13513;
if(cljs.core.truth_(inst_13471)){
var statearr_13547_13578 = state_13513__$1;
(statearr_13547_13578[(1)] = (10));

} else {
var statearr_13548_13579 = state_13513__$1;
(statearr_13548_13579[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__7803__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7803__auto____0 = (function (){
var statearr_13552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13552[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7803__auto__);

(statearr_13552[(1)] = (1));

return statearr_13552;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7803__auto____1 = (function (state_13513){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_13513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13553){if((e13553 instanceof Object)){
var ex__7806__auto__ = e13553;
var statearr_13554_13580 = state_13513;
(statearr_13554_13580[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13581 = state_13513;
state_13513 = G__13581;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7803__auto__ = function(state_13513){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7803__auto____1.call(this,state_13513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7803__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7803__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto__))
})();
var state__7866__auto__ = (function (){var statearr_13555 = f__7865__auto__.call(null);
(statearr_13555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto__);

return statearr_13555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto__))
);

return c__7864__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__13583 = arguments.length;
switch (G__13583) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__13586 = arguments.length;
switch (G__13586) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__13589 = arguments.length;
switch (G__13589) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7864__auto___13639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___13639,out){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___13639,out){
return (function (state_13613){
var state_val_13614 = (state_13613[(1)]);
if((state_val_13614 === (7))){
var inst_13608 = (state_13613[(2)]);
var state_13613__$1 = state_13613;
var statearr_13615_13640 = state_13613__$1;
(statearr_13615_13640[(2)] = inst_13608);

(statearr_13615_13640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13614 === (1))){
var inst_13590 = null;
var state_13613__$1 = (function (){var statearr_13616 = state_13613;
(statearr_13616[(7)] = inst_13590);

return statearr_13616;
})();
var statearr_13617_13641 = state_13613__$1;
(statearr_13617_13641[(2)] = null);

(statearr_13617_13641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13614 === (4))){
var inst_13593 = (state_13613[(8)]);
var inst_13593__$1 = (state_13613[(2)]);
var inst_13594 = (inst_13593__$1 == null);
var inst_13595 = cljs.core.not.call(null,inst_13594);
var state_13613__$1 = (function (){var statearr_13618 = state_13613;
(statearr_13618[(8)] = inst_13593__$1);

return statearr_13618;
})();
if(inst_13595){
var statearr_13619_13642 = state_13613__$1;
(statearr_13619_13642[(1)] = (5));

} else {
var statearr_13620_13643 = state_13613__$1;
(statearr_13620_13643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13614 === (6))){
var state_13613__$1 = state_13613;
var statearr_13621_13644 = state_13613__$1;
(statearr_13621_13644[(2)] = null);

(statearr_13621_13644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13614 === (3))){
var inst_13610 = (state_13613[(2)]);
var inst_13611 = cljs.core.async.close_BANG_.call(null,out);
var state_13613__$1 = (function (){var statearr_13622 = state_13613;
(statearr_13622[(9)] = inst_13610);

return statearr_13622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13613__$1,inst_13611);
} else {
if((state_val_13614 === (2))){
var state_13613__$1 = state_13613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13613__$1,(4),ch);
} else {
if((state_val_13614 === (11))){
var inst_13593 = (state_13613[(8)]);
var inst_13602 = (state_13613[(2)]);
var inst_13590 = inst_13593;
var state_13613__$1 = (function (){var statearr_13623 = state_13613;
(statearr_13623[(10)] = inst_13602);

(statearr_13623[(7)] = inst_13590);

return statearr_13623;
})();
var statearr_13624_13645 = state_13613__$1;
(statearr_13624_13645[(2)] = null);

(statearr_13624_13645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13614 === (9))){
var inst_13593 = (state_13613[(8)]);
var state_13613__$1 = state_13613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13613__$1,(11),out,inst_13593);
} else {
if((state_val_13614 === (5))){
var inst_13593 = (state_13613[(8)]);
var inst_13590 = (state_13613[(7)]);
var inst_13597 = cljs.core._EQ_.call(null,inst_13593,inst_13590);
var state_13613__$1 = state_13613;
if(inst_13597){
var statearr_13626_13646 = state_13613__$1;
(statearr_13626_13646[(1)] = (8));

} else {
var statearr_13627_13647 = state_13613__$1;
(statearr_13627_13647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13614 === (10))){
var inst_13605 = (state_13613[(2)]);
var state_13613__$1 = state_13613;
var statearr_13628_13648 = state_13613__$1;
(statearr_13628_13648[(2)] = inst_13605);

(statearr_13628_13648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13614 === (8))){
var inst_13590 = (state_13613[(7)]);
var tmp13625 = inst_13590;
var inst_13590__$1 = tmp13625;
var state_13613__$1 = (function (){var statearr_13629 = state_13613;
(statearr_13629[(7)] = inst_13590__$1);

return statearr_13629;
})();
var statearr_13630_13649 = state_13613__$1;
(statearr_13630_13649[(2)] = null);

(statearr_13630_13649[(1)] = (2));


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
});})(c__7864__auto___13639,out))
;
return ((function (switch__7802__auto__,c__7864__auto___13639,out){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_13634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13634[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_13634[(1)] = (1));

return statearr_13634;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_13613){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_13613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13635){if((e13635 instanceof Object)){
var ex__7806__auto__ = e13635;
var statearr_13636_13650 = state_13613;
(statearr_13636_13650[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13651 = state_13613;
state_13613 = G__13651;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_13613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_13613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___13639,out))
})();
var state__7866__auto__ = (function (){var statearr_13637 = f__7865__auto__.call(null);
(statearr_13637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___13639);

return statearr_13637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___13639,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__13653 = arguments.length;
switch (G__13653) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7864__auto___13722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___13722,out){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___13722,out){
return (function (state_13691){
var state_val_13692 = (state_13691[(1)]);
if((state_val_13692 === (7))){
var inst_13687 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
var statearr_13693_13723 = state_13691__$1;
(statearr_13693_13723[(2)] = inst_13687);

(statearr_13693_13723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (1))){
var inst_13654 = (new Array(n));
var inst_13655 = inst_13654;
var inst_13656 = (0);
var state_13691__$1 = (function (){var statearr_13694 = state_13691;
(statearr_13694[(7)] = inst_13655);

(statearr_13694[(8)] = inst_13656);

return statearr_13694;
})();
var statearr_13695_13724 = state_13691__$1;
(statearr_13695_13724[(2)] = null);

(statearr_13695_13724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (4))){
var inst_13659 = (state_13691[(9)]);
var inst_13659__$1 = (state_13691[(2)]);
var inst_13660 = (inst_13659__$1 == null);
var inst_13661 = cljs.core.not.call(null,inst_13660);
var state_13691__$1 = (function (){var statearr_13696 = state_13691;
(statearr_13696[(9)] = inst_13659__$1);

return statearr_13696;
})();
if(inst_13661){
var statearr_13697_13725 = state_13691__$1;
(statearr_13697_13725[(1)] = (5));

} else {
var statearr_13698_13726 = state_13691__$1;
(statearr_13698_13726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (15))){
var inst_13681 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
var statearr_13699_13727 = state_13691__$1;
(statearr_13699_13727[(2)] = inst_13681);

(statearr_13699_13727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (13))){
var state_13691__$1 = state_13691;
var statearr_13700_13728 = state_13691__$1;
(statearr_13700_13728[(2)] = null);

(statearr_13700_13728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (6))){
var inst_13656 = (state_13691[(8)]);
var inst_13677 = (inst_13656 > (0));
var state_13691__$1 = state_13691;
if(cljs.core.truth_(inst_13677)){
var statearr_13701_13729 = state_13691__$1;
(statearr_13701_13729[(1)] = (12));

} else {
var statearr_13702_13730 = state_13691__$1;
(statearr_13702_13730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (3))){
var inst_13689 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13691__$1,inst_13689);
} else {
if((state_val_13692 === (12))){
var inst_13655 = (state_13691[(7)]);
var inst_13679 = cljs.core.vec.call(null,inst_13655);
var state_13691__$1 = state_13691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13691__$1,(15),out,inst_13679);
} else {
if((state_val_13692 === (2))){
var state_13691__$1 = state_13691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13691__$1,(4),ch);
} else {
if((state_val_13692 === (11))){
var inst_13671 = (state_13691[(2)]);
var inst_13672 = (new Array(n));
var inst_13655 = inst_13672;
var inst_13656 = (0);
var state_13691__$1 = (function (){var statearr_13703 = state_13691;
(statearr_13703[(7)] = inst_13655);

(statearr_13703[(10)] = inst_13671);

(statearr_13703[(8)] = inst_13656);

return statearr_13703;
})();
var statearr_13704_13731 = state_13691__$1;
(statearr_13704_13731[(2)] = null);

(statearr_13704_13731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (9))){
var inst_13655 = (state_13691[(7)]);
var inst_13669 = cljs.core.vec.call(null,inst_13655);
var state_13691__$1 = state_13691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13691__$1,(11),out,inst_13669);
} else {
if((state_val_13692 === (5))){
var inst_13655 = (state_13691[(7)]);
var inst_13656 = (state_13691[(8)]);
var inst_13659 = (state_13691[(9)]);
var inst_13664 = (state_13691[(11)]);
var inst_13663 = (inst_13655[inst_13656] = inst_13659);
var inst_13664__$1 = (inst_13656 + (1));
var inst_13665 = (inst_13664__$1 < n);
var state_13691__$1 = (function (){var statearr_13705 = state_13691;
(statearr_13705[(11)] = inst_13664__$1);

(statearr_13705[(12)] = inst_13663);

return statearr_13705;
})();
if(cljs.core.truth_(inst_13665)){
var statearr_13706_13732 = state_13691__$1;
(statearr_13706_13732[(1)] = (8));

} else {
var statearr_13707_13733 = state_13691__$1;
(statearr_13707_13733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (14))){
var inst_13684 = (state_13691[(2)]);
var inst_13685 = cljs.core.async.close_BANG_.call(null,out);
var state_13691__$1 = (function (){var statearr_13709 = state_13691;
(statearr_13709[(13)] = inst_13684);

return statearr_13709;
})();
var statearr_13710_13734 = state_13691__$1;
(statearr_13710_13734[(2)] = inst_13685);

(statearr_13710_13734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (10))){
var inst_13675 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
var statearr_13711_13735 = state_13691__$1;
(statearr_13711_13735[(2)] = inst_13675);

(statearr_13711_13735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (8))){
var inst_13655 = (state_13691[(7)]);
var inst_13664 = (state_13691[(11)]);
var tmp13708 = inst_13655;
var inst_13655__$1 = tmp13708;
var inst_13656 = inst_13664;
var state_13691__$1 = (function (){var statearr_13712 = state_13691;
(statearr_13712[(7)] = inst_13655__$1);

(statearr_13712[(8)] = inst_13656);

return statearr_13712;
})();
var statearr_13713_13736 = state_13691__$1;
(statearr_13713_13736[(2)] = null);

(statearr_13713_13736[(1)] = (2));


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
}
}
}
});})(c__7864__auto___13722,out))
;
return ((function (switch__7802__auto__,c__7864__auto___13722,out){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_13717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13717[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_13717[(1)] = (1));

return statearr_13717;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_13691){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_13691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13718){if((e13718 instanceof Object)){
var ex__7806__auto__ = e13718;
var statearr_13719_13737 = state_13691;
(statearr_13719_13737[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13738 = state_13691;
state_13691 = G__13738;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_13691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_13691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___13722,out))
})();
var state__7866__auto__ = (function (){var statearr_13720 = f__7865__auto__.call(null);
(statearr_13720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___13722);

return statearr_13720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___13722,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__13740 = arguments.length;
switch (G__13740) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7864__auto___13813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7864__auto___13813,out){
return (function (){
var f__7865__auto__ = (function (){var switch__7802__auto__ = ((function (c__7864__auto___13813,out){
return (function (state_13782){
var state_val_13783 = (state_13782[(1)]);
if((state_val_13783 === (7))){
var inst_13778 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
var statearr_13784_13814 = state_13782__$1;
(statearr_13784_13814[(2)] = inst_13778);

(statearr_13784_13814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (1))){
var inst_13741 = [];
var inst_13742 = inst_13741;
var inst_13743 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13782__$1 = (function (){var statearr_13785 = state_13782;
(statearr_13785[(7)] = inst_13742);

(statearr_13785[(8)] = inst_13743);

return statearr_13785;
})();
var statearr_13786_13815 = state_13782__$1;
(statearr_13786_13815[(2)] = null);

(statearr_13786_13815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (4))){
var inst_13746 = (state_13782[(9)]);
var inst_13746__$1 = (state_13782[(2)]);
var inst_13747 = (inst_13746__$1 == null);
var inst_13748 = cljs.core.not.call(null,inst_13747);
var state_13782__$1 = (function (){var statearr_13787 = state_13782;
(statearr_13787[(9)] = inst_13746__$1);

return statearr_13787;
})();
if(inst_13748){
var statearr_13788_13816 = state_13782__$1;
(statearr_13788_13816[(1)] = (5));

} else {
var statearr_13789_13817 = state_13782__$1;
(statearr_13789_13817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (15))){
var inst_13772 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
var statearr_13790_13818 = state_13782__$1;
(statearr_13790_13818[(2)] = inst_13772);

(statearr_13790_13818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (13))){
var state_13782__$1 = state_13782;
var statearr_13791_13819 = state_13782__$1;
(statearr_13791_13819[(2)] = null);

(statearr_13791_13819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (6))){
var inst_13742 = (state_13782[(7)]);
var inst_13767 = inst_13742.length;
var inst_13768 = (inst_13767 > (0));
var state_13782__$1 = state_13782;
if(cljs.core.truth_(inst_13768)){
var statearr_13792_13820 = state_13782__$1;
(statearr_13792_13820[(1)] = (12));

} else {
var statearr_13793_13821 = state_13782__$1;
(statearr_13793_13821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (3))){
var inst_13780 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13782__$1,inst_13780);
} else {
if((state_val_13783 === (12))){
var inst_13742 = (state_13782[(7)]);
var inst_13770 = cljs.core.vec.call(null,inst_13742);
var state_13782__$1 = state_13782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13782__$1,(15),out,inst_13770);
} else {
if((state_val_13783 === (2))){
var state_13782__$1 = state_13782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13782__$1,(4),ch);
} else {
if((state_val_13783 === (11))){
var inst_13746 = (state_13782[(9)]);
var inst_13750 = (state_13782[(10)]);
var inst_13760 = (state_13782[(2)]);
var inst_13761 = [];
var inst_13762 = inst_13761.push(inst_13746);
var inst_13742 = inst_13761;
var inst_13743 = inst_13750;
var state_13782__$1 = (function (){var statearr_13794 = state_13782;
(statearr_13794[(11)] = inst_13760);

(statearr_13794[(7)] = inst_13742);

(statearr_13794[(12)] = inst_13762);

(statearr_13794[(8)] = inst_13743);

return statearr_13794;
})();
var statearr_13795_13822 = state_13782__$1;
(statearr_13795_13822[(2)] = null);

(statearr_13795_13822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (9))){
var inst_13742 = (state_13782[(7)]);
var inst_13758 = cljs.core.vec.call(null,inst_13742);
var state_13782__$1 = state_13782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13782__$1,(11),out,inst_13758);
} else {
if((state_val_13783 === (5))){
var inst_13746 = (state_13782[(9)]);
var inst_13750 = (state_13782[(10)]);
var inst_13743 = (state_13782[(8)]);
var inst_13750__$1 = f.call(null,inst_13746);
var inst_13751 = cljs.core._EQ_.call(null,inst_13750__$1,inst_13743);
var inst_13752 = cljs.core.keyword_identical_QMARK_.call(null,inst_13743,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13753 = (inst_13751) || (inst_13752);
var state_13782__$1 = (function (){var statearr_13796 = state_13782;
(statearr_13796[(10)] = inst_13750__$1);

return statearr_13796;
})();
if(cljs.core.truth_(inst_13753)){
var statearr_13797_13823 = state_13782__$1;
(statearr_13797_13823[(1)] = (8));

} else {
var statearr_13798_13824 = state_13782__$1;
(statearr_13798_13824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (14))){
var inst_13775 = (state_13782[(2)]);
var inst_13776 = cljs.core.async.close_BANG_.call(null,out);
var state_13782__$1 = (function (){var statearr_13800 = state_13782;
(statearr_13800[(13)] = inst_13775);

return statearr_13800;
})();
var statearr_13801_13825 = state_13782__$1;
(statearr_13801_13825[(2)] = inst_13776);

(statearr_13801_13825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (10))){
var inst_13765 = (state_13782[(2)]);
var state_13782__$1 = state_13782;
var statearr_13802_13826 = state_13782__$1;
(statearr_13802_13826[(2)] = inst_13765);

(statearr_13802_13826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13783 === (8))){
var inst_13742 = (state_13782[(7)]);
var inst_13746 = (state_13782[(9)]);
var inst_13750 = (state_13782[(10)]);
var inst_13755 = inst_13742.push(inst_13746);
var tmp13799 = inst_13742;
var inst_13742__$1 = tmp13799;
var inst_13743 = inst_13750;
var state_13782__$1 = (function (){var statearr_13803 = state_13782;
(statearr_13803[(7)] = inst_13742__$1);

(statearr_13803[(14)] = inst_13755);

(statearr_13803[(8)] = inst_13743);

return statearr_13803;
})();
var statearr_13804_13827 = state_13782__$1;
(statearr_13804_13827[(2)] = null);

(statearr_13804_13827[(1)] = (2));


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
}
}
}
});})(c__7864__auto___13813,out))
;
return ((function (switch__7802__auto__,c__7864__auto___13813,out){
return (function() {
var cljs$core$async$state_machine__7803__auto__ = null;
var cljs$core$async$state_machine__7803__auto____0 = (function (){
var statearr_13808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13808[(0)] = cljs$core$async$state_machine__7803__auto__);

(statearr_13808[(1)] = (1));

return statearr_13808;
});
var cljs$core$async$state_machine__7803__auto____1 = (function (state_13782){
while(true){
var ret_value__7804__auto__ = (function (){try{while(true){
var result__7805__auto__ = switch__7802__auto__.call(null,state_13782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7805__auto__;
}
break;
}
}catch (e13809){if((e13809 instanceof Object)){
var ex__7806__auto__ = e13809;
var statearr_13810_13828 = state_13782;
(statearr_13810_13828[(5)] = ex__7806__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13829 = state_13782;
state_13782 = G__13829;
continue;
} else {
return ret_value__7804__auto__;
}
break;
}
});
cljs$core$async$state_machine__7803__auto__ = function(state_13782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7803__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7803__auto____1.call(this,state_13782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7803__auto____0;
cljs$core$async$state_machine__7803__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7803__auto____1;
return cljs$core$async$state_machine__7803__auto__;
})()
;})(switch__7802__auto__,c__7864__auto___13813,out))
})();
var state__7866__auto__ = (function (){var statearr_13811 = f__7865__auto__.call(null);
(statearr_13811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7864__auto___13813);

return statearr_13811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7866__auto__);
});})(c__7864__auto___13813,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
