import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ href, name }) => {
    return (
        <Link
            to={href}
            className={"text-base font-medium text-gray-700 hover:text-gray-900"}
        >
            {name}
        </Link>
    );
}

export default NavLink