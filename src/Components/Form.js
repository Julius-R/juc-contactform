import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Form() {
    const [isOpen, setisOpen] = useState(false)
    const { register, errors, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(`https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users`, { ...data })
      .then(res => {
        setisOpen(true)
        reset();
        setTimeout(() => setisOpen(false), 2000)
      })
    }

    return (
        <section className="contact">
            <section className="notification" id={isOpen && "slide-bottom"}>
                <p>Successfully Submitted!</p>
            </section>
            <form action="POST" className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title">Contact Us</h1>
                <section className="form__area">
                    <label htmlFor="name">Name</label>
                    <input name="name" ref={register({required: true})} />
                    {errors.name && <p className="error">This field can not be left blank.</p>}
                </section>
                <section className="form__area">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" ref={register({required: true})} />
                    {errors.email && <p className="error">This field can not be left blank.</p>}
                </section>
                <section className="form__area">
                    <label htmlFor="birthDate">Birth Date</label>
                    <input type="date" name="birthDate" ref={register} />
                </section>
                <section className="form__area check"> 
                    <input type="checkbox" name="emailConsent" ref={register} />
                    <p>I agree to be contacted via email.</p>
                </section>
                <section className="form__area btns"> 
                    <input id="clear" type="reset" value="Clear" />
                    <input id="submit" type="submit" value="Submit" />
                </section>
            </form>
        </section>
    )
}
