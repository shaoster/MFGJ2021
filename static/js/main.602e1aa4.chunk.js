(this.webpackJsonpmfgj202106=this.webpackJsonpmfgj202106||[]).push([[0],{164:function(e,t,a){},165:function(e,t,a){},308:function(e,t){},311:function(e,t,a){"use strict";a.r(t);var n,s,r=a(5),c=a(25),i=a.n(c),l=(a(164),a(165),a(154)),O=a(16),o=a(15),d=a(337),E=a(339),N=a(14),u=a(21),F=a(334),I=a(335),h=a(336),R=a(46),b=a(344),T=a(343),j=a(0),p=a(1),G=16,m=60/352;!function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON",e[e.ACCENT=2]="ACCENT"}(n||(n={})),function(e){e[e.INCREMENT=0]="INCREMENT",e[e.DECREMENT=1]="DECREMENT",e[e.ZERO=2]="ZERO",e[e.MAX=3]="MAX",e[e.SHIFT_UP=4]="SHIFT_UP",e[e.SHIFT_RIGHT=5]="SHIFT_RIGHT",e[e.SHIFT_DOWN=6]="SHIFT_DOWN",e[e.SHIFT_LEFT=7]="SHIFT_LEFT",e[e.IGNORE=8]="IGNORE"}(s||(s={}));var C=function(e,t){var a,r=Object(N.a)(t.steps),c=Object(O.a)(e.entries());try{var i=function(){var e=Object(o.a)(a.value,2),c=e[0],i=e[1];r[c]=function(){var e=t.steps[c];switch(i){case s.INCREMENT:return e===n.OFF?n.ON:n.ACCENT;case s.DECREMENT:return e===n.ACCENT?n.ON:n.OFF;case s.MAX:return n.ACCENT;case s.ZERO:return n.OFF;case s.SHIFT_UP:return c+4>G?n.OFF:t.steps[c+4];case s.SHIFT_RIGHT:return c%4===0?n.OFF:t.steps[c-1];case s.SHIFT_DOWN:return c-4<0?n.OFF:t.steps[c-4];case s.SHIFT_LEFT:return c%4+1===4?n.OFF:t.steps[c+1];default:return e}}()};for(c.s();!(a=c.n()).done;)i()}catch(l){c.e(l)}finally{c.f()}t.steps=r},f=function(){function e(t,a,n){Object(j.a)(this,e),this.title=void 0,this.description=void 0,this.image=void 0,this.sampleTarget=void 0,this.pattern=void 0,this.title=t.title,this.description=t.description,this.image=t.image,this.pattern=a,this.sampleTarget=n}return Object(p.a)(e,[{key:"playCard",value:function(e){var t,a=Object(O.a)(e.playerParts);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.sample===this.sampleTarget&&(this.pattern&&C(this.pattern,n))}}catch(s){a.e(s)}finally{a.f()}}}]),e}(),v={makeBed:new f({title:"Make Bed",description:"If you make your bed every morning, you will have accomplished the first task of the day."},[s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),cleanChest:new f({title:"Clean Chest",description:"Next to the bed is a small chest for your personal belongings. It's a bit dusty."},[s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),layFlat:new f({title:"Lay Flat",description:"Lay your shirt flat on your bed. The foundation of any laundry folding routine."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),fold:new f({title:"Fold",description:"Fold your shirt. Add some complexity! (Assuming you have something to start with...)"},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),putAway:new f({title:"Put Away",description:"Put away your freshly folded clothes."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),drop:new f({title:"The Mess",description:"Oops! You dropped your [?] all over the floor. What a mess..."},[s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX],"bd"),mop:new f({title:"Mop",description:"Mop the floor. This mess might be a bit too much to soak up though."},[s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT],"bd"),sweep:new f({title:"Sweep",description:"Sweep the floor. It's a bit hard to get the corners though.."},[s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE],"bd"),vacuum:new f({title:"Vacuum",description:"Suck up whatever is left."},[s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT],"bd"),emptyTrash:new f({title:"Empty Trash",description:"Those bins were chalk full of [???]! Much better now..."},[s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE],"bd"),feast:new f({title:"Feast",description:"What a delicious meal! What are we going to do about all the dishes?"},[s.INCREMENT,s.INCREMENT,s.IGNORE,s.IGNORE,s.INCREMENT,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.MAX,s.MAX],"ch"),rearrange:new f({title:"Rearrange",description:"All the chairs and tables have been moved away from their original places!"},[s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT],"ch"),bus:new f({title:"Bus",description:"What a delicious meal! What are we going to do about all the dishes?"},[s.SHIFT_LEFT,s.SHIFT_LEFT,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.IGNORE,s.IGNORE,s.SHIFT_UP,s.SHIFT_DOWN,s.IGNORE,s.IGNORE,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_RIGHT,s.SHIFT_RIGHT],"ch"),rinse:new f({title:"Rinse",description:"Rinse the dishes. This will make them easier to clean."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"ch"),scour:new f({title:"Scour",description:"Scour the dishes. Really put your back into it."},[s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_DOWN,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT],"ch"),dry:new f({title:"Dry",description:"Let the dishes dry. What a lovely sight!"},[s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT],"ch"),laundry:new f({title:"Laundry",description:"Do the laundry. You know how!"},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),floor:new f({title:"Floor",description:"Clean the floor. You know how!"},[s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),dishes:new f({title:"Dishes",description:"Do the dishes. You know how!"},[s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE],"ch")},S=a(4),g=a(312),y=a(341),x=a(333),H=a(13),_=["classSequence"],M=["parts","currentlyPlayingStep","tabIndex","setTabIndex"],w=["parts","currentlyPlayingStep","tabIndex","setTabIndex"];function A(e){var t=e.classSequence,a=(Object(u.a)(e,_),Object(R.chunk)(t,4));return Object(H.jsx)(H.Fragment,{children:a.map((function(e,t){return Object(H.jsx)("tr",{className:"row",children:e.map((function(e,t){return Object(H.jsx)("td",{className:e,children:Object(H.jsx)(g.a,{className:"step",variant:"outlined"})},"col "+t)}))},"row "+t)}))})}function k(e){var t=e.parts,a=e.currentlyPlayingStep,s=e.tabIndex,c=e.setTabIndex,i=Object(u.a)(e,M),l=t[s],O=l.steps,o=l.sample,d=Object(R.take)(O,G).map((function(e,t){var s="cell ";return s+=n[e]+" ",null!==a&&t===a%G&&(s+="playing"),s}));return Object(r.createElement)("table",Object(S.a)(Object(S.a)({},i),{},{key:s}),Object(H.jsx)("caption",{children:Object(H.jsx)(y.a,{variant:"fullWidth",value:s,onChange:function(e,t){return c(t)},className:"part-selector",children:t.map((function(e,t){return Object(H.jsx)(x.a,{label:e.sample,style:{minWidth:48}},"tab "+t)}))})}),Object(H.jsx)("tbody",{className:o,children:Object(H.jsx)(A,{classSequence:d})}))}function D(e){var t=e.parts,a=e.currentlyPlayingStep,n=e.tabIndex,s=e.setTabIndex,r=Object(u.a)(e,w);return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(k,Object(S.a)({parts:t,tabIndex:n,setTabIndex:s,currentlyPlayingStep:a},r))})}var L=["cards","buttonLabel","onClickCard","unremovable","className","emphasizeButton"];function P(e){var t,a=e.cardId,n=e.cardIndex,r=e.buttonLabel,c=e.onClickCard,i=e.onClickEnabled,l=e.viewCard,O=e.isSelected,o=e.emphasizeButton,E=v[a],N=null===(t=E.pattern)||void 0===t?void 0:t.map((function(e){return"cell "+s[e]}));return Object(H.jsxs)(F.a,{variant:"outlined",className:"card "+E.sampleTarget+(O?" selected":""),onClick:l,children:[Object(H.jsx)(I.a,{children:N&&Object(H.jsx)("table",{className:"pattern",children:Object(H.jsx)("tbody",{children:Object(H.jsx)(A,{classSequence:N})})})}),Object(H.jsx)(h.a,{children:i&&Object(H.jsx)(d.a,{variant:"contained",onClick:function(){return c(n)},disabled:!O,className:o?"glow":"",children:r})})]})}var X=Object(R.range)(6).map((function(e){return"card-show"}));function W(e){var t=e.cards,a=e.buttonLabel,n=e.onClickCard,s=e.unremovable,c=e.className,i=e.emphasizeButton,l=(Object(u.a)(e,L),Object(r.useState)(0)),O=Object(o.a)(l,2),d=O[0],E=O[1],F=Object(r.useState)(X),I=Object(o.a)(F,2),h=I[0],R=I[1],j=Object(r.useState)(t.length),p=Object(o.a)(j,2),G=p[0],m=p[1];Object(r.useEffect)((function(){if(t.length!==G)return R(X),E(0),void m(t.length);for(var e=Object(N.a)(X),a=function(t){var a=t<d?"displace":"show";e[t]="card-"+a},n=0;n<6;n++)a(n);R(e)}),[t,G,d]);var C=function(e){e>=s&&n(e)};return Object(H.jsx)("div",{className:"sequence "+c,children:Object(H.jsx)(b.a,{component:null,children:t.map((function(e,n){return Object(H.jsx)(T.a,{exit:!0,classNames:"card",timeout:200,children:Object(H.jsx)("div",{className:"card-slot "+h[n],style:{zIndex:6-n},children:Object(H.jsx)(P,{cardId:e,cardIndex:n,buttonLabel:a,onClickCard:function(){return C(n)},onClickEnabled:n>=s,viewCard:function(){var e=n!==d?n:n<t.length-1?n+1:0;E(e)},isSelected:n===d,emphasizeButton:i})})},e+":"+n)}))})})}var B=a(40),U=a(342),Y="/mfgj202106/samples/levels/",z=[{title:"The Laundry",description:["Hey Neon, are you settled in yet?","I'm [???] and I'm a specialist in [???].","Your training starts today."],levelTrack:"".concat(Y,"unmixed_1_1_88_bpm.ogg"),targetParts:[{sample:"sd",steps:[n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF]}],startingHand:["layFlat","fold","putAway"],startingSchedule:[],hints:["Why don't we get started by doing the laundry?","**PLACE** items from your **To-Do** list on your **Schedule** and get to work!"]},{title:"The Floor",description:["Nice work on that laundry!","Let me introduce you to [???].","We're only just getting started..."],levelTrack:"".concat(Y,"unmixed_1_2_88_bpm.ogg"),targetParts:[{sample:"bd",steps:[n.ACCENT,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF]}],startingHand:["mop","sweep","vacuum","emptyTrash"],startingSchedule:["drop"],hints:["Looks like [???] made a real mess of things when [???] dropped those [???].","Not to worry, though! Cleaning is a subtractive process.","Just like with music, sometimes what's missing is heard loudest."]},{title:"After Dinner",description:["Everything's right back in its place.","You can head to the mess hall now.","[???] will serve you your dinner."],levelTrack:"".concat(Y,"unmixed_1_3_88_bpm.ogg"),targetParts:[{sample:"ch",steps:[n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF]}],startingHand:["rearrange","bus","rinse","scour","dry"],startingSchedule:["feast"],hints:["You've been working hard! You've arrived just in time for dinner.","Err.. Or rather, just in time for cleaning the tables and dishes from dinner..."]},{title:"Putting it All Together",description:["Wow, all the tables and dishes look great!","You've worked hard.","It's time to meet the master..."],levelTrack:"".concat(Y,"unmixed_1_all_88_bpm.ogg"),overrideTrackBars:12,targetParts:[{sample:"sd",steps:[n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF]},{sample:"bd",steps:[n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF]},{sample:"ch",steps:[n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF]}],startingHand:["laundry","floor","dishes"],startingSchedule:[],hints:["Show me what you've done today!"]},{title:"Day 2",description:["After the tutorial."],levelTrack:"".concat(Y,"unmixed_2_1_112_bpm.ogg"),overrideBPM:112,targetParts:[{sample:"bd",steps:[n.ON,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.ON,n.OFF,n.ON,n.OFF,n.ON,n.OFF,n.OFF,n.ON,n.OFF]},{sample:"sd",steps:[n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF]},{sample:"ch",steps:[n.ACCENT,n.ACCENT,n.ACCENT,n.ACCENT,n.OFF,n.ACCENT,n.ON,n.ON,n.ACCENT,n.ON,n.ON,n.ON,n.OFF,n.ON,n.ACCENT,n.ON]}],startingHand:[],startingSchedule:[],hints:["Things are starting to get hard..."]}];function Z(e){var t=e.turn,a=e.onDismiss,n=Object(r.useState)(t),s=Object(o.a)(n,2),c=s[0],i=s[1],l=Object(r.useState)(!0),O=Object(o.a)(l,2),d=O[0],E=O[1];Object(r.useEffect)((function(){t!==c&&E(!0)}),[c,t]);var N=function(){E(!1),i(t),a()},u=z[t-1];return Object(H.jsx)(U.a,{open:d,onClose:N,onClick:N,children:Object(H.jsx)(g.a,{variant:"outlined",className:"event-modal",children:Object(H.jsxs)("div",{className:"event-body",children:[Object(H.jsx)("h1",{children:u.title}),u.description.map((function(e,t){return Object(H.jsx)("p",{children:e},t)})),Object(H.jsx)("p",{children:Object(H.jsx)("em",{children:"Press Escape or click/tap anywhere to continue..."})})]})})})}var q=a(338);function J(e){var t=e.progress,a=e.max;return Object(H.jsx)(q.a,{className:"progress-bar",variant:"determinate",value:100*(null===t?0:t+1)/a})}var V=a(340),K=a(153),Q=a.n(K);function $(e){var t=e.G,a=e.onClick,n=t.hasClearedLevel;return Object(H.jsx)(d.a,{variant:"contained",onClick:a,disabled:!n,className:n?"glow":"",children:"Continue"})}var ee={cy:{pitch:"f4",duration:"2n"},bd:{pitch:"e4",duration:"16n"},ch:{pitch:"d4",duration:"16n"},sd:{pitch:"c4",duration:"16n"}},te=new B.b({urls:{f4:"CY/E808_CY-12[short].ogg",e4:"BD/E808_BD[short]-03.wav",d4:"CH/E808_CH-06.wav",c4:"SD/E808_SD-07.wav"},baseUrl:"/mfgj202106/samples/808/"}).toDestination();var ae=a(11),ne=function(e,t){var a,s,r,c=z[e-1],i=c.targetParts.map((function(e){return{sample:e.sample,steps:Array.from({length:G},(function(){return n.OFF}))}})),l=Object(S.a)(Object(S.a)({},c),{},{playerParts:i,playerHand:Object(N.a)(c.startingHand),playerSchedule:Object(N.a)(null!==(a=c.startingSchedule)&&void 0!==a?a:[]),hasClearedLevel:null!==(s=null===t||void 0===t?void 0:t.hasClearedLevel)&&void 0!==s&&s});return(null!==(r=c.startingSchedule)&&void 0!==r?r:[]).forEach((function(e){return v[e].playCard(l)})),l},se=function(e){var t,a=Object(O.a)(e.targetParts.entries());try{for(a.s();!(t=a.n()).done;)for(var n=Object(o.a)(t.value,2),s=n[0],r=n[1],c=e.playerParts[s],i=0;i<G;i++)if(c.steps[i]!==r.steps[i])return!1}catch(l){a.e(l)}finally{a.f()}return!0},re={moves:{playCard:function(e,t,a){var n=e.playerHand[a],s=v[n];if(!s)return ae.x;s.playCard(e),e.playerHand.splice(a,1),e.playerSchedule.push(n),se(e)&&(e.hasClearedLevel=!0)},removeCard:function(e,t,a){if(a<e.startingSchedule.length)return ae.x;var n=e.playerSchedule[a];if(!n)return ae.x;var s=ne(t.turn,e);s.playerHand=Object(N.a)(e.playerHand),s.playerHand.push(n);var r,c=Object(O.a)(e.playerSchedule.entries());try{for(c.s();!(r=c.n()).done;){var i=Object(o.a)(r.value,2),l=i[0],d=i[1];if(!(l===a||l<e.startingSchedule.length))v[d].playCard(s),s.playerSchedule.push(d)}}catch(E){c.e(E)}finally{c.f()}return se(s)&&(e.hasClearedLevel=!0),s},clearSchedule:function(e,t){return se(e)&&(e.hasClearedLevel=!0),ne(t.turn,e)},commitSchedule:function(e,t){var a,n;e.hasClearedLevel&&(null===(a=t.events)||void 0===a||null===(n=a.endTurn)||void 0===n||n.call(a))}},turn:{onBegin:function(e,t){return ne(t.turn)}}},ce=Object(l.a)({game:re,board:function(e){var t=e.G,a=e.ctx,s=e.moves,c=t.title,i=t.hasClearedLevel,l=t.hints,N=t.levelTrack,u=t.playerParts,F=t.targetParts,I=t.playerHand,h=t.playerSchedule,b=t.startingSchedule,j=t.overrideTrackBars,p=t.overrideBPM,C=null!==j&&void 0!==j?j:4,f=null!==p&&void 0!==p?p:88;Object(r.useEffect)((function(){return B.d.bpm.value=f,B.e(),B.d.start(),function(){B.d.stop()}}),[f]);var S=Object(r.useState)(l),g=Object(o.a)(S,2),y=g[0],x=g[1],_=Object(r.useState)(0),M=Object(o.a)(_,2),w=M[0],A=M[1];Object(r.useEffect)((function(){if(h.length===b.length&&x(l),h.length>0){var e=v[h[h.length-1]],t=u.findIndex((function(t){return t.sample===e.sampleTarget}));t>=0&&A(t)}}),[l,u,h,b.length]),Object(r.useEffect)((function(){A(0)}),[a.turn]);var k=Object(r.useState)(null),L=Object(o.a)(k,2),P=L[0],X=L[1],U=Object(r.useState)(null),Y=Object(o.a)(U,2),z=Y[0],q=Y[1],K=Object(r.useState)(void 0),ae=Object(o.a)(K,2),ne=ae[0],se=ae[1],re=Object(r.useState)(!1),ce=Object(o.a)(re,2),ie=ce[0],le=ce[1],Oe=Object(r.useState)(!0),oe=Object(o.a)(Oe,2),de=oe[0],Ee=oe[1],Ne=Object(r.useState)(null),ue=Object(o.a)(Ne,2),Fe=ue[0],Ie=ue[1],he=Object(r.useState)(null),Re=Object(o.a)(he,2),be=Re[0],Te=Re[1],je=function(e,t){se(e),X(t)},pe=function(){if(!ie){var e=new B.c(je,Object(R.range)(G*C+1),"16n");Ge(),Te(e);var t=new B.a(N,(function(){le(!0),B.e(),e.loop=!1,e.start()})).toDestination();Ie(t),t.loop=!1,t.autostart=!0}},Ge=Object(r.useCallback)((function(){ie&&(se(void 0),q(null),X(null),null===be||void 0===be||be.stop(),Te(null),null===Fe||void 0===Fe||Fe.stop(),Ie(null),le(!1),Ee(!0))}),[ie,be,Fe]);return Object(r.useEffect)((function(){if(z!==P&&"undefined"!==typeof ne&&null!==P&&ie)if(P>=G*C)Ge();else{q(P);var e,t=P%G,a=de?u:F,s=Object(O.a)(a);try{for(s.s();!(e=s.n()).done;){var r=e.value;r.steps[t]!==n.OFF&&te.triggerAttackRelease(ee[r.sample].pitch,ee[r.sample].duration,ne,r.steps[t]/2)}}catch(c){s.e(c)}finally{s.f()}}}),[ne,u,F,P,z,de,ie,Ge,C]),Object(H.jsxs)(E.a,{container:!0,className:"game-board",alignItems:"center",justify:"center",children:[Object(H.jsx)(Z,{turn:a.turn,onDismiss:function(){Ee(!1),pe()}}),Object(H.jsx)(E.a,{item:!0,xs:12,children:Object(H.jsxs)("h1",{children:[a.turn,": ",c]})},"title"),Object(H.jsx)(E.a,{item:!0,xs:3,className:"pc-area portrait-area",children:Object(H.jsx)("div",{className:"pc portrait",children:Object(H.jsx)(d.a,{variant:"contained",disabled:de,className:de?"selected":"",onClick:function(){Ee(!0),pe()},children:"My Parts"})})},"pc-area"),Object(H.jsxs)(E.a,{item:!0,xs:6,className:"parts-area",children:[Object(H.jsxs)(E.a,{container:!0,className:"parts",justify:"center",children:[Object(H.jsx)(E.a,{item:!0,xs:1,children:ie&&Object(H.jsx)("span",{children:((null!==P&&void 0!==P?P:0)*m).toFixed(1)})},"time-elapsed"),Object(H.jsx)(E.a,{item:!0,xs:10,children:Object(H.jsx)(J,{progress:P,max:C*G})},"progress"),Object(H.jsx)(E.a,{item:!0,xs:1,children:ie&&Object(H.jsx)("span",{children:((C*G-(null!==P&&void 0!==P?P:0))*m).toFixed(1)})},"time-remaining"),Object(H.jsx)(E.a,{item:!0,xs:12,className:"start-stop",children:Object(H.jsx)(d.a,{className:ie?"stop":"play",onClick:ie?Ge:pe,children:"\xa0"})},"start-stop"),Object(H.jsx)(E.a,{item:!0,xs:12,className:"current-parts",children:Object(H.jsx)(V.a,{children:Object(H.jsx)(T.a,{timeout:200,classNames:de?"current":"target",children:Object(H.jsx)(D,{parts:de?u:F,currentlyPlayingStep:P,className:"sampler "+(de?"current":"target"),tabIndex:w,setTabIndex:A})},de?"current":"target")})})]},"parts"),Object(H.jsx)(E.a,{item:!0,xs:12,className:"dialogue",children:"undefined"!==typeof y&&Object(H.jsx)("div",{children:Object(H.jsx)(Q.a,{children:y.join("\n\n")})})})]}),Object(H.jsx)(E.a,{item:!0,xs:3,className:"npc-area portrait-area",children:Object(H.jsx)("div",{className:"npc portrait",children:Object(H.jsx)(d.a,{variant:"contained",disabled:!de,className:de?"":"selected",onClick:function(){Ee(!1),pe()},children:"Goal"})})},"npc-area"),Object(H.jsxs)(E.a,{item:!0,xs:5,className:"hand-area",children:[Object(H.jsx)("div",{className:"label",children:Object(H.jsx)("h3",{children:"To-Do"})}),Object(H.jsx)(W,{cards:I,onClickCard:function(e){s.playCard(e),Ee(!0),pe(),function(e){var t=v[I[e]];t&&x([t.description])}(e)},buttonLabel:"Place",className:"hand",unremovable:0,emphasizeButton:!i})]},"hand-area"),Object(H.jsx)(E.a,{item:!0,xs:2,className:"next-day",children:Object(H.jsxs)(E.a,{container:!0,children:[Object(H.jsx)(E.a,{item:!0,xs:12,children:Object(H.jsx)(d.a,{variant:"contained",onClick:s.clearSchedule,children:"Reset"})}),Object(H.jsx)(E.a,{item:!0,xs:12,className:"break"}),Object(H.jsx)(E.a,{item:!0,xs:12,children:Object(H.jsx)($,{G:t,onClick:function(){s.commitSchedule(),Ge()}})})]})},"next-day"),Object(H.jsxs)(E.a,{item:!0,xs:5,className:"schedule-area",children:[Object(H.jsx)("div",{className:"label",children:Object(H.jsx)("h3",{children:"Schedule"})}),Object(H.jsx)(W,{cards:h,onClickCard:function(e){s.removeCard(e),pe()},buttonLabel:"Remove",className:"schedule",unremovable:t.startingSchedule.length,emphasizeButton:!1})]},"schedule-area")]})},numPlayers:1,debug:!0}),ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,345)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(H.jsx)(ce,{}),document.getElementById("root")),ie()}},[[311,1,2]]]);
//# sourceMappingURL=main.602e1aa4.chunk.js.map