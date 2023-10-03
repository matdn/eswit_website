import React, { Component } from 'react'
import logoLV from '../Assets/Images/LVlogo.png';
import logoPO from '../Assets/Images/POlogo.png';
import logoKR from '../Assets/Images/KRlogo.png';

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: null,
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                socity: ''
            }
        };
    }
    handleNumberClick = (number) => {
        this.setState({ selectedNumber: number });
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Selected Number: ${this.state.selectedNumber}`);
        console.log(`Form Data: ${JSON.stringify(this.state.formData, null, 2)}`);
    };
    render() {
        const { formData } = this.state;
        return (
        <div className='Pricing'>
            <div className='Pricing_Hero'>
                <div className='Pricing_Hero_Text'>
                    <h1>Plans & Pricing</h1>
                    <p>
                    Our pricing is flexible and tailored to your business use-case. Contact us to put in place an adaptable model based on your need.
                    </p>                
                </div>
                <div className='Pricing_Hero_Cards'>
                    <div className='Pricing_Hero_Card'>
                        <form onSubmit={this.handleSubmit}>
                            <h2>Contact our specialists to find out more about our offers !</h2>
                            <p></p>
                            <div className="name-inputs">
                                <div>
                                    <label for="firstName">First name: </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label for="lastName">Last name: </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label for="society">Company name: </label>
                                    <input
                                        type="socity"
                                        name="socity"
                                        placeholder="Company"
                                        value={formData.socity}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label for="email">Email: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label for="text">Comment: </label>
                                    <textarea
                                        type="textarea"
                                        name="comment"
                                        placeholder="Comment:"
                                        value={formData.comment}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            
                            <button type="submit">Submit</button>
                            <p>✌️ We promise not to spam !</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Pricing;