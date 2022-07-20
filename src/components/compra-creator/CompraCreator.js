import { useState } from "react";
import styled from "styled-components";
import Button from "../button";

export default function({onCreateCompraClick}){
    const [nome, setNome] = useState('');
    
    return (
        <Container>
            <StyledInput placeholder="Digite o nome da compra..." onChange={({target}) => setNome(target.value)}/>
            <Button text="criar compra" onClick={() => onCreateCompraClick(nome)}/>
        </Container>
    );
}

const StyledInput = styled.input`
    flex-grow: 1;
    margin: auto 20px;
    border: 2px solid #222222;
    border-radius: 5px;
    padding: 10px;
    font-size: 15px;
`;

const Container = styled.div`
    display: flex;
    padding: 20px;
`;