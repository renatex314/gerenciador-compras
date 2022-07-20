export function createLista(name) {
    return {
        name: name,
        compras: []
    };
}

export function createCompra(name) {
    return {
        name: name
    }
}

export function getListasNames(listas){
    return listas.map(lista => lista.name);
}

export function getComprasNames(selectedLista){
    return selectedLista.compras.map(compra => compra.name);
}

export function getSelectedLista(listas, selectedIndex){
    return selectedIndex < 0 ? {compras: []} : listas[selectedIndex];
}