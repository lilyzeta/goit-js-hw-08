import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

initForm();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', throttle(onFormSubmit, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
}

const {
  elements: { email, message },
} = evt.target;

if (email.value === '' || message.value === '') {
  return alert('All fields must be filled in');
} else {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  console.log('Form submitted');
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
  let persistedData = localStorage.getItem(STORAGE_KEY);
  persistedData = persistedData ? JSON.parse(persistedData) : {};
  persistedData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedData));
}

function initForm() {
  let savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    savedData = JSON.parse(savedData);
    console.log(savedData);

    Object.entries(savedData).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
