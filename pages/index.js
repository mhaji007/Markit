import React from "react";
import axios from "axios";

function Home() {
  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const url = "http://localhost:3000/api/products";
    const response = await axios.get(url);
    
  }

  return <>home</>;
}

export default Home;
