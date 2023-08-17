let form = document.querySelector('.main__form');
let inputs = document.querySelectorAll('.client-info__input');

function validateField(field) {
if (field.value.trim() === '') {
    field.classList.remove('valid');
    field.classList.add('error');
    field.nextElementSibling.classList.remove('visually-hidden');
    return false;
} else {
    field.classList.remove('error');
    field.classList.add('valid');
    field.nextElementSibling.classList.add('visually-hidden');
    return true;
}
}

form.addEventListener('submit', function(event) {
event.preventDefault();

let isValid = true;

inputs.forEach(function(input) {
    if (!validateField(input)) {
        isValid = false;
    }
});

if (isValid) {
    form.submit();
} else {
    inputs[0].scrollIntoView({ behavior: 'smooth' });
}
});

inputs.forEach(function(input) {
input.addEventListener('blur', function() {
    validateField(input);
});

input.addEventListener('input', function() {
    if (input.classList.contains('valid')) {
        input.classList.remove('valid');
    }
});
});
