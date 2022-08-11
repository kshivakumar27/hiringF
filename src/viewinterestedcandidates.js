import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Getinterestedcandidatesdetailsbyemail, GetrecruiterbyId } from "./api";
function Viewinterestedcandidates(props) {

    let [userData,setuserData]=useState([]);

    useEffect(async () => {
        let users = await GetrecruiterbyId(props.match.params.id);
        let userEmail=users.data.email;
        console.log(userEmail)
        let interestedjob=await Getinterestedcandidatesdetailsbyemail(userEmail);
        setuserData(interestedjob.data)
        console.log(interestedjob.data)
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
                        <th scope="col">About</th>
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
                                    <td>{use.about}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default withRouter(Viewinterestedcandidates);