(this["webpackJsonpmobile-scanning"]=this["webpackJsonpmobile-scanning"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),i=n.n(c),o=(n(12),n(1)),s=n.n(o),l=n(4),u=n(6),d=n(5),m=n.n(d),v=function(){var e=window.innerHeight,t=window.innerWidth,n=Object(a.createRef)(),c=Object(a.createRef)(),i=Object(a.useState)(null),o=Object(u.a)(i,2),d=o[0],v=o[1],h=Object(a.useCallback)((function(e){var t=e.data;t!==d&&v(t)}),[d]),g=Object(a.useCallback)((function(){if(n.current&&n.current.readyState===n.current.HAVE_ENOUGH_DATA){var a=c.current.getContext("2d");c.current.width=t,c.current.height=e,a.drawImage(n.current,0,0,t,e);var r=a.getImageData(0,0,t,e),i=m()(r.data,r.width,r.height,{inversionAttempts:"dontInvert"});i&&i.data.length>0&&h(i)}requestAnimationFrame(g)}),[c,n,e,t,h]);return Object(a.useEffect)((function(){Object(l.a)(s.a.mark((function a(){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!Boolean(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)){a.next=8;break}return a.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{height:e,width:t,facingMode:"environment"}});case 5:r=a.sent,n.current.srcObject=r,requestAnimationFrame(g);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}),[n,e,t,g]),r.a.createElement(a.Fragment,null,r.a.createElement("canvas",{hidden:!0,ref:c}),r.a.createElement("video",{ref:n,playsInline:!0,autoPlay:!0}),null!==d&&r.a.createElement("div",{className:"qr-code"},d))};var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.586a765c.chunk.js.map