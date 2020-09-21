import React, {useState} from 'react'

const formFields = ['name', 'email', 'date']

export default function Form() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [date, setDate] = useState(null)
    return (
        <section className="contact">
            <form action="POST" className="form">
                {formFields.map(field => {
                    return (<section className="form__area">
                    <label htmlFor={field}>{field}</label>
                    <input type={field}/>
                    <p className="error"></p>
                </section>)
                })}
                
            </form>
        </section>
    )
}
