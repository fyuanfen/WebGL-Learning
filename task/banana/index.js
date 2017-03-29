// stats
var stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0';
stats.domElement.style.top = '0';
document.body.appendChild(stats.domElement);
requestAnimationFrame(function updateStats(){
    stats.update();
    requestAnimationFrame(updateStats);
});
// vars, DOM elements
var thereAndBackEase = CustomEase.create("custom", "M0,0,C0,0.4,0.15,1,0.5,1,0.85,1,1,0.4,1,0")
var t = 60/110, // 110bpm
    i, tl, dx, els = [], tls = [], clap;
for (i=1;i<=12;i++) els.push(document.getElementById('el-'+i));
clap = document.getElementById('clap');
// master setup
var master = new TimelineMax({ repeat: -1, repeatDelay: 3 });
els.forEach(function(el) { master.set(el, {scale:0,transformOrigin:'50% 100%'}, 0); });
// el1 - This
tl = new TimelineMax({delay:t*0.0});
tl.fromTo(els[0],t*1.5,{rotation:30,opacity:0,scale:0},{rotation:-45,opacity:1,scale:1.1,ease:Circ.easeOut});
tl.to(els[0],t*0.5,{rotation:0,scale:1.1,ease:Circ.easeIn},t*1.5);
tl.set(els[0],{opacity:1},t*2);
tl.fromTo(els[0],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*2);
tl.to(els[0],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*2);
tl.to(els[0],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*3);
tls.push(tl);
// el2 - 💩
tl = new TimelineMax({delay:t*2.0});
tl.fromTo(els[1],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[1],t/2,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:45,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[1],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*1);
tl.to(els[1],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*1);
tl.to(els[1],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*2);
tls.push(tl);
// el3 - is
tl = new TimelineMax({delay:t*3.0});
tl.fromTo(els[2],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[2],t/4,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:-45,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[2],t*3/4,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:15,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t/2);
tl.fromTo(els[2],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*2);
tl.to(els[2],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*2);
tl.to(els[2],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*3);
tls.push(tl);
// el4 - 🍌
dx = (els[4].getBoundingClientRect().left - els[3].getBoundingClientRect().left) / 2 - 10;
tl = new TimelineMax({delay:t*3.5});
tl.fromTo(els[3],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[3],t/4,{rotation:12,scaleX:1.05,scaleY:0.95},{rotation:27,scaleX:1.05,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[3],t/4,{rotation:12,scaleX:1.05,scaleY:0.95},{rotation:10,scaleX:0.95,scaleY:0.9,yoyo:true,repeat:1,ease:Cubic.easeOut},t*0.5);
tl.fromTo(els[3],t/2,{rotation:12,scaleX:1.05,scaleY:0.95},{rotation:3,scaleX:0.95,scaleY:0.9,x:'+='+dx,yoyo:true,repeat:1,ease:Cubic.easeIn},t*1.5);
tl.fromTo(els[3],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*2.5);
tl.to(els[3],t/2,{rotation:-3,ease:Circ.easeOut,overwrite:0},t*2.5);
tl.to(els[3],t/2,{rotation:0,ease:Circ.easeIn,overwrite:0},t*3);
tl.to(els[3],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*3.5);
tl.to(els[3],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*4.5);
tls.push(tl);
// el5 - 🍌
tl = new TimelineMax({delay:t*4.0});
tl.fromTo(els[4],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[4],t/4,{rotation:-12,scaleX:1.05,scaleY:0.95},{rotation:3,scaleX:1.05,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[4],t/4,{rotation:-12,scaleX:1.05,scaleY:0.95},{rotation:-14,scaleX:0.95,scaleY:0.9,yoyo:true,repeat:1,ease:Cubic.easeOut},t*0.5);
tl.fromTo(els[4],t/2,{rotation:-12,scaleX:1.05,scaleY:0.95},{rotation:-3,scaleX:0.95,scaleY:0.9,x:'-='+dx,yoyo:true,repeat:1,ease:Cubic.easeIn},t*1.0);
tl.fromTo(clap,t/4,{opacity:0},{opacity:1},t*1.5);
tl.fromTo(clap,t*1.5,{scale:0.8},{scale:1.2,ease:Sine.easeOut},t*1.5);
tl.to(clap,t*3/4,{opacity:0,ease:Sine.easeOut},t*2.25);
tl.fromTo(els[4],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Sine.easeOut},t*2);
tl.to(els[4],t/2,{rotation:-3,ease:Circ.easeOut,overwrite:0},t*2);
tl.to(els[4],t/2,{rotation:0,ease:Circ.easeIn,overwrite:0},t*2.5);
tl.to(els[4],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*3);
tl.to(els[4],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*4);
tls.push(tl);
// el6 - B
tl = new TimelineMax({delay:t*5.5});
tl.fromTo(els[5],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[5],t*3/4,{rotation:-5,scaleX:1.05,scaleY:0.95},{rotation:15,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[5],t/2,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:-8,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t*1.5);
tl.fromTo(els[5],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*2.5);
tl.to(els[5],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*2.5);
tl.to(els[5],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*3.5);
tls.push(tl);
// el7 - A
tl = new TimelineMax({delay:t*6.5});
tl.fromTo(els[6],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[6],t/4,{rotation:5,scaleX:1.05,scaleY:0.95},{rotation:-15,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[6],t/2,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:8,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t*0.5);
tl.fromTo(els[6],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*1.5);
tl.to(els[6],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*1.5);
tl.to(els[6],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*2.5);
tls.push(tl);
// el8 - N
tl = new TimelineMax({delay:t*7.0});
tl.fromTo(els[7],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[7],t/4,{rotation:-5,scaleX:1.05,scaleY:0.95},{rotation:15,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[7],t/4,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:-8,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t*0.5);
tl.fromTo(els[7],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*1);
tl.to(els[7],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*1);
tl.to(els[7],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*2);
tls.push(tl);
// el9 - A
tl = new TimelineMax({delay:t*7.5});
tl.fromTo(els[8],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[8],t/4,{rotation:5,scaleX:1.05,scaleY:0.95},{rotation:-15,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[8],t*3/4,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:8,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t*0.5);
tl.fromTo(els[8],t*3/4,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:-3,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t*2);
tl.fromTo(els[8],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*3.5);
tl.to(els[8],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*3.5);
tl.to(els[8],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*4.5);
tls.push(tl);
// el10 - N
tl = new TimelineMax({delay:t*8.0});
tl.fromTo(els[9],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[9],t/4,{rotation:-5,scaleX:1.05,scaleY:0.95},{rotation:15,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[9],t*3/4,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:-8,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t*0.5);
tl.fromTo(els[9],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*2);
tl.to(els[9],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*2);
tl.to(els[9],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*3);
tls.push(tl);
// el11 - A
tl = new TimelineMax({delay:t*8.5});
tl.fromTo(els[10],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[10],t/4,{rotation:5,scaleX:1.05,scaleY:0.95},{rotation:-15,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[10],t/2,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:8,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t*0.5);
tl.fromTo(els[10],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*1.5);
tl.to(els[10],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*1.5);
tl.to(els[10],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*2.5);
tls.push(tl);
// el12 - S
tl = new TimelineMax({delay:t*9.0});
tl.fromTo(els[11],t/2,{opacity:0},{opacity:1},0);
tl.fromTo(els[11],t*3/4,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:15,scaleX:1.2,scaleY:1.3,yoyo:true,repeat:1,ease:Cubic.easeOut},0);
tl.fromTo(els[11],t*3/4,{rotation:0,scaleX:1.05,scaleY:0.95},{rotation:-3,scaleX:0.95,scaleY:1.15,yoyo:true,repeat:1,ease:Cubic.easeOut},t*1.5);
tl.fromTo(els[11],t/2,{scaleX:1.05,scaleY:0.95},{scaleX:0.95,scaleY:1.15,yoyo:true,repeat:-1,ease:Cubic.easeOut},t*3);
tl.to(els[11],t,{rotation:3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*3);
tl.to(els[11],t,{rotation:-3,repeat:-1,repeatDelay:t,ease:thereAndBackEase,overwrite:0},t*4);
tls.push(tl);
// fade out
els.forEach(function(el,idx) {
    master.to(el,t*4,{opacity:0,ease:Sine.easeInOut,onComplete:!idx?playAll:undefined},t*20);
});
// add tls to master and play
tls.forEach(function(tl) { master.add(tl,0); });
function playAll() {
    master.restart(true);
    tls.forEach(function(tl) { tl.restart(true); });
}
function stopAll() {
    master.pause();
    tls.forEach(function(tl) { tl.pause(); });
}
// restart on click
document.body.addEventListener('click', playAll);
