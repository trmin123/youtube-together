(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){e.exports=n(42)},32:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),o=n(12),c=n.n(o),s=n(6),u=n(9),l=n(1),m=function(e){var t=Object(l.f)(),n=Object(l.g)(),a=n.sessionID,r=n.videoUrl,o=function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!t||11!==t[7].length)&&t[7]};return i.a.createElement("div",null,function(){var n=decodeURIComponent(r),i=o(n);i&&(e.session(i,a,!0),t.push("/watch/leader"))}())},d=(n(32),n(21)),v=n.n(d),f=function(e){var t=Object(r.useState)(e.videoID),n=Object(s.a)(t,2),o=n[0],c=n[1],u=Object(r.useState)({currentTime:0,shouldPause:!1,timestamp:0}),l=Object(s.a)(u,2),m=l[0],d=l[1],f=Object(r.useRef)(),p=i.a.useState(!e.leader),w=Object(s.a)(p,2),h=w[0],g=w[1],E=function(){null==a&&(a=new window.YT.Player("player",{videoId:o,playerVars:{mute:e.leader?0:1},events:{onReady:y,onStateChange:O}}))};Object(r.useEffect)((function(){if(e.socket.addEventListener("message",(function(e){var t=JSON.parse(e.data);"sync"===t.event&&b(t),"join"===t.event&&(!function(e){c(e.videoID)}(t),null!=t.latestEvent&&(d({currentTime:t.latestEvent.currentTime,shouldPause:"pause"===t.latestEvent.action,timestamp:t.latestEvent.timestamp}),h&&g(!1)))})),null!==o)if(window.YT)E();else{var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",window.onYouTubeIframeAPIReady=E;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}));var b=function(e){if(h&&g(!1),null!=a&&null!=a.getPlayerState){var t=a.getPlayerState();"currenttime"!==e.action||2!==t&&-1!==t?"pause"===e.action&&2!==t&&j():(f.current={currentTime:e.currentTime,timestamp:e.timestamp},I())}},y=function(e){if(0===m.timestamp)return e.target.playVideo(),void e.target.pauseVideo();f.current={timestamp:m.timestamp,currentTime:m.currentTime},e.target.playVideo(),m.shouldPause&&e.target.pauseVideo()},O=function(e){return T(e.data)},j=function(){return a.pauseVideo()},I=function(){return a.playVideo()},D=function(){var e,t=a.getCurrentTime();if(null!=f.current){var n=(Date.now()-f.current.timestamp)/1e3,r=f.current.currentTime+n;Math.abs(r-t)>.1&&(t=f.current.currentTime+n,e=t,a.seekTo(e,!0))}return JSON.stringify({event:"sync",action:"currenttime",videoID:o,currentTime:t,timestamp:Date.now()})},T=function(t){1===t?e.socket.send(D()):2===t&&function(){var t=Date.now(),n=a.getCurrentTime();f.current=null,e.socket.send(JSON.stringify({event:"sync",action:"pause",currentTime:n,timestamp:t}))}()};return i.a.createElement("div",{className:"video"},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"player"},i.a.createElement("h3",null,"Loading...")),i.a.createElement(v.a,{isOpen:h,contentLabel:"Example Modal"},i.a.createElement("div",{style:{textAlign:"center",marginTop:"auto",marginBottom:"auto",height:"100%",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement("h3",{style:{fontFamily:"Lato, sans-serif"}},"Waiting for ",e.leaderName," to start video")))))},p=function(e){var t=Object(l.f)(),n=window.location.protocol.startsWith("https:"),a="".concat(n?"wss":"ws","://").concat(window.location.hostname,":",8e3,"/"),o=new WebSocket(a),c=e.sessionID,s=Object(l.g)(),u=s.sessionID,m=s.leaderName;return c||(c=u),Object(r.useEffect)((function(){o.onopen=function(){o.send(JSON.stringify({event:"session",action:e.action,sessionID:c,videoID:e.videoID}))}})),"leader"!==u||e.leader||t.push("/"),i.a.createElement(f,{videoID:e.videoID,leader:e.leader,leaderName:m||"leader",sessionID:c,socket:o})};var w=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(null),c=Object(s.a)(o,2),d=c[0],v=c[1],f=Object(r.useState)(null),w=Object(s.a)(f,2),h=w[0],g=w[1],E=Object(r.useState)("join"),b=Object(s.a)(E,2),y=b[0],O=b[1],j=function(e,t,n){g(e),v(t),a(n),O("create")};return i.a.createElement(u.a,null,i.a.createElement("div",{className:"skewed"}),i.a.createElement("div",{className:"container"},i.a.createElement("main",{className:"content"},i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/start/:sessionID/:videoUrl",render:function(){return i.a.createElement(m,{session:j})}}),i.a.createElement(l.a,{path:"/watch/:sessionID/:leaderName?",render:function(){return i.a.createElement(p,{leader:n,sessionID:d,videoID:h,action:y})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.dab63f4d.chunk.js.map