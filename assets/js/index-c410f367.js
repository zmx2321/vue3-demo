/* empty css             *//* empty css                  */import{h as g,E as w}from"./index-457e47a7.js";import{_ as v}from"./plugin-vueexport-helper-c27b6911.js";import{h as b,b as a,e as t,F as y,j as u,n as f,o as c,t as r,s as I,a9 as U,ab as k,C as L,D as N}from"./vue-debd993f.js";const x=200,T=[{systemId:1,systemName:"收银",itemSystemList:[{itemSystemId:1,itemSystemName:"配置中心",itemSystemSubTitle:"收银系统的配置中心",itemSystemImgUrl:"http://192.168.6.47/assets/4-Ul6ePy8O.svg",itemSystemLinkUrl:"https://www.baidu.com"},{itemSystemId:2,itemSystemName:"配置中心1",itemSystemSubTitle:"收银系统的配置中心",itemSystemImgUrl:"http://192.168.6.47/assets/4-Ul6ePy8O.svg",itemSystemLinkUrl:"https://www.baidu.com"},{itemSystemId:3,itemSystemName:"配置中心2",itemSystemSubTitle:"收银系统的配置中心",itemSystemImgUrl:"http://192.168.6.47/assets/4-Ul6ePy8O.svg",itemSystemLinkUrl:"https://www.baidu.com"},{itemSystemId:4,itemSystemName:"配置中心3",itemSystemSubTitle:"收银系统的配置中心",itemSystemImgUrl:"http://192.168.6.47/assets/4-Ul6ePy8O.svg",itemSystemLinkUrl:"https://www.baidu.com"},{itemSystemId:5,itemSystemName:"配置中心",itemSystemSubTitle:"收银系统的配置中心",itemSystemImgUrl:"https://gips0.baidu.com/it/u=838505001,1009740821&fm=3028&app=3028&f=PNG&fmt=auto&q=100&size=f254_80",itemSystemLinkUrl:"https://www.baidu.com"},{itemSystemId:6,itemSystemName:"配置中心",itemSystemSubTitle:"收银系统的配置中心",itemSystemImgUrl:"https://gips0.baidu.com/it/u=838505001,1009740821&fm=3028&app=3028&f=PNG&fmt=auto&q=100&size=f254_80",itemSystemLinkUrl:"https://www.baidu.com"}]},{systemId:2,systemName:"供应链",itemSystemList:[{itemSystemId:1,itemSystemName:"配置中心",itemSystemSubTitle:"供应链系统的配置中心",itemSystemImgUrl:"http://192.168.6.47/assets/4-Ul6ePy8O.svg",itemSystemLinkUrl:"https://www.baidu.com"}]},{systemId:3,systemName:"宁波项目",itemSystemList:[{itemSystemId:1,itemSystemName:"无线网质量评估系统",itemSystemSubTitle:"宁波项目-无线网质量评估系统",itemSystemImgUrl:"http://192.168.6.47/assets/4-Ul6ePy8O.svg",itemSystemLinkUrl:"http://192.168.6.47/login"}]}],P="成功",C={code:x,data:T,msg:P};const O=n=>(L("data-v-6259d6c9"),n=n(),N(),n),q={class:"nav_page_wrap"},D=O(()=>t("div",{class:"top_wrap"},[t("div",{class:"cont_wrap top_cont"},[t("div",{class:"logo_wrap"},[t("span",null,"单点登陆页面")])])],-1)),V={class:"content_wrap"},B={class:"cont_wrap"},E={class:"cont_side"},z=["onClick"],A={class:"cont_item_wrap"},F={class:"logo"},G=["src","alt"],$={class:"tip"},H={__name:"index",setup(n){const d=b(null),S=(e,l)=>{let i=document.querySelectorAll(".scroll-item"),s=document.querySelectorAll(".cont_side ul li");if(s.forEach((m,h)=>{m.classList.remove("selected")}),!l){s[0].classList.add("selected"),i[0].scrollIntoView({block:"start",behavior:"smooth"});return}l.target.classList.add("selected");for(var o=0;o<i.length;o++)e===o&&i[o].scrollIntoView({block:"start",behavior:"smooth"})},p=e=>{let l=document.querySelectorAll(".scroll-item");for(let i=l.length-1;i>=0&&!(e.target.scrollTop>=l[i].offsetTop-l[0].offsetTop);i--);},_=e=>{};return(async()=>{try{let e=await g("testListData");d.value=C.data,f(()=>{setTimeout(()=>{S()},300)})}catch(e){}})(),(e,l)=>{const i=w;return c(),a("section",q,[D,t("div",V,[t("div",B,[t("div",E,[t("ul",null,[(c(!0),a(y,null,u(d.value,(s,o)=>(c(),a("li",{key:s.index,onClick:m=>S(o,m)},[t("span",null,r(s.systemName),1)],8,z))),128))])]),t("div",{class:"cont_main",onScroll:p},[(c(!0),a(y,null,u(d.value,(s,o)=>(c(),a("div",{class:"cont_item scroll-item",key:s.index},[t("h3",null,r(s.systemName),1),t("div",A,[(c(!0),a(y,null,u(s.itemSystemList,(m,h)=>(c(),a("div",{class:"ctip_item_box",key:m.index},[t("div",F,[t("img",{src:m.itemSystemImgUrl,alt:m.itemSystemImgUrl},null,8,G)]),t("div",$,[t("dl",null,[t("dt",null,[t("ul",null,[t("li",null,r(m.itemSystemName),1),t("li",null,[I(i,{type:"primary",size:"small",onClick:K=>_(m)},{default:U(()=>[k("进入")]),_:2},1032,["onClick"])])])]),t("dd",null,r(m.itemSystemSubTitle),1)])])]))),128))])]))),128))],32)])])])}}},Y=v(H,[["__scopeId","data-v-6259d6c9"]]);export{Y as default};
