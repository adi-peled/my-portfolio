<template>
  <section class="contact">
    <h2 class="title">Contact</h2>
    <div class="icons flex">
      <div class="icon-container" @click="iconClicked('Linkedin')">
        <Linkedin class="icon" />
      </div>
      <div class="icon-container" @click="iconClicked('Facebook')">
        <Facebook class="icon" />
      </div>
      <div class="icon-container" @click="iconClicked('Whatsapp')">
        <Whatsapp class="icon" />
      </div>
      <!-- <div class="icon-container" @click="iconClicked('Linkedin')">
        <Phone class="icon" />
      </div> -->
      <div class="icon-container" @click="iconClicked('Email')">
        <Email class="icon" />
      </div>
      <div class="icon-container" @click="iconClicked('Github')">
        <Github class="icon" />
      </div>
    </div>
  </section>
</template>

<script>
import './Contact.scss';
import Linkedin from '../../assets/icons/linkedin.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';
import Phone from '../../assets/icons/phone.svg';
import Email from '../../assets/icons/email.svg';
import Github from '../../assets/icons/github.svg';
export default {
  name: 'Contact',
  methods: {
    iconClicked(iconType) {
      switch (iconType) {
        case 'Linkedin':
          window.open('https://linkedin.com/in/adi-peled1');
          break;
        case 'Email':
          window.open(
            'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adipeled499@gmail.com'
          );
          break;
        case 'Whatsapp':
          window.open('https://api.whatsapp.com/send?phone=+972556699584');
          break;
        case 'Facebook':
          window.open(
            'https://www.facebook.com/profile.php?id=100003743765321'
          );
          break;
        case 'Github':
          window.open('https://github.com/adi-peled');
          break;
      }
    },
  },
  components: {
    Facebook,
    Linkedin,
    Whatsapp,
    Phone,
    Email,
    Github,
  },
};
</script>
