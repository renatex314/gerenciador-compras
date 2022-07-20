import { createSlice } from '@reduxjs/toolkit';
import { createLista, createCompra } from '../../helpers/compras';

/*
listas: [
    {
        name: 'lista de compras 1',
        compras: [
            {
                name: 'banana'
            }
        ]
    }
]
*/

export const comprasSlice = createSlice({
    name: 'compras',
    initialState: {
        listaSelected: -1,
        listas: []
    },
    reducers: {
        selectLista: (state, action) => {
            state.listaSelected = action.payload;
        },

        addLista: (state, action) => {
            let listaName = action.payload;
            state.listas = [...state.listas, createLista(listaName)];
            state.listaSelected = state.listas.length - 1;
        },

        removeLista: (state, action) => {
            let listaIndex = action.payload;

            if (state.listaSelected >= listaIndex) {
                state.listaSelected--;
            }

            state.listas = state.listas.filter((_, i) => i != listaIndex);
        },

        addCompra: (state, action) => {
            if (state.listaSelected > -1) {
                let compraName = action.payload;
                let listaCompras = state.listas[state.listaSelected].compras;
                
                state.listas[state.listaSelected].compras = [...listaCompras, createCompra(compraName)];
            }
        },

        removeCompra: (state, action) => {
            let compraIndex = action.payload;
            let listaCompras = state.listas[state.listaSelected].compras;
            state.listas[state.listaSelected].compras = listaCompras.filter((_, i) => i != compraIndex);
        }
    }
});

export const { selectLista, addLista, removeLista, addCompra, removeCompra } = comprasSlice.actions;

export default comprasSlice.reducer;