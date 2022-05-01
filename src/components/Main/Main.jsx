import React from 'react';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';
import MainSytles from './MainStyle';
import { Carousel, Collapse } from 'antd';
import products from '../../assets/products';
import Card from '../Card/Card';
import traktor from '../../assets/images/image41.png';
import img1 from '../../assets/images/Vector-1.png';
import img2 from '../../assets/images/Vector.png';
import wordpress_logo from '../../assets/images/logos_wordpress.svg';
import microsoft_logo from '../../assets/images/logos_microsoft.svg';
import google_logo from '../../assets/images/logos_google.svg';
import slack_logo from '../../assets/images/logos_slack.svg';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {MdArrowForwardIos} from 'react-icons/md';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import portret from '../../assets/images/portret.png';

const Main = () => {
  const {Panel} = Collapse;
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, molestias. Accusamus et molestiae eaque velit.'
  const caruselSettings = {
    // dots: true,
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
  return (
    <MainSytles>
      <div className="top"></div>
      <section id='products' className="production">
        <div className="container">
          <h2 className="production__title">
            our production
          </h2>
          <p className="production__desc">
            "Your work is going to fill a large part of your life, and the only way to <br /> be truly satisfied is to do what you believe is great work"
          </p>
          <div className="production__items">
              {products.map((item, index) => (
                <div key={index} className="production__card">
                    <Card  card={item}/>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="about__inners">
            <div className="about__left">
              <h2 className="about__title">
                little ABout our company 
              </h2>
              <p className="about__desc">
                "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
              </p>
              <div className="about__more">
                <Link className='about__more-links' to='/'>MORE ABOUT</Link>
                <Link className='about__more-links' to='/'>OUR YOUTUBE</Link>
              </div>
            </div>
            <div className="about__right">
              <img src={traktor} alt="traktor" className="about__img img1" />
              <img src={img1} alt="traktor" className="about__img img2" />
              <img src={img2} alt="traktor" className="about__img img3" />
            </div>
          </div>
        </div>
        <div className="about__bottom">
          <div className="container">
            <div className="about__carusel">
              <div className="carusel__inners">
                <Carousel  {...caruselSettings} prevArrow={<LeftOutlined />} nextArrow={<MdArrowForwardIos />} >
                  <div>
                    <img src={microsoft_logo} alt="Microsoft" className="carusel__img" />
                  </div>
                  <div>
                    <img src={google_logo} alt="Google" className="carusel__img" />
                  </div>
                  <div>
                    <img src={slack_logo} alt="Slack" className="carusel__img" />
                  </div>
                  <div>
                    <img src={wordpress_logo} alt="Wordpress" className="carusel__img" />
                  </div>
                  <div>
                    <img src={microsoft_logo} alt="Microsoft" className="carusel__img" />
                  </div>
                  <div>
                    <img src={google_logo} alt="Google" className="carusel__img" />
                  </div>
                  <div>
                    <img src={slack_logo} alt="Slack" className="carusel__img" />
                  </div>
                  <div>
                    <img src={wordpress_logo} alt="Wordpress" className="carusel__img" />
                  </div>
                </Carousel>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </section>
      <section id="blog">
        <div className="container">
          <div className="blog__top">
            <div className="blog__right">
              <h3 className="blog__title">See why we are trusted the world over</h3>
              <p className="blog__desc">The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency.</p>
              <div className="accordion">
                <Collapse accordion  expandIconPosition='right' expandIcon={({isActive})=> isActive ? <AiOutlineMinus className='acc__icon'/> : <AiOutlinePlus className='acc__icon'/>  }>
                  <Panel header="Do you provide customer support?" key="1">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="How much traffic can the hosting handle?" key="2">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="Do you have any questions for us?" key="3">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="What is your return policy?" key="4">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </div>
            </div>
           
          </div>
          <div className="blog__bottom">
            <h4 className="bottom__title">How our client made <br /> 10x revenue</h4>
            <div className="bottom__items">
              <div className="bottom__left">
                <img src={portret} alt="portret" className="bottom__img" />
                <div className="bottom__info">
                  <h4 className="info__title">
                    "I learned so much, <br /> even as a <br /> professional".
                  </h4>
                  <p className="info__desc">
                    "Ut vehicula lacus a lacus tempor, nec viverra justo condimentum. Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
                  </p>
                  <p className="info__author">
                    Juan Huang
                  </p>
                </div>
                <Link className='bottom__link' to='/'>more stories</Link>
              </div>
              <div className="bottom__right">
                <h3 className="bottom__right-title">
                  Other successful <br /> stories
                </h3>
                <div className="right__items">
                  <h4 className="right__items-title">Amateur</h4>
                  <p className="right__items-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
                  </p>
                  <Link className='right__items-link'>More Information</Link>
                </div>
                <div className="right__items">
                  <h4 className="right__items-title">Beginner</h4>
                  <p className="right__items-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
                  </p>
                  <Link className='right__items-link'>More Information</Link>
                </div>
                <div className="right__items">
                  <h4 className="right__items-title">Professional</h4>
                  <p className="right__items-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
                  </p>
                  <Link className='right__items-link'>More Information</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </MainSytles>
  );
}

export default Main;
