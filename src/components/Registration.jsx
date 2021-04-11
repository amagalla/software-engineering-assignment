import { useState } from "react";
import "../styles/registration.scss";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/users/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: register.firstname,
        lastname: register.lastname,
        address1: register.address,
        addresss2: register.address2,
        city: register.city,
        state: register.state,
        zip: register.zip,
        country: register.country,
      }),
    })
      .then((res) => {
        res.json();
        history.push("/confirmation");
      })
      .then((data) => console.log("good data", data))
      .catch((err) => {
        console.log("im in the catch err");
        console.log(err);
      });

    setRegister({
      firstname: "",
      lastname: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    });
  };

  return (
    <div className='registration-main-container'>
      <div className='registration-container'>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <p>First Name</p>
            <input
              type='text'
              name='firstname'
              value={register.firstname}
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
            <p>Zip</p>
            <input
              type='text'
              name='zip'
              value={register.zip}
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
            <p>Country (Only US)</p>
            <input
              type='text'
              name='country'
              value={register.country}
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
