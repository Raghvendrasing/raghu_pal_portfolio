document.addEventListener("DOMContentLoaded", function() {
    const roles = ["a Front-End Specialist. ", "Proficient in Angular. ", "Experienced in API integration. "];
    let roleIndex = 0;
    let charIndex = 0;
    const roleElement = document.getElementById("role");
    const typingSpeed = 100;
    const pauseBetweenRoles = 2000;

    function typeRole() {
        if (charIndex < roles[roleIndex].length) {
            roleElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(() => {
                roleElement.textContent = '';
                charIndex = 0;
                roleIndex = (roleIndex + 1) % roles.length;
                typeRole();
            }, pauseBetweenRoles);
        }
    }

    typeRole();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const form = event.target;
    const formData = new FormData(form);
  
    fetch('https://formspree.io/f/mpwaznvo', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        Toastify({
          text: "Thank you for your message!",
          duration: 3000,
          close: true,
          gravity: "top", 
          position: "right",
          backgroundColor: "#4CAF50",
        }).showToast();
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            Toastify({
              text: data['errors'].map(error => error['message']).join(", "),
              duration: 3000,
              close: true,
              gravity: "top",
              position: "right",
              backgroundColor: "#FF0000",
            }).showToast();
          } else {
            Toastify({
              text: "Oops! There was a problem submitting your form",
              duration: 3000,
              close: true,
              gravity: "top",
              position: "right",
              backgroundColor: "#FF0000",
            }).showToast();
          }
        })
      }
    }).catch(error => {
      Toastify({
        text: "Oops! There was a problem submitting your form",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "#FF0000",
      }).showToast();
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');  
    menuIcon.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  