import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import contact from './contact.png';

import './contact.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqopyeo");
  if (state.succeeded) {
      return <p className='text-success text-center'>Thanks for Contacting Me! <br /> I will return for you as soon as possible </p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email' required />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}/>
        </Form.Group>
        <Form.Group controlId='message'>
            <Form.Label>Your message</Form.Label>
            <textarea className='form-control' name="message" id="message" cols="30" rows="10"></textarea>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}/>
        </Form.Group>
        <div className="container text-center m-2">
            <button className='btn btn-secondary' type="submit" disabled={state.submitting}>
                Submit
            </button>
        </div>
    </form>
  );
}

const ContactMe = () => {

 return (
    <div className="container">
        <div className="contact-box">
            <div className="card-body d-flex">
                <div className='text-center col-6'>
                    <h4>Have a question or want to collaborate?</h4> 
                    <p>Fill out the form below and let's get the conversation started!</p>
                    <div className="animation">
                        <img src={contact} alt="contact" style={{width:"20rem"}}/>
                    </div>
                </div>
                <div className="formulaire col-6 text-center">
                    <h5>Contact Me</h5>
                    <ContactForm/>  
                </div>
            </div>
        </div>
    </div>
 );
}

export default ContactMe;