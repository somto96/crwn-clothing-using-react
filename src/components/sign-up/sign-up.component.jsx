import React from "react";
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        // Password Validation
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try{
            // Using auth method to create a new user
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // Creates a user profile document for a new user in firestore
            await createUserProfileDocument(user, { displayName });
    
            // Resets the form
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        }catch(error){
            console.error(error);
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;

        // Sets form values to corresponding names in state
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title"> I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" handleChange={this.handleChange} label='Display Name' value={displayName} required />
                    <FormInput name="email" type="email" handleChange={this.handleChange} label="Email" value={email} required />
                    <FormInput name="password" type="password" handleChange={this.handleChange} label="Password" value={password} required />
                    <FormInput name="confirmPassword" type="password" handleChange={this.handleChange} label="Confirm Password" value={confirmPassword} required />

                    <CustomButton type="submit"> SIGN UP </CustomButton>

                </form>

            </div>
        )
    }
}