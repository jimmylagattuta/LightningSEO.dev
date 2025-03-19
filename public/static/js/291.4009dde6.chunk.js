"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[271,291,465,726],{271:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(483),i=a(149),r=a(626),n=a(723);const c=function(e){let{showButton:s=!0}=e;const a=Object.entries(r.F9).map((e=>{let[s,a]=e;return{...a,id:s}})),[c,l]=(0,t.useState)(window.innerWidth>=768);return(0,t.useEffect)((()=>{const e=()=>l(window.innerWidth>=768);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,n.jsxs)("section",{className:"projects-section",children:[(0,n.jsxs)("div",{className:"section-header",children:[(0,n.jsx)("h1",{children:"Our Projects"}),(0,n.jsx)("p",{children:"Explore some of our latest work."})]}),(0,n.jsx)("div",{className:"projects-grid",children:a.map(((e,s)=>(0,n.jsxs)(i.N_,{to:`/projects/${e.id}`,className:"project-card",children:[(0,n.jsx)("div",{className:"project-image",style:{backgroundImage:`url(${c?e.desktopImage:e.heroImage})`}}),(0,n.jsxs)("div",{className:"project-info",children:[(0,n.jsx)("h2",{className:"project-title",children:e.name}),(0,n.jsx)("p",{className:"project-description",children:e.description})]})]},e.id)))}),s&&(0,n.jsx)("div",{className:"button-container",children:(0,n.jsx)(i.N_,{to:"/projects",className:"project-section-button",children:"View All Projects"})})]})}},291:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(483),i=a(149),r=a(807),n=a(626),c=a(271),l=a(723);const o=()=>{const{projectId:e}=(0,i.g)(),s=n.F9[e];return s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.m,{children:(0,l.jsxs)("title",{children:[s.name," - Project Details"]})}),(0,l.jsxs)("div",{className:"sp-container",children:[(0,l.jsx)("div",{className:"sp-hero",style:{backgroundImage:`url(${s.heroImage})`},children:(0,l.jsx)("h1",{className:"sp-title",children:s.name})}),(0,l.jsx)("div",{className:"sp-content",children:(0,l.jsx)("p",{className:"sp-description",children:s.description})}),(0,l.jsxs)("div",{className:"sp-devices",children:[(0,l.jsxs)("div",{className:"sp-device",children:[(0,l.jsxs)("div",{className:"sp-screen sp-desktop",children:[(0,l.jsx)("div",{className:"sp-stand"}),(0,l.jsx)("img",{src:s.desktopImage,alt:"Desktop View"})]}),(0,l.jsx)("p",{className:"sp-device-title sp-desktop-title",children:"\ud83d\udcbb DESKTOP VIEW"})]}),(0,l.jsxs)("div",{className:"sp-device",children:[(0,l.jsxs)("div",{className:"sp-screen sp-tablet",children:[(0,l.jsx)("div",{className:"sp-home-button"}),(0,l.jsx)("img",{src:s.tabletImage,alt:"Tablet View"}),(0,l.jsx)("div",{className:"sp-side-buttons"})]}),(0,l.jsx)("p",{className:"sp-device-title sp-tablet-title",children:"\ud83d\udcf1 TABLET VIEW"})]}),(0,l.jsxs)("div",{className:"sp-device",children:[(0,l.jsxs)("div",{className:"sp-screen sp-mobile",children:[(0,l.jsx)("div",{className:"sp-home-button"}),(0,l.jsx)("img",{src:s.mobileImage,alt:"Mobile View"}),(0,l.jsx)("div",{className:"sp-side-buttons"})]}),(0,l.jsx)("p",{className:"sp-device-title sp-mobile-title",children:"\ud83d\udcf2 MOBILE VIEW"})]})]}),s.url&&(0,l.jsx)("div",{className:"sp-website-container",children:"subtitle-tsunami"===e?(0,l.jsx)("a",{href:"mailto:jimmy.lagattuta@gmail.com?subject=Credentials%20Request%20for%20SubtitleTsunami",className:"sp-website-link",target:"_blank",rel:"noopener noreferrer",children:"Email for Credentials to Try This App."}):(0,l.jsxs)("a",{href:s.url,className:"sp-website-link",target:"_blank",rel:"noopener noreferrer",children:["Visit Website: ",s.name]})}),(0,l.jsx)("div",{className:"sp-back",children:(0,l.jsx)(i.N_,{to:"/projects",children:"\u2190 Back to Projects"})})]})]}):(0,l.jsx)("div",{className:"sp-error",children:"Project not found"})};var d=a(465),m=a(726);const h=function(){const{projectId:e}=(0,i.g)(),[s,a]=(0,t.useState)(!1),h=Boolean(e);let j=null;if(!h){j={"@context":"https://schema.org","@graph":Object.entries(n.F9).map((e=>{let[s,a]=e;return{"@type":"CreativeWork",name:a.name,description:a.description,url:a.website,image:a.desktopImage||a.heroImage}}))}}let p=null;if(e){const s=n.F9[e];p=s?(0,l.jsx)(o,{project:s}):(0,l.jsxs)("div",{className:"project-detail not-found",children:[(0,l.jsx)("h2",{children:"Project Not Found"}),(0,l.jsx)("p",{children:"Please select a valid project."})]})}else p=(0,l.jsx)(c.default,{showButton:!1});return(0,t.useEffect)((()=>{if("#contactForm"===window.location.hash){const e=document.getElementById("contactForm");e&&e.scrollIntoView({behavior:"smooth"})}}),[]),(0,l.jsxs)("div",{children:[!h&&j&&(0,l.jsx)(r.m,{children:(0,l.jsx)("script",{type:"application/ld+json",children:JSON.stringify(j)})}),(0,l.jsxs)("div",{className:"projects-page-container",children:[(0,l.jsxs)("div",{className:"contact-header",children:[(0,l.jsx)("p",{className:"small-heading",children:"LightningSEO.dev Projects"}),(0,l.jsx)("h2",{className:"main-heading",children:"Explore Our Work"}),(0,l.jsx)("p",{className:"sub-text",children:"Discover the innovative websites and applications we\u2019ve developed for our clients. Our projects showcase our expertise in digital marketing, SEO, and cutting-edge web and app development."})]}),p]}),(0,l.jsx)("div",{id:"contactForm",children:(0,l.jsx)(d.default,{})}),(0,l.jsx)(m.default,{})]})}},465:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(483),i=a(149),r=a(726),n=a(723);const c=function(){const e=(0,i.zy)(),[s,a]=(0,t.useState)({firstName:"",lastName:"",email:"",phone:"",message:"",agreement:!1}),[c,l]=(0,t.useState)({}),[o,d]=(0,t.useState)(!1),[m,h]=(0,t.useState)(!1),j=e=>{const{name:s,value:t,type:i,checked:r}=e.target;a((e=>({...e,[s]:"checkbox"===i?r:t})))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"contact-section",children:[(0,n.jsxs)("div",{className:"contact-section-header",children:[(0,n.jsx)("h2",{children:"Contact LightningSEO.dev"}),(0,n.jsx)("p",{children:"If you have any inquiries about our SEO, web development, mobile app, or Apple Watch app services, please fill out the short contact form below."})]}),o?(0,n.jsxs)("div",{className:"contact-submitted-message",children:[(0,n.jsx)("h3",{children:"Thank You!"}),(0,n.jsx)("p",{children:"Your message has been sent successfully. We will get back to you shortly."})]}):(0,n.jsxs)("form",{className:"contact-form",onSubmit:async e=>{e.preventDefault();const a=(()=>{const e={};return s.firstName||(e.firstName="First Name is required."),s.lastName||(e.lastName="Last Name is required."),s.email?/\S+@\S+\.\S+/.test(s.email)||(e.email="Email address is not valid."):e.email="Email address is required.",s.phone?/^\+?[1-9]\d{1,14}$/.test(s.phone)||(e.phone="Phone number is not valid. Please include country code."):e.phone="Phone number is required.",s.message||(e.message="Message is required."),s.agreement||(e.agreement="You must agree to the terms."),e})();if(0===Object.keys(a).length){var t;h(!0);const e=null===(t=document.querySelector('meta[name="csrf-token"]'))||void 0===t?void 0:t.getAttribute("content");try{const a=await fetch("https://www.lightningseo.dev/contact",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":e},body:JSON.stringify({contact:s})});a.ok?(d(!0),console.log("Message sent successfully:",s)):(console.error("Message sending failed",a),alert("There was an error sending your message. Please try again later."))}catch(i){console.error("Error sending message:",i),alert("There was an error sending your message. Please try again later.")}finally{h(!1)}}else l(a)},children:[(0,n.jsxs)("div",{className:"contact-form-row",children:[(0,n.jsxs)("div",{className:"contact-form-group",children:[(0,n.jsx)("label",{htmlFor:"firstName",children:"First Name"}),(0,n.jsx)("input",{type:"text",id:"firstName",name:"firstName",value:s.firstName,onChange:j,placeholder:"First Name",required:!0}),c.firstName&&(0,n.jsx)("span",{className:"error-message",children:c.firstName})]}),(0,n.jsxs)("div",{className:"contact-form-group",children:[(0,n.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),(0,n.jsx)("input",{type:"text",id:"lastName",name:"lastName",value:s.lastName,onChange:j,placeholder:"Last Name",required:!0}),c.lastName&&(0,n.jsx)("span",{className:"error-message",children:c.lastName})]})]}),(0,n.jsxs)("div",{className:"contact-form-group",children:[(0,n.jsx)("label",{htmlFor:"email",children:"Email Address"}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",value:s.email,onChange:j,placeholder:"Email Address",required:!0}),c.email&&(0,n.jsx)("span",{className:"error-message",children:c.email})]}),(0,n.jsxs)("div",{className:"contact-form-group",children:[(0,n.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,n.jsx)("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:j,placeholder:"Phone Number (e.g. +123456789)",required:!0}),c.phone&&(0,n.jsx)("span",{className:"error-message",children:c.phone})]}),(0,n.jsxs)("div",{className:"contact-form-group",children:[(0,n.jsx)("label",{htmlFor:"message",children:"Your Message"}),(0,n.jsx)("textarea",{id:"message",name:"message",value:s.message,onChange:j,placeholder:"Type your message here...",required:!0}),c.message&&(0,n.jsx)("span",{className:"error-message",children:c.message})]}),(0,n.jsxs)("div",{className:"contact-form-agreement",children:[(0,n.jsx)("input",{type:"checkbox",id:"agreement",name:"agreement",checked:s.agreement,onChange:j,required:!0}),(0,n.jsx)("label",{htmlFor:"agreement",children:"By submitting this form, I consent to having LightningSEO.dev contact me regarding my inquiry."}),c.agreement&&(0,n.jsx)("span",{className:"error-message",children:c.agreement})]}),(0,n.jsx)("button",{type:"submit",className:"contact-submit-button",disabled:m,children:m?"Sending...":"Send Message"})]})]}),"/contact"===e.pathname&&(0,n.jsx)(r.default,{})]})}},726:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});a(483),a(162);var t=a(723);const i=function(){return(0,t.jsxs)("footer",{className:"footer-container",children:[(0,t.jsxs)("div",{className:"footer-top-grid",children:[(0,t.jsx)("div",{className:"footer-col brand-col",children:(0,t.jsxs)("div",{className:"fancy-brand-row",children:[(0,t.jsx)("img",{src:"https://i.postimg.cc/QtwR2GW9/i-Stock-1502494966-1.webp",alt:"LightningSEO.dev Logo",className:"fancy-brand-logo",height:"40",width:"40"}),(0,t.jsxs)("div",{className:"fancy-text-group",children:[(0,t.jsx)("h1",{className:"fancy-brand-title",children:"LightningSEO.dev"}),(0,t.jsx)("h2",{className:"fancy-brand-subtitle",children:"Affordable Digital Marketing & Web Solutions"})]})]})}),(0,t.jsxs)("div",{className:"footer-col footer-section nav-col",children:[(0,t.jsx)("h3",{children:"Navigation"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/about-us",children:"About Us"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/services",children:"Services"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/projects",children:"Projects"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/pricing",children:"Pricing"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/reviews",children:"Reviews"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/contact",children:"Contact Us"})})]})]}),(0,t.jsxs)("div",{className:"footer-col footer-section services-col",children:[(0,t.jsx)("h3",{children:"Our Services"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/services/on-page-seo",children:"On-Page SEO"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/services/technical-seo",children:"Technical SEO"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/services/web-development",children:"Website Development"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/services/mobile-app",children:"Mobile App Development"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/services/watch-app",children:"Apple Watch App Development"})})]})]}),(0,t.jsxs)("div",{className:"footer-col footer-section contact-col",children:[(0,t.jsx)("h3",{children:"Get In Touch"}),(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Email: "}),(0,t.jsx)("a",{href:"mailto:jimmy.lagattuta@gmail.com",children:"\xa0jimmy.lagattuta@gmail.com"})]})}),(0,t.jsx)("p",{className:"book-appointment-p",children:(0,t.jsx)("a",{href:"/contact",className:"book-appointment-link",children:"Contact Us"})})]})]}),(0,t.jsxs)("div",{className:"footer-bottom",children:[(0,t.jsx)("p",{children:"\xa9 2025 LightningSEO.dev. All Rights Reserved."}),(0,t.jsxs)("ul",{className:"footer-bottom-links",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/terms-and-conditions",children:"Terms & Conditions"})})]}),(0,t.jsx)("p",{className:"footer-credit",children:"Website by James Lagattuta"})]})]})}}}]);
//# sourceMappingURL=291.4009dde6.chunk.js.map