import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-info">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-text"></div>
        <div className="skeleton-line skeleton-text-short"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;

