import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './emailjsform.css';

export default function EmailJSForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const [sent, setSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const [errors, setErrors] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const form = React.createRef();

    const handleName = (e) => {
        setFormData({
            ...formData,
            name: e.target.value,
        });
    }

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
    const handleNumber = (e) => {
        setFormData({
            ...formData,
            number: e.target.value,
        });

    };


    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            number: '',
            message: '',
        });

        setTimeout(() => {
            setSent(false);
            setErrorMessage('');
        }, 3000);
    };

    const formSubmit = (e) => {
        e.preventDefault();

        if (
            formData.name.length >= 2 &&
            formData.email.includes('@') &&
            formData.message.trim() !== ''
        ) {
            setIsLoading(true);

            const templateParams = {
                from_name: formData.name,
                to_name: 'infowelsan@gmail.com',
                subject: `Message from ${formData.name}`,
                message: formData.message,
                user_email: formData.email,
                contact_number: formData.number
            };

            emailjs.send('service_i3j4zf8', 'template_kfz3q6j', templateParams, '8e0x-teEx9zwXPXt1')
                .then((result) => {
                    setSent(true);
                    resetForm();
                })
                .catch((error) => {
                    console.log('Email not sent :(');
                    console.log(error);
                    setErrorMessage('Správa nebola odoslaná :( ');
                    resetForm();
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } if (
            formData.name === ""
        ) {
            setErrorMessage("Prosím vyplňte povinné polia *");
            setErrors({ ...errors, name: "*" })

        } if (formData.email === "") {
            setErrorMessage("Prosím vyplňte povinné polia *");
            setErrors({ ...errors, email: "*" })
        }
        if (formData.message === "") {
            setErrorMessage("Prosím vyplňte povinné polia *");
            setErrors({ ...errors, message: "*" })
        }
    };

    return (
        <div>
            <div className="input-container">
                <form ref={form} onSubmit={formSubmit} id="questions">
                    <div className='input'>
                        {errors.name && <p className="error">{errors.name}</p>}
                        {/* <label htmlFor="name">Name</label> */}
                        <input
                            type="text"
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
                                if (isValidEmail(formData.email) === false) {
                                    setErrors({
                                        ...errors,
                                        email: '* Prosím zadajte platný formát mailu.',
                                    });
                                } else {
                                    setErrors({
                                        ...errors,
                                        email: '',
                                    });
                                }
                            }}

                        />

                    </div>

                    <div className='input'>
                        {errors.number && <p className="error">{errors.number}</p>}
                        <input
                            type="text"
                            id="phone_number"
                            placeholder="Telefónne číslo:"
                            value={formData.number}
                            onChange={handleNumber}
                            onBlur={() => {
                                if (!/^[0-9]*$/.test(formData.number)) {
                                    setErrors({
                                        ...errors,
                                        number: "Prosím vyplňte iba čísla."
                                    })
                                } else {
                                    setErrors({
                                        ...errors,
                                        number: '',
                                    });
                                }
                            }}
                            name="message"
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
        </div>
    );
}
