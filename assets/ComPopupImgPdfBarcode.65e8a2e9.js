import{Q as e}from"./QImg.65c43243.js";import{Q as a,_ as l}from"./ComQDialogBig.ace7afb0.js";import{_ as o,t as r}from"./ComBarcodeGenerator.1bbbf28b.js";import{c as t}from"./index.229e2d0a.js";import{j as n,r as i,w as u,ar as s,cN as d,aJ as c,aA as f,a3 as m,a1 as p,b2 as v,d as b,J as g,aa as h,a2 as _,c4 as w,a4 as y,b4 as C,F as k}from"./index.1921beeb.js";const j=y("div",{class:"row"},null,-1),x=y("div",{class:"absolute-full flex flex-center bg-negative text-white"}," Image Expire... ",-1),B=["src"],O=n({__name:"ComPopupImgPdfBarcode",props:{row:{type:Object,default:null},rowIndex:{type:Number,default:-1},tblrow:{type:Array},barcode:{type:Object},b64:{type:String,default:null},isfile:{type:Boolean,default:!1},isimage:{type:Boolean,default:!1},isbarcode:{type:Boolean,default:!1}},setup(n){const O=n,I=i(O.barcode);u((()=>O.barcode),((e,a)=>{I.value&&(I.value=e)}));const T=i(!1),P=i(!1),Q=i(""),D=async e=>{Q.value=null!=e?e:"",T.value=!0},N=async()=>{T.value=!1};s((async()=>{var e;if(console.log(O.b64,"propsfile"),null==O.b64)return;let a=await d(O.b64);Q.value=null!=(e=null==a?void 0:a.url)?e:""}));const A=async()=>{P.value=!1},E=i(null);return I.value=t(r),I.value.value="1234567890128",I.value.format="CODE128",I.value.lineColor="#000",I.value.width=1,I.value.height=50,I.value.elementTag="img",(r,t)=>{const i=c("print");return f(),m(k,null,[j,O.isimage?(f(),p(e,{key:0,onClick:t[0]||(t[0]=e=>D(Q.value)),src:Q.value,ratio:1,width:"50%",height:"auto",class:"shadow-10"},{error:v((()=>[x])),default:v((()=>[b(g(a),null,{default:v((()=>[h(" Open Image ")])),_:1})])),_:1},8,["src"])):_("",!0),O.isfile?(f(),p(g(w),{key:1,icon:"picture_as_pdf",color:"primary",dense:"",onClick:t[1]||(t[1]=e=>D(Q.value))},{default:v((()=>[b(g(a),null,{default:v((()=>[h(" Open PDF ")])),_:1})])),_:1})):_("",!0),n.isbarcode?(f(),p(g(w),{key:2,icon:"qr_code",color:"primary",dense:"",onClick:t[2]||(t[2]=e=>(async e=>{I.value.value=e.barid,P.value=!0})(O.row))},{default:v((()=>[b(g(a),null,{default:v((()=>[h(" Open Barcode ")])),_:1})])),_:1})):_("",!0),b(l,{onHide:N,"show-dialog":T.value},{default:v((()=>[b(g(w),{icon:"open_in_new",color:"primary",onClick:t[3]||(t[3]=e=>{return a=Q.value,void window.open(a,"_blank");var a})},{default:v((()=>[b(g(a),null,{default:v((()=>[h("Open in New Tab")])),_:1})])),_:1}),y("iframe",{width:"100%",height:"100%",frameborder:"0",src:Q.value,id:"frame"},null,8,B)])),_:1},8,["show-dialog"]),b(l,{onHide:A,"show-dialog":P.value},{default:v((()=>[b(o,{id:"barcode-container",value:g(I).value,format:g(I).format,lineColor:g(I).lineColor,width:g(I).width,height:g(I).height,elementTag:g(I).elementTag,ref_key:"barcodeRef",ref:E},null,8,["value","format","lineColor","width","height","elementTag"]),C((f(),p(g(w),{icon:"print",color:"primary"},{default:v((()=>[b(g(a),null,{default:v((()=>[h("Print")])),_:1})])),_:1})),[[i,"#barcode-container"]])])),_:1},8,["show-dialog"])],64)}}});export{O as _};
