/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./src/blocks/auth-modal/frontend.js ***!
  \*******************************************/
document.addEventListener('DOMContentLoaded', () => {
  const openMpdalBtn = document.querySelectorAll('.open-modal');
  const modalEl = document.querySelector('.wp-block-thunder-plus-auth-modal');
  const modalCloseEl = document.querySelectorAll('.modal-btn-close, .modal-overlay');

  //Opering the Modal on click
  openMpdalBtn.forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();
      modalEl.classList.add('modal-show');
    });
  });
  //Closing the Modal on click
  modalCloseEl.forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();
      modalEl.classList.remove('modal-show');
    });
  });
  //Chaging the Modal form on clicking Tabs
  const tabs = document.querySelectorAll('.tabs a');
  const signinForm = document.querySelector('#signin-tab');
  const signupFrom = document.querySelector('#signup-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', event => {
      event.preventDefault();
      tabs.forEach(currentTab => {
        currentTab.classList.remove('active-tab');
      });
      event.currentTarget.classList.add('active-tab');
      const activeTab = event.currentTarget.getAttribute('href');
      if (activeTab === signinForm) {
        signinForm.style.display = "block";
        signupFrom.style.display = "none";
      } else {
        signinForm.style.display = "none";
        signupFrom.style.display = "block";
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map