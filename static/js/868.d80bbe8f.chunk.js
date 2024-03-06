"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[868],{3868:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var o,r,i,a=t(2791),c=t(4270),s=t(9434),u=t(7689),d=t(5705),l=t(6727),m=t(9482),x=t(3634),p=t(2946),f=t(5218),b=t(1538),g=t(168),h=t(1087),w=t(5867),j=(0,w.vJ)(o||(o=(0,g.Z)(["\nbody{\n\n    background-color: #e8e8e8;\n}\n"]))),v=(0,w.zo)(d.l0)(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background-color: #e8e8e8;\n  width: 380px;\n  margin: auto;\n  border: 1px solid #e8e8e8;\n  border-radius: 1em;\n  padding: 1em 3.2em;\n  margin-bottom: 1em;\n  text-align: center;\n  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 6px #ffffff;\n\n  button {\n    font-weight: bold;\n    margin-top: 1em;\n    margin-bottom: 1.6em;\n    padding: 0.3em 1em;\n    border-radius: 1em;\n    color: #5a5a5a;\n    background: #e8e8e8;\n    border: 2px solid #e8e8e8;\n    transition: all 0.3s;\n    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\n  }\n\n  button:hover,\n  button:focus {\n    border: 1px solid #77c063;\n    color: #090909;\n  }\n\n  label {\n    font-style: oblique;\n    font-weight: 500;\n    color: #5a5a5a;\n    margin-bottom: 0.7em;\n\n    b {\n      font-size: 13px;\n      font-style: normal;\n      font-weight: 500;\n      color: #ff0000;\n      text-transform: lowercase;\n    }\n\n    input {\n      margin-top: 8px;\n      width: 100%;\n      padding: 6px 12px;\n      border: 1px solid #e8e8e8;\n      border-radius: 1em;\n      outline: none;\n      text-align: center;\n      box-shadow: inset 4px 4px 6px #c5c5c5, inset -4px -4px 6px #ffffff;\n    }\n  }\n"]))),k=(0,w.zo)(h.rU)(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  color: blue;\n  margin: 22px auto;\n  padding: 10px;\n  width: 780px;\n  height: fit-content;\n  border: 4px outset #000;\n  border-radius: 13px;\n  background-color: rgba(119, 136, 153, 0.8);\n  font-size: 22px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.02em;\n\n  &.active {\n    color: blue;\n  }\n\n  svg {\n    width: 32px;\n    height: 32px;\n    margin-right: 8px;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: rgba(119, 136, 153, 0.2);\n  }\n  /* h3 {\n    color: blue;\n    border: 4px outset blue;\n    background-color: yellow;\n    max-width: max-content;\n    border-radius: 8px;\n    padding-left: 8px;\n    padding-right: 8px;\n    margin: auto;\n    margin-bottom: 28px;\n  } */\n"]))),y=t(8346),A=t(184),C=l.Ry().shape({name:l.Z_().matches(/^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$/,"Wrong name format").required("Must be filled"),number:l.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Wrong number format").required("Must be filled")});function Z(){var n,e,t=(0,s.I0)(),o=(0,u.s0)(),r=(0,u.TH)(),i=(0,a.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),l=(0,u.UO)().contactId,g=(0,s.v9)(p.Af),h=g.find((function(n){return n.id===l})),w={name:h?h.name:"",number:h?h.number:""};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(k,{to:i.current,children:[(0,A.jsx)(m.sxm,{})," Go back"]}),(0,A.jsxs)(y.x,{children:[(0,A.jsx)(c.q,{title:"Edit contact"}),(0,A.jsx)("h2",{children:"Let's edit your contact"}),(0,A.jsx)(d.J9,{initialValues:w,validationSchema:C,onSubmit:function(n){var e={name:n.name,number:n.number,contactId:l},r=n.name;if(g.some((function(n){return n.name.toLowerCase()===r.toLowerCase()})))return f.Am.dismiss(b.o),void f.Am.success("Oops! ".concat(r," is already exists!!! Please change it..."),{duration:2e3,position:"top-center"});t((0,x.LG)(e)),f.Am.dismiss(b.o),f.Am.success("Contact of ".concat(e.name," is updated!"),{duration:2e3,position:"top-center"}),setTimeout((function(){o(-1)}),2200)},children:(0,A.jsxs)(v,{children:[(0,A.jsxs)("label",{children:[(0,A.jsx)(d.gN,{type:"text",name:"name",placeholder:"".concat(h.name)}),(0,A.jsx)(d.Bc,{name:"name",component:"b"})]}),(0,A.jsxs)("label",{children:[(0,A.jsx)(d.gN,{type:"tel",name:"number",placeholder:"".concat(h.number)}),(0,A.jsx)(d.Bc,{name:"number",component:"b"})]}),(0,A.jsx)("button",{type:"submit",children:"Confirm changes"})]})}),(0,A.jsx)(f.x7,{}),(0,A.jsx)(j,{})]})]})}},2946:function(n,e,t){t.d(e,{AD:function(){return a},Af:function(){return r},G$:function(){return i},hF:function(){return c}});var o=t(6916),r=function(n){return n.contacts.items},i=function(n){return n.contacts.items.length},a=function(n){return n.filter},c=(0,o.P1)([r,a],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=868.d80bbe8f.chunk.js.map