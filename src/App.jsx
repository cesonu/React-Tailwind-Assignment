import React from "react";
import Header from "./Header";
import GreetingCards from "./GreetingCards";

export default function App() {
    const cards = [
        { title: "Happy Birthday!", message: "May you have a fantastic day filled with joy and everything positive!" },
        { title: "Congratulations!", message: "Well done on your achievement!" },
        { title: "Thank You!", message: "Thanks for your kindness and support!" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-orange-300 to-pink-400 p-8">
            <Header />
            <div className="grid gap-12 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, index) => (
                    <GreetingCards key={index} title={card.title} message={card.message} />
                ))}
            </div>
        </div>
    );
}
