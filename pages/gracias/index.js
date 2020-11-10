import Head from 'next/head';
import OurVentures from '@components/home/OurVentures';
import ProjectsFinished from '@components/commons/ProjectsFinished';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';

export default function index() {
  return (
    <div>
      <Head>
        <title>Gracias</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='tanks'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <h1>¡Muchas gracias por contactarte!</h1>
              <h4>Tu información ya fue asignada a nuestros representantes.</h4>
              <p>
                Realmente apreciamos tu interés en completar el formulario y
                dejarnos tus datos. <br /> En breve nos pondremos en contacto, a
                fin de suministrarte más información sobre tu consulta.
              </p>

              <h3>
                Te invitamos a que conozcas todos nuestros emprendimientos
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='home'>
        <OurVentures />
        <ProjectsFinished />
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}
