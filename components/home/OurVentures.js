import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function OurVentures() {
  const [ventures, setVentures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/ventures')
      .then((res) => res.json())
      .then(setVentures);
  }, []);

  return (
    <section className='our-ventures'>
      <div className='container'>
        <h1 className='soft mb-5'>Nuestros Emprendimientos</h1>
        <div className='row'>
          {ventures.map((venture) => (
            <div className='col-md-6 col-lg-4'>
              <Link href={`${venture.url}`}>
                <a className='card'>
                  <div className='card-header'>
                    <img className='card-image' src={venture.image} alt='' />
                    <div className='card-badge'>
                      <div className={`${venture.badge}`}>
                        {venture.badgeText}
                      </div>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='card-title'>{venture.title}</div>
                    <div className='card-text'>Villa Carlos Paz</div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
