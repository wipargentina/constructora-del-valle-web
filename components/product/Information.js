import { Link as Scroll } from 'react-scroll';
import ReactMarkdown from 'react-markdown';

export default function Information(props) {
  const data = props.data;
  return (
    <section id='information' className='information'>
      <div className='container'>
        <div className='grid-container'>
          <div className='grid-item detail'>
            <div className='detail-body'>
              <h1>{data.title}</h1>
              <div className='text'>
                <ReactMarkdown
                  source={data.text}
                  escapeHtml={true}
                  linkTargets='_blank'
                />
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
          <div className='grid-item featured'>
            <div className='featured-item'>
              <div className='featured-icon'>i</div>
              <div className='featured-body'>
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
            <div className='featured-item'>
              <div className='featured-icon'>i</div>
              <div className='featured-body'>
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
            <div className='featured-item'>
              <div className='featured-icon'>i</div>
              <div className='featured-body'>
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
    </section>
  );
}
