const e={preloaderEl:document.querySelector("#preloader"),imgElArr:document.getElementsByClassName("film-item__img"),bodyEl:document.querySelector("body"),btnAnchorEl:document.getElementsByClassName("btn_anchor")[0],darkBtn:document.querySelector('button[data-theme="onDark"]'),lightBtn:document.querySelector('button[data-theme="onLight"]'),cardListEl:document.querySelector("ul.card__list"),headerFormEl:document.querySelector(".header__form"),headerErrorEl:document.querySelector(".header__error")};document.querySelector("body").onscroll=function(t){t.target.scrollingElement.scrollTop>0?e.btnAnchorEl.classList.remove("btn_anchor-hidden"):e.btnAnchorEl.classList.add("btn_anchor-hidden")},document.querySelector(".btn_anchor").addEventListener("click",(()=>{document.querySelector("body").scrollIntoView({top:0,behavior:"smooth"})})),e.darkBtn.addEventListener("click",(function(){e.bodyEl.classList.toggle("dark__theme"),localStorage.setItem("theme","dark")})),e.lightBtn.addEventListener("click",(function(){localStorage.setItem("theme",""),e.bodyEl.classList.remove("dark__theme")}));"dark"===localStorage.getItem("theme")&&e.bodyEl.classList.toggle("dark__theme");const t={openModal:document.querySelector(".footer__link"),ModalTeamBackdrop:document.querySelector(".team__backdrop"),ModalTeamBody:document.querySelector("body"),ModalTeamBtn:document.querySelector(".modal__close-button")};function o(){window.removeEventListener("keydown",a),t.ModalTeamBody.classList.remove("no-scroll"),t.ModalTeamBackdrop.classList.add("visually-hidden")}function a(e){"Escape"===e.code&&o()}t.openModal.addEventListener("click",(function(e){window.addEventListener("keydown",a),e.preventDefault(),t.ModalTeamBody.classList.add("no-scroll"),t.ModalTeamBackdrop.classList.remove("visually-hidden")})),t.ModalTeamBtn.addEventListener("click",o),t.ModalTeamBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&o()}));const n={authorizationBtn:document.querySelector("#headerAuthorization"),modalAuthorizationBackdrop:document.querySelector(".backdrop-modalAuthorization"),modalCloseAuthorozation:document.querySelector(".authorization__close"),modalAuthorizationLink:document.querySelector(".authorization__link"),modalRegistrationBackdrop:document.querySelector(".backdrop-modalRegistration"),modalCloseRegistration:document.querySelector(".registration__close")};n.authorizationBtn.addEventListener("click",(function(e){e.preventDefault(),n.modalAuthorizationBackdrop.classList.remove("visually-hidden")})),n.modalCloseAuthorozation.addEventListener("click",(function(e){e.preventDefault(),n.modalAuthorizationBackdrop.classList.add("visually-hidden")})),n.modalAuthorizationLink.addEventListener("click",(function(e){e.preventDefault(),n.modalAuthorizationBackdrop.classList.add("visually-hidden"),n.modalRegistrationBackdrop.classList.remove("visually-hidden")})),n.modalCloseRegistration.addEventListener("click",(function(e){e.preventDefault(),n.modalRegistrationBackdrop.classList.add("visually-hidden")}));
//# sourceMappingURL=my-library.388e836a.js.map
