import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Experience </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>REACT</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* THIS IS THE END OF THE FRONTEND DEV */}



        <div className='experience__backend'>
          <h3>Backend Experience</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MYSQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
                <h4>PYTHON</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience