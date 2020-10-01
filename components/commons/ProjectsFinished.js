import Link from 'next/link';
import data from '../../data/ventures.json';

export default function ProjectsFinished() {
  const projects = data.data;
  return (
    <section className='projects-finished'>
      <div className='container'>
        <h1 className='mb-5'>Edificios terminados y entregados</h1>
        <div className='row'>
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              {project.status == 'finished' && (
                <div className='col-lg-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>{project.title}</h4>
                      <p className='card-units small'>{project.units}</p>
                      <p className='card-address small'>
                        {project.address}{' '}
                        {project.address && project.address && '-'}{' '}
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <Link href='/proyectos-terminados'>
          <a className='btn btn-primary'>Ver imágenes y detalle</a>
        </Link>
      </div>
    </section>
  );
}
