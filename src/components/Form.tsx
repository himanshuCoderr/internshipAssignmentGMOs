import  { useState, ChangeEvent, FormEvent } from 'react';
import { TextField } from '@mui/material';
import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button/Button';
import './Form.css';
import {useNavigate} from 'react-router-dom'

interface FormData {
  userName: string;
  userPhone: string;
  userEmail: string;
}

function Form() {
const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    userName: '',
    userPhone: '',
    userEmail: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if all required fields are filled
    const { userName, userPhone, userEmail } = formData;
    if (userName === '' || userPhone === '' || userEmail === '') {
      alert('Please fill all required fields.');
    } else {
      // Save form data to local storage here
      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Form data saved successfully!');
      navigate('/data')
    }

  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Form</h1>
      <div className="input-container">
        <InputLabel htmlFor="userName" className="label">
          User Name
        </InputLabel>
        <TextField
          id="userName"
          type="text"
          required
          value={formData.userName}
          onChange={handleInputChange}
          fullWidth
        />
      </div>
      <div className="input-container">
        <InputLabel htmlFor="userPhone" className="label">
          Phone Number
        </InputLabel>
        <TextField
          id="userPhone"
          type="text"
          required
          value={formData.userPhone}
          onChange={handleInputChange}
          fullWidth
        />
      </div>
      <div className="input-container">
        <InputLabel htmlFor="userEmail" className="label">
          Email
        </InputLabel>
        <TextField
          id="userEmail"
          type="email"
          // required
          value={formData.userEmail}
          onChange={handleInputChange}
          fullWidth
        />
      </div>
      <Button
        type="submit"
        className="submit-button"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
