import { Link as Scroll } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import IconType from '@components/icons/IconType';
import IconTimer from '@components/icons/IconTimer';
import IconRentability from '@components/icons/IconRentability';

export default function Information(props) {
  const information = props.information;
  const investment = props.investment;
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
                  <Scroll
                    to='investment'
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={599}
                    className='link-sm'
                  >
                    + informacion
                  </Scroll>
                </div>
                <div>
                  {information.pdfUrl && (
                    <a
                      className='btn btn-outline-danger my-3 my-xl-0'
                      href={information.pdfUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Descargar PDF
                    </a>
                  )}
                  <a href='' className='btn btn-primary ml-sm-3'>
                    Consulta inmediata
                  </a>
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
                  <Scroll
                    to='investment'
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={599}
                    className='link-sm'
                  >
                    + informacion
                  </Scroll>
                </div>
              </div>
              <div className='investment-item'>
                <div className='investment-icon'>
                  <IconTimer />
                </div>
                <div className='investment-body'>
                  <div className='subtitle'>Duración</div>
                  <div className='title'>{investment.duration}</div>
                  <Scroll
                    to='investment'
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={599}
                    className='link-sm'
                  >
                    + informacion
                  </Scroll>
                </div>
              </div>
              <div className='investment-item'>
                <div className='investment-icon'>
                  <IconRentability />
                </div>
                <div className='investment-body'>
                  <div className='subtitle'>Rentabilidad</div>
                  <div className='title'>{investment.rentability}</div>
                  <Scroll
                    to='investment'
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={599}
                    className='link-sm'
                  >
                    + informacion
                  </Scroll>
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
            <Scroll
              to='investment'
              spy={true}
              smooth={true}
              offset={-170}
              duration={599}
              className='link-sm'
            >
              + informacion
            </Scroll>
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
