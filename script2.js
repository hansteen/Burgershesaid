// script.js

document.getElementById('chat-icon').addEventListener('click', function() {
  var chatWindow = document.getElementById('chat-window');
  if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
    chatWindow.style.display = 'block';
  } else {
    chatWindow.style.display = 'none';
  }
});
