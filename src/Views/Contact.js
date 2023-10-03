import React, { Component } from 'react'
import ContactHero from '../Assets/Images/ProductAsset2.png';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: null,
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                socity: '',
                comment: ''
            }
        };
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };
    render() {
        const { formData } = this.state;
        return (
        <div className='Contact'>
            <div className='Contact_Hero_Cards'>
                <div className='Contact_Hero_Text'>
                    <h1>Contact Us!</h1>       
                </div>
                <div className='Contact_Hero_Card'>
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
            <div className='Contact_Hero_Img'>
                <img src={ContactHero}/>
            </div>
        </div>
        )
    }
}
