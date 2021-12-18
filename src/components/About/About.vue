<template>
  <section class="about" id="about">
    <h2 class="title">About</h2>
    <div class="advantages flex">
      <div class="adv-container">
        <div class="icon-container">
          <Temp class="icon" />
        </div>
        <div class="subtitle">Responsive</div>
        <div class="adv">
          layouts fits on any device, phone, tablet or desktop.
        </div>
      </div>
      <div class="adv-container">
        <div class="icon-container">
          <Temp class="icon" />
        </div>
        <div class="subtitle">Latest Technologies</div>
        <div class="adv">
          using the most modren techs languages like JavaScript(ES6) SASS ,
          popular frameworks React Angular and Vue
        </div>
      </div>
      <div class="adv-container">
        <div class="icon-container">
          <Temp class="icon" />
        </div>
        <div class="subtitle">Fast&Organized</div>
        <div class="adv">
          building single page application-using state managment, using best
          practices, mvc
        </div>
      </div>
      <div class="adv-container">
        <div class="icon-container">
          <Temp class="icon" />
        </div>
        <div class="subtitle">End To End</div>
        <div class="adv">
          building full scale web apps including , using sql or no-sql date
          bases
        </div>
      </div>
      <div class="adv-container">
        <div class="icon-container">
          <Temp class="icon" />
        </div>
        <div class="subtitle">Dynamic</div>
        <div class="adv">
          building the app using dynamic and reusable components and pages
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="img-container">
        <img class="img" src="../../assets/profile.jpeg" />
      </div>
      <div class="info">
        <h2 class="subtitle">My experience:</h2>
        <div class="desc">
          I have been working as Full Stack developer at Journeez for the past
          year.
          <ul>
            <li>
              Used Angular as framework to create single page application which
              can bind data to speipic views and syncromnize data with server
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
        <div class="desc">
          I am graduate of
          <span class="bold"> Coding Academy</span>
          an intensive bootcamp that qualifies Full Stuck developers.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import './About.scss';
import Temp from '../../assets/skill-icons/angular.svg';
export default {
  name: 'About',
  components: {
    Temp,
  },
};
</script>
