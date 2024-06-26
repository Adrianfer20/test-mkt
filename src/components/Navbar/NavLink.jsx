import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ href, children, active }) => {
    const isActive = active ? 'bg-yellow-400 text-blue-700 font-bold' : 'bg-transparent';

    return (
        <li>
            <a className={`text-white hover:bg-yellow-400 hover:text-blue-700 rounded-md transition duration-300 capitalize px-4 py-2 ${isActive}`} href={href}>
                {children}
            </a>
        </li>
    );
};

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
};

export default NavLink;
