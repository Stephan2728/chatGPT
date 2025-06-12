document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('showButton');
  const message = document.getElementById('message');

  button.addEventListener('click', function () {
    message.classList.remove('hidden');
  });
});
