import{d as g,i as u,o as f,c as p,b as t,t as d,e as m}from"./B98NOn3b.js";const w={class:"🇬🇩 🇬🇩-nogap 🇬🇩-E4"},k={class:"🇬🇩-E"},x=["href"],E={class:"wiki-iframe"},I=["src","height"],C=g({__name:"Iframe",props:{Page:{type:String,required:!0,default:""}},setup(c){const{locale:l,setLocale:v}=u(),s=c;let a="";const n=l.value;n=="ru"&&(a=n+"/");let _=s.Page.replace(/[_]/g," ");function o(){return"https://wiki.necjar.com/"+a+s.Page}function h(){let e=720;if(window!=null){e=window.screen.height,e-=e*50/100;let i=500,r=1500;e<i&&(e=i),e>r&&(e=r)}return e.toString()+"px"}return(e,i)=>(f(),p("article",w,[t("div",k,[t("a",{class:"wiki-title",href:o()},"🔒 WIKI.NECjAR.COM / "+d(m(_)),9,x),t("div",E,[t("iframe",{src:o(),height:h(),allowfullscreen:""},null,8,I)])])]))}});export{C as _};
