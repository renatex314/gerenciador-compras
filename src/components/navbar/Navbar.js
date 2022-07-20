import styled from "styled-components";
import NavItem from "../nav-item";
import { useSelector, useDispatch } from "react-redux";
import { selectLista, removeLista } from "../../redux/reducers/compras";
import { getListasNames } from "../../helpers/compras";

export default function ({onAddItemClick}) {
    let selectedIndex = useSelector((state) => state.compras.listaSelected);
    let items = useSelector((state) => getListasNames(state.compras.listas));
    let dispatch = useDispatch();

    return (
        <StyledNavbar>
            {items.map((item, key) => createNavItem(key, item, selectedIndex, dispatch))}
            <AddButton onClick={() => onAddItemClick()}>+</AddButton>
        </StyledNavbar>
    );
}

function createNavItem(key, title, selectedIndex, dispatch){
    return <NavItem 
        key={key} 
        selected={selectedIndex === key}
        title={title} 
        onClick={() => selectItem(key, dispatch)} 
        onClickDelete={() => deleteItem(key, dispatch)} 
    />
}

function selectItem(index, dispatch){
    dispatch(selectLista(index));
}

function deleteItem(index, dispatch){
    dispatch(removeLista(index));
}

const AddButton = styled.button`
    cursor: pointer; 
    color: white;
    height: 35px;
    width: 35px;
    background: #222222;
    border-top: 2px solid #222222;
    border-right: 2px solid #222222;
    border-left: 2px solid #222222;
    border-bottom: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: bold;
    transition: 0.2s all;

    &:hover {
        color: #222222;
        background: transparent;
    }
`;

const StyledNavbar = styled.ul`
    display: flex;
    width: 100%;
    padding: 0 10px;
    margin-top: 20px;
    flex-direction: row;
    border-bottom: 2px solid black;
    box-sizing: border-box;
    box-shadow: 0 -2px 3px -1px gray inset;

    & > div {
        margin: 0 1px;  
    }
`;