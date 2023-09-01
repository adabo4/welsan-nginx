// src/Subscribe.js
import React, { useState } from 'react';


const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async ( event) => {
    event.preventDefault();

    // TODO: Add form validation here if needed

    // const subscribe = async ({email}) => {
    //     const response = await fetch(`/api/subscribe`);
    // }}
    
    // try {
    //     const FORM_ID = "5466080";
    //     const API_KEY = "XMuxTFQ8FFYE-4zTF1EEQw";
    //     const API_URL = "https://api.convertkit.com/v3/forms/5466080/subscribe";

    //     const data ={
    //         email,
    //         api_key: API_KEY
    //     };

    //     const response = await fetch(`${API_URL}`, {
    //       body: JSON.stringify(data),
    //       headers: { "Content-Type": "application/json"},
    //       method: "POST"
    //     });

    //     if (response.status >= 400){
    //         return response.status(400).json("There was an error")
    //     }

    //     return response.status(200).json({error: ''})

    // }catch(error){

    //     console.error('Error:', error);
    //     alert('An error occurred. Please try again later.');

    // };

    try {
        const response = await fetch('/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (response.ok) {
          setSent(true);
          resetForm();
        }     
        else  {
          const data = await response.json();
          alert(data.error || 'Failed to subscribe. Please try again later.');
    
        } 
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage("Nepodarilo sa prihlásiť na odber noviniek.");
         resetForm(); 
      
        
        
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


<div className={sent ? 'msg msgAppear' : errorMessage ? 'error-msg' : 'msg'}>
              {sent ? 'Prihlásenie na odber bolo úspešné. Skontroluj si prosím mail.' : errorMessage || null}
            </div>
        <button className='btn-subscribe' type="submit">Subscribe</button>
        
      </form>
    </div>
  );
};

export default Subscribe;


