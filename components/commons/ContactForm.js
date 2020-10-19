import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ContactForm = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [tags, setTags] = useState('vivienda');
  const [subject, setSubject] = useState(
    props.subject ? `Me interesa ${props.subject}` : ''
  );
  const router = useRouter();

  //console.log(fname);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(fname);
    const data = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
      location: location,
      tags: tags,
      subject: subject
    };
    axios
      .post('http://localhost:8080', data)
      .then((res) => {
        console.log(data);
        console.log(res);
        if (res.status === 200) {
          //window.location.assign('/gracias');
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
                className='form-control'
                type='text'
                placeholder='Nombre'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Apellido'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Teléfono'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Localidad'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Interes'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div className='col-12'>
            <div className='form-group'>
              <textarea
                className='form-control '
                name='message'
                id=''
                rows='6'
                placeholder='Comentario'
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='col-12 mb-3'>
            <div className='form-group'>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  className='custom-control-input'
                  type='radio'
                  name='tags'
                  id='tags-1'
                  value='vivienda'
                  onChange={(e) => setTags(e.target.value)}
                  checked={tags === 'vivienda'}
                />
                <label className='custom-control-label' htmlFor='tags-1'>
                  Quiero Vivir
                </label>
              </div>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  className='custom-control-input'
                  type='radio'
                  name='tags'
                  id='tags-2'
                  onChange={(e) => setTags(e.target.value)}
                  value='inversor'
                  checked={tags === 'inversor'}
                />
                <label className='custom-control-label' htmlFor='tags-2'>
                  Quiero Invertir
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className='btn btn-primary'>Enviar mensaje</button>
      </form>
    </div>
  );
};

export default ContactForm;
