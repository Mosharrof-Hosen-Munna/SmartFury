import React from "react";
import "./ProductSkeleton.css";
const ProductSkeleton = () => {
  return (
    <div>
      <div className="col">
        <div className="card border-0 shadow">
          <div className=" skeleton-box overflow-hidden skeleton-card-img w-100 p-0"></div>
          <div className="card-body p-1">
            <div className="skeleton-box skeleton-circle-100 p-6 mt-2"></div>
            <div className="skeleton-box skeleton-circle-100 p-10   "></div>
            <div className="skeleton-box skeleton-circle-75 p-10   "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
