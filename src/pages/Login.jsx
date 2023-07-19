import React from 'react'

function Login() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <div className="card my-4 p-3">
                            <h3>Gadekar balkrishna</h3>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit</span>
                            <div className="login_from my-2 mt-3">
                                <form className=''>
                                    <input className='form-control' type="text" placeholder=' Please Enter Your Email' /><br />
                                    <input type="password" className='form-control' placeholder='Plase Enter Your Password' />
                                    <div className="my-2 d-flex justify-content-between align-content-center">
                                        <div className="d-flex gap-3 justify-content-center">
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </div>
                                        <a className='text-decoration-none' href="/Forgot Pasword">Forgot Pasword</a>
                                    </div>
                                    <button className="form-control btn btn-primary mt-2">Login</button>
                                </form>
                                <div className='d-flex justify-content-center gap-2 my-3'>
                                    <span>New on our platform?</span> <a href="/">Create an account</a>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <span className='hrline'></span> <span >Or</span> <span className='hrline'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login