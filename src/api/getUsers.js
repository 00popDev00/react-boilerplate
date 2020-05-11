module.exports = {

    getallusers: async (credential) => {

        //LIVE_SERVER=>   https://cms-server0.herokuapp.com/auth/login
        //LOCAL_SERVER=>   http://localhost:8080/auth/login

        const result = await fetch("http://localhost:8080/getuser/allusers", {
            method: 'post',
            body: JSON.stringify(credential),
            headers: {
                'Content-type': 'application/json',
                'authorization': "bearer " + credential.token
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
  
                    console.log(result)
                    return result;
                    


                })
            .catch(e => {
                console.log(e);
            })

        //{ type: "USER_FETCH_FAILED", credential: credential }
        return result;
    }


}   