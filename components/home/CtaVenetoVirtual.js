import React from 'react';

export default function CtaVenetoVirtual() {
  return (
    <div className='cta-veneto-virtual'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            <div className='cta-title'>
              Descubrí la calidad de nuestros departamentos en un recorrido
              virtual 360°
            </div>
          </div>
          <div className='col-md-5'>
            <a
              id='btn-v3-360'
              href='https://360veneto3.constructoradelvalle.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/home/360-veneto-3.jpg' alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
