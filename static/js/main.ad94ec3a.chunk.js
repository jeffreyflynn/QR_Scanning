(this["webpackJsonpmobile-scanning"]=this["webpackJsonpmobile-scanning"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),i=n.n(c),o=(n(12),n(6)),s=(n(13),n(1)),u=n.n(s),d=n(4),l=n(5),m=n.n(l);var v=function(e){var t,n=e.qrCode,c=e.setQrCode,i=window.innerHeight,o=window.innerWidth,s=Object(r.createRef)(),l=Object(r.createRef)(),v=function(){return requestAnimationFrame(h)};t=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{height:i,width:o,facingMode:"environment"}});case 3:t=e.sent,s.current.srcObject=t,s.current.playsinline=!0,s.current.play(),v(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),Object(r.useEffect)((function(){t()}),[t]);var h=function(){var e=l.current.getContext("2d");if(s.current.readyState===s.current.HAVE_ENOUGH_DATA){l.current.width=o,l.current.height=i,e.drawImage(s.current,0,0,o,i);var t=e.getImageData(0,0,o,i),n=m()(t.data,t.width,t.height,{inversionAttempts:"dontInvert"});n?f(n):v()}else v()},f=function(e){e.data!==n&&c(e.data)};return a.a.createElement("div",null,a.a.createElement("video",{ref:s}),a.a.createElement("canvas",{hidden:!0,ref:l}))};var h=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(v,{qrCode:n,setQrCode:c}),a.a.createElement("div",null,n)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.ad94ec3a.chunk.js.map