import '../styles/Third.css'
import { FaMapLocationDot } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";



function Third() {

    const infos = [
        {id:1, name: "places", quantité: 150, image: <MdGroups />},
        {id:2, name: "localisation", quantité:<a className='info_link' href='https://maps.app.goo.gl/tYGSUBMCMSky7YqT9'>Cliquez-ici</a>, image: <FaMapLocationDot /> },
        {id:3, name: "services client", quantité: "24/24h", image: <FaPhoneSquare />}
    ];




    return(
        <div className='third_main'>
            <div className='third_box'>
                {infos.map((info) => (
                    <div className='third_item' key={info.id}>
                        <div className='third_icons'>{info.image}</div> 
                        <h3>{info.name}</h3>
                        <p>{info.quantité}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Third;