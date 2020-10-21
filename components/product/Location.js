import React from 'react';

export default function Location(props) {
  const location = props.location;
  return (
    <section id='location' className='location'>
      {location.title ? (
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 p-0'>
              <div className='content'>
                <img src={location.image} alt='' className='content-image' />
                <div className='content-overlay'></div>
                <div className='content-info'>
                  <h3>UBICACIÓN</h3>
                  <h2>{location.title}</h2>
                  <p>{location.text}</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 p-0'>
              <div className='mapa'>
                <iframe
                  src={location.src}
                  frameBorder='0'
                  allowFullScreen=''
                  aria-hidden='false'
                  tabIndex='0'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 p-0'>
              <div className='mapa'>
                <iframe
                  src={location.src}
                  frameBorder='0'
                  allowFullScreen=''
                  aria-hidden='false'
                  tabIndex='0'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
