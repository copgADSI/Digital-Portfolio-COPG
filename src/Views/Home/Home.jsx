import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import video from '../../assets/videos/video.mp4'
import './Styles.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div id="home">
            <video loop autoPlay muted id='video'>
                <source src={video} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Hello, i'm Cristian Parada Gualteros</h1><br />
                <p>
                    I am a software developer specialized in the creation of complex systems,
                    with the premise of quality development.
                </p><br />
                <h2>Social Media:</h2>

                <a href="https://www.linkedin.com/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/copgADSI/" target="_blank">
                    <GitHubIcon />
                </a>
                <EmailIcon />

            </div>
        </div>
    )
}

export default Home