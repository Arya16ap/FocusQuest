import React from 'react';
import { createPortal } from 'react-dom';

export default function EducationGallery() {
  const images = [
    "/images/1.png", // top edge
    "/images/2.png", // right edge
    "/images/3.png", // bottom edge
    "/images/4.png", // left edge
    "/images/5.png"  // center (optional)
  ];

  const positions = [
    { top: '-5%', left: '50%', rotation: -5, size: 250, anchor: 'top' },     // top
    { top: '50%', right: '-5%', rotation: 8, size: 260, anchor: 'right' },   // right
    { bottom: '-5%', left: '20%', rotation: 10, size: 240, anchor: 'bottom' }, // bottom
    { top: '20%', left: '-5%', rotation: -8, size: 260, anchor: 'left' },    // left
    { top: '20%', left: '20%', rotation: 0, size: 220, anchor: 'center' }    // center
  ];

  const gallery = (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {images.map((image, index) => {
        const pos = positions[index];
        const style = {
          position: 'absolute',
          width: `${pos.size}px`,
          height: 'auto',
          transform: `translate(-50%, -50%) rotate(${pos.rotation}deg)`,
          opacity: 0.15,
          ...((pos.anchor === 'top' || pos.anchor === 'bottom') && { left: '50%' }),
          ...((pos.anchor === 'left' || pos.anchor === 'right') && { top: '50%' }),
          ...(pos.top && { top: pos.top }),
          ...(pos.bottom && { bottom: pos.bottom }),
          ...(pos.left && { left: pos.left }),
          ...(pos.right && { right: pos.right }),
        };

        return <img key={index} src={image} alt="" style={style} />;
      })}
    </div>
  );

  return createPortal(gallery, document.body);
}
