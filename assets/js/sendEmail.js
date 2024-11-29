function sendMail(contactForm) {
    emailjs.send("service_5eqpv7l", "template_p3xux2k", {
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
    
    // To block from loading a new page
    return false; 
}