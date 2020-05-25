import React, { useState, useEffect } from 'react';

export default function RegisterPage() {

    const [user, setUser] = useState({
        hospitalID: '',
        password: '',
        hospitalName: '',
        RepDoctor: '',
        hospitalAddress: '',
        hospitalphoneNum: '',
        hospitalKinds: '',
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {

    })

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        
    }
    
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>회원가입</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>아이디</label>
                    <input type="text" name="hospitalID" value={user.hospitalID}/>
                </div>
                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" name="password" value={user.password}/>
                </div>
                <div className="form-group">
                    <label>병원 이름</label>
                    <input type="text" name="hospitalName" value={user.hospitalName}/>
                </div>
                <div className="form-group">
                    <label>대표의사</label>
                    <input type="text" name="RepDoctor" value={user.RepDoctor}/>
                </div>
                <div className="form-group">
                    <label>주소</label>
                    <input type="text" name="hospitalAddress" value={user.hospitalAddress}/>
                </div>
                <div className="form-group">
                    <label>전화번호</label>
                    <input type="text" name="hospitalphoneNum" value={user.hospitalphoneNum}/>
                </div>
                <div className="form-group">
                    <label>전공</label>
                    <input type="text" name="hospitalKinds" value={user.hospitalKinds}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}