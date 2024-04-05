import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react";
import litigation from "@/public/assets/litigation.jpg"

const Slider = () => {
    return ( <div>
            <CCarousel>
                <CCarouselItem>
                    <CImage src={litigation.src} />
                    <CCarouselCaption>
                        <h3>Welcome</h3>
                        <p>Ace & Grit LP</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={litigation.src} />
                    <CCarouselCaption>
                        <h3>Welcome</h3>
                        <p>Ace & Grit LP</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={litigation.src} />
                    <CCarouselCaption>
                        <h3>Welcome</h3>
                        <p>Ace & Grit LP</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={litigation.src} />
                    <CCarouselCaption>
                        <h3>Welcome</h3>
                        <p>Ace & Grit LP</p>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
        </div> );
}
 
export default Slider;