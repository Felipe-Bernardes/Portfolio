import React, { Fragment } from 'react';
import { Container, GlobalStyle } from './SectionGlobalCss';
import Menu from '../Menu/Menu';

const GlobalSection = () => {
    return(
        <Fragment>
            <GlobalStyle />
            <Container>
                <Menu/>
            </Container>
        </Fragment>
    )
}

export default GlobalSection