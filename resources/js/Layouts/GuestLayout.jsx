import React from 'react';
import PropTypes from 'prop-types';
export default function Guest({ children }) {
    return (
        <div style={{width:'100%', height: "100vh"}} className="flex bg-gray-100 flex-row justify-center items-center">

            <div className="flex flex-row">
                {children}
            </div>

        </div>
    );
}

Guest.propTypes = { 
    children: PropTypes.node,
};