import styled from "styled-components";
import Button from "../button";

export default function({onSuccess, onCancel}){
    return (
        <Blocker id="dialog-blocker" active={true}>
            <Dialog>
                <Title>Digite o título do item a ser adicionado:</Title>
                <StyledInput id="dialog-input" placeholder="Digite algo..."/>
                <ActionSection>
                    <Button text="OK" onClick={() => onSuccess(getInputText())}/>
                    <Button text="Cancelar" onClick={() => onCancel()}/>
                </ActionSection>
            </Dialog>
        </Blocker>
    );
}

function getInputText(){
    return document.getElementById('dialog-input').value;
}

const StyledInput = styled.input`
    margin: auto 0;
    border: 2px solid #222222;
    border-radius: 5px;
    padding: 10px;
    font-size: 15px;
`;

const ActionSection = styled.div`
    Button {
        margin: 0 5px;
    }
`;

const Title = styled.h2``;

const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    border: 2px solid black;
    padding: 40px;
`;

const Blocker = styled.div`
    position: fixed;
    display: ${props => props.active ? 'flex' : 'none'};
    width: 100vw;
    height: 100vh;
    background-color: #000000AA;
    justify-content: center;
    align-items: center;
`;