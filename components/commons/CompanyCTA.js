import Link from 'next/link';

export default function CompanyCTA() {
  return (
    <section className='company-cta'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-xl-5'>
            <div className='photo'>
              <img src='/commons/company-cta.jpg' alt='' />
            </div>
          </div>
          <div className='col-lg-7 col-xl-7'>
            <div className='info'>
              <img className='logo' src='/Logo-wh.svg' alt='logo' />
              <h1>Construyendo futuro.</h1>
              <p>
                Somos una empresa con más de 20 años de trayectoria de la ciudad
                de Las Varillas, que opera como desarrollador inmobiliario
                residencial y turístico en la Provincia de Córdoba. <br />
                Honestos, trabajadores, confiables y un producto de excelente
                calidad, son las características que nos identifican
              </p>
              <Link href='/la-empresa'>
                <a className='btn btn-primary'>Saber más</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
