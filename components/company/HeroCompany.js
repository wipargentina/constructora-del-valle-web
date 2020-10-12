import IconPlay from '../icons/IconPlay';

export default function HeroCompany() {
  return (
    <div className='hero'>
      <img className='hero-bg' src='/la-empresa/hero.jpg' alt='' />
      <div className='hero-content'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <h1>Constructora del Valle S.A.</h1>
              <h2 className='serif'>
                “Desarrollamos conceptos, construimos futuro, no pegamos
                ladrillos”
              </h2>
              <div className='btn-play'>
                <a href='/la-empresa'>
                  <IconPlay />
                </a>
                Ver video
              </div>
              <p>
                Somos una empresa de la ciudad de Las Varillas,que opera como
                desarrollador inmobiliario residencial en la Provincia de
                Córdoba.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
