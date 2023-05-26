
function mvFunction(div_id) {
    let divs = [...document.querySelectorAll('.mv')]
    divs.map(section => section.classList.add('d-none'))
    let current_div = document.getElementById(div_id)
    current_div.classList.remove('d-none');
    current_div.classList.add('d-block');
}
