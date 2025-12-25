import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="productcard" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.thumbnail} alt={product.title} className="productimage"/>
      <h4 className="producttitle">{product.title}</h4>
      <p className="productprice">₹ {product.price}</p>
    </div>
  );
}

export default ProductCard;
