import Highway from '@dogstudio/highway';
import gsap from 'gsap';
// import { triangleShizzSetup, triangleShizzExit } from './main.js';

export class Fade extends Highway.Transition {
  out({from, done}) {
    gsap.to(from, {opacity: 0, onComplete: done, duration: 0.5})
  }

  in({from, to, done}) {
    // to is the DOM Element
    // From is the previous DOM Element
    gsap.fromTo(to, 0.5,{opacity: 0},{opacity: 1, onComplete: done});
    done(from.remove());
    console.log('to', to);
    console.log('from', from);
  }
}

export class portfolioTransition extends Highway.Transition {
  out({from, done}) {
    gsap.to(from, {opacity: 0, onComplete: done, duration: 0.5})
    // done(triangleShizzExit());
  }

  in({from, to, done}) {
    // to is the DOM Element
    // From is the previous DOM Element
    gsap.fromTo(to, 0.5,{opacity: 0},{opacity: 1, onComplete: done});
    done(from.remove());
    // triangleShizzSetup();
  }
}