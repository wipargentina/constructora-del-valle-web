import Link from 'next/link';

import data from '../../data/ventures.json';

export default function OurVentures() {
  const ventures = data.data;
  return (
    <section id='our-ventures' className='our-ventures'>
      <div className='container'>
        <h1 className='soft mb-5'>Nuestros Emprendimientos</h1>
        <div className='row'>
          {ventures.map((venture, index) => (
            <React.Fragment key={index}>
              {venture.status == 'active' && (
                <div className='col-md-6 col-lg-4'>
                  <Link href={`${venture.url}`}>
                    <a className='card'>
                      <div className='card-header'>
                        <img
                          className='card-image'
                          src={venture.image}
                          alt={venture.title}
                          loading='lazy'
                        />
                        {/* <div className='card-badge'>
                          <div className={`${venture.badge}`}>
                            {venture.badgeText}
                          </div>
                        </div> */}
                        <div className='card-info'>
                          {venture.logo && (
                            <>
                              <div className='card-logo'>
                                <img src={venture.logo} alt='logo' />
                              </div>
                            </>
                          )}
                          <div className='card-badge'>
                            <div className={`${venture.badge}`}>
                              {venture.badgeText}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card-body'>
                        <div className='card-title'>{venture.title}</div>
                        <div className='card-text'>{venture.location}</div>
                      </div>
                    </a>
                  </Link>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
