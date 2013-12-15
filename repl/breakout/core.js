// Compiled by ClojureScript 0.0-2080
goog.provide('breakout.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('crate.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('clojure.browser.repl');
goog.require('crate.core');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('clojure.browser.repl');
goog.require('goog.events');
breakout.core.log_obj = (function log_obj(obj){console.log(cljs.core.clj__GT_js.call(null,obj));
return obj;
});
breakout.core.player_speed = (0.0075 * 500);
breakout.core.ball_speed = (0.005 * 500);
breakout.core.left_key = 37;
breakout.core.right_key = 39;
breakout.core.initial_game = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",4401181662),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),500,new cljs.core.Keyword(null,"height","height",4087841945),500], null),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [225,10], null),new cljs.core.Keyword(null,"width","width",1127031096),50,new cljs.core.Keyword(null,"height","height",4087841945),10,new cljs.core.Keyword(null,"id","id",1013907597),"player1",new cljs.core.Keyword(null,"velocity","velocity",3148165199),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"speed","speed",1123546041),0,new cljs.core.Keyword(null,"bearing","bearing",779578144),0.0], null)], null),new cljs.core.Keyword(null,"ball","ball",1016920433),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [240,250], null),new cljs.core.Keyword(null,"width","width",1127031096),20,new cljs.core.Keyword(null,"height","height",4087841945),20,new cljs.core.Keyword(null,"id","id",1013907597),"ball1",new cljs.core.Keyword(null,"velocity","velocity",3148165199),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"speed","speed",1123546041),breakout.core.ball_speed,new cljs.core.Keyword(null,"bearing","bearing",779578144),(1.5 * Math.PI)], null)], null),new cljs.core.Keyword(null,"ticks-gone","ticks-gone",3439250696),0,new cljs.core.Keyword(null,"keys-down","keys-down",4170753101),cljs.core.PersistentHashSet.EMPTY], null);
breakout.core.capture_kb_events = (function capture_kb_events(element,ev_type){var out = cljs.core.async.chan.call(null);goog.events.listen(element,ev_type,(function (e){if(cljs.core._EQ_.call(null,e.keyCode,breakout.core.left_key))
{return cljs.core.async.put_BANG_.call(null,out,new cljs.core.Keyword(null,"left","left",1017222009));
} else
{if(cljs.core._EQ_.call(null,e.keyCode,breakout.core.right_key))
{return cljs.core.async.put_BANG_.call(null,out,new cljs.core.Keyword(null,"right","right",1122416014));
} else
{return null;
}
}
}));
return out;
});
breakout.core.keydowns = (function keydowns(element){return breakout.core.capture_kb_events.call(null,element,"keydown");
});
breakout.core.keyups = (function keyups(element){return breakout.core.capture_kb_events.call(null,element,"keyup");
});
breakout.core.game_tick_channel = (function (){var out = cljs.core.async.chan.call(null);var c__6625__auto___9181 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_9167){var state_val_9168 = (state_9167[1]);if((state_val_9168 === 5))
{var inst_9155 = (state_9167[7]);var inst_9161 = (state_9167[2]);var inst_9162 = (inst_9155 + 200);var inst_9155__$1 = inst_9162;var state_9167__$1 = (function (){var statearr_9169 = state_9167;(statearr_9169[8] = inst_9161);
(statearr_9169[7] = inst_9155__$1);
return statearr_9169;
})();var statearr_9170_9182 = state_9167__$1;(statearr_9170_9182[2] = null);
(statearr_9170_9182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9168 === 4))
{var inst_9158 = (state_9167[2]);var inst_9159 = cljs.core.async.timeout.call(null,200);var state_9167__$1 = (function (){var statearr_9171 = state_9167;(statearr_9171[9] = inst_9158);
return statearr_9171;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9167__$1,5,inst_9159);
} else
{if((state_val_9168 === 3))
{var inst_9165 = (state_9167[2]);var state_9167__$1 = state_9167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9167__$1,inst_9165);
} else
{if((state_val_9168 === 2))
{var inst_9155 = (state_9167[7]);var state_9167__$1 = state_9167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9167__$1,4,out,inst_9155);
} else
{if((state_val_9168 === 1))
{var inst_9155 = 0;var state_9167__$1 = (function (){var statearr_9172 = state_9167;(statearr_9172[7] = inst_9155);
return statearr_9172;
})();var statearr_9173_9183 = state_9167__$1;(statearr_9173_9183[2] = null);
(statearr_9173_9183[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_9177 = (new Array(10));(statearr_9177[0] = state_machine__6556__auto__);
(statearr_9177[1] = 1);
return statearr_9177;
});
var state_machine__6556__auto____1 = (function (state_9167){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_9167);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e9178){if((e9178 instanceof Object))
{var ex__6559__auto__ = e9178;var statearr_9179_9184 = state_9167;(statearr_9179_9184[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9167);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9185 = state_9167;
state_9167 = G__9185;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_9167){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_9167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_9180 = f__6626__auto__.call(null);(statearr_9180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___9181);
return statearr_9180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return out;
})();
breakout.core.process_keyup = (function process_keyup(p__9186,keyn){var map__9188 = p__9186;var map__9188__$1 = ((cljs.core.seq_QMARK_.call(null,map__9188))?cljs.core.apply.call(null,cljs.core.hash_map,map__9188):map__9188);var state = map__9188__$1;var keys_down = cljs.core.get.call(null,map__9188__$1,new cljs.core.Keyword(null,"keys-down","keys-down",4170753101));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"keys-down","keys-down",4170753101),cljs.core.disj.call(null,keys_down,keyn));
});
breakout.core.process_keydown = (function process_keydown(p__9189,keyn){var map__9191 = p__9189;var map__9191__$1 = ((cljs.core.seq_QMARK_.call(null,map__9191))?cljs.core.apply.call(null,cljs.core.hash_map,map__9191):map__9191);var state = map__9191__$1;var keys_down = cljs.core.get.call(null,map__9191__$1,new cljs.core.Keyword(null,"keys-down","keys-down",4170753101));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"keys-down","keys-down",4170753101),cljs.core.conj.call(null,keys_down,keyn));
});
breakout.core.new_object_position = (function new_object_position(object,screen,pos_delta){var current_x = cljs.core.get_in.call(null,object,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211),0], null));var current_y = cljs.core.get_in.call(null,object,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211),1], null));var new_x = (current_x + pos_delta.call(null,0));var new_y = (current_y + pos_delta.call(null,1));var width = object.call(null,new cljs.core.Keyword(null,"width","width",1127031096));var height = object.call(null,new cljs.core.Keyword(null,"height","height",4087841945));var screen_w = screen.call(null,new cljs.core.Keyword(null,"width","width",1127031096));var screen_h = screen.call(null,new cljs.core.Keyword(null,"height","height",4087841945));var maximum_x = (screen_w - width);var maximum_y = screen_h;var minimum_x = 0;var minimum_y = height;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__3696__auto__ = maximum_x;var y__3697__auto__ = (function (){var x__3689__auto__ = minimum_x;var y__3690__auto__ = new_x;return ((x__3689__auto__ > y__3690__auto__) ? x__3689__auto__ : y__3690__auto__);
})();return ((x__3696__auto__ < y__3697__auto__) ? x__3696__auto__ : y__3697__auto__);
})(),(function (){var x__3696__auto__ = maximum_y;var y__3697__auto__ = (function (){var x__3689__auto__ = minimum_y;var y__3690__auto__ = new_y;return ((x__3689__auto__ > y__3690__auto__) ? x__3689__auto__ : y__3690__auto__);
})();return ((x__3696__auto__ < y__3697__auto__) ? x__3696__auto__ : y__3697__auto__);
})()], null);
});
breakout.core.move_object = (function move_object(p__9192,object_key){var map__9196 = p__9192;var map__9196__$1 = ((cljs.core.seq_QMARK_.call(null,map__9196))?cljs.core.apply.call(null,cljs.core.hash_map,map__9196):map__9196);var state = map__9196__$1;var screen = cljs.core.get.call(null,map__9196__$1,new cljs.core.Keyword(null,"screen","screen",4401181662));return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_key,new cljs.core.Keyword(null,"position","position",1761709211)], null),(function (){var map__9197 = state.call(null,object_key);var map__9197__$1 = ((cljs.core.seq_QMARK_.call(null,map__9197))?cljs.core.apply.call(null,cljs.core.hash_map,map__9197):map__9197);var object = map__9197__$1;var map__9198 = cljs.core.get.call(null,map__9197__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var map__9198__$1 = ((cljs.core.seq_QMARK_.call(null,map__9198))?cljs.core.apply.call(null,cljs.core.hash_map,map__9198):map__9198);var bearing = cljs.core.get.call(null,map__9198__$1,new cljs.core.Keyword(null,"bearing","bearing",779578144));var speed = cljs.core.get.call(null,map__9198__$1,new cljs.core.Keyword(null,"speed","speed",1123546041));return breakout.core.new_object_position.call(null,object,screen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(speed * Math.cos.call(null,bearing)),(speed * Math.sin.call(null,bearing))], null));
})());
});
breakout.core.update_player_speed = (function update_player_speed(p__9199){var map__9202 = p__9199;var map__9202__$1 = ((cljs.core.seq_QMARK_.call(null,map__9202))?cljs.core.apply.call(null,cljs.core.hash_map,map__9202):map__9202);var state = map__9202__$1;var keys_down = cljs.core.get.call(null,map__9202__$1,new cljs.core.Keyword(null,"keys-down","keys-down",4170753101));var player = cljs.core.get.call(null,map__9202__$1,new cljs.core.Keyword(null,"player","player",4323118675));return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),(function (){var G__9203 = keys_down;if(cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",1017222009),null], null), null),G__9203))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"speed","speed",1123546041),breakout.core.player_speed,new cljs.core.Keyword(null,"bearing","bearing",779578144),Math.PI], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",1122416014),null], null), null),G__9203))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"speed","speed",1123546041),breakout.core.player_speed,new cljs.core.Keyword(null,"bearing","bearing",779578144),0.0], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"speed","speed",1123546041),0,new cljs.core.Keyword(null,"bearing","bearing",779578144),0.0], null);
} else
{return null;
}
}
}
})());
});
breakout.core.proximity = (function proximity(p__9204,p__9205){var map__9210 = p__9204;var map__9210__$1 = ((cljs.core.seq_QMARK_.call(null,map__9210))?cljs.core.apply.call(null,cljs.core.hash_map,map__9210):map__9210);var vec__9211 = cljs.core.get.call(null,map__9210__$1,new cljs.core.Keyword(null,"position","position",1761709211));var obj1_lhs = cljs.core.nth.call(null,vec__9211,0,null);var obj1_top = cljs.core.nth.call(null,vec__9211,1,null);var obj1_w = cljs.core.get.call(null,map__9210__$1,new cljs.core.Keyword(null,"width","width",1127031096));var obj1_h = cljs.core.get.call(null,map__9210__$1,new cljs.core.Keyword(null,"height","height",4087841945));var map__9212 = p__9205;var map__9212__$1 = ((cljs.core.seq_QMARK_.call(null,map__9212))?cljs.core.apply.call(null,cljs.core.hash_map,map__9212):map__9212);var vec__9213 = cljs.core.get.call(null,map__9212__$1,new cljs.core.Keyword(null,"position","position",1761709211));var obj2_lhs = cljs.core.nth.call(null,vec__9213,0,null);var obj2_top = cljs.core.nth.call(null,vec__9213,1,null);var obj2_w = cljs.core.get.call(null,map__9212__$1,new cljs.core.Keyword(null,"width","width",1127031096));var obj2_h = cljs.core.get.call(null,map__9212__$1,new cljs.core.Keyword(null,"height","height",4087841945));var obj1_rhs = (obj1_lhs + obj1_w);var obj2_rhs = (obj2_lhs + obj2_w);var obj1_bottom = (obj1_top - obj1_h);var obj2_bottom = (obj2_top - obj2_h);var horizontal_separation = (((obj1_rhs <= obj2_lhs))?(obj2_lhs - obj1_rhs):(obj1_lhs - obj2_rhs));var vertical_separation = (((obj1_top <= obj2_bottom))?(obj2_bottom - obj1_top):(obj1_bottom - obj2_top));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizontal_separation,vertical_separation], null);
});
breakout.core.horizontal_collision_QMARK_ = (function horizontal_collision_QMARK_(obj1,obj2){var vec__9215 = breakout.core.proximity.call(null,obj1,obj2);var horizontal_distance = cljs.core.nth.call(null,vec__9215,0,null);var vertical_distance = cljs.core.nth.call(null,vec__9215,1,null);return ((horizontal_distance <= 0)) && ((vertical_distance <= 0)) && ((horizontal_distance <= vertical_distance));
});
breakout.core.vertical_collision_QMARK_ = (function vertical_collision_QMARK_(obj1,obj2){var vec__9217 = breakout.core.proximity.call(null,obj1,obj2);var horizontal_distance = cljs.core.nth.call(null,vec__9217,0,null);var vertical_distance = cljs.core.nth.call(null,vec__9217,1,null);return ((horizontal_distance <= 0)) && ((vertical_distance <= 0)) && ((vertical_distance >= horizontal_distance));
});
breakout.core.left_wall_collision_QMARK_ = (function left_wall_collision_QMARK_(ball,screen){return breakout.core.horizontal_collision_QMARK_.call(null,ball,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,screen.call(null,new cljs.core.Keyword(null,"height","height",4087841945))], null),new cljs.core.Keyword(null,"width","width",1127031096),1,new cljs.core.Keyword(null,"height","height",4087841945),screen.call(null,new cljs.core.Keyword(null,"height","height",4087841945))], null));
});
breakout.core.right_wall_collision_QMARK_ = (function right_wall_collision_QMARK_(ball,screen){return breakout.core.horizontal_collision_QMARK_.call(null,ball,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen.call(null,new cljs.core.Keyword(null,"width","width",1127031096)),screen.call(null,new cljs.core.Keyword(null,"height","height",4087841945))], null),new cljs.core.Keyword(null,"width","width",1127031096),1,new cljs.core.Keyword(null,"height","height",4087841945),screen.call(null,new cljs.core.Keyword(null,"height","height",4087841945))], null));
});
breakout.core.top_wall_collision_QMARK_ = (function top_wall_collision_QMARK_(ball,screen){return breakout.core.vertical_collision_QMARK_.call(null,ball,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,screen.call(null,new cljs.core.Keyword(null,"height","height",4087841945))], null),new cljs.core.Keyword(null,"width","width",1127031096),screen.call(null,new cljs.core.Keyword(null,"width","width",1127031096)),new cljs.core.Keyword(null,"height","height",4087841945),1], null));
});
breakout.core.bottom_wall_collision_QMARK_ = (function bottom_wall_collision_QMARK_(ball,screen){return breakout.core.vertical_collision_QMARK_.call(null,ball,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.Keyword(null,"width","width",1127031096),screen.call(null,new cljs.core.Keyword(null,"width","width",1127031096)),new cljs.core.Keyword(null,"height","height",4087841945),1], null));
});
breakout.core.flip_on_y = (function flip_on_y(bearing){return Math.atan.call(null,(Math.sin.call(null,bearing) / (- Math.cos.call(null,bearing))));
});
breakout.core.flip_on_x = (function flip_on_x(bearing){return (- bearing);
});
breakout.core.update_ball_velocity = (function update_ball_velocity(p__9218){var map__9220 = p__9218;var map__9220__$1 = ((cljs.core.seq_QMARK_.call(null,map__9220))?cljs.core.apply.call(null,cljs.core.hash_map,map__9220):map__9220);var state = map__9220__$1;var player = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"player","player",4323118675));var ball = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"ball","ball",1016920433));var screen = cljs.core.get.call(null,map__9220__$1,new cljs.core.Keyword(null,"screen","screen",4401181662));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",1016920433),new cljs.core.Keyword(null,"velocity","velocity",3148165199),new cljs.core.Keyword(null,"bearing","bearing",779578144)], null),(function (bearing){if(breakout.core.horizontal_collision_QMARK_.call(null,ball,player))
{return breakout.core.flip_on_y.call(null,bearing);
} else
{if(breakout.core.vertical_collision_QMARK_.call(null,ball,player))
{return breakout.core.flip_on_x.call(null,bearing);
} else
{if(breakout.core.top_wall_collision_QMARK_.call(null,ball,screen))
{return breakout.core.flip_on_x.call(null,bearing);
} else
{if(breakout.core.bottom_wall_collision_QMARK_.call(null,ball,screen))
{return breakout.core.flip_on_x.call(null,bearing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return bearing;
} else
{return null;
}
}
}
}
}
}));
});
breakout.core.process_gametick = (function process_gametick(state,tick){return breakout.core.move_object.call(null,breakout.core.update_ball_velocity.call(null,breakout.core.move_object.call(null,breakout.core.update_player_speed.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ticks-gone","ticks-gone",3439250696),tick)),new cljs.core.Keyword(null,"player","player",4323118675))),new cljs.core.Keyword(null,"ball","ball",1016920433));
});
breakout.core.run_game = (function run_game(element){var keydowns_chan = breakout.core.keydowns.call(null,element);var keyups_chan = breakout.core.keyups.call(null,element);var game_states = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,2));var c__6625__auto___9379 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_9348){var state_val_9349 = (state_9348[1]);if((state_val_9349 === 1))
{var inst_9300 = breakout.core.initial_game;var state_9348__$1 = (function (){var statearr_9350 = state_9348;(statearr_9350[7] = inst_9300);
return statearr_9350;
})();var statearr_9351_9380 = state_9348__$1;(statearr_9351_9380[2] = null);
(statearr_9351_9380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 2))
{var inst_9300 = (state_9348[7]);var inst_9302 = cljs.core.async.put_BANG_.call(null,game_states,inst_9300);var inst_9309 = [keydowns_chan,keyups_chan,breakout.core.game_tick_channel];var inst_9310 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9309,null));var state_9348__$1 = (function (){var statearr_9352 = state_9348;(statearr_9352[8] = inst_9302);
return statearr_9352;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9348__$1,4,inst_9310);
} else
{if((state_val_9349 === 3))
{var inst_9346 = (state_9348[2]);var state_9348__$1 = state_9348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9348__$1,inst_9346);
} else
{if((state_val_9349 === 4))
{var inst_9314 = (state_9348[9]);var inst_9312 = (state_9348[10]);var inst_9312__$1 = (state_9348[2]);var inst_9313 = cljs.core.nth.call(null,inst_9312__$1,0,null);var inst_9314__$1 = cljs.core.nth.call(null,inst_9312__$1,1,null);var inst_9315 = cljs.core._EQ_.call(null,inst_9314__$1,keydowns_chan);var state_9348__$1 = (function (){var statearr_9353 = state_9348;(statearr_9353[9] = inst_9314__$1);
(statearr_9353[10] = inst_9312__$1);
(statearr_9353[11] = inst_9313);
return statearr_9353;
})();if(inst_9315)
{var statearr_9354_9381 = state_9348__$1;(statearr_9354_9381[1] = 5);
} else
{var statearr_9355_9382 = state_9348__$1;(statearr_9355_9382[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 5))
{var inst_9300 = (state_9348[7]);var inst_9312 = (state_9348[10]);var inst_9318 = cljs.core.nth.call(null,inst_9312,0,null);var inst_9319 = breakout.core.process_keydown.call(null,inst_9300,inst_9318);var state_9348__$1 = state_9348;var statearr_9356_9383 = state_9348__$1;(statearr_9356_9383[2] = inst_9319);
(statearr_9356_9383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 6))
{var inst_9314 = (state_9348[9]);var inst_9321 = cljs.core._EQ_.call(null,inst_9314,keyups_chan);var state_9348__$1 = state_9348;if(inst_9321)
{var statearr_9357_9384 = state_9348__$1;(statearr_9357_9384[1] = 8);
} else
{var statearr_9358_9385 = state_9348__$1;(statearr_9358_9385[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 7))
{var inst_9343 = (state_9348[2]);var inst_9300 = inst_9343;var state_9348__$1 = (function (){var statearr_9359 = state_9348;(statearr_9359[7] = inst_9300);
return statearr_9359;
})();var statearr_9360_9386 = state_9348__$1;(statearr_9360_9386[2] = null);
(statearr_9360_9386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 8))
{var inst_9300 = (state_9348[7]);var inst_9312 = (state_9348[10]);var inst_9324 = cljs.core.nth.call(null,inst_9312,0,null);var inst_9325 = breakout.core.process_keyup.call(null,inst_9300,inst_9324);var state_9348__$1 = state_9348;var statearr_9361_9387 = state_9348__$1;(statearr_9361_9387[2] = inst_9325);
(statearr_9361_9387[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 9))
{var inst_9314 = (state_9348[9]);var inst_9327 = cljs.core._EQ_.call(null,inst_9314,breakout.core.game_tick_channel);var state_9348__$1 = state_9348;if(inst_9327)
{var statearr_9362_9388 = state_9348__$1;(statearr_9362_9388[1] = 11);
} else
{var statearr_9363_9389 = state_9348__$1;(statearr_9363_9389[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 10))
{var inst_9341 = (state_9348[2]);var state_9348__$1 = state_9348;var statearr_9364_9390 = state_9348__$1;(statearr_9364_9390[2] = inst_9341);
(statearr_9364_9390[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 11))
{var inst_9300 = (state_9348[7]);var inst_9312 = (state_9348[10]);var inst_9330 = cljs.core.nth.call(null,inst_9312,0,null);var inst_9331 = breakout.core.process_gametick.call(null,inst_9300,inst_9330);var state_9348__$1 = state_9348;var statearr_9365_9391 = state_9348__$1;(statearr_9365_9391[2] = inst_9331);
(statearr_9365_9391[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 12))
{var inst_9314 = (state_9348[9]);var inst_9333 = cljs.core._EQ_.call(null,inst_9314,new cljs.core.Keyword(null,"default","default",2558708147));var state_9348__$1 = state_9348;if(inst_9333)
{var statearr_9366_9392 = state_9348__$1;(statearr_9366_9392[1] = 14);
} else
{var statearr_9367_9393 = state_9348__$1;(statearr_9367_9393[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 13))
{var inst_9339 = (state_9348[2]);var state_9348__$1 = state_9348;var statearr_9368_9394 = state_9348__$1;(statearr_9368_9394[2] = inst_9339);
(statearr_9368_9394[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 14))
{var inst_9313 = (state_9348[11]);var state_9348__$1 = state_9348;var statearr_9369_9395 = state_9348__$1;(statearr_9369_9395[2] = inst_9313);
(statearr_9369_9395[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 15))
{var state_9348__$1 = state_9348;var statearr_9370_9396 = state_9348__$1;(statearr_9370_9396[2] = null);
(statearr_9370_9396[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9349 === 16))
{var inst_9337 = (state_9348[2]);var state_9348__$1 = state_9348;var statearr_9371_9397 = state_9348__$1;(statearr_9371_9397[2] = inst_9337);
(statearr_9371_9397[1] = 13);
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
var state_machine__6556__auto____0 = (function (){var statearr_9375 = (new Array(12));(statearr_9375[0] = state_machine__6556__auto__);
(statearr_9375[1] = 1);
return statearr_9375;
});
var state_machine__6556__auto____1 = (function (state_9348){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_9348);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e9376){if((e9376 instanceof Object))
{var ex__6559__auto__ = e9376;var statearr_9377_9398 = state_9348;(statearr_9377_9398[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9348);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9399 = state_9348;
state_9348 = G__9399;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_9348){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_9348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_9378 = f__6626__auto__.call(null);(statearr_9378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___9379);
return statearr_9378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
return game_states;
});
breakout.core.set_el_pos = (function set_el_pos(el,screen,pos){return goog.style.setPosition(el,pos.call(null,0),(screen.call(null,new cljs.core.Keyword(null,"height","height",4087841945)) - pos.call(null,1)));
});
goog.dom.getElement("body").appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.breakout","div.breakout",2455975454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"gameboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player","div.player",2711132752),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"player1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ball","div.ball",1323622574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"ball1"], null)], null)], null)));
breakout.core.set_size = (function set_size(el,obj){return cljs.core.apply.call(null,goog.style.setSize,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,obj.call(null,new cljs.core.Keyword(null,"width","width",1127031096)),obj.call(null,new cljs.core.Keyword(null,"height","height",4087841945))], null));
});
breakout.core.render_gameboard = (function render_gameboard(board_el,p__9400){var map__9402 = p__9400;var map__9402__$1 = ((cljs.core.seq_QMARK_.call(null,map__9402))?cljs.core.apply.call(null,cljs.core.hash_map,map__9402):map__9402);var state = map__9402__$1;var player = cljs.core.get.call(null,map__9402__$1,new cljs.core.Keyword(null,"player","player",4323118675));var screen = cljs.core.get.call(null,map__9402__$1,new cljs.core.Keyword(null,"screen","screen",4401181662));var ball = cljs.core.get.call(null,map__9402__$1,new cljs.core.Keyword(null,"ball","ball",1016920433));breakout.core.set_size.call(null,board_el,screen);
breakout.core.set_size.call(null,goog.dom.getElement(player.call(null,new cljs.core.Keyword(null,"id","id",1013907597))),player);
breakout.core.set_size.call(null,goog.dom.getElement(ball.call(null,new cljs.core.Keyword(null,"id","id",1013907597))),ball);
breakout.core.set_el_pos.call(null,goog.dom.getElement(player.call(null,new cljs.core.Keyword(null,"id","id",1013907597))),screen,player.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));
return breakout.core.set_el_pos.call(null,goog.dom.getElement(ball.call(null,new cljs.core.Keyword(null,"id","id",1013907597))),screen,ball.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));
});
var game_states_9425 = breakout.core.run_game.call(null,goog.dom.getElement("body"));var c__6625__auto___9426 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6626__auto__ = (function (){var switch__6555__auto__ = (function (state_9412){var state_val_9413 = (state_9412[1]);if((state_val_9413 === 4))
{var inst_9404 = (state_9412[7]);var inst_9406 = (state_9412[2]);var inst_9407 = breakout.core.render_gameboard.call(null,inst_9404,inst_9406);var state_9412__$1 = (function (){var statearr_9414 = state_9412;(statearr_9414[8] = inst_9407);
return statearr_9414;
})();var statearr_9415_9427 = state_9412__$1;(statearr_9415_9427[2] = null);
(statearr_9415_9427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9413 === 3))
{var inst_9410 = (state_9412[2]);var state_9412__$1 = state_9412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9412__$1,inst_9410);
} else
{if((state_val_9413 === 2))
{var inst_9404 = goog.dom.getElement("gameboard");var state_9412__$1 = (function (){var statearr_9416 = state_9412;(statearr_9416[7] = inst_9404);
return statearr_9416;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9412__$1,4,game_states_9425);
} else
{if((state_val_9413 === 1))
{var state_9412__$1 = state_9412;var statearr_9417_9428 = state_9412__$1;(statearr_9417_9428[2] = null);
(statearr_9417_9428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6555__auto__){
return (function() {
var state_machine__6556__auto__ = null;
var state_machine__6556__auto____0 = (function (){var statearr_9421 = (new Array(9));(statearr_9421[0] = state_machine__6556__auto__);
(statearr_9421[1] = 1);
return statearr_9421;
});
var state_machine__6556__auto____1 = (function (state_9412){while(true){
var ret_value__6557__auto__ = (function (){try{while(true){
var result__6558__auto__ = switch__6555__auto__.call(null,state_9412);if(cljs.core.keyword_identical_QMARK_.call(null,result__6558__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6558__auto__;
}
break;
}
}catch (e9422){if((e9422 instanceof Object))
{var ex__6559__auto__ = e9422;var statearr_9423_9429 = state_9412;(statearr_9423_9429[5] = ex__6559__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6557__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9430 = state_9412;
state_9412 = G__9430;
continue;
}
} else
{return ret_value__6557__auto__;
}
break;
}
});
state_machine__6556__auto__ = function(state_9412){
switch(arguments.length){
case 0:
return state_machine__6556__auto____0.call(this);
case 1:
return state_machine__6556__auto____1.call(this,state_9412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6556__auto____0;
state_machine__6556__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6556__auto____1;
return state_machine__6556__auto__;
})()
;})(switch__6555__auto__))
})();var state__6627__auto__ = (function (){var statearr_9424 = f__6626__auto__.call(null);(statearr_9424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6625__auto___9426);
return statearr_9424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6627__auto__);
}));
