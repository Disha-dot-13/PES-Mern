import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Productsdetails = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    const getProduct = async () => {

      try {

        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        const data = await res.json();

        console.log(data);

        setProduct(data);

      } catch (error) {

        console.log(error);

      }
    };

    getProduct();

  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="300"
      />

      <h2>Price: ${product.price}</h2>

      <p>
        Description: {product.description}
      </p>

      <p>
        Category: {product.category}
      </p>

      <p>
        Brand: {product.brand}
      </p>

      <p>
        Rating: {product.rating}
      </p>

      <p>
        Stock: {product.stock}
      </p>

    </div>
  );
};

export default Productsdetails;