import Link from 'next/link';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className='container'>
        <h1>¿Por qué invertir en Veneto?</h1>
        <div className='row justify-content-center'>
          <div className='col-xl-8'>
            <ul>
              <li>
                <p>
                  Precio de compra diferencial{' '}
                  <b>19% por debajo del mercado.</b>
                </p>
              </li>
              <li>
                <p>
                  <b>Compra de contado</b>, que genera un ahorro del ajuste por
                  ICC y/o inflación respecto de otras alternativas.
                </p>
              </li>
              <li>
                <p>
                  <b>Revalorización de la zona superior al 9% anual.</b>
                </p>
              </li>
              <li>
                <p>
                  <b>
                    Obra en proceso de construcción con planos y habilitaciones
                    aprobadas.
                  </b>
                </p>
              </li>
              <li>
                <p>
                  Selección de unidades de 50² a 85m² promedio que facilitan la
                  posterior venta y defienden mejor el valor por m².
                </p>
              </li>
              <li>
                <p>
                  La venta futura con las unidades terminadas permitirá defender
                  el valor de venta, maximizando el retorno para el inversor.
                </p>
              </li>
              <li>
                <p>
                  Edificio con características de{' '}
                  <b>Arte, Tecnología, Diseño y Calidad</b> que lo hacen
                  superior y más atractivo frente a la competencia.
                </p>
              </li>
              <li>
                <p>
                  <b>Ubicación estratégica</b> con accesos rápidos para
                  vehículos, además de una explanada peatonal y 4 locales
                  comerciales que revalorizarán la cuadra.
                </p>
              </li>
              <li>
                <p>Zona de mayor seguridad en toda la ciudad.</p>
              </li>
              <li>
                <p>
                  <b>Ubicación Premium</b>, en la zona gastronómica más
                  importante de la ciudad, con vistas únicas al lago y
                  costanera. Zona más demandada tanto para Venta como Alquiler.
                </p>
              </li>
              <li>
                <p>
                  En el corazón de Villa Carlos Paz, el punto turístico más
                  solicitado del centro del país.
                </p>
              </li>
            </ul>
            <div className='text-center mt-3'>
              <Link href='/emprendimientos'>
                <a className='btn btn-primary'>Ver proyectos de inversion</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
