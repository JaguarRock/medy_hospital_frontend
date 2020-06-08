import React, { useEffect, useState } from 'react';
import userActions from '../actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Registration() {
    const [user, setUser] = useState({
        id: '',
        password: '',
        name: '',
        email: '',
        doctor: '',
        phoneNum: '',
        address: '',
        kinds: ''
    })

    const [submitted, setSubmitted] = useState(false);
    const reigstering = useSelector(state => state.registrationReducer.reigstering);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.id && user.password && user.name && user.email && user.doctor && user.phoneNum && user.address && user.kinds) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>회원 가입</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>병원 이름</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} className={'form-control' + (submitted && !user.name ? ' is-invalid' : '')} />
                    {submitted && !user.name && 
                        <div className="invalid-feedback">병원 이름을 입력해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <label>아이디</label>
                    <input type="text" name="id" value={user.id} onChange={handleChange} className={'form-control' + (submitted && !user.id ? ' is-invalid' : '')} />
                    {submitted && !user.id && 
                        <div className="invalid-feedback">아이디를 입력해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password && 
                        <div className="invalid-feedback">비밀번호를 입력해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <label>이메일</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                    {submitted && !user.email && 
                        <div className="invalid-feedback">이메일을 입력해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <label>대표 의사</label>
                    <input type="text" name="doctor" value={user.doctor} onChange={handleChange} className={'form-control' + (submitted && !user.doctor ? ' is-invalid' : '')} />
                    {submitted && !user.doctor && 
                        <div className="invalid-feedback">대표 의사 성함을 입력해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <label>주소</label>
                    <input type="text" name="address" value={user.address} onChange={handleChange} className={'form-control' + (submitted && !user.address ? ' is-invalid' : '')} />
                    {submitted && !user.address && 
                        <div className="invalid-feedback">주소를 입력해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <label>전화번호</label>
                    <input type="text" name="phoneNum" value={user.phoneNum} onChange={handleChange} className={'form-control' + (submitted && !user.address ? ' is-invalid' : '')} />
                    {submitted && !user.phoneNum && 
                        <div className="invalid-feedback">전화번호를 입력해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <label>종류</label>
                    <input type="text" name="kinds" value={user.kinds} onChange={handleChange} className={'form-control' + (submitted && !user.kinds ? ' is-invalid' : '')} />
                    {submitted && !user.kinds && 
                        <div className="invalid-feedback">병원 종류를 입력해주세요</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {reigstering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    )

}

export default Registration;