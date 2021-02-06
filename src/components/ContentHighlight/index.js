import React from 'react';
import SurfSkateImg from 'assets/MainSurfSkate.jpg'
import './style.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ContentHighlight = () => {
  return(
    <div className="content-highlight">
      <LazyLoadImage
        className="image-highlight"
        effect="blur"
        src={SurfSkateImg} 
        alt="surfskate"
        width="100%"
        height="100%" />
    </div>
  );
}

export default ContentHighlight;