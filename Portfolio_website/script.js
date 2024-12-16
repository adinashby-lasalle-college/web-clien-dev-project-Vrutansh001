$(document).ready(function () {

    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        const name = $('#fname').val().trim();
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const message = $('#textarea-info').val().trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        $.ajax({
            url: '/send-message',
            method: 'POST',
            data: { name, email, subject, message },
            success: function (response) {
                alert('Message sent successfully!');
                $('#contact-form')[0].reset();
            },
            error: function () {
                alert('An error occurred. Please try again later.');
            }
        });
    });

    const projectImages = $('.project img');

    projectImages.each(function (index, img) {
        $(img).css({
            opacity: 0,
            transform: 'translateY(20px)',
            transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
        });

        setTimeout(() => {
            $(img).css({
                opacity: 1,
                transform: 'translateY(0)',
            });
        }, 100);
    });

    $('.project img').hover(
        function () {
          
            $(this).css({
                'transform': 'scale(1.1) translateY(-10px)', 
                'transition': 'transform 0.3s ease', 
            });
        },
        function () {

            $(this).css({
                'transform': 'scale(1) translateY(0)', 
                'transition': 'transform 0.3s ease', 
            });
        }
    );

    const skillImages = $('.skills img');

    skillImages.each(function (index, img) {
        $(img).css({
            opacity: 0,
            transform: 'scale(0.8)',
            transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
        });

        setTimeout(() => {
            $(img).css({
                opacity: 1,
                transform: 'scale(1)',
            });
        }, 100);
    });
});
