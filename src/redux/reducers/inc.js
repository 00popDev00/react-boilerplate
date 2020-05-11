// var counterstate =  {
//     user:'init',
//     isLoggedin:false
// }

function counter(state = {}, action) {
  switch (action.type) {
    case 'USER_FETCH_SUCCESS':
      return { ...state, user: action.credential.username, isLoggedin: true, token: action.credential.token, timestamp: action.credential.timestamp };
    case 'USER_FETCH_FAILED':
      return { ...state, user: "N/A user", isLoggedin: false, token: "" }
    case 'USER_CREATE_SUCCESS':
      return state
    case 'USER_CREATE_FAILED':
      return state
    // case 'CLEAR_SESSION':
    //   return { ...state, isLoggedin: false, token:"" };
    default:
      {
        if (localStorage.getItem('CMS-TIMESTAMP') != null) {
          //  console.log("api-time-   ", parseInt(localStorage.getItem('CMS-TIMESTAMP')), "\ntime limie- ", new Date().getTime()  )
          if (parseInt(localStorage.getItem('CMS-TIMESTAMP')) > new Date().getTime()) {
            //session on
            if (localStorage.getItem('CMS-TOKEN') != null)
              return { ...state, isLoggedin: true, token: localStorage.getItem('CMS-TOKEN') };
            else return state

          }
          else {
            //session timeout
            localStorage.clear('CMS-TOKEN')
            localStorage.clear('CMS-TIMESTAMP')
            return { ...state, isLoggedin: false, token: "" };

          }

        }
        else return state;

      }
  }
}

export default counter;