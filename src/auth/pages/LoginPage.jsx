import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();
  const onLogin = () =>  {
    navigate('/marvel', { replace: true } );
  }

  
  return (
    <>
      <div className="container login_container">
            <h1  className="login_header" >Handcrafted with 
            <span className="login_css login_css1"> C</span><span className="login_css">SS</span>
            </h1>
            <p className="login_paragraph">Designed for PC - responsively adapted for mobile</p>
            <div className="login_images-container">
              <img src="../images/react.png" alt="" className="img_login-1"/>
              <img src="../images/vite.svg" alt="" className="img_login-2"/>
              <img src="../images/css.svg" alt="" className="img_login-3"/>
            </div>

            <div className="login_button-container">
                <button 
                    className="login_button"
                    onClick={ onLogin }
                >
                  Login
                </button>
            </div>
      </div>
    </>
  )
}
