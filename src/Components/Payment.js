import React, {Component} from 'react';

class Prospect extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(event.target.elements)

        // const imageLink = event.target.elements.link.value;
        // const description = event.target.elements.description.value;

        this.props.history.push('/receipt');
        
    }
    
    render() {
        return (
            <div>
                <form className="SysForm" onSubmit={this.handleSubmit}>

                    <h2>Payment Information</h2>

                    <div className="form-group">
                        <input type="tel" className="form-control" name='creditCardNumber' pattern="\d*.{16,16}"  minLength='16' maxLength='16' placeholder='Credit Card Number' required/>
                    </div>

                    <div className="form-group">
                        <select className="form-control" name="creditCardType"  required>
                            <option value="" defaultValue disabled>Card Type</option>
                            <option value='visa'>Visa</option>

                            <option value='discover'>Discover</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <select className='form-control' name="creditCardMonth" required>
                                    <option value="" defaultValue disabled>Expiry Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className='form-control' name="creditCardYear"  required>
                                    <option value="" defaultValue disabled>Expiry Year</option>
                                    <option value="18">2018</option>
                                    <option value="19">2019</option>
                                    <option value="20">2020</option>
                                    <option value="21">2021</option>
                                    <option value="22">2022</option>
                                    <option value="23">2023</option>
                                    <option value="24">2024</option>
                                    <option value="25">2025</option>
                                    <option value="26">2026</option>
                                    <option value="27">2027</option>
                                </select>
                            </div>
                            <div className="col">
                                <input type="tel" minLength='3' maxLength='3' className="form-control" pattern="\d*.{3,3}" name='creditCardCVV'  placeholder='CVV' required/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <a href='#'>Whats this?</a>
                    </div>

                    <div className='form-terms-containe'>

                        <div className='form-group'>
                            <div className="form-check form-check-inline">
                                <label htmlFor="accept-terms" className="form-check-label">
                                    <input className='form-check-input' type="checkbox" id='accept-terms' required/> I agree to the Refund, Cancellation, and Return policies as clearly outlined in the
                                    <a href="terms.html" target='_self'>Terms and Conditions
                                        </a> and
                                    <a href="privacy.html" target='_self'>Privacy Policy</a>.
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="form-group text-right">
                        <input type="submit" className="btn payment-form-button btn-primary" value='Purchase'/>
                    </div>

                </form>
            </div>
        )
            
    }
    
}
export default Prospect