import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

//bg-gray-700 w-32 space-y-6 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0
//transition duration-200 ease-in-out

export const Nav = styled.nav.attrs({
    className: "bg-gray-700 w-32 space-y-6 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
})``;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 12px;
    font-weight: bold;
    text-decoration: none;
`;

export const NavMenu = styled.ul.attrs({
    className: "flex absolute inset-y-0 left-0 items-center py-7 "
})``;

export const NavItem = styled.li.attrs({
    className: "h-12"
})`
`;

/*
color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
*/

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;