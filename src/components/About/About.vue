<template>
  <section class="about" id="about">
    <h2 class="title">About</h2>
    <div class="advantages flex">
      <div class="adv-container">
        <div class="icon-container">
          <Responsive class="icon" />
        </div>
        <div class="subtitle">Responsive</div>
        <div class="adv">
          Layouts fits on any device, phone, tablet or desktop.
        </div>
      </div>
      <!-- <div class="adv-container">
        <div class="icon-container">
          <Temp class="icon" />
        </div>
        <div class="subtitle">Latest Technologies</div>
        <div class="adv">
          using the most modren techs languages like JavaScript(ES6) SASS ,
          popular frameworks React Angular and Vue
        </div>
      </div> -->
      <div class="adv-container">
        <div class="icon-container">
          <Fast class="icon" />
        </div>
        <div class="subtitle">Dynamic</div>
        <div class="adv">
          Building single page application using state managment, dynamic
          ,reusable components and pages. Using best practices and MVC pattern.
        </div>
      </div>
      <div class="adv-container">
        <div class="icon-container">
          <E2E class="icon" />
        </div>
        <div class="subtitle">End To End</div>
        <div class="adv">
          Building full scale web apps using last modren technologies.
        </div>
      </div>
      <!-- <div class="adv-container">
        <div class="icon-container">
          <Temp class="icon" />
        </div>
        <div class="subtitle">Dynamic</div>
        <div class="adv">
          building  app using dynamic and reusable components and pages
        </div>
      </div> -->
    </div>
    <div class="footer">
      <div class="img-container">
        <img class="img" src="../../assets/profile.jpeg" />
      </div>
      <!-- <div class="info">
      
        <div class="desc">
          I am graduate of
          <span class="bold"> Coding Academy</span>
          an intensive bootcamp that qualifies Full Stuck developers.
        </div>
      </div> -->

      <div class="info">
        <div class="desc">
          I am Full Stack Web Developer with about 4 years of coding experience.
          Building single-page-applications using advanced web technologies such
          as Node.js, Vue.js, React and Angular. I am graduate of Coding
          Academy- an intensive bootcamp that qualifies web developers
        </div>
        <h2 class="subtitle">My experience:</h2>
        <div class="desc">
          <h4 class="subsubtitle">
            I have been working as Full Stack developer at Journeez for the past
            year
          </h4>
          <ul>
            <li>
              Used Angular as framework to create single page application which
              can bind data to specific views and syncromnize data with server
              using Scss and bootstrap.
            </li>
            <li>
              Leveraged MVC design pattern to organized Angular controller,
              custom directive and views
            </li>
            <li>Designed Node.js apps through Express using typeorm</li>
            <li>
              worked closley to clientss to established problems and system
              designs
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import './About.scss';
import Temp from '../../assets/skill-icons/angular.svg';
import Fast from '../../assets/icons/rocket.svg';
import Responsive from '../../assets/icons/display.svg';
import E2E from '../../assets/icons/fullscreen.svg';
export default {
  name: 'About',
  components: {
    Temp,
    Fast,
    Responsive,
    E2E,
  },
};
</script>
