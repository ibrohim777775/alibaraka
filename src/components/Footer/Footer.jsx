import React from 'react';
import FooterStyles from './FooterStyle';
import icon from '../../assets/images/icon_footer.png';
import { Link } from 'react-router-dom';
import coding from '../../assets/images/coding.svg';
import media from '../../assets/images/media.svg';

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__top">
          <div className="footer__left">
            <Link to='/'>
              <img src={icon} alt="Ali Baraka" className="footer__icon" />
            </Link>
            <p className="footer__left-info">
              Tashkent, Mustakillik St, 15 <br />
              Tel: <a className='footer__tel' href="tel:+998990000000"> +998 99 000 00 00</a> <br />
              E-mail: <a className='footer__mail' href="mailto:hello@alibaraka.com">hello@alibaraka.com</a> 
            </p>
          </div>
          <div className="footer__right">
            <div className="footer__items">
              <h4 className="footer__title">
                About us
              </h4>
              <ul>
                <li className='footer__link'>
                  <Link to='/'>About us</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Our team</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Frequent Questions</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <h4 className="footer__title">
                Products
              </h4>
              <ul>
                <li className='footer__link'>
                  <Link to='/'>Plyonka</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Zajim</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Isitish x Sovutish</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Suv taqsimoti</Link>
                </li>
              </ul>
            </div>
            <div className="footer__items">
              <h4 className="footer__title">
                Blog
              </h4>
              <ul>
                <li className='footer__link'>
                  <Link to='/'>10X</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Gardening</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Melon</Link>
                </li>
                <li className='footer__link'>
                  <Link to='/'>Water dist</Link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="footer__bottom">
          <p className="bottom__text">Все права защищены.</p>
          <div className="bottom__right">
            Разработано в
            <img src={coding} alt="abba coding" className="company" />
            <img src={media} alt="abba media" className="company" />
          </div>
        </div>
      </div>
      <div className="bottom__bg"></div>
    </FooterStyles>
  );
}

export default Footer;
