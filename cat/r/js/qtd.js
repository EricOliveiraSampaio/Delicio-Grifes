
    document.addEventListener('DOMContentLoaded', function () {
        const quantityInput = document.getElementById('qtd');
        const incrementButton = document.querySelector('.btn-mais');
        const decrementButton = document.querySelector('.btn-menos');

        incrementButton.addEventListener('click', function () {
            increaseQuantity();
        });

        decrementButton.addEventListener('click', function () {
            decreaseQuantity();
        });

        function increaseQuantity() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }

        function decreaseQuantity() {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        }
    });



    function toggleHeart() {
        var heart = document.querySelector('.cor');
        heart.classList.toggle('pre'); // Adiciona ou remove a classe 'filled'
    }



