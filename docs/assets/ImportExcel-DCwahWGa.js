import{I as d}from"./index-CIVgjVCU.js";import{_}from"./BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js";import"./TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js";import"./index-BpHr8pvE.js";import{P as x}from"./index-B24a6rfW.js";import{d as h,f as S,a7 as k,Z as a,a8 as l,a9 as m,k as u,u as s,G as v,_ as D,F as E,aa as I}from"./vue-BjERyvPm.js";import"../index.js";import"./antd-BmrhB3rb.js";import"./index-RbNU_lzt.js";import"./useWindowSizeFn-B5LTQhvs.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js";import"./FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js";import"./componentMap-C0n90BJh.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js";import"./index-vjZxMvXl.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-CziPtsqx.js";import"./index-IFKYG7IQ.js";import"./base64Conver-bBv-IO2K.js";import"./helper-BjbsUAHT.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js";import"./useForm-b1qEKHt-.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-D6mV6aGQ.js";import"./download-B80gEl-k.js";import"./useContentViewHeight-mbS0GS8E.js";const ot=h({__name:"ImportExcel",setup(Y){const o=S([]);function f(p){o.value=[];for(const i of p){const{header:e,results:t,meta:{sheetName:r}}=i,c=[];for(const n of e)c.push({title:n,dataIndex:n});o.value.push({title:r,dataSource:t,columns:c})}}return(p,i)=>{const e=k("a-button");return a(),l(s(x),{title:"excel数据导入示例"},{default:m(()=>[u(s(d),{onSuccess:f,dateFormat:"YYYY-MM-DD"},{default:m(()=>[u(e,{class:"m-3"},{default:m(()=>[v(" 导入Excel ")]),_:1})]),_:1}),(a(!0),D(E,null,I(o.value,(t,r)=>(a(),l(s(_),{key:r,title:t.title,columns:t.columns,dataSource:t.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}}});export{ot as default};
