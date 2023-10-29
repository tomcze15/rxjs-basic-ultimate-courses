import { Observable } from "rxjs";

const observer = {
  next: (value) => console.log("next", value),
  error: (err) => console.error("error", err),
  complete: () => console.log("complete"),
};

const observable = new Observable((subcriber) => {
  let count = 0;

  const id = setInterval(() => {
    subcriber.next(count);
    // subcriber.complete();
    count++;
  }, 1000);

  return () => {
    console.log("called");
    clearInterval(id);
  };
});

console.log("before");
const subscription = observable.subscribe(observer);
console.log("after");

const subscriptionTwo = observable.subscribe(observer);

subscription.add(subscriptionTwo);

setTimeout(() => {
  subscription.unsubscribe();
  // subscriptionTwo.unsubscribe();
}, 3500);
