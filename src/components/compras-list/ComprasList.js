import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ComprasListItem from '../compras-list-item';
import { removeCompra } from '../../redux/reducers/compras';
import { getComprasNames, getSelectedLista } from '../../helpers/compras';

export default function () {
    const listaSelected = useSelector((state) => state.compras.listaSelected);
    const comprasList = useSelector((state) => getComprasNames(getSelectedLista(state.compras.listas, state.compras.listaSelected)));
    const dispatch = useDispatch();

    return (
        <StyledList>
            {listaSelected === -1 
            && 
            <p>Atualmente não há listas de compras, para adicionar compras, crie uma lista</p>
            ||
            comprasList.length > 0 
            && 
            comprasList.map((title, i) => createCompraItem(i, title, dispatch))
            ||
            <p>Lista de compras vazia</p>
            }
            {}
        </StyledList>
    );
}

function createCompraItem(key, title, dispatch) {
    return <ComprasListItem key={key} title={title} onClickDelete={() => deleteCompra(key, dispatch)} />
}

function deleteCompra(compraIndex, dispatch){
    dispatch(removeCompra(compraIndex));
}

const StyledList = styled.ul`
    flex-grow: 1;
    padding: 0 40px;
    overflow: auto;
`;