import{r as a,j as e,C as O,M as R,i as j}from"../../main/index-D3aMvSv4.js";import{I as T,B as h}from"./Input.BCuCOOcD.js";import{S as U}from"./Select.Cci0PC96.js";import{s as E,S as I,V as M,X as B,R as V}from"./selectKWords.CMjOcxQo.js";const C="---",v=10,p=Array.from(Array(v)).map(()=>""),x=Object.entries(O).map(([o,l])=>({value:l,label:o}));x.unshift({value:C,label:"---"});function L(){const[o,l]=a.useState([]),[n,S]=a.useState(x[0]),[y,d]=a.useState(),[N,b]=a.useState([]),w=a.useMemo(()=>{const t=n.value===C?o:o.filter(s=>s.categories.includes(n.value));return E({data:t,strategy:I.Knowledge,wordCount:v})},[o,n]),[u,f]=a.useState(()=>p),A=()=>{d(!0);const t=[];w.forEach((s,c)=>{const{id:r,spelling:m}=s;if(!(m===u[c]))return;const i={...s,points:Math.min(s.points+1,R)};t.push(i),j.update(r,i)}),b(t)};a.useEffect(()=>{async function t(){const s=await j.readAll();l(s)}t()},[]);const W=()=>{f(p),d(!1),l(t=>t.map(s=>N.find(r=>r.id===s.id)??s))},k=()=>{f(p),d(!1)};return o.length?e.jsxs("div",{className:"flex size-full flex-col items-center justify-center gap-10 overflow-auto p-6",children:[e.jsx(U,{selectedOption:n,setOption:S,options:x}),e.jsx("div",{className:"flex w-full max-w-md flex-col gap-3 rounded-md border p-4",children:w.map(({spelling:t,meaning:s,soundsLike:c},r)=>{const m=t===u[r];return e.jsxs("div",{className:"flex h-10 w-full items-center justify-between gap-10",children:[e.jsx("div",{title:c,children:s[0]}),e.jsxs("div",{className:"flex h-full items-center gap-2",children:[e.jsx(T,{value:u[r],setValue:g=>f(i=>i.with(r,g)),className:"!w-36"}),e.jsx("div",{className:"h-full w-6",children:y&&e.jsx("div",{className:"flex h-full items-center justify-center",children:m?e.jsx(M,{className:"h-1/2",borderColor:"#19d23a",color:"#19d23a",title:t}):e.jsx(B,{className:"h-1/2 stroke-red-500",title:t})})})]})]},r)})}),e.jsxs("div",{className:"flex w-full max-w-md items-center justify-between gap-4",children:[e.jsx(h,{content:"Check",onClick:A,className:"h-10 w-24"}),e.jsx(h,{content:"retry",onClick:k,className:"flex flex-col-reverse items-center justify-center gap-1 bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800",children:e.jsx(V,{className:"size-4"})}),e.jsx(h,{content:"Next",onClick:W,className:"h-10 w-24 bg-green-600 hover:bg-green-700 active:bg-green-800"})]})]}):null}export{L as default};
//# sourceMappingURL=index.5Nsx4N8Q.js.map
