function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const businessType = document.getElementById('businessType').value;

  if (!name || !email || !message || !businessType) {
      alert('Please fill in all fields.');
      return false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }
  return true;
}


