import React, {Component} from 'react';

class Prospect extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(event.target.elements)

        const firstName = event.target.elements.firstName.value;
        const lastName = event.target.elements.lastName.value;
        const address = event.target.elements.address.value;
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const state = event.target.elements.state.value;
        const zip = event.target.elements.zip.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;

        const prospect =  {
            id: Number(new Date()),
            firstName,
            lastName,
            address,
            city,
            country,
            state,
            zip,
            phone,
            email
        }

        console.log(prospect)

        if ( firstName &&  lastName &&  address && city && country && state && zip && phone && email  )  {
            this.props.addProspect(prospect)



            this.props.history.push('/payment');
        } else {
            //eorrr shit
        }

    }
    
    render() {
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                <table className="form-table">
                  <tbody>
                  <tr>
                    <td className="form-label">
                      <label>First name:</label>
                    </td>
                    <td>
                      <input className="form-control" name="firstName" required/>
                    </td>
                  </tr>

                  <tr>
                    <td className="form-label">
                      <label>Last name:</label>
                    </td>
                    <td>
                      <input className="form-control" name='lastName' required/>
                    </td>
                  </tr>
    
                  <tr>
                    <td className="form-label">
                      <label>Address:</label>
                    </td>
                    <td>
                      <input className="form-control" name='address' required/>
                    </td>
                  </tr>
            
                  <tr>
                    <td className="form-label">
                      <label>City:</label>
                    </td>
                    <td>
                      <input className="form-control" name='city' required/>
                    </td>
                  </tr>
            
                  <tr>
                    <td className="form-label">
                      <label>Country:</label>
                    </td>
                    <td>
                      <select name="country" className="form-control" required>
                        <option value="">Select Country</option>
                        <option value="US" defaultValue>United States</option>
                      </select>
                    </td>
                  </tr>
            
                  <tr>
                    <td className="form-label">
                      <label>State:</label>
                    </td>
                    <td>
                      <select name="state" className="form-control" required>
                        <option value="" defaultValue>Select One</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VI">Virgin Islands of the U.S.</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </td>
                  </tr>
           
                  <tr>
                    <td className="form-label">
                      <label>Zip:</label>
                    </td>
                    <td>
                      <input type="text" pattern="[0-9]{5}" minLength="5" maxLength="5" className="form-control" name='zip' required/>
                    </td>
                  </tr>
            
                  <tr>
                    <td className="form-label">
                      <label>Phone:</label>
                    </td>
                    <td>
                      <input type="text" pattern="\d*.{10,10}" minLength="10" maxLength="10" className="form-control" name="phone" required/>
                    </td>
                  </tr>
            
                  <tr>
                    <td className="form-label">
                      <label>Email:</label>
                    </td>
                    <td>
                      <input type="email" className="form-control" name="email" required/>
                    </td>
                  </tr>
                  </tbody>
                </table>

                <div className="form-button-container">
                  <button type='submit' className="form-button btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
        )
            
    }
    
}
export default Prospect