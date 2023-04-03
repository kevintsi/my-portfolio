(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(15),s=c.n(i),o=(c(22),c(23),c(6)),a=c(9),r=c(8);c(24);var l=c(0),j=function(){var e=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(document.body.getBoundingClientRect()),a=Object(o.a)(s,2),r=a[0],l=a[1],j=Object(n.useState)(r.top),u=Object(o.a)(j,2),d=u[0],b=u[1],h=Object(n.useState)(r.left),m=Object(o.a)(h,2),p=m[0],O=m[1],x=Object(n.useState)(),v=Object(o.a)(x,2),f=v[0],g=v[1],N=function(e){l(document.body.getBoundingClientRect()),b(-r.top),O(r.left),g(c>-r.top?"down":"up"),i(-r.top)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}})),{scrollY:d,scrollX:p,scrollDirection:f}}(),t=e.scrollDirection,c=Object(n.useState)(!1),i=Object(o.a)(c,2),s=i[0],j=i[1],u=function(){j(!s)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:s?"menu-mobile menu-mobile-show":"menu-mobile menu-mobile-hidden",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.a,{onClick:function(){return u()},smooth:!0,activeClassName:"activeLink",to:"/#home",exact:!0,children:"Accueil"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.a,{onClick:function(){return u()},smooth:!0,activeClassName:"activeLink",to:"/#about-me",children:"A propos de moi"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.a,{onClick:function(){return u()},smooth:!0,activeClassName:"activeLink",to:"/#projects",children:"Projets"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.a,{onClick:function(){return u()},smooth:!0,activeClassName:"activeLink",to:"/#contact",children:"Contact"})})]})}),Object(l.jsxs)("nav",{className:"nav-mobile",children:[Object(l.jsx)("img",{src:"/my-portfolio/images/hamburger_menu.png",alt:"menu",onClick:function(){return u()}}),Object(l.jsxs)(a.c,{to:"/",className:"portfolio",exact:!0,children:[Object(l.jsx)("span",{className:"port",children:"Port"}),Object(l.jsx)("span",{className:"folio",children:"folio"})]})]}),Object(l.jsxs)("nav",{className:"down"!==t&&t?"nav-hidden":"nav-container",children:[Object(l.jsx)("div",{className:"nav-left",children:Object(l.jsxs)(a.c,{to:"/",className:"portfolio",exact:!0,children:[Object(l.jsx)("span",{className:"port",children:"Port"}),Object(l.jsx)("span",{className:"folio",children:"folio"})]})}),Object(l.jsxs)("ul",{className:"nav-right",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.a,{smooth:!0,activeClassName:"activeLink",to:"/#home",exact:!0,children:"Accueil"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.a,{smooth:!0,activeClassName:"activeLink",to:"/#about-me",exact:!0,children:"A propos de moi"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.a,{smooth:!0,activeClassName:"activeLink",to:"/#projects",exact:!0,children:"Projets"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.a,{smooth:!0,activeClassName:"activeLink",to:"/#contact",exact:!0,children:"Contact"})})]})]})]})},u=(c(34),function(e){var t=e.skill,c=e.idx;return Object(l.jsx)("div",{className:"skill-item",children:t},c)}),d=(c(35),function(){return Object(l.jsx)("section",{id:"about-me",children:Object(l.jsxs)("div",{className:"about-me-container",children:[Object(l.jsx)("h1",{className:"section-title",children:"Me concernant"}),Object(l.jsx)("p",{className:"about-me-summary",children:"Ici vous trouverez plus d'informations me concernant, ce que je fais, les langages de programmations et technologies que je connais."}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"introduction",children:[Object(l.jsx)("h2",{children:"Qui suis-je ?"}),Object(l.jsxs)("p",{children:["Bonjour, je suis un ",Object(l.jsx)("b",{children:"D\xe9veloppeur FullStack orient\xe9 Backend"}),". Vous pouvez voir quelques uns de mes projets dans la section ",Object(l.jsx)("b",{children:"Projets"}),"."]}),Object(l.jsxs)("p",{children:["Je suis ouvert aux nouvelles opportunit\xe9s o\xf9 je pourrais ",Object(l.jsx)("b",{children:"contribuer"}),", ",Object(l.jsx)("b",{children:"apprendre"})," et ",Object(l.jsx)("b",{children:"grandir"})," en tant que d\xe9veloppeur. Si vous avez des opportunit\xe9s qui correspondent avec mes comp\xe9tences et exp\xe9rience, n'h\xe9sitez pas \xe0 me contacter."]})]}),Object(l.jsxs)("div",{className:"skills-container",children:[Object(l.jsx)("h2",{children:"Langages et technologies que je connais"}),Object(l.jsx)("div",{children:["React.js","Python","Docker","Git","Node.js","SQL","Linux","Windows","Express.js"].map((function(e,t){return Object(l.jsx)(u,{skill:e,id:t})}))})]})]})]})})}),b=(c(36),function(){return Object(l.jsx)("section",{className:"home-container",id:"home",children:Object(l.jsxs)("div",{className:"brief-introduction-container",children:[Object(l.jsxs)("div",{className:"heading",children:[Object(l.jsxs)("div",{className:"primary-heading",children:["Bonjour, je m'appelle ",Object(l.jsx)("strong",{style:{color:"#D91E18"},children:"K\xe9vin TSI"})]}),Object(l.jsx)("p",{className:"secondary-heading",children:"D\xe9veloppeur Web FullStack orient\xe9 Backend"})]}),Object(l.jsxs)("div",{className:"social-network-container",children:[Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/k%C3%A9vin-tsi-160381181/",children:Object(l.jsx)("img",{src:"/my-portfolio/images/linkedIn.png",alt:"LinkedIn"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://github.com/kevintsi",children:Object(l.jsx)("img",{src:"/my-portfolio/images/github.png",alt:"Github"})})})]}),Object(l.jsx)("div",{children:Object(l.jsx)(r.a,{smooth:!0,className:"contact-button-link",to:"/#contact",children:Object(l.jsx)("div",{className:"contact-button-container",children:Object(l.jsx)("input",{className:"contact-button",type:"button",value:"Contact"})})})})]})})}),h=(c(37),function(e){var t=e.project;return Object(l.jsxs)("div",{className:"card-project",children:[Object(l.jsx)("h4",{children:t.name}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:t.description}),Object(l.jsx)("div",{className:"project-skills-container",children:t.skills.map((function(e,t){return Object(l.jsx)(u,{skill:e,idx:t})}))}),Object(l.jsx)("a",{href:t.github_link,children:Object(l.jsx)("img",{src:"/my-portfolio/images/github.png",alt:"Cliquez dessus pour acc\xe9der au github"})})]})]})}),m=(c(38),function(){return Object(l.jsx)("section",{className:"projects-container",id:"projects",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"section-title",children:"Mes projets professionnels"}),Object(l.jsx)("p",{children:"Dans cette section vous trouverez diff\xe9rents projets professionels que j'ai pu faire."}),Object(l.jsx)("div",{className:"project-list",children:[{name:"Mini-Projet Cloud Computing",description:"Mini-Projet consistant \xe0 cr\xe9er un mod\xe8le en utilisant un algorithme de machine learning (R\xe9gression Lin\xe9aire, Classification)  et puis l'utiliser dans une API.",github_link:"https://github.com/kevintsi/projetCC",skills:["Python","Git","FastAPI"]},{name:"Projet Todolist",description:"Application todolist permettant d'ajouter, modifier et supprimer une ou plusieurs taches",github_link:"https://github.com/kevintsi/TodoList",skills:["React.js","Git"]},{name:"Projet MyMovieApp",description:"Application mobile r\xe9pertoriant les films populaires, r\xe9cents et mieux not\xe9s \xe0 l'aide de l'API de TheMovieDB",github_link:"https://github.com/kevintsi/MyMovieApp",skills:["React-Native","Git"]}].map((function(e){return Object(l.jsx)(h,{project:e})}))})]})})}),p=c(17),O=(c(39),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(""),a=Object(o.a)(s,2),r=a[0],j=a[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),b=d[0],h=d[1],m=Object(n.useState)(""),O=Object(o.a)(m,2),x=O[0],v=O[1];return Object(l.jsxs)("section",{className:"contact-container",id:"contact",children:[Object(l.jsx)("h1",{className:"section-title",children:"Contact"}),Object(l.jsx)("div",{className:"contact-main-container",children:Object(l.jsxs)("form",{method:"post",className:"form-container",onSubmit:function(e){e.preventDefault(),0!==c.length&&0!==r.length&&0!==b.length&&0!==x.length&&(console.log("send email"),p.a.send("service_tsxysdm","template_5p6l6pm",{name:r,subject:x,from_email:c,message:b},"IhR4h1BDcR_36ILmp"),i(""),j(""),h(""),v(""),alert("Mail envoy\xe9 avec succ\xe8s"))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",value:r,onChange:function(e){return j(e.target.value)},placeholder:"Phil Anthrope",required:!0}),Object(l.jsx)("label",{children:"Nom"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"email",value:c,onChange:function(e){return i(e.target.value)},placeholder:"phil.anthrope@gmail.com",required:!0}),Object(l.jsx)("label",{children:"Email"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",value:x,onChange:function(e){return v(e.target.value)},placeholder:"Offre...",required:!0}),Object(l.jsx)("label",{children:"Sujet"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("textarea",{rows:"5",cols:"33",value:b,onChange:function(e){return h(e.target.value)},required:!0}),Object(l.jsx)("label",{children:"Message"})]}),Object(l.jsx)("input",{type:"submit",value:"Envoyer"})]})})]})}),x=function(){return Object(l.jsxs)(a.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{}),Object(l.jsx)(d,{}),Object(l.jsx)(m,{}),Object(l.jsx)(O,{})]})};s.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);