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
                <p>La tienda online de cosmética natural donde comprar todos los productos de Freshly Cosmetics.
                    Siente en tu piel los mejores productos con +99% ingredientes naturales de calidad con resultados reales.
                    <br />
                    <br />
                    Porque creemos que se pueden hacer las cosas de otra forma, formulamos cosmética vegana, segura y sostenible que generará un gran cambio en tu piel y en el planeta.
                    Te enamorarán las texturas y aromas de nuestros productos que además, son aptos para pieles sensibles. Tus productos Freshly llegarán en un paquete 100% reciclable plastic-free, con envases fabricados en vidrio, aluminio, cartón y madera, ¡totalmente reutilizables y reciclables!
                    <br />
                    <br />
                    Cuida tu piel con la mejor cosmética natural de Freshly Cosmetics.</p>

                <br />
            </div>
        </div>
    )
}

export default About