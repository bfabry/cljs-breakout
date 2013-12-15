// Compiled by ClojureScript 0.0-2080
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",1014018518),"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__12071 = cljs.core.seq.call(null,content);var chunk__12072 = null;var count__12073 = 0;var i__12074 = 0;while(true){
if((i__12074 < count__12073))
{var c = cljs.core._nth.call(null,chunk__12072,i__12074);var child_12075 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_12075))
{goog.dom.appendChild(parent,child_12075);
} else
{}
{
var G__12076 = seq__12071;
var G__12077 = chunk__12072;
var G__12078 = count__12073;
var G__12079 = (i__12074 + 1);
seq__12071 = G__12076;
chunk__12072 = G__12077;
count__12073 = G__12078;
i__12074 = G__12079;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12071);if(temp__4092__auto__)
{var seq__12071__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12071__$1))
{var c__4106__auto__ = cljs.core.chunk_first.call(null,seq__12071__$1);{
var G__12080 = cljs.core.chunk_rest.call(null,seq__12071__$1);
var G__12081 = c__4106__auto__;
var G__12082 = cljs.core.count.call(null,c__4106__auto__);
var G__12083 = 0;
seq__12071 = G__12080;
chunk__12072 = G__12081;
count__12073 = G__12082;
i__12074 = G__12083;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__12071__$1);var child_12084 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_12084))
{goog.dom.appendChild(parent,child_12084);
} else
{}
{
var G__12085 = cljs.core.next.call(null,seq__12071__$1);
var G__12086 = null;
var G__12087 = 0;
var G__12088 = 0;
seq__12071 = G__12085;
chunk__12072 = G__12086;
count__12073 = G__12087;
i__12074 = G__12088;
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
crate.compiler.dom_binding = (function (){var method_table__4215__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4216__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4217__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4218__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4219__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){return type;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4219__auto__,method_table__4215__auto__,prefer_table__4216__auto__,method_cache__4217__auto__,cached_hierarchy__4218__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",1017460895),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (_,p__12089,elem){var vec__12090 = p__12089;var k = cljs.core.nth.call(null,vec__12090,0,null);var b = cljs.core.nth.call(null,vec__12090,1,null);return crate.binding.on_change.call(null,b,(function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",1123684643),(function (_,p__12091,elem){var vec__12092 = p__12091;var k = cljs.core.nth.call(null,vec__12092,0,null);var b = cljs.core.nth.call(null,vec__12092,1,null);return crate.binding.on_change.call(null,b,(function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4090__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",1014000659));if(cljs.core.truth_(temp__4090__auto__))
{var adder = temp__4090__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4090__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",4374260726));if(cljs.core.truth_(temp__4090__auto__))
{var remover = temp__4090__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1016963678),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__12093 = cljs.core._EQ_;var expr__12094 = type;if(cljs.core.truth_(pred__12093.call(null,new cljs.core.Keyword(null,"add","add",1014000659),expr__12094)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__12093.call(null,new cljs.core.Keyword(null,"remove","remove",4374260726),expr__12094)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12094)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__12102 = cljs.core.seq.call(null,bs);var chunk__12103 = null;var count__12104 = 0;var i__12105 = 0;while(true){
if((i__12105 < count__12104))
{var vec__12106 = cljs.core._nth.call(null,chunk__12103,i__12105);var type = cljs.core.nth.call(null,vec__12106,0,null);var b = cljs.core.nth.call(null,vec__12106,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__12108 = seq__12102;
var G__12109 = chunk__12103;
var G__12110 = count__12104;
var G__12111 = (i__12105 + 1);
seq__12102 = G__12108;
chunk__12103 = G__12109;
count__12104 = G__12110;
i__12105 = G__12111;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12102);if(temp__4092__auto__)
{var seq__12102__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12102__$1))
{var c__4106__auto__ = cljs.core.chunk_first.call(null,seq__12102__$1);{
var G__12112 = cljs.core.chunk_rest.call(null,seq__12102__$1);
var G__12113 = c__4106__auto__;
var G__12114 = cljs.core.count.call(null,c__4106__auto__);
var G__12115 = 0;
seq__12102 = G__12112;
chunk__12103 = G__12113;
count__12104 = G__12114;
i__12105 = G__12115;
continue;
}
} else
{var vec__12107 = cljs.core.first.call(null,seq__12102__$1);var type = cljs.core.nth.call(null,vec__12107,0,null);var b = cljs.core.nth.call(null,vec__12107,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__12116 = cljs.core.next.call(null,seq__12102__$1);
var G__12117 = null;
var G__12118 = 0;
var G__12119 = 0;
seq__12102 = G__12116;
chunk__12103 = G__12117;
count__12104 = G__12118;
i__12105 = G__12119;
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
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__12126_12132 = cljs.core.seq.call(null,v);var chunk__12127_12133 = null;var count__12128_12134 = 0;var i__12129_12135 = 0;while(true){
if((i__12129_12135 < count__12128_12134))
{var vec__12130_12136 = cljs.core._nth.call(null,chunk__12127_12133,i__12129_12135);var k_12137 = cljs.core.nth.call(null,vec__12130_12136,0,null);var v_12138__$1 = cljs.core.nth.call(null,vec__12130_12136,1,null);dom_style.call(null,elem,k_12137,v_12138__$1);
{
var G__12139 = seq__12126_12132;
var G__12140 = chunk__12127_12133;
var G__12141 = count__12128_12134;
var G__12142 = (i__12129_12135 + 1);
seq__12126_12132 = G__12139;
chunk__12127_12133 = G__12140;
count__12128_12134 = G__12141;
i__12129_12135 = G__12142;
continue;
}
} else
{var temp__4092__auto___12143 = cljs.core.seq.call(null,seq__12126_12132);if(temp__4092__auto___12143)
{var seq__12126_12144__$1 = temp__4092__auto___12143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12126_12144__$1))
{var c__4106__auto___12145 = cljs.core.chunk_first.call(null,seq__12126_12144__$1);{
var G__12146 = cljs.core.chunk_rest.call(null,seq__12126_12144__$1);
var G__12147 = c__4106__auto___12145;
var G__12148 = cljs.core.count.call(null,c__4106__auto___12145);
var G__12149 = 0;
seq__12126_12132 = G__12146;
chunk__12127_12133 = G__12147;
count__12128_12134 = G__12148;
i__12129_12135 = G__12149;
continue;
}
} else
{var vec__12131_12150 = cljs.core.first.call(null,seq__12126_12144__$1);var k_12151 = cljs.core.nth.call(null,vec__12131_12150,0,null);var v_12152__$1 = cljs.core.nth.call(null,vec__12131_12150,1,null);dom_style.call(null,elem,k_12151,v_12152__$1);
{
var G__12153 = cljs.core.next.call(null,seq__12126_12144__$1);
var G__12154 = null;
var G__12155 = 0;
var G__12156 = 0;
seq__12126_12132 = G__12153;
chunk__12127_12133 = G__12154;
count__12128_12134 = G__12155;
i__12129_12135 = G__12156;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_.call(null,v))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__12163_12169 = cljs.core.seq.call(null,attrs);var chunk__12164_12170 = null;var count__12165_12171 = 0;var i__12166_12172 = 0;while(true){
if((i__12166_12172 < count__12165_12171))
{var vec__12167_12173 = cljs.core._nth.call(null,chunk__12164_12170,i__12166_12172);var k_12174 = cljs.core.nth.call(null,vec__12167_12173,0,null);var v_12175 = cljs.core.nth.call(null,vec__12167_12173,1,null);dom_attr.call(null,elem,k_12174,v_12175);
{
var G__12176 = seq__12163_12169;
var G__12177 = chunk__12164_12170;
var G__12178 = count__12165_12171;
var G__12179 = (i__12166_12172 + 1);
seq__12163_12169 = G__12176;
chunk__12164_12170 = G__12177;
count__12165_12171 = G__12178;
i__12166_12172 = G__12179;
continue;
}
} else
{var temp__4092__auto___12180 = cljs.core.seq.call(null,seq__12163_12169);if(temp__4092__auto___12180)
{var seq__12163_12181__$1 = temp__4092__auto___12180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12163_12181__$1))
{var c__4106__auto___12182 = cljs.core.chunk_first.call(null,seq__12163_12181__$1);{
var G__12183 = cljs.core.chunk_rest.call(null,seq__12163_12181__$1);
var G__12184 = c__4106__auto___12182;
var G__12185 = cljs.core.count.call(null,c__4106__auto___12182);
var G__12186 = 0;
seq__12163_12169 = G__12183;
chunk__12164_12170 = G__12184;
count__12165_12171 = G__12185;
i__12166_12172 = G__12186;
continue;
}
} else
{var vec__12168_12187 = cljs.core.first.call(null,seq__12163_12181__$1);var k_12188 = cljs.core.nth.call(null,vec__12168_12187,0,null);var v_12189 = cljs.core.nth.call(null,vec__12168_12187,1,null);dom_attr.call(null,elem,k_12188,v_12189);
{
var G__12190 = cljs.core.next.call(null,seq__12163_12181__$1);
var G__12191 = null;
var G__12192 = 0;
var G__12193 = 0;
seq__12163_12169 = G__12190;
chunk__12164_12170 = G__12191;
count__12165_12171 = G__12192;
i__12166_12172 = G__12193;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_12194__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_12194__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12197){var vec__12198 = p__12197;var n = cljs.core.nth.call(null,vec__12198,0,null);var v = cljs.core.nth.call(null,vec__12198,1,null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__12200){var vec__12205 = p__12200;var tag = cljs.core.nth.call(null,vec__12205,0,null);var content = cljs.core.nthnext.call(null,vec__12205,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__12206 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__12206,0,null);var tag__$1 = cljs.core.nth.call(null,vec__12206,1,null);var id = cljs.core.nth.call(null,vec__12206,2,null);var class$ = cljs.core.nth.call(null,vec__12206,3,null);var vec__12207 = (function (){var vec__12208 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__12208,0,null);var t = cljs.core.nth.call(null,vec__12208,1,null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3382__auto__ = ns_xmlns;if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.call(null,vec__12207,0,null);var tag__$2 = cljs.core.nth.call(null,vec__12207,1,null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__12206,_,tag__$1,id,class$,vec__12207,nsp,tag__$2){
return (function (p1__12199_SHARP_){return !((cljs.core.second.call(null,p1__12199_SHARP_) == null));
});})(vec__12206,_,tag__$1,id,class$,vec__12207,nsp,tag__$2))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__3382__auto__ = id;if(cljs.core.truth_(or__3382__auto__))
{return or__3382__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings12211 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__12212 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__12212,0,null);var tag = cljs.core.nth.call(null,vec__12212,1,null);var attrs = cljs.core.nth.call(null,vec__12212,2,null);var content = cljs.core.nth.call(null,vec__12212,3,null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings12211;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__12215__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__12214 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__12214,0,null);var body = cljs.core.nthnext.call(null,vec__12214,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__12215 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12215__delegate.call(this,args);};
G__12215.cljs$lang$maxFixedArity = 0;
G__12215.cljs$lang$applyTo = (function (arglist__12216){
var args = cljs.core.seq(arglist__12216);
return G__12215__delegate(args);
});
G__12215.cljs$core$IFn$_invoke$arity$variadic = G__12215__delegate;
return G__12215;
})()
;
});
