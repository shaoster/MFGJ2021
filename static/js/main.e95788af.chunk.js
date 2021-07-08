(this.webpackJsonpmfgj202106=this.webpackJsonpmfgj202106||[]).push([[0],{164:function(e,t,n){},165:function(e,t,n){},308:function(e,t){},311:function(e,t,n){"use strict";n.r(t);var a,s,r=n(5),c=n(25),i=n.n(c),l=(n(164),n(165),n(154)),o=n(16),O=n(15),E=n(337),d=n(339),I=n(21),N=n(4),u=n(334),h=n(335),R=n(336),T=n(36),G=n(344),b=n(343),F=n(0),p=n(1),j=n(14),m=16,C=60/448;!function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON",e[e.ACCENT=2]="ACCENT"}(a||(a={})),function(e){e[e.INCREMENT=0]="INCREMENT",e[e.DECREMENT=1]="DECREMENT",e[e.ZERO=2]="ZERO",e[e.MAX=3]="MAX",e[e.SHIFT_UP=4]="SHIFT_UP",e[e.SHIFT_RIGHT=5]="SHIFT_RIGHT",e[e.SHIFT_DOWN=6]="SHIFT_DOWN",e[e.SHIFT_LEFT=7]="SHIFT_LEFT",e[e.IGNORE=8]="IGNORE"}(s||(s={}));var f=function(e,t){var n,r=Object(j.a)(t.steps),c=Object(o.a)(e.entries());try{var i=function(){var e=Object(O.a)(n.value,2),c=e[0],i=e[1];r[c]=function(){var e=t.steps[c];switch(i){case s.INCREMENT:return e===a.OFF?a.ON:a.ACCENT;case s.DECREMENT:return e===a.ACCENT?a.ON:a.OFF;case s.MAX:return a.ACCENT;case s.ZERO:return a.OFF;case s.SHIFT_UP:return c+4>m?a.OFF:t.steps[c+4];case s.SHIFT_RIGHT:return c%4===0?a.OFF:t.steps[c-1];case s.SHIFT_DOWN:return c-4<0?a.OFF:t.steps[c-4];case s.SHIFT_LEFT:return c%4+1===4?a.OFF:t.steps[c+1];default:return e}}()};for(c.s();!(n=c.n()).done;)i()}catch(l){c.e(l)}finally{c.f()}t.steps=r},S=function(){function e(t,n,a){Object(F.a)(this,e),this.title=void 0,this.description=void 0,this.image=void 0,this.sampleTarget=void 0,this.pattern=void 0,this.title=t.title,this.description=t.description,this.image=t.image,this.pattern=n,this.sampleTarget=a}return Object(p.a)(e,[{key:"playCard",value:function(e){var t,n=Object(o.a)(e.playerParts);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.sample===this.sampleTarget&&(this.pattern&&f(this.pattern,a))}}catch(s){n.e(s)}finally{n.f()}}}]),e}(),H={makeBed:new S({title:"Make Bed",description:"\n        ***You make your bed.***\n\n        Hmm, did you notice that sound?\n\n        Anyway, let's keep working...\n      "},[s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),cleanChest:new S({title:"Clean Chest",description:"\n        ***You clean the dusty chest beside your bed.***\n\n        I'm really not imagining this music am I?\n      "},[s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),placeBelongings:new S({title:"Place Belongings",description:"\n        ***You put your belongings into the chest.***\n\n        Whoah, that made things louder... That's pretty groovy!\n\n        Let's check back in with ??? to see what to do **NEXT**.\n      "},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),cobwebs:new S({title:"Cobwebs",description:"\n        Why don't we start by dusting away all these cobwebs?\n\n        They sure are layered pretty thick in these corners.\n      "},[s.MAX,s.INCREMENT,s.INCREMENT,s.MAX,s.INCREMENT,s.INCREMENT,s.INCREMENT,s.INCREMENT,s.INCREMENT,s.INCREMENT,s.INCREMENT,s.INCREMENT,s.MAX,s.INCREMENT,s.INCREMENT,s.MAX],"ch"),dust1:new S({title:"Dust 1",description:"\n        ***You do a quick sweep of the whole room.***\n\n        That seemed to clear things up a bunch.\n\n        Let's keep at it!\n      "},[s.IGNORE,s.DECREMENT,s.IGNORE,s.DECREMENT,s.IGNORE,s.DECREMENT,s.IGNORE,s.DECREMENT,s.IGNORE,s.DECREMENT,s.IGNORE,s.DECREMENT,s.IGNORE,s.DECREMENT,s.IGNORE,s.DECREMENT],"ch"),dust2:new S({title:"Dust 2",description:"\n        ***You scrub those hard-to-reach corners.***\n\n        Wow! This bunk is really starting to feel like home!\n\n        Too bad dust got on all the bedsheets; let's launder those ***NEXT***!\n      "},[s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE],"ch"),washBedsheets:new S({title:"Wash Bedsheets",description:"\n        ***You wash the bedsheets.***\n      "},[s.IGNORE,s.INCREMENT,s.IGNORE,s.INCREMENT,s.IGNORE,s.INCREMENT,s.IGNORE,s.INCREMENT,s.IGNORE,s.INCREMENT,s.IGNORE,s.INCREMENT,s.IGNORE,s.INCREMENT,s.INCREMENT,s.INCREMENT],"ch"),dryBedsheets:new S({title:"Dry Bedsheets",description:"\n        ***You hang your bedsheets up to dry.***\n\n      "},[s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),gatherBedsheets:new S({title:"Gather Bedsheets",description:"\n        ***You take down your now dry and fresh bedsheets.***\n\n        Cool! Even moving things around makes music too!\n      "},[s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT],"ch"),placeBedsheets:new S({title:"Place Bedsheets",description:"\n        ***You re-make the bed with the fresh bedsheets.***\n\n        I hear a knock on the door. Let's see what's ***NEXT***.\n      "},[s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_DOWN,s.SHIFT_DOWN,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_DOWN,s.SHIFT_DOWN,s.SHIFT_DOWN],"bd"),layFlat:new S({title:"Lay Flat",description:"Lay your shirt flat on your bed. The foundation of any laundry folding routine."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),fold:new S({title:"Fold",description:"Fold your shirt. Add some complexity! (Assuming you have something to start with...)"},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),putAway:new S({title:"Put Away",description:"Put away your freshly folded clothes."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),drop:new S({title:"The Mess",description:"Oops! You dropped your [?] all over the floor. What a mess..."},[s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX],"bd"),mop:new S({title:"Mop",description:"Mop the floor. This mess might be a bit too much to soak up though."},[s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT],"bd"),sweep:new S({title:"Sweep",description:"Sweep the floor. It's a bit hard to get the corners though.."},[s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE],"bd"),vacuum:new S({title:"Vacuum",description:"Suck up whatever is left."},[s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT],"bd"),emptyTrash:new S({title:"Empty Trash",description:"Those bins were chalk full of [???]! Much better now..."},[s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE],"bd"),feast:new S({title:"Feast",description:"What a delicious meal! What are we going to do about all the dishes?"},[s.INCREMENT,s.INCREMENT,s.IGNORE,s.IGNORE,s.INCREMENT,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.MAX,s.MAX],"ch"),rearrange:new S({title:"Rearrange",description:"All the chairs and tables have been moved away from their original places!"},[s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT],"ch"),bus:new S({title:"Bus",description:"What a delicious meal! What are we going to do about all the dishes?"},[s.SHIFT_LEFT,s.SHIFT_LEFT,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.IGNORE,s.IGNORE,s.SHIFT_UP,s.SHIFT_DOWN,s.IGNORE,s.IGNORE,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_RIGHT,s.SHIFT_RIGHT],"ch"),rinse:new S({title:"Rinse",description:"Rinse the dishes. This will make them easier to clean."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"ch"),scour:new S({title:"Scour",description:"Scour the dishes. Really put your back into it."},[s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_DOWN,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT],"ch"),dry:new S({title:"Dry",description:"Let the dishes dry. What a lovely sight!"},[s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT],"ch"),laundry:new S({title:"Laundry",description:"Do the laundry. You know how!"},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),floor:new S({title:"Floor",description:"Clean the floor. You know how!"},[s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),dishes:new S({title:"Dishes",description:"Do the dishes. You know how!"},[s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE],"ch")},v=n(312),g=n(341),y=n(333),x=n(13),_=["classSequence"],M=["parts","currentlyPlayingStep","tabIndex","setTabIndex"],w=["parts","currentlyPlayingStep","tabIndex","setTabIndex"];function D(e){var t=e.classSequence,n=(Object(I.a)(e,_),Object(T.chunk)(t,4));return Object(x.jsx)(x.Fragment,{children:n.map((function(e,t){return Object(x.jsx)("tr",{className:"row",children:e.map((function(e,t){return Object(x.jsx)("td",{className:e,children:Object(x.jsx)(v.a,{className:"step",variant:"outlined"})},"col "+t)}))},"row "+t)}))})}function k(e){var t=e.parts,n=e.currentlyPlayingStep,s=e.tabIndex,c=e.setTabIndex,i=Object(I.a)(e,M),l=t[s],o=l.steps,O=l.sample,E=Object(T.take)(o,m).map((function(e,t){var s="cell ";return s+=a[e]+" ",null!==n&&t===n%m&&(s+="playing"),s}));return Object(r.createElement)("table",Object(N.a)(Object(N.a)({},i),{},{key:s}),Object(x.jsx)("caption",{children:Object(x.jsx)(g.a,{variant:"fullWidth",value:s,onChange:function(e,t){return c(t)},className:"part-selector",children:t.map((function(e,t){return Object(x.jsx)(y.a,{label:e.sample,style:{minWidth:48}},"tab "+t)}))})}),Object(x.jsx)("tbody",{className:O,children:Object(x.jsx)(D,{classSequence:E})}))}function L(e){var t=e.parts,n=e.currentlyPlayingStep,a=e.tabIndex,s=e.setTabIndex,r=Object(I.a)(e,w);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k,Object(N.a)({parts:t,tabIndex:a,setTabIndex:s,currentlyPlayingStep:n},r))})}var P=["cards","buttonLabel","onClickCard","unremovable","className","emphasizeButton"];function A(e){var t,n=e.cardId,a=e.cardIndex,r=e.buttonLabel,c=e.onClickCard,i=e.onClickEnabled,l=e.viewCard,o=e.isSelected,O=e.emphasizeButton,d=e.leftOffset,I=H[n],N=null===(t=I.pattern)||void 0===t?void 0:t.map((function(e){return"cell "+s[e]}));return Object(x.jsxs)(u.a,{variant:"outlined",className:"card "+I.sampleTarget+(o?" selected":""),onClick:l,style:{marginLeft:d+"px"},children:[Object(x.jsx)(h.a,{children:N&&Object(x.jsx)("table",{className:"pattern",children:Object(x.jsx)("tbody",{children:Object(x.jsx)(D,{classSequence:N})})})}),Object(x.jsx)(R.a,{children:i?Object(x.jsx)(E.a,{variant:"contained",onClick:function(e){c(a),e.stopPropagation()},disabled:!o,className:O?"emphasis":"",children:r}):Object(x.jsx)("div",{className:"card-fixed",children:"FIXED"})})]})}var X=function(e,t){switch(t.type){case"enter":return Object(N.a)(Object(N.a)({},e),{},{renderedCardCount:e.renderedCardCount+1});case"exited":return Object(N.a)(Object(N.a)({},e),{},{renderedCardCount:e.renderedCardCount-1});case"select-card":var n=t.value!==e.selectedCard?t.value:t.value<e.cardCount-1?t.value+1:0,a=Object(T.range)(6).map((function(e){return"card-"+function(e){return e<n?"displace":"show"}(e)}));return Object(N.a)(Object(N.a)({},e),{},{cardClasses:a,selectedCard:n});case"reset":return Object(N.a)(Object(N.a)({},t.value),{},{renderedCardCount:e.renderedCardCount});default:throw new Error("Unrecognized action.")}};function W(e){var t=e.cards,n=e.buttonLabel,a=e.onClickCard,s=e.unremovable,c=e.className,i=e.emphasizeButton,l=(Object(I.a)(e,P),Object(T.range)(6).map((function(){return"card-show"}))),o=Object(r.useReducer)(X,{cardCount:t.length,selectedCard:0,cardClasses:l,renderedCardCount:t.length}),E=Object(O.a)(o,2),d=E[0],N=E[1];return Object(r.useEffect)((function(){t.length!==d.cardCount&&N({type:"reset",value:{cardCount:t.length,selectedCard:0,cardClasses:l}})}),[t.length,l,d.cardCount]),Object(x.jsx)("div",{className:"sequence "+c,children:Object(x.jsx)(G.a,{component:null,children:t.map((function(e,r){return Object(x.jsx)(b.a,{enter:!0,exit:!0,classNames:"card",timeout:200,onEnter:function(){return N({type:"enter",value:t.length})},onExited:function(){return N({type:"exited",value:t.length})},children:Object(x.jsxs)("div",{className:"card-slot "+d.cardClasses[r],style:{zIndex:6-r},children:[Object(x.jsx)(A,{cardId:e,cardIndex:r,buttonLabel:n,onClickCard:function(){return a(r)},onClickEnabled:t.length-r>s,viewCard:function(){N({type:"select-card",value:r})},isSelected:r===d.selectedCard,emphasizeButton:i,leftOffset:18*(6-d.renderedCardCount-1)}),t.length-r>s&&Object(x.jsx)("div",{className:"card-order",onClick:function(){return N({type:"select-card",value:r})},children:t.length-r-s})]})},e)}))})})}var B=n(41),U=n(342),Y="/mfgj202106/samples/levels/",z=[{title:"The Bunk: Part I",description:["Welcome Neon!","I'm [???], and I'm supposed to show you to your bunk.","Your training starts tomorrow, so why don't you get settled first?"],levelTrack:"".concat(Y,"unmixed_3_1_112_bpm.ogg"),targetParts:[{sample:"bd",steps:[a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF,a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF]}],startingHand:["makeBed","cleanChest","placeBelongings"],startingSchedule:[],hints:["**PLACE** items from your **To-Do** list on your **Schedule** and get to work!","Keep an eye on what happens when you add a task to your schedule!"]},{title:"The Bunk: Part II",description:["Hmmm... I can't seem to find ??? anywhere.","Might as well keep cleaning.","Let's make this bunk sparkle!"],levelTrack:"".concat(Y,"unmixed_3_1_112_bpm.ogg"),targetParts:[{sample:"ch",steps:[a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.ON]}],startingHand:["dust1","dust2"],startingSchedule:["cobwebs"],hints:["Why don't we start by dusting away all these cobwebs?","They sure are layered pretty thick in these corners."]},{title:"The Bunk: Part III",description:["??? is still nowhere to be found.","Might as well clean those bedsheets then."],levelTrack:"".concat(Y,"unmixed_3_1_112_bpm.ogg"),targetParts:[{sample:"ch",steps:[a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.ON]},{sample:"bd",steps:[a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF,a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF]}],startingHand:["washBedsheets","dryBedsheets","gatherBedsheets","placeBedsheets"],startingSchedule:[],hints:["Is the music guiding me somehow?"]}];function Z(e){var t=e.turn,n=e.onDismiss,a=Object(r.useState)(t),s=Object(O.a)(a,2),c=s[0],i=s[1],l=Object(r.useState)(!0),o=Object(O.a)(l,2),E=o[0],d=o[1];Object(r.useEffect)((function(){t!==c&&d(!0)}),[c,t]);var I=function(){d(!1),i(t),n()},N=z[t-1];return Object(x.jsx)(U.a,{open:E,onClose:I,onClick:I,children:Object(x.jsx)(v.a,{variant:"outlined",className:"event-modal",children:Object(x.jsxs)("div",{className:"event-body",children:[Object(x.jsx)("h1",{children:N.title}),N.description.map((function(e,t){return Object(x.jsx)("p",{children:e},t)})),Object(x.jsx)("p",{children:Object(x.jsx)("em",{children:"Press Escape or click/tap anywhere to continue..."})})]})})})}var q=n(338);function J(e){var t=e.progress,n=e.max;return Object(x.jsx)(q.a,{className:"progress-bar",variant:"determinate",value:100*(null===t?0:t+1)/n})}var K=n(340),V=n(153),$=n.n(V);function Q(e){for(var t,n,a,s=/^([ \t]*)(.*)\n/gm;null!==(n=s.exec(e));)if(n[2]){if(!(t=n[1].length))break;a=void 0!==a?Math.min(a,t):t}return a&&(e=e.replace(new RegExp("^[ \t]{"+a+"}(.*\n)","gm"),"$1")),e}function ee(e){var t=e.G,n=e.onClick,a=t.hasClearedLevel;return Object(x.jsx)(E.a,{variant:"contained",onClick:n,disabled:!a,className:a?"glow":"",children:"next"})}var te={cy:{pitch:"f4",duration:"2n"},bd:{pitch:"e4",duration:"16n"},ch:{pitch:"d4",duration:"16n"},sd:{pitch:"c4",duration:"16n"}},ne=new B.b({urls:{f4:"CY/E808_CY-12[short].ogg",e4:"BD/E808_BD[short]-03.wav",d4:"CH/E808_CH-06.wav",c4:"SD/E808_SD-07.wav"},baseUrl:"/mfgj202106/samples/808/"}).toDestination();var ae=n(11),se=function(e,t){var n,s,r,c=z[e-1],i=c.targetParts.map((function(e){return{sample:e.sample,steps:Array.from({length:m},(function(){return a.OFF}))}})),l=Object(N.a)(Object(N.a)({},c),{},{playerParts:i,playerHand:Object(j.a)(c.startingHand),playerSchedule:Object(j.a)(null!==(n=c.startingSchedule)&&void 0!==n?n:[]),hasClearedLevel:null!==(s=null===t||void 0===t?void 0:t.hasClearedLevel)&&void 0!==s&&s});return(null!==(r=c.startingSchedule)&&void 0!==r?r:[]).forEach((function(e){return H[e].playCard(l)})),l},re=function(e){var t,n=Object(o.a)(e.targetParts.entries());try{for(n.s();!(t=n.n()).done;)for(var a=Object(O.a)(t.value,2),s=a[0],r=a[1],c=e.playerParts[s],i=0;i<m;i++)if(c.steps[i]!==r.steps[i])return!1}catch(l){n.e(l)}finally{n.f()}return!0},ce={moves:{playCard:function(e,t,n){var a=e.playerHand[n],s=H[a];if(!s)return ae.x;s.playCard(e),e.playerHand.splice(n,1),e.playerSchedule.unshift(a),re(e)&&(e.hasClearedLevel=!0)},removeCard:function(e,t,n){if(e.playerSchedule.length-n<=e.startingSchedule.length)return ae.x;var a=e.playerSchedule[n];if(!a)return ae.x;var s=se(t.turn,e);s.playerHand=Object(j.a)(e.playerHand),s.playerHand.unshift(a);var r=Object(T.reverse)(Object(j.a)(e.playerSchedule));console.log(r);var c,i=Object(o.a)(r.entries());try{for(i.s();!(c=i.n()).done;){var l=Object(O.a)(c.value,2),E=l[0],d=l[1];if(e.playerSchedule.length-E-1!==n)if(!(E<e.startingSchedule.length))H[d].playCard(s),s.playerSchedule.unshift(d)}}catch(I){i.e(I)}finally{i.f()}return re(s)&&(e.hasClearedLevel=!0),s},clearSchedule:function(e,t){return re(e)&&(e.hasClearedLevel=!0),se(t.turn,e)},commitSchedule:function(e,t){var n,a;e.hasClearedLevel&&(null===(n=t.events)||void 0===n||null===(a=n.endTurn)||void 0===a||a.call(n))}},turn:{onBegin:function(e,t){return se(t.turn)}}},ie=Object(l.a)({game:ce,board:function(e){var t=e.G,n=e.ctx,s=e.moves,c=t.title,i=t.hasClearedLevel,l=t.hints,I=t.levelTrack,N=t.playerParts,u=t.targetParts,h=t.playerHand,R=t.playerSchedule,G=t.startingSchedule,F=t.overrideTrackBars,p=t.overrideBPM,j=null!==F&&void 0!==F?F:4,f=null!==p&&void 0!==p?p:112;Object(r.useEffect)((function(){return B.d.bpm.value=f,B.e(),B.d.start(),function(){B.d.stop()}}),[f]);var S=Object(r.useState)(l),v=Object(O.a)(S,2),g=v[0],y=v[1],_=Object(r.useState)(0),M=Object(O.a)(_,2),w=M[0],D=M[1];Object(r.useEffect)((function(){if(R.length===G.length&&y(l),R.length>0){var e=H[R[0]],t=N.findIndex((function(t){return t.sample===e.sampleTarget}));t>=0&&D(t)}}),[l,N,R,G.length]),Object(r.useEffect)((function(){D(0)}),[n.turn]);var k=Object(r.useState)(null),P=Object(O.a)(k,2),A=P[0],X=P[1],U=Object(r.useState)(null),Y=Object(O.a)(U,2),z=Y[0],q=Y[1],V=Object(r.useState)(void 0),ae=Object(O.a)(V,2),se=ae[0],re=ae[1],ce=Object(r.useState)(!1),ie=Object(O.a)(ce,2),le=ie[0],oe=ie[1],Oe=Object(r.useState)(!0),Ee=Object(O.a)(Oe,2),de=Ee[0],Ie=Ee[1],Ne=Object(r.useState)(null),ue=Object(O.a)(Ne,2),he=ue[0],Re=ue[1],Te=Object(r.useState)(null),Ge=Object(O.a)(Te,2),be=Ge[0],Fe=Ge[1],pe=function(e,t){re(e),X(t)},je=function(){if(!le){var e=new B.c(pe,Object(T.range)(m*j+1),"16n");me(),Fe(e);var t=new B.a(I,(function(){oe(!0),B.e(),e.loop=!1,e.start()})).toDestination();Re(t),t.loop=!1,t.autostart=!0}},me=Object(r.useCallback)((function(){le&&(re(void 0),q(null),X(null),null===be||void 0===be||be.stop(),Fe(null),null===he||void 0===he||he.stop(),Re(null),oe(!1),Ie(!0))}),[le,be,he]);return Object(r.useEffect)((function(){if(z!==A&&"undefined"!==typeof se&&null!==A&&le)if(A>=m*j)me();else{q(A);var e,t=A%m,n=de?N:u,s=Object(o.a)(n);try{for(s.s();!(e=s.n()).done;){var r=e.value;r.steps[t]!==a.OFF&&ne.triggerAttackRelease(te[r.sample].pitch,te[r.sample].duration,se,r.steps[t]/2)}}catch(c){s.e(c)}finally{s.f()}}}),[se,N,u,A,z,de,le,me,j]),Object(x.jsxs)(d.a,{container:!0,className:"game-board",alignItems:"center",justify:"center",children:[Object(x.jsx)(Z,{turn:n.turn,onDismiss:function(){Ie(!1),je()}},"ld:"+n.turn),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)("h1",{children:c})},"title"),Object(x.jsx)(d.a,{item:!0,xs:3,className:"pc-area portrait-area",children:Object(x.jsx)("div",{className:"pc portrait",children:Object(x.jsx)(E.a,{variant:"contained",disabled:de,className:de?"selected":"",onClick:function(){Ie(!0),je()},children:"My Parts"})})},"pc-area"),Object(x.jsxs)(d.a,{item:!0,xs:6,className:"parts-area",children:[Object(x.jsxs)(d.a,{container:!0,className:"parts",justify:"center",children:[Object(x.jsx)(d.a,{item:!0,xs:1,children:le&&Object(x.jsx)("span",{children:((null!==A&&void 0!==A?A:0)*C).toFixed(1)})},"time-elapsed"),Object(x.jsx)(d.a,{item:!0,xs:10,children:Object(x.jsx)(J,{progress:A,max:j*m})},"progress"),Object(x.jsx)(d.a,{item:!0,xs:1,children:le&&Object(x.jsx)("span",{children:((j*m-(null!==A&&void 0!==A?A:0))*C).toFixed(1)})},"time-remaining"),Object(x.jsx)(d.a,{item:!0,xs:12,className:"start-stop",children:Object(x.jsx)(E.a,{className:le?"stop":"play",onClick:le?me:je,children:"\xa0"})},"start-stop"),Object(x.jsx)(d.a,{item:!0,xs:12,className:"current-parts",children:Object(x.jsx)(K.a,{children:Object(x.jsx)(b.a,{timeout:200,classNames:de?"current":"target",children:Object(x.jsx)(L,{parts:de?N:u,currentlyPlayingStep:A,className:"sampler "+(de?"current":"target"),tabIndex:w,setTabIndex:D})},de?"current":"target")})})]},"parts"),Object(x.jsx)(d.a,{item:!0,xs:12,className:"dialogue",children:"undefined"!==typeof g&&Object(x.jsx)("div",{children:Object(x.jsx)($.a,{children:Q(g.join("\n\n"))})})})]}),Object(x.jsx)(d.a,{item:!0,xs:3,className:"npc-area portrait-area",children:Object(x.jsx)("div",{className:"npc portrait",children:Object(x.jsx)(E.a,{variant:"contained",disabled:!de,className:de?"":"selected",onClick:function(){Ie(!1),je()},children:"Goal"})})},"npc-area"),Object(x.jsxs)(d.a,{item:!0,xs:5,className:"hand-area",children:[Object(x.jsx)("div",{className:"label",children:Object(x.jsx)("h3",{children:"To-Do"})}),Object(x.jsx)(W,{cards:h,onClickCard:function(e){s.playCard(e),Ie(!0),je(),function(e){var t=H[h[e]];t&&y([t.description])}(e)},buttonLabel:"Place",className:"hand",unremovable:0,emphasizeButton:!i},"hand:"+n.turn)]},"hand-area"),Object(x.jsx)(d.a,{item:!0,xs:2,className:"next-day",children:Object(x.jsxs)(d.a,{container:!0,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(E.a,{variant:"contained",onClick:s.clearSchedule,children:"Reset"})}),Object(x.jsx)(d.a,{item:!0,xs:12,className:"break"}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(ee,{G:t,onClick:function(){s.commitSchedule(),me()}})})]})},"next-day"),Object(x.jsxs)(d.a,{item:!0,xs:5,className:"schedule-area",children:[Object(x.jsx)("div",{className:"label",children:Object(x.jsx)("h3",{children:"Schedule"})}),Object(x.jsx)(W,{cards:R,onClickCard:function(e){s.removeCard(e),je()},buttonLabel:"Remove",className:"schedule",unremovable:t.startingSchedule.length,emphasizeButton:!1},"schedule:"+n.turn)]},"schedule-area")]})},numPlayers:1,debug:!0}),le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,345)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(x.jsx)(ie,{}),document.getElementById("root")),le()}},[[311,1,2]]]);
//# sourceMappingURL=main.e95788af.chunk.js.map