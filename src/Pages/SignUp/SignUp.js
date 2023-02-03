import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const SignUp = () => {
  const { createUser } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 ">
            <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name='name'
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Sign Up" />
                {/* <button type="submit" >Login</button> */}
              </div>
            </form>
            <p className="text-center pb-8">Already have and account? <Link className='text-orange-600 font-bold' to="/login">LogIn</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;