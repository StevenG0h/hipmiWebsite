import React from 'react';
import PropTypes from 'prop-types';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `w-100 bg-green-500 rounded-lg ms-0 py-2 text-white font-bold hover:bg-green-600 transition ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    props: PropTypes.object,
}