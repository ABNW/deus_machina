import Highway from '@dogstudio/highway';
import Fade from './fade.js';

console.log(Fade);

const H = new Highway.Core({
    transitions: {
      default: Fade
    }
});