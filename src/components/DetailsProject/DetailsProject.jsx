import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const DetailsProject = () => {
    return (
        <div id='portfolio'>
            <Carousel>
                <div>
                    <img src={one} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={one} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={one} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default DetailsProject