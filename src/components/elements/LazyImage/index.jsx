import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ className, src, alt }) => {
  return (
    <>
      <LazyLoadImage effect="blur" className={className} src={src} alt={alt} />
    </>
  );
};

export default LazyImage;
