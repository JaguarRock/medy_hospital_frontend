import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, createSelectorHook } from 'react-redux';
import userActions from '../actions/user.actions';

function Home() {

    const users = useSelector(state => state.userReducer);
    const user = useSelector(state => state.authenticationReducer.user);
    console.log(user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(_id) {
        dispatch(userActions.delete(_id));
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user.data.name}!</h1>
            <p>You're logged in with React Hooks!!</p>
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.data.map((user, index) =>
                        <li key={user.id}>
                            {user.name}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                        : <span> - <a onClick={() => handleDeleteUser(user._id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );

}

export default Home;