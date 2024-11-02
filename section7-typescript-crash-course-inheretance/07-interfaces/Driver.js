"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
const myCricketCoach = new CricketCoach_1.CricketCoach();
const myGolfCoach = new GolfCoach_1.GolfCoach();
// array of coaches
let theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
theCoaches.forEach(x => console.log(x.getDailyWorkout()));
