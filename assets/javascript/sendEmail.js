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
            'Good job!',
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
        })      
                
    document.getElementById("contactForm").reset();
    return false;    
}                 


