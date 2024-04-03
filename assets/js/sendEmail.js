function sendMail(contactForm) {
  emailjs.send("service_aza1rx3", "template_3f2nj9o", {
          "from_name": contactForm.name.value,
          "from_email": contactForm.emailaddress.value,
          "project_request": contactForm.projectsummary.value
  })
    .then(
      function(response) {
        console.log("SUCCESS", response);
      },
      function(error) {
        console.log("FAILED", error);
      }
    );
    return false;
}