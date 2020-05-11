import React, { Component } from 'react';
import { connect } from 'react-redux';
import Action from '../redux/actions';
import { Redirect } from 'react-router-dom'

import '../css/login.css'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            cpassword: '',
            email: ''
        }
    }
    handleSubmit = () => {
        const { username,email, password,cpassword } = this.state
        console.log("p",password,"c",cpassword , this.state)
        if(password === cpassword) this.props.registerREQ({username:username, email: email, password: password });
        else alert("password dosent match");
        // console.log(this.props.num.isLoggedin)
        //console.log("onsubmit")


    }

    handleOnChange = (event) => {
        //  console.log(event.target.value)
        const { value, name } = event.target
        this.setState({ [name]: value })
    }


    componentWillReceiveProps(prevProps) {
        console.log("prevProps", prevProps.num)
    }

    render() {


        //     console.log(this.state)

        //   console.log(this.props)

        // if (this.props.num.isLoggedin) {
        //     return <Redirect to='/Dashboard' />

        //     // this.props.history.push('/Dashboard')
        // }

        return (


            <div className="container h-80">
                <div className="row align-items-center h-100">
                    <div className="col-3 mx-auto">
                        <div className="text-center">
                            <img id="profile-img" className="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" />
                            <p id="profile-name" className="profile-name-card"></p>
                            {/* <form method="post" className="form-signin"> */}

                            <input onChange={this.handleOnChange} type="name" name="username" id="inputEmail" className="form-control form-group" placeholder="Username" required autoFocus />
                            <input onChange={this.handleOnChange} type="email" name="email" id="inputEmail" className="form-control form-group" placeholder="Email" required autoFocus />
                            <input onChange={this.handleOnChange} type="password" name="password" id="inputPassword" className="form-control form-group" placeholder="New password" required autoFocus />
                            <input onChange={this.handleOnChange} type="password" name="cpassword" id="confirmPassword" className="form-control form-group" placeholder="Confirm password" required autoFocus />

                            <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block btn-signin">enter</button>
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
      //  num: state.counter,
       // timer: state.timer
    }
}

const mapDispatchtoProps = (dispatch) => ({
  //  loginREQ: (value) => dispatch(Action.loginREQ(value)),
    registerREQ: (value) => dispatch(Action.registerREQ(value))


})


export default connect(mapStatetoProps, mapDispatchtoProps)(Register);
