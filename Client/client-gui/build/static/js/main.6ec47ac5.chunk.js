(this["webpackJsonpclient-gui"]=this["webpackJsonpclient-gui"]||[]).push([[0],{137:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(20),s=n.n(a),l=(n(137),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))}),r=n(15),o=n(18),d=n(14),j=n(55),x=n(59),b=(n(142),n(239)),p=n(233),h=n(224),O=n(240),u=n(237),f=n(230),m=n(245),g=n(81),y=n.n(g),S=n(234),v=n(236),w=n(5),P=n(235),C=n(231),k=n(106),N=n.n(k),A=n(107),I=n.n(A),F=n(244),L=n(229),z=n(152),B=n(238),R=n(68),T=n.n(R),E=n(108),G=n.n(E),J=n(242),Y=n(225),D=n(226),M=n(105),U=n.n(M),q=n(109),W=n.n(q),Z=n(2),$=Object(w.a)(P.a)((function(e){var t=e.theme;return Object(j.a)(Object(j.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:"white",backgroundColor:"#3b414b"})}));function _(e){var t=Object(x.b)().enqueueSnackbar,n=Object(i.useState)(),c=Object(d.a)(n,2),a=c[0],s=c[1],l=Object(i.useState)([]),r=Object(d.a)(l,2),j=r[0],g=r[1],w=Object(i.useState)(""),P=Object(d.a)(w,2),k=P[0],A=P[1],z=Object(i.useState)(""),R=Object(d.a)(z,2),E=R[0],M=R[1],q=Object(i.useState)(""),_=Object(d.a)(q,2),H=_[0],K=_[1],Q=Object(i.useState)([]),V=Object(d.a)(Q,2),X=V[0],ee=V[1],te=Object(i.useState)([]),ne=Object(d.a)(te,2),ie=ne[0],ce=ne[1],ae=Object(i.useState)([]),se=Object(d.a)(ae,2),le=se[0],re=se[1],oe=Object(i.useState)([]),de=Object(d.a)(oe,2),je=de[0],xe=de[1],be=Object(i.useState)(""),pe=Object(d.a)(be,2),he=pe[0],Oe=pe[1],ue=Object(i.useState)(""),fe=Object(d.a)(ue,2),me=fe[0],ge=fe[1],ye=e.classes;Object(i.useEffect)((function(){t("Registration Successful!",{variant:"success"}),fetch("/client").then((function(e){return e.json()})).then((function(e){s(e),g(e.listOfAvailableFiles)}));var e={name:"Me",ipAddress:"4352345",listOfAvailableFiles:["MYYY FILE 1","MY FILE @","ETC BB"],udpSocket:"324234",tcpSocket:"324234"};return s(e),g(e.listOfAvailableFiles),function(){fetch("/de_register",{method:"POST"})}}),[]);return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("div",{className:"App",children:[Object(Z.jsx)("header",{className:"App-page-header",children:"Time to get transferring."}),Object(Z.jsx)(v.a,{sx:{width:"100%"},style:{backgroundColor:"#282c34",paddingBottom:"20px"},children:Object(Z.jsxs)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},style:{paddingLeft:"20px",paddingRight:"20px"},children:[Object(Z.jsx)(S.a,{item:!0,xs:12,children:Object(Z.jsxs)($,{children:[Object(Z.jsx)("p",{className:"Grid-titles",children:a?a.name:""}),Object(Z.jsxs)(v.a,{sx:{width:"100%"},children:[Object(Z.jsxs)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(Z.jsx)(S.a,{item:!0,xs:6,style:{paddingBottom:"20px",paddingLeft:"50px"},display:"flex",justifyContent:"flex-start",children:Object(Z.jsxs)("p",{className:"Grid-titles",children:[Object(Z.jsx)("b",{children:"IP Address:"})," ",null===a||void 0===a?void 0:a.ipAddress]})}),Object(Z.jsx)(S.a,{item:!0,xs:6,style:{paddingBottom:"20px",paddingLeft:"30px"},display:"flex",justifyContent:"flex-start",children:Object(Z.jsx)(L.a,{style:{width:330},InputProps:{style:{color:"white",fontSize:"20px"},className:ye.input},InputLabelProps:{style:{color:"white",fontSize:"16px"},className:ye.input},id:"client-search",label:"Enter a new IP Address",variant:"standard",color:"primary",onChange:function(e){return A(e.target.value)}})})]}),Object(Z.jsxs)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(Z.jsx)(S.a,{item:!0,xs:6,style:{paddingBottom:"20px",paddingLeft:"50px"},display:"flex",justifyContent:"flex-start",children:Object(Z.jsxs)("p",{className:"Grid-titles",children:[Object(Z.jsx)("b",{children:"UDP Socket:"})," ",null===a||void 0===a?void 0:a.udpSocket]})}),Object(Z.jsx)(S.a,{item:!0,xs:6,style:{paddingBottom:"20px",paddingLeft:"30px"},display:"flex",justifyContent:"flex-start",children:Object(Z.jsx)(L.a,{style:{width:330},InputProps:{style:{color:"white",fontSize:"20px"},className:ye.input},InputLabelProps:{style:{color:"white",fontSize:"16px"},className:ye.input},id:"client-search",label:"Enter a new UDP Socket",variant:"standard",color:"primary",onChange:function(e){return M(e.target.value)}})}),Object(Z.jsxs)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},style:{paddingLeft:"20px"},children:[Object(Z.jsx)(S.a,{item:!0,xs:6,style:{paddingBottom:"20px",paddingLeft:"50px"},display:"flex",justifyContent:"flex-start",children:Object(Z.jsxs)("p",{className:"Grid-titles",children:[Object(Z.jsx)("b",{children:"TCP Socket:"})," ",null===a||void 0===a?void 0:a.tcpSocket]})}),Object(Z.jsx)(S.a,{item:!0,xs:6,style:{paddingBottom:"20px",paddingLeft:"30px"},display:"flex",justifyContent:"flex-start",children:Object(Z.jsx)(L.a,{style:{width:330},InputProps:{style:{color:"white",fontSize:"20px"},className:ye.input},InputLabelProps:{style:{color:"white",fontSize:"16px"},className:ye.input},id:"client-search",label:"Enter a new TCP Socket",variant:"standard",color:"primary",onChange:function(e){return K(e.target.value)}})})]})]}),Object(Z.jsxs)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(Z.jsx)(S.a,{item:!0,xs:6,style:{paddingBottom:"20px",paddingLeft:"30px"},display:"flex",justifyContent:"flex-start"}),Object(Z.jsx)(S.a,{item:!0,xs:6,style:{paddingBottom:"20px",paddingLeft:"100px"},display:"flex",justifyContent:"flex-start",children:Object(Z.jsx)(C.a,{variant:"contained",size:"large",style:{width:200,height:60,borderRadius:5},endIcon:Object(Z.jsx)(U.a,{}),onClick:function(){console.log("IP Address: ".concat(k,"\nUDP Socket: ").concat(E,"\nTCP Socket: ").concat(H))},loadingPosition:"end",children:"Update"})})]})]})]})}),Object(Z.jsx)(S.a,{item:!0,xs:12,children:Object(Z.jsxs)($,{children:[Object(Z.jsx)("p",{className:"Grid-titles",children:"Your files"}),Object(Z.jsx)(b.a,{sx:{width:"100%",bgcolor:"#282c34",borderRadius:"4px"},children:j.map((function(e,t){var n,i="checkbox-list-label-".concat(e);return Object(Z.jsx)(p.a,{secondaryAction:Object(Z.jsx)(m.a,{children:Object(Z.jsx)(y.a,{style:{color:"white"}})}),disablePadding:!0,children:Object(Z.jsxs)(h.a,{role:void 0,onClick:(n=t,function(){var e=X.indexOf(n),t=Object(o.a)(X);-1===e?t.push(n):t.splice(e,1),ee(t)}),dense:!0,children:[Object(Z.jsx)(O.a,{children:Object(Z.jsx)(f.a,{edge:"start",style:{color:"white"},checked:-1!==X.indexOf(t),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":i}})}),Object(Z.jsx)(u.a,{id:i,primary:e,style:{color:"white"}})]})},e)}))}),Object(Z.jsx)(v.a,{sx:{width:"100%"},style:{paddingTop:"10px"},children:Object(Z.jsxs)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(Z.jsx)(S.a,{item:!0,xs:6,children:Object(Z.jsx)(C.a,{variant:"contained",size:"large",style:{width:200,height:60,borderRadius:5},endIcon:Object(Z.jsx)(N.a,{}),onClick:function(){var e=[];X.forEach((function(t){var n;e.push(null!==(n=null===a||void 0===a?void 0:a.listOfAvailableFiles[t])&&void 0!==n?n:"")})),fetch("/publish",{method:"POST",body:JSON.stringify({filesSelected:e})})},loadingPosition:"end",children:Object(Z.jsx)(F.a,{children:"Publish"})})}),Object(Z.jsx)(S.a,{item:!0,xs:6,children:Object(Z.jsx)(C.a,{variant:"contained",size:"large",style:{width:200,height:60,borderRadius:5},endIcon:Object(Z.jsx)(I.a,{}),onClick:function(){var e=[];X.forEach((function(t){var n;e.push(null!==(n=null===a||void 0===a?void 0:a.listOfAvailableFiles[t])&&void 0!==n?n:"")})),fetch("/remove",{method:"POST",body:JSON.stringify({filesSelected:e})})},loadingPosition:"end",children:Object(Z.jsx)(F.a,{children:"Remove"})})})]})})]})}),Object(Z.jsx)(S.a,{item:!0,xs:12,children:Object(Z.jsxs)($,{children:[Object(Z.jsx)("p",{className:"Grid-titles",children:"Available Clients"}),Object(Z.jsx)(v.a,{sx:{width:"100%"},children:Object(Z.jsx)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:Object(Z.jsxs)(S.a,{item:!0,xs:12,style:{paddingBottom:"20px",paddingLeft:"30px"},display:"flex",justifyContent:"flex-start",children:[Object(Z.jsx)(L.a,{style:{width:330},InputProps:{style:{color:"white",fontSize:"20px"},className:ye.input},InputLabelProps:{style:{color:"white",fontSize:"20px"},className:ye.input},id:"client-search",label:"Client Name",variant:"standard",color:"primary",onChange:function(e){return Oe(e.target.value)}}),Object(Z.jsx)(B.a,{"aria-label":"delete",onClick:function(){console.log("Client searched: "+he)},children:Object(Z.jsx)(T.a,{style:{color:"white"}})})]})})}),Object(Z.jsx)(b.a,{sx:{width:"100%",bgcolor:"#282c34",borderRadius:"4px"},children:le.map((function(e){return Object(Z.jsxs)(v.a,{children:[Object(Z.jsxs)(h.a,{onClick:function(){return function(e){var t=ie.indexOf(e),n=Object(o.a)(ie);-1===t?n.push(e):n.splice(t,1),ce(n)}(e.name)},children:[Object(Z.jsx)(O.a,{children:Object(Z.jsx)(G.a,{style:{color:"white"}})}),Object(Z.jsx)(u.a,{primary:e.name}),-1!==ie.indexOf(e.name)?Object(Z.jsx)(Y.a,{}):Object(Z.jsx)(D.a,{})]}),Object(Z.jsx)(J.a,{in:-1!==ie.indexOf(e.name),timeout:"auto",unmountOnExit:!0,children:Object(Z.jsx)(b.a,{component:"div",disablePadding:!0,children:e.listOfAvailableFiles.map((function(e){return Object(Z.jsxs)(h.a,{sx:{pl:4},children:[Object(Z.jsx)(O.a,{children:Object(Z.jsx)(y.a,{style:{color:"white"}})}),Object(Z.jsx)(u.a,{primary:e})]})}))})})]})}))}),Object(Z.jsx)(v.a,{sx:{width:"100%"},style:{paddingTop:"10px"},children:Object(Z.jsx)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:Object(Z.jsx)(S.a,{item:!0,xs:12,children:Object(Z.jsx)(C.a,{variant:"contained",size:"large",style:{width:200,height:60,borderRadius:5},endIcon:Object(Z.jsx)(T.a,{}),onClick:function(){console.log("Search all clients clicked");var e=[{name:"Adrian",ipAddress:"127.0.0.1",udpSocket:"8080",tcpSocket:"800",listOfAvailableFiles:["Legend of Zelda","Thingy"]},{name:"Ya boi",ipAddress:"127.0.0.1",udpSocket:"8080",tcpSocket:"80000",listOfAvailableFiles:["Legend of Jawn","Jawny"]}];re(e);var t=[];e.forEach((function(e){e.listOfAvailableFiles.forEach((function(e){t.push(e)}))})),xe(t)},loadingPosition:"end",children:Object(Z.jsx)(F.a,{children:"Search All"})})})})})]})}),Object(Z.jsx)(S.a,{item:!0,xs:12,children:Object(Z.jsxs)($,{children:[Object(Z.jsx)("p",{className:"Grid-titles",children:"Available Files"}),Object(Z.jsx)(v.a,{sx:{width:"100%"},children:Object(Z.jsx)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:Object(Z.jsxs)(S.a,{item:!0,xs:12,style:{paddingBottom:"20px",paddingLeft:"30px"},display:"flex",justifyContent:"flex-start",children:[Object(Z.jsx)(L.a,{style:{width:330},InputProps:{style:{color:"white",fontSize:"20px"},className:ye.input},InputLabelProps:{style:{color:"white",fontSize:"20px"},className:ye.input},id:"file-search",label:"File Name",variant:"standard",color:"primary",onChange:function(e){return ge(e.target.value)}}),Object(Z.jsx)(B.a,{"aria-label":"delete",onClick:function(){return console.log("File searched: "+me),void xe(["Result File search!"])},children:Object(Z.jsx)(T.a,{style:{color:"white"}})})]})})}),Object(Z.jsx)(b.a,{sx:{width:"100%",bgcolor:"#282c34",borderRadius:"4px"},children:je.map((function(e){var t="checkbox-list-label-".concat(e);return Object(Z.jsx)(p.a,{secondaryAction:Object(Z.jsx)(B.a,{children:Object(Z.jsx)(W.a,{style:{color:"white"},onClick:function(){return console.log("Download "+e)}})}),disablePadding:!0,children:Object(Z.jsxs)(h.a,{role:void 0,dense:!0,children:[Object(Z.jsx)(O.a,{children:Object(Z.jsx)(y.a,{style:{color:"white",paddingBottom:"5px"}})}),Object(Z.jsx)(u.a,{id:t,primary:e,style:{color:"white"}})]})},e)}))}),Object(Z.jsx)(v.a,{sx:{width:"100%"},style:{paddingTop:"10px"},children:Object(Z.jsx)(S.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:Object(Z.jsx)(S.a,{item:!0,xs:12,children:Object(Z.jsx)(C.a,{variant:"contained",size:"large",style:{width:200,height:60,borderRadius:5},endIcon:Object(Z.jsx)(T.a,{}),onClick:function(){console.log("Search all files clicked")},loadingPosition:"end",children:Object(Z.jsx)(F.a,{children:"Search All"})})})})})]})})]})})]})})}var H=Object(z.a)({input:{color:"white"}})((function(e){return Object(Z.jsx)(x.a,{maxSnack:3,children:Object(Z.jsx)(_,Object(j.a)({},e))})})),K=n.p+"static/media/blockchain.9f725277.svg",Q=(n(143),n(110)),V=n.n(Q),X=n(228),ee=n(16);function te(e){var t=Object(x.b)().enqueueSnackbar,n=Object(i.useState)(!1),c=Object(d.a)(n,2),a=c[0],s=c[1],l=Object(r.f)(),o=Object(i.useState)(""),j=Object(d.a)(o,2),b=j[0],p=j[1],h=Object(i.useState)(""),O=Object(d.a)(h,2),u=O[0],f=O[1],m=e.classes;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)("div",{className:"App",children:Object(Z.jsxs)("header",{className:"App-header",children:[Object(Z.jsx)("img",{src:K,className:"App-logo",alt:"logo"}),Object(Z.jsx)("p",{className:"App-title",children:"Welcome to P2PFS, a Peer to Peer File Sharing system."}),Object(Z.jsx)("div",{children:Object(Z.jsx)(X.a,{style:{width:300},InputProps:{style:{color:"white",fontSize:"20px"},className:m.input},InputLabelProps:{style:{color:"white",fontSize:"20px"},className:m.input},id:"client-name",label:"Name",variant:"standard",color:"primary",onChange:function(e){return p(e.target.value)}})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(X.a,{style:{width:300},InputProps:{style:{color:"white",fontSize:"20px"},className:m.input},InputLabelProps:{style:{color:"white",fontSize:"20px"},className:m.input},id:"client-name",label:"Server IP Address",variant:"standard",color:"primary",onChange:function(e){return f(e.target.value)}})}),Object(Z.jsx)("div",{className:"Register-button",children:Object(Z.jsx)(C.a,{variant:"contained",size:"large",style:{width:300,height:60,borderRadius:50},endIcon:Object(Z.jsx)(V.a,{}),onClick:function(){s(!0),/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi.test(u)?fetch("/register",{method:"POST",body:JSON.stringify({name:b,serverIpAddress:u})}).then((function(e){return e.json()})).then((function(e){!0===e.register?l("app"):(t("Failed to register: ".concat(e.register),{variant:"error"}),s(!1))})):(t("Failed to register: Invalid IP Address!",{variant:"error"}),s(!1))},loading:a,loadingPosition:"end",children:Object(Z.jsx)(F.a,{children:"Register"})})})]})})})}var ne=Object(ee.a)({input:{color:"white"}})((function(e){return Object(Z.jsx)(x.a,{maxSnack:3,children:Object(Z.jsx)(te,Object(j.a)({},e))})})),ie=function(){return Object(Z.jsxs)(r.c,{children:[Object(Z.jsx)(r.a,{path:"/",element:Object(Z.jsx)(ne,{})}),Object(Z.jsx)(r.a,{path:"/app",element:Object(Z.jsx)(H,{})})]})},ce=n(90);s.a.render(Object(Z.jsx)(c.a.StrictMode,{children:Object(Z.jsx)(ce.a,{children:Object(Z.jsx)(ie,{})})}),document.getElementById("root")),l()}},[[145,1,2]]]);
//# sourceMappingURL=main.6ec47ac5.chunk.js.map