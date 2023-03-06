import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
  width: 400px;
  height: 100%;
  background-color: blueviolet;
`;

const DialogsList = ({children, ...props}) => {
    return (
        <StyledAside {...props}>
            {children}
        </StyledAside>
    );
}

export default DialogsList;