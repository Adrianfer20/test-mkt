import { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import ButtonIcon from '../Buttons/ButtonIcon';
import CardInfo from './CardInfo';
import Button from '../Buttons/Button';

const NavbarUser = () => {
    const [toggle, setToggle] = useState(false);
    const containerRef = useRef(null);

    const handlerToggle = () => setToggle(!toggle);

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative h-24 flex flex-col justify-center items-center">
            <div className="hidden md:block">
                <Button variant="icon" onClick={handlerToggle}>
                    <FaUser size={22} />
                </Button>
            </div>
            {toggle && (
                <div className="md:absolute inset-y-0 left-[80%] flex justify-center items-center">
                    <CardInfo />
                </div>
            )}
        </div>
    );
};

export default NavbarUser;
