(function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-mapboxgl/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12ab":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("8733"),n("2877")),u={},l=Object(i["a"])(u,o,a,!1,null,"18473c15",null),c=l.exports,s=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basemap",attrs:{id:"mapContainer"}})},f=[],d=n("e192"),b=n.n(d),v=(n("ac6d"),{name:"Map",data:function(){return{accessToken:"pk.eyJ1Ijoid2FpdGluZzMzMTE4IiwiYSI6ImNrZDVlZWp6MjFxcXQyeHF2bW0xenU4YXoifQ.iGfojLdouAjsovJuRxjYVA"}},mounted:function(){b.a.accessToken=this.accessToken;var e=new b.a.Map({style:"mapbox://styles/waiting33118/ckdfkx3t10k9w1irkp8anuy39",center:{lon:121.534907,lat:25.043163},zoom:17,pitch:55,bearing:0,container:"mapContainer",antialias:!0}),t=new b.a.NavigationControl;e.addControl(t,"top-right");var n=new b.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});e.addControl(n,"top-right"),e.on("load",(function(){for(var t,n=e.getStyle().layers,r=0;r<n.length;r++)if("symbol"===n[r].type&&n[r].layout["text-field"]){t=n[r].id;break}e.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:17,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},t)}));var r=new b.a.ScaleControl({maxWidth:80,unit:"imperial"});e.addControl(r),r.setUnit("metric")}}),h=v,m=(n("8df7"),Object(i["a"])(h,p,f,!1,null,"f5ebd5fc",null)),y=m.exports;r["a"].use(s["a"]);var g=[{path:"/",name:"Map",component:y}],x=new s["a"]({routes:g}),w=x,j=n("2f62");r["a"].use(j["a"]);var O=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("12ab");r["a"].config.productionTip=!1,new r["a"]({router:w,store:O,render:function(e){return e(c)}}).$mount("#app")},8733:function(e,t,n){"use strict";var r=n("c5e7"),o=n.n(r);o.a},"8df7":function(e,t,n){"use strict";var r=n("c009"),o=n.n(r);o.a},c009:function(e,t,n){},c5e7:function(e,t,n){}});
//# sourceMappingURL=app.4051b7e6.js.map