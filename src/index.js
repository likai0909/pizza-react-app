import React, { useState } from 'react';  // Import useState here
import ReactDOM from 'react-dom/client';
import "./index.css";

const pizzaData = [
        {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
        },
        {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
        },
        {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
        },
        {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
        },
        {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
        },
        {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
        },
    ];
    

function Header(){
    return (
        <h1>Li Kai's Pizza Co.</h1>
    )
}

function App(){
    return (
        <div className="container">
            <Header/>
            <Menu/> 
            <Footer/>
            <Contact/>        
        </div>
    )
}



function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <p className="tagline">Authentic Italian Cuisine, all from our stone oven</p>
            <div className="pizzas">
            {pizzaData.map((pizza, index) => (
                <Pizza 
                key={index}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                />
            ))}
            </div>
        </div>
        );
    }


function Pizza({ name, ingredients, price, photoName }) {
        const [modalOpen, setModalOpen] = useState(false);
    
        // Function to open the modal with the image
        const openModal = () => {
        setModalOpen(true);
        };
    
        // Function to close the modal
        const closeModal = () => {
        setModalOpen(false);
        };
    
        return (
        <div className="pizza">
            <img src={photoName} alt={name} onClick={openModal} />
            <h1>{name}</h1>
            <p>{ingredients}</p>
            <p>${price}</p>
    
            
            {modalOpen && <Modal image={photoName} onClose={closeModal} />}
        </div>
        );
    }



    function Modal({ image, onClose }) {
        const [quantity, setQuantity] = useState(1);  // State to manage quantity
    
        // Increase quantity
        const increaseQuantity = () => setQuantity(quantity + 1);
    
        // Decrease quantity
        const decreaseQuantity = () => {
            if (quantity > 1) setQuantity(quantity - 1); // Prevent quantity from going below 1
        };
    
        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <img src={image} alt="Pizza" className="modal-image" />
                    <div className="quantity-container">
                        <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                        <span className="quantity-display">{quantity}</span>
                        <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        );
    }

function Contact(){
    return (
        <section id="contact">
            <h2 className="contact-heading">See you again</h2>
            <p className="contact-description">
            I am grateful to serve customers and am always open to connecting.
            </p>
    
            <div className="contact-info">
            <p>
                Email: <a href="mailto:likaitan0909@gmail.com">likaitan0909@gmail.com</a>
            </p>
            <p>
                Phone: <a href="tel:+6598886138">+65 98886138</a>
            </p>
            </div>
        </section>
    );
}

const clickAlert = () => {
    alert("Order Submitted!");
};


function Footer() {
    const currentTime = new Date().getHours();
    const isOpen = currentTime >= 10 && currentTime < 22;

    return (
        <div>
            <footer>
                {isOpen ? (
                    <div className="footer-content">
                        <h1>We're currently open</h1>
                        <button onClick={clickAlert} className="btn">Order</button>
                    </div>
                ) : (
                    <h1>Sorry, we're closed</h1>
                )}
            </footer>
        </div>
    );
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);