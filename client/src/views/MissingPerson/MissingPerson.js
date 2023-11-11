import React, {useState, useEffect} from 'react';
import './MissingPerson.css';
import axios from 'axios';
import Navbar from '../../component/Navbar/Navbar'
// import Footer from '../../component/Footer/Footer';

const MissingPerson = () => {
  const [name, setName] = useState("");
  const [aliasName, setAliasName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [criminalId, setCriminalId] = useState("");

  const saveCriminalData = async () => {
          if(!name) {
            alert("Name is Required");
            return;
          }

          if(!aliasName){
            alert("Alias name is Required");
            return;
          }

          const response =  await axios.post("/criminalRecord", {
           name,
           aliasName,
           dob,
           age,
           gender,
           city,
           criminalId
          })

          alert(response?.data?.message);

          if(response?.data?.success){
            window.location.href = "/";
          }
        };
      
        useEffect(()=>{
          const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
      
          if(storageUser?.email){
            alert("Successfully Saved Criminal Data");
            window.location.href = "/";
          }
      
        }, [])


  return (
    <>
    <Navbar />
    <div className="form-container">
      <h2>Missing Person Information Form</h2>
      <form>
  

        <div className='form-container-2'>
        <div className="form-section">

          <div className="form-group">
            <label>Criminal ID:</label>
            <input type="number" 
            className='input-box' 
            placeholder='Enter your criminal id'
            id="criminalId"
            value={criminalId}
            onChange={(e) => {
              setAge(e.target.value)
            }}/>
          </div>

          <div className="form-group">
            <label> Name:</label>
            <input type="text" 
            placeholder='Enter your  name'
            id="name"
            className='input-box'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            />
          </div>

          <div className="form-group">
            <label>Alias Name:</label>
            <input type="text"
            placeholder= 'Enter your alias'
            id="aliasName" 
            className='input-box'
            value={aliasName} 
            onChange={(e) => {
              setAliasName(e.target.value);
            }}
            />
          </div>

          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date"
            placeholder = 'Enter your birth date'
            id="dob" 
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
             />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input type="number" 
            className='input-box' 
            placeholder='Enter your age'
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value)
            }}/>
          </div>
        <div className="gender-container">
  <input
    type="radio"
    id='male'
    name='gender'
    className='gender-input'
    checked={gender === "male"}
    onChange={() => {
      setGender("male");
    }}
  />
  <label htmlFor='male' className='gender-label'>Male</label>

  <input
    type="radio"
    id='female'
    name='gender'
    className='gender-input'
    checked={gender === "female"}
    onChange={() => {
      setGender("female");
    }}
  />
  <label htmlFor='female' className='gender-label'>Female</label>
</div>


        </div>
        <div className="form-section">
          <div className="form-group">
            <label>Address:</label>
            <textarea name="address"
             className='input-box'> 
             </textarea>
          </div>

          <div className="form-group">
          <label>City:</label>
          <input type="text" 
            className='input-box' 
            placeholder='Enter your City'
            id="city"
            value={city}
            onChange={(e) => {
              setAge(e.target.value)
            }}/>
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

        <button type="button" onClick={saveCriminalData}>Submit</button>
      </form>
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default MissingPerson;

