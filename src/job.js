import { useHistory, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Getjobs, GetuserbyId, Postappliedjobs } from "./api";

function Job(props) {

    let [jobData, setjobData] = useState([])
    let [userData, setuserData] = useState([])

    useEffect(async () => {
        //getting all the job details
        let jobs = await Getjobs();
        setjobData(jobs.data)
        //getting the details of candidate by his id
        let users = await GetuserbyId(props.match.params.id);
        setuserData(users.data)
        console.log(users.data)
    }, [])

    let history = useHistory();


    return (
        <>
            <div className="container">
                <div className="row float-right mt-5">
                    <button class="btn btn-secondary up-lift" onClick={() => {
                        history.push(`/applied/${props.match.params.id}`);
                    }}>Applied jobs</button>
                </div>
                <div></div>
                <div className="row float-right mt-5">
                    <button class="btn btn-secondary up-lift" onClick={() => {
                        history.push(`/interested/${props.match.params.id}`);
                    }}>Interested jobs</button>
                </div>
                <div className="row float-right mt-5">
                    <button class="btn btn-secondary up-lift" onClick={() => {
                        history.push(`/upcomingjob/${props.match.params.id}`);
                    }}>upcomingjobs</button>
                </div>
                <div className="row">
                    <h2>Hi {userData.username} here are the some of jobs apply accoring to your Qualification and experience</h2>
                </div>
                <div className="row">
                    {
                        jobData.map((user) => {
                            return (
                                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                                    <div class="card test-card shadow">
                                        <div class="card-header d-flex flex-row justify-content-between bg-secondary text-light">
                                            <h5>
                                                <i class="devicon-javascript-plain"></i> <span class="test-topic font-weight-bold">{user.companyname}</span>
                                            </h5>
                                            <span class="score-board has-result"><strong>{user.date}</strong></span>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5><span class="font-weight-bold">Job Title:</span> {user.jobtitle}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5><span class="font-weight-bold">Location:</span> {user.location}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5><span class="font-weight-bold">Skills Required:</span> {user.skill}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5><span class="font-weight-bold">Experince required:</span> {user.experience} years</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2 float-right">
                                                <button onClick={async () => {
                                                    let unique = userData.email + user._id;
                                                    let details = { email: userData.email, name: userData.username, phone: userData.phone, college: userData.college, year: userData.year, branch: userData.branch, recemail: user.email, jobId: user._id, companyname: user.companyname, jobtitle: user.jobtitle, date: user.date, unique: unique }
                                                    console.log(details);
                                                    //posting the details of candidate  and job details to applied job collection
                                                    let applied = await Postappliedjobs(details)
                                                    if (applied.data.message === "Already applied to this job") {
                                                        alert("You Have already applied to this job");
                                                    } else {
                                                        alert("Successfully applied to this job")
                                                    }
                                                }} class="btn btn-outline-secondary up-lift">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default withRouter(Job);