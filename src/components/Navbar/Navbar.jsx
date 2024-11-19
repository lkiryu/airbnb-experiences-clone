import logo from '../../assets/airbnb.png'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <img src={logo} alt='AirBnb logo' className='logo'/>
        </nav>
    )
}