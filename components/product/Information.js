import { Link as Scroll } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import IconType from '@components/icons/IconType';
import IconTimer from '@components/icons/IconTimer';
import IconRentability from '@components/icons/IconRentability';
import ButtonMoreInformation from './ButtonMoreInformation';

export default function Information(props) {
  const information = props.information;
  const investment = props.investment;
  const status = props.status;
  return (
    <section id='information' className='information'>
      <div className='container'>
        <div className='heading'>
          <div className='grid-container'>
            <div className='grid-item detail'>
              <div className='detail-body'>
                <h1>{information.title}</h1>
                <div className='text'>
                  <ReactMarkdown source={information.text} escapeHtml={true} />
                </div>
              </div>
              <div className='detail-footer'>
                <div>
                  <div className='price'>
                    <b>{information.price}</b> {information.observation}
                  </div>
                  <ButtonMoreInformation status={status} />
                </div>
                <div>
                  {information.pdfUrl && (
                    <a
                      id={`pdf`}
                      className='btn btn-outline-danger my-3 my-xl-0'
                      href={information.pdfUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Descargar PDF
                    </a>
                  )}
                  <Scroll
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={599}
                    className='btn btn-primary ml-sm-3'
                  >
                    Consulta inmediata
                  </Scroll>
                </div>
              </div>
            </div>
            <div className='grid-item investment'>
              <div className='investment-item'>
                <div className='investment-icon'>
                  <IconType />
                </div>
                <div className='investment-body'>
                  <div className='subtitle'>Tipo</div>
                  <div className='title'>{investment.type}</div>
                  <ButtonMoreInformation status={status} />
                </div>
              </div>
              <div className='investment-item'>
                <div className='investment-icon'>
                  <IconTimer />
                </div>
                <div className='investment-body'>
                  <div className='subtitle'>{investment.durationTitle}</div>
                  <div className='title'>{investment.duration}</div>
                  <ButtonMoreInformation status={status} />
                </div>
              </div>
              <div className='investment-item'>
                <div className='investment-icon'>
                  <IconRentability />
                </div>
                <div className='investment-body'>
                  <div className='subtitle'>{investment.rentabilityTitle}</div>
                  <div className='title'>{investment.rentability}</div>
                  <ButtonMoreInformation status={status} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='featured'>
          <div className='featured-title'>{information.featuredTitle}</div>
          <div className='featured-description'>
            {information.featuredDescription}
          </div>
          <div className='featured-link'>
            <ButtonMoreInformation status={status} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='gallery'>
          <img src={information.photo1} alt={information.title} />
          <img src={information.photo2} alt={information.title} />
          <img src={information.photo3} alt={information.title} />
        </div>
      </div>
    </section>
  );
}
