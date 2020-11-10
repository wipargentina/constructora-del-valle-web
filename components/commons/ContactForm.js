import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ContactForm = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState(
    props.subject ? `Me interesa saber más sobre ${props.subject}` : ''
  );
  const [finalidad, setFinalidad] = useState('vivienda');
  const [sending, setSending] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);

    const data = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
      location: location,
      state: state,
      finalidad: finalidad
    };

    //console.log(data);

    axios
      .post('https://test.veneto.constructoradelvalle.com/landing/api', data)
      .then((res) => {
        //console.log(data);
        console.log(res);
        if (res.status === 200) {
          window.location.assign('/gracias');
          //console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                name='fname'
                className='form-control'
                type='text'
                placeholder='Nombre'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                name='lname'
                className='form-control'
                type='text'
                placeholder='Apellido'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                name='email'
                className='form-control'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                name='phone'
                className='form-control'
                type='text'
                placeholder='Teléfono'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                name='location'
                className='form-control'
                type='text'
                placeholder='Localidad'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                name='state'
                className='form-control'
                type='text'
                placeholder='Provincia'
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className='col-12 mb-3'>
            <div className='form-group'>
              <textarea
                name='message'
                className='form-control '
                id=''
                rows='6'
                placeholder='¿Qué tema te interesa?'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='col-12 mb-3'>
            <label className='mb-1'>
              ¿Qué finalidad quieres darle a tu depto.?
            </label>
            <div className='form-group'>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  className='custom-control-input'
                  type='radio'
                  name='finalidad'
                  id='vivienda'
                  value='vivienda'
                  onChange={(e) => setFinalidad(e.target.value)}
                  checked={finalidad === 'vivienda'}
                />
                <label className='custom-control-label' htmlFor='vivienda'>
                  Quiero Vivir
                </label>
              </div>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  className='custom-control-input'
                  type='radio'
                  name='finalidad'
                  id='inversor'
                  onChange={(e) => setFinalidad(e.target.value)}
                  value='inversor'
                  checked={finalidad === 'inversor'}
                />
                <label className='custom-control-label' htmlFor='inversor'>
                  Quiero Invertir
                </label>
              </div>
            </div>
          </div>
        </div>
        {!sending ? (
          <button className='btn btn-primary'>Enviar mensaje</button>
        ) : (
          <div>enviando...</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
