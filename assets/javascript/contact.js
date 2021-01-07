function sendMail (params) {
    var tempParams = {
        from_name: document.gtElementById("fromName").value,
        to_name: document.gtElementById("toName").value,
        message: document.gtElementById("msg").value,
    };

    emailjs.send('gmail','template_jvyd3tf', tempParams )
    .then(function(res){
        alert('Message recieved! We\'ll be in touch shortly');
        window.location.replace('/');
    }, function(error) {
        alert('Whoops! Something went wrong!');
    })
}
