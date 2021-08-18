import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        // implement the change handler for our inputs and dropdown
        // pull the name and value of the input from the event object
        const name = evt.target.name;
        const value = evt.target.value;
        // use the `update` callback coming in through props
        update(name, value);
    }

    const onSubmit = evt => {
        // implement the submit handler
        // use preventDefault to prevent reloading the browser 
        evt.preventDefault();
        // use the `submit` callback coming in throught props
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name:
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        placeholder="Type in a username"
                        maxLength="30"
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        placeholder="Type in an email"
                        maxLength="50"
                        onChange={onChange}
                    />
                </label>
                <label>Role: 
                    <select 
                        value={values.role} 
                        name="role"
                        onChange={onChange}>
                            <option value=''>-- Select a Role --</option>
                            <option value='Software Developer'>Software Developer</option>
                            <option value='Software Engineer'>Software Engineer</option>
                            <option value='Web Developer'>Web Developer</option>
                            <option value='DevOps Developer'>DevOps Developer</option>
                            <option value='Front-end Developer'>Front-end Developer</option>
                            <option value='Back-end Developer'>Back-end Developer</option>
                            <option value='Full Stack Developer'>Full Stack Developer</option>
                        </select>
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}