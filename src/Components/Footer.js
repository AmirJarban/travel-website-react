import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './../Css/Footer.css';

function Footer() {
  return (
    <div className='footer_container'>
        <section className='footer_subscription'>
            <p>Join the Adventure to receive out best vacation deals</p>
            <p>You can unsubscribe at any time.</p>
            <form>
                <input className='footer_input' type='email' name='email' placeholder='Your Email' />
                <Button className='btn' buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </section>
        <div class='footer_links'>
          <div className='footer_link_wrapper'>
            <div class='footer_link_items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer_link_items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer_link_wrapper'>
            <div class='footer_link_items'>
              <h2>Videos</h2>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>
            <div class='footer_link_items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        <section className='social_media'>
          <div className='social_media_wrap'>
            <div className='footer_logo'>
              <Link to='/' className='social_logo'>
                TRVL <i className='fab fa-typo3' />
              </Link>
            </div>
            <small className='website_rights'>TRVL 2022</small>
            <div className='social_icons'>
              <Link 
              className='social_icon_link facebook'
              to='/'
              >
              <i className='fab fa-facebook-f' />
              </Link>
              <Link 
              className='social_icon_link instagram'
              to='/'
              >
              <i className='fab fa-instagram' />
              </Link>
              <Link 
              className='social_icon_link twitter'
              to='/'
              >
              <i className='fab fa-twitter' />
              </Link>
              <Link 
              className='social_icon_link linkedin'
              to='/'
              >
              <i className='fab fa-linkedin' />
              </Link>
              <Link 
              className='social_icon_link youtube'
              to='/'
              >
              <i className='fab fa-youtube' />
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Footer;