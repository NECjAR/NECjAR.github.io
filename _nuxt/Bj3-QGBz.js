import{d as q,o as Y,c as V,b as s,t as y,u as ce,a as le,f as m,w as k,g as b,h as G,e as g,_ as ue}from"./o3UIjNzZ.js";const fe={id:"﹟character",class:"hexagon-diagram-svg ⇞",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 250 300"},he=s("defs",null,[s("radialGradient",{id:"radientFlare"},[s("stop",{offset:"20%","stop-color":"#00000000"}),s("stop",{offset:"80%","stop-color":"#00000077"})])],-1),ve=["d"],_e=["d"],ye=["d"],xe=["d"],pe=["d"],me=["d"],ge=["d"],ke=["d"],be=["d"],Ce=["d"],De=["d"],Ae=["d"],Ee=["d"],Le=["x","y"],Ge=["x","y"],Ne=["x","y"],je=["x","y"],we=["x","y"],Be=["x","y"],x=54,p=-76,u=90,He=q({__name:"HexagonDiagram",props:{A:{type:Number,required:!0,default:1},B:{type:Number,required:!0,default:1},C:{type:Number,required:!0,default:1},D:{type:Number,required:!0,default:1},E:{type:Number,required:!0,default:1},F:{type:Number,required:!0,default:1},TYPE:{type:Number,required:!1,default:0}},setup(N){const a=N,D=["A","B","C","D","E","F"],j=["C","E","F","D","B","A"],w=["E","A","I","L","P","S"],A=["A","E","8","H","X","Y"];function f(o){return a.TYPE==1?j[o]:a.TYPE==2?w[o]:a.TYPE==3?A[o]:D[o]}const v=[{value:a.A},{value:a.B},{value:a.C},{value:a.D},{value:a.E},{value:a.F}];for(let o=0;o<v.length;o++)v[o].value<=0?v[o].value=1:v[o].value>100&&(v[o].value=100);const K=[{x:125,y:0},{x:250,y:75},{x:250,y:225},{x:125,y:300},{x:0,y:225},{x:0,y:75}],[r,i,n,d,c,l]=K,[B,H,S,$,F,M]=v,e=(o,T,ne)=>{const _=Number(o),E=Number(T),de=Number(ne),I=Math.abs(_-E)*de/100;return _>E?_-I:_<E?_+I:_},t={x:125,y:150};function U(){return e(t.x-x,r.x,u)}function Z(){return e(t.y-p,r.y,u)}function z(){return e(t.x-x,i.x,u)}function J(){return e(t.y-p,i.y,u)}function X(){return e(t.x-x,n.x,u)}function O(){return e(t.y-p,n.y,u)}function Q(){return e(t.x-x,d.x,u)}function ee(){return e(t.y-p,d.y,u)}function te(){return e(t.x-x,c.x,u)}function se(){return e(t.y-p,c.y,u)}function oe(){return e(t.x-x,l.x,u)}function ae(){return e(t.y-p,l.y,u)}function P(){return"M "+r.x+" "+r.y+" L "+l.x+" "+l.y+" L "+c.x+" "+c.y+" L "+d.x+" "+d.y+" L "+n.x+" "+n.y+" L "+i.x+" "+i.y+" Z"}function re(){return"M "+e(t.x,r.x,B.value)+" "+e(t.y,r.y,B.value)+" L "+e(t.x,l.x,M.value)+" "+e(t.y,l.y,M.value)+" L "+e(t.x,c.x,F.value)+" "+e(t.y,c.y,F.value)+" L "+e(t.x,d.x,$.value)+" "+e(t.y,d.y,$.value)+" L "+e(t.x,n.x,S.value)+" "+e(t.y,n.y,S.value)+" L "+e(t.x,i.x,H.value)+" "+e(t.y,i.y,H.value)+" Z"}function h(o){return"M "+e(t.x,r.x,o)+" "+e(t.y,r.y,o)+" L "+e(t.x,l.x,o)+" "+e(t.y,l.y,o)+" L "+e(t.x,c.x,o)+" "+e(t.y,c.y,o)+" L "+e(t.x,d.x,o)+" "+e(t.y,d.y,o)+" L "+e(t.x,n.x,o)+" "+e(t.y,n.y,o)+" L "+e(t.x,i.x,o)+" "+e(t.y,i.y,o)+" Z"}function ie(){return"M "+e(t.x,r.x,0)+" "+e(t.y,r.y,0)+" L "+e(t.x,r.x,100)+" "+e(t.y,r.y,100)+" M "+e(t.x,l.x,0)+" "+e(t.y,l.y,0)+" L "+e(t.x,l.x,100)+" "+e(t.y,l.y,100)+" M "+e(t.x,c.x,0)+" "+e(t.y,c.y,0)+" L "+e(t.x,c.x,100)+" "+e(t.y,c.y,100)+" M "+e(t.x,d.x,0)+" "+e(t.y,d.y,0)+" L "+e(t.x,d.x,100)+" "+e(t.y,d.y,100)+" M "+e(t.x,n.x,0)+" "+e(t.y,n.y,0)+" L "+e(t.x,n.x,100)+" "+e(t.y,n.y,100)+" M "+e(t.x,i.x,0)+" "+e(t.y,i.y,0)+" L "+e(t.x,i.x,100)+" "+e(t.y,i.y,100)+" Z"}return(o,T)=>(Y(),V("svg",fe,[he,s("path",{d:P(),fill:"var(--theme-color)"},null,8,ve),s("path",{d:P(),fill:"url('#radientFlare')",stroke:"var(--themeHigh-color)"},null,8,_e),s("path",{d:h(90),fill:"transparent",stroke:"#ffffff05"},null,8,ye),s("path",{d:h(80),fill:"transparent",stroke:"#ffffff05"},null,8,xe),s("path",{d:h(70),fill:"transparent",stroke:"#ffffff05"},null,8,pe),s("path",{d:h(60),fill:"transparent",stroke:"#ffffff05"},null,8,me),s("path",{d:h(50),fill:"transparent",stroke:"#ffffff10"},null,8,ge),s("path",{d:h(40),fill:"transparent",stroke:"#ffffff05"},null,8,ke),s("path",{d:h(30),fill:"transparent",stroke:"#ffffff05"},null,8,be),s("path",{d:h(20),fill:"transparent",stroke:"#ffffff05"},null,8,Ce),s("path",{d:h(10),fill:"transparent",stroke:"#ffffff05"},null,8,De),s("path",{d:re(),class:"hexagon-diagram-path"},null,8,Ae),s("path",{d:ie(),fill:"transparent",stroke:"#ffffff10"},null,8,Ee),s("text",{x:U(),y:Z()},y(f(0)),9,Le),s("text",{x:z(),y:J()},y(f(1)),9,Ge),s("text",{x:X(),y:O()},y(f(2)),9,Ne),s("text",{x:Q(),y:ee()},y(f(3)),9,je),s("text",{x:te(),y:se()},y(f(4)),9,we),s("text",{x:oe(),y:ae()},y(f(5)),9,Be)]))}}),Se={class:"page ⇑"},$e=G('<div class="🇬🇩 🇬🇩-E2j2"><div class="🇬🇩-E 🇬🇩-right"><div class="ratio-4x3" style="--bg-image-cover:url(&#39;/images/kadae/cover-1x1.jpg&#39;);background-color:#332d1f;"></div></div><div class="🇬🇩-j"><h1 style="color:var(--themeHigh-color);">Kadae</h1><h5>The man behind the <span class="⡯NECjAR">NEC<span class="⡯j">j</span>AR</span></h5><hr><p> Design Awards Winner (Best CSS, Esteemed Award, Site of the Month, Site of the Day, Guru of the Day, Booster of the Day, Special Recognition Award and many others). </p><p> С# Windows Application Developer, C# Unity (no more, fuck Unity) and C# Stride Game Developer and Game Designer, UX/UI Award-winning Designer, C# Game-Developer and Bot-Developer, Telegram Bot-Developer, PHP/JS/HTML5/CSS4 Web-Developer and VueJS enthusiast (fuck React), FLASH/ANIMATE lover and AS3 Game-Developer (no more). </p><p> Also Movies fan, Fashion Designer, AI Researcher, Short Films Director, Producer, Digital Artist, Graphic Novels and Sci-Fi/Cyberpunk Writer, pizza destroyer and bike rider. </p></div></div><div class="diagonal" style="background-color:var(--theme-color);color:#fff;"><div class="🇬🇩 🇬🇩-C2"><div class="🇬🇩-C"><div class="⚎"><div class="⚎-block"><div class="⚎-header">MBTI</div><div class="⚎-text">INFP (Mediator)</div></div><div class="⚎-block"><div class="⚎-header">Gender / Race</div><div class="⚎-text">Male / White, Caucasian</div></div><div class="⚎-block"><div class="⚎-header">Eyes / Height / IQ</div><div class="⚎-text">Blue / 180cm / 140+</div></div><div class="⚎-block"><div class="⚎-header">Skills</div><div class="⚎-text">Animation, Design, 3D modeling, C# game developing, Bot developing and AI researching, Web developing, Writing, Movie making, Producing and Directing</div></div></div></div></div></div>',2),Fe={class:"🇬🇩 🇬🇩-middle 🇬🇩-E2j2"},Me={class:"🇬🇩-E 🇬🇩-right"},Pe={class:"🇬🇩-j"},Te=s("h2",null,[s("span",{style:{"font-weight":"bold",color:"var(--themeHigh-color)"}},"Kadae"),s("sup",null,"'s"),g(" Projects priority")],-1),Ie={class:"⚎"},Re=G('<div class="⚎-block"><div class="⚎-header" style="color:var(--themeHigh-color);">A</div><div class="⚎-text"><small>Secret project</small></div></div><div class="⚎-block"><div class="⚎-header" style="color:var(--themeHigh-color);">B</div><div class="⚎-text"><small>Secret project</small></div></div>',2),We={class:"⚎-block"},qe=s("div",{class:"⚎-header",style:{color:"var(--themeHigh-color)"}},"C",-1),Ye={class:"⚎-text"},Ve={class:"⚎-block"},Ke=s("div",{class:"⚎-header",style:{color:"var(--themeHigh-color)"}},"D",-1),Ue={class:"⚎-text"},Ze={class:"⚎-block"},ze=s("div",{class:"⚎-header",style:{color:"var(--themeHigh-color)"}},"E",-1),Je={class:"⚎-text"},Xe={class:"⚎-block"},Oe=s("div",{class:"⚎-header",style:{color:"var(--themeHigh-color)"}},"F",-1),Qe={class:"⚎-text"},et=G('<div class="🇬🇩 🇬🇩-C2"><div class="🇬🇩-C"><h3>What does it mean?</h3><p> Kadae has many different projects and he is physically unable to work on all of them. This diagram shows the priority for projects. </p></div></div><div class="diagonal" style="background-color:var(--theme-color);color:#fff;"><div class="🇬🇩 🇬🇩-E2j2"><div class="🇬🇩-E"><div class="ratio-16x8" style="--bg-image-cover:url(&#39;/images/kadae/default--diag-xs.jpg&#39;);background-color:#332d1f;"></div></div><div class="🇬🇩-j"><div class="ratio-16x9" style="--bg-image-cover:url(&#39;/images/projects-xs.jpg&#39;);background-color:#332d1f;"></div></div></div></div>',2),R="necjar.com",C="Kadae",L="The man behind the NECjAR.",tt="kadae, sorrow, airat asadullin",W="necjar3",at=q({__name:"kadae",setup(N){const a=ce(),D=C;return le({title:C,meta:[{name:"description",content:L},{name:"keywords",content:tt},{name:"og:title",content:C},{name:"og:description",content:L},{name:"og:image",content:"https://"+R+"/icons/"+W+".jpg"},{name:"og:image:alt",content:D},{name:"twitter:title",content:C},{name:"twitter:description",content:L},{name:"twitter:image",content:"https://"+R+"/icons/"+W+".jpg"}]}),(j,w)=>{const A=He,f=ue;return Y(),V("main",Se,[$e,s("div",Fe,[s("div",Me,[m(A,{A:10,B:70,C:20,D:50,E:10,F:50,TYPE:0})]),s("div",Pe,[Te,s("div",Ie,[Re,s("div",We,[qe,s("div",Ye,[m(f,{to:b(a)("/anna")},{default:k(()=>[g("ANNA")]),_:1},8,["to"])])]),s("div",Ve,[Ke,s("div",Ue,[m(f,{to:b(a)("/hhh")},{default:k(()=>[g("Head Held High")]),_:1},8,["to"])])]),s("div",Ze,[ze,s("div",Je,[m(f,{to:b(a)("/echo")},{default:k(()=>[g("E.C.H.O.")]),_:1},8,["to"])])]),s("div",Xe,[Oe,s("div",Qe,[m(f,{to:b(a)("/gr8")},{default:k(()=>[g("GR8")]),_:1},8,["to"])])])])])]),et])}}});export{at as default};
