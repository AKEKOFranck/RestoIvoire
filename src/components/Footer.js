import '../styles/Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import logo1 from '../assests/pay1.jpg';
import logo2 from '../assests/pay2.jpeg';
import logo3 from '../assests/pay3.jpg';
import logo4 from '../assests/pay4.png';
import logo5 from '../assests/pay5.jpeg';





function Footer() {

    let numbers = ["07-99-77-47-49", "01-20-22-29-10", "05-22-22-29-10"];
    let emails = [<FaInstagramSquare /> , <MdOutgoingMail />];
    let moneys = [logo1, logo2, logo3, logo4, logo5];


    return(
        <div className='foot_main'>

            <div className='foot_box'>
                 <h3 className='foot_title'>Nos contacts</h3>

                 {numbers.map(number =>
                    <ul>
                        <li>{number}</li>
                    </ul>
                 )}
            </div>

             <div className='foot_box'>
                 <h3 className='foot_title'>Nos réseaux</h3>

                 {emails.map(email =>
                    <ul>
                        <li className='foot_icons'>{email}</li>
                    </ul>
                 )}
            </div>

             <div className='foot_box'>
                 <h3 className='foot_title'>Nos methodes de paiements</h3>

                 {moneys.map(money =>
                    <ul>
                        <li><img className='foot_img' src={money} alt='affiche'></img></li>
                    </ul>
                 )}
            </div>
           
        </div>
    )
}

export default Footer;