import React, { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        city: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        alert(
            `Name: ${formData.name}
Email: ${formData.email}
Age: ${formData.age}
City: ${formData.city}`
        );
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="age">Age:</label>
                <input
                    id="age"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="city">City:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>
        </>
    );
};

export default Form;