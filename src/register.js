import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Postregister } from "./api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faClock, faCodeBranch, faKey, faMailBulk, faPhone, faScrewdriver, faUser} from '@fortawesome/free-solid-svg-icons'

function Register(){

    let [username,setUsername] =useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone,setPhone]=useState("");
    let [college,setCollege]=useState("");
    let [year,setYear]=useState("");
    let [branch,setBranch]=useState("");

    let history=useHistory();

    let userData = { username,email, password ,phone,college,year,branch}

    return(
        <>
        <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3><FontAwesomeIcon icon={faScrewdriver}></FontAwesomeIcon> Student Register</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                let reg= await Postregister(userData);
                                if(reg.data.message==="email already exist"){
                                    alert("Email already in use");
                                }
                                else{
                                    alert("successfully registered");
                                }
                                setEmail("");
                                setPassword("");
                                setUsername("");
                                setPhone("");
                                setCollege("");
                                setYear("");
                                setBranch("");
                                history.push(`/login`);
                            }}>
                            <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faUser} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="User Name" required value={username} onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faMailBulk} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faKey} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faPhone} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="tel" class="form-control" placeholder="99xx99xx99" pattern="[0-9]{10}" required value={phone} onChange={(e) => {
                                        setPhone(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faBuilding} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="College Studied" required value={college} onChange={(e) => {
                                        setCollege(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faClock} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Year of Passing"  required value={year} onChange={(e) => {
                                        setYear(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Branch Studied"  required value={branch} onChange={(e) => {
                                        setBranch(e.target.value);
                                    }}/>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Register" class="btn float-right btn-warning" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                             have an account?<Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;