import{c6 as a,cI as e,j as l,c1 as s,r as o,aA as i,a3 as t,d as n,b2 as r,aa as u,J as d,c4 as c,a4 as p,F as g,aG as f,cJ as m,cK as h,cd as b,cc as v}from"./index.1921beeb.js";import{_ as y}from"./ComQFile.b7eee83f.js";import"./QBadge.2b2d9dcd.js";import"./QSelect.00c3c8b7.js";import"./QItemLabel.ed81b066.js";import"./index.229e2d0a.js";import"./ComQDialogBig.ace7afb0.js";import"./QImg.65c43243.js";import"./upload-file.01a69925.js";const _=a("module_testing",{state:()=>({}),getters:{},actions:{async testcoba1(a){console.log(a,"payloadtestng");const l=await e.post("/testing/post-data",a,{encydecy:!0});console.log(l)}}}),j=p("h1",null,"Dashboard Rahasia",-1),k=p("hr",null,null,-1),C=p("hr",null,null,-1),w=l({__name:"RahasiaDashboard",setup(a){const e=s(),l=o([{nama:"",file:null,isupload:!1,isfinish:!1,iserror:!1}]),w=async()=>{var a,s;console.log(l.value),console.log(R.value);const o=await R.value.validate();if(console.log(o),!o)return;l.value=l.value.map((a=>({...a,isupload:!0,iserror:!1,isfinish:!1})));let i={myhead:{apa1:1,apa2:2,apa3:3},data:[]};for(let e=0;e<l.value.length;e++){let a=l.value[e];const s=await h(a.file);console.log(s),i.data.push(s)}console.log(e.getKey.uid);const t=await b(i,null!=(a=e.getKey.uid)?a:"");console.log(t.split(".").length),console.log(t,"ency");const n=await v(t.toString(),null!=(s=e.getKey.uid)?s:"");console.log(n);const r=_();await r.testcoba1(i),l.value=l.value.map((a=>({...a,isupload:!1,iserror:!1,isfinish:!1})))},Q=()=>{l.value.push({nama:"",file:null,percent:0,isupload:!1,isfinish:!1,iserror:!1})},R=o(),K=[a=>a&&a.size>0||"Required"];return(a,s)=>(i(),t("div",null,[j,n(c,{onClick:d(e).testcoba1},{default:r((()=>[u("Tes Auth")])),_:1},8,["onClick"]),n(c,{to:{name:"rahasia.dashboard2"}},{default:r((()=>[u("kedb2")])),_:1},8,["to"]),n(c,{onClick:d(e).logout},{default:r((()=>[u("logout")])),_:1},8,["onClick"]),k,n(c,{onClick:w},{default:r((()=>[u("save")])),_:1}),n(c,{onClick:Q},{default:r((()=>[u("addRow")])),_:1}),C,n(d(m),{greedy:"",class:"q-gutter-md",ref_key:"formCobaRef",ref:R},{default:r((()=>[p("table",null,[(i(!0),t(g,null,f(l.value,((a,e)=>(i(),t("tr",{key:e},[n(y,{rules:K,"lazy-rules":"","onUpdate:modelValue":a=>{return s=a,o=e,console.log(s),void(l.value[o].file=s);var s,o},"is-uploading":a.isupload,"is-finish":a.isfinish,"is-error":a.iserror},null,8,["onUpdate:modelValue","is-uploading","is-finish","is-error"])])))),128))])])),_:1},512)]))}});export{w as default};
