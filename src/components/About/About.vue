<template>
  <section class="about" id="about">
    <h2 class="title">About</h2>
    <div class="advantages">
      <div class="advantage">
        <span class="bold">Responsive-</span> layouts fits on any device, phone,
        tablet or desktop.
      </div>
      <div class="advantage">
        <span class="bold">Latest Technologies-</span> using the most modren
        techs languages like JavaScript(ES6) SASS etc...
      </div>
      <div class="advantage">
        <span class="bold"> Fast&Organized-</span> using state management, best
        practices , MVC, single page application
      </div>
      <div class="advantage">
        <span class="bold"> End To End-</span> building full scale web apps,
        frontend and backend, using sql or no-sql date bases
      </div>
    </div>
    <div class="flex">
      <img class="profile-img" src="../../assets/profile.jpeg" />
      <div class="info">
        <div class="desc">
          Hi, my name is Adi Peled and I am full stack developer,Experienced
          with building single-page-applications , using advanced web
          technologies such as Node.js, Vue.js, React and Angular.
        </div>
        <!-- <div class="desc">
        I have a year and a half coding experience, I am graduate of
        <a href="https://www.coding-academy.org/index.php" target="_blank">
          Coding Academy</a
        >.
     For the past year I have been working  at Journeez
      </div> -->
        <h3 class="subtitle">skills</h3>
        <div class="skills flex">
          <ul>
            <li>HTML5 <HTML5 class="icon" /></li>
            <li>CSS3 SASS <CSS3 class="icon" /></li>
            <li>JavaScript <JS class="icon" /></li>
            <li>TypeScript <TS class="icon" /></li>
            <li>Bootstrap <Bootstrap class="icon" /></li>
          </ul>
          <ul>
            <li>React <React class="icon" /></li>
            <li>Redux <Redux class="icon" /></li>
            <li>Angular <Angular class="icon" /></li>
            <li>Vue.js <Vue class="icon" /></li>
            <li>Node.js <Nodejs class="icon" /></li>
          </ul>
          <ul>
            <li>MongoDB <MongoDB class="icon" /></li>
            <li>Firebase <Firebase class="icon" /></li>
            <li>PostgreSQL <PostgreSQL class="icon" /></li>
            <li>Socket.io <SocketIO class="icon" /></li>
            <li>Git <Github class="icon" /></li>
          </ul>
          <ul>
            <li>REST API</li>
            <li>AJAX</li>
            <li>MobX</li>
            <li>i18n</li>
            <li>MaterialUI</li>
          </ul>
        </div>
        <ul>
          <li>phone:0556699584</li>
          <li>email:adipeled499@gmail.com</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import './About.scss';
import HTML5 from '../../assets/skill-icons/html5.svg';
import Bootstrap from '../../assets/skill-icons/bootstrap.svg';
import CSS3 from '../../assets/skill-icons/css3.svg';
import Firebase from '../../assets/skill-icons/firebase.svg';
import Github from '../../assets/skill-icons/github.svg';
import Angular from '../../assets/skill-icons/angular.svg';
import MongoDB from '../../assets/skill-icons/mongodb.svg';
import JS from '../../assets/skill-icons/javascript.svg';
import TS from '../../assets/skill-icons/typescript.svg';
import React from '../../assets/skill-icons/react.svg';
import Redux from '../../assets/skill-icons/redux.svg';
import Vue from '../../assets/skill-icons/vue.svg';
import MobX from '../../assets/skill-icons/mobx.svg';
import Nodejs from '../../assets/skill-icons/nodejs.svg';
import PostgreSQL from '../../assets/skill-icons/postgresql.svg';
import SocketIO from '../../assets/skill-icons/socket-io.svg';
export default {
  name: 'About',
  components: {
    HTML5,
    Bootstrap,
    CSS3,
    Firebase,
    Github,
    MongoDB,
    Angular,
    JS,
    TS,
    React,
    Redux,
    Vue,
    MobX,
    Nodejs,
    PostgreSQL,
    SocketIO,
  },
};
</script>
