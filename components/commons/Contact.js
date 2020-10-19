import IconPhone from '@components/icons/IconPhone';
import IconEmail from '@components/icons/IconEmail';
import IconWhatsapp from '@components/icons/IconWhatsapp';
import Form from './Form';
import ContactForm from './ContactForm';

export default function Contact(props) {
  const subject = props.subject;
  const tags = props.tags;
  return (
    <section id='contact' className='contact'>
      <div className='text'>
        <div className='container'>
          <h2>Dejános tus datos y un asesor se comunicará a la brevedad</h2>
        </div>
      </div>
      <div className='form'>
        <div className='container'>
          <h1>¿Preguntas? Contacto</h1>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='info'>
                <div className='info-item'>
                  <IconEmail />
                  <span>ventas@venetoconstruccion.com.ar</span>
                </div>
                <div className='info-item'>
                  <IconPhone />
                  <span>0810 777 8002</span>
                </div>
                <div className='info-item'>
                  <IconWhatsapp />
                  <span>+54 358 4015 151</span>
                </div>
                <div className='info-item'>
                  <a
                    href='https://wa.me/543533456232'
                    className='btn btn-success'
                  >
                    <IconWhatsapp />
                    Consultanos
                  </a>
                </div>
              </div>
              {/* <Form subject={subject} tags={tags} /> */}
              <ContactForm subject={subject} tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
