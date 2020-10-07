import { Link as Scroll } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import IconType from '@components/icons/IconType';
import IconTimer from '@components/icons/IconTimer';
import IconRentability from '@components/icons/IconRentability';

export default function Information(props) {
  const data = props.data;
  return (
    <section id='information' className='information'>
      <div className='container'>
        <div className='heading'>
          <div className='grid-container'>
            <div className='grid-item detail'>
              <div className='detail-body'>
                <h1>{data.title}</h1>
                <div className='text'>
                  <ReactMarkdown source={data.text} escapeHtml={true} />
                </div>
              </div>
              <div className='detail-footer'>
                <div>
                  <div className='price'>
                    <b>{data.price}</b> {data.observation}
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
                  {data.pdfUrl && (
                    <a
                      className='btn btn-outline-danger my-3 my-xl-0'
                      href={data.pdfUrl}
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
                  <div className='title'>{data.type}</div>
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
                  <div className='title'>{data.duration}</div>
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
                  <div className='title'>{data.rentability}</div>
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
          <div className='featured-title'>{data.featuredTitle}</div>
          <div className='featured-description'>{data.featuredDescription}</div>
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
          <img src={data.photo1} alt={data.title} />
          <img src={data.photo2} alt={data.title} />
          <img src={data.photo3} alt={data.title} />
        </div>
      </div>
    </section>
  );
}
