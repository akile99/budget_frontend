(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(3),i=n.n(s),o=(n(23),n(2)),r=(n(24),n(0)),l=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),h=b[0],m=b[1],p=Object(a.useState)(!1),O=Object(o.a)(p,2),f=O[0],g=O[1];return Object(r.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(r.jsx)("main",{className:"pa4 black-80",children:Object(r.jsxs)("div",{className:"measure",children:[Object(r.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(r.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){s(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"mv3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){d(e.target.value)},required:!0}),f?Object(r.jsx)("p",{children:"Missing Password"}):Object(r.jsx)("p",{})]}),Object(r.jsx)("label",{className:"pa0 ma0 lh-copy f6 pointer"})]}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("input",{onClick:function(){c&&u?(m(!0),fetch(e.host+"signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:u})}).then((function(e){return e.json()})).then((function(t){"wrong credentials"!==t?e.onChange(t[0].user_id,t[0].firstname):e.onChange(-1,-1)}))):c?u||(console.log("missing password!!"),g(!0)):console.log("missing email!!")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:h?"Loading":"Sign in"})}),Object(r.jsx)("div",{className:"lh-copy mt3",children:Object(r.jsx)("p",{onClick:function(){return e.onRegisterChange("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})},u=n(13),d=n(14),j=n(18),b=n(17),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onFirstNameChange=function(e){a.setState({firstname:e.target.value})},a.onLastNameChange=function(e){a.setState({lastname:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitRegister=function(){fetch(a.props.host+"register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,firstname:a.state.firstname,lastname:a.state.lastname})}).then((function(e){return e.json()})).then((function(e){e&&e.user_id&&a.props.onChange()}))},a.state={email:"",password:"",firstname:"",lastname:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.onRegisterChange;return Object(r.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(r.jsx)("main",{className:"pa4 black-80",children:Object(r.jsxs)("div",{className:"measure",children:[Object(r.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(r.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"First Name"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"firstname",id:"firstname",onChange:this.onFirstNameChange,required:!0})]}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Last Name"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"lastname",id:"lastname",onChange:this.onLastNameChange})]}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(r.jsxs)("div",{className:"mv3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]}),Object(r.jsx)("label",{className:"pa0 ma0 lh-copy f6 pointer"})]}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})}),Object(r.jsx)("div",{className:"lh-copy mt3",children:Object(r.jsx)("p",{onClick:function(){return e("signin")},className:"f6 link dim black db pointer",children:"Sign In"})})]})})})}}]),n}(c.a.Component),m=function(e){var t=e.onRouteChange;e.isSignedIn;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"f3",children:" User and password combination do not exist"}),Object(r.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Try again"})]})},p=(n(26),function(e){var t=e.onRouteChange,n=e.isSignedIn,a=e.name;return n?Object(r.jsxs)("nav",{className:"navigation",children:[Object(r.jsx)("p",{className:"f3",children:a}),Object(r.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})]}):Object(r.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(r.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(r.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})}),O=n(7),f=n.n(O),g=n(15);function x(e,t,n,c){var s=Object(a.useState)(),i=Object(o.a)(s,2),r=i[0],l=i[1],u=Object(a.useState)("black"),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){if(e){var a=function(){var a=Object(g.a)(f.a.mark((function a(){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(t).concat(n),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:e})}).then((function(e){return e.json()})).then((function(e){return l(e[0].sum)}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();b(r<0?"red":"black"),a()}}),[e,r,t,c,n]),[r,j]}n(8);var v=function(e){return Object(r.jsxs)("p",{className:e.balanceColor,children:["$ ".concat(e.balance)," "]})},N=function(e){var t=x(e.account_id,e.host,"sumPending",e.submit),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("p",{className:c,children:["$ ".concat(a)," "]})},C=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",height:"500px"},children:e.children},e.children)},w=n(16);var y=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=[];return Object(a.useEffect)((function(){try{fetch(e.host+"category").then((function(e){return e.json()})).then((function(e){e.map((function(e){i.push({label:e.category,value:e.catid})}))})).then(s(i))}catch(t){console.error(t)}}),[e.host]),Object(r.jsx)("div",{className:"w-30",children:Object(r.jsx)(w.a,{onChange:function(t){e.onChange(t.value,t.label)},options:c})})},_=(n(11),function(e){var t=e.transaction_id,n=e.accountid,c=Object(a.useState)(!1),s=Object(o.a)(c,2),i=s[0],l=s[1],u=Object(a.useState)(e.date),d=Object(o.a)(u,2),j=d[0],b=d[1],h=Object(a.useState)(e.vendor),m=Object(o.a)(h,2),p=m[0],O=m[1],f=Object(a.useState)(e.amount),g=Object(o.a)(f,2),x=g[0],v=g[1],N=Object(a.useState)(e.category),C=Object(o.a)(N,2),w=C[0],_=C[1],S=Object(a.useState)(e.status),k=Object(o.a)(S,2),T=k[0],A=k[1];var F=function(e){l(!i)},P=function(e){var t=new Date(e),n=t.getFullYear();return t.getMonth()+1+"-"+(t.getDate()+1)+"-"+n}(j),D=function(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,c=t.getDate();return a=a<10?"0".concat(a):"".concat(a),c=c<10?"0".concat(c):"".concat(c),"".concat(n,"-").concat(a,"-").concat(c)}(j);return Object(r.jsx)("div",{className:"outline",children:i?Object(r.jsxs)("div",{className:"flex justify-center",children:[Object(r.jsx)("p",{className:"fl w-10 tc",children:t}),Object(r.jsx)("input",{className:"f4 pa2 w-60 center",type:"date",id:"date",name:"date",value:D,onChange:function(e){b(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"Vendor",id:"Vendor",name:"Vendor",value:p,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-70 center",type:"double",placeholder:"Amount",id:"Amount",name:"Amount",value:x,onChange:function(e){v(e.target.value)}}),Object(r.jsx)(y,{onChange:function(e){_(e)}}),Object(r.jsx)("button",{onClick:F,children:"Cancel "}),Object(r.jsx)("button",{onClick:function(){fetch(e.host+"update",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:j,vendor:p,category:w,status:e.status,amount:x,transaction_id:t})}).then((function(e){return e.json()})).catch(console.log),O(p),b(D),v(x),_(w),F(),e.onChange()},children:"Update "})]}):Object(r.jsxs)("div",{className:"flex justify-left",children:[Object(r.jsx)("p",{className:"date transaction",children:P}),Object(r.jsx)("p",{className:"vendor transaction",children:p}),Object(r.jsx)("p",{className:"dollar transaction",children:"$"}),Object(r.jsx)("p",{className:"amount transaction",children:x}),Object(r.jsx)("p",{className:"status transaction",onClick:function(){return function(t,a,c){fetch("".concat(e.host,"updateStatus"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({transaction_id:t,accountid:n})}).then((function(e){return e.json()})).catch(console.log),A("Cleared"===a?"Pending":"Cleared"),e.onChange()}(t,T)},children:T}),Object(r.jsx)("p",{className:"category transaction",children:w}),Object(r.jsx)("p",{className:"edit transaction",onClick:function(){return F()},children:"edit"})]})})}),S=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=function(t){e.onChange()};return Object(a.useEffect)((function(){try{fetch("".concat(e.host,"transactions"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_id:e.account_id,from_date:e.from_date,to_date:e.to_date})}).then((function(e){return e.json()})).then((function(e){s(e)}))}catch(t){console.log(t)}}),[e.submit,e.account_id,e.host,e.from_date,e.to_date,e.update]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"outline flex justify-center",children:[Object(r.jsx)("p",{className:"date transaction",children:"Date"}),Object(r.jsx)("p",{className:"vendor transaction",children:"Vender"}),Object(r.jsx)("p",{className:"dollar transaction",children:"\xa0\xa0"}),Object(r.jsx)("p",{className:"amount transaction",children:"Amount"}),Object(r.jsx)("p",{className:"status transaction",children:"Status"}),Object(r.jsx)("p",{className:"category transaction",children:"Category"}),Object(r.jsx)("p",{className:"edit transaction",children:"Edit"})]}),c.map((function(t,n){return Object(r.jsx)(_,{className:"transactions",transaction_id:c[n].transaction_id,accountid:c[n].accountid,date:c[n].date,vendor:c[n].vendor,amount:(Math.round(100*c[n].amount)/100).toFixed(2),status:c[n].status,category:c[n].category,host:e.host,onChange:i,submit:e.submit},c[n].transaction_id)}))]})},k=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),h=b[0],m=b[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Account Name",id:"account_name",name:"account_name",value:u,onChange:function(e){d(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Account Type",id:"account_type",name:"account_type",value:c,onChange:function(e){s(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"double",placeholder:"Openning Balance",id:"open_balance",name:"open_balance",value:h,onChange:function(e){m(e.target.value)}}),Object(r.jsx)("button",{onClick:function(){fetch(e.host+"newaccount",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({account_name:u,account_type:c,openningbalance:h,user_id:e.user_id})}).then((function(e){return e.json()})).catch(console.log)},children:"New Account"})]})})};var T=function(e){var t=e.bill_id,n=e.bill_name,c=e.bill_website,s=e.due_date,i=Object(a.useState)(!1),l=Object(o.a)(i,2),u=l[0],d=l[1],j=Object(a.useState)(e.amount),b=Object(o.a)(j,2),h=b[0],m=b[1],p=Object(a.useState)(c),O=Object(o.a)(p,2),f=O[0],g=O[1],x=Object(a.useState)(n),v=Object(o.a)(x,2),N=v[0],C=v[1],w=function(e){var t=new Date(e),n=t.getDate();return t.getMonth()+1+"/"+n}(s),y=function(){d(!u)};return Object(r.jsx)("div",{children:u?Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{className:"fl w-25 pa1 tc ml1",type:"text",id:"name",name:"name",value:n,onChange:function(e){C(e.target.value)}}),Object(r.jsx)("input",{className:"fl w-25 pa1 tc ml1",type:"double",id:"amount",name:"amount",value:h,onChange:function(e){m(e.target.value)}}),Object(r.jsx)("input",{className:"fl w-25 pa1 tc ml1",type:"text",id:"website",name:"website",value:f,onChange:function(e){g(e.target.value)}}),Object(r.jsx)("button",{className:"fl w-10 pa1 tc ml1",onClick:function(){fetch("".concat(e.host,"update_bill"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({bill_id:t,bill_name:N,amount:h,bill_website:f})}).then((function(e){return e.json()})).catch(console.log),y()},children:"Update "})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"fl w-25 pa1 tc ml1",children:N}),Object(r.jsx)("p",{className:"fl w-25 pa1 tc",children:h}),Object(r.jsx)("p",{className:"fl w-25 pa1 tc",children:w}),Object(r.jsx)("button",{className:"fl pa1",onClick:function(){window.open(c,"_blank")},children:"Pay"}),Object(r.jsx)("button",{className:"fl pa1",onClick:y,children:"Edit"})]})})},A=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(1),l=Object(o.a)(i,1)[0];return Object(a.useEffect)((function(){fetch("".concat(e.host,"upcomingBills"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.user_id})}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[l,e.host,e.user_id]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"flex justify-center",children:[Object(r.jsx)("h3",{className:"fl w-25 pa1 tc ml1",children:"Vender"}),Object(r.jsx)("h3",{className:"fl w-25 pa1 tc",children:"Amount"}),Object(r.jsx)("h3",{className:"fl w-25 pa1 tc",children:"Due Day"}),Object(r.jsx)("h3",{className:"fl w-10 pa1 tc",children:"Web Site"})]}),c.map((function(t,n){return Object(r.jsx)(T,{bill_id:c[n].bill_id,amount:c[n].amount,bill_name:c[n].bill_name,due_date:c[n].due_day,bill_website:c[n].bill_website,host:e.host},c[n].bill_id)}))]})},F=(n(47),function(e){var t=(new Date).toISOString().slice(0,10),n=Object(a.useState)(t),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),d=u[0],j=u[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),m=h[0],p=h[1],O=Object(a.useState)("Pending"),f=Object(o.a)(O,2),g=f[0],x=f[1],v=Object(a.useState)(),N=Object(o.a)(v,2),C=N[0],w=N[1],_=function(t){fetch(e.host+"insert",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:s,vendor:d,category:C,status:g,amount:t,account_id:e.account_id})}).then((function(e){return e.json()})).then(e.onChange()).catch(console.log),j(""),p(""),x("Pending")};return Object(r.jsx)("div",{className:"center",children:Object(r.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"date",id:"date",name:"date",value:s,onChange:function(e){i(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"text",placeholder:"Vendor",id:"Vendor",name:"Vendor",value:d,onChange:function(e){j(e.target.value)}}),Object(r.jsx)("input",{className:"f4 pa2 w-25 center",type:"double",placeholder:"Amount",id:"Amount",name:"Amount",value:m,onChange:function(e){var t=e.target.value.replace(/,/g,"");p(t)}}),Object(r.jsx)("button",{className:"w-30 link ph3 pv2 dib btn-white",id:"CommitTransactionBTN",onClick:function(e){x("Pending"===g?"Cleared":"Pending")},children:g}),Object(r.jsx)(y,{className:"f4 pa2 w-30 center",onChange:function(e){w(e)},host:e.host}),Object(r.jsx)("button",{className:"w-10 grow f4 link ph3 pv2 dib white bg-light-blue",id:"CommitTransactionBTN",onClick:function(){_(-m)},children:"Expense"}),Object(r.jsx)("button",{className:"w-10 grow f4 link ph3 pv2 dib white bg-light-blue",id:"CommitTransactionBTN",onClick:function(){_(m)},children:"Income"})]})})}),P=(n(12),function(e){var t=e.account_id,n=e.account_name,a=e.account_type,c=x(t,e.host,"sumCleared",e.submit),s=Object(o.a)(c,2),i=s[0];s[1];return Object(r.jsxs)("div",{id:"Accounts",onClick:function(){e.onChange(t)},children:[Object(r.jsx)("p",{className:"Account",children:n+" "+a}),Object(r.jsx)("p",{className:"Account",children:i})]})}),D=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=function(t){e.onChange(t)};return Object(a.useEffect)((function(){fetch("".concat(e.host,"accounts"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.user_id})}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[e.host,e.user_id,e.submit]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsx)("h2",{className:"Account",children:"Accounts "})}),c.map((function(t,n){return Object(r.jsx)("div",{children:Object(r.jsx)(P,{className:"Account",account_id:c[n].account_id,user_id:c[n].account_id,account_name:c[n].account_name,account_type:c[n].account_type,onChange:i,host:e.host,submit:e.submit},c[n].account_id+c[n].user_id)})}))]})};function I(e,t){var n=Object(a.useState)((function(){return function(e,t){return JSON.parse(sessionStorage.getItem(e))||(t instanceof Function?t():t)}(e,t)})),c=Object(o.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){sessionStorage.setItem(e,JSON.stringify(s))}),[s]),[s,i]}var J=n.p+"static/media/up_collapse.a7a65358.png";var R=function(){var e="https://star-ship-enterprise.herokuapp.com/",t=I("name",""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=I("user_id",""),u=Object(o.a)(i,2),d=u[0],j=u[1],b=I("isSignedIn",!1),O=Object(o.a)(b,2),f=O[0],g=O[1],w=Object(a.useState)(!0),y=Object(o.a)(w,2),_=y[0],T=y[1],P=I("account_id",""),R=Object(o.a)(P,2),E=R[0],B=R[1],V=I("sideBar",!0),L=Object(o.a)(V,2),M=L[0],q=L[1],U=Object(a.useState)(!1),Y=Object(o.a)(U,2),$=Y[0],W=Y[1],z=new Date;z.setDate(z.getDate()-60);var G=(new Date).toISOString().split("T")[0],H=z.toISOString().split("T")[0],K=Object(a.useState)(!1),Q=Object(o.a)(K,2),X=Q[0],Z=Q[1],ee=Object(a.useState)(!1),te=Object(o.a)(ee,2),ne=(te[0],te[1],I("insert",!1)),ae=Object(o.a)(ne,2),ce=ae[0],se=ae[1],ie=x(E,e,"sumCleared",$),oe=Object(o.a)(ie,2),re=oe[0],le=oe[1],ue=function(e,t){-1!==e?(s(t),j(e),g(!0)):j(-1)},de=function(){g(!1),j(),B(),s(),se(!1),sessionStorage.clear()},je=function(){T(!_)},be=function(){W(!$)},he=function(){q(!M)};return Object(r.jsx)("div",{className:"App",children:f?Object(r.jsxs)("div",{id:"LandingPage",children:[Object(r.jsxs)("nav",{children:[E?Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"links",onClick:function(){se(!ce)},children:"Add Transaction"})}):Object(r.jsx)("p",{}),Object(r.jsxs)("div",{className:"Navigation",children:[E?Object(r.jsxs)("div",{className:"Navigation",children:[Object(r.jsx)("p",{children:"Actual"}),Object(r.jsx)(v,{className:"f3",balance:re,balanceColor:le}),Object(r.jsx)(N,{className:"f3",host:e,account_id:E,submit:$})]}):Object(r.jsx)("p",{}),Object(r.jsx)(p,{isSignedIn:f,name:c,onRouteChange:de})]})]}),ce?Object(r.jsx)("div",{id:"insertTransaction",children:Object(r.jsx)(F,{account_id:E,host:e,submit:$,onChange:be})}):Object(r.jsx)("div",{}),Object(r.jsxs)("div",{id:"MainPage",children:[Object(r.jsx)("div",{id:"Sidebar",className:"outline ",children:M?Object(r.jsxs)("div",{children:[X?Object(r.jsxs)("div",{children:[Object(r.jsx)(k,{host:e,user_id:d}),Object(r.jsx)("button",{onClick:function(){Z(!X)},children:"exit"})]}):Object(r.jsx)("div",{}),Object(r.jsx)(C,{children:Object(r.jsxs)("div",{id:"Sidebar",children:[Object(r.jsx)("img",{className:"closeSideBar",src:J,alt:"Collapse",onClick:he}),Object(r.jsx)(D,{user_id:d,host:e,o:!0,onChange:function(e){B(e)},submit:$},d)]})})]}):Object(r.jsx)("img",{className:"openSideBar",src:J,alt:"Collapse",onClick:he})}),Object(r.jsx)("div",{id:"Transaction",children:E?Object(r.jsx)(C,{children:Object(r.jsx)(S,{account_id:E,host:e,submit:$,onChange:be,from_date:H,to_date:G},E)}):Object(r.jsx)(C,{children:Object(r.jsx)(A,{host:e,user_id:d},d)})})]})]}):Object(r.jsx)("div",{id:"Register",children:_?Object(r.jsx)("div",{children:-1===d?Object(r.jsx)(m,{onRouteChange:de}):Object(r.jsx)(l,{host:e,onChange:ue,onRegisterChange:je})}):Object(r.jsx)(h,{host:e,onChange:ue,onRegisterChange:je})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(48);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),E()},8:function(e,t,n){}},[[49,1,2]]]);
//# sourceMappingURL=main.bb98c5d1.chunk.js.map