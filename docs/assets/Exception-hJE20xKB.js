import{aV as e,aN as N,aW as O,f as R,aX as m,h as S}from"../index.js";import{d as A,f as k,ao as G,c as p,u as s,k as c}from"./vue-BjERyvPm.js";import{B as D,bi as P}from"./antd-BmrhB3rb.js";const h="/assets/no-data-BKo151DF.svg",C="/assets/net-error-sXkbaH3y.svg",F=A({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=k(new Map),{query:E}=G(),o=N(),T=O(),{t}=S(),{prefixCls:x}=R("app-exception-page"),_=p(()=>{const{status:l}=E,{status:i}=n;return Number(l)||i}),g=p(()=>s(a).get(s(_))),b=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?b:u,handler:()=>n.full?o(m.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?b:u,handler:()=>n.full?o(m.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>T(),icon:h}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>T(),icon:C}),()=>{const{title:l,subTitle:i,btnText:d,icon:f,handler:y,status:r}=s(g)||{};return c(P,{class:x,status:r,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>d&&c(D,{type:"primary",onClick:y},{default:()=>d}),icon:r&&e[r]===void 0?()=>f?c("img",{src:f},null):null:void 0})}}});export{F as default};
