import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GetuserbyEmail, Postlogin } from "./api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faMailBulk, faScrewdriver } from '@fortawesome/free-solid-svg-icons'

function Login() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [data, setData] = useState("");

    let history = useHistory();
    let userData = { email, password }

    return (
        <>
            <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3><FontAwesomeIcon icon={faScrewdriver}></FontAwesomeIcon> Student Login</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                try {

                                    let logindata = await Postlogin(userData);
                                    window.localStorage.setItem("app_token", logindata.data.token)
                                    let token = logindata.data.token;

                                     //checking if token is present then go to next page otherwise stay in same page
                                    if (token) {
                                        let users = await GetuserbyEmail(email);
                                        console.log(users.data._id)
                                        history.push(`/job/${users.data._id}`)
                                    }
                                    else {
                                       alert("Email or password is incorrect")
                                        history.push(`/login`);
                                    }
                                }
                                catch (error) {
                                    console.log(error)
                                }
                                setEmail("");
                                setPassword("");
                            }}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faMailBulk} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faKey} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right btn-warning" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<Link to="/register">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}






export default Login;