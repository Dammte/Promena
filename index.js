/**
 * @description Scroll fast when the view is on an specific part of the page.
 */
// document.addEventListener("scroll", function () {
//   const backToTopButton = document.querySelector(".back-to-top");
//   if (window.scrollY > 2000) {
//     backToTopButton.style.display = "block";
//   } else {
//     backToTopButton.style.display = "none";
//   }
// });
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000){
    backToTopButton.classList.add("active");
  }else {
    backToTopButton.classList.remove("active");
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
  emailjs.send("service_elud2d20", "template_0y2xruk", params).then(
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



const observerSectionWhy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('up');
    } else {
      entry.target.classList.remove('up');
    }
  });
});

const goSectionWhy = document.querySelectorAll('.down');
goSectionWhy.forEach((element) => observerSectionWhy.observe(element));


function rotateCard(id) {
  const card = document.getElementById(id);
  card.classList.toggle('is-flipped');
  card.classList.toggle('fitContent');
}



