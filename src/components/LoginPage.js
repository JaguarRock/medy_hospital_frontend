import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <div>
            <h2>Login</h2>
            <form name="form">
                <div className="form-group">
                    <label>병원 ID</label>
                    <input type="text" name="hospitalID"/>
                </div>
                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" name="password"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        로그인
                    </button>
                    <Link to="/register" className="btn btn-link">회원가입</Link>
                </div>
            </form>
        </div>
    );
}