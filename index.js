import { Observable, fromEvent, of, from, interval, timer } from "rxjs";

const observer = {
  next: (value) => console.log("next", value),
  error: (err) => console.error("error", err),
  complete: () => console.log("complete"),
};
