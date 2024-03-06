import React from "react";
import "./AuthorizationForm.css";

export default function AuthorizationForm() {
    return (
        <>
            <div className="authorization-form-container">
                <div className="authorization-container">
                    <h1>Authorization</h1>
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" required/>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" required/>

                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>

                    <button type="submit">Login</button>
                </div>
            </div>
        </>
    );
}