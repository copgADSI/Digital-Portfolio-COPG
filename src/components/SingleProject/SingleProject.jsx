import { Button, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom"
import "./Styles.css"
const SingleProject = ({ project }) => {
    return (
        <div className="card-ward">
            <article className="card">
                <header className="header-card">
                    <img src={project.src} alt={project.name} style={{ width: '100%' }} />
                </header>
                <footer className="foother-card">
                    <Typography variant="h6" >{project.name}</Typography> <br />
                    <Typography variant="body2">Technologies:</Typography>
                    <div className="details_container">

                        {
                            Object.values(project.technologies).map((tech) => (
                                <Typography variant="overline"><b>{tech}</b></Typography>
                            ))
                        }
                    </div>
                    <br />
                    <div>
                        <a href={project.gitHub} target="_blank">
                            <Button style={{ background: '#072f4e' }} className="repo" variant="contained" endIcon={<GitHubIcon />}>

                                GitHub

                            </Button>
                        </a>
                       
                    </div>
                </footer>
            </article>
        </div>
    )
}

export default SingleProject