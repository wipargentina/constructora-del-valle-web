import React from 'react';

export default function Form() {
  return (
    <>
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
          <div className='col-md-6'>
            <div className='form-group'>
              <input
                className='form-control '
                type='text'
                name='email'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <input
                className='form-control '
                type='phone'
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
    </>
  );
}
