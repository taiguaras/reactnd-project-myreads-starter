import React from 'react';
import { Container,  Image,  Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from './../icons/logo.svg';

const Navbar = () => (
        <Menu fixed="top">
            <Container>
                <Menu.Item as="a" header>
                <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
                My Reads
                </Menu.Item>      
                <Menu.Item as="a"><Link to={`/`}>Home</Link></Menu.Item>      
                <Menu.Item as="a"><Link to={`/search`}>Search</Link></Menu.Item>  
            </Container>
        </Menu>
);

export default Navbar;