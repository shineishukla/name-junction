import React from 'react';
import './Header.css';


const Header = ({headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img src="https://img.freepik.com/premium-vector/woman-pointing-web-browser-online-search-engine-bars-seo-optimization-concept-illustration_270158-291.jpg" 
            alt="logo" 
            className={`head-img ${headerExpanded 
                ? 'head-img-expanded'
                : 'head-img-collapsed'
                }`} />
            <h1 className={`head-title ${headerExpanded
                ? 'head-title-expanded'
                : 'head-title-collapsed'
            }`}>
                {headTitle}</h1>
        </div>
    );
}

export default Header;