"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[447,465,726],{447:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});a(483);var i=a(807),t=a(626),n=a(465),r=a(726),l=a(723);const c=()=>{const e=Object.entries(t.XL).map((e=>{let[s,a]=e;return{...a,id:s}})),s={"@context":"https://schema.org","@type":"Organization",name:"Lightning SEO",url:"https://lightningseo.dev/about-us",logo:"https://i.postimg.cc/QtwR2GW9/i-Stock-1502494966-1.webp",description:"Lightning SEO is a full-service digital marketing agency specializing in affordable, high-performance SEO solutions, custom website development, mobile app development, and Apple Watch app development. We deliver measurable growth and a robust online presence for businesses of all sizes.",contactPoint:{"@type":"ContactPoint",telephone:"+1-000-000-0000",contactType:"Customer Service",availableLanguage:["English"],email:"jimmy.lagattuta@gmail.com"},hasOfferCatalog:{"@type":"OfferCatalog",name:"Digital Services",itemListElement:e.map(((e,s)=>({"@type":"Offer",position:s+1,itemOffered:{"@type":"Service",name:e.title,description:e.shortDescription,url:`https://lightningseo.dev/services/${e.id}`}})))}};return(0,l.jsxs)("div",{className:"aboutus-container",children:[(0,l.jsx)(i.m,{children:(0,l.jsx)("script",{type:"application/ld+json",children:JSON.stringify(s)})}),(0,l.jsx)("section",{className:"aboutus-hero",children:(0,l.jsxs)("div",{className:"aboutus-hero-overlay",children:[(0,l.jsx)("h1",{className:"aboutus-hero-title",children:"Welcome to Lightning SEO!"}),(0,l.jsx)("p",{className:"aboutus-hero-subtitle",children:"Affordable, High-Performance Digital Solutions for Your Business"})]})}),(0,l.jsxs)("section",{className:"aboutus-section",children:[(0,l.jsx)("h2",{className:"aboutus-heading",children:"About Us"}),(0,l.jsxs)("div",{className:"aboutus-content",children:[(0,l.jsxs)("div",{className:"aboutus-card",children:[(0,l.jsx)("h3",{children:"Why Choose Lightning SEO"}),(0,l.jsx)("p",{children:"At Lightning SEO, we blend innovative SEO strategies with advanced digital development to help your business thrive online. Our mission is to deliver measurable results through data-driven insights and tailored solutions that drive traffic and conversions."})]}),(0,l.jsxs)("div",{className:"aboutus-card",children:[(0,l.jsx)("h3",{children:"Our Approach"}),(0,l.jsx)("p",{children:"We begin with a comprehensive analysis of your current digital presence, followed by a custom strategy that combines on-page, technical, and local SEO with modern website and app development. Every solution is designed to maximize performance, boost search rankings, and engage your target audience."})]}),(0,l.jsxs)("div",{className:"aboutus-card",children:[(0,l.jsx)("h3",{children:"The Difference We Make"}),(0,l.jsx)("p",{children:"Our commitment to quality, transparency, and continuous improvement sets us apart. We work closely with you to ensure that every project not only meets but exceeds your expectations\u2014helping you achieve a strong online presence and sustainable growth."})]})]})]}),(0,l.jsxs)("section",{className:"aboutus-services",children:[(0,l.jsx)("h2",{className:"aboutus-services-title",children:"Our Services"}),(0,l.jsx)("div",{className:"aboutus-services-grid",children:e.map((e=>(0,l.jsxs)("a",{href:`/services/${e.id}`,className:"aboutus-service-card",children:[(0,l.jsx)("div",{className:"aboutus-service-image",style:{backgroundImage:`url(${e.images.hero})`}}),(0,l.jsx)("h3",{className:"aboutus-service-title",children:e.title}),(0,l.jsx)("p",{className:"aboutus-service-desc",children:e.shortDescription})]},e.id)))})]}),(0,l.jsx)(n.default,{}),(0,l.jsx)(r.default,{})]})}},465:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});var i=a(483),t=a(149),n=a(726),r=a(723);const l=function(){const e=(0,t.zy)(),[s,a]=(0,i.useState)({firstName:"",lastName:"",email:"",phone:"",message:"",agreement:!1}),[l,c]=(0,i.useState)({}),[o,d]=(0,i.useState)(!1),[h,m]=(0,i.useState)(!1),u=e=>{const{name:s,value:i,type:t,checked:n}=e.target;a((e=>({...e,[s]:"checkbox"===t?n:i})))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"contact-section",children:[(0,r.jsxs)("div",{className:"contact-section-header",children:[(0,r.jsx)("h2",{children:"Contact Lightning SEO"}),(0,r.jsx)("p",{children:"If you have any inquiries about our SEO, web development, mobile app, or Apple Watch app services, please fill out the short contact form below."})]}),o?(0,r.jsxs)("div",{className:"contact-submitted-message",children:[(0,r.jsx)("h3",{children:"Thank You!"}),(0,r.jsx)("p",{children:"Your message has been sent successfully. We will get back to you shortly."})]}):(0,r.jsxs)("form",{className:"contact-form",onSubmit:async e=>{e.preventDefault();const a=(()=>{const e={};return s.firstName||(e.firstName="First Name is required."),s.lastName||(e.lastName="Last Name is required."),s.email?/\S+@\S+\.\S+/.test(s.email)||(e.email="Email address is not valid."):e.email="Email address is required.",s.phone?/^\+?[1-9]\d{1,14}$/.test(s.phone)||(e.phone="Phone number is not valid. Please include country code."):e.phone="Phone number is required.",s.message||(e.message="Message is required."),s.agreement||(e.agreement="You must agree to the terms."),e})();if(0===Object.keys(a).length){var i;m(!0);const e=null===(i=document.querySelector('meta[name="csrf-token"]'))||void 0===i?void 0:i.getAttribute("content");try{const a=await fetch("https://www.lightningseo.dev/contact",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":e},body:JSON.stringify({contact:s})});a.ok?(d(!0),console.log("Message sent successfully:",s)):(console.error("Message sending failed",a),alert("There was an error sending your message. Please try again later."))}catch(t){console.error("Error sending message:",t),alert("There was an error sending your message. Please try again later.")}finally{m(!1)}}else c(a)},children:[(0,r.jsxs)("div",{className:"contact-form-row",children:[(0,r.jsxs)("div",{className:"contact-form-group",children:[(0,r.jsx)("label",{htmlFor:"firstName",children:"First Name"}),(0,r.jsx)("input",{type:"text",id:"firstName",name:"firstName",value:s.firstName,onChange:u,placeholder:"First Name",required:!0}),l.firstName&&(0,r.jsx)("span",{className:"error-message",children:l.firstName})]}),(0,r.jsxs)("div",{className:"contact-form-group",children:[(0,r.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),(0,r.jsx)("input",{type:"text",id:"lastName",name:"lastName",value:s.lastName,onChange:u,placeholder:"Last Name",required:!0}),l.lastName&&(0,r.jsx)("span",{className:"error-message",children:l.lastName})]})]}),(0,r.jsxs)("div",{className:"contact-form-group",children:[(0,r.jsx)("label",{htmlFor:"email",children:"Email Address"}),(0,r.jsx)("input",{type:"email",id:"email",name:"email",value:s.email,onChange:u,placeholder:"Email Address",required:!0}),l.email&&(0,r.jsx)("span",{className:"error-message",children:l.email})]}),(0,r.jsxs)("div",{className:"contact-form-group",children:[(0,r.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,r.jsx)("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:u,placeholder:"Phone Number (e.g. +123456789)",required:!0}),l.phone&&(0,r.jsx)("span",{className:"error-message",children:l.phone})]}),(0,r.jsxs)("div",{className:"contact-form-group",children:[(0,r.jsx)("label",{htmlFor:"message",children:"Your Message"}),(0,r.jsx)("textarea",{id:"message",name:"message",value:s.message,onChange:u,placeholder:"Type your message here...",required:!0}),l.message&&(0,r.jsx)("span",{className:"error-message",children:l.message})]}),(0,r.jsxs)("div",{className:"contact-form-agreement",children:[(0,r.jsx)("input",{type:"checkbox",id:"agreement",name:"agreement",checked:s.agreement,onChange:u,required:!0}),(0,r.jsx)("label",{htmlFor:"agreement",children:"By submitting this form, I consent to having LightningSEO.dev contact me regarding my inquiry."}),l.agreement&&(0,r.jsx)("span",{className:"error-message",children:l.agreement})]}),(0,r.jsx)("button",{type:"submit",className:"contact-submit-button",disabled:h,children:h?"Sending...":"Send Message"})]})]}),"/contact"===e.pathname&&(0,r.jsx)(n.default,{})]})}},726:(e,s,a)=>{a.r(s),a.d(s,{default:()=>t});a(483),a(162);var i=a(723);const t=function(){return(0,i.jsxs)("footer",{className:"footer-container",children:[(0,i.jsxs)("div",{className:"footer-top-grid",children:[(0,i.jsx)("div",{className:"footer-col brand-col",children:(0,i.jsxs)("div",{className:"fancy-brand-row",children:[(0,i.jsx)("img",{src:"https://i.postimg.cc/QtwR2GW9/i-Stock-1502494966-1.webp",alt:"Lightning SEO Logo",className:"fancy-brand-logo",height:"40",width:"40"}),(0,i.jsxs)("div",{className:"fancy-text-group",children:[(0,i.jsx)("h1",{className:"fancy-brand-title",children:"Lightning SEO"}),(0,i.jsx)("h2",{className:"fancy-brand-subtitle",children:"Affordable Digital Marketing & Web Solutions"})]})]})}),(0,i.jsxs)("div",{className:"footer-col footer-section nav-col",children:[(0,i.jsx)("h3",{children:"Navigation"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/",children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/about-us",children:"About Us"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/services",children:"Services"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/pricing",children:"Pricing"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/reviews",children:"Reviews"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/contact",children:"Contact Us"})})]})]}),(0,i.jsxs)("div",{className:"footer-col footer-section services-col",children:[(0,i.jsx)("h3",{children:"Our Services"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/services/on-page-seo",children:"On-Page SEO"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/services/technical-seo",children:"Technical SEO"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/services/web-development",children:"Website Development"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/services/mobile-app",children:"Mobile App Development"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/services/watch-app",children:"Apple Watch App Development"})})]})]}),(0,i.jsxs)("div",{className:"footer-col footer-section contact-col",children:[(0,i.jsx)("h3",{children:"Get In Touch"}),(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Email: "}),(0,i.jsx)("a",{href:"mailto:jimmy.lagattuta@gmail.com",children:"\xa0jimmy.lagattuta@gmail.com"})]})}),(0,i.jsx)("p",{className:"book-appointment-p",children:(0,i.jsx)("a",{href:"/contact",className:"book-appointment-link",children:"Contact Us"})})]})]}),(0,i.jsxs)("div",{className:"footer-bottom",children:[(0,i.jsx)("p",{children:"\xa9 2025 Lightning SEO. All Rights Reserved."}),(0,i.jsxs)("ul",{className:"footer-bottom-links",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/terms-and-conditions",children:"Terms & Conditions"})})]}),(0,i.jsx)("p",{className:"footer-credit",children:"Website by James Lagattuta"})]})]})}}}]);
//# sourceMappingURL=447.85efddba.chunk.js.map