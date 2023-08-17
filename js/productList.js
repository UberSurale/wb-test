const deleteButton = document.querySelectorAll('.change-product__delete-button');

deleteButton.forEach((button) => {
    button.addEventListener('click', () => {
        const listItem = button.closest('li');
        listItem.remove();
    })
})