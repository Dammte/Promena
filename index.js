document.addEventListener("scroll", function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

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
