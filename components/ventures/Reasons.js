import React from 'react';
import IconCloud from '../icons/IconCloud';
import IconDesign from '../icons/IconDseign';
import IconLeave from '../icons/IconLeave';
import IconRentability from '../icons/IconRentability';
import IconShiled from '../icons/IconShiled';
import IconQuality from '../icons/IconQuality';

export default function Reasons() {
  return (
    <div className='reasons'>
      <div className='container'>
        <h1>Razones para elegir veneto</h1>
        <div className='row mb-5'>
          <div className='col-md-11'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='icon'>
                      <IconShiled />
                    </div>
                    <div className='title'>Seguridad</div>
                    <div className='text'>
                      Sistema de seguridad por cámaras. Ingeniería Estructural a
                      cargo de expertos. Edificio acogido a nuevas normas
                      sísmicas.
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='icon'>
                      <IconDesign />
                    </div>
                    <div className='title'>Diseño</div>
                    <div className='text'>
                      Desarrollos con el respaldo de un equipo
                      interdisciplinario de profesionales y empresas de primera
                      línea en el país. Arte, Confort, Diseño y Calidad,
                      confluyen para generar un producto diferente.
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='icon'>
                      <IconCloud />
                    </div>
                    <div className='title'>Comodidad</div>
                    <div className='text'>
                      Espacios amplios y luminosos. Amenities exclusivos. <br />
                      Ubicación y Vistas privilegiadas. Bar Café con atención
                      exclusiva a propietarios en terraza y servicio a la
                      habitación.
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='icon'>
                      <IconLeave />
                    </div>
                    <div className='title'>Eco-eficiente</div>
                    <div className='text'>
                      Incorporando nuevas tecnologías y materiales capaces de
                      ofrecer alta comodidad optimizando el consumo de recursos
                      y aportando al ahorro y medio ambiente.
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='icon'>
                      <IconRentability />
                    </div>
                    <div className='title'>Rentabildiad</div>
                    <div className='text'>
                      Rentabilidad superior. Una inversión estratégica. <br />
                      Excelente precio en relación al mercado. Grandes
                      descuentos inversionistas mayoristas. Excelentes retornos.
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='icon'>
                      <IconQuality />
                    </div>
                    <div className='title'>Calidad Constructiva</div>
                    <div className='text'>
                      Cada espacio interior está diseñado para asegurar tu
                      confort y comodidad, las terminaciones han sido
                      seleccionadas de acuerdo a los más altos estándares de
                      calidad. Servicios conectados al edificio y un
                      equipamiento de primer nivel te brindarán una sensación
                      única de comodidad.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
