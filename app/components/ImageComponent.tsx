import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;    
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, width, height }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} />
  );
};

export default ImageComponent;
