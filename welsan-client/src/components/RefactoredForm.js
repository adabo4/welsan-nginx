import React, { useState } from 'react';
import axios from 'axios';
import './form2.css';

export default function RefactoredForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputFocus, setInputFocus] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });


  const axiosInstance = axios.create({ baseURl: process.env.REACT_APP_API_URL });

  const handleName = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handleMessage = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };

  const handleInputBlur = (fieldName) => {
    setInputFocus({
      ...inputFocus,
      [fieldName]: false,
    });
  };

  const handleInputFocus = (fieldName) => {
    setInputFocus({
      ...inputFocus,
      [fieldName]: true,
    });
  };




  const formSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.length >= 2 &&
      formData.email.includes('@') &&
      formData.message.trim() !== ''
    )

      setIsLoading(true);

    {


      axiosInstance
        .post('/api/forma', formData)
        .then((res) => {

          setSent(true);

          resetForm();

        })
        .catch((error) => {
          console.log('Message not sent :(');
          console.log(error);
          setErrorMessage('Správa nebola odoslaná :( ');
          resetForm();
        })
        .finally(() => {
          // Re-enable the submit button after the request is complete
          setIsLoading(false);
        });

    };

    const resetForm = () => {
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setSent(false);
        setErrorMessage('');
      }, 3000);
    };
  }

  return (
    <div>
      <>
        <div className="input-container">
          <form onSubmit={formSubmit} id="questions">
            <div className='input'>
              {errors.name && <p className="error">{errors.name}</p>}
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                required
                id="name"
                placeholder="Meno:"
                value={formData.name}
                onChange={handleName}
                name="message"
                onBlur={() => {
                  if (formData.name.length < 1) {
                    setErrors({
                      ...errors,
                      name: '*',
                    });
                  } else {
                    setErrors({
                      ...errors,
                      name: '',
                    });
                  }
                }}

              />

            </div>

            <div className='input'>
              {/* <label htmlFor="email">Email</label> */}
              {errors.email && <p className="error">{errors.email}</p>}
              <input
                type="email"
                id="email"
                placeholder="Email:"
                value={formData.email}
                onChange={handleEmail}
                name="message"
                onBlur={() => {
                  if (!formData.email.includes('@')) {
                    setErrors({
                      ...errors,
                      email: '*',
                    });
                  } else {
                    setErrors({
                      ...errors,
                      email: '',
                    });
                  }
                }}
                required
              />

            </div>
            <div className='input'>
              {/* <label htmlFor="message">Message</label> */}
              {errors.message && <p className="error">{errors.message}</p>}
              <textarea
                name="message"
                id="message"
                placeholder="Sem napíšte odkaz:"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleMessage}
                onBlur={() => {
                  if (formData.message.trim() === '') {
                    setErrors({
                      ...errors,
                      message: '*',
                    });
                  } else {
                    setErrors({
                      ...errors,
                      message: '',
                    });
                  }
                }}

                required
              />

            </div>

            <div className={sent ? 'msg msgAppear' : errorMessage ? 'error-msg' : 'msg'}>
              {sent ? 'Správa bola odoslaná!' : errorMessage || null}
            </div>
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Odosiela sa' : 'Odoslať'}
            </button>

          </form>
        </div>
      </>
    </div>
  );
}
