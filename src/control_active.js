/*
let menusActivos = {
    desayuno: false,
    comida: false,
    cena: false
};

function toggleMenus(menuId) {
    // Verificar si el menú ya está activo
    if (menusActivos[menuId]) {
        // Si ya está activo, no hacer nada
        return;
    }
    
    // Desactivar todos los menús activos
    for (const key in menusActivos) {
        if (menusActivos.hasOwnProperty(key) && menusActivos[key]) {
            const menuActivo = document.getElementById(key);
            const inputsMenuActivo = menuActivo.querySelectorAll('input[type="radio"], input[type="checkbox"]');
            inputsMenuActivo.forEach(function(input) {
                input.disabled = true;
            });
            menusActivos[key] = false; // Desactivar el menú
        }
    }

    // Activar el menú seleccionado
    const menuSection = document.getElementById(menuId);
    const inputs = menuSection.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputs.forEach(function(input) {
        input.disabled = !input.disabled;
    });
    menusActivos[menuId] = true; // Activar el menú
}*/