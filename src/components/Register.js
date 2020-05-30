import React from 'react';
import { useForm } from 'react-hook-form';
import authService from '../services/auth.service';

function Registration() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => { 
        authService.register(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>병원 이름</label>
                <input type="text" placeholder="이름" name="name" ref={register} />
            </div>
            <div className="form-group">
                <label>아이디</label>
                <input type="text" placeholder="아이디" name="ID" ref={register} />
            </div>
            <div className="form-group">
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호" name="password" ref={register} />
            </div>
            <div className="form-group">
                <label>이메일</label>
                <input type="text" placeholder="이메일" name="email" ref={register} />
            </div>
            <div className="form-group">
                <label>대표 의사</label>
                <input type="text" placeholder="대표 의사" name="doctor" ref={register} />
            </div>
            <div className="form-group">
                <label>전화 번호</label>
                <input type="text" placeholder="'-' 빼고 입력해주세요" name="phoneNum" ref={register}/>
            </div>
            <div className="form-group">
                <label>병원 주소</label>
                <input type="text" placeholder="주소" name="address" ref={register}/>
            </div>
            <div className="form-group">
                <label>병원 종류</label>
                <input type="text" placeholder="병원 종류" name="kinds" ref={register}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

export default Registration;