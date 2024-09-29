import React, { Component } from 'react'
import axios from "axios"
import "./form.css";

export default class Form extends Component {


    state = {
        name: '',
        email: '',
        message: '',
        sent: false
    }


    handleName=(e)=>{
        this.setState({
           name: e.target.value
        })

    }

    handleEmail=(e)=>{
        this.setState({
            email: e.target.value
        
        })
        console.log(e.target.value);
    }

    handleMessage=(e)=>{
        this.setState({
            message: e.target.value
        })
    }

    formSubmit=(e)=>{
        e.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post("/api/forma", data)
        .then(res=> {
            this.setState({
                sent:true,

            },this.resetForm())
        }).catch(()=> {
            console.log("Message not sent:(");
        })
    }

    resetForm=()=>{
        this.setState({
            name: '',
            email: '',
            message: ''
        })

        setTimeout(()=> {
            this.setState({
                sent: false,
            })
        }, 3000)
    }


  render() {
    return (
      <div>
        <>
            <div className="input-container">
                <form onSubmit={this.formSubmit} id="questions">
                    <input 
                    type="text" 
                    required 
                    id="name" 
                    placeholder="Meno:" 
                    value={this.state.name}
                    onChange={this.handleName}
                    name="message" />
                    
                    <input 
                    type="text" 
                    id="email" 
                    placeholder="Email:" 
                    value={this.state.email}
                    onChange={this.handleEmail}
                    name="message" />
                    
                    <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Sem napíšte odkaz:" 
                    cols="30" rows="10" 
                    value={this.state.message}
                    onChange={this.handleMessage}
                     >
                    </textarea>

                    <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Správa bola odoslaná!</div>
                    <button type="submit" className="submit-btn">Odoslať</button>

                </form>
            </div>
        </>
        
      </div>
    )
  }
}
