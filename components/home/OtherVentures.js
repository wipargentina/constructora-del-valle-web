import Link from 'next/link';
import data from '../../data/ventures.json';

export default function OtherVentures() {
  const ventures = data.data;
  return (
    <section className='other-ventures'>
      <div className='container'>
        <h1 className='mb-5'>Otros Emprendimientos</h1>
        <div className='row'>
          {ventures.map((venture, index) => (
            <React.Fragment key={index}>
              {venture.status == 'finished' && (
                <div className='col-lg-6'>
                  <Link href={venture.url ? `${venture.url}` : '/'}>
                    <a className='card'>
                      <div className='card-body'>
                        <div className='card-title'>
                          {venture.title} <small>{venture.location}</small>
                        </div>
                        <div className='card-text'>{venture.summary}</div>
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
