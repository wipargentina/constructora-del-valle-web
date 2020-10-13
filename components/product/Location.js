import React from 'react';

export default function Location(props) {
  const location = props.location;
  return (
    <section id='location' className='location'>
      <iframe
        src={location.src}
        frameBorder='0'
        allowFullScreen=''
        aria-hidden='false'
        tabIndex='0'
      ></iframe>
    </section>
  );
}
