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

// (function() {
//     emailjs.init("cioyVNsvzJVFTwCnyqnnL");
// })();

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     emailjs.sendForm('service_gswn9qt', 'template_42k874f', this)
//         .then(function() {
//             alert('Your message has been sent!');
//         }, function(error) {
//             alert('Failed to send the message, please try again later.');
//         });
// });

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');  
    menuIcon.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  