import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant = 'primary', children, onClick }) => {
    let classNames = 'font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ';

    switch (variant) {
        case 'primary':
            classNames += 'bg-blue-700 text-white hover:bg-blue-800 rounded-md py-2 px-4 ';
            break;
        case 'outline':
            classNames += 'border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-md py-2 px-4 ';
            break;
        case 'icon':
            classNames += 'bg-blue-700 text-white hover:bg-blue-800 rounded-full p-4';
            break;
        default:
            classNames += 'bg-gray-700 text-white hover:bg-gray-800 rounded-md';
    }

    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'outline', 'icon']),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
