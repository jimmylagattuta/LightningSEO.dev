"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[840],{840:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var i=n(483);const r=()=>((0,i.useEffect)((()=>{const t=setTimeout((async()=>{try{const t=await fetch("https://ipapi.co/json"),e=await t.json(),n={ip:e.ip,city:e.city,region:e.region,country:e.country_name,referrer:document.referrer,userAgent:navigator.userAgent,timestamp:(new Date).toISOString()};await fetch("https://www.lightningseo.dev/send_visit_notification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}catch(t){console.error("Visitor tracking failed:",t)}}),1e3);return()=>clearTimeout(t)}),[]),null)}}]);
//# sourceMappingURL=840.a536b080.chunk.js.map