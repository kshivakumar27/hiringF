import axios from "axios";

//posting the login data of the candidates
export function Postlogin(data){
    return axios.post(`htts://hiringstudent-b-shiv.herokuapp.com/login`,data)
}

//posting the register data of the candidates
export function Postregister(data){
    return axios.post(`htts://hiringstudent-b-shiv.herokuapp.com/register`,data)
}

//getting the details of candidates by email
export function GetuserbyEmail(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/user/${id}`)
}

//posting the login data of the recruiters
export function Postreclogin(data){
    return axios.post(`htts://hiringstudent-b-shiv.herokuapp.com/reclogin`,data)
}

//posting the register data of the recruiters
export function Postrecregister(data){
    return axios.post(`htts://hiringstudent-b-shiv.herokuapp.com/recregister`,data)
}

//getting the details of recruiter by email
export function GetrecruiterbyEmail(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/recruiter/${id}`)
}

//posting the job details by recruiter
export function Postcompany(data){
    return axios.post(`htts://hiringstudent-b-shiv.herokuapp.com/company`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}
//posting the job details by recruiter
export function Postupcomingcompany(data){
    return axios.post(`htts://hiringstudent-b-shiv.herokuapp.com/upcomingcompany`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//posting the job details of applied jobs
export function Postappliedjobs(data){
    return axios.post(`htts://hiringstudent-b-shiv.herokuapp.com/apply`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//posting the job details of applied jobs
export function Postinterestedjobs(data){
    return axios.post(`htts://hiringstudent-b-shiv.herokuapp.com/interested`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}





//getting the details of recruiter by id
export function GetrecruiterbyId(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/recruiters/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of candidates by id
export function GetuserbyId(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/users/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of job
export function Getjobs(){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/job`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}
export function Getupcomingjobs(){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/upcomingjob`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of applied jobs of candidates by id
export function GetappliedjobId(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/appliedjob/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}
//getting the details of applied jobs of candidates by id
export function GetinterestedjobId(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/interestedjob/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of candidates by email for recruiters
export function Getcandidatesdetailsbyemail(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/viewcandidates/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of candidates by email for recruiters
export function Getinterestedcandidatesdetailsbyemail(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/viewinterestedcandidates/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}






////getting the job info by id
export function GetjobId(id){
    return axios.get(`htts://hiringstudent-b-shiv.herokuapp.com/jobs/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}