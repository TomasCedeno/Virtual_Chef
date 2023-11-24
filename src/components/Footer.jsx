import React from "react";
import {MdOutlineFoodBank} from "react-icons/md"

function Footer() {
    return (
        <div>
            <footer className="footer p-10 bg-base-100 text-base-content">
                <aside>
                    <MdOutlineFoodBank size={100}/>
                    <p>
                        Virtual Chef
                        <br />
                        Recetas que inspiran tu cocina.
                    </p>
                </aside>
                <nav>
                    <header className="footer-title">Mapa del sitio</header>
                    <a href="/#" className="link link-hover">Todas las recetas</a>
                    <a href="/#" className="link link-hover">Categorias</a>
                </nav>
                <nav>
                    <header className="footer-title">Virtual Chef</header>
                    <a href="/#" className="link link-hover">Acerca de nosotros</a>
                    <a href="/#" className="link link-hover">Contacto</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a href="/#" className="link link-hover">Aviso de privacidad</a>
                    <a href="/#" className="link link-hover">Política de datos personales</a>
                    <a href="/#" className="link link-hover">Términos y condiciones</a>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
