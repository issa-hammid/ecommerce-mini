import "./ProductSkeleton.css";

export default function ProductSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image shimmer"></div>
      <div className="skeleton-title shimmer"></div>
      <div className="skeleton-price shimmer"></div>
      <div className="skeleton-button shimmer"></div>
    </div>
  );
}
