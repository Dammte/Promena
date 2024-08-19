/**
 * @description Scroll fast when the view is on an specific part of the page.
 */
document.addEventListener("scroll", function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});


/**
 * @description This allows us to send a message from html to an email.
 */
function sendEmail() {
  let params = {
    name: document.getElementById("Name").value,
    email: document.getElementById("Email").value,
    message: document.getElementById("Message").value,
  };
  emailjs.send("service_elud2d5", "template_0y1xruk", params).then(
    (response) => {
      alert("¡Mensaje enviado! " + response.status);
      console.log("success!", response.status, response.text);
    },
    (error) => {
        alert("¡Hubo un Error! " + error);
        console.log("error!", error);
    }
  );
}


/**
 * @description Creation of animations with CSS
 */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

