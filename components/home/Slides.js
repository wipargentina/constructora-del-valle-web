import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

export default function Slides() {
  return (
    <>
      <section className='slides'>
        <div className='container'>
          <Carousel indicators={false} controls={true}>
            <Carousel.Item>
              <img src='/home/slide-1.jpg' loading='lazy' alt='First slide' />
              <Carousel.Caption>
                <div className='caption-inner'>
                  <h1 className='big-title'>+430 Unidades Entregadas</h1>
                  <p className='lead'>Más de 20 años construyendo futuro</p>
                  <Link href='/emprendimientos'>
                    <a className='btn btn-primary'>
                      Ver proyectos de inversión
                    </a>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src='/home/slide-2.jpg' loading='lazy' alt='second slide' />
              <Carousel.Caption>
                <div className='caption-inner'>
                  <h1 className='big-title'>Fontana Di Veneto</h1>
                  <p className='lead'>Lanzamiento Veneto VIII</p>
                  <Link href='/veneto-8-fontana-di-veneto'>
                    <a className='btn btn-primary'>Oferta pre-venta</a>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}
