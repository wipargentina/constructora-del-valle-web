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
        <h1>Razones para invertir en veneto</h1>
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
                      Materiales de última generación. Hall de ingreso de
                      vanguardia. Paseo Comercial.
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
                      ofrecer alta comodidad optimizando elconsumo de recursos y
                      aportando al ahorro y medio ambiente.
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
                    <div className='title'>Calidad</div>
                    <div className='text'>
                      Rentabilidad superior. Una inversión estratégica.
                      Excelente precio en relación al mercado. Grandes
                      descuentos inversionistas mayoristas. Excelentes retornos.
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
