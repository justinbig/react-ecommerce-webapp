import React from  "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"
import "./sign-in.styles.scss";

import {signInWithGoogle} from "../../firebase/firebase.utils"

class SignIn extends React.Component  {
     state = {
         email:"",
         password: ""
     }
     handleSubmit = (event) => {
         event.preventDefault();
         this.setState({email:"",password:""})

     }

     handleChange = (event) => {
         const {value,name} = event.target;
         this.setState({[name]:value})
     }
     render () {
         return (
            <div className="sign-in">
             <h2>Already Have account</h2>
             <h2>Sign in with email and password</h2>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                   type="email" 
                   name="email" 
                   value={this.state.email} 
                   label="email"
                  // onChange={this.handleChange}
                   required 
                />
                {/* <label>Email</label> */}
                <FormInput 
                    type="password" 
                    name="password" 
                    label="password"
                    value={this.state.password} 
                   // onChange={this.handleChange}
                    required
                />
                {/* <label>password</label> */}
                <div className="buttons">
                    <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle} >Sign In with Google</CustomButton>
                </div>
                
            </form>
        </div>
         )
     }
}
    


export default SignIn;