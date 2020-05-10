import * as Rx from 'rxjs';
import { map, merge, withLatestFrom, scan } from 'rxjs/operators'

const docElm = document.documentElement
const {
  clientWidth,
  clientHeight
} = docElm;

// console.log(Rx);
// console.log('Rx.map');
// console.log(map);


let smoothMove$ = {};

// Stream of all mousemove events
const mouseMove$ = Rx.fromEvent(docElm, "mousemove").pipe(
    map(event => ({
      x: event.clientX,
      y: event.clientY
      })),
    );

// Stream of all touchmove events
const touchMove$ = Rx.fromEvent(docElm, "touchmove").pipe(
    map(event => ({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    }))
  );

console.log(touchMove$);

// Combination of mousemove and touchmove streams
const move$ = mouseMove$.pipe(
  merge(touchMove$)
  );

console.log('move$', move$);

// Stream of requestAnimationFrame ticks
const animationFrame$ = Rx.interval(0, Rx.animationFrameScheduler);

console.log('animationFrame$', animationFrame$)

// function lerp(start, end) {
//   const dx = end.x - start.x;
//   const dy = end.y - start.y;
//   const rate = 0.05;

//   return {
//     x: start.x + dx * rate,
//     y: start.y + dy * rate,
//   };
// }

// const classNames = ["st0", "st1", "st2", "st3", "st4"];
// const ids = ["project-left-1", "project-right-2"];
// let sets = [[]];
// const dampeners = [0.01, 0.015, 0.01, 0.02, 0.01];   

// const triangleShizzSetup = function () {
//   let count = 0;

//   for (let id of ids){
//     console.log('id', id);
//     for (let className of classNames) {
//       if(sets[count] !== undefined ) {
//         sets[count].push(document.getElementById(id).getElementsByClassName(className));
//       } else {
//         sets.push([]);
//         sets[count].push(document.getElementById(id).getElementsByClassName(className))
//       }
//     }
//     count++;
//   }

//   smoothMove$ = animationFrame$.pipe(
//     withLatestFrom(move$, (tick, move) => move),
//     scan(lerp)
//   );

//   console.log(smoothMove$);


// //   console.log('set', sets);
// //   console.log('dampeners', dampeners);

// //   let i = 0;

// //   console.log(smoothMove$);

// //   smoothMove$.subscribe(pos => {
// //     for (const set of sets) {
// //       for (const [index, value] of set.entries() ) {
// //         for (const triangle of value) {
// //           const x = pos.x * (index == 4 ? -dampeners[index] : dampeners[index]);
// //           const y = pos.y * (index == 4 ? -dampeners[index] : dampeners[index]);
// //           // const rotX = (pos.y / clientHeight * -50) + 25;
// //           // const rotY = (pos.x / clientWidth * 50) - 25;
// //           i++;
// //           if (i === 100) {
// //             console.log(y);
// //             console.log(x);
// //             i = 0;
// //           }
// //           triangle.setAttribute("transform", `translate(${x}, ${y})`);
// //         }
// //       }
// //     }
// //   });
// }();

// // export const triangleShizzExit = function() {
// //   console.log('triangleShizzExit unsubscribing');
// //   // console.log(smoother);
// //   // smoother.unsubscribe();
// // }
