import React from 'react';
import SurfSkateImg from '../../assets/SurfSkate2.jpg'
import './ContentHighlight.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ContentHighlight = () => {
  return(
    <div className="content-highlight">
      <LazyLoadImage
        effect="blur"
        src={SurfSkateImg} 
        alt="surfskate"
        width="100%"
        height="100%" />
    </div>
  );
}

export default ContentHighlight;