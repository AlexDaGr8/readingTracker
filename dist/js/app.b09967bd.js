(function(e){function t(t){for(var a,u,o=t[0],i=t[1],d=t[2],b=0,s=[];b<o.length;b++)u=o[b],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&s.push(r[u][0]),r[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(s.length)s.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2fb0":function(e,t,n){"use strict";n("8aae")},"319e":function(e,t,n){},"3b5f":function(e,t,n){},"3b93":function(e,t,n){"use strict";n("3b5f")},"3f20":function(e,t,n){"use strict";n("89aa")},"512e":function(e,t,n){},"89aa":function(e,t,n){},"8aae":function(e,t,n){},"8fc8":function(e,t,n){"use strict";n("512e")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=Object(a["f"])("Home");function c(e,t,n,c,u,o){var i=Object(a["x"])("router-link"),d=Object(a["x"])("router-view");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])("nav",null,[Object(a["g"])(i,{to:"/"},{default:Object(a["F"])((function(){return[r]})),_:1})]),Object(a["g"])(d)])}var u=Object(a["h"])({name:"App"});n("3f20");u.render=c;var o=u,i=(n("ac1f"),n("5319"),n("6c02")),d=Object(a["g"])("h1",null,"Home",-1),l={class:"container"};function b(e,t,n,r,c,u){var o=Object(a["x"])("progress-bar"),i=Object(a["x"])("reading-list"),b=Object(a["x"])("Calendar");return Object(a["p"])(),Object(a["d"])("div",null,[d,Object(a["g"])("div",l,[Object(a["g"])(o,{class:"col-span2"}),Object(a["g"])(i),Object(a["g"])(b)])])}var s=Object(a["I"])("data-v-0fb84d50");Object(a["s"])("data-v-0fb84d50");var f={class:"list-input"},O={class:"list"};Object(a["q"])();var p=s((function(e,t,n,r,c,u){var o=Object(a["x"])("reading-form");return Object(a["p"])(),Object(a["d"])("div",f,[Object(a["g"])("div",O,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.readList,(function(t){return Object(a["p"])(),Object(a["d"])("div",{key:t.date,class:"grid-2"},[Object(a["g"])("div",null,[Object(a["f"])(Object(a["z"])(e.formatDate(t.date))+" - "+Object(a["z"])(t.book)+" ",1),Object(a["G"])(Object(a["g"])("span",null,"("+Object(a["z"])(t.minutes)+" min)",513),[[a["D"],t.minutes]])]),Object(a["g"])("button",{class:"delete",onClick:function(n){return e.deleteItem(t)}},"X",8,["onClick"])])})),128))]),Object(a["g"])("div",null,[Object(a["g"])(o)])])})),j=(n("96cf"),n("1da1")),v=(n("c740"),n("4160"),n("a434"),n("d3b7"),n("25f0"),n("159b"),n("d4ec")),g=n("bee2"),m=n("262e"),y=n("2caf"),h=function(){function e(){Object(v["a"])(this,e);var t=this.data();this.setup(t),this.state=Object(a["t"])(t)}return Object(g["a"])(e,[{key:"setup",value:function(e){}},{key:"getState",value:function(){return Object(a["u"])(this.state)}}]),e}(),x="readingLog",k=function(e){Object(m["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(v["a"])(this,n),e=t.call(this),e._data=null,e}return Object(g["a"])(n,[{key:"setLocalStorage",value:function(e){localStorage.setItem(x,JSON.stringify(e))}},{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)}))}},{key:"data",value:function(){if(!localStorage[x]){var e={readingLog:[]};this.setLocalStorage(e)}return this._data=JSON.parse(localStorage[x]),this._data.readingLog.forEach((function(e){return e.date=new Date(e.date)})),this._data}},{key:"add",value:function(e){e.uuid=this.uuidv4(),this.state.readingLog.push(e),this.setLocalStorage(this.state)}},{key:"deleteItem",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var r=n.state.readingLog.findIndex((function(e){return e.uuid===t.uuid}));r||a("Item not found ".concat(t)),n.state.readingLog.splice(r,1),e("done")})));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"readList",get:function(){return this.state.readingLog.sort((function(e,t){return t.date.getTime()-e.date.getTime()}))}},{key:"streakLength",get:function(){this.state.readingLog.sort((function(e,t){return e.date.getTime()-t.date.getTime()}));return this.state.readingLog.length}}]),n}(h),S=new k,M=Object(a["I"])("data-v-7da877a2");Object(a["s"])("data-v-7da877a2");var I={class:"field"},w=Object(a["g"])("label",{for:"book"},"Book: ",-1),L={class:"field"},D=Object(a["g"])("label",{for:"date"},"Date: ",-1),Y={class:"field"},T=Object(a["g"])("label",{for:"time"},"Time: ",-1),C={class:"field"},_=Object(a["g"])("label",{for:"minutes"},"Minutes: ",-1),A={class:"field"},F=Object(a["g"])("label",null,"Pages (from-to): ",-1),P=Object(a["g"])("span",null,"-",-1);Object(a["q"])();var U=M((function(e,t,n,r,c,u){return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])("div",I,[w,Object(a["G"])(Object(a["g"])("input",{name:"book",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.book=t}),placeholder:"Enter Book..."},null,512),[[a["C"],e.book]])]),Object(a["g"])("div",L,[D,Object(a["G"])(Object(a["g"])("input",{name:"date",type:"date","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.dateStr=t})},null,512),[[a["C"],e.dateStr]])]),Object(a["g"])("div",Y,[T,Object(a["G"])(Object(a["g"])("input",{name:"time",type:"time","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.time=t})},null,512),[[a["C"],e.time]])]),Object(a["g"])("div",C,[_,Object(a["G"])(Object(a["g"])("input",{name:"minutes",type:"number","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.minutes=t})},null,512),[[a["C"],e.minutes]])]),Object(a["g"])("div",A,[F,Object(a["g"])("div",null,[Object(a["G"])(Object(a["g"])("input",{name:"pagesFrom",type:"number","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.pageFrom=t})},null,512),[[a["C"],e.pageFrom]]),P,Object(a["G"])(Object(a["g"])("input",{name:"pagesFrom",type:"number","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.pageTo=t})},null,512),[[a["C"],e.pageTo]])])]),Object(a["g"])("button",{class:"add",onClick:t[7]||(t[7]=function(){return e.add&&e.add.apply(e,arguments)})},"Add")])})),G=(n("99af"),n("4d90"),n("1276"),n("5530")),N=Object(a["h"])({setup:function(){var e=Object(a["b"])((function(){return new Date})),t=Object(a["b"])((function(){return"".concat(e.value.getHours().toString().padStart(2,"0"),":").concat(e.value.getMinutes().toString().padStart(2,"0"))})),n=function(e){var t=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(a)},r=function(e){var t=e.split("-");return new Date(+t[0],+t[1]-1,+t[2])},c=Object(a["t"])({book:"",date:e.value,notes:"",time:t.value,minutes:null,pageTo:null,pageFrom:null,dateStr:n(e.value)}),u=function(){var a={book:c.book,date:r(c.dateStr),notes:c.notes,time:c.time,minutes:c.minutes,pageTo:c.pageTo,pageFrom:c.pageFrom,dateStr:c.dateStr};S.add(a),c.book="",c.date=e.value,c.notes="",c.time=t.value,c.minutes=null,c.pageTo=null,c.pageFrom=null,c.dateStr=n(e.value)};return Object(G["a"])(Object(G["a"])({},Object(a["A"])(c)),{},{add:u})}});n("8fc8");N.render=U,N.__scopeId="data-v-7da877a2";var z=N,J=Object(a["h"])({components:{ReadingForm:z},setup:function(){var e=Object(a["b"])((function(){return S.readList})),t=function(e){return e.toLocaleDateString("en-US",{month:"short",day:"numeric"})},n=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S.deleteItem(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{readList:e,formatDate:t,deleteItem:n}}});n("3b93");J.render=p,J.__scopeId="data-v-0fb84d50";var V=J,H=(n("b0c0"),Object(a["I"])("data-v-5baeab44"));Object(a["s"])("data-v-5baeab44");var R={class:"full-calendar"},B={class:"grid-cal month"},q={class:"grid-cal month"},E={class:"grid-cal calendar"},K=Object(a["e"])('<div class="day title weekend" data-v-5baeab44>Sun</div><div class="day title" data-v-5baeab44>Mon</div><div class="day title" data-v-5baeab44>Tue</div><div class="day title" data-v-5baeab44>Wed</div><div class="day title" data-v-5baeab44>Thu</div><div class="day title" data-v-5baeab44>Fri</div><div class="day title weekend" data-v-5baeab44>Sat</div>',7);Object(a["q"])();var W=H((function(e,t,n,r,c,u){return Object(a["p"])(),Object(a["d"])("div",R,[Object(a["g"])("div",B,[Object(a["g"])("button",{onClick:t[1]||(t[1]=function(){return e.prevYear&&e.prevYear.apply(e,arguments)}),disabled:e.noPrevYear},"prev",8,["disabled"]),Object(a["g"])("div",null,[Object(a["g"])("span",{class:{hidden:e.editYear},onClick:t[2]||(t[2]=function(t){return e.editYear=!0})},Object(a["z"])(e.yearId),3),Object(a["G"])(Object(a["g"])("input",{class:{hidden:!e.editYear},type:"number","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.yearId=t}),onKeyup:t[4]||(t[4]=Object(a["H"])((function(t){return e.editYear=!1}),["enter"])),onBlur:t[5]||(t[5]=function(t){return e.editYear=!1})},null,34),[[a["C"],e.yearId]])]),Object(a["g"])("button",{onClick:t[6]||(t[6]=function(){return e.nextYear&&e.nextYear.apply(e,arguments)}),disabled:e.noNextYear},"next",8,["disabled"])]),Object(a["g"])("div",q,[Object(a["g"])("button",{onClick:t[7]||(t[7]=function(){return e.prevMonth&&e.prevMonth.apply(e,arguments)}),disabled:e.noPrevMonth},"prev",8,["disabled"]),Object(a["f"])(" "+Object(a["z"])(e.month.name)+" ",1),Object(a["g"])("button",{onClick:t[8]||(t[8]=function(){return e.nextMonth&&e.nextMonth.apply(e,arguments)}),disabled:e.noNextMonth},"next",8,["disabled"])]),Object(a["g"])("div",E,[K,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.emptySlots,(function(e,t){return Object(a["p"])(),Object(a["d"])("div",{class:["day",{weekend:0===e}],key:t},null,2)})),128)),(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.month.days,(function(t){return Object(a["p"])(),Object(a["d"])("div",{class:["day",{weekend:0===t.getDay()||6===t.getDay(),thisMonth:e.isThisMonth(t),today:e.isToday(t)}],key:t},Object(a["z"])(t.getDate()),3)})),128))])])})),X=(n("a630"),n("d81d"),n("3ca3"),n("ddb0"),n("2909")),Q=(n("7db0"),n("b85c"));function Z(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"];return t[e]}var $=function(){var e=Object(a["t"])([{name:2020,months:[]},{name:2021,months:[]},{name:2022,months:[]}]),t=function(t){return e.findIndex((function(e){return e.name===t}))},n=function(n){return e[t(n)]},r=function(){var t,n=Array.from(Array(400).keys()).map((function(e){return e+1800})),a=Array.from(Array(12).keys()),r=Object(Q["a"])(n);try{var c=function(){var n,r=t.value,c=e.find((function(e){return e.name===r})),o=[],i=Object(Q["a"])(a);try{for(i.s();!(n=i.n()).done;){var d=n.value,l=u(r,d);o.push({id:d,name:Z(d),days:l})}}catch(s){i.e(s)}finally{i.f()}if(c)c.months=o;else{var b={name:r,months:o};e.push(b)}};for(r.s();!(t=r.n()).done;)c()}catch(o){r.e(o)}finally{r.f()}function u(e,t){var n=new Date(e,t,1),a=[];while(n.getMonth()===t)a.push(new Date(n)),n.setDate(n.getDate()+1);return a}};r();var c="hi";return{getYearId:t,yearItem:n,test:c,years:e,getMonthName:Z}},ee=Object(a["h"])({setup:function(){var e=Object(a["t"])($()),t=e.years,n=(e.getYearId,e.yearItem),r=function(e){return l.value===e.getMonth()},c=function(e){return e.toLocaleDateString("en-US")===u.value.toLocaleDateString("en-US")},u=Object(a["v"])(new Date),o=Object(a["t"])({yearId:u.value.getFullYear()});Object(a["E"])((function(){return o.yearId}),(function(e,t){o.yearId=+e}));var i=Object(a["b"])((function(){return n(o.yearId)})),d=Object(a["t"])({noPrevYear:Object(a["b"])((function(){return o.yearId===Math.min.apply(Math,Object(X["a"])(t.map((function(e){return e.name}))))})),noNextYear:Object(a["b"])((function(){return o.yearId===Math.max.apply(Math,Object(X["a"])(t.map((function(e){return e.name}))))})),prevYear:function(){o.yearId>1700&&o.yearId--},nextYear:function(){console.log("yearId",o.yearId),o.yearId<4e3&&o.yearId++},editYear:!1}),l=Object(a["v"])(u.value.getMonth()),b=Object(a["b"])((function(){return i.value.months[l.value]})),s=Object(a["t"])({noPrevMonth:Object(a["b"])((function(){return 0===l.value&&o.yearId===Math.min.apply(Math,Object(X["a"])(t.map((function(e){return e.name}))))})),noNextMonth:Object(a["b"])((function(){return 11===l.value&&o.yearId===Math.max.apply(Math,Object(X["a"])(t.map((function(e){return e.name}))))})),prevMonth:function(){l.value>0?l.value--:o.yearId>Math.min.apply(Math,Object(X["a"])(t.map((function(e){return e.name}))))-1&&(o.yearId--,l.value=11),console.log(l.value)},nextMonth:function(){l.value<11?l.value++:o.yearId<Math.max.apply(Math,Object(X["a"])(t.map((function(e){return e.name}))))+1&&(o.yearId++,l.value=0)}}),f=Object(a["b"])((function(){return Array.from(Array(b.value.days[0].getDay()).keys())}));return Object(G["a"])(Object(G["a"])(Object(G["a"])({isThisMonth:r,isToday:c,today:u,month:b,emptySlots:f},Object(a["A"])(o)),Object(a["A"])(s)),Object(a["A"])(d))}});n("e165");ee.render=W,ee.__scopeId="data-v-5baeab44";var te=ee;function ne(e,t,n,r,c,u){return Object(a["p"])(),Object(a["d"])("div",null,Object(a["z"])(e.streakLength),1)}var ae=Object(a["h"])({setup:function(){var e=Object(a["b"])((function(){return S.streakLength}));return{streakLength:e}}});ae.render=ne;var re=ae,ce=Object(a["h"])({name:"Home",components:{ReadingList:V,Calendar:te,ProgressBar:re}});n("2fb0");ce.render=b;var ue=ce,oe=[{path:"/",name:"Home",component:ue}],ie={history:Object(i["b"])(),routes:oe},de=Object(i["a"])(ie);de.replace("/");var le=de;Object(a["c"])(o).use(le).mount("#app")},e165:function(e,t,n){"use strict";n("319e")}});
//# sourceMappingURL=app.b09967bd.js.map