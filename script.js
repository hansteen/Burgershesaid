document.addEventListener('DOMContentLoaded', function () {
  var chatIcon = document.getElementById('chat-icon');
  var chatWindow = document.getElementById('chat-window');

  // Ensure chat window is always displayed
  chatWindow.style.display = 'block';

  // Optional: Toggle chat window visibility on chat icon click
  chatIcon.addEventListener('click', function () {
    if (chatWindow.style.display === 'block') {
      chatWindow.style.display = 'none';
    } else {
      chatWindow.style.display = 'block';
    }
  });
});
