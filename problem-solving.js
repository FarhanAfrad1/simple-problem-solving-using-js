function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  } else {
    return money * (1.75 / 100);
  }
}

function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }

  let flag = true;
  let firstLetter = email.charAt(0);
  const specialChar = [".", "-", "_", "+", "@"];
  for (let char of specialChar) {
    if (firstLetter === char) {
      flag = false;
    }
  }

  if (
    email.indexOf("@") < 1 ||
    email.includes(" ") ||
    !email.endsWith(".com")
  ) {
    flag = false;
  }

  return flag;
}

// validEmail("ferdous@gmail.com");
// const array = ["ferdous@gmail.com", "1zihad@gmail.com", "-king@yahoo.com", ["jhankar@hero.com"], "Mewo@cat.com", "programming-hero.com", "chat420@gpt.net",true,"he ro@alom.com"];

// for (let element of array) {
//   console.log(validEmail(element));
// }

function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }

  let mangoVote = 0;
  let bananaVote = 0;

  for (let vote of votes) {
    if (vote === "mango") {
      mangoVote++;
    } else if (vote === "banana") {
      bananaVote++;
    } else continue;
  }

  if (mangoVote > bananaVote) {
    return "Mango";
  } else if (mangoVote < bananaVote) {
    return "Banana";
  } else return "Draw";
}
// const votes = ["mango", "BananA", "na vote", "na vote"] ;

//   console.log(electionResult(votes));

function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || typeof f2 !== "object") {
    return "Invalid";
  }
  if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
    return true;
  } else {
    return false;
  }
}
// console.log(isBestFriend({ name: "hashem", roll: 1 , bestFriend: 1},
//     { name: "kashem" , roll: 1, bestFriend: 1 }))

function calculateWatchTime(times) {
    let totalSec = 0;
    let second = 0;
    let minitue = 0;
    let hour = 0;
    const watchTime = {};
  for(let time of times){
    if(typeof time !== "number"){
        return "Invalid";
    }
    totalSec += time;
  }
    
    minitue = Math.floor(totalSec/60);
    second = totalSec % 60;

    if(minitue >= 60){
        hour = Math.floor(minitue / 60);
        minitue = minitue % 60;
    }
  watchTime.hour = hour;
  watchTime.minute = minitue;
  watchTime.second = second;
  return watchTime;
}
console.log(calculateWatchTime([100, 3800] ))
