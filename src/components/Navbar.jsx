import React from "react";
import Logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {


    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">

                <h1 className="text-3xl font-semibold text-white">Jey</h1>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
                <a href="https://www.linkedin.com/in/zaidaanismail/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>

                <a href="https://www.github.com/zaidanpoin" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <a href="https://www.instagram.com/zaidanpoin/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>

            </div>

        </nav >
    )


}

export default Navbar;