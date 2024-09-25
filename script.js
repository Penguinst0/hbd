document.getElementById('show-message').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
    if (message.classList.contains('hidden')) {
        message.style.opacity = 0;
    } else {
        message.style.opacity = 1;
        message.style.transform = 'scale(1)';
    }
  });