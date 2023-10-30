import { Observable, fromEvent, of, from, interval, timer } from "rxjs";

const API_URL = "https://api.github.com/users/octocat";

const observer = {
  next: (value) => console.log("next", value),
  error: (err) => console.error("error", err),
  complete: () => console.log("complete"),
};

// const sourceClick = fromEvent(document, "click");
// const sourceKey = fromEvent(document, "keyup");

// const sub1 = sourceClick.subscribe(observer);
// const sub2 = sourceKey.subscribe(observer);

// setTimeout(() => {
//   console.log("unsubscribing");
//   sub1.unsubscribe();
// }, 3000);

// const numbers = of(1, 2, 3, 4, 5);
// numbers.subscribe(observer);

// const arrayNumber = from([1, 2, 3, 4, 5]);
// arrayNumber.subscribe(observer);

const fetch$ = from(fetch(API_URL));
fetch$.subscribe(observer);

function* hello() {
  yield "Hello";
  yield "World";
}

const generator = hello();
// console.log(generator.next().value);
// console.log(generator.next().done);
// console.log(generator.next().value);
// console.log(generator.next().done);
// console.log(generator.next().value);
// console.log(generator.next().done);

const generatorObs$ = from(generator);
generatorObs$.subscribe(observer);

// const interval$ = interval(500);
// interval$.subscribe(console.log);

const timer$ = timer(2000, 1000);
timer$.subscribe(console.log);
