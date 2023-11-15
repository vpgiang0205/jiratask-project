import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { actSignin } from '../../redux/actions/actAuth';
import {useDispatch} from 'react-redux'
import { useCheckRole } from '../../hooks/useCheckRole';
export default function Signin() {
  const dispatch = useDispatch()

  const userData = useCheckRole()

  console.log(userData);
  
  const [state, setState] = useState({
    email: "",
    passWord: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actSignin(state))
    console.log(state);
  }

  return (
    <div className='login-page d-md-flex' style={{ minHeight: '100vh' }}>

      <img className='col-md-7' width="auto" src="https://www.prosoftly.com/wp-content/uploads/2020/01/task.png" />

      <div className='col-md-5 d-flex m-auto justify-content-center align-items-center'>
        <div className="">
          <h2 className="text-center text-dark main__Title">LOGIN ACCOUNT</h2>
          <form onSubmit={handleSubmit} className='align-items-center mt-4'>
            <div className=''>
              <input type="text" name="email" className="form-control" required placeholder='Email' onChange={handleOnChange} />
            </div>

            <div className='mt-3'>
              <input type="password" name="passWord" className="form-control" required placeholder='Mật khẩu' onChange={handleOnChange} />
            </div>

            <div className=' text-center'>

              <div className='d-flex justify-content-center'>
                <div className='my-4'>
                  <button type="submit" className="btn__Secondary px-5">Đăng nhập</button>
                </div>
              </div>

              <div className="">
                <NavLink to="/signup-page" className="cursor-pointer"> Bạn chưa có tài khoản ? Đăng ký</NavLink>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
