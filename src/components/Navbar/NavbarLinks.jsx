import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import { AuthContext } from '../../context/AuthProvider';

const ENDPOINTS = {
    public: [{ name: 'login', endpoint: '/login' }, { name: 'registro', endpoint: '/registro' }],
    private: [{ name: 'inicio', endpoint: '/' }, { name: 'documentacion', endpoint: '/documentacion' }, { name: 'tickets', endpoint: '/tickets' }],
};

const NavbarLinks = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(); // Obtener la ubicación actual del enrutador

    const isActive = (path) => {
        return location.pathname === path;
    };

    if(loading) return <></>
    return (
        <ul className='flex flex-col items-center gap-6 py-4'>
            {!user ? (
                <>
                    {ENDPOINTS.public?.map(item => (
                        <NavLink key={item.endpoint} href={item.endpoint} active={isActive(item.endpoint)}>
                            {item.name}
                        </NavLink>
                    ))}
                </>
            ) : (
                <>
                    {ENDPOINTS.private?.map(item => (
                        <NavLink key={item.endpoint} href={item.endpoint} active={isActive(item.endpoint)}>
                            {item.name}
                        </NavLink>
                    ))}
                </>
            )}
        </ul>
    );
};

export default NavbarLinks;

