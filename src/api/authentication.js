


//const API_URL ="http://localhost:8080";
//const API_URL ="https://cms-server0.herokuapp.com";
const { API_URL } = require('../env');

module.exports = {

    loginverify: async (credential) => {



        const result = await fetch(API_URL + "/auth/login", {
            method: 'post',
            body: JSON.stringify(credential),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    //   console.log(result, new Date().getSeconds(), new Date().getUTCMilliseconds())
                    //   console.log("api result", result);

                    if (result.status === 200) {
                        credential = { ...credential, username: result.userDetail.username, token: result.token , timestamp:result.timestamp }
                        localStorage.setItem('CMS-TOKEN', result.token);
                        localStorage.setItem('CMS-TIMESTAMP', parseInt(result.timestamp));

                        // setTimeout(() => {
                        //     console.log("exires")
                        //     localStorage.clear('CMS-TOKEN')
                        //     localStorage.clear('CMS-TIMESTAMP')
                        // }, 60000);
                        return { type: "USER_FETCH_SUCCESS", credential: credential };
                    }
                    else return { type: "USER_FETCH_FAILED", credential: credential };


                })
            .catch(e => {
                console.log(e);
            })
        return result;
    },

    getregister: async (credential) => {

        const result = await fetch(API_URL + "/auth/register", {
            method: 'post',
            body: JSON.stringify(credential),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    //   console.log(result, new Date().getSeconds(), new Date().getUTCMilliseconds())
                    console.log("api credential", credential);

                    console.log("api result", result);

                    if (result.status === 200) {
                        credential = { ...credential, username: result.userDetail.username, token: result.token }
                        return { type: "USER_CREATE_SUCCESS", credential: credential };
                    }
                    else return { type: "USER__CREATE_FAILED", credential: credential };


                })
            .catch(e => {
                console.log(e);
            })
        return result;
    }


}   