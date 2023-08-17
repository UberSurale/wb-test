const payNowInput = document.querySelector('.pay-now__input');
const totalPrice = document.querySelector('.table__item--price');
const orderButton = document.querySelector('.submit__button');

const changeText = () => {
    if (payNowInput.checked) {
        orderButton.textContent = `Оплатить ${totalPrice.textContent}`;
    } else {
        orderButton.textContent = 'Заказать';
    }
}

payNowInput.addEventListener('input', changeText);

export { payNowInput };