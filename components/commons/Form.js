import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      message: '',
      location: '',
      tags: 'vivienda',
      subject: props.subject ? `Me interesa ${props.subject}` : '',
      isSended: false,
      isSending: false,
      isError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOptionChange(e) {
    this.setState({
      tags: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      isSending: true
    });

    axios
      .post('http://localhost:8080', this.state)
      .then((response) => {
        //console.log(response);
        if (response.status === 200) {
          window.location.assign('/gracias');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className='row mb-1'>
            <div className='col-sm-6'>
              <div className='form-group'>
                <input
                  className='form-control '
                  type='text'
                  name='fname'
                  placeholder='Nombre'
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group'>
                <input
                  className='form-control '
                  type='text'
                  name='location'
                  placeholder='Localidad'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group'>
                <input
                  className='form-control '
                  type='text'
                  name='subject'
                  placeholder='¿Cuál es tu tema de interés?'
                  value={this.state.subject}
                  onChange={this.handleChange}
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
                  placeholder='Consulta'
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <div className='col-12 mb-4'>
              <label className='mb-1'>
                ¿Qué finalidad quieres darle a tu Veneto?
              </label>
              <div className='tags'>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    className='custom-control-input'
                    type='radio'
                    name='tags'
                    id='tags-1'
                    value='vivienda'
                    onChange={this.handleOptionChange}
                    checked={this.state.tags === 'vivienda'}
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
                    onChange={this.handleOptionChange}
                    value='inversor'
                    checked={this.state.tags === 'inversor'}
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
      </>
    );
  }
}

export default Form;
