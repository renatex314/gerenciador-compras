import styled from 'styled-components';

export default function ({title, onClickDelete}) {
    return (
        <StyledLI>
            <StyledTitle>{title}</StyledTitle>
            <DeleteButton onClick={onClickDelete}>×</DeleteButton>
        </StyledLI>
    );
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

const StyledTitle = styled.p`
    flex-grow: 1;
`;

const StyledLI = styled.li`
    display: flex;
    padding: 10px;
    background-color: #CCCCCC;
    border-radius: 5px;
    margin-bottom: 10px;
`;