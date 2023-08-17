const changeProductContainer = document.querySelectorAll('.change-product__add-button-wrapper');
const navigaitonCount = document.querySelector('.navigation__count');
const tableCount = document.querySelector('.table__item--count');

let totalSum = 0;
let inputTotal = 0;

changeProductContainer.forEach((item) => {
    const incrButton = item.querySelector('.change-product__button--increment');
    const decrButton = item.querySelector('.change-product__button--decrement');
    const countTotal = item.querySelector('.change-product__count');
    const inputField = item.querySelector('.change-product__input');
    let count = parseInt(countTotal.textContent);
    totalSum += count;
    inputTotal = inputField.value;

    decrButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            countTotal.textContent = count;
        }

        if (count <= 0) {
            decrButton.disabled = true;
        } else {
            decrButton.disabled = false;
        }

        inputTotal = count;
    })

    incrButton.addEventListener('click', () => {
        count++;
        countTotal.textContent = count;
        decrButton.disabled = false;

        inputTotal = count;
    })

    navigaitonCount.textContent = totalSum;
    tableCount.textContent = `${totalSum} товара`;
})

console.log(totalSum);


