import React from 'react';

export default function Location() {
  return (
    <section id='location' className='location'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.9489134227724!2d-64.32458578449064!3d-33.1104268808726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cdff93b17a9d67%3A0x2363117c75c3325!2sAchalay%201105%2C%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1602201374298!5m2!1ses!2sar'
        width='100%'
        height='600'
        frameBorder='0'
        allowFullScreen=''
        aria-hidden='false'
        tabIndex='0'
      ></iframe>
      {/* <div className='container'>
        <h1>Ubicación</h1>
      </div> */}
    </section>
  );
}
