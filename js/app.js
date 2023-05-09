let counter = 0;

$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

    $('.nextBtn').click(function () {
        counter++;
        $('#counter').text(counter);
        colors();

    });
    $('.prevBtn').click(function () {
        counter--;
        $('#counter').text(counter);
        colors();
    });

    function colors() {
        if (counter > 0) {
            $('#counter').addClass('positivo');
        } else if (counter < 0) {
            $('#counter').addClass('negativo');
        } else if (counter === 0) {
            $('#counter').removeClass('positivo');
            $('#counter').removeClass('negativo');
        };
    };
    

    

});
