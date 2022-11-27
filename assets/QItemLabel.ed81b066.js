import{c7 as e,br as a,bP as t,bY as l,bR as n,c8 as i,r as o,c as s,h as u,g as c,c9 as v,bN as r,bw as d,bs as m}from"./index.1921beeb.js";function b(){if(void 0!==window.getSelection){const a=window.getSelection();void 0!==a.empty?a.empty():void 0!==a.removeAllRanges&&(a.removeAllRanges(),!0!==e.is.mobile&&a.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}var p=a({name:"QItem",props:{...t,...l,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:t}){const{proxy:{$q:l}}=c(),m=n(e,l),{hasRouterLink:b,hasLink:p,linkProps:f,linkClass:q,linkTag:k,navigateToRouterLink:_}=i(),g=o(null),y=o(null),h=s((()=>!0===e.clickable||!0===p.value||"label"===e.tag)),w=s((()=>!0!==e.disable&&!0===h.value)),B=s((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===m.value?" q-item--dark":"")+(!0===p.value&&null===e.active?q.value:!0===e.active?(void 0!==e.activeClass?` ${e.activeClass}`:"")+" q-item--active":"")+(!0===e.disable?" disabled":"")+(!0===w.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),x=s((()=>{if(void 0===e.insetLevel)return null;return{["padding"+(!0===l.lang.rtl?"Right":"Left")]:16+56*e.insetLevel+"px"}}));function L(e){!0===w.value&&(null!==y.value&&(!0!==e.qKeyEvent&&document.activeElement===g.value?y.value.focus():document.activeElement===y.value&&g.value.focus()),!0===b.value&&_(e),t("click",e))}function R(e){if(!0===w.value&&!0===v(e,13)){r(e),e.qKeyEvent=!0;const a=new MouseEvent("click",e);a.qKeyEvent=!0,g.value.dispatchEvent(a)}t("keyup",e)}return()=>{const t={ref:g,class:B.value,style:x.value,onClick:L,onKeyup:R};return!0===w.value?(t.tabindex=e.tabindex||"0",Object.assign(t,f.value)):!0===h.value&&(t["aria-disabled"]="true"),u(k.value,t,function(){const e=d(a.default,[]);return!0===w.value&&e.unshift(u("div",{class:"q-focus-helper",tabindex:-1,ref:y})),e}())}}}),f=a({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const t=s((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>u("div",{class:t.value},m(a.default))}}),q=a({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const t=s((()=>parseInt(e.lines,10))),l=s((()=>"q-item__label"+(!0===e.overline?" q-item__label--overline text-overline":"")+(!0===e.caption?" q-item__label--caption text-caption":"")+(!0===e.header?" q-item__label--header":"")+(1===t.value?" ellipsis":""))),n=s((()=>void 0!==e.lines&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null));return()=>u("div",{style:n.value,class:l.value},m(a.default))}});export{p as Q,q as a,f as b,b as c};
