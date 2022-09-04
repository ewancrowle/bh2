import React from 'react';

function Button(props) {
    if (props.disabled) {
        return <button
            type="submit" disabled
            className={`text-center text-white font-bold bg-gray-800 rounded-lg py-2 px-4 uppercase text-sm ${props.className}`}>
            {props.children}
        </button>;
    }

    return (
        <button
            type="submit"
            className={`text-center text-white font-bold bg-purple-500 rounded-lg py-2 px-4 hover:bg-purple-600 uppercase text-sm ${props.className}`}>
            {props.children}
        </button>
    );
}

export default Button;