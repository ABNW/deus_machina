import Highway from '@dogstudio/highway';
import { Fade, portfolioTransition, homepageTransition} from './fade.js';


console.log(Fade);

const H = new Highway.Core({
    transitions: {
      home: homepageTransition,
      portfolio: portfolioTransition,
      default: Fade
    }
});