import { call, put, takeEvery, takeLatest ,all,delay} from 'redux-saga/effects'
import { loginverify,getregister } from '../../api/authentication'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* Worker_loginverification(action) {
  const isloggedin = yield call(loginverify, action.paylod);
  yield put(isloggedin);
//   setTimeout(() => {
//     console.log("exires")
//     localStorage.clear('CMS-TOKEN')
//     yield put( { type: "CLEAR_SESSION", credential:null });

// }, 3000);

//yield delay(3000);
//localStorage.clear('CMS-TOKEN')
// console.log("oip");
// yield put( { type: "CLEAR_SESSION", credential:null });


}
//300000
function* Worker_registratiinverification(action){
 yield call(getregister, action.paylod);
  
}

// function* Worker_getusers(action) {
//   const isloggedin = yield call(getallusers, action.paylod);
//   yield put(isloggedin);
// }

  function* mySaga() {
        yield all([
       takeLatest("USER_LOGIN_REQUESTED", Worker_loginverification),
       takeLatest("USER_CREATE_REQUEST", Worker_registratiinverification),
     //  takeLatest("USER_GET_LIST", Worker_getusers),

       

    ]);
  }



  export default mySaga;