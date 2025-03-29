document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      user: document.getElementById('user').value,
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      date: document.getElementById('date').value,
      inPass: document.getElementById('inPass').value,
      confInPass: document.getElementById('confInPass').value
    };

    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
        
        localStorage.setItem('userId', data.user.id);
      })
      .catch(error => console.error('Error:', error));
  });

  document.getElementById('getUserDataButton').addEventListener('click', () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      fetch(`/user/${userId}`)
        .then(response => response.json())
        .then(data => {
          console.log('User data:', data);
        })
        .catch(error => console.error('Error:', error));
    } else {
      console.error('User ID not found in local storage.');
    }
  });
});
