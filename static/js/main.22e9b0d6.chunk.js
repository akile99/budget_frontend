(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),o=a.n(l),s=(a(17),a(1)),r=(a(18),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),h=p[0],b=p[1],f=Object(n.useState)(!1),g=Object(s.a)(f,2),E=g[0],v=g[1];return c.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},c.a.createElement("main",{className:"pa4 black-80"},c.a.createElement("div",{className:"measure"},c.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},c.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),c.a.createElement("div",{className:"mt3"},c.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),c.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){o(e.target.value)},required:!0})),c.a.createElement("div",{className:"mv3"},c.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),c.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){m(e.target.value)},required:!0}),E?c.a.createElement("p",null,"Missing Password"):c.a.createElement("p",null)),c.a.createElement("label",{className:"pa0 ma0 lh-copy f6 pointer"})),c.a.createElement("div",{className:""},c.a.createElement("input",{onClick:function(){l&&u?(b(!0),fetch(e.host+"signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:u})}).then(function(e){return e.json()}).then(function(t){"wrong credentials"!==t?e.onChange(t[0].user_id,t[0].firstname):e.onChange(-1,-1)})):l?u||(console.log("missing password!!"),v(!0)):console.log("missing email!!")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:h?"Loading":"Sign in"})),c.a.createElement("div",{className:"lh-copy mt3"},c.a.createElement("p",{onClick:function(){return e.onRegisterChange("register")},className:"f6 link dim black db pointer"},"Register")))))}),i=(a(19),function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(0),i=Object(s.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)("black"),p=Object(s.a)(d,2),h=p[0],b=p[1],f=Object(n.useState)("black"),g=Object(s.a)(f,2),E=g[0],v=g[1];return Object(n.useEffect)(function(){if(e.account_id){try{fetch("".concat(e.host,"sumCleared"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:e.account_id})}).then(function(e){return e.json()}).then(function(e){return m(e[0].sum)}),fetch("".concat(e.host,"sumPending"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:e.account_id})}).then(function(e){return e.json()}).then(function(e){o(e[0].sum)})}catch(t){console.error(t)}u<0&&u&&b("red"),l<0&&v("red")}},[e.account_id,e.submit,l,u,e.host]),c.a.createElement("div",null,c.a.createElement("h1",{className:"f3"},"".concat(e.name,", your account ballance is ...")),e.account_id?c.a.createElement("div",null,c.a.createElement("p",{className:E},"Pending $ ".concat(l)," "),c.a.createElement("p",{className:h},"Actual $ ".concat(u)," ")):c.a.createElement("h4",null,"Chose an action"))}),u=function(e){var t=e.account_id,a=e.account_name,l=e.account_type,o=Object(n.useState)(0),r=Object(s.a)(o,2),i=r[0],u=r[1];return Object(n.useEffect)(function(){try{fetch("".concat(e.host,"sumCleared"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:t})}).then(function(e){return e.json()}).then(function(e){return u(e[0].sum)})}catch(a){console.error(a)}},[t,e.submit,e.host]),c.a.createElement("div",{className:"flex"},c.a.createElement("button",{className:"fl w-30 tc tc bg-white ",onClick:function(){e.onChange(t)}},a+" "+l+" $ "+i))},m=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],o=a[1],r=function(t){e.onChange(t)};return Object(n.useEffect)(function(){fetch("".concat(e.host,"accounts"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.user_id})}).then(function(e){return e.json()}).then(function(e){o(e)})},[e.host,e.user_id]),c.a.createElement("div",null,c.a.createElement("div",{className:"flex justify-center"},c.a.createElement("h4",{className:"fl w-30 tc"},"Accounts ")),l.map(function(t,a){return c.a.createElement("div",null,c.a.createElement(u,{key:l[a].account_id+l[a].user_id,account_id:l[a].account_id,user_id:l[a].account_id,account_name:l[a].account_name,account_type:l[a].account_type,onChange:r,host:e.host}))}))},d=function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"Actions"),c.a.createElement("button",{onClick:function(){e.bills()}},"Bills"),c.a.createElement("button",{onClick:function(){e.account()}},"New Account"),c.a.createElement(m,{key:e.user_id,user_id:e.user_id,host:e.host,onChange:function(t){e.onChange(t)}}))};var p=function(e){var t=e.bill_id,a=e.bill_name,l=e.bill_website,o=e.due_date,r=Object(n.useState)(!1),i=Object(s.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)(e.amount),p=Object(s.a)(d,2),h=p[0],b=p[1],f=Object(n.useState)(l),g=Object(s.a)(f,2),E=g[0],v=g[1],j=Object(n.useState)(a),w=Object(s.a)(j,2),N=w[0],y=w[1],C=function(e){var t=new Date(e),a=t.getDate();return t.getMonth()+1+"/"+a}(o),O=function(){m(!u)};return c.a.createElement("div",null,u?c.a.createElement("div",null,c.a.createElement("input",{className:"fl w-25 pa1 tc ml1",type:"text",id:"name",name:"name",value:a,onChange:function(e){y(e.target.value)}}),c.a.createElement("input",{className:"fl w-25 pa1 tc ml1",type:"double",id:"amount",name:"amount",value:h,onChange:function(e){b(e.target.value)}}),c.a.createElement("input",{className:"fl w-25 pa1 tc ml1",type:"text",id:"website",name:"website",value:E,onChange:function(e){v(e.target.value)}}),c.a.createElement("button",{className:"fl w-10 pa1 tc ml1",onClick:function(){fetch("".concat(e.host,"update_bill"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({bill_id:t,bill_name:N,amount:h,bill_website:E})}).then(function(e){return e.json()}).catch(console.log),O()}},"Update ")):c.a.createElement("div",null,c.a.createElement("p",{className:"fl w-25 pa1 tc ml1"},N),c.a.createElement("p",{className:"fl w-25 pa1 tc"},h),c.a.createElement("p",{className:"fl w-25 pa1 tc"},C),c.a.createElement("button",{className:"fl pa1",onClick:function(){window.open(l,"_blank")}},"Pay"),c.a.createElement("button",{className:"fl pa1",onClick:O},"Edit")))},h=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(1),i=Object(s.a)(r,1)[0];return Object(n.useEffect)(function(){fetch("".concat(e.host,"upcomingBills"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.user_id})}).then(function(e){return e.json()}).then(function(e){o(e)})},[i,e.host,e.user_id]),c.a.createElement("div",null,c.a.createElement("div",{className:"flex justify-center"},c.a.createElement("h3",{className:"fl w-25 pa1 tc ml1"},"Vender"),c.a.createElement("h3",{className:"fl w-25 pa1 tc"},"Amount"),c.a.createElement("h3",{className:"fl w-25 pa1 tc"},"Due Day"),c.a.createElement("h3",{className:"fl w-10 pa1 tc"},"Web Site")),l.map(function(t,a){return c.a.createElement(p,{key:l[a].bill_id,bill_id:l[a].bill_id,amount:l[a].amount,bill_name:l[a].bill_name,due_date:l[a].due_day,bill_website:l[a].bill_website,host:e.host})}))},b=a(9);var f=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],o=a[1],r=[];return Object(n.useEffect)(function(){try{fetch(e.host+"category").then(function(e){return e.json()}).then(function(e){e.map(function(e){r.push({label:e.category,value:e.catid})})}).then(o(r))}catch(t){console.error(t)}},[e.host]),c.a.createElement("div",{className:"w-30"},c.a.createElement(b.a,{onChange:function(t){e.onChange(t.value,t.label)},options:l}))},g=(a(23),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),h=p[0],b=p[1],g=Object(n.useState)("Pending"),E=Object(s.a)(g,2),v=E[0],j=E[1],w=Object(n.useState)(),N=Object(s.a)(w,2),y=N[0],C=N[1],O=function(t){fetch(e.host+"insert",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:l,vendor:u,category:y,status:v,amount:t,account_id:e.account_id})}).then(function(e){return e.json()}).catch(console.log),o(""),m(""),o(""),b(""),j("Pending"),C(""),e.onChange()};return c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"form center pa4 br3 shadow-5"},c.a.createElement("input",{className:"f4 pa2 w-25 center",type:"date",id:"date",name:"date",value:l,onChange:function(e){o(e.target.value)}}),c.a.createElement("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Vendor",id:"Vendor",name:"Vendor",value:u,onChange:function(e){m(e.target.value)}}),c.a.createElement("input",{className:"f4 pa2 w-25 center",type:"double",placeholder:"Amount",id:"Amount",name:"Amount",value:h,onChange:function(e){var t=e.target.value.replace(/,/g,"");b(t)}}),c.a.createElement("button",{className:"w-30 link ph3 pv2 dib btn-white",id:"CommitTransactionBTN",onClick:function(e){j("Pending"===v?"Cleared":"Pending")}},v),c.a.createElement(f,{className:"f4 pa2 w-30 center",onChange:function(e){C(e)},host:e.host}),c.a.createElement("button",{className:"w-10 grow f4 link ph3 pv2 dib white bg-light-blue",id:"CommitTransactionBTN",onClick:function(){O(-h)}},"Expense"),c.a.createElement("button",{className:"w-10 grow f4 link ph3 pv2 dib white bg-light-blue",id:"CommitTransactionBTN",onClick:function(){O(h)}},"Income")))}),E=function(e){return c.a.createElement("div",{style:{overflowY:"scroll",height:"500px"},key:e.children},e.children)},v=(a(24),function(e){var t=e.transaction_id,a=e.accountid,l=Object(n.useState)(!1),o=Object(s.a)(l,2),r=o[0],i=o[1],u=Object(n.useState)(e.date),m=Object(s.a)(u,2),d=m[0],p=m[1],h=Object(n.useState)(e.vendor),b=Object(s.a)(h,2),g=b[0],E=b[1],v=Object(n.useState)(e.amount),j=Object(s.a)(v,2),w=j[0],N=j[1],y=Object(n.useState)(e.category),C=Object(s.a)(y,2),O=C[0],_=C[1],S=Object(n.useState)(e.status),k=Object(s.a)(S,2),x=k[0],T=k[1];var A=function(e){i(!r)},F=function(e){var t=new Date(e),a=t.getFullYear();return t.getMonth()+1+"-"+(t.getDate()+1)+"-"+a}(d),J=function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate();return n=n<10?"0".concat(n):"".concat(n),c=c<10?"0".concat(c):"".concat(c),"".concat(a,"-").concat(n,"-").concat(c)}(d);return c.a.createElement("div",null,r?c.a.createElement("div",{className:"flex justify-center"},c.a.createElement("p",{className:"fl w-10 tc"},t),c.a.createElement("input",{className:"f4 pa2 w-60 center",type:"date",id:"date",name:"date",value:J,onChange:function(e){p(e.target.value)}}),c.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"Vendor",id:"Vendor",name:"Vendor",value:g,onChange:function(e){E(e.target.value)}}),c.a.createElement("input",{className:"f4 pa2 w-70 center",type:"double",placeholder:"Amount",id:"Amount",name:"Amount",value:w,onChange:function(e){N(e.target.value)}}),c.a.createElement(f,{onChange:function(e){_(e)}}),c.a.createElement("button",{onClick:A},"Cancel "),c.a.createElement("button",{onClick:function(){fetch(e.host+"update",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:d,vendor:g,category:O,status:e.status,amount:w,transaction_id:t})}).then(function(e){return e.json()}).catch(console.log),E(g),p(J),N(w),_(O),A(),e.onChange()}},"Update ")):c.a.createElement("div",{className:"flex justify-center"},c.a.createElement("p",{className:"fl w-10 tc"},F),c.a.createElement("p",{className:"fl w-30 tc"},g),c.a.createElement("p",{className:"fl w-20 tc"},"$",w),c.a.createElement("button",{className:"fl w-10 tc bg-white ",onClick:function(){return function(t,n,c){fetch("".concat(e.host,"updateStatus"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({transaction_id:t,accountid:a})}).then(function(e){return e.json()}).catch(console.log),T("Cleared"===n?"Pending":"Cleared"),e.onChange(),console.log(t,c)}(t,x,g)}},x),c.a.createElement("p",{className:"fl w-30 tc"},O),c.a.createElement("button",{className:"fl w-10 tc bg-white",onClick:function(){return A()}},"edit")))}),j=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],o=a[1],r=new Date;r.setDate(r.getDate()-30);var i=r.toLocaleString(),u=function(t){e.onChange()};return Object(n.useEffect)(function(){fetch("".concat(e.host,"transactions"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:e.account_id,from_date:i,to_date:(new Date).toLocaleString()})}).then(function(e){return e.json()}).then(function(e){o(e)})},[e.submit,e.account_id,e.host]),c.a.createElement("div",null,c.a.createElement("div",{className:"flex justify-center"},c.a.createElement("h3",{className:"fl w-10 pa1 tc"},"Date"),c.a.createElement("h3",{className:"fl w-30 pa1 tc"},"Vender"),c.a.createElement("h3",{className:"fl w-20 pa1 tc"},"Amount"),c.a.createElement("h3",{className:"fl w-10 pa1 tc"},"Status"),c.a.createElement("h3",{className:"fl w-30 pa1 tc"},"Category"),c.a.createElement("h3",{className:"fl w-10 pa1 tc"},"remove")),l.map(function(t,a){return c.a.createElement(v,{key:l[a].transaction_id,transaction_id:l[a].transaction_id,accountid:l[a].accountid,date:l[a].date,vendor:l[a].vendor,amount:l[a].amount,status:l[a].status,category:l[a].category,host:e.host,onChange:u,submit:e.submit})}))},w=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),h=p[0],b=p[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"form center pa4 br3 shadow-5"},c.a.createElement("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Account Name",id:"account_name",name:"account_name",value:u,onChange:function(e){m(e.target.value)}}),c.a.createElement("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Account Type",id:"account_type",name:"account_type",value:l,onChange:function(e){o(e.target.value)}}),c.a.createElement("input",{className:"f4 pa2 w-25 center",type:"double",placeholder:"Openning Balance",id:"open_balance",name:"open_balance",value:h,onChange:function(e){b(e.target.value)}}),c.a.createElement("button",{onClick:function(){fetch(e.host+"newaccount",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_name:u,account_type:l,openningbalance:h,user_id:e.user_id})}).then(function(e){return e.json()}).catch(console.log)}},"New Account")))},N=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(!1),u=Object(s.a)(r,2),m=u[0],p=u[1],b=Object(n.useState)(),f=Object(s.a)(b,2),v=f[0],N=f[1],y=Object(n.useState)(!1),C=Object(s.a)(y,2),O=C[0],_=C[1],S=Object(n.useState)(!1),k=Object(s.a)(S,2),x=k[0],T=k[1],A=Object(n.useState)(!0),F=Object(s.a)(A,2),J=F[0],P=F[1],D=Object(n.useState)(""),R=Object(s.a)(D,2),I=R[0],B=R[1],L=Object(n.useState)(""),V=Object(s.a)(L,2),M=V[0],$=V[1],q=function(){o(!l)},U=function(){p(!m)},Y=function(e){P(!J)},W=function(){_(!O)};return c.a.createElement("div",null,c.a.createElement(i,{name:e.name,host:e.host,account_id:v,submit:l}),O?c.a.createElement("div",null,c.a.createElement(w,{host:e.host,user_id:e.user_id}),c.a.createElement("button",{onClick:W},"exit")):c.a.createElement("div",null),c.a.createElement("button",{onClick:function(){T(!x)}},"Side Bar"),c.a.createElement("div",{className:"flex flex-row no-wrap center"},x?c.a.createElement("div",{className:"outline w-25 pa2 mr2 ml2"},c.a.createElement(E,null,c.a.createElement(d,{key:e.user_id,user_id:e.user_id,host:e.host,onChange:function(e){N(e),Y()},account:W,bills:Y}))):c.a.createElement("div",null),c.a.createElement("div",{className:"outline w-90 pa1 mr1"},c.a.createElement("div",null,!0===m?c.a.createElement("div",null,c.a.createElement(g,{account_id:v,host:e.host,submit:l,onChange:q}),c.a.createElement("button",{onClick:U}," Exit ")):c.a.createElement("button",{onClick:U}," Insert "),c.a.createElement("input",{className:"f4 pa2 w-25 center",type:"date",id:"from_date",name:"from_dateate",value:I,onChange:function(e){B(e.target.value)}}),c.a.createElement("input",{className:"f4 pa2 w-25 center",type:"date",id:"to_date",name:"to_date",value:M,onChange:function(e){$(e.target.value)}})),J?c.a.createElement(E,null,c.a.createElement(h,{key:e.user_id,host:e.host,user_id:e.user_id})):c.a.createElement(E,null,c.a.createElement(j,{key:v,account_id:v,host:e.host,submit:l,onChange:q})))))},y=a(6),C=a(7),O=a(10),_=a(8),S=a(11),k=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(O.a)(this,Object(_.a)(t).call(this,e))).onFirstNameChange=function(e){a.setState({firstname:e.target.value})},a.onLastNameChange=function(e){a.setState({lastname:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitRegister=function(){fetch(a.props.host+"register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,firstname:a.state.firstname,lastname:a.state.lastname})}).then(function(e){return e.json()}).then(function(e){e&&e.user_id&&a.props.onChange()})},a.state={email:"",password:"",firstname:"",lastname:""},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.onRegisterChange;return c.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},c.a.createElement("main",{className:"pa4 black-80"},c.a.createElement("div",{className:"measure"},c.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},c.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),c.a.createElement("div",{className:"mt3"},c.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"First Name"),c.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"firstname",id:"firstname",onChange:this.onFirstNameChange,required:!0})),c.a.createElement("div",{className:"mt3"},c.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Last Name"),c.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"lastname",id:"lastname",onChange:this.onLastNameChange})),c.a.createElement("div",{className:"mt3"},c.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),c.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),c.a.createElement("div",{className:"mv3"},c.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),c.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})),c.a.createElement("label",{className:"pa0 ma0 lh-copy f6 pointer"})),c.a.createElement("div",{className:""},c.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})),c.a.createElement("div",{className:"lh-copy mt3"},c.a.createElement("p",{onClick:function(){return e("signin")},className:"f6 link dim black db pointer"},"Sign In")))))}}]),t}(c.a.Component),x=function(e){var t=e.onRouteChange;return e.isSignedIn?c.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},c.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):c.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},c.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),c.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},T=function(e){var t=e.onRouteChange;e.isSignedIn;return c.a.createElement("div",null,c.a.createElement("h1",{className:"f3"}," User and password combination do not exist"),c.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Try again"))};var A=function(){var e="https://star-ship-enterprise.herokuapp.com/",t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(!0),h=Object(s.a)(p,2),b=h[0],f=h[1],g=Object(n.useState)(!1),E=Object(s.a)(g,2),v=E[0],j=E[1],w=function(e,t){-1!==e?(o(t),d(e),j(!0)):d(-1)},y=function(){j(!1),d(0)},C=function(){f(!b)};return c.a.createElement("div",{className:"App"},v?c.a.createElement("div",null,c.a.createElement("div",{className:"pa4"},c.a.createElement(x,{isSignedIn:v,onRouteChange:y})),c.a.createElement("div",null,c.a.createElement(N,{host:e,user_id:m,name:l}))):c.a.createElement("div",null,b?c.a.createElement("div",null,-1===m?c.a.createElement(T,{onRouteChange:y}):c.a.createElement(r,{host:e,onChange:w,onRegisterChange:C})):c.a.createElement(k,{host:e,onChange:w,onRegisterChange:C})))},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),l(e),o(e)})};a(25);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),F()}],[[12,1,2]]]);
//# sourceMappingURL=main.22e9b0d6.chunk.js.map