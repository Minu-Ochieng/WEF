import  logo from'../image/logo.png';
import "./index.css";

const Navbar = () =>{
    return(
        <>
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="Dhaki Logo" className="logo"/>
            </div>
            < div className='pages'>
                <a href='#'>Home</a>
                <a href='#'>Videos</a>
                <a href='#'className='active'>Podcast</a>
                <a href='#'>Blogs</a>
                <a href='#'>Portfolios</a>
            </div>
        </div>

        </>
    )
};
export default Navbar