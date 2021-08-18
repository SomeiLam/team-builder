import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import uuid from 'react-uuid'

import './App.css';


const initialFormValues = {
  username: '',
  email: '',
  role: '',
  id: ''
}

function App() {
  const [members, setMembers] = useState([]);

  // Stretch


  // state to hold all values of the form
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(null);

  // implement a "form state updater" which will be used inside the inputs' `onChange` handler
  const updateForm = (inputName, inputValue) => {
    console.log('updateForm: ', inputName, inputValue);
    setFormValues({...formValues, [inputName]: inputValue});
  }

  // implement a submit function which will be used inside the form's own `onSubmit`
  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      id: uuid()
    }
    // prevent further action if either username or email or role is empty string after trimming
    if (!newMember.username || !newMember.email || !newMember.role) {
      setError("Please fill out all the boxes");
      return;
    }
    // update members state
    setMembers([newMember, ...members]);
    // clear from
    setFormValues(initialFormValues);
    // clear error message
    setError("");
  }

  useEffect(() => {

  })

  return (
    <div className="App">
      <h1>Simple Form App!</h1>
      <h3 className="error">{error}</h3>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      <div>
        {
          members.map(member => {
            // console.log(member.username, member.id)
            return (
              <div className='member container' key={member.id}>
                <h2>{member.username}</h2>
                <p>Email: {member.email}</p>
                <p>Role: {member.role}</p>

              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

