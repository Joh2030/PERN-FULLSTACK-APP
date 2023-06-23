import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "bootstrap";
// import Form from "./Form";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="home_title">
        <h1>Welcome to Home Library!</h1>
      </div>
      {/* <Form /> */}
      <div class="clearfix">
        <img
          src="https://images.unsplash.com/photo-1629552049362-9ce66fe7840d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          class="col-md-6 float-md-end mb-3 ms-md-3"
          alt="..."
        />
        <div className="homePar">
          <p>
            In today's digital age, where information is just a click away, the
            concept of a home library may seem old-fashioned to some. However,
            the allure and importance of having a personal collection of books
            within the confines of one's home have stood the test of time. A
            home library not only showcases our intellectual pursuits but also
            serves as a sanctuary for exploration, inspiration, and personal
            growth. Let us embark on a journey through the ages to explore the
            fascinating history of home libraries and uncover why they continue
            to hold immense value in our modern lives.
          </p>

          <p>
            The origins of home libraries can be traced back to the ancient
            civilizations of Mesopotamia and Egypt. Wealthy individuals would
            amass clay tablets and papyrus scrolls, storing them in designated
            rooms or areas within their homes. These early collections primarily
            consisted of religious texts, historical records, and philosophical
            treatises. The concept of a personal library began to take shape as
            knowledge and literacy spread throughout the world.
          </p>

          <p>
            The Renaissance period witnessed a resurgence of intellectual
            curiosity and a thirst for knowledge. Wealthy patrons, scholars, and
            artists began to assemble their personal libraries, housing
            manuscripts, scientific works, and literary classics. These
            libraries became gathering places for scholars and intellectuals,
            fostering a culture of learning and exchange of ideas. The personal
            library emerged as a symbol of prestige and a testament to one's
            intellectual prowess.
          </p>
        </div>
      </div>
    </div>
  );
}
