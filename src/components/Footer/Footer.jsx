import React from 'react';

const Footer = () => {
    const day = new Date();
    const year = day.getFullYear();
    console.log(year)
    return (
        <div>
            <p>&copy; copyright <a href="https://github.com/rashidul191"> Rashidul </a>{year}</p>
        </div>
    );
};

export default Footer;