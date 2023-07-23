import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './PersonalDetails.css';
import './test.css';
import TitlesAndSubs from "./TitlesAndSubs";

const PersonalDetails = () => {
  const [selectedOption, setSelectedOption] = useState('cardPayment');

  // Helper function to handle radio button check event
  const handleCheck = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  // State to manage form data and errors
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    confirmEmail: '',
    state: '',
    city: '',
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    confirmEmail: '',
    state: '',
    city: '',
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Helper function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields and set the error messages if there are any
    const errors = {};

    if (!formData.fullName) {
      errors.fullName = 'Full name is required';
    }


    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.confirmEmail) {
      errors.confirmEmail = 'Confirm email is required';
    }
    else if (formData.confirmEmail !== formData.email) {
      errors.confirmEmail = 'Emails do not match';
    }

    if (!formData.state) {
      errors.state = 'State is required';
    }

    if (!formData.city) {
      errors.city = 'City is required';
    }

    if (selectedOption === 'cardPayment') {
      if (!formData.nameOnCard) {
        errors.nameOnCard = 'Name on card is required';
      }

      if (!formData.cardNumber) {
        errors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber)) {
        errors.cardNumber = 'Card number must be 16 digits';
      }

      if (!formData.expiryDate) {
        errors.expiryDate = 'Expiry date is required';
      }

      if (!formData.cvv) {
        errors.cvv = 'CVV/CVC is required';
      } else if (!/^\d{3}$/.test(formData.cvv)) {
        errors.cvv = 'CVV/CVC must be 3 digits';
      }
    }

    // ... Add validation logic for other fields ...

    setFormErrors(errors);

    // Perform form submission logic if the form is valid
    if (Object.keys(errors).length === 0) {
      // Your form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  // Helper function to handle input changes
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' }); // Clear the error message when the user starts typing again
  };

  return (
    <div className="container mt-5">


      <form className="custom-form" onSubmit={handleSubmit}>

        <div className="d-flex flex-column justify-content-start align-items-start responsive-div-container">

          <TitlesAndSubs title='Enter your details' subtitle="We'll be sending your tickets to the details below. Booking for a friend? Add their details."></TitlesAndSubs>
          <div className="custom-div">
            <div className="row">
              <div className="col-lg-6">
                <div className="input-group">
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='Enter full name'
                    className={formErrors.fullName ? 'errorin' : ''}
                  />

                  {formErrors.fullName && <div className="error">{formErrors.fullName}</div>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-group">
                  <input
                    type="number"
                    id="phoneNumber"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={formErrors.phoneNumber ? 'errorin' : ''}
                  />
                  {formErrors.phoneNumber && <div className="error">{formErrors.phoneNumber}</div>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="input-group">
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'errorin' : ''}
                  />
                  {formErrors.email && <div className="error">{formErrors.email}</div>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-group">
                  <input
                    type="text"
                    id="confirmEmail"
                    placeholder="Confirm email"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    className={formErrors.confirmEmail ? 'errorin' : ''}
                  />
                  {formErrors.confirmEmail && <div className="error">{formErrors.confirmEmail}</div>}
                </div>
              </div>
            </div>
          </div>
          <TitlesAndSubs title='Additional information' subtitle='We need a few more details to complete your reservation.'></TitlesAndSubs>
          <div className="custom-div">
            <div className="row">
              <div className="col-lg-6">
                <div className="input-group">
                  <input
                    type="text"
                    id="state"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                    className={formErrors.state ? 'errorin' : ''}
                  />
                  {formErrors.state && <div className="error">{formErrors.state}</div>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-group">
                  <select
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`styled-dropdown ${formErrors.city ? 'errorin' : ''}`}
                  >
                    <option value="">Select City</option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="miami">Miami</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <TitlesAndSubs title={'Select your mode of payment'} subtitle={'Payments with Tickete are secure and encrypted.'}></TitlesAndSubs>

          <div className="custom-div">
            <div className="radio-container">
              <div className="radio-item">
                <FontAwesomeIcon icon={faCreditCard} className="radio-icon" />
                <label htmlFor="radioOption1" className="radio-label">
                  Credit & debit card
                </label>
                <input
                  type="radio"
                  id="radioOption1"
                  name="paymentType"
                  value="cardPayment"
                  className="radio-input"
                  checked={selectedOption === 'cardPayment'}
                  onChange={handleCheck}
                />
              </div>
              {selectedOption == 'cardPayment' && (<>


                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        id="nameOnCard"
                        placeholder="Name on card"
                        value={formData.nameOnCard}
                        onChange={handleChange}
                        className={formErrors.nameOnCard ? 'errorin' : ''}
                      />
                      {formErrors.nameOnCard && <div className="error">{formErrors.nameOnCard}</div>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className={formErrors.cardNumber ? 'errorin' : ''}
                      />
                      {formErrors.cardNumber && <div className="error">{formErrors.cardNumber}</div>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        id="expiryDate"
                        placeholder="Expiry Date"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className={formErrors.expiryDate ? 'errorin' : ''}
                      />
                      {formErrors.expiryDate && <div className="error">{formErrors.expiryDate}</div>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="password"
                        id="cvv"
                        placeholder="CVV/CVC"
                        value={formData.cvv}
                        onChange={handleChange}
                        className={formErrors.cvv ? 'errorin' : ''}
                      />
                      {formErrors.cvv && <div className="error">{formErrors.cvv}</div>}
                    </div>
                  </div>
                </div></>)

              }

              <br />


              <div className="radio-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none" className="radio-icon">
                  <rect y="6.10352e-05" width="35" height="24" rx="4" fill="#FEB4C7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.42416 15.3797H4V9.00006H5.42416V15.3797ZM8.97973 9.00006H7.58645C7.58645 10.1741 7.06142 11.2516 6.14601 11.9566L5.59402 12.3816L7.73282 15.3799H9.49132L7.52334 12.621C8.4562 11.666 8.97973 10.3812 8.97973 9.00006ZM11.2513 15.3779H9.90633V9.00128H11.2513V15.3779ZM15.3148 10.9669V11.2491C14.9519 10.9946 14.5139 10.845 14.0415 10.845C12.7911 10.845 11.7775 11.8871 11.7775 13.1725C11.7775 14.458 12.7911 15.5 14.0415 15.5C14.5139 15.5 14.9519 15.3505 15.3148 15.096V15.3779H16.5995V10.9669H15.3148ZM15.3109 13.1727C15.3109 13.7995 14.7898 14.3076 14.1469 14.3076C13.5041 14.3076 12.9829 13.7995 12.9829 13.1727C12.9829 12.5459 13.5041 12.0379 14.1469 12.0379C14.7898 12.0379 15.3109 12.5459 15.3109 13.1727ZM28.8671 11.2491V10.9669H30.1517V15.3779H28.8671V15.096C28.5042 15.3505 28.0662 15.5 27.5937 15.5C26.3433 15.5 25.3297 14.458 25.3297 13.1725C25.3297 11.8871 26.3433 10.845 27.5937 10.845C28.0662 10.845 28.5042 10.9946 28.8671 11.2491ZM27.6991 14.3076C28.342 14.3076 28.8631 13.7995 28.8631 13.1727C28.8631 12.5459 28.342 12.0379 27.6991 12.0379C27.0563 12.0379 26.5352 12.5459 26.5352 13.1727C26.5352 13.7995 27.0563 14.3076 27.6991 14.3076ZM23.047 10.8484C22.5338 10.8484 22.0482 11.0122 21.7235 11.4641V10.9673H20.4445V15.378H21.7392V13.06C21.7392 12.3893 22.1768 12.0608 22.7035 12.0608C23.2681 12.0608 23.5927 12.4075 23.5927 13.0509V15.378H24.8757V12.573C24.8757 11.5465 24.0819 10.8484 23.047 10.8484ZM18.5866 10.9669V11.5414C18.8442 11.1968 19.324 10.9672 19.8456 10.9672V12.2507L19.8411 12.2506L19.8385 12.2504L19.8304 12.2502C19.3221 12.2502 18.5896 12.6236 18.5896 13.3184V15.3779H17.2714V10.9669H18.5866ZM30.7092 14.6421C30.7092 14.1843 31.0701 13.8133 31.5153 13.8133C31.9605 13.8133 32.3214 14.1843 32.3214 14.6421C32.3214 15.0997 31.9605 15.4708 31.5153 15.4708C31.0701 15.4708 30.7092 15.0997 30.7092 14.6421Z" fill="#17120F" />
                </svg>
                <label htmlFor="radioOption2" className="radio-label">
                  Klarna
                </label>
                <input
                  type="radio"
                  id="radioOption2"
                  name="paymentType" // Give the same name to both radio inputs to create a group
                  value="klarnaPayment"
                  className="radio-input"
                  checked={selectedOption === 'klarnaPayment'}
                  onChange={handleCheck}
                />
              </div>
              <div className="custom-line"></div>

              <div className="custom-div title"> Total: $ 580</div>
              <u> <div className="custom-div subtitle">You will pay in Dollars</div></u>

              <div className="custom-div offerCheck">

                <label className="offer-label">
                  <input
                    type="radio"
                    value='chooseOffer'


                    className="radio-input"
                  />
                  <span className="radio-button"></span>
                  Receive travel tips, suggestions and offers in your city  by email
                </label>


              </div>

              <div className="custom-div subtitle">With payment, you agree to the <span style={{ color: "blue" }}>general terms and conditions of Tickete & the activity provider </span>.</div>

            </div>



          </div>








        </div>
        <div className="custom-div submit-btn">
          <button type="submit" className="submit-button">
            Confirm and Pay
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M16.25 3.625H3.75C3.41848 3.625 3.10054 3.7567 2.86612 3.99112C2.6317 4.22554 2.5 4.54348 2.5 4.875V9.46094C2.5 16.4453 8.42188 18.7656 9.60938 19.1562C9.8631 19.2397 10.1369 19.2397 10.3906 19.1562C11.5781 18.7656 17.5 16.4453 17.5 9.46094V4.875C17.5 4.54348 17.3683 4.22554 17.1339 3.99112C16.8995 3.7567 16.5815 3.625 16.25 3.625ZM10 17.9688C9.00781 17.6406 4.35156 15.8125 3.80469 10.5H10V4.875H16.25V9.46094C16.2519 9.80806 16.2336 10.155 16.1953 10.5H10V17.9688Z" fill="white" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )



}
export default PersonalDetails