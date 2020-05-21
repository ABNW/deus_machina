import Highway from '@dogstudio/highway';
import gsap from 'gsap';
import { triangleShizzSetup, triangleShizzExit} from './main.js';
import { shaderCanvasSetup, shaderCanvasExit } from './homepage.js';

export class Fade extends Highway.Transition {
  out({from, done}) {
    gsap.to(from, {opacity: 0, onComplete: done, duration: 0.5})
  }

  in({from, to, done}) {
    // Helpful Hint: 
    // To is the DOM Element -- From is the previous DOM Element
    gsap.fromTo(to, 0.5,{opacity: 0},{opacity: 1, onComplete: done});
    done(from.remove());
  }
}

export class portfolioTransition extends Highway.Transition {
  out({from, done}) {
    gsap.to(from, {opacity: 0, onComplete: done, duration: 0.5})
    triangleShizzExit();
  }

  in({from, to, done}) {
    // Helpful Hint: 
    // To is the DOM Element -- From is the previous DOM Element
    gsap.fromTo(to, 0.5,{opacity: 0},{opacity: 1, onComplete: done});
    done(from.remove());
    triangleShizzSetup();
  }
}

export class homepageTransition extends Highway.Transition {
  out({from, done}) {
    gsap.to(from, {opacity: 0, onComplete: done, duration: 0.5})
    shaderCanvasExit();
  }

  in({from, to, done}) {
    // Helpful Hint: 
    // To is the DOM Element -- From is the previous DOM Element
    gsap.fromTo(to, 2.5,{opacity: 0},{opacity: 1, onComplete: done});
    done(from.remove());
    shaderCanvasSetup();
  }
}