(this["webpackJsonptwo-way-binding-with-usestate"]=this["webpackJsonptwo-way-binding-with-usestate"]||[]).push([[0],{131:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(12),a=n(36),i=(n(28),function(t,e,n,i,o){var s=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/s.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=s.innerWidth,a=e/n,i=t.velocityX,u=n/2,c=i>=0&&(i>.2||t.deltaX>u),w=(c?1-a:a)*n,d=0;if(w>5){var h=w/Math.abs(i);d=Math.min(h,540)}o(c,a<=0?.01:Object(r.j)(0,a,.9999),d)}})})}}]);
//# sourceMappingURL=0.237e9e16.chunk.js.map