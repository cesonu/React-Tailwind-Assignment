import React from "react";

const GreetingCards = ({ title, message }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 text-base">{message}</p>
        </div>
    );
};

export default GreetingCards;
