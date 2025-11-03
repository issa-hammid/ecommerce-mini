import React from 'react'
import"./ProductDetails.css"
function ProductSkeleton() {
 return (
    <div className="product-details-container skeleton-container">
      <div className="skeleton skeleton-image"></div>

      <div className="product-details-info" style={{ width: "100%" }}>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-price"></div>
        <div
          className="skeleton"
          style={{
            width: "150px",
            height: "40px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProductSkeleton