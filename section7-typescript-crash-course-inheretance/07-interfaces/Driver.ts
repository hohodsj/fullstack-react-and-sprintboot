import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

const myCricketCoach = new CricketCoach();
const myGolfCoach = new GolfCoach();

// array of coaches
let theCoaches: Coach[] = []
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

theCoaches.forEach(x => console.log(x.getDailyWorkout()));
