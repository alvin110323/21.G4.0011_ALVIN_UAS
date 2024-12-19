function submitForm() {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
      
          if (name && email && message) {
              alert(`Thank you, ${name}! Your message has been received:\n\n"${message}"`);
              document.getElementById('contact-form').reset();
          } else {
              alert('Please fill out all fields before submitting.');
          }
      }
      
