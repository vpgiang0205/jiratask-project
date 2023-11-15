import * as actions from '../types/constants'
import api from '../../api/apiUltis'
/**
 *  Auth Reducer  
*/
//  Post
// export const actAuth = (userLogin, navigate) => {
//     return (dispatch) => {
//         dispatch(actAuthRequest)

//         api.post('/auth/signin', userLogin)
//             .then((result) => {
//                 if (result.data.statusCode === 200) {
//                     const { user, token } = result.data.content;
//                     const userData = { user, token }

//                     dispatch(actAuthSuccess(userData))
//                     navigate("/auth", { replace: true })
//                 }
//             })
//             .catch((error) => {
//                 const { content } = error.response.data
//                 dispatch(actAuthFail(content))
//             })
//     }
// }

// const actAuthRequest = () => ({ type: actions.AUTH_REQUEST })
// const actAuthSuccess = (data) => ({ type: actions.AUTH_SUCCESS, payload: data })
// const actAuthFail = (error) => ({ type: actions.AUTH_FAIL, payload: error })

export const actSignup = (userRegister, navigate) => {
    return (dispatch) => {
        dispatch(actSignupRequest)
        api.post(`/Users/signup`, userRegister)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actSignupSuccess(result.data.content))
                    alert("Đăng ký thành công!")
                    navigate("/signin-page", { replace: true })
                }
            })
            .catch((error) => {
                dispatch(actSignupFail(error.response.data))
            })

    }
}

const actSignupRequest = () => ({ type: actions.SIGNUP_REQUEST })
const actSignupSuccess = (data) => ({ type: actions.SIGNUP_SUCCESS, payload: data })
const actSignupFail = (error) => ({ type: actions.SIGNUP_FAIL, payload: error })

export const actSignin = (userLogin) => {
    return (dispatch) => {
        console.log(userLogin);
        dispatch(actSigninRequest)
        api.post('/Users/signin', userLogin)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const user = result.data.content;
                    dispatch(actSigninSuccess(user))
                    // navigate('/')
                    console.log(user);
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actSigninFail(content))
            })
    }
}

const actSigninRequest = () => ({ type: actions.SIGNIN_REQUEST })
const actSigninSuccess = (data) => ({ type: actions.SIGNIN_SUCCESS, payload: data })
const actSigninFail = (error) => ({ type: actions.SIGNIN_FAIL, payload: error })
