import{j as o,r as c,c as m,C as g}from"../../main/index-Cu_ILchR.js";function p(t){const{title:n}=t;return o.jsx("div",{className:"flex cursor-pointer items-center justify-center rounded-md bg-red-50 hover:bg-red-100 active:bg-red-200 dark:bg-slate-900",children:o.jsx("h2",{className:"font-bold",children:n})})}function h(t,n=300){let e;return(...r)=>{e&&clearTimeout(e),e=setTimeout(()=>{e=null,t(...r)},n)}}function x(t){const{eventType:n,fnToRun:e,dependencies:r=[],element:s=window,shouldExecute:u=!0}=t,i=c.useRef(e);c.useEffect(()=>i.current=e,[e]),c.useEffect(()=>{if(u)return s.addEventListener(n,i.current),i.current(),()=>s.removeEventListener(n,i.current)},[...r,u])}function b(t){const{wrapperRef:n,fnToRun:e,ms:r=300,shouldExecute:s}=t,[u,i]=c.useState(()=>({width:0,height:0})),a=c.useCallback(h(()=>{const{width:d,height:f}=n.current.getBoundingClientRect(),l={width:d,height:f};i(l),e?.(l)},r),[]);return x({eventType:"resize",fnToRun:a,shouldExecute:s}),u}function v(t){return t<600?"small":t<1080?"medium":"large"}function R(){const t=c.useMemo(()=>Object.keys(g),[]),n=c.useRef(null),{width:e}=b({wrapperRef:n,ms:200}),r=v(e);return o.jsx("div",{className:"size-full overflow-auto p-6",children:o.jsx("div",{className:m("grid auto-rows-[200px] gap-x-5 gap-y-4",r==="small"&&"grid-cols-1",r==="medium"&&"grid-cols-2",r==="large"&&"grid-cols-4"),ref:n,children:!!e&&t.map(s=>o.jsx(p,{title:s},s))})})}export{R as default};
//# sourceMappingURL=index.BAE9shhC.js.map
