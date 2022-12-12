import React from 'react'
import "./About.scss"

const About = () => {
    const images = [
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4b91de148900247.62de31d44b429.jpg",
    ];
    return (
        <div className="product">
            <div className="left">
                <div className="images-about">
                    <img src={images[0]} alt="" />
                </div>
            </div>
            <div className="right">
                <p>WE WORK WITH THE LEADING COSMETIC CLINICAL TRIAL SPECIALISTS TO CONDUCT TARGETED INDEPENDENT TRIALS THAT TEST THE EFFICACY OF OUR FORMULATIONS. WE ARE ALSO PROUD TO PARTNER WITH BEAUTY BIBLE, THE UK’S DEFINITIVE SOURCE OF GLOBAL BEAUTY PRODUCT REVIEWS. THEY CONDUCT INDEPENDENT BLIND TRIALS OF OUR ENTIRE RANGE WITH A PANEL OF 50 DISCERNING BEAUTY-INVOLVED CONSUMERS.</p>
                <br />
                <p>COMPOSTABLE PACKAGING
                    Mycelium is the vegetative root structure of a mushroom which is grown around a mould and forms a custom-sized, secure structure. To make the product stronger, locally sourced agricultural waste such as corn and barley husks are added to the mycelium. The final packaging quite literally grows around its mould in a matter of days.
                    <br />
                    <br />
                    1. It begins with AGRICULTURAL waste
                    <br />
                    Agricultural waste, such as corn and barley husks are collected from farmers, then sorted and cleaned. The mixture is ground before the start of the Mycelium growing process.
                    <br /> <br />
                    2. Adding MYCELIUM
                    <br />
                    The root system of mushrooms, mycelium, is added to the mix of agricultural waste. It acts as nature’s glue to bind it together around a mould.
                    <br />
                    <br />
                    3. MUSHROOM material
                    <br />
                    After a few days of growth it is placed in a heat press to remove any excess moisture and prevent further mycelium growth. When dry the material can be removed from the mould and is ready to use.
                    <br />
                    <br />
                    4. COMPOSTING
                    <br />
                    The material is fully biodegradable, but won’t start to degrade unless it is exposed to the right conditions. This packaging can be composted and the mycelium will break down in about a month. As soon as it is exposed to regular moisture it will disappear withouta trace.</p>
            </div>
        </div>
    )
}

export default About