import React from "react"
import { Link } from "react-router"

function Cards() {
  const cards = [
    {
      to: "/cats",
      img: "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      to: "/dogs",
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      to: "/rabbit",
      img: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      to: "/hamster",
      img: "https://cdn.pixabay.com/photo/2018/02/17/17/50/cute-3160464_640.jpg",
    },
    {
      to: "/parrot",
      img: "https://images.pexels.com/photos/1040397/pexels-photo-1040397.jpeg?auto=compress&cs=tinysrgb&w=300",
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 bg-blue-50 py-10">
      {cards.map((card) => (
        <Link
          key={card.to}
          to={card.to}
          className="w-50 rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform"
        >
          <div
            className="h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${card.img})` }}
          />
          
        </Link>
      ))}
    </div>
  );

}

export default Cards
