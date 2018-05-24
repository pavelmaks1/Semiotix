const answer = Array.prototype.slice.call(document.getElementsByClassName('question-item'), 0);
answer.map(element => 
    element.addEventListener('click', 
    (event) => {
        event.preventDefault();
        element.childNodes[1].classList.toggle('active');
        element.childNodes[3].classList.toggle('display');
        console.log(element.childNodes[1].childNodes[3].classList.toggle('fa-angle-down'))
        console.log(element.childNodes[1].childNodes[3].classList.toggle('fa-angle-up'))
    }))