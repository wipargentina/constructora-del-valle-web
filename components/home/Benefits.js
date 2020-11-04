import Link from 'next/link';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className='container'>
        <h1>¿Por qué invertir en Veneto?</h1>
        <div className='row justify-content-center'>
          <div className='col-xl-8 mt-3'>
            <ul>
              <li>
                <p>
                  Precio de compra diferencial en relación precio, calidad y
                  ubicación en m2 por debajo del mercado.
                </p>
              </li>
              <li>
                <p>
                  Compra de contado, con importantes descuentos, y que genera un
                  ahorro del ajuste por ICC.
                </p>
              </li>
              <li>
                <p>Revalorización de la zona.</p>
              </li>
              <li>
                <p>
                  Obra en proceso de construcción con planos y habilitaciones
                  aprobadas
                </p>
              </li>
              <li>
                <p>
                  Selección de unidades de 50m² a 87m² propios habitables y
                  libres de muro + Balcón + Cochera + Metros Comunes, factor que
                  facilita la posterior venta y deﬁenden mejor el valor por m².
                </p>
              </li>
              <li>
                <p>
                  La venta futura con las unidades terminadas permitirá defender
                  el valor de inversión, maximizando el retorno de la misma.
                </p>
              </li>
              <li>
                <p>
                  Ediﬁcio con características de Arte, Confort, Diseño y Calidad
                  que lo convierten en un producto diferente y único.
                </p>
              </li>
              <li>
                <p>
                  Ubicación estratégica con accesos rápidos para vehículos,
                  además de una explanada peatonal, el paseo comercial FONTANA
                  DI VENETO y una cafetería de calidad que jerarquiza el
                  producto.
                </p>
              </li>
              <li>
                <p>Zona de mayor seguridad en toda la ciudad.</p>
              </li>
              <li>
                <p>
                  Ubicación Premium, en una de las zonas gastronómicas más
                  importante de Villa Carlos Paz, con vistas únicas al lago y
                  costanera. Zona más demandada tanto para renta como uso.
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
                <a className='btn btn-primary'>Ver proyectos de inversión</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
