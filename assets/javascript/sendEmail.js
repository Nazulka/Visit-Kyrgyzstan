// 

function sendMail(contactForm) {
    emailjs.send("gmail", "MS2", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "info_request": contactForm.message.value,
        "newsletter_request": contactForm.newsletter.value
    })
    .then(
        function () {
            Swal.fire(
            'Thank you for contacting us!',
            'Message sent!',
            'success'
            );
        },        
                    
        function () {
            Swal.fire(
            'Oops...',
            'Something went wrong!',
            'error'
            );
        });      
         
    // Reset the form to clear the input areas    
    document.getElementById("contactForm").reset();
    return false;    
}                 


