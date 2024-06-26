import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

// Components
import Button from "../Buttons/Button";

// Styles
import style from './NavbarStyles';
import NavbarLinks from "./NavbarLinks";
import NavbarUser from "./NavbarUser";



const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setToggle(window.innerWidth > 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`${style.navbar.bs} ${style.navbar.sm} ${style.navbar.md}`}>
            <div className={`${style.navbarHeader.bs} ${style.navbarHeader.sm} ${style.navbarHeader.md}`}>
                <span className='font-bold text-xl'>A|R</span>
                <div className='inline-block md:hidden'>
                    <Button onClick={() => setToggle(!toggle)}>
                        <FaBars size={18} />
                    </Button>
                </div>
            </div>

            <div className={`${style.navbarBody.bs} ${style.navbarBody.sm} ${style.navbarBody.md} ${toggle ? null : 'hidden'}`}>
                <NavbarLinks/>
                {/* {user && <NavbarUser />} */}
            </div>
        </nav>
    );
};

export default Navbar;

