import Highway from '@dogstudio/highway';
import gsap from 'gsap';

export default class Fade extends Highway.Transition {
  out({from, done}) {
    gsap.to(from, 0.5,{opacity: 0, onComplete: done})
    done();
  }

  in({from, to, done}) {
    from.remove();
    gsap.fromTo(to, 0.5,{opacity: 0},{opacity: 1, onComplete: done});
        
  }
}