import { Carousel } from 'react-bootstrap';

export default function Slides() {
  return (
    <>
      <section className='slides'>
        <div className='container'>
          <Carousel indicators={false}>
            <Carousel.Item>
              <img src='/home/slide-1.jpg' alt='First slide' />
              <Carousel.Caption>
                <div className='caption-inner'>
                  <h1 className='big-title'>+430 Unidades Entregadas</h1>
                  <p className='lead'>Construyendo futuro, hoy y siempre.</p>
                  <a className='btn btn-primary' href='/'>
                    Ver proyecto de inversión
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='/home/slide-1.jpg'
                alt='Third slide'
              />

              <Carousel.Caption>
                <div className='caption-inner'>
                  <h1 className='big-title'>Construyendo futuro</h1>
                  <p className='lead'>Hablemos de inversión hoy y siempre.</p>
                  <a className='btn btn-primary' href='/'>
                    Ver proyecto de inversión
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}
