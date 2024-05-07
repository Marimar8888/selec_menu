document.addEventListener("DOMContentLoaded", function() {
    var radioInputs = document.querySelectorAll('input[type="radio"]');
    var checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    var total = 0;
    var maxCheckboxSelections = 2;
    var selectedValor = "";
    var selectedPrecio = 0;

    radioInputs.forEach(function(radioInput) {
        radioInput.addEventListener('change', function() {
            if (this.checked) {
                var valor = this.value;
                var precio = parseFloat(this.dataset.price);
                total += precio;
                var mensaje = "Entonces desea " + valor + ". ¡Es una estupenda elección!. Su precio es " + precio.toFixed(2) + "€.";
                alert(mensaje);
            }
        });
    });

    checkboxInputs.forEach(function(checkboxInput) {
        checkboxInput.addEventListener('change', function() {
            var precio = parseFloat(this.dataset.price);
            if (this.checked) {
                var selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
                if (selectedCheckboxes.length > maxCheckboxSelections) {
                    this.checked = false;
                    alert("Lo siento sólo puede elegir dos acompañamientos");
                    return;
                }
                total += precio;
                selectedValor = this.value;
                selectedPrecio = precio;
                if (selectedCheckboxes.length === 1) {
                    var mensaje = selectedValor + " es una muy buena elección. " + " Su precio es " + selectedPrecio.toFixed(2) + "€." + "Tiene que elegir otro acompañamiento.";
                    alert(mensaje);
                }
                if(selectedCheckboxes.length ===2 ) {
                    var mensaje = selectedValor + " excelente elección!. " + " Su precio es " + selectedPrecio.toFixed(2) + "€." + "Tiene que elegir otro acompañamiento.";
                    alert(mensaje);
                    var mensaje = "El total de su pedido es de: " + total.toFixed(2) + "€.";
                    alert(mensaje);
                }
            } else {
                total -= precio;
            }
        });
    });
});

