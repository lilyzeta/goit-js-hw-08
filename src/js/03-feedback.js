const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let what = localStorage.getItem(STORAGE_KEY);

form.addEventListener('submit', submitAct);

const users = {
  email: '',
  password: '',
};

form.addEventListener('submit', submitAct);

function submitAct(event) {
  event.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value.length === 0 || password.value.trim() === '') {
    alert('All Fields must be filled in');
  } else {
    users.email = email.value;
    users.password = password.value;

    console.log(what);
    console.log('Form Submitted');
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

form.addEventListener('input', submitAct2 => {
  maxInterval = setInterval(submitAct2, 1000);
});

function submitAct2(event) {
  let parsley = JSON.parse(what);

  if (parsley == null) {
    let obj = {};
  }
  let input = event.target.value;
  obj = { input };
}
