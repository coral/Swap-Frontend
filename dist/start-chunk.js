(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(e,t,n){e.exports={getRandomLatinSquare:n(183)}},183:function(e,t){e.exports=((e,t=null)=>{let n=Array.from({length:e},(t,n)=>Array.from({length:e},(e,t)=>n!==t?0:1)),a=n.map((t,a)=>[...n.slice(a-e,e).map(e=>[...e]),...n.slice(0,a-e).map(e=>[...e])]),o=!0,r=null;t=t||e*e*e;for(let n=0;n<t||!o;n++){let t,n=Array(3),s=Array(3);if(o){do{n=[Math.floor(Math.random()*e),Math.floor(Math.random()*e),Math.floor(Math.random()*e)]}while(0!=a[n[0]][n[1]][n[2]]);for(t=0;0==a[t][n[1]][n[2]];t++);for(s[0]=t,t=0;0==a[n[0]][t][n[2]];t++);for(s[1]=t,t=0;0==a[n[0]][n[1]][t];t++);s[2]=t}else{n=r;let o=[[],[],[]];for(t=0;t<e;t++)1==a[t][n[1]][n[2]]&&o[0].push(t),1==a[n[0]][t][n[2]]&&o[1].push(t),1==a[n[0]][n[1]][t]&&o[2].push(t);s[0]=o[0][Math.floor(Math.random()*o[0].length)],s[1]=o[1][Math.floor(Math.random()*o[1].length)],s[2]=o[2][Math.floor(Math.random()*o[2].length)]}a[n[0]][n[1]][n[2]]++,a[n[0]][s[1]][s[2]]++,a[s[0]][s[1]][n[2]]++,a[s[0]][n[1]][s[2]]++,a[n[0]][n[1]][s[2]]--,a[n[0]][s[1]][n[2]]--,a[s[0]][n[1]][n[2]]--,a[s[0]][s[1]][s[2]]--,(o=-1!=a[s[0]][s[1]][s[2]])||(r=[...s])}let s=n;for(let t=0;t<e;t++)for(let n=0;n<e;n++)for(let o=0;o<e;o++)if(1==a[t][n][o]){s[t][n]=o;break}return s})},184:function(e,t,n){"use strict";var a=n(99);n.n(a).a},185:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,"\n.sub-label[data-v-42f730c0]{text-align:center;font-style:italic;font-size:0.9em\n}\n.youtube[data-v-42f730c0]{max-width:100%\n}\n",""])},278:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("hero",{attrs:{title:"Welcome to Monsquaz Swap!",subtitle:"A collaborative project management system that can yield fantastic, unexpected results"}}),e._v(" "),n("div",{staticClass:"columns is-centered"},[n("section",{staticClass:"content-box column is-two-thirds"},[n("div",[n("h3",[e._v("Relay writing generalized and improved")]),e._v(" "),n("p",[e._v("We came up with a fun idea in 2011. That a few people would come together and start composing one song each,\n        based on the same set of sound samples.\n        Each person would then swap their song for a different one and continue working on it,\n        until everyone had contributed to everyone else's song - and we'd end up with an album.")]),e._v(" "),n("h3",[e._v("Randomized swaps")]),e._v(" "),n("p",[e._v("In relay writing, you'd usually sit in a circle and pass your work along to the right. This means that when there's a new round,\n        it's always the same person who would have worked on your story right before you. This is a big creativity issue,\n        since the same person would have to interpret the same person's last work for all of the stories.")]),e._v(" "),e._m(0),e._v(" "),n("swap-schedule",{attrs:{schedule:e.swapSchedule}}),e._v(" "),n("div",{staticClass:"sub-label"},[e._v("\n            Example schedule."),n("br"),e._v("\n            Song "+e._s(e.exampleSongIndex+1)+" gets passed through\n            "+e._s(e.swapSchedule.map(function(t){return t[e.exampleSongIndex].title}).slice(0,-1).join(" → "))+"\n              and is finnished by\n              "+e._s(e.swapSchedule[e.swapSchedule.length-1][e.exampleSongIndex].title)+"\n          ")]),e._v(" "),n("h3",[e._v("Anonymous")]),e._v(" "),n("p",[e._v("To spice things up further, the schedule will be hidden from participants")]),e._v(" "),n("h3",[e._v("Annual Monsquaz Swap")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("h3",[e._v("Not just for music!")]),e._v(" "),n("p",[e._v("We made this service to simplify the work involved for hosting our own events like this,\n          but we're also making it available for you to use for events of your own - with other kinds of files.\n        ")])],1)])])],1)},o=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Instead, we generate swapping schedules as random "),t("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Latin_square"}},[this._v("Latin Squares")]),this._v(" in this fashion;")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Our initial series of events will be hosted annually. "),t("i",[this._v("If you appreciate this service, we ask you not for donations,\n          but for your participation in one of these events.")]),this._v(" Musical skill is not required.\n          Some of the more interesting pieces will emerge as a result of experienced composers working on inexperiences composers' work.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[t("iframe",{staticClass:"youtube",attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/e-PYALxcdrM?start=32",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}),this._v(" "),t("div",{staticClass:"sub-label"},[this._v("Video from our latest annual event")])])}];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},57:function(e,t,n){"use strict";n.r(t);var a=n(278),o=n(97);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n(184);var s=n(4),i=Object(s.a)(o.default,a.a,a.b,!1,null,"42f730c0",null);t.default=i.exports},97:function(e,t,n){"use strict";n.r(t);var a=n(98),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t.default=o.a},98:function(e,t,n){"use strict";var a=["Alice","George","Eric","Fred","Matt","Monica"],o=(0,n(182).getRandomLatinSquare)(a.length),r=Math.floor(Math.random()*a.length);for(var s in o)for(var i in o)o[s][i]={title:a[o[s][i]]};e.exports={name:"start",data:function(){return{swapSchedule:o,exampleSongIndex:r}},metaInfo:function(){return{title:function(){return"Start"},meta:[{name:"description",content:"Welcome to Monsquaz Swap! A collaborative project management system that can yield fantastic, unexpected results"}]}}}},99:function(e,t,n){var a=n(185);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(10).default)("3718280c",a,!0,{})}}]);