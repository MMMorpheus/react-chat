import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    width: 300px;
    height: 56px;
    border-radius: 5px;
    border: none;
    background-color: #0d5dce;
    color: white;
    letter-spacing: 0.15px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    ${props => props.primary && css`
        background-color: #68a0f3;
    `}
  
`;

const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
}

export default Button;
