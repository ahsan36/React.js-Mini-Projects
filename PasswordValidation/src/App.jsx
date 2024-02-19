import React, { useState } from 'react'
import './App.css'

const App = () => {
  // Define state variables for form input and errors
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle user input change for form fields
  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  // Validate the form input when the user submits the form
  const validateFromInput = (event) => {
    event.preventDefault();

    // Initialize an object to track input errors
    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Check if email and password are empty
    if(!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter a valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    // Check if email is empty
    if(!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter a valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    // Check if password and confirm password match
    if(!formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be the same",
      });
      return;
    }
    
    // Check if password is empty
    if(!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    // Clear any previous errors and show success message
    setFormError(inputError);
    setFormInput((prevState) => ({
      ...prevState,
      successMessage: "Validation Success",
    }));
  };
  
  return (
    <div>
      Password Validation
    </div>
  )
}

export default App
