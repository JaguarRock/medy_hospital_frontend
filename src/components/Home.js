import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi user!</h1>
            <p>MEDY HOSPITAL에 로그인되셨습니다.</p>
            <p>
                <Link to="/login">로그아웃</Link>
            </p>
        </div>
    );
}