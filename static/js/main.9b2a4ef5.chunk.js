(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{22:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},61:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(7),i=n.n(s),o=(n(39),n(2)),r=(n(40),n(1)),l=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),d=l[0],j=l[1],u=Object(a.useState)(!1),b=Object(o.a)(u,2),h=b[0],m=b[1],p=Object(a.useState)(!1),O=Object(o.a)(p,2),f=O[0],g=O[1];return Object(r.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(r.jsx)("main",{className:"pa4 black-80",children:Object(r.jsxs)("div",{className:"measure",children:[Object(r.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(r.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){s(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"mv3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){j(e.target.value)},required:!0}),f?Object(r.jsx)("p",{children:"Missing Password"}):Object(r.jsx)("p",{})]}),Object(r.jsx)("label",{className:"pa0 ma0 lh-copy f6 pointer"})]}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("input",{onClick:function(){c&&d?(m(!0),fetch(e.host+"signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:d})}).then((function(e){return e.json()})).then((function(t){"wrong credentials"!==t?e.onChange(t[0].user_id,t[0].firstname):e.onChange(-1,-1)}))):c?d||(console.log("missing password!!"),g(!0)):console.log("missing email!!")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:h?"Loading":"Sign in"})}),Object(r.jsx)("div",{className:"lh-copy mt3",children:Object(r.jsx)("p",{onClick:function(){return e.onRegisterChange("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})},d=n(27),j=n(28),u=n(33),b=n(32),h=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onFirstNameChange=function(e){a.setState({firstname:e.target.value})},a.onLastNameChange=function(e){a.setState({lastname:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitRegister=function(){fetch(a.props.host+"register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,firstname:a.state.firstname,lastname:a.state.lastname})}).then((function(e){return e.json()})).then((function(e){e&&e.user_id&&a.props.onChange()}))},a.state={email:"",password:"",firstname:"",lastname:""},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.onRegisterChange;return Object(r.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(r.jsx)("main",{className:"pa4 black-80",children:Object(r.jsxs)("div",{className:"measure",children:[Object(r.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(r.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"First Name"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"firstname",id:"firstname",onChange:this.onFirstNameChange,required:!0})]}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Last Name"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"lastname",id:"lastname",onChange:this.onLastNameChange})]}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(r.jsxs)("div",{className:"mv3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]}),Object(r.jsx)("label",{className:"pa0 ma0 lh-copy f6 pointer"})]}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})}),Object(r.jsx)("div",{className:"lh-copy mt3",children:Object(r.jsx)("p",{onClick:function(){return e("signin")},className:"f6 link dim black db pointer",children:"Sign In"})})]})})})}}]),n}(c.a.Component),m=function(e){var t=e.onRouteChange;e.isSignedIn;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"f3",children:" User and password combination do not exist"}),Object(r.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Try again"})]})},p=(n(42),function(e){var t=e.onRouteChange,n=e.isSignedIn,a=e.name;return n?Object(r.jsxs)("nav",{className:"navigation",children:[Object(r.jsx)("p",{className:"f3",children:a}),Object(r.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})]}):Object(r.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(r.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(r.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})});function O(e,t,n,c){var s=Object(a.useState)(),i=Object(o.a)(s,2),r=i[0],l=i[1],d=Object(a.useState)("black"),j=Object(o.a)(d,2),u=j[0],b=j[1];return Object(a.useEffect)((function(){if(e){try{fetch("".concat(t).concat(n),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:e})}).then((function(e){return e.json()})).then((function(e){return l(e[0].sum)}))}catch(a){console.error(a)}b(r<0?"red":"black")}}),[e,r,t,c]),[r,u]}n(22);var f=function(e){return Object(r.jsxs)("p",{className:e.balanceColor,children:["$ ".concat(e.balance)," "]})},g=function(e){var t=O(e.account_id,e.host,"sumPending",e.submit),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("p",{className:c,children:["$ ".concat(a)," "]})},x=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",height:"500px"},children:e.children},e.children)},v=n(31);var N=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=[];return Object(a.useEffect)((function(){try{fetch(e.host+"category").then((function(e){return e.json()})).then((function(e){e.map((function(e){i.push({label:e.category,value:e.catid})}))})).then(s(i))}catch(t){console.error(t)}}),[e.host]),Object(r.jsx)("div",{className:"w-30",children:Object(r.jsx)(v.a,{onChange:function(t){e.onChange(t.value,t.label)},options:c})})},C=(n(25),function(e){var t=e.transaction_id,n=e.accountid,c=Object(a.useState)(!1),s=Object(o.a)(c,2),i=s[0],l=s[1],d=Object(a.useState)(e.date),j=Object(o.a)(d,2),u=j[0],b=j[1],h=Object(a.useState)(e.vendor),m=Object(o.a)(h,2),p=m[0],O=m[1],f=Object(a.useState)(e.amount),g=Object(o.a)(f,2),x=g[0],v=g[1],C=Object(a.useState)(e.category),w=Object(o.a)(C,2),y=w[0],_=w[1],S=Object(a.useState)(e.status),k=Object(o.a)(S,2),T=k[0],A=k[1];var I=function(e){l(!i)},F=function(e){var t=new Date(e),n=t.getFullYear();return t.getMonth()+1+"-"+(t.getDate()+1)+"-"+n}(u),P=function(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,c=t.getDate();return a=a<10?"0".concat(a):"".concat(a),c=c<10?"0".concat(c):"".concat(c),"".concat(n,"-").concat(a,"-").concat(c)}(u);return Object(r.jsx)("div",{className:"outline",children:i?Object(r.jsxs)("div",{className:"flex justify-center",children:[Object(r.jsx)("p",{className:"fl w-10 tc",children:t}),Object(r.jsx)("input",{className:"f4 pa2 w-60 center",type:"date",id:"date",name:"date",value:P,onChange:function(e){b(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"Vendor",id:"Vendor",name:"Vendor",value:p,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-70 center",type:"double",placeholder:"Amount",id:"Amount",name:"Amount",value:x,onChange:function(e){v(e.target.value)}}),Object(r.jsx)(N,{onChange:function(e){_(e)}}),Object(r.jsx)("button",{onClick:I,children:"Cancel "}),Object(r.jsx)("button",{onClick:function(){fetch(e.host+"update",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:u,vendor:p,category:y,status:e.status,amount:x,transaction_id:t})}).then((function(e){return e.json()})).catch(console.log),O(p),b(P),v(x),_(y),I(),e.onChange()},children:"Update "})]}):Object(r.jsxs)("div",{className:"flex justify-left",children:[Object(r.jsx)("p",{className:"date transaction",children:F}),Object(r.jsx)("p",{className:"vendor transaction",children:p}),Object(r.jsx)("p",{className:"dollar transaction",children:"$"}),Object(r.jsx)("p",{className:"amount transaction",children:x}),Object(r.jsx)("p",{className:"status transaction",onClick:function(){return function(t,a,c){fetch("".concat(e.host,"updateStatus"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({transaction_id:t,accountid:n})}).then((function(e){return e.json()})).catch(console.log),A("Cleared"===a?"Pending":"Cleared"),e.onChange()}(t,T)},children:T}),Object(r.jsx)("p",{className:"category transaction",children:y}),Object(r.jsx)("p",{className:"edit transaction",onClick:function(){return I()},children:"edit"})]})})}),w=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=function(t){e.onChange()};return Object(a.useEffect)((function(){try{fetch("".concat(e.host,"transactions"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:e.account_id,from_date:e.from_date,to_date:e.to_date})}).then((function(e){return e.json()})).then((function(e){s(e)}))}catch(t){console.log(t)}}),[e.submit,e.account_id,e.host,e.from_date,e.to_date,e.update]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"outline flex justify-center",children:[Object(r.jsx)("p",{className:"date transaction",children:"Date"}),Object(r.jsx)("p",{className:"vendor transaction",children:"Vender"}),Object(r.jsx)("p",{className:"dollar transaction",children:"\xa0\xa0"}),Object(r.jsx)("p",{className:"amount transaction",children:"Amount"}),Object(r.jsx)("p",{className:"status transaction",children:"Status"}),Object(r.jsx)("p",{className:"category transaction",children:"Category"}),Object(r.jsx)("p",{className:"edit transaction",children:"Edit"})]}),c.map((function(t,n){return Object(r.jsx)(C,{className:"transactions",transaction_id:c[n].transaction_id,accountid:c[n].accountid,date:c[n].date,vendor:c[n].vendor,amount:(Math.round(100*c[n].amount)/100).toFixed(2),status:c[n].status,category:c[n].category,host:e.host,onChange:i,submit:e.submit},c[n].transaction_id)}))]})},y=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),d=l[0],j=l[1],u=Object(a.useState)(""),b=Object(o.a)(u,2),h=b[0],m=b[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Account Name",id:"account_name",name:"account_name",value:d,onChange:function(e){j(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Account Type",id:"account_type",name:"account_type",value:c,onChange:function(e){s(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"double",placeholder:"Openning Balance",id:"open_balance",name:"open_balance",value:h,onChange:function(e){m(e.target.value)}}),Object(r.jsx)("button",{onClick:function(){fetch(e.host+"newaccount",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_name:d,account_type:c,openningbalance:h,user_id:e.user_id})}).then((function(e){return e.json()})).catch(console.log)},children:"New Account"})]})})};var _=function(e){var t=e.bill_id,n=e.bill_name,c=e.bill_website,s=e.due_date,i=Object(a.useState)(!1),l=Object(o.a)(i,2),d=l[0],j=l[1],u=Object(a.useState)(e.amount),b=Object(o.a)(u,2),h=b[0],m=b[1],p=Object(a.useState)(c),O=Object(o.a)(p,2),f=O[0],g=O[1],x=Object(a.useState)(n),v=Object(o.a)(x,2),N=v[0],C=v[1],w=function(e){var t=new Date(e),n=t.getDate();return t.getMonth()+1+"/"+n}(s),y=function(){j(!d)};return Object(r.jsx)("div",{children:d?Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{className:"fl w-25 pa1 tc ml1",type:"text",id:"name",name:"name",value:n,onChange:function(e){C(e.target.value)}}),Object(r.jsx)("input",{className:"fl w-25 pa1 tc ml1",type:"double",id:"amount",name:"amount",value:h,onChange:function(e){m(e.target.value)}}),Object(r.jsx)("input",{className:"fl w-25 pa1 tc ml1",type:"text",id:"website",name:"website",value:f,onChange:function(e){g(e.target.value)}}),Object(r.jsx)("button",{className:"fl w-10 pa1 tc ml1",onClick:function(){fetch("".concat(e.host,"update_bill"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({bill_id:t,bill_name:N,amount:h,bill_website:f})}).then((function(e){return e.json()})).catch(console.log),y()},children:"Update "})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"fl w-25 pa1 tc ml1",children:N}),Object(r.jsx)("p",{className:"fl w-25 pa1 tc",children:h}),Object(r.jsx)("p",{className:"fl w-25 pa1 tc",children:w}),Object(r.jsx)("button",{className:"fl pa1",onClick:function(){window.open(c,"_blank")},children:"Pay"}),Object(r.jsx)("button",{className:"fl pa1",onClick:y,children:"Edit"})]})})},S=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(1),l=Object(o.a)(i,1)[0];return Object(a.useEffect)((function(){fetch("".concat(e.host,"upcomingBills"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.user_id})}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[l,e.host,e.user_id]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"flex justify-center",children:[Object(r.jsx)("h3",{className:"fl w-25 pa1 tc ml1",children:"Vender"}),Object(r.jsx)("h3",{className:"fl w-25 pa1 tc",children:"Amount"}),Object(r.jsx)("h3",{className:"fl w-25 pa1 tc",children:"Due Day"}),Object(r.jsx)("h3",{className:"fl w-10 pa1 tc",children:"Web Site"})]}),c.map((function(t,n){return Object(r.jsx)(_,{bill_id:c[n].bill_id,amount:c[n].amount,bill_name:c[n].bill_name,due_date:c[n].due_day,bill_website:c[n].bill_website,host:e.host},c[n].bill_id)}))]})},k=(n(61),function(e){var t=(new Date).toISOString().slice(0,10),n=Object(a.useState)(t),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),j=d[0],u=d[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),m=h[0],p=h[1],O=Object(a.useState)("Pending"),f=Object(o.a)(O,2),g=f[0],x=f[1],v=Object(a.useState)(),C=Object(o.a)(v,2),w=C[0],y=C[1],_=function(t){fetch(e.host+"insert",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:s,vendor:j,category:w,status:g,amount:t,account_id:e.account_id})}).then((function(e){return e.json()})).then(e.onChange()).catch(console.log),u(""),p(""),x("Pending")};return Object(r.jsx)("div",{className:"center",children:Object(r.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"date",id:"date",name:"date",value:s,onChange:function(e){i(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Vendor",id:"Vendor",name:"Vendor",value:j,onChange:function(e){u(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"double",placeholder:"Amount",id:"Amount",name:"Amount",value:m,onChange:function(e){var t=e.target.value.replace(/,/g,"");p(t)}}),Object(r.jsx)("button",{className:"w-30 link ph3 pv2 dib btn-white",id:"CommitTransactionBTN",onClick:function(e){x("Pending"===g?"Cleared":"Pending")},children:g}),Object(r.jsx)(N,{className:"f4 pa2 w-30 center",onChange:function(e){y(e)},host:e.host}),Object(r.jsx)("button",{className:"w-10 grow f4 link ph3 pv2 dib white bg-light-blue",id:"CommitTransactionBTN",onClick:function(){_(-m)},children:"Expense"}),Object(r.jsx)("button",{className:"w-10 grow f4 link ph3 pv2 dib white bg-light-blue",id:"CommitTransactionBTN",onClick:function(){_(m)},children:"Income"})]})})}),T=(n(26),function(e){var t=e.account_id,n=e.account_name,a=e.account_type,c=O(t,e.host,"sumCleared",e.submit),s=Object(o.a)(c,2),i=s[0];s[1];return Object(r.jsxs)("div",{id:"Accounts",onClick:function(){e.onChange(t)},children:[Object(r.jsx)("p",{className:"Account",children:n+" "+a}),Object(r.jsx)("p",{className:"Account",children:i})]})}),A=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=function(t){e.onChange(t)};return Object(a.useEffect)((function(){fetch("".concat(e.host,"accounts"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.user_id})}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[e.host,e.user_id,e.submit]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsx)("h2",{className:"Account",children:"Accounts "})}),c.map((function(t,n){return Object(r.jsx)("div",{children:Object(r.jsx)(T,{className:"Account",account_id:c[n].account_id,user_id:c[n].account_id,account_name:c[n].account_name,account_type:c[n].account_type,onChange:i,host:e.host,submit:e.submit},c[n].account_id+c[n].user_id)})}))]})};function I(e,t){var n=Object(a.useState)((function(){return function(e,t){return JSON.parse(sessionStorage.getItem(e))||(t instanceof Function?t():t)}(e,t)})),c=Object(o.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){sessionStorage.setItem(e,JSON.stringify(s))}),[s]),[s,i]}var F=n(16),P=n(17),D=n(6);n(65);var J=function(){var e="https://star-ship-enterprise.herokuapp.com/",t=I("name",""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=I("user_id",""),d=Object(o.a)(i,2),j=d[0],u=d[1],b=I("isSignedIn",!1),v=Object(o.a)(b,2),N=v[0],C=v[1],_=Object(a.useState)(!0),T=Object(o.a)(_,2),J=T[0],R=T[1],E=I("account_id",""),B=Object(o.a)(E,2),M=B[0],V=B[1],L=I("sideBar",!0),q=Object(o.a)(L,2),U=q[0],Y=q[1],$=Object(a.useState)(!1),z=Object(o.a)($,2),W=z[0],G=z[1],H=new Date;H.setDate(H.getDate()-60);var K=(new Date).toISOString().split("T")[0],Q=H.toISOString().split("T")[0],X=Object(a.useState)(!1),Z=Object(o.a)(X,2),ee=Z[0],te=Z[1],ne=Object(a.useState)(!0),ae=Object(o.a)(ne,2),ce=ae[0],se=ae[1],ie=Object(a.useState)(!1),oe=Object(o.a)(ie,2),re=oe[0],le=oe[1],de=O(M,e,"sumCleared",W),je=Object(o.a)(de,2),ue=je[0],be=je[1],he=function(e,t){-1!==e?(s(t),u(e),C(!0)):u(-1)},me=function(){C(!1),u(),V(),s(),le(!1),sessionStorage.clear()},pe=function(){R(!J)},Oe=function(){G(!W)},fe=function(){Y(!U)},ge=function(){se(!0),V(),le(!1)};return Object(r.jsx)("div",{className:"App",children:N?Object(r.jsxs)("div",{id:"LandingPage",children:[Object(r.jsxs)("nav",{children:[Object(r.jsx)("div",{className:"menu",children:Object(r.jsxs)(D.a,{children:[Object(r.jsx)(D.a.Toggle,{variant:"light",id:"dropdown-basic",children:Object(r.jsx)(F.a,{icon:P.a,size:"2x"})}),Object(r.jsx)(D.a.Menu,{children:!ce||M?Object(r.jsx)("div",{children:M?Object(r.jsxs)("div",{children:[Object(r.jsx)(D.a.Item,{onClick:function(){le(!re)},children:"Add Transaction"}),Object(r.jsx)(D.a.Item,{onClick:ge,children:"Bills"})]}):Object(r.jsx)(D.a.Item,{onClick:ge,children:"Bills"})}):Object(r.jsx)("div",{children:Object(r.jsx)(D.a.Item,{onClick:function(){se(!1)},children:"Accounts"})})})]})}),Object(r.jsxs)("div",{className:"Navigation",children:[M?Object(r.jsxs)("div",{className:"Navigation",children:[Object(r.jsx)("p",{children:"Actual"}),Object(r.jsx)(f,{className:"f3",balance:ue,balanceColor:be}),Object(r.jsx)(g,{className:"f3",host:e,account_id:M,submit:W})]}):Object(r.jsx)("p",{}),Object(r.jsx)(p,{isSignedIn:N,name:c,onRouteChange:me})]})]}),re?Object(r.jsx)("div",{id:"insertTransaction",children:Object(r.jsx)(k,{account_id:M,host:e,submit:W,onChange:Oe})}):Object(r.jsx)("div",{}),Object(r.jsxs)("div",{id:"MainPage",children:[Object(r.jsx)("div",{id:"Sidebar",className:"outline ",children:U?Object(r.jsxs)("div",{children:[ee?Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{host:e,user_id:j}),Object(r.jsx)("button",{onClick:function(){te(!ee)},children:"exit"})]}):Object(r.jsx)("div",{}),Object(r.jsx)(x,{children:Object(r.jsxs)("div",{id:"Sidebar",children:[Object(r.jsx)(F.a,{icon:P.b,onClick:fe}),Object(r.jsx)(A,{user_id:j,host:e,o:!0,onChange:function(e){V(e)},submit:W},j)]})})]}):Object(r.jsx)(F.a,{icon:P.c,onClick:fe})}),Object(r.jsx)("div",{id:"Transaction",children:ce&&!M?Object(r.jsx)(x,{children:Object(r.jsx)(S,{host:e,user_id:j},j)}):Object(r.jsx)("div",{children:M?Object(r.jsx)(x,{children:Object(r.jsx)(w,{account_id:M,host:e,submit:W,onChange:Oe,from_date:Q,to_date:K},M)}):Object(r.jsx)("p",{})})})]})]}):Object(r.jsx)("div",{id:"Register",children:J?Object(r.jsx)("div",{children:-1===j?Object(r.jsx)(m,{onRouteChange:me}):Object(r.jsx)(l,{host:e,onChange:he,onRegisterChange:pe})}):Object(r.jsx)(h,{host:e,onChange:he,onRegisterChange:pe})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(66);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),R()}},[[67,1,2]]]);
//# sourceMappingURL=main.9b2a4ef5.chunk.js.map