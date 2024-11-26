import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

const books = [
  {
    id:1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    price: "$10.99",
    description: "A tale of love, ambition, and betrayal in the Jazz Age.",
    image: "/img/GreatGatsby.jpg",
  },
  {
    id:2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    price: "$9.49",
    description: "A dystopian novel that explores surveillance and freedom.",
    image: "/img/1984.jpg",
  },
  {    id:3,

    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Historical Fiction",
    price: "$12.29",
    description: "A powerful story of justice and morality in the Deep South.",
    image: "/img/tokillamockingbird.jpg",
  },
  {    id:4,

    title: "A Man Called Ove",
    author: "Fredrik Backman",
    genre: "Contemporary Fiction",
    price: "$8.99",
    description: "A story of a grumpy but lovable man.",
    image: "/img/Amancalledove.jpg",
  },
  {    id:5,

    title: "The Fortune Men",
    author: "Nadifa Mohamed",
    genre: "Literary Fiction",
    price: "$14.50",
    description: "A gripping novel of injustice and hope.",
    image: "/img/slider2_1.jpg",
  },
  {    id:6,

    title: "Good and Evil",
    author: "Various",
    genre: "Philosophy",
    price: "$6.99",
    description: "A thought-provoking take on morality.",
    image: "/img/slider2_2.jpg",
  },
  {    id:7,

    title: "Oliver Sacks",
    author: "Oliver Sacks",
    genre: "Memoir",
    price: "$13.45",
    description: "A memoir by the celebrated neurologist.",
    image: "/img/slider2_3.jpg",
  },
  {    id:8,

    title: "The Art of Happiness",
    author: "Dalai Lama",
    genre: "Self-Help",
    price: "$15.99",
    description: "Insights on life and joy.",
    image: "/img/slider2_4.jpg",
  },
  {    id:9,

    title: "A Man's Greatest Challenge",
    author: "Various",
    genre: "Self-Improvement",
    price: "$11.75",
    description: "A guide to self-discovery and growth.",
    image: "/img/slider2_5.jpg",
  },
  {    id:10,

    title: "The Wealth of Nations",
    author: "Adam Smith",
    genre: "Economics",
    price: "$18.25",
    description: "A classic on economics and society.",
    image: "/img/slider2_6.jpg",
  },
  {    id:11,

    title: "Thinking Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    price: "$16.80",
    description: "Exploring the mind's dual systems of thought.",
    image: "/img/slider2_7.jpg",
  },
  {    id:12,

    title: "The Way of Men",
    author: "Jack Donovan",
    genre: "Cultural Studies",
    price: "$10.50",
    description: "An exploration of masculinity.",
    image: "/img/slider2_8.jpg",
  },
];

const Gallery = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="gallery-container">
      <Navbar />
      <h2>Book Gallery</h2>
      <div className="card-container">
        {books.map((book) => (
          <div className="card" key={book.id}>
            <img src={`${process.env.PUBLIC_URL}${book.image}`} alt={book.title} className="book-image" />
            <div className="card-content">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Price:</strong> {book.price}</p>
              <p>{book.description}</p>
              <div className="card-icons">
                <FontAwesomeIcon
                  icon={faCartPlus}
                  title="Add to Cart"
                  onClick={() => addToCart(book)} 
                />
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  title="Buy Now"
                  onClick={() => { addToCart(book); navigate('/money'); }} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;