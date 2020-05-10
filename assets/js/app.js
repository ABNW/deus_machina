import Highway from '@dogstudio/highway';
import { Fade, portfolioTransition} from './fade.js';


console.log(Fade);

const H = new Highway.Core({
    transitions: {
      portfolio: portfolioTransition,
      default: Fade
    }
});