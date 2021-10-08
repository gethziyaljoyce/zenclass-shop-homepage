import "./App.css";

import React from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

let products = [
  {
    id:1,
    image:
      "https://m.media-amazon.com/images/I/71H1hMaui6L._UL1500_.jpg",
    sale: false,
    item: "Fancy Product",
    stars: false,
    discount: "",
    price: "$40.00 - $80.00",
    cart: false,
  },
  {
    id:2,
    image:
      "https://m.media-amazon.com/images/I/81JqN3WWIhL._UL1500_.jpg",
    sale: true,
    item: "Special Item",
    stars: true,
    discount: "$20.00",
    price: "$18.00",
    cart: true,
  },
  {
    id:3,
    image:
      "https://m.media-amazon.com/images/I/61UNaFge4tL._SL1349_.jpg",
    sale: true,
    item: "Sale Item",
    stars: false,
    discount: "$50.00",
    price: "$25.00",
    cart: true,
  },
  {
    id:4,
    image:
      "https://images.meesho.com/images/products/55042245/1r5ws_512.jpg",
    sale: false,
    item: "Popular Item",
    stars: true,
    discount: "",
    price: "$40.00",
    cart: true,
  },
  {
    id:5,
    image:
      "https://m.media-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg",
    sale: true,
    item: "Sale Item",
    stars: false,
    discount: "$50.00",
    price: "$25.00",
    cart: true,
  },
  {
    id:6,
    image:
      "https://images.meesho.com/images/products/55034343/s6jsc_512.jpg",
    sale: false,
    item: "Fancy Product",
    stars: false,
    discount: "",
    price: "$120.00 - $280.00",
    cart: false,
  },
  {
    id:7,
    image:
      "https://m.media-amazon.com/images/I/41pEyVSZFvS._SL1500_.jpg",
    sale: true,
    item: "Special Item",
    stars: true,
    discount: "$20.00",
    price: "$18.00",
    cart: true,
  },
  {
    id:8,
    image:
      "https://m.media-amazon.com/images/I/51HH3QUa1kL._UL1185_.jpg",
    sale: false,
    item: "Popular Item",
    stars: true,
    discount: "",
    price: "$40.00",
    cart: true,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // function for count  (addcart and remove cart action)
  addcart = (event) => {
    if (event) {
      this.setState(() => ({
        count: this.state.count + 1,
      }));
      this.scrollTop();
    } else {
      this.setState(() => ({
        count: this.state.count - 1,
      }));
      this.scrollTop();
    }
  };

  // function to scrollup after add/remove cart
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        <Navbar count={this.state.count} />
        <Header />
        <div className="card-content d-flex flex-wrap justify-content-center">
          {products.map((ele,i) => {
            // to iterate Products
            return (
              <Card
                key={i}
                image={ele.image}
                sale={ele.sale}
                title={ele.item}
                star={ele.stars}
                discount={ele.discount}
                price={ele.price}
                cart={ele.cart}
                addcart={this.addcart}
              />
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;