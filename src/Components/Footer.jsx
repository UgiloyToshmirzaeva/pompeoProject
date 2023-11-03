import '../assets/CSS/Footer.css'
import photoEmail from '../images/photoEmail.png'
import photoMap from '../images/photoMap.png'
import photoPhone from '../images/photoPhone.png'

let footCard =[
    {
        img : photoEmail,
        title : "EMAIL",
        text: 'pompeopotery@gmail.com',
    },
    {
        img : photoMap,
        title : "FIND",
        text: 'Central Park, Manhattan New York, 1101',
    },
    {
        img : photoPhone,
        title : "CALL",
        text: '+1 292 345 678',
    }
]

export default function Footer(props){
    return(
        <div>
            <div className="footer">
            <div className="footer_title">
                <h2 className="logo"><a href="#">Pompeo</a></h2>
                <p>I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed.</p>
            </div>

            <div className="footer_card">
                {
                    footCard.map((item, i)=>{
                        return <div className="card" key={i}>
                            <img src={item.img} alt="loading..." />
                            <h4>{item.title}</h4>
                            <p><a href="#">{item.text}</a></p>
                        </div>
                    })
                }
            </div>
            </div>
            <div className="foo">
                <p><span>Template design by</span> Dorian Hoxha - Image License Info <span>Powered by</span> Webflow</p>
            </div>
        </div>
    )
}