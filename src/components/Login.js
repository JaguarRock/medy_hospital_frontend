import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../actions/user.actions';


function Login() {
    const [inputs, setInputs] = useState({
        id: '',
        password: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const { id, password } = inputs;
    const loggingIn = useSelector(state => state.authenticationReducer.loggingIn);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }
    
    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (id && password) {
            dispatch(userActions.login(id, password));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>아이디</label>
                    <input type="text" name="id" value={id} onChange={handleChange} className={'form-control' + (submitted && !id ? ' is-invalid' : '')} />
                    {submitted && !id &&
                        <div className="invalid-feedback">아이디를 작성해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')}/>
                    {submitted && !password &&
                        <div className="invalid-feedback">비밀번호를 작성해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;