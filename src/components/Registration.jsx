import "../styles/registration.scss";

const Registration = () => {
  return (
    <div className='registration-main-container'>
      <div className='registration-container'>
        <h1>Registration</h1>
        <form>
          <div>
            <p>First Name</p>
            <input type='text' />
            <p>Address</p>
            <input type='text' />
            <p>City</p>
            <input type='text' />
            <p>Country</p>
            <input type='text' />
          </div>
          <div>
            <p>Last Name</p>
            <input type='text' />
            <p>Address 2 (Optional)</p>
            <input type='text' />
            <p>State</p>
            <input type='text' />
            <input type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
