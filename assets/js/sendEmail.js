const btn = document.getElementById('submit-button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_aza1rx3';
   const templateID = 'template_3f2nj9o';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
     btn.value = 'from_name',
     btn.value = 'from_email'
      btn.value = 'project_request';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
