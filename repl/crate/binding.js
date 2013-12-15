// Compiled by ClojureScript 0.0-2080
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__12217 = cljs.core.seq.call(null,self__.watches);var chunk__12218 = null;var count__12219 = 0;var i__12220 = 0;while(true){
if((i__12220 < count__12219))
{var vec__12221 = cljs.core._nth.call(null,chunk__12218,i__12220);var key__$1 = cljs.core.nth.call(null,vec__12221,0,null);var f = cljs.core.nth.call(null,vec__12221,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__12223 = seq__12217;
var G__12224 = chunk__12218;
var G__12225 = count__12219;
var G__12226 = (i__12220 + 1);
seq__12217 = G__12223;
chunk__12218 = G__12224;
count__12219 = G__12225;
i__12220 = G__12226;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12217);if(temp__4092__auto__)
{var seq__12217__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12217__$1))
{var c__4106__auto__ = cljs.core.chunk_first.call(null,seq__12217__$1);{
var G__12227 = cljs.core.chunk_rest.call(null,seq__12217__$1);
var G__12228 = c__4106__auto__;
var G__12229 = cljs.core.count.call(null,c__4106__auto__);
var G__12230 = 0;
seq__12217 = G__12227;
chunk__12218 = G__12228;
count__12219 = G__12229;
i__12220 = G__12230;
continue;
}
} else
{var vec__12222 = cljs.core.first.call(null,seq__12217__$1);var key__$1 = cljs.core.nth.call(null,vec__12222,0,null);var f = cljs.core.nth.call(null,vec__12222,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__12231 = cljs.core.next.call(null,seq__12217__$1);
var G__12232 = null;
var G__12233 = 0;
var G__12234 = 0;
seq__12217 = G__12231;
chunk__12218 = G__12232;
count__12219 = G__12233;
i__12220 = G__12234;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__12236 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__12236,0,null);var path__$2 = cljs.core.nth.call(null,vec__12236,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__12237__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__12237 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__12237__delegate.call(this,sa,f,x,y,z,more);};
G__12237.cljs$lang$maxFixedArity = 5;
G__12237.cljs$lang$applyTo = (function (arglist__12238){
var sa = cljs.core.first(arglist__12238);
arglist__12238 = cljs.core.next(arglist__12238);
var f = cljs.core.first(arglist__12238);
arglist__12238 = cljs.core.next(arglist__12238);
var x = cljs.core.first(arglist__12238);
arglist__12238 = cljs.core.next(arglist__12238);
var y = cljs.core.first(arglist__12238);
arglist__12238 = cljs.core.next(arglist__12238);
var z = cljs.core.first(arglist__12238);
var more = cljs.core.rest(arglist__12238);
return G__12237__delegate(sa,f,x,y,z,more);
});
G__12237.cljs$core$IFn$_invoke$arity$variadic = G__12237__delegate;
return G__12237;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj12240 = {};return obj12240;
})();
crate.binding._compute = (function _compute(this$){if((function (){var and__3370__auto__ = this$;if(and__3370__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__3370__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__3985__auto__ = (((this$ == null))?null:this$);return (function (){var or__3382__auto__ = (crate.binding._compute[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (crate.binding._compute["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__12241 = cljs.core.seq.call(null,self__.watches);var chunk__12242 = null;var count__12243 = 0;var i__12244 = 0;while(true){
if((i__12244 < count__12243))
{var vec__12245 = cljs.core._nth.call(null,chunk__12242,i__12244);var key__$1 = cljs.core.nth.call(null,vec__12245,0,null);var f = cljs.core.nth.call(null,vec__12245,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__12247 = seq__12241;
var G__12248 = chunk__12242;
var G__12249 = count__12243;
var G__12250 = (i__12244 + 1);
seq__12241 = G__12247;
chunk__12242 = G__12248;
count__12243 = G__12249;
i__12244 = G__12250;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12241);if(temp__4092__auto__)
{var seq__12241__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12241__$1))
{var c__4106__auto__ = cljs.core.chunk_first.call(null,seq__12241__$1);{
var G__12251 = cljs.core.chunk_rest.call(null,seq__12241__$1);
var G__12252 = c__4106__auto__;
var G__12253 = cljs.core.count.call(null,c__4106__auto__);
var G__12254 = 0;
seq__12241 = G__12251;
chunk__12242 = G__12252;
count__12243 = G__12253;
i__12244 = G__12254;
continue;
}
} else
{var vec__12246 = cljs.core.first.call(null,seq__12241__$1);var key__$1 = cljs.core.nth.call(null,vec__12246,0,null);var f = cljs.core.nth.call(null,vec__12246,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__12255 = cljs.core.next.call(null,seq__12241__$1);
var G__12256 = null;
var G__12257 = 0;
var G__12258 = 0;
seq__12241 = G__12255;
chunk__12242 = G__12256;
count__12243 = G__12257;
i__12244 = G__12258;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__12263_12267 = cljs.core.seq.call(null,atms);var chunk__12264_12268 = null;var count__12265_12269 = 0;var i__12266_12270 = 0;while(true){
if((i__12266_12270 < count__12265_12269))
{var atm_12271 = cljs.core._nth.call(null,chunk__12264_12268,i__12266_12270);cljs.core.add_watch.call(null,atm_12271,k,((function (seq__12263_12267,chunk__12264_12268,count__12265_12269,i__12266_12270,atm_12271){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__12263_12267,chunk__12264_12268,count__12265_12269,i__12266_12270,atm_12271))
);
{
var G__12272 = seq__12263_12267;
var G__12273 = chunk__12264_12268;
var G__12274 = count__12265_12269;
var G__12275 = (i__12266_12270 + 1);
seq__12263_12267 = G__12272;
chunk__12264_12268 = G__12273;
count__12265_12269 = G__12274;
i__12266_12270 = G__12275;
continue;
}
} else
{var temp__4092__auto___12276 = cljs.core.seq.call(null,seq__12263_12267);if(temp__4092__auto___12276)
{var seq__12263_12277__$1 = temp__4092__auto___12276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12263_12277__$1))
{var c__4106__auto___12278 = cljs.core.chunk_first.call(null,seq__12263_12277__$1);{
var G__12279 = cljs.core.chunk_rest.call(null,seq__12263_12277__$1);
var G__12280 = c__4106__auto___12278;
var G__12281 = cljs.core.count.call(null,c__4106__auto___12278);
var G__12282 = 0;
seq__12263_12267 = G__12279;
chunk__12264_12268 = G__12280;
count__12265_12269 = G__12281;
i__12266_12270 = G__12282;
continue;
}
} else
{var atm_12283 = cljs.core.first.call(null,seq__12263_12277__$1);cljs.core.add_watch.call(null,atm_12283,k,((function (seq__12263_12267,chunk__12264_12268,count__12265_12269,i__12266_12270,atm_12283,seq__12263_12277__$1,temp__4092__auto___12276){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__12263_12267,chunk__12264_12268,count__12265_12269,i__12266_12270,atm_12283,seq__12263_12277__$1,temp__4092__auto___12276))
);
{
var G__12284 = cljs.core.next.call(null,seq__12263_12277__$1);
var G__12285 = null;
var G__12286 = 0;
var G__12287 = 0;
seq__12263_12267 = G__12284;
chunk__12264_12268 = G__12285;
count__12265_12269 = G__12286;
i__12266_12270 = G__12287;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter.call(null,(function (p1__12288_SHARP_){return (p1__12288_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj12290 = {};return obj12290;
})();
crate.binding.bindable = (function (){var obj12292 = {};return obj12292;
})();
crate.binding._value = (function _value(this$){if((function (){var and__3370__auto__ = this$;if(and__3370__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3370__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__3985__auto__ = (((this$ == null))?null:this$);return (function (){var or__3382__auto__ = (crate.binding._value[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (crate.binding._value["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__3370__auto__ = this$;if(and__3370__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3370__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__3985__auto__ = (((this$ == null))?null:this$);return (function (){var or__3382__auto__ = (crate.binding._on_change[goog.typeOf(x__3985__auto__)]);if(or__3382__auto__)
{return or__3382__auto__;
} else
{var or__3382__auto____$1 = (crate.binding._on_change["_"]);if(or__3382__auto____$1)
{return or__3382__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){return func.call(null,crate.binding._value.call(null,this$__$1));
}));
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__12293 = cljs.core.seq.call(null,self__.watches);var chunk__12294 = null;var count__12295 = 0;var i__12296 = 0;while(true){
if((i__12296 < count__12295))
{var vec__12297 = cljs.core._nth.call(null,chunk__12294,i__12296);var key = cljs.core.nth.call(null,vec__12297,0,null);var f = cljs.core.nth.call(null,vec__12297,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12299 = seq__12293;
var G__12300 = chunk__12294;
var G__12301 = count__12295;
var G__12302 = (i__12296 + 1);
seq__12293 = G__12299;
chunk__12294 = G__12300;
count__12295 = G__12301;
i__12296 = G__12302;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12293);if(temp__4092__auto__)
{var seq__12293__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12293__$1))
{var c__4106__auto__ = cljs.core.chunk_first.call(null,seq__12293__$1);{
var G__12303 = cljs.core.chunk_rest.call(null,seq__12293__$1);
var G__12304 = c__4106__auto__;
var G__12305 = cljs.core.count.call(null,c__4106__auto__);
var G__12306 = 0;
seq__12293 = G__12303;
chunk__12294 = G__12304;
count__12295 = G__12305;
i__12296 = G__12306;
continue;
}
} else
{var vec__12298 = cljs.core.first.call(null,seq__12293__$1);var key = cljs.core.nth.call(null,vec__12298,0,null);var f = cljs.core.nth.call(null,vec__12298,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__12307 = cljs.core.next.call(null,seq__12293__$1);
var G__12308 = null;
var G__12309 = 0;
var G__12310 = 0;
seq__12293 = G__12307;
chunk__12294 = G__12308;
count__12295 = G__12309;
i__12296 = G__12310;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__3926__auto__,writer__3927__auto__,opt__3928__auto__){return cljs.core._write.call(null,writer__3927__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__12311){var vec__12312 = p__12311;var event = cljs.core.nth.call(null,vec__12312,0,null);var el = cljs.core.nth.call(null,vec__12312,1,null);var v = cljs.core.nth.call(null,vec__12312,2,null);return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__3382__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__12313){
var bc = cljs.core.first(arglist__12313);
var segs = cljs.core.rest(arglist__12313);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__12322_12330 = cljs.core.seq.call(null,added);var chunk__12323_12331 = null;var count__12324_12332 = 0;var i__12325_12333 = 0;while(true){
if((i__12325_12333 < count__12324_12332))
{var a_12334 = cljs.core._nth.call(null,chunk__12323_12331,i__12325_12333);crate.binding.bc_add.call(null,bc,a_12334,a_12334);
{
var G__12335 = seq__12322_12330;
var G__12336 = chunk__12323_12331;
var G__12337 = count__12324_12332;
var G__12338 = (i__12325_12333 + 1);
seq__12322_12330 = G__12335;
chunk__12323_12331 = G__12336;
count__12324_12332 = G__12337;
i__12325_12333 = G__12338;
continue;
}
} else
{var temp__4092__auto___12339 = cljs.core.seq.call(null,seq__12322_12330);if(temp__4092__auto___12339)
{var seq__12322_12340__$1 = temp__4092__auto___12339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12322_12340__$1))
{var c__4106__auto___12341 = cljs.core.chunk_first.call(null,seq__12322_12340__$1);{
var G__12342 = cljs.core.chunk_rest.call(null,seq__12322_12340__$1);
var G__12343 = c__4106__auto___12341;
var G__12344 = cljs.core.count.call(null,c__4106__auto___12341);
var G__12345 = 0;
seq__12322_12330 = G__12342;
chunk__12323_12331 = G__12343;
count__12324_12332 = G__12344;
i__12325_12333 = G__12345;
continue;
}
} else
{var a_12346 = cljs.core.first.call(null,seq__12322_12340__$1);crate.binding.bc_add.call(null,bc,a_12346,a_12346);
{
var G__12347 = cljs.core.next.call(null,seq__12322_12340__$1);
var G__12348 = null;
var G__12349 = 0;
var G__12350 = 0;
seq__12322_12330 = G__12347;
chunk__12323_12331 = G__12348;
count__12324_12332 = G__12349;
i__12325_12333 = G__12350;
continue;
}
}
} else
{}
}
break;
}
var seq__12326 = cljs.core.seq.call(null,removed);var chunk__12327 = null;var count__12328 = 0;var i__12329 = 0;while(true){
if((i__12329 < count__12328))
{var r = cljs.core._nth.call(null,chunk__12327,i__12329);crate.binding.bc_remove.call(null,bc,r);
{
var G__12351 = seq__12326;
var G__12352 = chunk__12327;
var G__12353 = count__12328;
var G__12354 = (i__12329 + 1);
seq__12326 = G__12351;
chunk__12327 = G__12352;
count__12328 = G__12353;
i__12329 = G__12354;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12326);if(temp__4092__auto__)
{var seq__12326__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12326__$1))
{var c__4106__auto__ = cljs.core.chunk_first.call(null,seq__12326__$1);{
var G__12355 = cljs.core.chunk_rest.call(null,seq__12326__$1);
var G__12356 = c__4106__auto__;
var G__12357 = cljs.core.count.call(null,c__4106__auto__);
var G__12358 = 0;
seq__12326 = G__12355;
chunk__12327 = G__12356;
count__12328 = G__12357;
i__12329 = G__12358;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__12326__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__12359 = cljs.core.next.call(null,seq__12326__$1);
var G__12360 = null;
var G__12361 = 0;
var G__12362 = 0;
seq__12326 = G__12359;
chunk__12327 = G__12360;
count__12328 = G__12361;
i__12329 = G__12362;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__12363){var vec__12366 = p__12363;var path = cljs.core.nth.call(null,vec__12366,0,null);var opts = cljs.core.nth.call(null,vec__12366,1,null);var vec__12367 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__12367,0,null);var opts__$1 = cljs.core.nth.call(null,vec__12367,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__12363 = null;if (arguments.length > 1) {
  p__12363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__12363);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__12368){
var atm = cljs.core.first(arglist__12368);
var p__12363 = cljs.core.rest(arglist__12368);
return bound_coll__delegate(atm,p__12363);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__12369){var vec__12371 = p__12369;var opts = cljs.core.nth.call(null,vec__12371,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__12369 = null;if (arguments.length > 2) {
  p__12369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__12369);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__12372){
var as = cljs.core.first(arglist__12372);
arglist__12372 = cljs.core.next(arglist__12372);
var atm = cljs.core.first(arglist__12372);
var p__12369 = cljs.core.rest(arglist__12372);
return map_bound__delegate(as,atm,p__12369);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__12374 = b;if(G__12374)
{var bit__4008__auto__ = null;if(cljs.core.truth_((function (){var or__3382__auto__ = bit__4008__auto__;if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return G__12374.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__12374.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__12374);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__12374);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__12376 = b;if(G__12376)
{var bit__4008__auto__ = null;if(cljs.core.truth_((function (){var or__3382__auto__ = bit__4008__auto__;if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return G__12376.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__12376.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__12376);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__12376);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__12378 = atm;if(G__12378)
{var bit__4008__auto__ = (G__12378.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__4008__auto__) || (G__12378.cljs$core$IDeref$))
{return true;
} else
{if((!G__12378.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__12378);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__12378);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__12379){var vec__12381 = p__12379;var func = cljs.core.nth.call(null,vec__12381,0,null);var func__$1 = (function (){var or__3382__auto__ = func;if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__12379 = null;if (arguments.length > 1) {
  p__12379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__12379);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__12382){
var atm = cljs.core.first(arglist__12382);
var p__12379 = cljs.core.rest(arglist__12382);
return bound__delegate(atm,p__12379);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
