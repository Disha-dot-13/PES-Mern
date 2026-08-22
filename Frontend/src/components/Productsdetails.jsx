import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Productsdetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    const getProduct = async () => {
      try {

        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        const data = await res.json();

        setProduct(data);

      } catch (error) {
        console.log(error);
      }
    };

    getProduct();

  }, [id]);

  return (
    <div>

      <button onClick={() => navigate('/products')}>
        ← Back to Products
      </button>

      {!product ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>{product.title}</h1>

          <img
            src={product.thumbnail}
            alt={product.title}
            width="300"
          />

          <h2>Price: ${product.price}</h2>

          <p>{product.description}</p>

          <p>Category: {product.category}</p>

          <p>Rating: {product.rating}</p>

          <p>Stock: {product.stock}</p>
        </>
      )}

    </div>
  );
};

export default Productsdetails;