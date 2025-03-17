"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[465,726],{465:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});var r=a(483),n=a(149),i=a(726),t=a(723);const l=function(){const e=(0,n.zy)(),[s,a]=(0,r.useState)({firstName:"",lastName:"",email:"",phone:"",message:"",agreement:!1}),[l,c]=(0,r.useState)({}),[o,d]=(0,r.useState)(!1),[h,m]=(0,r.useState)(!1),g=e=>{const{name:s,value:r,type:n,checked:i}=e.target;a((e=>({...e,[s]:"checkbox"===n?i:r})))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"contact-section",children:[(0,t.jsxs)("div",{className:"contact-section-header",children:[(0,t.jsx)("h2",{children:"Contact LightningSEO.dev"}),(0,t.jsx)("p",{children:"If you have any inquiries about our SEO, web development, mobile app, or Apple Watch app services, please fill out the short contact form below."})]}),o?(0,t.jsxs)("div",{className:"contact-submitted-message",children:[(0,t.jsx)("h3",{children:"Thank You!"}),(0,t.jsx)("p",{children:"Your message has been sent successfully. We will get back to you shortly."})]}):(0,t.jsxs)("form",{className:"contact-form",onSubmit:async e=>{e.preventDefault();const a=(()=>{const e={};return s.firstName||(e.firstName="First Name is required."),s.lastName||(e.lastName="Last Name is required."),s.email?/\S+@\S+\.\S+/.test(s.email)||(e.email="Email address is not valid."):e.email="Email address is required.",s.phone?/^\+?[1-9]\d{1,14}$/.test(s.phone)||(e.phone="Phone number is not valid. Please include country code."):e.phone="Phone number is required.",s.message||(e.message="Message is required."),s.agreement||(e.agreement="You must agree to the terms."),e})();if(0===Object.keys(a).length){var r;m(!0);const e=null===(r=document.querySelector('meta[name="csrf-token"]'))||void 0===r?void 0:r.getAttribute("content");try{const a=await fetch("https://www.lightningseo.dev/contact",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":e},body:JSON.stringify({contact:s})});a.ok?(d(!0),console.log("Message sent successfully:",s)):(console.error("Message sending failed",a),alert("There was an error sending your message. Please try again later."))}catch(n){console.error("Error sending message:",n),alert("There was an error sending your message. Please try again later.")}finally{m(!1)}}else c(a)},children:[(0,t.jsxs)("div",{className:"contact-form-row",children:[(0,t.jsxs)("div",{className:"contact-form-group",children:[(0,t.jsx)("label",{htmlFor:"firstName",children:"First Name"}),(0,t.jsx)("input",{type:"text",id:"firstName",name:"firstName",value:s.firstName,onChange:g,placeholder:"First Name",required:!0}),l.firstName&&(0,t.jsx)("span",{className:"error-message",children:l.firstName})]}),(0,t.jsxs)("div",{className:"contact-form-group",children:[(0,t.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),(0,t.jsx)("input",{type:"text",id:"lastName",name:"lastName",value:s.lastName,onChange:g,placeholder:"Last Name",required:!0}),l.lastName&&(0,t.jsx)("span",{className:"error-message",children:l.lastName})]})]}),(0,t.jsxs)("div",{className:"contact-form-group",children:[(0,t.jsx)("label",{htmlFor:"email",children:"Email Address"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",value:s.email,onChange:g,placeholder:"Email Address",required:!0}),l.email&&(0,t.jsx)("span",{className:"error-message",children:l.email})]}),(0,t.jsxs)("div",{className:"contact-form-group",children:[(0,t.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,t.jsx)("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:g,placeholder:"Phone Number (e.g. +123456789)",required:!0}),l.phone&&(0,t.jsx)("span",{className:"error-message",children:l.phone})]}),(0,t.jsxs)("div",{className:"contact-form-group",children:[(0,t.jsx)("label",{htmlFor:"message",children:"Your Message"}),(0,t.jsx)("textarea",{id:"message",name:"message",value:s.message,onChange:g,placeholder:"Type your message here...",required:!0}),l.message&&(0,t.jsx)("span",{className:"error-message",children:l.message})]}),(0,t.jsxs)("div",{className:"contact-form-agreement",children:[(0,t.jsx)("input",{type:"checkbox",id:"agreement",name:"agreement",checked:s.agreement,onChange:g,required:!0}),(0,t.jsx)("label",{htmlFor:"agreement",children:"By submitting this form, I consent to having LightningSEO.dev contact me regarding my inquiry."}),l.agreement&&(0,t.jsx)("span",{className:"error-message",children:l.agreement})]}),(0,t.jsx)("button",{type:"submit",className:"contact-submit-button",disabled:h,children:h?"Sending...":"Send Message"})]})]}),"/contact"===e.pathname&&(0,t.jsx)(i.default,{})]})}},726:(e,s,a)=>{a.r(s),a.d(s,{default:()=>n});a(483),a(162);var r=a(723);const n=function(){return(0,r.jsxs)("footer",{className:"footer-container",children:[(0,r.jsxs)("div",{className:"footer-top-grid",children:[(0,r.jsx)("div",{className:"footer-col brand-col",children:(0,r.jsxs)("div",{className:"fancy-brand-row",children:[(0,r.jsx)("img",{src:"https://i.postimg.cc/QtwR2GW9/i-Stock-1502494966-1.webp",alt:"LightningSEO.dev Logo",className:"fancy-brand-logo",height:"40",width:"40"}),(0,r.jsxs)("div",{className:"fancy-text-group",children:[(0,r.jsx)("h1",{className:"fancy-brand-title",children:"LightningSEO.dev"}),(0,r.jsx)("h2",{className:"fancy-brand-subtitle",children:"Affordable Digital Marketing & Web Solutions"})]})]})}),(0,r.jsxs)("div",{className:"footer-col footer-section nav-col",children:[(0,r.jsx)("h3",{children:"Navigation"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/about-us",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/services",children:"Services"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/projects",children:"Projects"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/pricing",children:"Pricing"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/reviews",children:"Reviews"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/contact",children:"Contact Us"})})]})]}),(0,r.jsxs)("div",{className:"footer-col footer-section services-col",children:[(0,r.jsx)("h3",{children:"Our Services"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/services/on-page-seo",children:"On-Page SEO"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/services/technical-seo",children:"Technical SEO"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/services/web-development",children:"Website Development"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/services/mobile-app",children:"Mobile App Development"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/services/watch-app",children:"Apple Watch App Development"})})]})]}),(0,r.jsxs)("div",{className:"footer-col footer-section contact-col",children:[(0,r.jsx)("h3",{children:"Get In Touch"}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Email: "}),(0,r.jsx)("a",{href:"mailto:jimmy.lagattuta@gmail.com",children:"\xa0jimmy.lagattuta@gmail.com"})]})}),(0,r.jsx)("p",{className:"book-appointment-p",children:(0,r.jsx)("a",{href:"/contact",className:"book-appointment-link",children:"Contact Us"})})]})]}),(0,r.jsxs)("div",{className:"footer-bottom",children:[(0,r.jsx)("p",{children:"\xa9 2025 LightningSEO.dev. All Rights Reserved."}),(0,r.jsxs)("ul",{className:"footer-bottom-links",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/terms-and-conditions",children:"Terms & Conditions"})})]}),(0,r.jsx)("p",{className:"footer-credit",children:"Website by James Lagattuta"})]})]})}}}]);
//# sourceMappingURL=465.3313112a.chunk.js.map