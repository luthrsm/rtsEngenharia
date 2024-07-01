$(document).ready(function(){
    $(".on").click(function(){
        $('.open').css({
            'transform': 'translateX(0)',
            'display': 'block'
        })   
    });

    $(".close, .out").click(function(){
        $('.open').css({
            'transform': 'translateX(150%)',
            'display': 'none'
        });
    })
})

