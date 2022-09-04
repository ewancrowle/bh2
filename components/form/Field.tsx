import React from 'react';

function Field(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { label: string }) {
    return (
        <div className="mb-4">
            <label className="font-bold text-sm">
                {props.label}
            </label>
            <input
                {...props}

                className={`bg-gray-100 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${props.className} focus:animate-pulse`}
            />
        </div>

    );
}

export default Field;