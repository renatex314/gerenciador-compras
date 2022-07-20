import styled from "styled-components";

export default ({text, onClick, type='normal'}) => (
    <StyledButton onClick={onClick} type={type}>
        {text}
    </StyledButton>
)

const StyledButton = styled.button`
    cursor: pointer;
    padding: 12px 15px;
    background-color: #222222;
    color: white;
    font-family: unset;
    border: 2px solid #222222;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: ${props => props.type === 'normal' ? '5px' : '100px'};
    
    transition: 0.2s all;

    &:hover {
        color: #222222;
        background-color: transparent;
    }
`;