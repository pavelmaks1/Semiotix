const answer = Array.prototype.slice.call(document.getElementsByClassName('question-item'), 0);
answer.map(element => 
    element.addEventListener('click', 
    (event) => {

        event.preventDefault();
        element.childNodes[1].classList.toggle('active');
        element.childNodes[3].classList.toggle('display');
        console.log(element.childNodes[1].childNodes[3].classList.toggle('fa-angle-down'))
        console.log(element.childNodes[1].childNodes[3].classList.toggle('fa-angle-up'))
        if (element.childNodes[1].childNodes[3].attributes.src.value === "images/icon-arrow.svg") {
            element.childNodes[1].childNodes[3].attributes.src.value = "images/icon-arrow-up.svg";
        } else if (element.childNodes[1].childNodes[3].attributes.src.value === "images/icon-arrow-up.svg") {
            element.childNodes[1].childNodes[3].attributes.src.value = "images/icon-arrow.svg"
        }
        console.log(element.childNodes[1].childNodes[3].attributes.src)

    }))


$('.button-table').click(function () {
    const className = $(this).attr('class').split(' ').pop();
    const s = $(this).text();
    const tariff = $('.upper-cell').filter(function() {
        return $(this).hasClass(className)
    }).text();
    var a = $('.fixed_line').offset();

    $('.content_form').css('top', a.top + 'px');
    $('.shadow_form').fadeIn(500);
    $('.content_form').fadeIn(500);
    // $('form.fon_form .inp.name_service input').val(s);
    $('.title span').text(tariff);
});


$('.content_form .form_vn .close, .shadow_form').click(function () {
    $('.shadow_form').fadeOut(500);
    $('.content_form').fadeOut(500);
});
$('.content_form .form_vn').click(function (e) {
    e.stopImmediatePropagation();
});
