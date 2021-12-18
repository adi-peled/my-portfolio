<template>
  <section class="skills col" id="skills">
    <h3 class="title">skills</h3>
    <div class="skills-container">
      <ul>
        <li>
          <div class="icon-container">
            <HTML5 class="icon" />
          </div>
          HTML5
        </li>
        <li>
          <div class="icon-container">
            <CSS3 class="icon" />
          </div>
          CSS3 SASS
        </li>
        <li>
          <div class="icon-container">
            <JS class="icon" />
          </div>
          JavaScript
        </li>
        <li>
          <div class="icon-container">
            <TS class="icon" />
          </div>
          TypeScript
        </li>
        <li>
          <div class="icon-container">
            <Bootstrap class="icon" />
          </div>
          Bootstrap
        </li>
      </ul>
      <ul>
        <li>
          <div class="icon-container">
            <React class="icon" />
          </div>
          React
        </li>
        <li>
          <div class="icon-container"><Redux class="icon" /></div>
          Redux
        </li>
        <li>
          <div class="icon-container"><Angular class="icon" /></div>
          Angular
        </li>
        <li>
          <div class="icon-container"><Vue class="icon" /></div>
          Vue.js
        </li>
        <li>
          <div class="icon-container"><Nodejs class="icon" /></div>
          Node.js
        </li>
      </ul>
      <ul>
        <li>
          <div class="icon-container"><MongoDB class="icon" /></div>
          MongoDB
        </li>
        <li>
          <div class="icon-container"><Firebase class="icon" /></div>
          Firebase
        </li>
        <li>
          <div class="icon-container"><PostgreSQL class="icon" /></div>
          PostgreSQL
        </li>
        <li>
          <div class="icon-container"><SocketIO class="icon" /></div>
          Socket.io
        </li>
        <li>
          <div class="icon-container"><Github class="icon" /></div>
          Git
        </li>
      </ul>
      <!-- <ul>
        <li>REST API</li>
        <li>AJAX</li>
        <li>MobX</li>
        <li>i18n</li>
        <li>MaterialUI</li>
      </ul> -->
    </div>
  </section>
</template>

<script>
import './Skills.scss';
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
  name: 'Skills',
  data() {
    return {
      projects: [],
    };
  },
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
