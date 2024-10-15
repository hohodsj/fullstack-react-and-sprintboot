let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

// Simplified for loop
for(let tempSport of sportsOne) {
    if(tempSport == "Cricket") {
        console.log(tempSport + " is my fav sport");
    } else {
        console.log(tempSport);
    }
}