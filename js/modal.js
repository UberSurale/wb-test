const deliveryPointButton = document.querySelector('.goods-point__button');
const deliveryPointButtonFull = document.querySelector('.delivery__change')
const paymentButton = document.querySelector('.card-payment__button');
const paymentButtonFull = document.querySelector('.payment__change');

const modalDelivery = document.querySelector('.modal-container--delivery');
const deliveryCloseButton = modalDelivery.querySelector('.modal__close--delivery');
const modalPayment = document.querySelector('.modal-container--payment');
const paymentCloseButton = modalPayment.querySelector('.modal__close--payment');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        modalDelivery.classList.add('visually-hidden');
        modalPayment.classList.add('visually-hidden');
    }
};

function openDelivery () {
    modalDelivery.classList.remove('visually-hidden');
    document.addEventListener('keydown', onDocumentKeyDown);
}

function openPayment () {
    modalPayment.classList.remove('visually-hidden');
    document.addEventListener('keydown', onDocumentKeyDown);
}

function closeDelivery () {
    modalDelivery.classList.add('visually-hidden');
    document.removeEventListener('keydown', onDocumentKeyDown);
}

function closePayment () {
    modalPayment.classList.add('visually-hidden');
    document.removeEventListener('keydown', onDocumentKeyDown);
}

deliveryPointButton.addEventListener('click', () => {
    openDelivery();
})

deliveryPointButtonFull.addEventListener('click', () => {
    openDelivery();
})

deliveryCloseButton.addEventListener('click', () => {
    closeDelivery();
})

paymentButton.addEventListener('click', () => {
    openPayment();
})

paymentButtonFull.addEventListener('click', () => {
    openPayment();
})

paymentCloseButton.addEventListener('click', () => {
    closePayment();
})