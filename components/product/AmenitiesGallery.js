import React from 'react';

export default function AmenitiesGallery(props) {
  const gallery = props.gallery;
  return (
    <>
      <div className='gallery-grid mb-5'>
        <div className='gallery-item image-1'>
          <img src={gallery.image1} alt='' />
        </div>
        <div className='gallery-item image-2'>
          <img src={gallery.image2} alt='' />
        </div>
        <div className='gallery-item image-3'>
          <img src={gallery.image3} alt='' />
        </div>
      </div>
    </>
  );
}
