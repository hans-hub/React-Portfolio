import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'


const About = () => {
  return (
  <section id="contact">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ working Experience</small>

            </article>
            
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ working Experience</small>

            </article>
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ working Experience</small>

            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit 
            assumenda corrupti illum quisquam, qui magni sit eum sapiente, inventore fuga fugiat animi aspernatur ipsa verit.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>

    </section>
  )
  }
export default About