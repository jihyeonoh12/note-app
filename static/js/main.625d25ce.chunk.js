(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(57)},31:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=(n(31),n(19)),l=n(18),s=n(4);function u(e){var t=e.notes.map(function(t,n){return r.a.createElement("div",{className:"sidebar--container",key:t.id},r.a.createElement("div",{className:"title ".concat(t.id===e.currentNote.id?"selected-note":""),onClick:function(){return e.setCurrentNoteId(t.id)}},r.a.createElement("h4",{className:"text-snippet"},t.body.split("\n")[0]),r.a.createElement("button",{className:"delete-btn",onClick:function(n){return e.deleteNote(n,t.id)}},r.a.createElement("i",{className:"gg-trash trash-icon"}))))});return r.a.createElement("section",{className:"pane sidebar"},r.a.createElement("div",{className:"sidebar--header"},r.a.createElement("h4",null,"Create New Note"),r.a.createElement("button",{className:"new-note",onClick:e.newNote},"+")),t)}var m=n(6),d=n.n(m),f=n(16),g=n.n(f);n(53);function N(e){var t=e.currentNote,n=e.updateNote,a=r.a.useState("write"),o=Object(s.a)(a,2),c=o[0],i=o[1],l=new g.a.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0});return r.a.createElement("section",{className:"pane editor"},r.a.createElement(d.a,{value:t.body,onChange:n,selectedTab:c,onTabChange:i,generateMarkdownPreview:function(e){return Promise.resolve(l.makeHtml(e))},minEditorHeight:80,heightUnits:"vh"}))}var h=n(20),p=n(17);n(56);function E(){var e=r.a.useState(function(){return JSON.parse(localStorage.getItem("notes"))||[]}),t=Object(s.a)(e,2),n=t[0],a=t[1],o=r.a.useState(function(){return JSON.parse(localStorage.getItem("pageTitle")||"Notes Thoughts")}),c=Object(s.a)(o,2),m=c[0],d=c[1],f=r.a.useState(n[0]&&n[0].id||""),g=Object(s.a)(f,2),E=g[0],b=g[1];function v(){var e={id:Object(p.a)(),body:"type your thoughts here"};a(function(t){return[e].concat(Object(l.a)(t))}),b(e.id)}function w(){return n.find(function(e){return e.id===E})||n[0]}r.a.useEffect(function(){localStorage.setItem("notes",JSON.stringify(n))},[n]);var C=new Date,S="".concat(C.getMonth()+1," / ").concat(C.getDate()," / ").concat(C.getFullYear());return r.a.useEffect(function(){localStorage.setItem("pageTitle",JSON.stringify(m))},[m]),r.a.createElement("main",null,r.a.createElement("div",{className:"page-title-container"},r.a.createElement("h1",{className:"page-title"},"\ud83d\udcd3 ",r.a.createElement("input",{className:"page-title--input",placeholder:"Notes Thoughts",onChange:function(e){d(function(t){return e.target.value})},value:m})),r.a.createElement("h4",{className:"page-date"},S)),n.length>0?r.a.createElement(h.a,{sizes:[30,70],direction:"horizontal",className:"split"},r.a.createElement(u,{notes:n,currentNote:w(),setCurrentNoteId:b,newNote:v,deleteNote:function(e,t){e.stopPropagation(),a(function(e){return e.filter(function(e){return e.id!==t})})}}),E&&n.length>0&&r.a.createElement(N,{currentNote:w(),updateNote:function(e){a(function(t){var n=[];return t.map(function(t){return t.id===E?n.unshift(Object(i.a)({},t,{body:e})):n.push(t)}),n})}})):r.a.createElement("div",{className:"no-notes"},r.a.createElement("h1",null,"You have no notes"),r.a.createElement("button",{className:"first-note",onClick:v},"Create one now")))}var b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null))),b()}},[[22,1,2]]]);
//# sourceMappingURL=main.625d25ce.chunk.js.map