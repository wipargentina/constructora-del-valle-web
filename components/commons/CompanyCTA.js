import React from 'react';

export default function CompanyCTA() {
  return (
    <section className='company-cta'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xl-5'>
            <div className='photo'>
              <img src='/commons/company-cta.jpg' alt='' />
            </div>
          </div>
          <div className='col-lg-6 col-xl-7'>
            <div className='info'>
              <img
                src='/logo-constructora-del-valle-negative.png'
                alt=''
                className='img-fluid'
              />
              <h1>Construyendo futuro.</h1>
              <p>
                Somos una empresa de la ciudad de Las Varillas, que opera como
                desarrollador inmobiliario residencial en la Provincia de
                Córdoba.
              </p>
              <div className='btn btn-primary'>Saber más</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
