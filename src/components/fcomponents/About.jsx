import React from 'react'
import aboutImage from './fimages/about2.png'

const About = () => {
  return (
    <>

<section id="about" class="about">
      <div class="container">

        <div class="row justify-content-between">
          <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={aboutImage} class="img-fluid" alt="" data-aos="zoom-in"/>
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">Why choose us??</h3>
            <p data-aos="fade-up" data-aos-delay="100">
            SyncSole is here to help you connect with like-minded individuals who are also on the journey to find true love and companionship.
            </p>
            <div class="row">
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <i class="bx bx-receipt"></i>
                <h4>Best Profiles</h4>
                <p> Unlike others, with us, you can find the right match by connecting with someone who shares your future goals.</p>
              </div>
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <i class="bx bx-cube-alt"></i>
                <h4>Empathy:</h4>
                <p>Allowing individuals to deeply understand each other’s feelings and perspectives</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    </>
  )
}

export default About