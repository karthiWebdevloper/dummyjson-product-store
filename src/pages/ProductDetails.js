import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../utils/cartUtils";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="productdetails">
      <img src={product.thumbnail} alt={product.title} className="productdetailsimage"/>
      <h2 className="productdetailstitle">{product.title}</h2>
      <p className="productdetailsdescription">{product.description}</p>
      <h3 className="productdetailsprice">₹ {product.price}</h3>

      <button
        className="addcart"
        onClick={() => {
          addToCart(product);
          navigate("/cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
