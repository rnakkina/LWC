import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData=[
        {
                    src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
                    header : "First Card",
                    description : "First card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "second Card",
            description : "second card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "third Card",
            description : "third card description."
        }
    ]

    percentage=10
    keyHandler(event)
    {
        this.percentage = event.target.value
    }
    handleClick(event)
    {
        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }
}