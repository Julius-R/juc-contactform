import React, {useState} from 'react'


const formFields = ['name', 'email', 'date']

export default function Form() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [date, setDate] = useState(null)

    const submitForm = (e) => {
        e.preventDefault()
        console.log(name, email, date)
    }
    const checkBlank = (field) => {

    };
    const updateField = (field) => {
        const val = event.target.value
        switch(field) {
            case "name":
                setName(val)
                break;
            case "email":
                setEmail(val)
                break;
            case "date":
                setDate(val)
                break;
            default:
                break;
        }
    }
    return (
        <section className="contact">
            <form action="POST" className="form" onSubmit={submitForm}>
                {formFields.map(field => {
                    return (
                        <section className="form__area">
                        <label htmlFor={field}>{field}</label>
                        <input type={field} onChange={() => updateField(field)} />
                        {field != "date" ? <p className="error">This field can not be left blank.</p> : null}
                        </section>
                    )
                })}
                <button>Submit</button>
            </form>
        </section>
    )
}
