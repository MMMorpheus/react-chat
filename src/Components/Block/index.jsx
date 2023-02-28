import React from 'react';

import styled from 'styled-components';
import { FlexCenter } from '../Styles';
const StyledBlock = styled(FlexCenter)`
padding: 45px;
background: #fff;
box-shadow: 0 0 25px rgba(0, 0, 0, 0.04204);
border-radius: 3px;
max-width: 430px;
`;

const Block = ({children, ...props}) => {
    return (
        <StyledBlock {...props}>
            {children}
        </StyledBlock>
    );
}

export default Block;
