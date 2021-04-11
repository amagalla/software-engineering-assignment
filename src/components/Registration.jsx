import { useState } from "react";
import "../styles/registration.scss";

const Registration = () => {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='registration-main-container'>
      <div className='registration-container'>
        <h1>Registration</h1>
        <form>
          <div>
            <p>First Name</p>
            <input
              type='text'
              name='firstname'
              value={register.nam}
              onChange={handleChange}
            />
            <p>Address</p>
            <input
              type='text'
              name='address'
              value={register.address}
              onChange={handleChange}
            />
            <p>City</p>
            <input
              type='text'
              name='city'
              value={register.city}
              onChange={handleChange}
            />
            <p>Country</p>
            <input
              type='text'
              name='country'
              value={register.counter}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Last Name</p>
            <input
              type='text'
              name='lastname'
              value={register.lastname}
              onChange={handleChange}
            />
            <p>Address 2 (Optional)</p>
            <input
              type='text'
              name='address2'
              value={register.address2}
              onChange={handleChange}
            />
            <p>State</p>
            <input
              type='text'
              name='state'
              value={register.state}
              onChange={handleChange}
            />
            <input type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
