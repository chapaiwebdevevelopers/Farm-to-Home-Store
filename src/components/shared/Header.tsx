import React from 'react';
import NavLogo from './header/NavLogo';
import Marquee from './header/Marquee';

const Header = () => {
    return (
        <>
            <NavLogo></NavLogo>
            <Marquee></Marquee>
            {/* <PrimaryNav></PrimaryNav> */}
        </>
    );
};

export default Header;