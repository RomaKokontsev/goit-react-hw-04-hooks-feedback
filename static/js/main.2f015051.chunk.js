(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={wrapper:"Wrapper_wrapper__2Lj5z"}},function(e,t,n){e.exports={title:"Section_title__2wcmf"}},function(e,t,n){e.exports={btn:"OptionsFeedback_btn__1M67T"}},function(e,t,n){e.exports={text:"Notification_text__1SrfN"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=(n(13),n(2)),o=n(5),u=n.n(o),b=n(0),d=function(e){var t=e.children;return Object(b.jsx)("div",{className:u.a.wrapper,children:t})},j=n(6),l=n.n(j),f=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:l.a.title,children:t}),n]})},p=n(7),h=n.n(p),x=function(e){var t=e.options,n=e.clickFeedback;return t.map((function(e){return Object(b.jsx)("button",{className:h.a.btn,onClick:function(){return n(e)},children:e},e)}))},O=(n(15),function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Good: ",t]}),Object(b.jsxs)("p",{children:["Neutral: ",n]}),Object(b.jsxs)("p",{children:["Bad: ",c]}),Object(b.jsxs)("p",{children:["Total: ",r]}),Object(b.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})}),k=n(8),v=n.n(k),g=function(e){var t=e.message;return Object(b.jsx)("div",{className:v.a.text,children:t})};var _=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(s.a)(a,2),o=i[0],u=i[1],j=Object(c.useState)(0),l=Object(s.a)(j,2),p=l[0],h=l[1],k=function(){return n+o+p};return Object(b.jsxs)(d,{children:[Object(b.jsx)(f,{title:"Please leave feedback",children:Object(b.jsx)(x,{options:["good","neutral","bad"],clickFeedback:function(e){switch(e){case"good":r((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}})}),Object(b.jsx)(f,{title:"Statistic",children:k()?Object(b.jsx)(O,{good:n,neutral:o,bad:p,total:k(),positivePercentage:function(){var e=k();return Math.round(100/e*n)}()}):Object(b.jsx)(g,{message:"No feedback given"})})]})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.2f015051.chunk.js.map