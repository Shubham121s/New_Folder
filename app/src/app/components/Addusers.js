import React from 'react';

function Addusers() {
    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-lg max-w-sm mx-auto mt-10 border border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add User:</h2>
            <input
                type="text"
                placeholder="Add user"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out">
                Add users
            </button>
        </div>
    );
}

export default Addusers;

