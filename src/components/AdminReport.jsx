import { useState, useEffect } from "react";

import "../styles/adminreport.scss";

const AdminReport = () => {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    fetch("users/registration")
      .then((res) => res.json())
      .then((data) => setRegisters(data))
      .catch((err) => {
        console.log(err);
      });
  });

  const result = registers.map((element, i) => (
    <tr key={i}>
      <td>{element.firstname}</td>
      <td>{element.lastname}</td>
      <td>{element.address1}</td>
      <td>{element.address2}</td>
      <td>{element.city}</td>
      <td>{element.state}</td>
      <td>{element.zip}</td>
      <td>{element.country}</td>
      <td>{element.date.slice(0, 10)}</td>
    </tr>
  ));

  return (
    <div className='admin-main-container'>
      <div className='admin-container'>
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address1</th>
              <th>Address2</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Country</th>
              <th>Date</th>
            </tr>
            {result}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReport;
