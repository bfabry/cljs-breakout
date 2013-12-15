// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9434 = (function (f,fn_handler,meta9435){
this.f = f;
this.fn_handler = fn_handler;
this.meta9435 = meta9435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9434.cljs$lang$type = true;
cljs.core.async.t9434.cljs$lang$ctorStr = "cljs.core.async/t9434";
cljs.core.async.t9434.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t9434");
});
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9436){var self__ = this;
var _9436__$1 = this;return self__.meta9435;
});
cljs.core.async.t9434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9436,meta9435__$1){var self__ = this;
var _9436__$1 = this;return (new cljs.core.async.t9434(self__.f,self__.fn_handler,meta9435__$1));
});
cljs.core.async.__GT_t9434 = (function __GT_t9434(f__$1,fn_handler__$1,meta9435){return (new cljs.core.async.t9434(f__$1,fn_handler__$1,meta9435));
});
}
return (new cljs.core.async.t9434(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9438 = buff;if(G__9438)
{var bit__4008__auto__ = null;if(cljs.core.truth_((function (){var or__3382__auto__ = bit__4008__auto__;if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return G__9438.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9438.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9438);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9438);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9439 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9439);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9439);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3370__auto__ = ret;if(cljs.core.truth_(and__3370__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3370__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4205__auto___9440 = n;var x_9441 = 0;while(true){
if((x_9441 < n__4205__auto___9440))
{(a[x_9441] = 0);
{
var G__9442 = (x_9441 + 1);
x_9441 = G__9442;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9443 = (i + 1);
i = G__9443;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9447 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9447 = (function (flag,alt_flag,meta9448){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9448 = meta9448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9447.cljs$lang$type = true;
cljs.core.async.t9447.cljs$lang$ctorStr = "cljs.core.async/t9447";
cljs.core.async.t9447.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t9447");
});
cljs.core.async.t9447.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9449){var self__ = this;
var _9449__$1 = this;return self__.meta9448;
});
cljs.core.async.t9447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9449,meta9448__$1){var self__ = this;
var _9449__$1 = this;return (new cljs.core.async.t9447(self__.flag,self__.alt_flag,meta9448__$1));
});
cljs.core.async.__GT_t9447 = (function __GT_t9447(flag__$1,alt_flag__$1,meta9448){return (new cljs.core.async.t9447(flag__$1,alt_flag__$1,meta9448));
});
}
return (new cljs.core.async.t9447(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9453 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9453 = (function (cb,flag,alt_handler,meta9454){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9454 = meta9454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9453.cljs$lang$type = true;
cljs.core.async.t9453.cljs$lang$ctorStr = "cljs.core.async/t9453";
cljs.core.async.t9453.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t9453");
});
cljs.core.async.t9453.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9455){var self__ = this;
var _9455__$1 = this;return self__.meta9454;
});
cljs.core.async.t9453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9455,meta9454__$1){var self__ = this;
var _9455__$1 = this;return (new cljs.core.async.t9453(self__.cb,self__.flag,self__.alt_handler,meta9454__$1));
});
cljs.core.async.__GT_t9453 = (function __GT_t9453(cb__$1,flag__$1,alt_handler__$1,meta9454){return (new cljs.core.async.t9453(cb__$1,flag__$1,alt_handler__$1,meta9454));
});
}
return (new cljs.core.async.t9453(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9456_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9456_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3382__auto__ = wport;if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9457 = (i + 1);
i = G__9457;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3382__auto__ = ret;if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3370__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3370__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3370__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9458){var map__9460 = p__9458;var map__9460__$1 = ((cljs.core.seq_QMARK_.call(null,map__9460))?cljs.core.apply.call(null,cljs.core.hash_map,map__9460):map__9460);var opts = map__9460__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9458 = null;if (arguments.length > 1) {
  p__9458 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9458);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9461){
var ports = cljs.core.first(arglist__9461);
var p__9458 = cljs.core.rest(arglist__9461);
return alts_BANG___delegate(ports,p__9458);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9469 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9469 = (function (ch,f,map_LT_,meta9470){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9470 = meta9470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9469.cljs$lang$type = true;
cljs.core.async.t9469.cljs$lang$ctorStr = "cljs.core.async/t9469";
cljs.core.async.t9469.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t9469");
});
cljs.core.async.t9469.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9469.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9472 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9472 = (function (fn1,_,meta9470,ch,f,map_LT_,meta9473){
this.fn1 = fn1;
this._ = _;
this.meta9470 = meta9470;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9473 = meta9473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9472.cljs$lang$type = true;
cljs.core.async.t9472.cljs$lang$ctorStr = "cljs.core.async/t9472";
cljs.core.async.t9472.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t9472");
});
cljs.core.async.t9472.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9472.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9462_SHARP_){return f1.call(null,(((p1__9462_SHARP_ == null))?null:self__.f.call(null,p1__9462_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9474){var self__ = this;
var _9474__$1 = this;return self__.meta9473;
});
cljs.core.async.t9472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9474,meta9473__$1){var self__ = this;
var _9474__$1 = this;return (new cljs.core.async.t9472(self__.fn1,self__._,self__.meta9470,self__.ch,self__.f,self__.map_LT_,meta9473__$1));
});
cljs.core.async.__GT_t9472 = (function __GT_t9472(fn1__$1,___$2,meta9470__$1,ch__$2,f__$2,map_LT___$2,meta9473){return (new cljs.core.async.t9472(fn1__$1,___$2,meta9470__$1,ch__$2,f__$2,map_LT___$2,meta9473));
});
}
return (new cljs.core.async.t9472(fn1,___$1,self__.meta9470,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3370__auto__ = ret;if(cljs.core.truth_(and__3370__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3370__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9469.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9471){var self__ = this;
var _9471__$1 = this;return self__.meta9470;
});
cljs.core.async.t9469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9471,meta9470__$1){var self__ = this;
var _9471__$1 = this;return (new cljs.core.async.t9469(self__.ch,self__.f,self__.map_LT_,meta9470__$1));
});
cljs.core.async.__GT_t9469 = (function __GT_t9469(ch__$1,f__$1,map_LT___$1,meta9470){return (new cljs.core.async.t9469(ch__$1,f__$1,map_LT___$1,meta9470));
});
}
return (new cljs.core.async.t9469(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9478 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9478 = (function (ch,f,map_GT_,meta9479){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9479 = meta9479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9478.cljs$lang$type = true;
cljs.core.async.t9478.cljs$lang$ctorStr = "cljs.core.async/t9478";
cljs.core.async.t9478.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t9478");
});
cljs.core.async.t9478.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9478.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9478.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9480){var self__ = this;
var _9480__$1 = this;return self__.meta9479;
});
cljs.core.async.t9478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9480,meta9479__$1){var self__ = this;
var _9480__$1 = this;return (new cljs.core.async.t9478(self__.ch,self__.f,self__.map_GT_,meta9479__$1));
});
cljs.core.async.__GT_t9478 = (function __GT_t9478(ch__$1,f__$1,map_GT___$1,meta9479){return (new cljs.core.async.t9478(ch__$1,f__$1,map_GT___$1,meta9479));
});
}
return (new cljs.core.async.t9478(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9484 = (function (ch,p,filter_GT_,meta9485){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9485 = meta9485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9484.cljs$lang$type = true;
cljs.core.async.t9484.cljs$lang$ctorStr = "cljs.core.async/t9484";
cljs.core.async.t9484.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t9484");
});
cljs.core.async.t9484.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9484.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9484.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9486){var self__ = this;
var _9486__$1 = this;return self__.meta9485;
});
cljs.core.async.t9484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9486,meta9485__$1){var self__ = this;
var _9486__$1 = this;return (new cljs.core.async.t9484(self__.ch,self__.p,self__.filter_GT_,meta9485__$1));
});
cljs.core.async.__GT_t9484 = (function __GT_t9484(ch__$1,p__$1,filter_GT___$1,meta9485){return (new cljs.core.async.t9484(ch__$1,p__$1,filter_GT___$1,meta9485));
});
}
return (new cljs.core.async.t9484(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6625__auto___9569 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_9548){var state_val_9549 = (state_9548[1]);if((state_val_9549 === 1))
{var state_9548__$1 = state_9548;var statearr_9550_9570 = state_9548__$1;(statearr_9550_9570[2] = null);
(statearr_9550_9570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9549 === 2))
{var state_9548__$1 = state_9548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9548__$1,4,ch);
} else
{if((state_val_9549 === 3))
{var inst_9546 = (state_9548[2]);var state_9548__$1 = state_9548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9548__$1,inst_9546);
} else
{if((state_val_9549 === 4))
{var inst_9530 = (state_9548[7]);var inst_9530__$1 = (state_9548[2]);var inst_9531 = (inst_9530__$1 == null);var state_9548__$1 = (function (){var statearr_9551 = state_9548;(statearr_9551[7] = inst_9530__$1);
return statearr_9551;
})();if(cljs.core.truth_(inst_9531))
{var statearr_9552_9571 = state_9548__$1;(statearr_9552_9571[1] = 5);
} else
{var statearr_9553_9572 = state_9548__$1;(statearr_9553_9572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9549 === 5))
{var inst_9533 = cljs.core.async.close_BANG_.call(null,out);var state_9548__$1 = state_9548;var statearr_9554_9573 = state_9548__$1;(statearr_9554_9573[2] = inst_9533);
(statearr_9554_9573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9549 === 6))
{var inst_9530 = (state_9548[7]);var inst_9535 = p.call(null,inst_9530);var state_9548__$1 = state_9548;if(cljs.core.truth_(inst_9535))
{var statearr_9555_9574 = state_9548__$1;(statearr_9555_9574[1] = 8);
} else
{var statearr_9556_9575 = state_9548__$1;(statearr_9556_9575[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9549 === 7))
{var inst_9544 = (state_9548[2]);var state_9548__$1 = state_9548;var statearr_9557_9576 = state_9548__$1;(statearr_9557_9576[2] = inst_9544);
(statearr_9557_9576[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9549 === 8))
{var inst_9530 = (state_9548[7]);var state_9548__$1 = state_9548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9548__$1,11,out,inst_9530);
} else
{if((state_val_9549 === 9))
{var state_9548__$1 = state_9548;var statearr_9558_9577 = state_9548__$1;(statearr_9558_9577[2] = null);
(statearr_9558_9577[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9549 === 10))
{var inst_9541 = (state_9548[2]);var state_9548__$1 = (function (){var statearr_9559 = state_9548;(statearr_9559[8] = inst_9541);
return statearr_9559;
})();var statearr_9560_9578 = state_9548__$1;(statearr_9560_9578[2] = null);
(statearr_9560_9578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9549 === 11))
{var inst_9538 = (state_9548[2]);var state_9548__$1 = state_9548;var statearr_9561_9579 = state_9548__$1;(statearr_9561_9579[2] = inst_9538);
(statearr_9561_9579[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_9565 = (new Array(9));(statearr_9565[0] = state_machine__6556__auto__);
(statearr_9565[1] = 1);
return statearr_9565;
});
var state_machine__6556__auto____1 = (function (state_9548){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_9548);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e9566){if((e9566 instanceof Object))
{var ex__6559__auto__ = e9566;var statearr_9567_9580 = state_9548;(statearr_9567_9580[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9548);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9581 = state_9548;
state_9548 = G__9581;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_9548){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_9548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_9568 = f__6626__auto__.call(null);(statearr_9568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___9569);
return statearr_9568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6625__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_9733){var state_val_9734 = (state_9733[1]);if((state_val_9734 === 1))
{var state_9733__$1 = state_9733;var statearr_9735_9772 = state_9733__$1;(statearr_9735_9772[2] = null);
(statearr_9735_9772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 2))
{var state_9733__$1 = state_9733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9733__$1,4,in$);
} else
{if((state_val_9734 === 3))
{var inst_9731 = (state_9733[2]);var state_9733__$1 = state_9733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9733__$1,inst_9731);
} else
{if((state_val_9734 === 4))
{var inst_9679 = (state_9733[7]);var inst_9679__$1 = (state_9733[2]);var inst_9680 = (inst_9679__$1 == null);var state_9733__$1 = (function (){var statearr_9736 = state_9733;(statearr_9736[7] = inst_9679__$1);
return statearr_9736;
})();if(cljs.core.truth_(inst_9680))
{var statearr_9737_9773 = state_9733__$1;(statearr_9737_9773[1] = 5);
} else
{var statearr_9738_9774 = state_9733__$1;(statearr_9738_9774[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 5))
{var inst_9682 = cljs.core.async.close_BANG_.call(null,out);var state_9733__$1 = state_9733;var statearr_9739_9775 = state_9733__$1;(statearr_9739_9775[2] = inst_9682);
(statearr_9739_9775[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 6))
{var inst_9679 = (state_9733[7]);var inst_9684 = f.call(null,inst_9679);var inst_9689 = cljs.core.seq.call(null,inst_9684);var inst_9690 = inst_9689;var inst_9691 = null;var inst_9692 = 0;var inst_9693 = 0;var state_9733__$1 = (function (){var statearr_9740 = state_9733;(statearr_9740[8] = inst_9690);
(statearr_9740[9] = inst_9691);
(statearr_9740[10] = inst_9692);
(statearr_9740[11] = inst_9693);
return statearr_9740;
})();var statearr_9741_9776 = state_9733__$1;(statearr_9741_9776[2] = null);
(statearr_9741_9776[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 7))
{var inst_9729 = (state_9733[2]);var state_9733__$1 = state_9733;var statearr_9742_9777 = state_9733__$1;(statearr_9742_9777[2] = inst_9729);
(statearr_9742_9777[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 8))
{var inst_9692 = (state_9733[10]);var inst_9693 = (state_9733[11]);var inst_9695 = (inst_9693 < inst_9692);var inst_9696 = inst_9695;var state_9733__$1 = state_9733;if(cljs.core.truth_(inst_9696))
{var statearr_9743_9778 = state_9733__$1;(statearr_9743_9778[1] = 10);
} else
{var statearr_9744_9779 = state_9733__$1;(statearr_9744_9779[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 9))
{var inst_9726 = (state_9733[2]);var state_9733__$1 = (function (){var statearr_9745 = state_9733;(statearr_9745[12] = inst_9726);
return statearr_9745;
})();var statearr_9746_9780 = state_9733__$1;(statearr_9746_9780[2] = null);
(statearr_9746_9780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 10))
{var inst_9691 = (state_9733[9]);var inst_9693 = (state_9733[11]);var inst_9698 = cljs.core._nth.call(null,inst_9691,inst_9693);var state_9733__$1 = state_9733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9733__$1,13,out,inst_9698);
} else
{if((state_val_9734 === 11))
{var inst_9690 = (state_9733[8]);var inst_9704 = (state_9733[13]);var inst_9704__$1 = cljs.core.seq.call(null,inst_9690);var state_9733__$1 = (function (){var statearr_9750 = state_9733;(statearr_9750[13] = inst_9704__$1);
return statearr_9750;
})();if(inst_9704__$1)
{var statearr_9751_9781 = state_9733__$1;(statearr_9751_9781[1] = 14);
} else
{var statearr_9752_9782 = state_9733__$1;(statearr_9752_9782[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 12))
{var inst_9724 = (state_9733[2]);var state_9733__$1 = state_9733;var statearr_9753_9783 = state_9733__$1;(statearr_9753_9783[2] = inst_9724);
(statearr_9753_9783[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 13))
{var inst_9690 = (state_9733[8]);var inst_9691 = (state_9733[9]);var inst_9692 = (state_9733[10]);var inst_9693 = (state_9733[11]);var inst_9700 = (state_9733[2]);var inst_9701 = (inst_9693 + 1);var tmp9747 = inst_9690;var tmp9748 = inst_9691;var tmp9749 = inst_9692;var inst_9690__$1 = tmp9747;var inst_9691__$1 = tmp9748;var inst_9692__$1 = tmp9749;var inst_9693__$1 = inst_9701;var state_9733__$1 = (function (){var statearr_9754 = state_9733;(statearr_9754[14] = inst_9700);
(statearr_9754[8] = inst_9690__$1);
(statearr_9754[9] = inst_9691__$1);
(statearr_9754[10] = inst_9692__$1);
(statearr_9754[11] = inst_9693__$1);
return statearr_9754;
})();var statearr_9755_9784 = state_9733__$1;(statearr_9755_9784[2] = null);
(statearr_9755_9784[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 14))
{var inst_9704 = (state_9733[13]);var inst_9706 = cljs.core.chunked_seq_QMARK_.call(null,inst_9704);var state_9733__$1 = state_9733;if(inst_9706)
{var statearr_9756_9785 = state_9733__$1;(statearr_9756_9785[1] = 17);
} else
{var statearr_9757_9786 = state_9733__$1;(statearr_9757_9786[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 15))
{var state_9733__$1 = state_9733;var statearr_9758_9787 = state_9733__$1;(statearr_9758_9787[2] = null);
(statearr_9758_9787[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 16))
{var inst_9722 = (state_9733[2]);var state_9733__$1 = state_9733;var statearr_9759_9788 = state_9733__$1;(statearr_9759_9788[2] = inst_9722);
(statearr_9759_9788[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 17))
{var inst_9704 = (state_9733[13]);var inst_9708 = cljs.core.chunk_first.call(null,inst_9704);var inst_9709 = cljs.core.chunk_rest.call(null,inst_9704);var inst_9710 = cljs.core.count.call(null,inst_9708);var inst_9690 = inst_9709;var inst_9691 = inst_9708;var inst_9692 = inst_9710;var inst_9693 = 0;var state_9733__$1 = (function (){var statearr_9760 = state_9733;(statearr_9760[8] = inst_9690);
(statearr_9760[9] = inst_9691);
(statearr_9760[10] = inst_9692);
(statearr_9760[11] = inst_9693);
return statearr_9760;
})();var statearr_9761_9789 = state_9733__$1;(statearr_9761_9789[2] = null);
(statearr_9761_9789[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 18))
{var inst_9704 = (state_9733[13]);var inst_9713 = cljs.core.first.call(null,inst_9704);var state_9733__$1 = state_9733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9733__$1,20,out,inst_9713);
} else
{if((state_val_9734 === 19))
{var inst_9719 = (state_9733[2]);var state_9733__$1 = state_9733;var statearr_9762_9790 = state_9733__$1;(statearr_9762_9790[2] = inst_9719);
(statearr_9762_9790[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9734 === 20))
{var inst_9704 = (state_9733[13]);var inst_9715 = (state_9733[2]);var inst_9716 = cljs.core.next.call(null,inst_9704);var inst_9690 = inst_9716;var inst_9691 = null;var inst_9692 = 0;var inst_9693 = 0;var state_9733__$1 = (function (){var statearr_9763 = state_9733;(statearr_9763[8] = inst_9690);
(statearr_9763[9] = inst_9691);
(statearr_9763[10] = inst_9692);
(statearr_9763[15] = inst_9715);
(statearr_9763[11] = inst_9693);
return statearr_9763;
})();var statearr_9764_9791 = state_9733__$1;(statearr_9764_9791[2] = null);
(statearr_9764_9791[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_9768 = (new Array(16));(statearr_9768[0] = state_machine__6556__auto__);
(statearr_9768[1] = 1);
return statearr_9768;
});
var state_machine__6556__auto____1 = (function (state_9733){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_9733);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e9769){if((e9769 instanceof Object))
{var ex__6559__auto__ = e9769;var statearr_9770_9792 = state_9733;(statearr_9770_9792[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9793 = state_9733;
state_9733 = G__9793;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_9733){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_9733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_9771 = f__6626__auto__.call(null);(statearr_9771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto__);
return statearr_9771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return c__6625__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6625__auto___9874 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_9853){var state_val_9854 = (state_9853[1]);if((state_val_9854 === 1))
{var state_9853__$1 = state_9853;var statearr_9855_9875 = state_9853__$1;(statearr_9855_9875[2] = null);
(statearr_9855_9875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 2))
{var state_9853__$1 = state_9853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9853__$1,4,from);
} else
{if((state_val_9854 === 3))
{var inst_9851 = (state_9853[2]);var state_9853__$1 = state_9853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9853__$1,inst_9851);
} else
{if((state_val_9854 === 4))
{var inst_9836 = (state_9853[7]);var inst_9836__$1 = (state_9853[2]);var inst_9837 = (inst_9836__$1 == null);var state_9853__$1 = (function (){var statearr_9856 = state_9853;(statearr_9856[7] = inst_9836__$1);
return statearr_9856;
})();if(cljs.core.truth_(inst_9837))
{var statearr_9857_9876 = state_9853__$1;(statearr_9857_9876[1] = 5);
} else
{var statearr_9858_9877 = state_9853__$1;(statearr_9858_9877[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 5))
{var state_9853__$1 = state_9853;if(cljs.core.truth_(close_QMARK_))
{var statearr_9859_9878 = state_9853__$1;(statearr_9859_9878[1] = 8);
} else
{var statearr_9860_9879 = state_9853__$1;(statearr_9860_9879[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 6))
{var inst_9836 = (state_9853[7]);var state_9853__$1 = state_9853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9853__$1,11,to,inst_9836);
} else
{if((state_val_9854 === 7))
{var inst_9849 = (state_9853[2]);var state_9853__$1 = state_9853;var statearr_9861_9880 = state_9853__$1;(statearr_9861_9880[2] = inst_9849);
(statearr_9861_9880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 8))
{var inst_9840 = cljs.core.async.close_BANG_.call(null,to);var state_9853__$1 = state_9853;var statearr_9862_9881 = state_9853__$1;(statearr_9862_9881[2] = inst_9840);
(statearr_9862_9881[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 9))
{var state_9853__$1 = state_9853;var statearr_9863_9882 = state_9853__$1;(statearr_9863_9882[2] = null);
(statearr_9863_9882[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 10))
{var inst_9843 = (state_9853[2]);var state_9853__$1 = state_9853;var statearr_9864_9883 = state_9853__$1;(statearr_9864_9883[2] = inst_9843);
(statearr_9864_9883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9854 === 11))
{var inst_9846 = (state_9853[2]);var state_9853__$1 = (function (){var statearr_9865 = state_9853;(statearr_9865[8] = inst_9846);
return statearr_9865;
})();var statearr_9866_9884 = state_9853__$1;(statearr_9866_9884[2] = null);
(statearr_9866_9884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_9870 = (new Array(9));(statearr_9870[0] = state_machine__6556__auto__);
(statearr_9870[1] = 1);
return statearr_9870;
});
var state_machine__6556__auto____1 = (function (state_9853){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_9853);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e9871){if((e9871 instanceof Object))
{var ex__6559__auto__ = e9871;var statearr_9872_9885 = state_9853;(statearr_9872_9885[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9886 = state_9853;
state_9853 = G__9886;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_9853){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_9853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_9873 = f__6626__auto__.call(null);(statearr_9873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___9874);
return statearr_9873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
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
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6625__auto___9973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_9951){var state_val_9952 = (state_9951[1]);if((state_val_9952 === 1))
{var state_9951__$1 = state_9951;var statearr_9953_9974 = state_9951__$1;(statearr_9953_9974[2] = null);
(statearr_9953_9974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 2))
{var state_9951__$1 = state_9951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9951__$1,4,ch);
} else
{if((state_val_9952 === 3))
{var inst_9949 = (state_9951[2]);var state_9951__$1 = state_9951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9951__$1,inst_9949);
} else
{if((state_val_9952 === 4))
{var inst_9932 = (state_9951[7]);var inst_9932__$1 = (state_9951[2]);var inst_9933 = (inst_9932__$1 == null);var state_9951__$1 = (function (){var statearr_9954 = state_9951;(statearr_9954[7] = inst_9932__$1);
return statearr_9954;
})();if(cljs.core.truth_(inst_9933))
{var statearr_9955_9975 = state_9951__$1;(statearr_9955_9975[1] = 5);
} else
{var statearr_9956_9976 = state_9951__$1;(statearr_9956_9976[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 5))
{var inst_9935 = cljs.core.async.close_BANG_.call(null,tc);var inst_9936 = cljs.core.async.close_BANG_.call(null,fc);var state_9951__$1 = (function (){var statearr_9957 = state_9951;(statearr_9957[8] = inst_9935);
return statearr_9957;
})();var statearr_9958_9977 = state_9951__$1;(statearr_9958_9977[2] = inst_9936);
(statearr_9958_9977[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 6))
{var inst_9932 = (state_9951[7]);var inst_9938 = p.call(null,inst_9932);var state_9951__$1 = state_9951;if(cljs.core.truth_(inst_9938))
{var statearr_9959_9978 = state_9951__$1;(statearr_9959_9978[1] = 9);
} else
{var statearr_9960_9979 = state_9951__$1;(statearr_9960_9979[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 7))
{var inst_9947 = (state_9951[2]);var state_9951__$1 = state_9951;var statearr_9961_9980 = state_9951__$1;(statearr_9961_9980[2] = inst_9947);
(statearr_9961_9980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 8))
{var inst_9944 = (state_9951[2]);var state_9951__$1 = (function (){var statearr_9962 = state_9951;(statearr_9962[9] = inst_9944);
return statearr_9962;
})();var statearr_9963_9981 = state_9951__$1;(statearr_9963_9981[2] = null);
(statearr_9963_9981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 9))
{var state_9951__$1 = state_9951;var statearr_9964_9982 = state_9951__$1;(statearr_9964_9982[2] = tc);
(statearr_9964_9982[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 10))
{var state_9951__$1 = state_9951;var statearr_9965_9983 = state_9951__$1;(statearr_9965_9983[2] = fc);
(statearr_9965_9983[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9952 === 11))
{var inst_9932 = (state_9951[7]);var inst_9942 = (state_9951[2]);var state_9951__$1 = state_9951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9951__$1,8,inst_9942,inst_9932);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_9969 = (new Array(10));(statearr_9969[0] = state_machine__6556__auto__);
(statearr_9969[1] = 1);
return statearr_9969;
});
var state_machine__6556__auto____1 = (function (state_9951){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_9951);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e9970){if((e9970 instanceof Object))
{var ex__6559__auto__ = e9970;var statearr_9971_9984 = state_9951;(statearr_9971_9984[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9985 = state_9951;
state_9951 = G__9985;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_9951){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_9951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_9972 = f__6626__auto__.call(null);(statearr_9972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___9973);
return statearr_9972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6625__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_10032){var state_val_10033 = (state_10032[1]);if((state_val_10033 === 7))
{var inst_10028 = (state_10032[2]);var state_10032__$1 = state_10032;var statearr_10034_10050 = state_10032__$1;(statearr_10034_10050[2] = inst_10028);
(statearr_10034_10050[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 6))
{var inst_10021 = (state_10032[7]);var inst_10018 = (state_10032[8]);var inst_10025 = f.call(null,inst_10018,inst_10021);var inst_10018__$1 = inst_10025;var state_10032__$1 = (function (){var statearr_10035 = state_10032;(statearr_10035[8] = inst_10018__$1);
return statearr_10035;
})();var statearr_10036_10051 = state_10032__$1;(statearr_10036_10051[2] = null);
(statearr_10036_10051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 5))
{var inst_10018 = (state_10032[8]);var state_10032__$1 = state_10032;var statearr_10037_10052 = state_10032__$1;(statearr_10037_10052[2] = inst_10018);
(statearr_10037_10052[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 4))
{var inst_10021 = (state_10032[7]);var inst_10021__$1 = (state_10032[2]);var inst_10022 = (inst_10021__$1 == null);var state_10032__$1 = (function (){var statearr_10038 = state_10032;(statearr_10038[7] = inst_10021__$1);
return statearr_10038;
})();if(cljs.core.truth_(inst_10022))
{var statearr_10039_10053 = state_10032__$1;(statearr_10039_10053[1] = 5);
} else
{var statearr_10040_10054 = state_10032__$1;(statearr_10040_10054[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10033 === 3))
{var inst_10030 = (state_10032[2]);var state_10032__$1 = state_10032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10032__$1,inst_10030);
} else
{if((state_val_10033 === 2))
{var state_10032__$1 = state_10032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10032__$1,4,ch);
} else
{if((state_val_10033 === 1))
{var inst_10018 = init;var state_10032__$1 = (function (){var statearr_10041 = state_10032;(statearr_10041[8] = inst_10018);
return statearr_10041;
})();var statearr_10042_10055 = state_10032__$1;(statearr_10042_10055[2] = null);
(statearr_10042_10055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_10046 = (new Array(9));(statearr_10046[0] = state_machine__6556__auto__);
(statearr_10046[1] = 1);
return statearr_10046;
});
var state_machine__6556__auto____1 = (function (state_10032){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_10032);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e10047){if((e10047 instanceof Object))
{var ex__6559__auto__ = e10047;var statearr_10048_10056 = state_10032;(statearr_10048_10056[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10047;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10057 = state_10032;
state_10032 = G__10057;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_10032){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_10032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_10049 = f__6626__auto__.call(null);(statearr_10049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto__);
return statearr_10049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return c__6625__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6625__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_10119){var state_val_10120 = (state_10119[1]);if((state_val_10120 === 1))
{var inst_10099 = cljs.core.seq.call(null,coll);var inst_10100 = inst_10099;var state_10119__$1 = (function (){var statearr_10121 = state_10119;(statearr_10121[7] = inst_10100);
return statearr_10121;
})();var statearr_10122_10140 = state_10119__$1;(statearr_10122_10140[2] = null);
(statearr_10122_10140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10120 === 2))
{var inst_10100 = (state_10119[7]);var state_10119__$1 = state_10119;if(cljs.core.truth_(inst_10100))
{var statearr_10123_10141 = state_10119__$1;(statearr_10123_10141[1] = 4);
} else
{var statearr_10124_10142 = state_10119__$1;(statearr_10124_10142[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10120 === 3))
{var inst_10117 = (state_10119[2]);var state_10119__$1 = state_10119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10119__$1,inst_10117);
} else
{if((state_val_10120 === 4))
{var inst_10100 = (state_10119[7]);var inst_10103 = cljs.core.first.call(null,inst_10100);var state_10119__$1 = state_10119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10119__$1,7,ch,inst_10103);
} else
{if((state_val_10120 === 5))
{var state_10119__$1 = state_10119;if(cljs.core.truth_(close_QMARK_))
{var statearr_10125_10143 = state_10119__$1;(statearr_10125_10143[1] = 8);
} else
{var statearr_10126_10144 = state_10119__$1;(statearr_10126_10144[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10120 === 6))
{var inst_10115 = (state_10119[2]);var state_10119__$1 = state_10119;var statearr_10127_10145 = state_10119__$1;(statearr_10127_10145[2] = inst_10115);
(statearr_10127_10145[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10120 === 7))
{var inst_10100 = (state_10119[7]);var inst_10105 = (state_10119[2]);var inst_10106 = cljs.core.next.call(null,inst_10100);var inst_10100__$1 = inst_10106;var state_10119__$1 = (function (){var statearr_10128 = state_10119;(statearr_10128[8] = inst_10105);
(statearr_10128[7] = inst_10100__$1);
return statearr_10128;
})();var statearr_10129_10146 = state_10119__$1;(statearr_10129_10146[2] = null);
(statearr_10129_10146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10120 === 8))
{var inst_10110 = cljs.core.async.close_BANG_.call(null,ch);var state_10119__$1 = state_10119;var statearr_10130_10147 = state_10119__$1;(statearr_10130_10147[2] = inst_10110);
(statearr_10130_10147[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10120 === 9))
{var state_10119__$1 = state_10119;var statearr_10131_10148 = state_10119__$1;(statearr_10131_10148[2] = null);
(statearr_10131_10148[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10120 === 10))
{var inst_10113 = (state_10119[2]);var state_10119__$1 = state_10119;var statearr_10132_10149 = state_10119__$1;(statearr_10132_10149[2] = inst_10113);
(statearr_10132_10149[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_10136 = (new Array(9));(statearr_10136[0] = state_machine__6556__auto__);
(statearr_10136[1] = 1);
return statearr_10136;
});
var state_machine__6556__auto____1 = (function (state_10119){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_10119);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e10137){if((e10137 instanceof Object))
{var ex__6559__auto__ = e10137;var statearr_10138_10150 = state_10119;(statearr_10138_10150[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10151 = state_10119;
state_10119 = G__10151;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_10119){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_10119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_10139 = f__6626__auto__.call(null);(statearr_10139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto__);
return statearr_10139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return c__6625__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10153 = {};return obj10153;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3370__auto__ = _;if(and__3370__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3370__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3985__auto__ = (((_ == null))?null:_);return (function (){var or__3382__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10155 = {};return obj10155;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3370__auto__ = m;if(and__3370__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3370__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3985__auto__ = (((m == null))?null:m);return (function (){var or__3382__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3370__auto__ = m;if(and__3370__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3370__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3985__auto__ = (((m == null))?null:m);return (function (){var or__3382__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3370__auto__ = m;if(and__3370__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3370__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3985__auto__ = (((m == null))?null:m);return (function (){var or__3382__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10370 = (function (cs,ch,mult,meta10371){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10371 = meta10371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10370.cljs$lang$type = true;
cljs.core.async.t10370.cljs$lang$ctorStr = "cljs.core.async/t10370";
cljs.core.async.t10370.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t10370");
});})(cs))
;
cljs.core.async.t10370.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10370.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10370.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10370.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10370.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10372){var self__ = this;
var _10372__$1 = this;return self__.meta10371;
});})(cs))
;
cljs.core.async.t10370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10372,meta10371__$1){var self__ = this;
var _10372__$1 = this;return (new cljs.core.async.t10370(self__.cs,self__.ch,self__.mult,meta10371__$1));
});})(cs))
;
cljs.core.async.__GT_t10370 = ((function (cs){
return (function __GT_t10370(cs__$1,ch__$1,mult__$1,meta10371){return (new cljs.core.async.t10370(cs__$1,ch__$1,mult__$1,meta10371));
});})(cs))
;
}
return (new cljs.core.async.t10370(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6625__auto___10584 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_10502){var state_val_10503 = (state_10502[1]);if((state_val_10503 === 32))
{var inst_10375 = (state_10502[7]);var inst_10451 = (state_10502[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10502,31,Object,null,30);var inst_10458 = cljs.core.async.put_BANG_.call(null,inst_10451,inst_10375,done);var state_10502__$1 = state_10502;var statearr_10504_10585 = state_10502__$1;(statearr_10504_10585[2] = inst_10458);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10502__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 1))
{var state_10502__$1 = state_10502;var statearr_10505_10586 = state_10502__$1;(statearr_10505_10586[2] = null);
(statearr_10505_10586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 33))
{var inst_10464 = (state_10502[9]);var inst_10466 = cljs.core.chunked_seq_QMARK_.call(null,inst_10464);var state_10502__$1 = state_10502;if(inst_10466)
{var statearr_10506_10587 = state_10502__$1;(statearr_10506_10587[1] = 36);
} else
{var statearr_10507_10588 = state_10502__$1;(statearr_10507_10588[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 2))
{var state_10502__$1 = state_10502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10502__$1,4,ch);
} else
{if((state_val_10503 === 34))
{var state_10502__$1 = state_10502;var statearr_10508_10589 = state_10502__$1;(statearr_10508_10589[2] = null);
(statearr_10508_10589[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 3))
{var inst_10500 = (state_10502[2]);var state_10502__$1 = state_10502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10502__$1,inst_10500);
} else
{if((state_val_10503 === 35))
{var inst_10489 = (state_10502[2]);var state_10502__$1 = state_10502;var statearr_10509_10590 = state_10502__$1;(statearr_10509_10590[2] = inst_10489);
(statearr_10509_10590[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 4))
{var inst_10375 = (state_10502[7]);var inst_10375__$1 = (state_10502[2]);var inst_10376 = (inst_10375__$1 == null);var state_10502__$1 = (function (){var statearr_10510 = state_10502;(statearr_10510[7] = inst_10375__$1);
return statearr_10510;
})();if(cljs.core.truth_(inst_10376))
{var statearr_10511_10591 = state_10502__$1;(statearr_10511_10591[1] = 5);
} else
{var statearr_10512_10592 = state_10502__$1;(statearr_10512_10592[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 36))
{var inst_10464 = (state_10502[9]);var inst_10468 = cljs.core.chunk_first.call(null,inst_10464);var inst_10469 = cljs.core.chunk_rest.call(null,inst_10464);var inst_10470 = cljs.core.count.call(null,inst_10468);var inst_10443 = inst_10469;var inst_10444 = inst_10468;var inst_10445 = inst_10470;var inst_10446 = 0;var state_10502__$1 = (function (){var statearr_10513 = state_10502;(statearr_10513[10] = inst_10444);
(statearr_10513[11] = inst_10445);
(statearr_10513[12] = inst_10446);
(statearr_10513[13] = inst_10443);
return statearr_10513;
})();var statearr_10514_10593 = state_10502__$1;(statearr_10514_10593[2] = null);
(statearr_10514_10593[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 5))
{var inst_10382 = cljs.core.deref.call(null,cs);var inst_10383 = cljs.core.seq.call(null,inst_10382);var inst_10384 = inst_10383;var inst_10385 = null;var inst_10386 = 0;var inst_10387 = 0;var state_10502__$1 = (function (){var statearr_10515 = state_10502;(statearr_10515[14] = inst_10384);
(statearr_10515[15] = inst_10387);
(statearr_10515[16] = inst_10386);
(statearr_10515[17] = inst_10385);
return statearr_10515;
})();var statearr_10516_10594 = state_10502__$1;(statearr_10516_10594[2] = null);
(statearr_10516_10594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 37))
{var inst_10464 = (state_10502[9]);var inst_10473 = cljs.core.first.call(null,inst_10464);var state_10502__$1 = (function (){var statearr_10517 = state_10502;(statearr_10517[18] = inst_10473);
return statearr_10517;
})();var statearr_10518_10595 = state_10502__$1;(statearr_10518_10595[2] = null);
(statearr_10518_10595[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 6))
{var inst_10434 = cljs.core.deref.call(null,cs);var inst_10435 = cljs.core.keys.call(null,inst_10434);var inst_10436 = cljs.core.count.call(null,inst_10435);var inst_10437 = cljs.core.reset_BANG_.call(null,dctr,inst_10436);var inst_10442 = cljs.core.seq.call(null,inst_10435);var inst_10443 = inst_10442;var inst_10444 = null;var inst_10445 = 0;var inst_10446 = 0;var state_10502__$1 = (function (){var statearr_10519 = state_10502;(statearr_10519[10] = inst_10444);
(statearr_10519[11] = inst_10445);
(statearr_10519[12] = inst_10446);
(statearr_10519[13] = inst_10443);
(statearr_10519[19] = inst_10437);
return statearr_10519;
})();var statearr_10520_10596 = state_10502__$1;(statearr_10520_10596[2] = null);
(statearr_10520_10596[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 38))
{var inst_10486 = (state_10502[2]);var state_10502__$1 = state_10502;var statearr_10521_10597 = state_10502__$1;(statearr_10521_10597[2] = inst_10486);
(statearr_10521_10597[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 7))
{var inst_10498 = (state_10502[2]);var state_10502__$1 = state_10502;var statearr_10522_10598 = state_10502__$1;(statearr_10522_10598[2] = inst_10498);
(statearr_10522_10598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 39))
{var inst_10464 = (state_10502[9]);var inst_10482 = (state_10502[2]);var inst_10483 = cljs.core.next.call(null,inst_10464);var inst_10443 = inst_10483;var inst_10444 = null;var inst_10445 = 0;var inst_10446 = 0;var state_10502__$1 = (function (){var statearr_10523 = state_10502;(statearr_10523[20] = inst_10482);
(statearr_10523[10] = inst_10444);
(statearr_10523[11] = inst_10445);
(statearr_10523[12] = inst_10446);
(statearr_10523[13] = inst_10443);
return statearr_10523;
})();var statearr_10524_10599 = state_10502__$1;(statearr_10524_10599[2] = null);
(statearr_10524_10599[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 8))
{var inst_10387 = (state_10502[15]);var inst_10386 = (state_10502[16]);var inst_10389 = (inst_10387 < inst_10386);var inst_10390 = inst_10389;var state_10502__$1 = state_10502;if(cljs.core.truth_(inst_10390))
{var statearr_10525_10600 = state_10502__$1;(statearr_10525_10600[1] = 10);
} else
{var statearr_10526_10601 = state_10502__$1;(statearr_10526_10601[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 40))
{var inst_10473 = (state_10502[18]);var inst_10474 = (state_10502[2]);var inst_10475 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10476 = cljs.core.async.untap_STAR_.call(null,m,inst_10473);var state_10502__$1 = (function (){var statearr_10527 = state_10502;(statearr_10527[21] = inst_10475);
(statearr_10527[22] = inst_10474);
return statearr_10527;
})();var statearr_10528_10602 = state_10502__$1;(statearr_10528_10602[2] = inst_10476);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10502__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 9))
{var inst_10432 = (state_10502[2]);var state_10502__$1 = state_10502;var statearr_10529_10603 = state_10502__$1;(statearr_10529_10603[2] = inst_10432);
(statearr_10529_10603[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 41))
{var inst_10375 = (state_10502[7]);var inst_10473 = (state_10502[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10502,40,Object,null,39);var inst_10480 = cljs.core.async.put_BANG_.call(null,inst_10473,inst_10375,done);var state_10502__$1 = state_10502;var statearr_10530_10604 = state_10502__$1;(statearr_10530_10604[2] = inst_10480);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10502__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 10))
{var inst_10387 = (state_10502[15]);var inst_10385 = (state_10502[17]);var inst_10393 = cljs.core._nth.call(null,inst_10385,inst_10387);var inst_10394 = cljs.core.nth.call(null,inst_10393,0,null);var inst_10395 = cljs.core.nth.call(null,inst_10393,1,null);var state_10502__$1 = (function (){var statearr_10531 = state_10502;(statearr_10531[23] = inst_10394);
return statearr_10531;
})();if(cljs.core.truth_(inst_10395))
{var statearr_10532_10605 = state_10502__$1;(statearr_10532_10605[1] = 13);
} else
{var statearr_10533_10606 = state_10502__$1;(statearr_10533_10606[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 42))
{var inst_10495 = (state_10502[2]);var state_10502__$1 = (function (){var statearr_10534 = state_10502;(statearr_10534[24] = inst_10495);
return statearr_10534;
})();var statearr_10535_10607 = state_10502__$1;(statearr_10535_10607[2] = null);
(statearr_10535_10607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 11))
{var inst_10384 = (state_10502[14]);var inst_10404 = (state_10502[25]);var inst_10404__$1 = cljs.core.seq.call(null,inst_10384);var state_10502__$1 = (function (){var statearr_10536 = state_10502;(statearr_10536[25] = inst_10404__$1);
return statearr_10536;
})();if(inst_10404__$1)
{var statearr_10537_10608 = state_10502__$1;(statearr_10537_10608[1] = 16);
} else
{var statearr_10538_10609 = state_10502__$1;(statearr_10538_10609[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 12))
{var inst_10430 = (state_10502[2]);var state_10502__$1 = state_10502;var statearr_10539_10610 = state_10502__$1;(statearr_10539_10610[2] = inst_10430);
(statearr_10539_10610[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 13))
{var inst_10394 = (state_10502[23]);var inst_10397 = cljs.core.async.close_BANG_.call(null,inst_10394);var state_10502__$1 = state_10502;var statearr_10543_10611 = state_10502__$1;(statearr_10543_10611[2] = inst_10397);
(statearr_10543_10611[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 14))
{var state_10502__$1 = state_10502;var statearr_10544_10612 = state_10502__$1;(statearr_10544_10612[2] = null);
(statearr_10544_10612[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 15))
{var inst_10384 = (state_10502[14]);var inst_10387 = (state_10502[15]);var inst_10386 = (state_10502[16]);var inst_10385 = (state_10502[17]);var inst_10400 = (state_10502[2]);var inst_10401 = (inst_10387 + 1);var tmp10540 = inst_10384;var tmp10541 = inst_10386;var tmp10542 = inst_10385;var inst_10384__$1 = tmp10540;var inst_10385__$1 = tmp10542;var inst_10386__$1 = tmp10541;var inst_10387__$1 = inst_10401;var state_10502__$1 = (function (){var statearr_10545 = state_10502;(statearr_10545[26] = inst_10400);
(statearr_10545[14] = inst_10384__$1);
(statearr_10545[15] = inst_10387__$1);
(statearr_10545[16] = inst_10386__$1);
(statearr_10545[17] = inst_10385__$1);
return statearr_10545;
})();var statearr_10546_10613 = state_10502__$1;(statearr_10546_10613[2] = null);
(statearr_10546_10613[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 16))
{var inst_10404 = (state_10502[25]);var inst_10406 = cljs.core.chunked_seq_QMARK_.call(null,inst_10404);var state_10502__$1 = state_10502;if(inst_10406)
{var statearr_10547_10614 = state_10502__$1;(statearr_10547_10614[1] = 19);
} else
{var statearr_10548_10615 = state_10502__$1;(statearr_10548_10615[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 17))
{var state_10502__$1 = state_10502;var statearr_10549_10616 = state_10502__$1;(statearr_10549_10616[2] = null);
(statearr_10549_10616[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 18))
{var inst_10428 = (state_10502[2]);var state_10502__$1 = state_10502;var statearr_10550_10617 = state_10502__$1;(statearr_10550_10617[2] = inst_10428);
(statearr_10550_10617[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 19))
{var inst_10404 = (state_10502[25]);var inst_10408 = cljs.core.chunk_first.call(null,inst_10404);var inst_10409 = cljs.core.chunk_rest.call(null,inst_10404);var inst_10410 = cljs.core.count.call(null,inst_10408);var inst_10384 = inst_10409;var inst_10385 = inst_10408;var inst_10386 = inst_10410;var inst_10387 = 0;var state_10502__$1 = (function (){var statearr_10551 = state_10502;(statearr_10551[14] = inst_10384);
(statearr_10551[15] = inst_10387);
(statearr_10551[16] = inst_10386);
(statearr_10551[17] = inst_10385);
return statearr_10551;
})();var statearr_10552_10618 = state_10502__$1;(statearr_10552_10618[2] = null);
(statearr_10552_10618[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 20))
{var inst_10404 = (state_10502[25]);var inst_10414 = cljs.core.first.call(null,inst_10404);var inst_10415 = cljs.core.nth.call(null,inst_10414,0,null);var inst_10416 = cljs.core.nth.call(null,inst_10414,1,null);var state_10502__$1 = (function (){var statearr_10553 = state_10502;(statearr_10553[27] = inst_10415);
return statearr_10553;
})();if(cljs.core.truth_(inst_10416))
{var statearr_10554_10619 = state_10502__$1;(statearr_10554_10619[1] = 22);
} else
{var statearr_10555_10620 = state_10502__$1;(statearr_10555_10620[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 21))
{var inst_10425 = (state_10502[2]);var state_10502__$1 = state_10502;var statearr_10556_10621 = state_10502__$1;(statearr_10556_10621[2] = inst_10425);
(statearr_10556_10621[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 22))
{var inst_10415 = (state_10502[27]);var inst_10418 = cljs.core.async.close_BANG_.call(null,inst_10415);var state_10502__$1 = state_10502;var statearr_10557_10622 = state_10502__$1;(statearr_10557_10622[2] = inst_10418);
(statearr_10557_10622[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 23))
{var state_10502__$1 = state_10502;var statearr_10558_10623 = state_10502__$1;(statearr_10558_10623[2] = null);
(statearr_10558_10623[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 24))
{var inst_10404 = (state_10502[25]);var inst_10421 = (state_10502[2]);var inst_10422 = cljs.core.next.call(null,inst_10404);var inst_10384 = inst_10422;var inst_10385 = null;var inst_10386 = 0;var inst_10387 = 0;var state_10502__$1 = (function (){var statearr_10559 = state_10502;(statearr_10559[14] = inst_10384);
(statearr_10559[28] = inst_10421);
(statearr_10559[15] = inst_10387);
(statearr_10559[16] = inst_10386);
(statearr_10559[17] = inst_10385);
return statearr_10559;
})();var statearr_10560_10624 = state_10502__$1;(statearr_10560_10624[2] = null);
(statearr_10560_10624[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 25))
{var inst_10445 = (state_10502[11]);var inst_10446 = (state_10502[12]);var inst_10448 = (inst_10446 < inst_10445);var inst_10449 = inst_10448;var state_10502__$1 = state_10502;if(cljs.core.truth_(inst_10449))
{var statearr_10561_10625 = state_10502__$1;(statearr_10561_10625[1] = 27);
} else
{var statearr_10562_10626 = state_10502__$1;(statearr_10562_10626[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 26))
{var inst_10493 = (state_10502[2]);var state_10502__$1 = (function (){var statearr_10563 = state_10502;(statearr_10563[29] = inst_10493);
return statearr_10563;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10502__$1,42,dchan);
} else
{if((state_val_10503 === 27))
{var inst_10444 = (state_10502[10]);var inst_10446 = (state_10502[12]);var inst_10451 = cljs.core._nth.call(null,inst_10444,inst_10446);var state_10502__$1 = (function (){var statearr_10564 = state_10502;(statearr_10564[8] = inst_10451);
return statearr_10564;
})();var statearr_10565_10627 = state_10502__$1;(statearr_10565_10627[2] = null);
(statearr_10565_10627[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 28))
{var inst_10443 = (state_10502[13]);var inst_10464 = (state_10502[9]);var inst_10464__$1 = cljs.core.seq.call(null,inst_10443);var state_10502__$1 = (function (){var statearr_10569 = state_10502;(statearr_10569[9] = inst_10464__$1);
return statearr_10569;
})();if(inst_10464__$1)
{var statearr_10570_10628 = state_10502__$1;(statearr_10570_10628[1] = 33);
} else
{var statearr_10571_10629 = state_10502__$1;(statearr_10571_10629[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 29))
{var inst_10491 = (state_10502[2]);var state_10502__$1 = state_10502;var statearr_10572_10630 = state_10502__$1;(statearr_10572_10630[2] = inst_10491);
(statearr_10572_10630[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 30))
{var inst_10444 = (state_10502[10]);var inst_10445 = (state_10502[11]);var inst_10446 = (state_10502[12]);var inst_10443 = (state_10502[13]);var inst_10460 = (state_10502[2]);var inst_10461 = (inst_10446 + 1);var tmp10566 = inst_10444;var tmp10567 = inst_10445;var tmp10568 = inst_10443;var inst_10443__$1 = tmp10568;var inst_10444__$1 = tmp10566;var inst_10445__$1 = tmp10567;var inst_10446__$1 = inst_10461;var state_10502__$1 = (function (){var statearr_10573 = state_10502;(statearr_10573[10] = inst_10444__$1);
(statearr_10573[11] = inst_10445__$1);
(statearr_10573[12] = inst_10446__$1);
(statearr_10573[13] = inst_10443__$1);
(statearr_10573[30] = inst_10460);
return statearr_10573;
})();var statearr_10574_10631 = state_10502__$1;(statearr_10574_10631[2] = null);
(statearr_10574_10631[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10503 === 31))
{var inst_10451 = (state_10502[8]);var inst_10452 = (state_10502[2]);var inst_10453 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10454 = cljs.core.async.untap_STAR_.call(null,m,inst_10451);var state_10502__$1 = (function (){var statearr_10575 = state_10502;(statearr_10575[31] = inst_10453);
(statearr_10575[32] = inst_10452);
return statearr_10575;
})();var statearr_10576_10632 = state_10502__$1;(statearr_10576_10632[2] = inst_10454);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10502__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_10580 = (new Array(33));(statearr_10580[0] = state_machine__6556__auto__);
(statearr_10580[1] = 1);
return statearr_10580;
});
var state_machine__6556__auto____1 = (function (state_10502){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_10502);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e10581){if((e10581 instanceof Object))
{var ex__6559__auto__ = e10581;var statearr_10582_10633 = state_10502;(statearr_10582_10633[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10502);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10634 = state_10502;
state_10502 = G__10634;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_10502){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_10502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_10583 = f__6626__auto__.call(null);(statearr_10583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___10584);
return statearr_10583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10636 = {};return obj10636;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3370__auto__ = m;if(and__3370__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3370__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3985__auto__ = (((m == null))?null:m);return (function (){var or__3382__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3370__auto__ = m;if(and__3370__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3370__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3985__auto__ = (((m == null))?null:m);return (function (){var or__3382__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3370__auto__ = m;if(and__3370__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3370__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3985__auto__ = (((m == null))?null:m);return (function (){var or__3382__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3370__auto__ = m;if(and__3370__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3370__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3985__auto__ = (((m == null))?null:m);return (function (){var or__3382__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3370__auto__ = m;if(and__3370__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3370__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3985__auto__ = (((m == null))?null:m);return (function (){var or__3382__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10746 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10746 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10747){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10747 = meta10747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10746.cljs$lang$type = true;
cljs.core.async.t10746.cljs$lang$ctorStr = "cljs.core.async/t10746";
cljs.core.async.t10746.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t10746");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10746.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10746.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10746.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10746.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10746.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10746.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10746.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10746.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10748){var self__ = this;
var _10748__$1 = this;return self__.meta10747;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10748,meta10747__$1){var self__ = this;
var _10748__$1 = this;return (new cljs.core.async.t10746(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10747__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10746 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10746(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10747){return (new cljs.core.async.t10746(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10747));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10746(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6625__auto___10855 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_10813){var state_val_10814 = (state_10813[1]);if((state_val_10814 === 1))
{var inst_10752 = (state_10813[7]);var inst_10752__$1 = calc_state.call(null);var inst_10753 = cljs.core.seq_QMARK_.call(null,inst_10752__$1);var state_10813__$1 = (function (){var statearr_10815 = state_10813;(statearr_10815[7] = inst_10752__$1);
return statearr_10815;
})();if(inst_10753)
{var statearr_10816_10856 = state_10813__$1;(statearr_10816_10856[1] = 2);
} else
{var statearr_10817_10857 = state_10813__$1;(statearr_10817_10857[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 2))
{var inst_10752 = (state_10813[7]);var inst_10755 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10752);var state_10813__$1 = state_10813;var statearr_10818_10858 = state_10813__$1;(statearr_10818_10858[2] = inst_10755);
(statearr_10818_10858[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 3))
{var inst_10752 = (state_10813[7]);var state_10813__$1 = state_10813;var statearr_10819_10859 = state_10813__$1;(statearr_10819_10859[2] = inst_10752);
(statearr_10819_10859[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 4))
{var inst_10752 = (state_10813[7]);var inst_10758 = (state_10813[2]);var inst_10759 = cljs.core.get.call(null,inst_10758,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10760 = cljs.core.get.call(null,inst_10758,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10761 = cljs.core.get.call(null,inst_10758,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10762 = inst_10752;var state_10813__$1 = (function (){var statearr_10820 = state_10813;(statearr_10820[8] = inst_10762);
(statearr_10820[9] = inst_10761);
(statearr_10820[10] = inst_10760);
(statearr_10820[11] = inst_10759);
return statearr_10820;
})();var statearr_10821_10860 = state_10813__$1;(statearr_10821_10860[2] = null);
(statearr_10821_10860[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 5))
{var inst_10762 = (state_10813[8]);var inst_10765 = cljs.core.seq_QMARK_.call(null,inst_10762);var state_10813__$1 = state_10813;if(inst_10765)
{var statearr_10822_10861 = state_10813__$1;(statearr_10822_10861[1] = 7);
} else
{var statearr_10823_10862 = state_10813__$1;(statearr_10823_10862[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 6))
{var inst_10811 = (state_10813[2]);var state_10813__$1 = state_10813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10813__$1,inst_10811);
} else
{if((state_val_10814 === 7))
{var inst_10762 = (state_10813[8]);var inst_10767 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10762);var state_10813__$1 = state_10813;var statearr_10824_10863 = state_10813__$1;(statearr_10824_10863[2] = inst_10767);
(statearr_10824_10863[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 8))
{var inst_10762 = (state_10813[8]);var state_10813__$1 = state_10813;var statearr_10825_10864 = state_10813__$1;(statearr_10825_10864[2] = inst_10762);
(statearr_10825_10864[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 9))
{var inst_10770 = (state_10813[12]);var inst_10770__$1 = (state_10813[2]);var inst_10771 = cljs.core.get.call(null,inst_10770__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10772 = cljs.core.get.call(null,inst_10770__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10773 = cljs.core.get.call(null,inst_10770__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10813__$1 = (function (){var statearr_10826 = state_10813;(statearr_10826[13] = inst_10773);
(statearr_10826[14] = inst_10772);
(statearr_10826[12] = inst_10770__$1);
return statearr_10826;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10813__$1,10,inst_10771);
} else
{if((state_val_10814 === 10))
{var inst_10778 = (state_10813[15]);var inst_10777 = (state_10813[16]);var inst_10776 = (state_10813[2]);var inst_10777__$1 = cljs.core.nth.call(null,inst_10776,0,null);var inst_10778__$1 = cljs.core.nth.call(null,inst_10776,1,null);var inst_10779 = (inst_10777__$1 == null);var inst_10780 = cljs.core._EQ_.call(null,inst_10778__$1,change);var inst_10781 = (inst_10779) || (inst_10780);var state_10813__$1 = (function (){var statearr_10827 = state_10813;(statearr_10827[15] = inst_10778__$1);
(statearr_10827[16] = inst_10777__$1);
return statearr_10827;
})();if(cljs.core.truth_(inst_10781))
{var statearr_10828_10865 = state_10813__$1;(statearr_10828_10865[1] = 11);
} else
{var statearr_10829_10866 = state_10813__$1;(statearr_10829_10866[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 11))
{var inst_10777 = (state_10813[16]);var inst_10783 = (inst_10777 == null);var state_10813__$1 = state_10813;if(cljs.core.truth_(inst_10783))
{var statearr_10830_10867 = state_10813__$1;(statearr_10830_10867[1] = 14);
} else
{var statearr_10831_10868 = state_10813__$1;(statearr_10831_10868[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 12))
{var inst_10778 = (state_10813[15]);var inst_10773 = (state_10813[13]);var inst_10792 = (state_10813[17]);var inst_10792__$1 = inst_10773.call(null,inst_10778);var state_10813__$1 = (function (){var statearr_10832 = state_10813;(statearr_10832[17] = inst_10792__$1);
return statearr_10832;
})();if(cljs.core.truth_(inst_10792__$1))
{var statearr_10833_10869 = state_10813__$1;(statearr_10833_10869[1] = 17);
} else
{var statearr_10834_10870 = state_10813__$1;(statearr_10834_10870[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 13))
{var inst_10809 = (state_10813[2]);var state_10813__$1 = state_10813;var statearr_10835_10871 = state_10813__$1;(statearr_10835_10871[2] = inst_10809);
(statearr_10835_10871[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 14))
{var inst_10778 = (state_10813[15]);var inst_10785 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10778);var state_10813__$1 = state_10813;var statearr_10836_10872 = state_10813__$1;(statearr_10836_10872[2] = inst_10785);
(statearr_10836_10872[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 15))
{var state_10813__$1 = state_10813;var statearr_10837_10873 = state_10813__$1;(statearr_10837_10873[2] = null);
(statearr_10837_10873[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 16))
{var inst_10788 = (state_10813[2]);var inst_10789 = calc_state.call(null);var inst_10762 = inst_10789;var state_10813__$1 = (function (){var statearr_10838 = state_10813;(statearr_10838[8] = inst_10762);
(statearr_10838[18] = inst_10788);
return statearr_10838;
})();var statearr_10839_10874 = state_10813__$1;(statearr_10839_10874[2] = null);
(statearr_10839_10874[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 17))
{var inst_10792 = (state_10813[17]);var state_10813__$1 = state_10813;var statearr_10840_10875 = state_10813__$1;(statearr_10840_10875[2] = inst_10792);
(statearr_10840_10875[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 18))
{var inst_10778 = (state_10813[15]);var inst_10773 = (state_10813[13]);var inst_10772 = (state_10813[14]);var inst_10795 = cljs.core.empty_QMARK_.call(null,inst_10773);var inst_10796 = inst_10772.call(null,inst_10778);var inst_10797 = cljs.core.not.call(null,inst_10796);var inst_10798 = (inst_10795) && (inst_10797);var state_10813__$1 = state_10813;var statearr_10841_10876 = state_10813__$1;(statearr_10841_10876[2] = inst_10798);
(statearr_10841_10876[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 19))
{var inst_10800 = (state_10813[2]);var state_10813__$1 = state_10813;if(cljs.core.truth_(inst_10800))
{var statearr_10842_10877 = state_10813__$1;(statearr_10842_10877[1] = 20);
} else
{var statearr_10843_10878 = state_10813__$1;(statearr_10843_10878[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 20))
{var inst_10777 = (state_10813[16]);var state_10813__$1 = state_10813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10813__$1,23,out,inst_10777);
} else
{if((state_val_10814 === 21))
{var state_10813__$1 = state_10813;var statearr_10844_10879 = state_10813__$1;(statearr_10844_10879[2] = null);
(statearr_10844_10879[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 22))
{var inst_10770 = (state_10813[12]);var inst_10806 = (state_10813[2]);var inst_10762 = inst_10770;var state_10813__$1 = (function (){var statearr_10845 = state_10813;(statearr_10845[8] = inst_10762);
(statearr_10845[19] = inst_10806);
return statearr_10845;
})();var statearr_10846_10880 = state_10813__$1;(statearr_10846_10880[2] = null);
(statearr_10846_10880[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10814 === 23))
{var inst_10803 = (state_10813[2]);var state_10813__$1 = state_10813;var statearr_10847_10881 = state_10813__$1;(statearr_10847_10881[2] = inst_10803);
(statearr_10847_10881[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_10851 = (new Array(20));(statearr_10851[0] = state_machine__6556__auto__);
(statearr_10851[1] = 1);
return statearr_10851;
});
var state_machine__6556__auto____1 = (function (state_10813){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_10813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e10852){if((e10852 instanceof Object))
{var ex__6559__auto__ = e10852;var statearr_10853_10882 = state_10813;(statearr_10853_10882[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10813);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10883 = state_10813;
state_10813 = G__10883;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_10813){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_10813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_10854 = f__6626__auto__.call(null);(statearr_10854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___10855);
return statearr_10854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10885 = {};return obj10885;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3370__auto__ = p;if(and__3370__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3370__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3985__auto__ = (((p == null))?null:p);return (function (){var or__3382__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3370__auto__ = p;if(and__3370__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3370__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3985__auto__ = (((p == null))?null:p);return (function (){var or__3382__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3370__auto__ = p;if(and__3370__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3370__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3985__auto__ = (((p == null))?null:p);return (function (){var or__3382__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3370__auto__ = p;if(and__3370__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3370__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3985__auto__ = (((p == null))?null:p);return (function (){var or__3382__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
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
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3382__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3382__auto__,mults){
return (function (p1__10886_SHARP_){if(cljs.core.truth_(p1__10886_SHARP_.call(null,topic)))
{return p1__10886_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10886_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3382__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11011 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11011 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11012){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11012 = meta11012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11011.cljs$lang$type = true;
cljs.core.async.t11011.cljs$lang$ctorStr = "cljs.core.async/t11011";
cljs.core.async.t11011.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"cljs.core.async/t11011");
});})(mults,ensure_mult))
;
cljs.core.async.t11011.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11011.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11011.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11011.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11013){var self__ = this;
var _11013__$1 = this;return self__.meta11012;
});})(mults,ensure_mult))
;
cljs.core.async.t11011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11013,meta11012__$1){var self__ = this;
var _11013__$1 = this;return (new cljs.core.async.t11011(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11012__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11011 = ((function (mults,ensure_mult){
return (function __GT_t11011(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11012){return (new cljs.core.async.t11011(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11012));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11011(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6625__auto___11135 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_11087){var state_val_11088 = (state_11087[1]);if((state_val_11088 === 1))
{var state_11087__$1 = state_11087;var statearr_11089_11136 = state_11087__$1;(statearr_11089_11136[2] = null);
(statearr_11089_11136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 2))
{var state_11087__$1 = state_11087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11087__$1,4,ch);
} else
{if((state_val_11088 === 3))
{var inst_11085 = (state_11087[2]);var state_11087__$1 = state_11087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11087__$1,inst_11085);
} else
{if((state_val_11088 === 4))
{var inst_11016 = (state_11087[7]);var inst_11016__$1 = (state_11087[2]);var inst_11017 = (inst_11016__$1 == null);var state_11087__$1 = (function (){var statearr_11090 = state_11087;(statearr_11090[7] = inst_11016__$1);
return statearr_11090;
})();if(cljs.core.truth_(inst_11017))
{var statearr_11091_11137 = state_11087__$1;(statearr_11091_11137[1] = 5);
} else
{var statearr_11092_11138 = state_11087__$1;(statearr_11092_11138[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 5))
{var inst_11023 = cljs.core.deref.call(null,mults);var inst_11024 = cljs.core.vals.call(null,inst_11023);var inst_11025 = cljs.core.seq.call(null,inst_11024);var inst_11026 = inst_11025;var inst_11027 = null;var inst_11028 = 0;var inst_11029 = 0;var state_11087__$1 = (function (){var statearr_11093 = state_11087;(statearr_11093[8] = inst_11026);
(statearr_11093[9] = inst_11027);
(statearr_11093[10] = inst_11028);
(statearr_11093[11] = inst_11029);
return statearr_11093;
})();var statearr_11094_11139 = state_11087__$1;(statearr_11094_11139[2] = null);
(statearr_11094_11139[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 6))
{var inst_11016 = (state_11087[7]);var inst_11066 = (state_11087[12]);var inst_11064 = (state_11087[13]);var inst_11064__$1 = topic_fn.call(null,inst_11016);var inst_11065 = cljs.core.deref.call(null,mults);var inst_11066__$1 = cljs.core.get.call(null,inst_11065,inst_11064__$1);var state_11087__$1 = (function (){var statearr_11095 = state_11087;(statearr_11095[12] = inst_11066__$1);
(statearr_11095[13] = inst_11064__$1);
return statearr_11095;
})();if(cljs.core.truth_(inst_11066__$1))
{var statearr_11096_11140 = state_11087__$1;(statearr_11096_11140[1] = 19);
} else
{var statearr_11097_11141 = state_11087__$1;(statearr_11097_11141[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 7))
{var inst_11083 = (state_11087[2]);var state_11087__$1 = state_11087;var statearr_11098_11142 = state_11087__$1;(statearr_11098_11142[2] = inst_11083);
(statearr_11098_11142[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 8))
{var inst_11028 = (state_11087[10]);var inst_11029 = (state_11087[11]);var inst_11031 = (inst_11029 < inst_11028);var inst_11032 = inst_11031;var state_11087__$1 = state_11087;if(cljs.core.truth_(inst_11032))
{var statearr_11102_11143 = state_11087__$1;(statearr_11102_11143[1] = 10);
} else
{var statearr_11103_11144 = state_11087__$1;(statearr_11103_11144[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 9))
{var inst_11062 = (state_11087[2]);var state_11087__$1 = state_11087;var statearr_11104_11145 = state_11087__$1;(statearr_11104_11145[2] = inst_11062);
(statearr_11104_11145[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 10))
{var inst_11026 = (state_11087[8]);var inst_11027 = (state_11087[9]);var inst_11028 = (state_11087[10]);var inst_11029 = (state_11087[11]);var inst_11034 = cljs.core._nth.call(null,inst_11027,inst_11029);var inst_11035 = cljs.core.async.muxch_STAR_.call(null,inst_11034);var inst_11036 = cljs.core.async.close_BANG_.call(null,inst_11035);var inst_11037 = (inst_11029 + 1);var tmp11099 = inst_11026;var tmp11100 = inst_11027;var tmp11101 = inst_11028;var inst_11026__$1 = tmp11099;var inst_11027__$1 = tmp11100;var inst_11028__$1 = tmp11101;var inst_11029__$1 = inst_11037;var state_11087__$1 = (function (){var statearr_11105 = state_11087;(statearr_11105[8] = inst_11026__$1);
(statearr_11105[9] = inst_11027__$1);
(statearr_11105[10] = inst_11028__$1);
(statearr_11105[14] = inst_11036);
(statearr_11105[11] = inst_11029__$1);
return statearr_11105;
})();var statearr_11106_11146 = state_11087__$1;(statearr_11106_11146[2] = null);
(statearr_11106_11146[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 11))
{var inst_11026 = (state_11087[8]);var inst_11040 = (state_11087[15]);var inst_11040__$1 = cljs.core.seq.call(null,inst_11026);var state_11087__$1 = (function (){var statearr_11107 = state_11087;(statearr_11107[15] = inst_11040__$1);
return statearr_11107;
})();if(inst_11040__$1)
{var statearr_11108_11147 = state_11087__$1;(statearr_11108_11147[1] = 13);
} else
{var statearr_11109_11148 = state_11087__$1;(statearr_11109_11148[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 12))
{var inst_11060 = (state_11087[2]);var state_11087__$1 = state_11087;var statearr_11110_11149 = state_11087__$1;(statearr_11110_11149[2] = inst_11060);
(statearr_11110_11149[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 13))
{var inst_11040 = (state_11087[15]);var inst_11042 = cljs.core.chunked_seq_QMARK_.call(null,inst_11040);var state_11087__$1 = state_11087;if(inst_11042)
{var statearr_11111_11150 = state_11087__$1;(statearr_11111_11150[1] = 16);
} else
{var statearr_11112_11151 = state_11087__$1;(statearr_11112_11151[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 14))
{var state_11087__$1 = state_11087;var statearr_11113_11152 = state_11087__$1;(statearr_11113_11152[2] = null);
(statearr_11113_11152[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 15))
{var inst_11058 = (state_11087[2]);var state_11087__$1 = state_11087;var statearr_11114_11153 = state_11087__$1;(statearr_11114_11153[2] = inst_11058);
(statearr_11114_11153[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 16))
{var inst_11040 = (state_11087[15]);var inst_11044 = cljs.core.chunk_first.call(null,inst_11040);var inst_11045 = cljs.core.chunk_rest.call(null,inst_11040);var inst_11046 = cljs.core.count.call(null,inst_11044);var inst_11026 = inst_11045;var inst_11027 = inst_11044;var inst_11028 = inst_11046;var inst_11029 = 0;var state_11087__$1 = (function (){var statearr_11115 = state_11087;(statearr_11115[8] = inst_11026);
(statearr_11115[9] = inst_11027);
(statearr_11115[10] = inst_11028);
(statearr_11115[11] = inst_11029);
return statearr_11115;
})();var statearr_11116_11154 = state_11087__$1;(statearr_11116_11154[2] = null);
(statearr_11116_11154[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 17))
{var inst_11040 = (state_11087[15]);var inst_11049 = cljs.core.first.call(null,inst_11040);var inst_11050 = cljs.core.async.muxch_STAR_.call(null,inst_11049);var inst_11051 = cljs.core.async.close_BANG_.call(null,inst_11050);var inst_11052 = cljs.core.next.call(null,inst_11040);var inst_11026 = inst_11052;var inst_11027 = null;var inst_11028 = 0;var inst_11029 = 0;var state_11087__$1 = (function (){var statearr_11117 = state_11087;(statearr_11117[8] = inst_11026);
(statearr_11117[16] = inst_11051);
(statearr_11117[9] = inst_11027);
(statearr_11117[10] = inst_11028);
(statearr_11117[11] = inst_11029);
return statearr_11117;
})();var statearr_11118_11155 = state_11087__$1;(statearr_11118_11155[2] = null);
(statearr_11118_11155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 18))
{var inst_11055 = (state_11087[2]);var state_11087__$1 = state_11087;var statearr_11119_11156 = state_11087__$1;(statearr_11119_11156[2] = inst_11055);
(statearr_11119_11156[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 19))
{var state_11087__$1 = state_11087;var statearr_11120_11157 = state_11087__$1;(statearr_11120_11157[2] = null);
(statearr_11120_11157[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 20))
{var state_11087__$1 = state_11087;var statearr_11121_11158 = state_11087__$1;(statearr_11121_11158[2] = null);
(statearr_11121_11158[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 21))
{var inst_11080 = (state_11087[2]);var state_11087__$1 = (function (){var statearr_11122 = state_11087;(statearr_11122[17] = inst_11080);
return statearr_11122;
})();var statearr_11123_11159 = state_11087__$1;(statearr_11123_11159[2] = null);
(statearr_11123_11159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 22))
{var inst_11077 = (state_11087[2]);var state_11087__$1 = state_11087;var statearr_11124_11160 = state_11087__$1;(statearr_11124_11160[2] = inst_11077);
(statearr_11124_11160[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 23))
{var inst_11064 = (state_11087[13]);var inst_11068 = (state_11087[2]);var inst_11069 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11064);var state_11087__$1 = (function (){var statearr_11125 = state_11087;(statearr_11125[18] = inst_11068);
return statearr_11125;
})();var statearr_11126_11161 = state_11087__$1;(statearr_11126_11161[2] = inst_11069);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11087__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11088 === 24))
{var inst_11016 = (state_11087[7]);var inst_11066 = (state_11087[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11087,23,Object,null,22);var inst_11073 = cljs.core.async.muxch_STAR_.call(null,inst_11066);var state_11087__$1 = state_11087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11087__$1,25,inst_11073,inst_11016);
} else
{if((state_val_11088 === 25))
{var inst_11075 = (state_11087[2]);var state_11087__$1 = state_11087;var statearr_11127_11162 = state_11087__$1;(statearr_11127_11162[2] = inst_11075);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11087__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_11131 = (new Array(19));(statearr_11131[0] = state_machine__6556__auto__);
(statearr_11131[1] = 1);
return statearr_11131;
});
var state_machine__6556__auto____1 = (function (state_11087){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_11087);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e11132){if((e11132 instanceof Object))
{var ex__6559__auto__ = e11132;var statearr_11133_11163 = state_11087;(statearr_11133_11163[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11164 = state_11087;
state_11087 = G__11164;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_11087){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_11087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_11134 = f__6626__auto__.call(null);(statearr_11134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___11135);
return statearr_11134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6625__auto___11301 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_11271){var state_val_11272 = (state_11271[1]);if((state_val_11272 === 1))
{var state_11271__$1 = state_11271;var statearr_11273_11302 = state_11271__$1;(statearr_11273_11302[2] = null);
(statearr_11273_11302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 2))
{var inst_11234 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11235 = 0;var state_11271__$1 = (function (){var statearr_11274 = state_11271;(statearr_11274[7] = inst_11235);
(statearr_11274[8] = inst_11234);
return statearr_11274;
})();var statearr_11275_11303 = state_11271__$1;(statearr_11275_11303[2] = null);
(statearr_11275_11303[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 3))
{var inst_11269 = (state_11271[2]);var state_11271__$1 = state_11271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11271__$1,inst_11269);
} else
{if((state_val_11272 === 4))
{var inst_11235 = (state_11271[7]);var inst_11237 = (inst_11235 < cnt);var state_11271__$1 = state_11271;if(cljs.core.truth_(inst_11237))
{var statearr_11276_11304 = state_11271__$1;(statearr_11276_11304[1] = 6);
} else
{var statearr_11277_11305 = state_11271__$1;(statearr_11277_11305[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 5))
{var inst_11255 = (state_11271[2]);var state_11271__$1 = (function (){var statearr_11278 = state_11271;(statearr_11278[9] = inst_11255);
return statearr_11278;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11271__$1,12,dchan);
} else
{if((state_val_11272 === 6))
{var state_11271__$1 = state_11271;var statearr_11279_11306 = state_11271__$1;(statearr_11279_11306[2] = null);
(statearr_11279_11306[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 7))
{var state_11271__$1 = state_11271;var statearr_11280_11307 = state_11271__$1;(statearr_11280_11307[2] = null);
(statearr_11280_11307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 8))
{var inst_11253 = (state_11271[2]);var state_11271__$1 = state_11271;var statearr_11281_11308 = state_11271__$1;(statearr_11281_11308[2] = inst_11253);
(statearr_11281_11308[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 9))
{var inst_11235 = (state_11271[7]);var inst_11248 = (state_11271[2]);var inst_11249 = (inst_11235 + 1);var inst_11235__$1 = inst_11249;var state_11271__$1 = (function (){var statearr_11282 = state_11271;(statearr_11282[10] = inst_11248);
(statearr_11282[7] = inst_11235__$1);
return statearr_11282;
})();var statearr_11283_11309 = state_11271__$1;(statearr_11283_11309[2] = null);
(statearr_11283_11309[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 10))
{var inst_11239 = (state_11271[2]);var inst_11240 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11271__$1 = (function (){var statearr_11284 = state_11271;(statearr_11284[11] = inst_11239);
return statearr_11284;
})();var statearr_11285_11310 = state_11271__$1;(statearr_11285_11310[2] = inst_11240);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11271__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 11))
{var inst_11235 = (state_11271[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11271,10,Object,null,9);var inst_11244 = chs__$1.call(null,inst_11235);var inst_11245 = done.call(null,inst_11235);var inst_11246 = cljs.core.async.take_BANG_.call(null,inst_11244,inst_11245);var state_11271__$1 = state_11271;var statearr_11286_11311 = state_11271__$1;(statearr_11286_11311[2] = inst_11246);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11271__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 12))
{var inst_11257 = (state_11271[12]);var inst_11257__$1 = (state_11271[2]);var inst_11258 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11257__$1);var state_11271__$1 = (function (){var statearr_11287 = state_11271;(statearr_11287[12] = inst_11257__$1);
return statearr_11287;
})();if(cljs.core.truth_(inst_11258))
{var statearr_11288_11312 = state_11271__$1;(statearr_11288_11312[1] = 13);
} else
{var statearr_11289_11313 = state_11271__$1;(statearr_11289_11313[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 13))
{var inst_11260 = cljs.core.async.close_BANG_.call(null,out);var state_11271__$1 = state_11271;var statearr_11290_11314 = state_11271__$1;(statearr_11290_11314[2] = inst_11260);
(statearr_11290_11314[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 14))
{var inst_11257 = (state_11271[12]);var inst_11262 = cljs.core.apply.call(null,f,inst_11257);var state_11271__$1 = state_11271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11271__$1,16,out,inst_11262);
} else
{if((state_val_11272 === 15))
{var inst_11267 = (state_11271[2]);var state_11271__$1 = state_11271;var statearr_11291_11315 = state_11271__$1;(statearr_11291_11315[2] = inst_11267);
(statearr_11291_11315[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 16))
{var inst_11264 = (state_11271[2]);var state_11271__$1 = (function (){var statearr_11292 = state_11271;(statearr_11292[13] = inst_11264);
return statearr_11292;
})();var statearr_11293_11316 = state_11271__$1;(statearr_11293_11316[2] = null);
(statearr_11293_11316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_11297 = (new Array(14));(statearr_11297[0] = state_machine__6556__auto__);
(statearr_11297[1] = 1);
return statearr_11297;
});
var state_machine__6556__auto____1 = (function (state_11271){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_11271);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e11298){if((e11298 instanceof Object))
{var ex__6559__auto__ = e11298;var statearr_11299_11317 = state_11271;(statearr_11299_11317[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11318 = state_11271;
state_11271 = G__11318;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_11271){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_11271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_11300 = f__6626__auto__.call(null);(statearr_11300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___11301);
return statearr_11300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6625__auto___11426 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_11402){var state_val_11403 = (state_11402[1]);if((state_val_11403 === 1))
{var inst_11373 = cljs.core.vec.call(null,chs);var inst_11374 = inst_11373;var state_11402__$1 = (function (){var statearr_11404 = state_11402;(statearr_11404[7] = inst_11374);
return statearr_11404;
})();var statearr_11405_11427 = state_11402__$1;(statearr_11405_11427[2] = null);
(statearr_11405_11427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 2))
{var inst_11374 = (state_11402[7]);var inst_11376 = cljs.core.count.call(null,inst_11374);var inst_11377 = (inst_11376 > 0);var state_11402__$1 = state_11402;if(cljs.core.truth_(inst_11377))
{var statearr_11406_11428 = state_11402__$1;(statearr_11406_11428[1] = 4);
} else
{var statearr_11407_11429 = state_11402__$1;(statearr_11407_11429[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 3))
{var inst_11400 = (state_11402[2]);var state_11402__$1 = state_11402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11402__$1,inst_11400);
} else
{if((state_val_11403 === 4))
{var inst_11374 = (state_11402[7]);var state_11402__$1 = state_11402;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11402__$1,7,inst_11374);
} else
{if((state_val_11403 === 5))
{var inst_11396 = cljs.core.async.close_BANG_.call(null,out);var state_11402__$1 = state_11402;var statearr_11408_11430 = state_11402__$1;(statearr_11408_11430[2] = inst_11396);
(statearr_11408_11430[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 6))
{var inst_11398 = (state_11402[2]);var state_11402__$1 = state_11402;var statearr_11409_11431 = state_11402__$1;(statearr_11409_11431[2] = inst_11398);
(statearr_11409_11431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 7))
{var inst_11382 = (state_11402[8]);var inst_11381 = (state_11402[9]);var inst_11381__$1 = (state_11402[2]);var inst_11382__$1 = cljs.core.nth.call(null,inst_11381__$1,0,null);var inst_11383 = cljs.core.nth.call(null,inst_11381__$1,1,null);var inst_11384 = (inst_11382__$1 == null);var state_11402__$1 = (function (){var statearr_11410 = state_11402;(statearr_11410[8] = inst_11382__$1);
(statearr_11410[10] = inst_11383);
(statearr_11410[9] = inst_11381__$1);
return statearr_11410;
})();if(cljs.core.truth_(inst_11384))
{var statearr_11411_11432 = state_11402__$1;(statearr_11411_11432[1] = 8);
} else
{var statearr_11412_11433 = state_11402__$1;(statearr_11412_11433[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 8))
{var inst_11374 = (state_11402[7]);var inst_11382 = (state_11402[8]);var inst_11383 = (state_11402[10]);var inst_11381 = (state_11402[9]);var inst_11386 = (function (){var c = inst_11383;var v = inst_11382;var vec__11379 = inst_11381;var cs = inst_11374;return ((function (c,v,vec__11379,cs,inst_11374,inst_11382,inst_11383,inst_11381,state_val_11403){
return (function (p1__11319_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11319_SHARP_);
});
;})(c,v,vec__11379,cs,inst_11374,inst_11382,inst_11383,inst_11381,state_val_11403))
})();var inst_11387 = cljs.core.filterv.call(null,inst_11386,inst_11374);var inst_11374__$1 = inst_11387;var state_11402__$1 = (function (){var statearr_11413 = state_11402;(statearr_11413[7] = inst_11374__$1);
return statearr_11413;
})();var statearr_11414_11434 = state_11402__$1;(statearr_11414_11434[2] = null);
(statearr_11414_11434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 9))
{var inst_11382 = (state_11402[8]);var state_11402__$1 = state_11402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11402__$1,11,out,inst_11382);
} else
{if((state_val_11403 === 10))
{var inst_11394 = (state_11402[2]);var state_11402__$1 = state_11402;var statearr_11416_11435 = state_11402__$1;(statearr_11416_11435[2] = inst_11394);
(statearr_11416_11435[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 11))
{var inst_11374 = (state_11402[7]);var inst_11391 = (state_11402[2]);var tmp11415 = inst_11374;var inst_11374__$1 = tmp11415;var state_11402__$1 = (function (){var statearr_11417 = state_11402;(statearr_11417[7] = inst_11374__$1);
(statearr_11417[11] = inst_11391);
return statearr_11417;
})();var statearr_11418_11436 = state_11402__$1;(statearr_11418_11436[2] = null);
(statearr_11418_11436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_11422 = (new Array(12));(statearr_11422[0] = state_machine__6556__auto__);
(statearr_11422[1] = 1);
return statearr_11422;
});
var state_machine__6556__auto____1 = (function (state_11402){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_11402);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e11423){if((e11423 instanceof Object))
{var ex__6559__auto__ = e11423;var statearr_11424_11437 = state_11402;(statearr_11424_11437[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11438 = state_11402;
state_11402 = G__11438;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_11402){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_11402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_11425 = f__6626__auto__.call(null);(statearr_11425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___11426);
return statearr_11425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6625__auto___11531 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_11508){var state_val_11509 = (state_11508[1]);if((state_val_11509 === 1))
{var inst_11485 = 0;var state_11508__$1 = (function (){var statearr_11510 = state_11508;(statearr_11510[7] = inst_11485);
return statearr_11510;
})();var statearr_11511_11532 = state_11508__$1;(statearr_11511_11532[2] = null);
(statearr_11511_11532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11509 === 2))
{var inst_11485 = (state_11508[7]);var inst_11487 = (inst_11485 < n);var state_11508__$1 = state_11508;if(cljs.core.truth_(inst_11487))
{var statearr_11512_11533 = state_11508__$1;(statearr_11512_11533[1] = 4);
} else
{var statearr_11513_11534 = state_11508__$1;(statearr_11513_11534[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11509 === 3))
{var inst_11505 = (state_11508[2]);var inst_11506 = cljs.core.async.close_BANG_.call(null,out);var state_11508__$1 = (function (){var statearr_11514 = state_11508;(statearr_11514[8] = inst_11505);
return statearr_11514;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11508__$1,inst_11506);
} else
{if((state_val_11509 === 4))
{var state_11508__$1 = state_11508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11508__$1,7,ch);
} else
{if((state_val_11509 === 5))
{var state_11508__$1 = state_11508;var statearr_11515_11535 = state_11508__$1;(statearr_11515_11535[2] = null);
(statearr_11515_11535[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11509 === 6))
{var inst_11503 = (state_11508[2]);var state_11508__$1 = state_11508;var statearr_11516_11536 = state_11508__$1;(statearr_11516_11536[2] = inst_11503);
(statearr_11516_11536[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11509 === 7))
{var inst_11490 = (state_11508[9]);var inst_11490__$1 = (state_11508[2]);var inst_11491 = (inst_11490__$1 == null);var inst_11492 = cljs.core.not.call(null,inst_11491);var state_11508__$1 = (function (){var statearr_11517 = state_11508;(statearr_11517[9] = inst_11490__$1);
return statearr_11517;
})();if(inst_11492)
{var statearr_11518_11537 = state_11508__$1;(statearr_11518_11537[1] = 8);
} else
{var statearr_11519_11538 = state_11508__$1;(statearr_11519_11538[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11509 === 8))
{var inst_11490 = (state_11508[9]);var state_11508__$1 = state_11508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11508__$1,11,out,inst_11490);
} else
{if((state_val_11509 === 9))
{var state_11508__$1 = state_11508;var statearr_11520_11539 = state_11508__$1;(statearr_11520_11539[2] = null);
(statearr_11520_11539[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11509 === 10))
{var inst_11500 = (state_11508[2]);var state_11508__$1 = state_11508;var statearr_11521_11540 = state_11508__$1;(statearr_11521_11540[2] = inst_11500);
(statearr_11521_11540[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11509 === 11))
{var inst_11485 = (state_11508[7]);var inst_11495 = (state_11508[2]);var inst_11496 = (inst_11485 + 1);var inst_11485__$1 = inst_11496;var state_11508__$1 = (function (){var statearr_11522 = state_11508;(statearr_11522[10] = inst_11495);
(statearr_11522[7] = inst_11485__$1);
return statearr_11522;
})();var statearr_11523_11541 = state_11508__$1;(statearr_11523_11541[2] = null);
(statearr_11523_11541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_11527 = (new Array(11));(statearr_11527[0] = state_machine__6556__auto__);
(statearr_11527[1] = 1);
return statearr_11527;
});
var state_machine__6556__auto____1 = (function (state_11508){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_11508);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e11528){if((e11528 instanceof Object))
{var ex__6559__auto__ = e11528;var statearr_11529_11542 = state_11508;(statearr_11529_11542[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11543 = state_11508;
state_11508 = G__11543;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_11508){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_11508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_11530 = f__6626__auto__.call(null);(statearr_11530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___11531);
return statearr_11530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6625__auto___11640 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_11615){var state_val_11616 = (state_11615[1]);if((state_val_11616 === 1))
{var inst_11592 = null;var state_11615__$1 = (function (){var statearr_11617 = state_11615;(statearr_11617[7] = inst_11592);
return statearr_11617;
})();var statearr_11618_11641 = state_11615__$1;(statearr_11618_11641[2] = null);
(statearr_11618_11641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 2))
{var state_11615__$1 = state_11615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11615__$1,4,ch);
} else
{if((state_val_11616 === 3))
{var inst_11612 = (state_11615[2]);var inst_11613 = cljs.core.async.close_BANG_.call(null,out);var state_11615__$1 = (function (){var statearr_11619 = state_11615;(statearr_11619[8] = inst_11612);
return statearr_11619;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11615__$1,inst_11613);
} else
{if((state_val_11616 === 4))
{var inst_11595 = (state_11615[9]);var inst_11595__$1 = (state_11615[2]);var inst_11596 = (inst_11595__$1 == null);var inst_11597 = cljs.core.not.call(null,inst_11596);var state_11615__$1 = (function (){var statearr_11620 = state_11615;(statearr_11620[9] = inst_11595__$1);
return statearr_11620;
})();if(inst_11597)
{var statearr_11621_11642 = state_11615__$1;(statearr_11621_11642[1] = 5);
} else
{var statearr_11622_11643 = state_11615__$1;(statearr_11622_11643[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 5))
{var inst_11592 = (state_11615[7]);var inst_11595 = (state_11615[9]);var inst_11599 = cljs.core._EQ_.call(null,inst_11595,inst_11592);var state_11615__$1 = state_11615;if(inst_11599)
{var statearr_11623_11644 = state_11615__$1;(statearr_11623_11644[1] = 8);
} else
{var statearr_11624_11645 = state_11615__$1;(statearr_11624_11645[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 6))
{var state_11615__$1 = state_11615;var statearr_11626_11646 = state_11615__$1;(statearr_11626_11646[2] = null);
(statearr_11626_11646[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 7))
{var inst_11610 = (state_11615[2]);var state_11615__$1 = state_11615;var statearr_11627_11647 = state_11615__$1;(statearr_11627_11647[2] = inst_11610);
(statearr_11627_11647[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 8))
{var inst_11592 = (state_11615[7]);var tmp11625 = inst_11592;var inst_11592__$1 = tmp11625;var state_11615__$1 = (function (){var statearr_11628 = state_11615;(statearr_11628[7] = inst_11592__$1);
return statearr_11628;
})();var statearr_11629_11648 = state_11615__$1;(statearr_11629_11648[2] = null);
(statearr_11629_11648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 9))
{var inst_11595 = (state_11615[9]);var state_11615__$1 = state_11615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11615__$1,11,out,inst_11595);
} else
{if((state_val_11616 === 10))
{var inst_11607 = (state_11615[2]);var state_11615__$1 = state_11615;var statearr_11630_11649 = state_11615__$1;(statearr_11630_11649[2] = inst_11607);
(statearr_11630_11649[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 11))
{var inst_11595 = (state_11615[9]);var inst_11604 = (state_11615[2]);var inst_11592 = inst_11595;var state_11615__$1 = (function (){var statearr_11631 = state_11615;(statearr_11631[10] = inst_11604);
(statearr_11631[7] = inst_11592);
return statearr_11631;
})();var statearr_11632_11650 = state_11615__$1;(statearr_11632_11650[2] = null);
(statearr_11632_11650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_11636 = (new Array(11));(statearr_11636[0] = state_machine__6556__auto__);
(statearr_11636[1] = 1);
return statearr_11636;
});
var state_machine__6556__auto____1 = (function (state_11615){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_11615);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e11637){if((e11637 instanceof Object))
{var ex__6559__auto__ = e11637;var statearr_11638_11651 = state_11615;(statearr_11638_11651[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11615);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11652 = state_11615;
state_11615 = G__11652;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_11615){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_11615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_11639 = f__6626__auto__.call(null);(statearr_11639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___11640);
return statearr_11639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6625__auto___11787 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_11757){var state_val_11758 = (state_11757[1]);if((state_val_11758 === 1))
{var inst_11720 = (new Array(n));var inst_11721 = inst_11720;var inst_11722 = 0;var state_11757__$1 = (function (){var statearr_11759 = state_11757;(statearr_11759[7] = inst_11721);
(statearr_11759[8] = inst_11722);
return statearr_11759;
})();var statearr_11760_11788 = state_11757__$1;(statearr_11760_11788[2] = null);
(statearr_11760_11788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 2))
{var state_11757__$1 = state_11757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11757__$1,4,ch);
} else
{if((state_val_11758 === 3))
{var inst_11755 = (state_11757[2]);var state_11757__$1 = state_11757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11757__$1,inst_11755);
} else
{if((state_val_11758 === 4))
{var inst_11725 = (state_11757[9]);var inst_11725__$1 = (state_11757[2]);var inst_11726 = (inst_11725__$1 == null);var inst_11727 = cljs.core.not.call(null,inst_11726);var state_11757__$1 = (function (){var statearr_11761 = state_11757;(statearr_11761[9] = inst_11725__$1);
return statearr_11761;
})();if(inst_11727)
{var statearr_11762_11789 = state_11757__$1;(statearr_11762_11789[1] = 5);
} else
{var statearr_11763_11790 = state_11757__$1;(statearr_11763_11790[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 5))
{var inst_11730 = (state_11757[10]);var inst_11721 = (state_11757[7]);var inst_11722 = (state_11757[8]);var inst_11725 = (state_11757[9]);var inst_11729 = (inst_11721[inst_11722] = inst_11725);var inst_11730__$1 = (inst_11722 + 1);var inst_11731 = (inst_11730__$1 < n);var state_11757__$1 = (function (){var statearr_11764 = state_11757;(statearr_11764[10] = inst_11730__$1);
(statearr_11764[11] = inst_11729);
return statearr_11764;
})();if(cljs.core.truth_(inst_11731))
{var statearr_11765_11791 = state_11757__$1;(statearr_11765_11791[1] = 8);
} else
{var statearr_11766_11792 = state_11757__$1;(statearr_11766_11792[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 6))
{var inst_11722 = (state_11757[8]);var inst_11743 = (inst_11722 > 0);var state_11757__$1 = state_11757;if(cljs.core.truth_(inst_11743))
{var statearr_11768_11793 = state_11757__$1;(statearr_11768_11793[1] = 12);
} else
{var statearr_11769_11794 = state_11757__$1;(statearr_11769_11794[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 7))
{var inst_11753 = (state_11757[2]);var state_11757__$1 = state_11757;var statearr_11770_11795 = state_11757__$1;(statearr_11770_11795[2] = inst_11753);
(statearr_11770_11795[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 8))
{var inst_11730 = (state_11757[10]);var inst_11721 = (state_11757[7]);var tmp11767 = inst_11721;var inst_11721__$1 = tmp11767;var inst_11722 = inst_11730;var state_11757__$1 = (function (){var statearr_11771 = state_11757;(statearr_11771[7] = inst_11721__$1);
(statearr_11771[8] = inst_11722);
return statearr_11771;
})();var statearr_11772_11796 = state_11757__$1;(statearr_11772_11796[2] = null);
(statearr_11772_11796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 9))
{var inst_11721 = (state_11757[7]);var inst_11735 = cljs.core.vec.call(null,inst_11721);var state_11757__$1 = state_11757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11757__$1,11,out,inst_11735);
} else
{if((state_val_11758 === 10))
{var inst_11741 = (state_11757[2]);var state_11757__$1 = state_11757;var statearr_11773_11797 = state_11757__$1;(statearr_11773_11797[2] = inst_11741);
(statearr_11773_11797[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 11))
{var inst_11737 = (state_11757[2]);var inst_11738 = (new Array(n));var inst_11721 = inst_11738;var inst_11722 = 0;var state_11757__$1 = (function (){var statearr_11774 = state_11757;(statearr_11774[7] = inst_11721);
(statearr_11774[8] = inst_11722);
(statearr_11774[12] = inst_11737);
return statearr_11774;
})();var statearr_11775_11798 = state_11757__$1;(statearr_11775_11798[2] = null);
(statearr_11775_11798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 12))
{var inst_11721 = (state_11757[7]);var inst_11745 = cljs.core.vec.call(null,inst_11721);var state_11757__$1 = state_11757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11757__$1,15,out,inst_11745);
} else
{if((state_val_11758 === 13))
{var state_11757__$1 = state_11757;var statearr_11776_11799 = state_11757__$1;(statearr_11776_11799[2] = null);
(statearr_11776_11799[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 14))
{var inst_11750 = (state_11757[2]);var inst_11751 = cljs.core.async.close_BANG_.call(null,out);var state_11757__$1 = (function (){var statearr_11777 = state_11757;(statearr_11777[13] = inst_11750);
return statearr_11777;
})();var statearr_11778_11800 = state_11757__$1;(statearr_11778_11800[2] = inst_11751);
(statearr_11778_11800[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11758 === 15))
{var inst_11747 = (state_11757[2]);var state_11757__$1 = state_11757;var statearr_11779_11801 = state_11757__$1;(statearr_11779_11801[2] = inst_11747);
(statearr_11779_11801[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_11783 = (new Array(14));(statearr_11783[0] = state_machine__6556__auto__);
(statearr_11783[1] = 1);
return statearr_11783;
});
var state_machine__6556__auto____1 = (function (state_11757){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_11757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e11784){if((e11784 instanceof Object))
{var ex__6559__auto__ = e11784;var statearr_11785_11802 = state_11757;(statearr_11785_11802[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11803 = state_11757;
state_11757 = G__11803;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_11757){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_11757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_11786 = f__6626__auto__.call(null);(statearr_11786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___11787);
return statearr_11786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6625__auto___11946 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_11916){var state_val_11917 = (state_11916[1]);if((state_val_11917 === 1))
{var inst_11875 = (new Array(0));var inst_11876 = inst_11875;var inst_11877 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11916__$1 = (function (){var statearr_11918 = state_11916;(statearr_11918[7] = inst_11876);
(statearr_11918[8] = inst_11877);
return statearr_11918;
})();var statearr_11919_11947 = state_11916__$1;(statearr_11919_11947[2] = null);
(statearr_11919_11947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 2))
{var state_11916__$1 = state_11916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11916__$1,4,ch);
} else
{if((state_val_11917 === 3))
{var inst_11914 = (state_11916[2]);var state_11916__$1 = state_11916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11916__$1,inst_11914);
} else
{if((state_val_11917 === 4))
{var inst_11880 = (state_11916[9]);var inst_11880__$1 = (state_11916[2]);var inst_11881 = (inst_11880__$1 == null);var inst_11882 = cljs.core.not.call(null,inst_11881);var state_11916__$1 = (function (){var statearr_11920 = state_11916;(statearr_11920[9] = inst_11880__$1);
return statearr_11920;
})();if(inst_11882)
{var statearr_11921_11948 = state_11916__$1;(statearr_11921_11948[1] = 5);
} else
{var statearr_11922_11949 = state_11916__$1;(statearr_11922_11949[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 5))
{var inst_11884 = (state_11916[10]);var inst_11877 = (state_11916[8]);var inst_11880 = (state_11916[9]);var inst_11884__$1 = f.call(null,inst_11880);var inst_11885 = cljs.core._EQ_.call(null,inst_11884__$1,inst_11877);var inst_11886 = cljs.core.keyword_identical_QMARK_.call(null,inst_11877,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11887 = (inst_11885) || (inst_11886);var state_11916__$1 = (function (){var statearr_11923 = state_11916;(statearr_11923[10] = inst_11884__$1);
return statearr_11923;
})();if(cljs.core.truth_(inst_11887))
{var statearr_11924_11950 = state_11916__$1;(statearr_11924_11950[1] = 8);
} else
{var statearr_11925_11951 = state_11916__$1;(statearr_11925_11951[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 6))
{var inst_11876 = (state_11916[7]);var inst_11901 = inst_11876.length;var inst_11902 = (inst_11901 > 0);var state_11916__$1 = state_11916;if(cljs.core.truth_(inst_11902))
{var statearr_11927_11952 = state_11916__$1;(statearr_11927_11952[1] = 12);
} else
{var statearr_11928_11953 = state_11916__$1;(statearr_11928_11953[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 7))
{var inst_11912 = (state_11916[2]);var state_11916__$1 = state_11916;var statearr_11929_11954 = state_11916__$1;(statearr_11929_11954[2] = inst_11912);
(statearr_11929_11954[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 8))
{var inst_11884 = (state_11916[10]);var inst_11876 = (state_11916[7]);var inst_11880 = (state_11916[9]);var inst_11889 = inst_11876.push(inst_11880);var tmp11926 = inst_11876;var inst_11876__$1 = tmp11926;var inst_11877 = inst_11884;var state_11916__$1 = (function (){var statearr_11930 = state_11916;(statearr_11930[11] = inst_11889);
(statearr_11930[7] = inst_11876__$1);
(statearr_11930[8] = inst_11877);
return statearr_11930;
})();var statearr_11931_11955 = state_11916__$1;(statearr_11931_11955[2] = null);
(statearr_11931_11955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 9))
{var inst_11876 = (state_11916[7]);var inst_11892 = cljs.core.vec.call(null,inst_11876);var state_11916__$1 = state_11916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11916__$1,11,out,inst_11892);
} else
{if((state_val_11917 === 10))
{var inst_11899 = (state_11916[2]);var state_11916__$1 = state_11916;var statearr_11932_11956 = state_11916__$1;(statearr_11932_11956[2] = inst_11899);
(statearr_11932_11956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 11))
{var inst_11884 = (state_11916[10]);var inst_11880 = (state_11916[9]);var inst_11894 = (state_11916[2]);var inst_11895 = (new Array(0));var inst_11896 = inst_11895.push(inst_11880);var inst_11876 = inst_11895;var inst_11877 = inst_11884;var state_11916__$1 = (function (){var statearr_11933 = state_11916;(statearr_11933[12] = inst_11896);
(statearr_11933[13] = inst_11894);
(statearr_11933[7] = inst_11876);
(statearr_11933[8] = inst_11877);
return statearr_11933;
})();var statearr_11934_11957 = state_11916__$1;(statearr_11934_11957[2] = null);
(statearr_11934_11957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 12))
{var inst_11876 = (state_11916[7]);var inst_11904 = cljs.core.vec.call(null,inst_11876);var state_11916__$1 = state_11916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11916__$1,15,out,inst_11904);
} else
{if((state_val_11917 === 13))
{var state_11916__$1 = state_11916;var statearr_11935_11958 = state_11916__$1;(statearr_11935_11958[2] = null);
(statearr_11935_11958[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 14))
{var inst_11909 = (state_11916[2]);var inst_11910 = cljs.core.async.close_BANG_.call(null,out);var state_11916__$1 = (function (){var statearr_11936 = state_11916;(statearr_11936[14] = inst_11909);
return statearr_11936;
})();var statearr_11937_11959 = state_11916__$1;(statearr_11937_11959[2] = inst_11910);
(statearr_11937_11959[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11917 === 15))
{var inst_11906 = (state_11916[2]);var state_11916__$1 = state_11916;var statearr_11938_11960 = state_11916__$1;(statearr_11938_11960[2] = inst_11906);
(statearr_11938_11960[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_11942 = (new Array(15));(statearr_11942[0] = state_machine__6556__auto__);
(statearr_11942[1] = 1);
return statearr_11942;
});
var state_machine__6556__auto____1 = (function (state_11916){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_11916);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e11943){if((e11943 instanceof Object))
{var ex__6559__auto__ = e11943;var statearr_11944_11961 = state_11916;(statearr_11944_11961[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11916);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11962 = state_11916;
state_11916 = G__11962;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_11916){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_11916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_11945 = f__6626__auto__.call(null);(statearr_11945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___11946);
return statearr_11945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
