import React, { useState, useRef } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div>
                채워줘요
            </div>
        )
    }
}

const Reigster = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const userState = {
        userID: '',
        username: '',
        password: '',
        userdoctorname: '',
        useraddress: '',
        userphonenum: '',
        userkinds: '',
        useremail: '',
    }

    const [user, setUser] = useState(userState);
    const [submitted, setSumbitted] = useState(false);
    const [message, setMessage] = useState("");

    const onChange = (e) => {
        const userID = e.target.value;
        setUser(userID);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSumbitted(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(user).then(
                (response) => {
                    setMessage(response.data.message);
                    setSumbitted(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSumbitted(false);
                }
            );
        }
    };

    return (
        <div>
            <div>
                <Form onSubmit={handleRegister} ref={form}>
                    {!submitted && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="userID">아이디</label>
                                <Input type="text" className="form-control" name="userID" value={userState.userID} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">비밀번호</label>
                                <Input type="password" className="form-control" name="password" value={userState.password} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="useremail">이메일</label>
                                <Input type="text" className="form-control" name="useremail" value={userState.useremail} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userdoctorname">대표의사</label>
                                <Input type="text" className="form-control" name="userdoctorname" value={userState.userdoctorname} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="useraddress">병원 주소</label>
                                <Input type="text" className="form-control" name="useraddress" value={userState.useraddress} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userphonenum">병원 전화번호</label>
                                <Input type="text" className="form-control" name="userphonenum" value={userState.userphonenum} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userkinds">병원 전문의</label>
                                <Input type="text" className="form-control" name="userkinds" value={userState.userkinds} onChange={onChange} />
                            </div>
                        </div>
                    )}
                    {message && (
                        <div className="form-group">
                            <div className = {submitted ? "alert alert-success" : "alert alert-danger"}
                                role="alert">
                                    {message}
                                </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    )
}

export default Reigster;