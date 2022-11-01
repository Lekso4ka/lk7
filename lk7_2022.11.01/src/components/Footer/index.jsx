import React from "react";
import Logo from "../Logo";
import "./style.css";

export default () => {
    return <footer>
        <Logo/>
        <span className="copy">&copy;{new Date().getFullYear()} DogFood.ru</span>
        <a href="">Lorem.</a>
        <a href="">Reiciendis.</a>
        <a href="">Impedit.</a>
        <a href="">Porro.</a>
        <a href="">Optio.</a>
        <a href="">Quo.</a>
        <a href="">Cumque.</a>
        <a href="">Perspiciatis?</a>
        <div className="contacts">
            <p>Мы на связи</p>
            <a href="tel:+71234567890">+7(123)456-78-90</a>
            <nav>
                <a href=""><i class="fa-brands fa-vk"></i></a>
                <a href=""><i class="fa-brands fa-odnoklassniki"></i></a>
                <a href=""><i class="fa-brands fa-telegram"></i></a>
            </nav>
        </div>
    </footer>
}