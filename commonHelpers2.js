import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),m=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e.email.value=m.email||"";e.message.value=m.message||"";e.addEventListener("input",function(t){if(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"){const a={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(a))}});e.addEventListener("submit",function(t){t.preventDefault();const a={email:e.email.value.trim(),message:e.message.value.trim()};a.email&&a.message&&(console.log(a),localStorage.removeItem("feedback-form-state"),e.email.value="",e.message.value="")});
//# sourceMappingURL=commonHelpers2.js.map
