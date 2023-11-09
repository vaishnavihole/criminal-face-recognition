import React from 'react';
import './CriminalForm.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const CriminalForm = () => {
  return (
    <>
    <Navbar />
    <div className="form-container">
      <h2>Criminal Information Form</h2>
      <form>
        <div className='form-container-2'>
        <div className="form-section">
          <div className="form-group">
            <label>Criminal ID:</label>
            <input type="text" name="criminalId" />
          </div>

          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" className='input-box'/>
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" className='input-box' />
          </div>

          <div className="form-group">
            <label>Alias Name:</label>
            <input type="text" name="aliasName" className='input-box' />
          </div>

          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="dob" />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age"className='input-box' />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" className='input-box'></textarea>
          </div>

          <div className="form-group">
            <label>City:</label>
            <input type="text" name="city" className='input-box'/>
          </div>

          <div className="form-group">
            <label>State:</label>
            <input type="text" name="state" className='input-box' />
          </div>

          <div className="form-group">
            <label>Arrested Date:</label>
            <input type="date" name="arrestedDate"  className='input-box'/>
          </div>

          <div className="form-group">
            <label>Crime Involved In:</label>
            <input type="text" name="crimeInvolved" className='input-box' />
          </div>

          <div className="form-group">
            <label>Image Path:</label>
            <input type="text" name="imagePath" className='input-box'/>
          </div>

          <div className="form-group">
            <label>Photo:</label>
            <input type="file" name="photo" accept="image/*" className='input-box' />
          </div>
        </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default CriminalForm;
