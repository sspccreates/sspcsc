function checkPassword() {
  const password = document.getElementById('passwordInput').value;

  if (password === '20091009') {
    document.getElementById('message').textContent = 'Password correct. Redirecting...';
    // Redirect to the actual content page after a short delay
    setTimeout(() => {
      window.location.href = 'content.html';
    }, 2000);
  } else {
    document.getElementById('message').textContent = 'Incorrect password. Please try again.';
  }
}
