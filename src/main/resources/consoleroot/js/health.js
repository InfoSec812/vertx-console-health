!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));l[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(g){var o=f++;r=p||(p=a()),e=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var a=u(t,e);return r(a),function(e){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=l[i.id];s.refs--,n.push(s)}e?(a=u(t,e),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,r,a){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var c="function"==typeof i?i.options:i;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var u;if(a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,d=l?c.render:c.beforeCreate;l?c.render=function(t,e){return u.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:i,options:c}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),a=n.n(r);window.vertxConsoleRoutes||(window.vertxConsoleRoutes=[]),window.vertxConsoleRoutes.push({path:"/health",component:a.a})},function(t,e,n){function r(t){n(5)}var a=n(2)(n(8),n(15),r,"data-v-a33925f4",null);t.exports=a.exports},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("09987c5c",r,!0)},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".health-container[data-v-a33925f4]{width:100%;height:100%;padding-bottom:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tree-display[data-v-a33925f4]{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden}",""])},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=o[0],s=o[1],c=o[2],u=o[3],l={id:t+":"+a,css:s,media:c,sourceMap:u};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),a=n.n(r);e.default={name:"Health Checks",components:{"tree-display":a.a},data:function(){return{healthChecks:{}}},beforeMount:function(){var t=this,e=function(){return t.$http.get(window.location.pathname+"/healthchecks",{validateStatus:function(t){return t>=200&&t<300||500===t||503===t}}).then(function(t){return t.data}).then(function(e){function n(t,e){if(e.address=t?t.address+"/"+e.id:e.id,e.checks){var r=!0,a=!1,o=void 0;try{for(var i,s=e.checks[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){n(e,i.value)}}catch(t){a=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}}}e.id="root",e.status=e.outcome,n(null,e),t.healthChecks=e})};e(),this.updateTask=setInterval(e,1e3)},beforeDestroy:function(){clearInterval(this.updateTask)}}},function(t,e,n){function r(t){n(10)}var a=n(2)(n(12),n(14),r,null,null);t.exports=a.exports},function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("9da45c18",r,!0)},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,'.health-tree-container svg{width:100%;height:100%}.health-tree-container svg .node text{font-family:Menlo,Monaco,Consolas,monospace}.health-tree-container svg .node circle{stroke-width:1px;filter:url(#shadow);cursor:pointer}.health-tree-container svg .link{fill:none;stroke:#d8d8d8;stroke-width:2px}.health-tree-tip{color:#fff;background-color:#393f44;border-radius:1px;padding:7px 12px;transition:opacity .2s}.health-tree-tip code{background:transparent;white-space:pre;padding:0}.health-tree-tip .json-markup{color:#888}.health-tree-tip .json-markup-key{color:#fff;font-weight:700}.health-tree-tip .json-markup-bool,.health-tree-tip .json-markup-null,.health-tree-tip .json-markup-number,.health-tree-tip .json-markup-string{color:#d8d8d8}.health-tree-tip:after{box-sizing:border-box;display:inline-block;font-size:24px;width:100%;line-height:1;color:#393f44;content:"\\25BE";position:absolute;text-align:center;pointer-events:none}.health-tree-tip.n:after{margin:-10px 0 0;top:100%;left:0}',""])},function(t,e,n){"use strict";function r(t,e,n){t.attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%"),t.append("stop").attr("class","start").attr("offset","0%").attr("stop-color",e).attr("stop-opacity",1),t.append("stop").attr("class","end").attr("offset","100%").attr("stop-color",n).attr("stop-opacity",1)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(13),o=n.n(a);e.default={props:{treeData:Object},beforeMount:function(){var t=this;this.disableDraw=!1,this.visibilityFn=function(){document.hidden?t.disableDraw=!0:(t.disableDraw=!1,t.drawTree())},document.addEventListener("visibilitychange",this.visibilityFn,!1)},beforeDestroy:function(){document.removeEventListener("visibilitychange",this.visibilityFn,!1)},watch:{treeData:function(t){var e=JSON.stringify(this.treeData);if(e!==this.lastDataString){this.lastDataString=e;var n=JSON.parse(e);d3.layout.hierarchy().children(function(t){return t.checks})(n),this.treeRoot=n,this.disableDraw||this.drawTree()}}},methods:{onResize:function(){this.drawTree(),this.tip.hide()},drawTree:function(){if(this.treeRoot){var t=this.$el,e=d3.select(t),n=t.clientWidth,a=t.clientHeight,i=d3.layout.tree().size([a,n]),s=d3.svg.diagonal().projection(function(t){return[t.y,t.x]}),c=e.select("svg");if(c.empty()){c=e.attr("preserveAspectRatio","none").append("svg");var u=c.append("defs");r(u.append("linearGradient").attr("id","redGradient"),"#c00","#a30000");r(u.append("linearGradient").attr("id","greenGradient"),"#6ec664","#3f9c35");u.append("filter").attr("id","shadow").attr("width",16).attr("height",16).attr("x",-3).append("feDropShadow").attr("dx",0).attr("dy",2).attr("stdDeviation",1).attr("flood-opacity",.3),this.tip=d3.tip().attr("class","health-tree-tip").offset([-10,0]).html(function(t){return"<code>"+o()(t.data||{})+"</code>"}),c.call(this.tip)}else c.selectAll(".redraw").remove();var l=i.nodes(this.treeRoot).reverse(),d=i.links(l);l.forEach(function(t){return t.y=120*t.depth});var p=c.selectAll("g.node").data(l,function(t){return t.address}),f=p.enter().append("g").attr("class","node redraw").attr("transform",function(t){return"translate("+(t.y+50)+","+t.x+")"});f.append("circle").attr("r",10).style("fill",function(t){return"UP"===t.status?"url(#greenGradient)":"url(#redGradient)"}).style("stroke",function(t){return"UP"===t.status?"#37892f":"#8b0000"}).on("mouseover",this.tip.show).on("mouseout",this.tip.hide),f.append("text").attr("x",function(t){return t.children?-16:16}).attr("dy",".35em").attr("text-anchor",function(t){return t.children?"end":"start"}).text(function(t){return t.id}).style("fill-opacity",1);c.selectAll("path.link").data(d,function(t){return t.target.address}).enter().insert("path","g").attr("class","link redraw").attr("transform",function(t){return"translate(50)"}).attr("d",s)}}}}},function(t,e,n){"use strict";function r(t){var e="";return Object.keys(t).forEach(function(n){e+=n+":"+t[n]+";"}),e}function a(t){function e(t){return'class="'+t+'"'}function n(e){return'style="'+r(t["."+e])+'"'}return t?n:e}function o(t){return null===t?"null":Array.isArray(t)?"array":"string"==typeof t&&/^https?:/.test(t)?"link":"object"==typeof t&&"function"==typeof t.toISOString?"date":typeof t}function i(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;")}t.exports=function(t,e){function n(t){if(void 0===t)return"";switch(o(t)){case"boolean":return"<span "+s("json-markup-bool")+">"+t+"</span>";case"number":return"<span "+s("json-markup-number")+">"+t+"</span>";case"date":return'<span class="json-markup-string">"'+i(t.toISOString())+'"</span>';case"null":return"<span "+s("json-markup-null")+">null</span>";case"string":return"<span "+s("json-markup-string")+'>"'+i(t.replace(/\n/g,"\n"+r))+'"</span>';case"link":return"<span "+s("json-markup-string")+'>"<a href="'+i(t)+'">'+i(t)+'</a>"</span>';case"array":return c(t,"[","]",n);case"object":var e=Object.keys(t).filter(function(e){return void 0!==t[e]});return c(e,"{","}",function(e){return"<span "+s("json-markup-key")+">"+e+":</span> "+n(t[e])})}return""}var r="",s=a(e),c=function(t,e,n,a){if(!t.length)return e+" "+n;var o=e+"\n";return r+="    ",t.forEach(function(e,n){o+=r+a(e)+(n<t.length-1?",":"")+"\n"}),r=r.slice(0,-"    ".length),o+r+n};return"<div "+s("json-markup")+">"+n(t)+"</div>"}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"resize",rawName:"v-resize:throttle",value:t.onResize,expression:"onResize",arg:"throttle"}],staticClass:"health-tree-container"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid health-container"},[t._m(0),t._v(" "),n("tree-display",{staticClass:"tree-display",attrs:{treeData:t.healthChecks}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("h1",[t._v("Health Checks")])])}]}}]);