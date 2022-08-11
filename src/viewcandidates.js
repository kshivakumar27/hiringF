import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Getcandidatesdetailsbyemail, GetrecruiterbyId } from "./api";
function Viewcandidates(props) {

    let [userData,setuserData]=useState([]);

    useEffect(async () => {
        let users = await GetrecruiterbyId(props.match.params.id);
        let userEmail=users.data.email;
        console.log(userEmail)
        let appliedjob=await Getcandidatesdetailsbyemail(userEmail);
        setuserData(appliedjob.data)
        console.log(appliedjob.data)
    }, [])

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">College</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Job Title</th>
                    </tr>
                </thead>
                <tbody>
                {
                        userData.map((use, index) => {
                            return (
                                <tr>
                                    <th scope="row">{use.name}</th>
                                    <td>{use.college}</td>
                                    <td>{use.branch}</td>
                                    <td>{use.companyname}</td>
                                    <td>{use.jobtitle}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default withRouter(Viewcandidates);