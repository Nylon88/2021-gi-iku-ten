(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{141:function(e,t,r){},167:function(e,t,r){"use strict";r.r(t),r.d(t,"store",(function(){return Ne}));var n=r(1),a=r(22),c=r(53),o=r.n(c),s=r(64),i=r(46),l=(r(141),r(200)),j=r(181),u=Object(j.a)({styles:{global:{body:{color:"#333333"}}}}),d=r(187),b=r(183),h=r(184),O=r(202),x=r(185),m=r(186),p=r(30),f=r(71),g=function(e){return e.users},y=Object(f.a)([g],(function(e){return e.username})),v=Object(f.a)([g],(function(e){return e.isSignedIn})),w=r(11),S=r.n(w),C=r(23),k=r(66),z=r.n(k),F=(r(160),r(161),r(97));F.a.initializeApp({apiKey:"AIzaSyCaoKydYF4XfaBgbGsR2E13xxxEgju7wnE",authDomain:"paperpicks-2021.firebase.com",projectId:"paperpicks-2021",storageBucket:"paperpicks-2021.appspot.com",messagingSenderId:"629558374330",appId:"1:629558374330:web:473487b8bdecfdff277783",measurementId:"G-FE82LC04TL"});var A=F.a.auth(),E="SIGN_UP",P="SIGN_IN",_="SIGN_OUT",B=r(196),I=function(){var e=Object(B.a)();return{showMessage:Object(n.useCallback)((function(t){var r=t.title,n=t.status;e({title:r,status:n,duration:3e3,isClosable:!0,position:"top"})}),[e])}},W=r(3),R=Object(n.memo)((function(){var e,t=Object(a.e)((function(e){return e})),r=v(t),n=null===(e=A.currentUser)||void 0===e?void 0:e.uid,c=Object(a.d)(),o=I();return Object(W.jsxs)(b.a,{w:"20%",minW:"300px",minH:"100vh",maxH:"100%",bg:"gray.100",children:[Object(W.jsx)(h.a,{onClick:function(){return c(Object(p.d)("/"))},position:"fixed",children:Object(W.jsx)(O.a,{src:"".concat("","/PaperPicks.png"),alt:"PaperPicks Logo",htmlWidth:"200",mt:"8",ml:"14",_hover:{cursor:"pointer"}})}),r?Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(b.a,{ml:"20",position:"fixed",bottom:"20",children:[Object(W.jsx)(x.a,{fontSize:"lg",fontWeight:"bold",style:{cursor:"pointer"},_hover:{color:"#777"},onClick:function(){return c(Object(p.d)("/users/".concat(n)))},children:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb"}),Object(W.jsx)(m.a,{w:"200%",mb:"3",borderColor:"#333"}),Object(W.jsx)(x.a,{fontSize:"lg",fontWeight:"bold",style:{cursor:"pointer"},_hover:{color:"#777"},onClick:function(){return c((e=o,function(t,r){var n=r().users.isSignedIn,a=e.showMessage;n?A.signOut().then((function(){t({type:"SIGN_OUT",payload:{isSignedIn:!1,id:"",username:"",email:""}}),t(Object(p.d)("/sign_in")),a({title:"\u6b63\u5e38\u306b\u30ed\u30b0\u30a2\u30a6\u30c8\u3055\u308c\u307e\u3057\u305f\u3002",status:"success"})})).catch((function(){a({title:"\u4e0d\u660e\u306a\u30a8\u30e9\u30fc\u3067\u3059\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",status:"error"})})):a({title:"\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002",status:"error"})}));var e},children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}),Object(W.jsx)(m.a,{w:"200%",mb:"3",borderColor:"#333"})]})}):Object(W.jsxs)(b.a,{ml:"20",position:"fixed",bottom:"20",children:[Object(W.jsx)(x.a,{fontSize:"lg",fontWeight:"bold",style:{cursor:"pointer"},_hover:{color:"#777"},onClick:function(){return c(Object(p.d)("/sign_up"))},children:"\u65b0\u898f\u767b\u9332"}),Object(W.jsx)(m.a,{w:"200%",mb:"3",borderColor:"#333"}),Object(W.jsx)(x.a,{fontSize:"lg",fontWeight:"bold",style:{cursor:"pointer"},_hover:{color:"#777"},onClick:function(){return c(Object(p.d)("/sign_in"))},children:"\u30ed\u30b0\u30a4\u30f3"}),Object(W.jsx)(m.a,{w:"200%",mb:"3",borderColor:"#333"})]})]})})),D=Object(n.memo)((function(e){var t=e.children;return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(d.a,{children:[Object(W.jsx)(R,{}),t]})})})),N=r(36),q=Object(n.memo)((function(){return Object(W.jsx)(d.a,{w:"80%",align:"center",justify:"center",children:Object(W.jsx)(x.a,{fontWeight:"bold",children:"\u304a\u63a2\u3057\u306e\u30da\u30fc\u30b8\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002"})})})),M=r(5),U=r(172),G=r(188),K=r(189),L=r(190),T=r(29),H=r(10),Y="SEARCH_PAPER",Z="PICK_PAPER",V="SKELETON",J=function(e){return function(){var t=Object(C.a)(S.a.mark((function t(r){var n,a,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.word,a=e.period,c=e.showMessage,r((function(e,t){e(function(e){return{type:"SKELETON",payload:{boolean:e.boolean}}}({boolean:!t().boolean.boolean}))})),t.next=4,z.a.post("http://localhost:8000/v1/search",{word:n,period:a}).then((function(e){var t;r({type:"SEARCH_PAPER",payload:{word:(t={word:n,result:e.data}).word,result:t.result}})})).catch((function(e){c({title:e.message,status:"error"})})).finally((function(){return r((function(e,t){e(function(e){return{type:"SKELETON",payload:{boolean:e.boolean}}}({boolean:!t().boolean.boolean}))}))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(e){return function(t){var r=e.result,n=e.index,a=e.resultData,c=e.showMessage,o=Object(M.a)(r,2),s=o[0],i=o[1],l="\u6b63\u5e38\u306bPick\u3067\u304d\u307e\u3057\u305f"===i?"success":"error";t(function(e){var t=e.pick,r=e.index,n=e.resultData;return{type:"PICK_PAPER",payload:{result:[].concat(Object(H.a)(n),[n[r].pick=t])}}}({pick:s,index:n,resultData:a})),c({title:i,status:l})}},X=Object(n.memo)((function(e){var t=e.period,r=e.bool,c=Object(n.useState)(""),o=Object(M.a)(c,2),s=o[0],i=o[1],l=Object(a.d)(),j=I().showMessage,u=function(){l(J(r?{word:s,period:t,showMessage:j}:{word:s,period:"-1",showMessage:j}))};return Object(W.jsx)(d.a,{justify:"center",mt:"12",children:Object(W.jsxs)(G.a,{w:"60%",maxW:"880px",children:[Object(W.jsx)(K.a,{children:Object(W.jsx)(T.d,{color:"#EAEAEA"}),onClick:u,_hover:{cursor:"pointer"},_active:{top:"2px"}}),Object(W.jsx)(L.a,{borderRadius:"0",value:s,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u()}(e)}}),s?Object(W.jsx)(K.b,{children:Object(W.jsx)(T.e,{color:"#EAEAEA"}),onClick:function(){i("")},_hover:{cursor:"pointer"},_active:{top:"2px"}}):null]})})})),Q=r(191),ee=r(197),te=Object(n.memo)((function(e){var t=e.title,r=e.maxW,n=e.value,a=e.defaultValue,c=e.min,o=e.max,s=e.bool,i=void 0===s||s,l=e.setBool,j=e.onChange;return Object(W.jsxs)(b.a,{my:"4",children:[Object(W.jsx)(Q.a,{as:"h3",fontSize:"sm",fontWeight:"normal",children:t}),i?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(d.a,{mx:"1",children:[Object(W.jsxs)(ee.c,{size:"xs",variant:"flushed",maxW:r,value:n,defaultValue:a,min:c,max:o,onChange:j,children:[Object(W.jsx)(ee.d,{borderRadius:"none"}),Object(W.jsxs)(ee.e,{children:[Object(W.jsx)(ee.b,{border:"none"}),Object(W.jsx)(ee.a,{border:"none"})]})]}),Object(W.jsx)(x.a,{ml:"4",children:"~"})]}),"\u671f\u9593"===t?Object(W.jsx)(x.a,{fontSize:"xs",mt:"1",mx:"1",onClick:null===l||void 0===l?void 0:l.toggle,_hover:{cursor:"pointer",textDecoration:"underline"},children:"\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u306a\u3044"}):null]}):Object(W.jsx)(x.a,{fontSize:"xs",mt:"2",onClick:null===l||void 0===l?void 0:l.toggle,_hover:{cursor:"pointer",textDecoration:"underline"},children:"\u6761\u4ef6\u3092\u6307\u5b9a"})]})})),re=Object(n.memo)((function(e){var t=e.period,r=e.thisYear,n=e.periodBool,a=e.setPeriodBool,c=e.handlePeriod;return Object(W.jsx)(b.a,{w:"12%",h:"100%",bg:"gray.100",children:Object(W.jsxs)(b.a,{ml:"5",my:"10",children:[Object(W.jsx)(x.a,{fontSize:"md",children:"\u691c\u7d22\u6761\u4ef6"}),Object(W.jsx)(te,{title:"\u671f\u9593",maxW:16,value:t,min:1900,max:r,bool:n,setBool:a,onChange:c}),Object(W.jsx)(m.a,{}),Object(W.jsx)(te,{title:"\u5f15\u7528\u6570",maxW:10,defaultValue:"0",min:0})]})})})),ne=r(198),ae=r(193),ce=Object(f.a)([function(e){return e}],(function(e){return e})),oe=Object(n.memo)((function(){var e=Object(a.e)((function(e){return e})),t=e.search.result,r=A.currentUser,c=null===r||void 0===r?void 0:r.uid,o=Object(a.e)((function(e){return e.boolean.boolean})),s=ce(o),i=Object(a.e)((function(e){return e})),l=v(i),j=I().showMessage,u=Object(a.d)();Object(n.useCallback)((function(){t.map((function(e){e.point=100*e.citations+e.pick*e.coefficient})),t.sort((function(e,t){return e.point>t.point?-1:e.point<t.point?1:0})),console.table(t)}),[t]);var O=function(){var e=Object(C.a)(S.a.mark((function e(r,n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.post("http://localhost:8000/v1/picks",{url:r,uid:c}).then((function(e){var r={result:e.data,index:n,resultData:t,showMessage:j};u($(r))})).catch((function(){j({title:"Pick\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",status:"error"})}));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(W.jsx)(b.a,{w:"65%",maxW:"700px",mb:"16",children:s?Object(W.jsx)(W.Fragment,{children:t.map((function(e,t){return Object(W.jsxs)(b.a,{px:"5",py:"3",style:t%2===0?void 0:{backgroundColor:"#FAFAFA"},children:[Object(W.jsx)(h.a,{fontSize:"lg",fontWeight:"bold",color:"#0055AA",href:e.url,isExternal:!0,children:e.title}),Object(W.jsx)(x.a,{fontSize:"sm",mt:"1",mw:"100%",children:e.abstract}),Object(W.jsxs)(x.a,{fontSize:"xs",color:"#406B15",children:[e.writer,"\u30fb",e.year,"\u30fb",e.publisher]}),Object(W.jsx)(x.a,{fontSize:"xs",mt:"1",children:Object(W.jsxs)(d.a,{align:"center",children:[Object(W.jsx)(ae.a,{children:Object(W.jsxs)(d.a,{align:"center",children:[Object(W.jsx)(T.c,{}),Object(W.jsxs)(x.a,{onClick:function(){return function(e,t){l?O(e,t):j({title:"\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u3048\u307e\u3059",status:"error"})}(e.url,t)},_hover:{textDecoration:"underline",cursor:"pointer"},children:["Pick\u6570: ",e.pick]})]})}),Object(W.jsxs)(x.a,{mx:2,children:["\u5f15\u7528\u6570: ",e.citations]}),Object(W.jsx)(h.a,{href:"//twitter.com/share",className:"twitter-share-button","data-text":e.title,"data-hashtags":"PaperPicks","data-url":e.url,"data-lang":"ja",children:"\u30c4\u30a4\u30fc\u30c8"})]})})]},t)}))}):Object(W.jsx)(W.Fragment,{children:Object(H.a)(Array(10)).map((function(e,t){return Object(W.jsxs)(b.a,{px:"5",py:"3",mb:"5",style:t%2===0?void 0:{backgroundColor:"#FAFAFA"},children:[Object(W.jsx)(ne.a,{height:"25px"}),Object(W.jsx)(ne.a,{height:"13px",mt:"6px"}),Object(W.jsx)(ne.a,{height:"13px",mt:"7px"}),Object(W.jsx)(ne.a,{height:"13px",mt:"7px"}),Object(W.jsx)(ne.a,{height:"8px",mt:"10px"})]},t)}))})})})),se=Object(n.memo)((function(){var e=(new Date).getFullYear(),t="".concat(e-10),r=Object(n.useState)(t),a=Object(M.a)(r,2),c=a[0],o=a[1],s=Object(U.a)(),i=Object(M.a)(s,2),l=i[0],j=i[1];return Object(W.jsxs)(b.a,{w:"80%",children:[Object(W.jsx)(X,{period:c,bool:l}),Object(W.jsxs)(d.a,{mt:8,justify:"center",children:[Object(W.jsx)(re,{period:c,thisYear:e,periodBool:l,setPeriodBool:j,handlePeriod:function(e){return o(e)}}),Object(W.jsx)(oe,{})]})]})})),ie=r(195),le=Object(n.memo)((function(){return Object(W.jsxs)(d.a,{my:"2",children:[Object(W.jsx)(m.a,{my:"4"}),Object(W.jsx)(x.a,{mx:"4",my:"1",children:"or"}),Object(W.jsx)(m.a,{my:"4"})]})})),je=r(199),ue=Object(n.memo)((function(){return Object(W.jsxs)(d.a,{my:2,pr:3,align:"center",justify:"center",boxShadow:"base",_hover:{cursor:"pointer",bg:"#efefef",transition:3},children:[Object(W.jsx)(O.a,{src:"".concat("","/google.svg"),alt:"Google Logo"}),Object(W.jsx)(je.a,{p:"0",color:"#333333",colorScheme:"white",children:"Sign Up with Google"})]})})),de=Object(n.memo)((function(){return Object(W.jsx)(je.a,{my:2,colorScheme:"twitter",borderRadius:"0",isFullWidth:!0,leftIcon:Object(W.jsx)(T.f,{}),shadow:"base",children:"Sign Up with Twitter"})})),be=r(18),he=r(203),Oe=r(73),xe=r(194),me=r(87),pe=Object(n.memo)((function(){var e=Object(n.useState)(!1),t=Object(M.a)(e,2),r=t[0],c=t[1],o=Object(me.a)(),s=o.formState.errors,i=o.register,l=o.handleSubmit,j=Object(a.d)(),u=I().showMessage;return Object(W.jsxs)("form",{onSubmit:l((function(e){var t,r=e.email,n=e.password;j((t={email:r,password:n,showMessage:u},function(){var e=Object(C.a)(S.a.mark((function e(r,n){var a,c,o,s,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),c=a.users.isSignedIn,o=t.email,s=t.password,i=t.showMessage,c){e.next=6;break}return e.next=6,A.signInWithEmailAndPassword(o,s).then((function(e){var t;null===(t=e.user)||void 0===t||t.providerData.forEach((function(e){var t;r({type:"SIGN_UP",payload:{isSignedIn:!0,id:(t={id:null===e||void 0===e?void 0:e.uid,username:null===e||void 0===e?void 0:e.displayName,email:o}).id,username:t.username,email:t.email}})})),r(Object(p.d)("/")),i({title:"\u6b63\u5e38\u306b\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u307e\u3057\u305f\u3002",status:"success"})})).catch((function(e){"auth/user-not-found"===e.code?i({title:"\u30e6\u30fc\u30b6\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002",status:"error"}):"auth/wrong-password"===e.code?i({title:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002",status:"error"}):i({title:"\u4e0d\u660e\u306a\u30a8\u30e9\u30fc\u3067\u3059\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",status:"error"})}));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()))})),children:[Object(W.jsxs)(he.a,{children:[Object(W.jsxs)(Oe.a,{isRequired:!0,children:[Object(W.jsx)(xe.a,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(W.jsx)(L.a,Object(be.a)({placeholder:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",size:"lg",borderRadius:"0"},i("email",{required:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u5fc5\u9808\u3067\u3059\u3002",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}}))),s.email&&"required"===s.email.type?Object(W.jsx)(x.a,{fontSize:"xs",color:"red.500",children:"\u203b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u5fc5\u9808\u3067\u3059\u3002"}):s.email&&"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"===s.email.message?Object(W.jsx)(x.a,{fontSize:"xs",color:"red.500",children:"\u203b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}):Object(W.jsx)(b.a,{h:"1rem"})]}),Object(W.jsxs)(Oe.a,{isRequired:!0,children:[Object(W.jsx)(xe.a,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(W.jsxs)(G.a,{children:[Object(W.jsx)(L.a,Object(be.a)({placeholder:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",size:"lg",type:r?"text":"password",borderRadius:"0"},i("password",{required:!0}))),Object(W.jsx)(K.b,{my:1,onClick:function(){return c(!r)},children:r?Object(W.jsx)(T.a,{}):Object(W.jsx)(T.b,{})})]}),s.password?Object(W.jsx)(x.a,{fontSize:"xs",color:"red.500",children:"\u203b\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u3067\u3059\u3002"}):Object(W.jsx)(b.a,{h:"1rem"})]})]}),Object(W.jsx)(je.a,{mt:"3",bg:"#406B15",color:"white",type:"submit",borderRadius:"0",_hover:{opacity:.8},isFullWidth:!0,children:"\u30ed\u30b0\u30a4\u30f3"})]})})),fe=Object(n.memo)((function(){return Object(W.jsx)(d.a,{w:"80%",align:"center",justify:"center",children:Object(W.jsxs)(b.a,{w:"600px",border:"1px",borderColor:"gray.200",p:"4",children:[Object(W.jsx)(ie.a,{children:Object(W.jsx)(Q.a,{as:"h1",size:"lg",my:"4",children:"\u30ed\u30b0\u30a4\u30f3"})}),Object(W.jsxs)(b.a,{mx:"10",children:[Object(W.jsx)(pe,{}),Object(W.jsx)(le,{}),Object(W.jsx)(de,{}),Object(W.jsx)(ue,{})]})]})})})),ge=Object(n.memo)((function(){var e=Object(n.useState)(!1),t=Object(M.a)(e,2),r=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(M.a)(o,2),i=s[0],l=s[1],j=Object(me.a)(),u=j.formState.errors,d=j.register,h=j.handleSubmit,O=I().showMessage,m=Object(a.d)();return Object(W.jsxs)("form",{onSubmit:h((function(e){var t,r=e.userName,n=e.email,a=e.password;a===e.passwordConf?m((t={username:r,email:n,password:a,showMessage:O},function(){var e=Object(C.a)(S.a.mark((function e(r,n){var a,c,o,s,i,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),c=a.users.isSignedIn,o=t.username,s=t.email,i=t.password,l=t.showMessage,c){e.next=6;break}return e.next=6,A.createUserWithEmailAndPassword(s,i).then(function(){var e=Object(C.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null===(n=t.user)||void 0===n?void 0:n.uid,e.next=3,z.a.post("http://localhost:8000/v1/users",{uid:a}).then(Object(C.a)(S.a.mark((function e(){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=t.user)||void 0===n?void 0:n.updateProfile({displayName:o}).then((function(){var e;null===(e=t.user)||void 0===e||e.providerData.forEach((function(e){var t;r({type:"SIGN_UP",payload:{isSignedIn:!0,id:(t={id:null===e||void 0===e?void 0:e.uid,username:null===e||void 0===e?void 0:e.displayName,email:null===e||void 0===e?void 0:e.email}).id,username:t.username,email:t.email}})})),r(Object(p.d)("/")),l({title:"\u6b63\u5e38\u306b\u767b\u9332\u3067\u304d\u307e\u3057\u305f\u3002",status:"success"})})).catch((function(){l({title:"\u4e0d\u660e\u306a\u30a8\u30e9\u30fc\u3067\u3059\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",status:"error"})}));case 2:case"end":return e.stop()}}),e)})))).catch(Object(C.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=A.currentUser)||void 0===t?void 0:t.delete();case 2:l({title:"\u30e6\u30fc\u30b6\u30fc\u306e\u4fdd\u5b58\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",status:"error"});case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){"auth/email-already-in-use"===e.code?l({title:"\u3053\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u65e2\u306b\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002",status:"error"}):"auth/weak-password"===e.code?l({title:"\u30d1\u30b9\u30ef\u30fc\u30c9\u306f6\u6587\u5b57\u4ee5\u4e0a\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",status:"error"}):l({title:"\u4e0d\u660e\u306a\u30a8\u30e9\u30fc\u3067\u3059\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",status:"error"})}));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())):O({title:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\uff08\u78ba\u8a8d\u7528\uff09\u304c\u7570\u306a\u308a\u307e\u3059\u3002",status:"error"})})),children:[Object(W.jsxs)(he.a,{children:[Object(W.jsxs)(Oe.a,{isRequired:!0,children:[Object(W.jsx)(xe.a,{children:"\u30e6\u30fc\u30b6\u30fc\u540d"}),Object(W.jsx)(L.a,Object(be.a)({placeholder:"\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",size:"lg",borderRadius:"0"},d("userName",{required:!0}))),u.userName?Object(W.jsx)(x.a,{fontSize:"xs",color:"red.500",children:"\u203b\u30e6\u30fc\u30b6\u30fc\u540d\u306f\u5fc5\u9808\u3067\u3059\u3002"}):Object(W.jsx)(b.a,{h:"1rem"})]}),Object(W.jsxs)(Oe.a,{isRequired:!0,children:[Object(W.jsx)(xe.a,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(W.jsx)(L.a,Object(be.a)({placeholder:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",size:"lg",borderRadius:"0"},d("email",{required:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u5fc5\u9808\u3067\u3059\u3002",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}}))),u.email&&"required"===u.email.type?Object(W.jsx)(x.a,{fontSize:"xs",color:"red.500",children:"\u203b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u5fc5\u9808\u3067\u3059\u3002"}):u.email&&"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"===u.email.message?Object(W.jsx)(x.a,{fontSize:"xs",color:"red.500",children:"\u203b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}):Object(W.jsx)(b.a,{h:"1rem"})]}),Object(W.jsxs)(Oe.a,{isRequired:!0,children:[Object(W.jsx)(xe.a,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(W.jsxs)(G.a,{children:[Object(W.jsx)(L.a,Object(be.a)({placeholder:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",size:"lg",type:r?"text":"password",borderRadius:"0"},d("password",{required:!0}))),Object(W.jsx)(K.b,{my:1,onClick:function(){return c(!r)},children:r?Object(W.jsx)(T.a,{}):Object(W.jsx)(T.b,{})})]}),u.password?Object(W.jsx)(x.a,{fontSize:"xs",color:"red.500",children:"\u203b\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u3067\u3059\u3002"}):Object(W.jsx)(b.a,{h:"1rem"})]}),Object(W.jsxs)(Oe.a,{isRequired:!0,children:[Object(W.jsx)(xe.a,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\uff08\u78ba\u8a8d\u7528\uff09"}),Object(W.jsxs)(G.a,{children:[Object(W.jsx)(L.a,Object(be.a)({placeholder:"\u30d1\u30b9\u30ef\u30fc\u30c9\uff08\u78ba\u8a8d\u7528\uff09\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",size:"lg",type:i?"text":"password",borderRadius:"0"},d("passwordConf",{required:!0}))),Object(W.jsx)(K.b,{my:1,onClick:function(){return l(!i)},children:i?Object(W.jsx)(T.a,{}):Object(W.jsx)(T.b,{})})]}),u.passwordConf?Object(W.jsx)(x.a,{fontSize:"xs",color:"red.500",children:"\u203b\u30d1\u30b9\u30ef\u30fc\u30c9\uff08\u78ba\u8a8d\u7528\uff09\u306f\u5fc5\u9808\u3067\u3059\u3002"}):Object(W.jsx)(b.a,{h:"1rem"})]})]}),Object(W.jsx)(je.a,{mt:"3",bg:"#406B15",color:"white",type:"submit",borderRadius:"0",_hover:{opacity:.8},isFullWidth:!0,children:"\u767b\u9332"})]})})),ye=function(){return Object(W.jsx)(d.a,{w:"80%",align:"center",justify:"center",children:Object(W.jsxs)(b.a,{w:"600px",border:"1px",borderColor:"gray.200",p:"4",children:[Object(W.jsx)(ie.a,{children:Object(W.jsx)(Q.a,{as:"h1",size:"lg",my:"4",children:"\u65b0\u898f\u767b\u9332"})}),Object(W.jsxs)(b.a,{mx:"10",children:[Object(W.jsx)(ge,{}),Object(W.jsx)(le,{}),Object(W.jsx)(de,{}),Object(W.jsx)(ue,{})]})]})})},ve=r(94),we=r.n(ve),Se=[{sex:"man",faceColor:"#F9C9B6",earSize:"big",eyeStyle:"oval",noseStyle:"round",mouthStyle:"peace",shirtStyle:"polo",glassesStyle:"none",hairColor:"#77311D",hairStyle:"thick",hatStyle:"none",hatColor:"#F48150",eyeBrowStyle:"up",shirtColor:"#9287FF",bgColor:"#506AF4"},{sex:"man",faceColor:"#F9C9B6",earSize:"big",eyeStyle:"oval",noseStyle:"round",mouthStyle:"smile",shirtStyle:"polo",glassesStyle:"none",hairColor:"#000",hairStyle:"normal",hatStyle:"turban",hatColor:"#fff",eyeBrowStyle:"up",shirtColor:"#9287FF",bgColor:"linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)"},{sex:"man",faceColor:"#AC6651",earSize:"big",eyeStyle:"smile",noseStyle:"long",mouthStyle:"smile",shirtStyle:"polo",glassesStyle:"square",hairColor:"#000",hairStyle:"thick",hatStyle:"beanie",hatColor:"#D2EFF3",eyeBrowStyle:"up",shirtColor:"#77311D",bgColor:"linear-gradient(90deg, #36cd1c 0%, #68deff 100%)"},{sex:"woman",faceColor:"#F9C9B6",earSize:"big",eyeStyle:"smile",noseStyle:"short",mouthStyle:"smile",shirtStyle:"hoody",glassesStyle:"none",hairColor:"#77311D",hairStyle:"womanShort",hatStyle:"none",hatColor:"#506AF4",eyeBrowStyle:"upWoman",shirtColor:"#9287FF",bgColor:"linear-gradient(45deg, #178bff 0%, #ff6868 100%)"},{sex:"woman",faceColor:"#F9C9B6",earSize:"big",eyeStyle:"smile",noseStyle:"short",mouthStyle:"laugh",shirtStyle:"short",glassesStyle:"none",hairColor:"#000",hairStyle:"womanShort",hatStyle:"none",hatColor:"#D2EFF3",eyeBrowStyle:"upWoman",shirtColor:"#6BD9E9",bgColor:"linear-gradient(45deg, #178bff 0%, #ff6868 100%)"},{sex:"woman",faceColor:"#AC6651",earSize:"small",eyeStyle:"smile",noseStyle:"short",mouthStyle:"laugh",shirtStyle:"hoody",glassesStyle:"none",hairColor:"#000",hairStyle:"womanLong",hatStyle:"none",hatColor:"#000",eyeBrowStyle:"up",shirtColor:"#6BD9E9",bgColor:"#FFEDEF"}],Ce=Object(n.memo)((function(){var e,t=Object(n.useState)(0),r=Object(M.a)(t,2),c=r[0],o=r[1],s=Object(a.e)((function(e){return e})),i=y(s),l=null===(e=A.currentUser)||void 0===e?void 0:e.uid;Object(n.useEffect)((function(){var e=(null===i||void 0===i?void 0:i.length)?i.length%6:0;o(e)}),[i]);var j=Object(ve.genConfig)(Object(be.a)({},Se[c])),u=[{rank:1,title:"[\u66f8\u7c4d][B] \u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u9769\u547d",abstract:"\u672c\u66f8\u306f\u3001 \u300c\u8d85\u6574\u7406\u6cd5\u300d \u300c\u8d85\u6587\u7ae0\u6cd5\u300d\u306a\u3069\u3067\u6709\u540d\u306a\u4e00\u6a4b\u5927\u5b66\u540d\u8a89\u6559\u6388 \u91ce\u53e3 \u60a0\u7d00\u96c4\u6c0f\u306e\u8457\u4f5c\u3067\u3042\u308b\u3002 \n\u300c\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u6280\u8853\u300d\u3092\u3001\u8457\u8005\u306e\u8a00\u8449\u3092\u501f\u308a\u3066\u3072\u3068\u8a00\u3067\u8aac\u660e\u3059\u308b \u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308b\u3002 \n\u201c\u79c1\u306f\u3001\u300e\u4eee\u60f3\u901a\u8ca8\u9769\u547d\u300f\u306e\u300c\u306f\u3058\u3081\u306b\u300d\u3067\u3001\u300c\u3053\u308c\u306f\u53cd\u4e71\u3067\u306f\u3042\u308a\u307e\u305b\u306c\xa0\u2026",writer:"\u91ce\u53e3\u60a0\u7d00\u96c4\uff0c \u7267\u91ce\u8cb4\u6a39 -  - ipa.go.jp",year:"2017",publisher:"\u306a\u3057",citations:" 12",url:"https://www.ipa.go.jp/files/000062713.pdf",pick:2,coefficient:5}];return u=[].concat(Object(H.a)(u),Object(H.a)(u),Object(H.a)(u),Object(H.a)(u),Object(H.a)(u),Object(H.a)(u),Object(H.a)(u),Object(H.a)(u),Object(H.a)(u)),Object(W.jsxs)(d.a,{w:"80%",align:"center",children:[Object(W.jsxs)(b.a,{w:"30%",position:"fixed",children:[Object(W.jsx)(we.a,Object(be.a)(Object(be.a)({},j),{},{style:{width:"12rem",height:"12rem"},shape:"rounded"})),Object(W.jsx)(Q.a,{as:"h1",fontSize:"lg",mt:"2",children:i}),Object(W.jsxs)(x.a,{color:"gray.500",children:["ID\uff1a",l]})]}),Object(W.jsxs)(b.a,{ml:"30%",my:"12",children:[Object(W.jsx)(Q.a,{as:"h1",fontSize:"2xl",children:"Pick\u3057\u305f\u8ad6\u6587\u4e00\u89a7"}),Object(W.jsx)(b.a,{mt:"8",w:"100%",children:u.map((function(e,t){return Object(W.jsxs)(b.a,{px:"5",py:"3",style:t%2===0?void 0:{backgroundColor:"#FAFAFA"},children:[Object(W.jsx)(h.a,{fontSize:"lg",fontWeight:"bold",color:"#0055AA",href:e.url,isExternal:!0,children:e.title}),Object(W.jsx)(x.a,{fontSize:"sm",mt:"1",mw:"100%",children:e.abstract}),Object(W.jsxs)(d.a,{align:"center",mt:"1",children:[Object(W.jsxs)(x.a,{fontSize:"xs",color:"#406B15",children:[e.writer,"\u30fb",e.year,"\u30fb",e.publisher]}),Object(W.jsx)(x.a,{fontSize:"xs",mx:3,children:Object(W.jsxs)(d.a,{align:"center",children:[Object(W.jsx)(ae.a,{children:Object(W.jsxs)(d.a,{align:"center",children:[Object(W.jsx)(T.c,{}),Object(W.jsxs)(x.a,{ml:.5,children:["Pick\u6570: ",e.pick]})]})}),Object(W.jsxs)(x.a,{mx:2,children:["\u5f15\u7528\u6570: ",e.citations]}),Object(W.jsx)(h.a,{href:"//twitter.com/share",className:"twitter-share-button","data-text":e.title,"data-hashtags":"PaperPicks","data-url":e.url,"data-lang":"ja",children:"\u30c4\u30a4\u30fc\u30c8"})]})})]})]},t)}))})]})]})})),ke=Object(n.memo)((function(){var e,t=Object(a.e)((function(e){return e})),r=v(t),n=null===(e=A.currentUser)||void 0===e?void 0:e.uid,c=Object(N.e)();return Object(W.jsxs)(d.a,{w:"80%",align:"center",justify:"center",children:[r&&c.pathname==="/users/".concat(n)&&Object(W.jsx)(Ce,{}),r&&c.pathname!=="/users/".concat(n)&&Object(W.jsx)(x.a,{fontWeight:"bold",children:"\u81ea\u8eab\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u30da\u30fc\u30b8\u3057\u304b\u95b2\u89a7\u3067\u304d\u307e\u305b\u3093"}),r||Object(W.jsx)(x.a,{fontWeight:"bold",children:"\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044"})]})})),ze=Object(n.memo)((function(){return Object(W.jsxs)(N.c,{children:[Object(W.jsx)(N.a,{exact:!0,path:"/",component:se}),Object(W.jsx)(N.a,{exact:!0,path:"/sign_up",component:ye}),Object(W.jsx)(N.a,{exact:!0,path:"/sign_in",component:fe}),Object(W.jsx)(N.a,{path:"/users/:id",component:ke}),Object(W.jsx)(N.a,{path:"/*",component:q})]})}));var Fe=function(){return Object(W.jsx)(l.a,{theme:u,children:Object(W.jsx)(D,{children:Object(W.jsx)(ze,{})})})},Ae=r(88),Ee=r(114),Pe=r(121),_e={users:{isSignedIn:!1,id:"",username:"",email:"",password:""},searchPapers:{word:"",result:[]},boolean:{boolean:!0}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e.users,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case P:case _:return Object(be.a)(Object(be.a)({},e),t.payload);default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e.searchPapers,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(be.a)(Object(be.a)({},e),t.payload);case Z:return Object(be.a)({},t.payload);default:return e}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e.boolean,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(be.a)(Object(be.a)({},e),t.payload);default:return e}};var Re,De=i.a(),Ne=(Re=De,Object(Ae.c)(Object(Ae.b)({router:Object(s.b)(Re),users:Be,search:Ie,boolean:We}),Object(Ae.a)(Object(Ee.a)(Re),Pe.a)));o.a.render(Object(W.jsx)(a.a,{store:Ne,children:Object(W.jsx)(s.a,{history:De,children:Object(W.jsx)(Fe,{})})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.e65887ad.chunk.js.map