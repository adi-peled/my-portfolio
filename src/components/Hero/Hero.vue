<template>
  <section class="hero" id="home">
    <!-- <p>need bgc</p> -->
    <div class="title word">
      <span>A</span>
      <span>d</span>
      <span>i</span>
      <span> &nbsp; </span>
      <span>P</span>
      <span>e</span>
      <span>l</span>
      <span>e</span>
      <span>d</span>
    </div>

    <div class="console-container">
      <span id="text"></span>
      <div class="console-underscore" id="console">&#95;</div>
    </div>
  </section>
</template>

<script>
import './Hero.scss';
export default {
  name: 'Hero',
  mounted() {
    this.consoleText([`Full Stack Web Developer `], 'text', ['#1593ff']);
    this.letterAnimation();
  },
  methods: {
    consoleText(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
      target.setAttribute('style', 'color:' + colors[0]);
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);
      window.setInterval(function () {
        if (visible === true) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';

          visible = true;
        }
      }, 400);
    },
    letterAnimation() {
      const spans = document.querySelectorAll('.word span');
      spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
          e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
          e.target.classList.remove('active');
        });

        // Initial animation
        setTimeout(() => {
          span.classList.add('active');
        }, 750 * (idx + 1));
      });
    },
  },
};
</script>
