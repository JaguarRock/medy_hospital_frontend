import userConstant from '../constants/user.constant';
import history from '../helpers/history';
import authService from '../services/auth.service';
import alertActions from './alert.actions';

const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(id, password) {
    return dispatch => {
        dispatch(request(id));
        authService.login(id, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
    };
    function request(user) { return { type: userConstant.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstant.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstant.LOGIN_FAILURE, error } }
}

function logout() {
    authService.logout();
    return { type: userConstant.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        
        authService.register(user)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstant.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstant.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstant.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        authService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstant.GETALL_REQUEST } }
    function success(users) { return { type: userConstant.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstant.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(_id) {
    return dispatch => {
        dispatch(request(_id));

        authService.delete(_id)
            .then(
                user => dispatch(success(_id)),
                error => dispatch(failure(_id, error.toString()))
            );
    };

    function request(_id) { return { type: userConstant.DELETE_REQUEST, _id } }
    function success(_id) { return { type: userConstant.DELETE_SUCCESS, _id } }
    function failure(_id, error) { return { type: userConstant.DELETE_FAILURE, _id, error } }
}

export default userActions;