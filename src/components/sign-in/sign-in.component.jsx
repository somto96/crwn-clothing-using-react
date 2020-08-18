import React from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} label='Email' value={email} required />
                    <FormInput name="password" type="password" handleChange={() => console.log(this.state.password)} label="Password" value={password} required />
                    <div className="buttons">
                        <CustomButton type='submit' > Sign in </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn >
                            Sign in with Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}