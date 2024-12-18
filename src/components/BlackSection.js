import React from 'react';
import '../styles/BlackSection.css';
import Navbar from './Navbar';

import GreatGatsby from '../img/GreatGatsby.jpg';
import NineteenEightyFour from '../img/1984.jpg';
import ToKillAMockingbird from '../img/tokillamockingbird.jpg';
import AManCalledOve from '../img/Amancalledove.jpg';

function BlackSection() {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A tale of love, ambition, and betrayal in the Jazz Age.",
      image: GreatGatsby,
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel that explores surveillance and freedom.",
      image: NineteenEightyFour,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A powerful story of justice and morality in the Deep South.",
      image: ToKillAMockingbird,
    },
    {
      title: "A Man Called Ove",
      author: "Fredrik Backman",
      description: "A story of a grumpy but lovable man.",
      image: AManCalledOve,
    },
  ];

  return (
    <div className="black-section-content">
      <Navbar />
      <h2>Top Picks from Our Collection</h2>
      <div className="card-container">
        {books.map((book, index) => (
          <div className="card" key={index}>
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="card-content">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlackSection;
