import{j as e,M as y,r as u,i as v}from"../../main/index-lx7SLu_J.js";import{I as A,B as g}from"./Input.yNFD8ARJ.js";function S(t){const{className:s,color:r,title:n="retry"}=t;return e.jsxs("svg",{stroke:r,className:s,version:"1.1",viewBox:"0 0 41.228 37.1",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:n}),e.jsx("path",{d:"m18.533 37.1a18.55 18.55 0 1 1 18-23.1l1.18-1.3a2.0147 2.0147 0 0 1 3 2.69l-4.18 4.53a2 2 0 0 1-3.48-1.34 14.56 14.56 0 1 0-14.52 14.52 14.41 14.41 0 0 0 10.45-4.43 2.0014 2.0014 0 0 1 2.88 2.78 18.38 18.38 0 0 1-13.33 5.65z"}),e.jsx("path",{d:"m35.043 20.55a2 2 0 0 1-0.91-0.22l-4.7-2.41a2.0014 2.0014 0 1 1 1.83-3.56l4.69 2.41a2 2 0 0 1-0.91 3.78z"})]})}function I(t){const{color:s="black",fillColor:r="none",borderColor:n,title:o="v in a circle",className:c}=t;return e.jsxs("svg",{viewBox:"0 0 20 20",stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",className:c,children:[e.jsx("title",{children:o}),e.jsx("circle",{cx:"10",cy:"10",r:"9",stroke:n||s,fill:r}),e.jsx("line",{x1:"8.7",y1:"13",x2:"14.2",y2:"7"}),e.jsx("line",{x1:"5.9",y1:"10.33",x2:"8.7",y2:"13"})]})}function E(t){const{color:s="currentColor",className:r,title:n="x mark"}=t;return e.jsxs("svg",{viewBox:"0 0 100 100",strokeWidth:8,stroke:s,strokeLinecap:"round",className:r,children:[e.jsx("title",{children:n}),e.jsx("line",{x1:"20",y1:"20",x2:"80",y2:"80"}),e.jsx("line",{x1:"20",y1:"80",x2:"80",y2:"20"})]})}function M(t,s=10){if(t.length<=s)return t;const r=[],n=[...t];for(let o=0;o<s;o++){const c=Math.floor(Math.random()*n.length);r.push(n.splice(c,1)[0])}return r}function T(t){const{data:s,getItemWeight:r,maxWeight:n}=t,o=s.reduce((l,h)=>l+(n-r(h)+1),0);let c=Math.random()*o;for(const l of s)if(c-=n-r(l)+1,c<=0)return l}var k=(t=>(t.EvenChance="even-chance",t.Knowledge="knowledge",t))(k||{});const R={"even-chance":t=>{const{data:s}=t;return M(s)},knowledge:t=>{const{data:s,wordCount:r}=t;if(s.length<=r)return s;const n=[];for(let o=0;o<r;o++){const c=T({data:s,maxWeight:y,getItemWeight:l=>l.points});n.find(l=>l.meaning===c?.meaning)?o--:n.push(c)}return n}};function B(t){const{data:s,wordCount:r=10,strategy:n="even-chance"}=t,o=R[n];return o({data:s,wordCount:r})}const C=10,w=Array.from(Array(C)).map(()=>"");function z(){const[t,s]=u.useState([]),[r,n]=u.useState(),[o,c]=u.useState([]),l=u.useMemo(()=>B({data:t,strategy:k.Knowledge,wordCount:C}),[t]),[h,f]=u.useState(()=>w),W=()=>{n(!0);const i=[];l.forEach((a,d)=>{const{id:x,spelling:m}=a;if(!(m===h[d]))return;const p={...a,points:Math.min(a.points+1,y)};i.push(p),v.update(x,p)}),c(i)};u.useEffect(()=>{async function i(){const a=await v.readAll();s(a)}i()},[]);const N=()=>{f(w),n(!1),s(i=>i.map(a=>o.find(x=>x.id===a.id)??a))},b=()=>{f(w),n(!1)};return t.length?e.jsxs("div",{className:"flex size-full flex-col items-center justify-center gap-10 p-6",children:[e.jsx("div",{className:"flex w-full max-w-md flex-col gap-3 rounded-md border p-4",children:l.map(({spelling:i,meaning:a},d)=>{const x=i===h[d];return e.jsxs("div",{className:"flex h-10 w-full items-center justify-between gap-10",children:[e.jsx("div",{children:a[0]}),e.jsxs("div",{className:"flex h-full items-center gap-2",children:[e.jsx(A,{value:h[d],setValue:m=>f(j=>j.with(d,m)),className:"!w-52"}),e.jsx("div",{className:"h-full w-12",children:r&&e.jsx("div",{className:"flex h-full items-center justify-center",children:x?e.jsx(I,{className:"h-1/2",borderColor:"#19d23a",color:"#19d23a"}):e.jsx(E,{className:"h-1/2 stroke-red-500"})})})]})]},d)})}),e.jsxs("div",{className:"flex w-full max-w-md items-center justify-between gap-4",children:[e.jsx(g,{content:"Check",onClick:W,className:"h-10 w-24"}),e.jsx(g,{content:"retry",onClick:b,className:"flex flex-col-reverse items-center justify-center gap-1 bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800",children:e.jsx(S,{className:"size-4"})}),e.jsx(g,{content:"Next",onClick:N,className:"h-10 w-24 bg-green-600 hover:bg-green-700 active:bg-green-800"})]})]}):e.jsx("div",{children:"Loading..."})}export{z as default};
//# sourceMappingURL=index.BGaDirt4.js.map
