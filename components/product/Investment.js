import IconType from '@components/icons/IconType';
import IconTimer from '@components/icons/IconTimer';
import IconRentability from '@components/icons/IconRentability';

export default function Investemt(props) {
  const investment = props.investment;
  return (
    <section id='investment' className='investment'>
      <div className='container'>
        <h1>¿Cómo es la inversión?</h1>
        <p>
          Te aclaramos todo lo que necesitas saber de como es la inversión en
          VENETO VIII
        </p>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='card-icon'>
                      <IconType />
                    </div>
                    <div className='card-subtitle'>Tipo</div>
                    <div className='card-title'>{investment.type}</div>
                    <div className='card-divider'></div>
                    <div className='card-description'>
                      {investment.typeDescription}
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card-icon'>
                      <IconTimer />
                    </div>
                    <div className='card-subtitle'>Duración</div>
                    <div className='card-title'>{investment.duration}</div>
                    <div className='card-divider'></div>
                    <div className='card-description'>
                      {investment.durationDescription}
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card-icon'>
                      <IconRentability />
                    </div>
                    <div className='card-subtitle'>Rentabilidad</div>
                    <div className='card-title'>{investment.rentability}</div>
                    <div className='card-divider'></div>
                    <div className='card-description'>
                      {investment.rentabilityDescription}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
