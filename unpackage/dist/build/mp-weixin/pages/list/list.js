"use strict";const e=require("../../common/vendor.js"),a=require("./tableData.js");if(!Array){(e.resolveComponent("uni-search-bar")+e.resolveComponent("uni-data-checkbox")+e.resolveComponent("uni-section"))()}Math||((()=>"../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js")+(()=>"../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js")+(()=>"../../uni_modules/uni-section/components/uni-section/uni-section.js"))();const l={__name:"list",setup(l){const u=e.ref(""),n=e.ref(!1),t=e.ref({"万年":"wan-nian","一万三千年":"yi-wan-san","一万八千年":"yi-wan-ba","三万年":"san-wan","四万年":"si-wan","五万年":"wu-wan"}),o=e.ref({"木":"mu","风":"feng","火":"huo","金":"jin"});e.ref({"辛":"mu","风":"feng","火":"huo","金":"jin"});const s=e.ref(0),r=e.ref(a.behemoth),i=e.ref([]),v=e.ref([]),c=e.ref([]),m=e.ref([]),d=e.computed((()=>(e,a)=>e.attack[a]+"")),f=e=>{s.value=e.detail.value,2==s.value&&1!==c.value.length?alert("请先勾选一个部位,仅对一个部位排序"):p()},h=()=>{n.value=!n.value,r.value.reverse()},p=()=>{if(0==s.value){const e={"万年":1e4,"一万三千年":13e3,"一万八千年":18e3,"三万年":3e4,"四万年":4e4,"五万年":5e4};r.value=r.value.sort(((a,l)=>e[a.age]-e[l.age]))}else 1==s.value?r.value=r.value.sort(((e,a)=>e.needSeals.length-a.needSeals.length)):r.value=r.value.sort(((e,a)=>a.attack[c.value[0]]-e.attack[c.value[0]]))},g=()=>{r.value=a.behemoth.filter((e=>{const a=e.name.includes(u.value),l=0===i.value.length||i.value.includes(e.age),n=0===c.value.length||c.value.some((a=>e.parts.includes(a))),t=0===v.value.length||v.value.every((a=>e.needSeals.includes(a))),o=0===m.value.length||m.value.includes(e.element);return a&&l&&n&&t&&o}))};return(l,p)=>e.e({a:e.o(g),b:e.o((e=>u.value=e)),c:e.p({placeholder:"输入名字查询",focus:!0,modelValue:u.value}),d:e.o((e=>v.value=e)),e:e.p({multiple:!0,localdata:e.unref(a.sealList),modelValue:v.value}),f:e.o((e=>m.value=e)),g:e.p({multiple:!0,localdata:e.unref(a.elementList),modelValue:m.value}),h:e.o((e=>i.value=e)),i:e.p({multiple:!0,localdata:e.unref(a.ageList),modelValue:i.value}),j:e.o((e=>c.value=e)),k:e.p({multiple:!0,localdata:e.unref(a.partList),modelValue:c.value}),l:e.o(g),m:e.o(f),n:["按年份排序","按开印数量排序","按部位攻击排序"],o:s.value,p:n.value},n.value?{q:e.o(h)}:{r:e.o(h)},{s:e.f(r.value,((a,l,u)=>({a:e.t(a.age),b:e.t(a.name),c:e.n(o.value[a.element]),d:e.t(a.location),e:e.f(a.needSeals,((a,l,u)=>({a:e.t(a),b:a}))),f:e.t(a.element),g:e.f(a.parts,((l,u,n)=>({a:e.t(l),b:e.t(e.unref(d)(a,l)),c:l}))),h:a.id,i:e.n(t.value[a.age])})))})}};wx.createPage(l);
