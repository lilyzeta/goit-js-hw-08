const input = document.getElementsByTagName('input');
const ki = 'feedback-form-state';
const getting = localStorage.getItem('ki');
const submitt = document.getElementsByTagName('button');

console.log(getting);

if (getting != null) {
  let input = getting;
} else {
  input = null;
}

function submission() {
  localStorage.setItem(ki, input);
  input.reset();
}

submitt.addEventListener('click', submission);

console.log(input);
