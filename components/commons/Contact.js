import React from 'react';

export default function Contact() {
  return (
    <section className='contact'>
      <div className='text'>
        <div className='container'>
          <h2>Dejános tus datos y un asesor se comunicará a la brevedad</h2>
        </div>
      </div>
      <div className='form'>
        <div className='container'>
          <h1>¿Preguntas? Contacto</h1>
          <div className='info'>
            <div>ventas@venetoconstruccion.com.ar</div>
            <div>0810 777 8002 </div>
            <div>+54 358 4015 151</div>
            <div>
              <a href='/' className='btn btn-success'>
                Consultános
              </a>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <form>
                <div className='row mb-1'>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control '
                        type='text'
                        name='fname'
                        placeholder='Nombre'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control '
                        type='text'
                        name='lname'
                        placeholder='Apellido'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control '
                        type='text'
                        name='email'
                        placeholder='Email'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control '
                        type='text'
                        name='phone'
                        placeholder='Teléfono'
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='form-group'>
                      <textarea
                        className='form-control '
                        name='message'
                        id=''
                        rows='6'
                        placeholder='Consulta'
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button className='btn btn-primary'>Enviar mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
