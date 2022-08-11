import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { GetrecruiterbyId, Postcompany } from "./api";
import { faAward, faBuilding, faCalendarDay, faClipboard, faLocationArrow, faVial } from "@fortawesome/free-solid-svg-icons";

function Addcompany(props) {

    // below useState are set to take inputs from the recuiter to post the info of job details
    let [companyname, setCompanyname] = useState("");
    let [jobtitle, setJobtitle] = useState("");
    let [location, setLocation] = useState("");
    let [skill, setSkill] = useState("");
    let [experience, setExperience] = useState("");
    let [date, setDate] = useState("");
    let [email,setuseremail]=useState("");

    useEffect(async () => {
        console.log(props)
        //getting information of recurutier using his id
        let users = await GetrecruiterbyId(props.match.params.id);
        setuseremail(users.data.email)
        console.log("Mounted")
    }, [])

    let userData = { companyname, jobtitle, location, skill, experience,date,email:email}
    let history = useHistory();

    return (
        <>
            <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3><FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon> Add Job</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                await Postcompany(userData);
                                setCompanyname("");
                                setJobtitle("");
                                setLocation("");
                                setSkill("");
                                setExperience("");
                                setDate("");
                            }}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faBuilding} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Company Name" required value={companyname} onChange={(e) => {
                                        setCompanyname(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faClipboard} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Job title" required value={jobtitle} onChange={(e) => {
                                        setJobtitle(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Job loacation" required value={location} onChange={(e) => {
                                        setLocation(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faAward} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Skills Required" required value={skill} onChange={(e) => {
                                        setSkill(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faVial} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Experince Required" required value={experience} onChange={(e) => {
                                        setExperience(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><FontAwesomeIcon icon={faCalendarDay} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="date" class="form-control" placeholder="Date Posted" required value={date} onChange={(e) => {
                                        setDate(e.target.value);
                                    }} />
                                </div>

                                <div class="form-group">
                                    {/* After submitting the button the job and company details will be posted to database */}
                                    <input type="submit" value="Add Job" class="btn float-right btn-warning" />
                                </div>
                                
                                <div className="form-group">
                                    {/* after clicking the view candidates button it will be redirected to view candidates page with id */}
                                    <button className="btn btn-warning " onClick={() => {
                                        history.push(`/viewcandidates/${props.match.params.id}`);
                                    }}>View Candidates</button>
                                </div>
                                 
                                <div className="form-group">
                                    {/* after clicking the view candidates button it will be redirected to view candidates page with id */}
                                    <button className="btn btn-warning " onClick={() => {
                                        history.push(`/addupcomingcompany/${props.match.params.id}`);
                                    }}>add upcoming companies</button>
                                </div>
                                <div className="form-group">
                                    {/* after clicking the view candidates button it will be redirected to view candidates page with id */}
                                    <button className="btn btn-warning " onClick={() => {
                                        history.push(`/viewinterestedcandidates/${props.match.params.id}`);
                                    }}>View Interested Candidates to attend up coming companies</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Addcompany) ;