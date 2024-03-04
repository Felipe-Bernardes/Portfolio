import React from "react";
import { Container, ContainerLogo, Logo, Lista, Link, ContainerContato, Imagens, ImagensLink, Header} from "./MenuCss";
import ImgGit from '../../imgs/git.png'
import ImgLink from '../../imgs/link.png'
import ImgWat from '../../imgs/wat.png'

const Menu = () => {
    return(
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo>Portfolio</Logo>
                </ContainerLogo>
                <Lista>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Sobre Mim</Link></li>
                    <li><Link href="#">Projetos</Link></li>
                </Lista>
                <ContainerContato>
                    <ImagensLink href="#"><Imagens src={ImgGit} alt="a"/></ImagensLink>
                    <ImagensLink href="#"><Imagens src={ImgLink} alt="a"/></ImagensLink>
                    <ImagensLink href="#"><Imagens src={ImgWat} alt="a"/></ImagensLink>
                </ContainerContato>
            </Header>
        </Container>
    )
}

export default Menu