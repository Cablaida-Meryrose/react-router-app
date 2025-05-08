import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-8">
            <div className="text-center max-w-md">
                <FaSadTear className="text-blue-400 text-7xl mb-6 mx-auto animate-bounce" />
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                    404
                </h1>
                <p className="text-xl mb-6 text-blue-100">
                    Oops! The page you’re looking for doesn’t exist.
                </p>
                <NavLink
                    to="/"
                    className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105"
                >
                    Go Back Home
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;
