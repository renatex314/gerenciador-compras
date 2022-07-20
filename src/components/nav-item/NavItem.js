import styled from "styled-components";

export default ({title, selected=false, onClick, onClickDelete}) => (
    <StyledContainer onClick={onClick} selected={selected}>
        <Title>{title}</Title>
        <DeleteButton onClick={e => onDelete(e, onClickDelete)}>×</DeleteButton>
    </StyledContainer>
);

function onDelete(e, onClickDelete) {
    e.stopPropagation();
    onClickDelete();
}

const DeleteButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    width: 20px;
    height: 20px;
    border-radius: 5px;

    &:hover {
        background: #00000033;
    }
`;

const Title = styled.p`
    flex-grow: 1;
`;

const StyledContainer = styled.div`
    cursor: pointer; 
    display: flex;
    width: 150px;
    height: 35px;
    background-color: ${props => props.selected ? '#AAAAAA' : '#CCCCCC'};
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-top: 1px solid black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;

    &:hover {
        background-color: #BBBBBB;
    }
    `;