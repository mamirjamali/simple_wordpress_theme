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
  const signupForm = document.querySelector('#signup-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', event => {
      event.preventDefault();
      tabs.forEach(currentTab => {
        currentTab.classList.remove('active-tab');
      });
      event.currentTarget.classList.add('active-tab');
      const activeTab = event.currentTarget.getAttribute('href');
      if (activeTab === '#signin-tab') {
        signinForm.style.display = "block";
        signupForm.style.display = "none";
      } else {
        signinForm.style.display = "none";
        signupForm.style.display = "block";
      }
    });
  });
  //Disabling fieldset after submition and sending the data
  signupForm.addEventListener('submit', async event => {
    event.preventDefault();
    const signupFieldSet = signupForm.querySelector('fieldset');
    signupFieldSet.setAttribute('disabled', true);
    const signupStatus = signupForm.querySelector('#signup-status');
    signupStatus.innerHTML = `
        <div class="modal-status modal-status-info">
         Please Wait! We are creating your account
        </div>
        `;
    const formData = {
      username: signupForm.querySelector('#su-name').value,
      email: signupForm.querySelector('#su-email').value,
      password: signupForm.querySelector('#su-password').value
    };
    const response = await fetch(thp_auth_rest.signup, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const responseJSON = await response.json();
    if (responseJSON.status === 2) {
      signupStatus.innerHTML = `
            <div class="modal-status modal-status-success">
               Success! Your account has been created.
            </div>
            `;
      location.reload();
    } else {
      signupFieldSet.removeAttribute('disabled');
      signupStatus.innerHTML = `
            <div class="modal-status modal-status-danger">
               Unable to create account! Please try again later.
            </div>
            `;
    }
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map