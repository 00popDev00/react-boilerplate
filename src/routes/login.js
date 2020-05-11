import React, { Component } from 'react';
import { connect } from 'react-redux';
import Action from '../redux/actions';
import { Redirect } from 'react-router-dom'

import '../css/login.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }
    handleSubmit = () => {
        const { email, password } = this.state
       this.props.loginREQ({ email: email, password: password });
      // console.log(this.props.userCredential.isLoggedin)


    }

    handleOnChange = (event) => {
        //   console.log(event.target.value)
        const { value, type } = event.target
        this.setState({ [type]: value })
    }




    render() {


        //     console.log(this.state)

       //   console.log(this.props)
       
       if(this.props.userCredential.isLoggedin)
       {
           return <Redirect to='/Dashboard' />
   
          // this.props.history.push('/Dashboard')
       }
   
        return (
                

            <div className="container h-80">
                <div className="row align-items-center h-100">
                    <div className="col-3 mx-auto">
                        <div className="text-center">
                            <img id="profile-img" className="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" />
                            <p id="profile-name" className="profile-name-card"></p>
                            {/* <form method="post" className="form-signin"> */}

                            <input onChange={this.handleOnChange} type="email" name="email" id="inputEmail" className="form-control form-group" placeholder="email" required autoFocus />
                                <input onChange={this.handleOnChange} type="password" name="password" id="inputPassword" className="form-control form-group" placeholder="password" required autoFocus />
                                <button  onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block btn-signin">enter</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        userCredential: state.counter,
        timer: state.timer
    }
}

const mapDispatchtoProps = (dispatch) => ({
    loginREQ: (value) => dispatch(Action.loginREQ(value)),
    dcounter: (value) => dispatch(Action.dcounter(value))


})


export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
