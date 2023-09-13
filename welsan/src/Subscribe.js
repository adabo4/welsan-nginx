// src/Subscribe.js
import React, { useState } from 'react';
import axios from "axios";


const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const axiosInstance = axios.create({ baseURl: process.env.REACT_APP_API_URL});


  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

    const handleSubmit = async ( event) => {
      event.preventDefault();   
      
      try {
        const response = await axiosInstance.post('/api/subscribe', {
          email,
        });
    
    
        if (response.status === 200) {
          
          console.log("Reponse status is: " + response.status);
          console.log("Data " + response.data.message);
      
          setSent(true);
          resetForm();
          setErrorMessage('');
          // Display the subscription message from the server
          setMessage(response.data.message);

          
      
        } else{
          const data = response.data;
          alert(data.error || 'Failed to subscribe. Please try again later.');
          console.log("This is error from Subscribe.js" + data.error);
          setMessage(''); // Clear any previous message
          setErrorMessage(data.error || response.data.message);
        }
        } catch (error) {
          console.log('Error:', error);
          setErrorMessage("Nepodarilo sa prihlásiť na odber noviniek.");
          resetForm(); 
          setMessage(''); // Clear any previous message
        
          
          
        } 


      
      }

      const resetForm = () => {
        setEmail('');

        setTimeout(() => {
          setSent(false);
          setErrorMessage('');
        }, 3000);
      };
    
    

   

  return (
    <div>
      <p>Dostávajte novinky</p>
   
      <form className='subscribe-form' onSubmit={handleSubmit }>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />


{/* <div className={sent ? 'msg msgAppear' : errorMessage ? 'error-msg' : 'msg'}>
              {sent ? 'Prihlásenie na odber bolo úspešné. Skontroluj si prosím mail.' : errorMessage || null}
              
            </div> */}
            {message && (
        <div className={sent ? 'msg msgAppear' : errorMessage ? 'error-msg' : 'msg'}>
          {message}
        </div>

      )}

      {/* Display the error message */}
      {errorMessage && (
        <div className="error-msg">
          {errorMessage}
        </div>
      )}
        <button className='btn-subscribe' type="submit">Subscribe</button>
        
      </form>
    </div>
  );
};

export default Subscribe;


