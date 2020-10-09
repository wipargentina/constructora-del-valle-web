import Head from 'next/head';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';

import data from '../../data/ventures.json';

export default function ProyectosTerminados() {
  const projects = data.data;
  return (
    <div>
      <Head>
        <title>Proyectos Terminados</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='projects-finished mb-5'>
        <div className='container'>
          <h1 className='text-center my-5'>Proyectos terminados</h1>
          <div className='row'>
            {projects.map((project, index) => (
              <React.Fragment key={index}>
                {project.status == 'finished' && project.visible && (
                  <div className='col-md-3'>
                    <div className='card page'>
                      <img
                        src={project.image}
                        alt='image'
                        className='card-img-top'
                      />
                      <div className='card-body'>
                        <h5 className='card-title'>{project.title}</h5>
                        <div className='card-units'>{project.units}</div>
                        {project.typologies && (
                          <div className='card-typologies'>
                            {project.typologies}
                          </div>
                        )}
                        {project.amenities && (
                          <div className='card-amenities'>
                            <b>Amenities</b> <br />
                            {project.amenities}
                          </div>
                        )}
                        <div className='card-address'>
                          <b>Dirección</b> <br />
                          {project.address}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <div className='commons'>
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}
