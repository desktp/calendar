(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{12:function(e,a,t){e.exports={calendarHeader:"Calendar_calendarHeader__vbC8v",row:"Calendar_row__1zPau",headerCell:"Calendar_headerCell__3jAv3",cell:"Calendar_cell__H8sTb",weekendCell:"Calendar_weekendCell__2Rzfz",root:"Calendar_root__1wglb",title:"Calendar_title__2aVid",formActions:"Calendar_formActions__2Emcm",formDateWrapper:"Calendar_formDateWrapper__3KarJ",colorPreview:"Calendar_colorPreview__ptZiv"}},126:function(e,a,t){e.exports=t(187)},131:function(e,a,t){},187:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=(t(131),t(238)),i=t(13),d=t(24),m=t.n(d),s=t(237),u=t(230),E=t(103),p=t(96),f=t.n(p),h=t(97),v=t.n(h),b=t(100),y=t(18),C=t.n(y),g=t(229),O=t(60),j=t.n(O),_=t(241),M=t(236),k=t(234),Y=t(235),D=t(233),w=t(232),x=t(62),N=t(44),S=t.n(N),R=t(91),T=t.n(R),B=Object(x.b)({name:"calendar",initialState:{reminders:{}},reducers:{saveReminder:function(e,a){var t=a.payload,n=t.date.split("-"),r=Object(i.a)(n,3),c=r[0],l=r[1],o=r[2],d=C()(e,"reminders[".concat(c,"][").concat(l,"][").concat(o,"]"),[]);d.push(t),S()(e,"reminders[".concat(c,"][").concat(l,"][").concat(o,"]"),d,Object)},updateReminder:function(e,a){var t=a.payload,n=t.reminder,r=t.originalDate.split("-"),c=Object(i.a)(r,3),l=c[0],o=c[1],d=c[2],m=C()(e,"reminders[".concat(l,"][").concat(o,"][").concat(d,"]"),[]).filter((function(e){return e.id!==n.id}));S()(e,"reminders[".concat(l,"][").concat(o,"][").concat(d,"]"),m,Object);var s=n.date.split("-"),u=Object(i.a)(s,3),E=u[0],p=u[1],f=u[2],h=C()(e,"reminders[".concat(E,"][").concat(p,"][").concat(f,"]"),[]);h.push(n),S()(e,"reminders[".concat(E,"][").concat(p,"][").concat(f,"]"),h,Object)},deleteReminder:function(e,a){var t=a.payload,n=t.date.split("-"),r=Object(i.a)(n,3),c=r[0],l=r[1],o=r[2],d=C()(e,"reminders[".concat(c,"][").concat(l,"][").concat(o,"]"),[]).filter((function(e){return e.id!==t.id}));S()(e,"reminders[".concat(c,"][").concat(l,"][").concat(o,"]"),d,Object)},deleteAllReminders:function(e,a){var t=a.payload.split("-"),n=Object(i.a)(t,3),r=n[0],c=n[1],l=n[2];T()(e,"reminders[".concat(r,"][").concat(c,"][").concat(l,"]"))}}}),F=B.actions,A=F.saveReminder,I=F.updateReminder,P=F.deleteReminder,H=F.deleteAllReminders,W=B.reducer,z=t(43),J=t(101),L=t(78),U=t.n(L),V=t(93),Z=t(224),q=t(231),K=t(225),X=t(244),$=t(243),G=t(242),Q=t(226),ee=t(239),ae=t(240),te=t(12),ne=t.n(te),re=["#039BE5","#3F51B5","#33B679","#0B8043","#F4511E","#F6BF26"],ce=function(e){var a=e.date,t=e.reminder,c=e.handleSave,l=e.handleUpdate,o=e.handleDelete,d=Object(n.useState)(C()(t,"time","12:00")),s=Object(i.a)(d,2),p=s[0],f=s[1],h=Object(n.useState)(C()(t,"text","")),v=Object(i.a)(h,2),b=v[0],y=v[1],g=Object(n.useState)(C()(t,"city","")),O=Object(i.a)(g,2),x=O[0],N=O[1],S=Object(n.useState)(C()(t,"color",re[0])),R=Object(i.a)(S,2),T=R[0],B=R[1],F=Object(n.useState)([]),A=Object(i.a)(F,2),I=A[0],P=A[1],H=Object(n.useState)(!1),W=Object(i.a)(H,2),z=W[0],L=W[1],te=Object(n.useState)(function(e){return m()(e,"YYYY-MM-DD").format("MMM")}(C()(t,"date",a))),ce=Object(i.a)(te,2),le=ce[0],oe=ce[1],ie=Object(n.useState)(function(e){return m()(e,"YYYY-MM-DD").date()}(C()(t,"date",a))),de=Object(i.a)(ie,2),me=de[0],se=de[1],ue=!!t,Ee=function(e){return function(a){e(a.target.value)}},pe=function(){var e=Object(V.a)(U.a.mark((function e(a,t){var n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>=3)){e.next=9;break}return e.next=3,fetch("https://andruxnet-world-cities-v1.p.rapidapi.com/?query=".concat(t,"&searchby=city"),{headers:{"x-rapidapi-host":"andruxnet-world-cities-v1.p.rapidapi.com","x-rapidapi-key":"08d93ac3cemsheeb249be2c736c3p1ae4afjsn9834378cb0a2"}});case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,n.json();case 7:r=e.sent,P(r);case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),fe=function(){L(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{className:ne.a.root},r.a.createElement(K.a,null,r.a.createElement(E.a,{className:ne.a.title,gutterBottom:!0},ue?"Edit":"Add"," reminder"),r.a.createElement("div",{className:ne.a.formActions},ue?r.a.createElement("div",{className:ne.a.formDateWrapper},r.a.createElement(Q.a,null,r.a.createElement($.a,{id:"month"},"Month"),r.a.createElement(ee.a,{labelId:"month",id:"month",value:le,onChange:Ee(oe)},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((function(e){return r.a.createElement(G.a,{value:e,key:e},e)})))),r.a.createElement(Q.a,null,r.a.createElement($.a,{id:"day"},"Day"),r.a.createElement(ee.a,{labelId:"day",id:"day",value:me,onChange:Ee(se)},function(){for(var e=function(e){return m()("".concat(a.year(),"-").concat(e),"YYYY-MMM").daysInMonth()}(le),t=[],n=1;n<=e;n+=1)t.push(r.a.createElement(G.a,{value:n,key:n},n));return t}()))):r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},a.format("MMM do")),r.a.createElement(Q.a,null,r.a.createElement($.a,{id:"time"},"Time"),r.a.createElement(ee.a,{labelId:"time",id:"time",value:p,onChange:Ee(f)},function(){for(var e=[],a=0;a<=95;a+=1){var t=Math.floor(a/4),n=a%4*15,c="".concat(t<10?"0".concat(t):t,":").concat(0===n?"00":n);e.push(r.a.createElement(G.a,{value:c,key:c},c))}return e}())),r.a.createElement(Q.a,null,r.a.createElement(X.a,{id:"reminderText",label:"Text",value:b,onChange:Ee(y),inputProps:{maxLength:30}})),r.a.createElement(Q.a,null,r.a.createElement(ae.a,{id:"city-autocomplete",options:I.map((function(e){return"".concat(e.city,", ").concat(e.country)})),autoHighlight:!0,onInputChange:pe,onChange:function(e,a,t){return N(a)},value:x,renderOption:function(e){return r.a.createElement(r.a.Fragment,null,e)},renderInput:function(e){return r.a.createElement(X.a,Object.assign({},e,{label:"City",placeholder:"Being typing to search",inputProps:Object(J.a)({},e.inputProps,{autoComplete:"new-password"})}))}})),r.a.createElement(Q.a,null,r.a.createElement($.a,{id:"color"},"Color"),r.a.createElement(ee.a,{labelId:"color",id:"color",value:T,onChange:Ee(B)},re.map((function(e){return r.a.createElement(G.a,{key:e,value:e},r.a.createElement("div",{className:ne.a.colorPreview,style:{backgroundColor:e}}))})))))),r.a.createElement(q.a,null,r.a.createElement(w.a,{size:"small",color:"primary",variant:"contained",onClick:function(){var e={id:ue?t.id:m()().unix().toString(),time:p,color:T,text:b,date:ue?m()("".concat(a.year(),"-").concat(le,"-").concat(me),"YYYY-MMM-DD").format("YYYY-MM-DD"):a.format("YYYY-MM-DD"),city:x};ue?l({reminder:e,originalDate:t.date}):c(e)}},ue?"Update":"Create"),ue&&r.a.createElement(u.a,{"aria-label":"delete",color:"secondary",onClick:function(){L(!0)}},r.a.createElement(j.a,null)))),r.a.createElement(_.a,{open:z,onClose:fe,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(D.a,{id:"alert-dialog-title"},"Delete reminder"),r.a.createElement(k.a,null,r.a.createElement(Y.a,{id:"alert-dialog-description"},"Are you sure you want to delete?")),r.a.createElement(M.a,null,r.a.createElement(w.a,{onClick:fe,color:"primary"},"Cancel"),r.a.createElement(w.a,{onClick:function(){o(t),fe()},color:"secondary"},"Delete"))))},le=t(105),oe=t(63),ie=t.n(oe),de=function(e){var a=e.reminder,t=e.handleSetEditing;return r.a.createElement(s.a,{title:"Edit reminder"},r.a.createElement(le.a,{component:"div",style:{backgroundColor:a.color},onClick:function(){return t(a)},classes:{root:ie.a.reminderRoot}},r.a.createElement("span",{className:ie.a.reminderTime},a.time),r.a.createElement("span",{className:ie.a.reminderText},a.text)))},me=t(79),se=t.n(me),ue=function(e){var a=e.date,t=e.isWeekend,c=r.a.useState(null),l=Object(i.a)(c,2),o=l[0],d=l[1],m=Object(n.useState)(),E=Object(i.a)(m,2),p=E[0],f=E[1],h=Object(n.useState)(!1),v=Object(i.a)(h,2),y=v[0],O=v[1],x=Object(z.b)(),N=Object(z.c)((function(e){var t=a.format("YYYY-MM-DD").split("-"),n=Object(i.a)(t,3),r=n[0],c=n[1],l=n[2],o=C()(e,"calendar.reminders[".concat(r,"][").concat(c,"][").concat(l,"]"),[]);return Object(b.a)(o).sort((function(e,a){return e.time.localeCompare(a.time)}))})),S=function(){f(),d(null)},R=function(){O(!1)},T=function(e){return f(e)},B=Boolean(o),F=B?"simple-popover":void 0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(ne.a.cell," ").concat(t?ne.a.weekendCell:""),onClick:function(e){d(e.currentTarget)}},r.a.createElement("div",{className:se.a.dayHeader},r.a.createElement("span",null,a.format("DD")),N.length?r.a.createElement(s.a,{title:"Clear day"},r.a.createElement(u.a,{"aria-label":"delete",color:"secondary",size:"small",onClick:function(e){e.stopPropagation(),O(!0)}},r.a.createElement(j.a,null))):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:se.a.remindersContainer},N.map((function(e){return r.a.createElement(de,{key:e.id,reminder:e,handleSetEditing:T})})))),r.a.createElement(g.a,{id:F,open:B,anchorEl:o,onClose:S,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(ce,{date:a,reminder:p,handleSave:function(e){x(A(e)),S()},handleUpdate:function(e){x(I(e)),S()},handleDelete:function(e){x(P(e)),S()}})),r.a.createElement(_.a,{open:y,onClose:R,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(D.a,{id:"alert-dialog-title"},"Clear day"),r.a.createElement(k.a,null,r.a.createElement(Y.a,{id:"alert-dialog-description"},"This will delete ALL reminders for this day!"),r.a.createElement(Y.a,{id:"alert-dialog-description"},"Are you sure?")),r.a.createElement(M.a,null,r.a.createElement(w.a,{onClick:R,color:"primary"},"Cancel"),r.a.createElement(w.a,{onClick:function(){x(H(a.format("YYYY-MM-DD"))),R()},color:"secondary"},"Delete"))))},Ee=function(){var e=Object(n.useState)(m()()),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(t.month()),o=Object(i.a)(l,2)[1],d=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],c=1;c<=7;c+=1){var l=c-a+7*e,o=1===c||7===c;0===e&&a>=c||l>t.daysInMonth()?n.push(r.a.createElement("div",{className:"".concat(ne.a.cell," ").concat(o?ne.a.weekendCell:""),key:"cell_".concat(l)})):n.push(r.a.createElement(ue,{key:"cell_".concat(l),date:m()(t).date(l),isWeekend:o}))}return n};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ne.a.calendarHeader},r.a.createElement("div",null,r.a.createElement(s.a,{title:"Previous month"},r.a.createElement(u.a,{"aria-label":"previous",onClick:function(){if(0===t.month())o(11),c(t.year(t.year()-1).month(11));else{var e=t.month()-1;o(e),c(t.month(e))}}},r.a.createElement(f.a,null))),r.a.createElement(s.a,{title:"Next month"},r.a.createElement(u.a,{"aria-label":"next",onClick:function(){if(11===t.month())o(0),c(t.year(t.year()+1).month(0));else{var e=t.month()+1;o(e),c(t.month(e))}}},r.a.createElement(v.a,null)))),r.a.createElement(E.a,{variant:"h4"},t.format("MMMM (YYYY)"))),r.a.createElement("div",{className:ne.a.tableRoot},r.a.createElement("div",{className:ne.a.row},r.a.createElement("div",{className:ne.a.headerCell},"Sunday"),r.a.createElement("div",{className:ne.a.headerCell},"Monday"),r.a.createElement("div",{className:ne.a.headerCell},"Tuesday"),r.a.createElement("div",{className:ne.a.headerCell},"Wednesday"),r.a.createElement("div",{className:ne.a.headerCell},"Thursday"),r.a.createElement("div",{className:ne.a.headerCell},"Friday"),r.a.createElement("div",{className:ne.a.headerCell},"Saturday")),r.a.createElement("div",{className:ne.a.body},function(){for(var e=t.daysInMonth(),a=m()(t).date(1).day(),n=[],c=Math.trunc((e+a)/7),l=0;l<=c;l+=1)n.push(r.a.createElement("div",{className:ne.a.row,key:"row_".concat(l)},d(l,a)));return n}())))};var pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(Ee,null))},fe=t(14),he=t(80),ve=t(98),be={key:"root",storage:t.n(ve).a,whitelist:["calendar"]},ye=Object(he.a)(be,Object(fe.c)({calendar:W})),Ce=t(99);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=function(){var e=Object(x.a)({reducer:ye,devTools:!1});return{store:e,persistor:Object(he.b)(e)}}(),Oe=ge.store,je=ge.persistor;l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z.a,{store:Oe},r.a.createElement(Ce.a,{loading:null,persistor:je},r.a.createElement(pe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,a,t){e.exports={reminderRoot:"Reminder_reminderRoot__2Zul8",reminderTime:"Reminder_reminderTime__2VMNg",reminderText:"Reminder_reminderText__3D4Bc"}},79:function(e,a,t){e.exports={dayHeader:"Day_dayHeader__RBF0p",remindersContainer:"Day_remindersContainer__2XhbB"}}},[[126,1,2]]]);
//# sourceMappingURL=main.055626fc.chunk.js.map