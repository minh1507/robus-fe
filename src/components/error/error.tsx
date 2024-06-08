import { useLocation, useNavigate } from "react-router-dom";
import './error.scss'

export function Error() {
    const navigate = useNavigate();
    const location = useLocation();

    const click = () => {
        const pathArr = location.pathname.split('/')
        if(pathArr.includes('admin')){
          navigate('/admin')
        }else{
          navigate('/')
        }
    }


  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>
            4<span></span>4
          </h1>
        </div>
        <h2>Oops! Page Not Be Found</h2>
        <button onClick={() => click()}>Back to homepage</button>
      </div>
    </div>
  );
}

export default Error;
