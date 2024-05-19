//Iteration 1

function getfullName(person){
  fullName = person.firstName + ' ' + person.lastName;
  return  fullName;
}

let person = {
    firstName: 'Airam',
    lastName: 'Guedes'
};
console.log(getfullName(person));

//Iteration 2

function whoIsOnline(users) {

  let result = {
    online: [],
    offline: [],
    afk: []
  };
    if (users.length === 0) {
    return {};
  }


  users.forEach(user => {

    if (user.status === 'online') {
      if (user.lastActivity <= 600) { 
        result.online.push(user.username);
      } else {
        result.afk.push(user.username);
      }
    } else {
      result.offline.push(user.username);
    }
  });

  return result;
}


const users = [
  { username: 'David', status: 'online', lastActivity: 600 },
  { username: 'Lucy', status: 'offline', lastActivity: 2320 },
  { username: 'Bob', status: 'online', lastActivity: 4320 }
];

const result = whoIsOnline(users);
console.log(result);

//Iteration 3

function Overheating(yourComputer, maxTemperatures) {
  let results = {};
  
  for (let component in yourComputer) {
    results[component] = yourComputer[component] <= maxTemperatures[component];
  }
  return results;
}


let yourComputer = { 
  cpu: 25,
  gpu: 45,
  motherBase: 15,
  dvdDriver: 25,
  rom: 5,
  ram: 10,
};

let maxTemperatures = { 
  cpu: 33,
  gpu: 42,
  motherBase: 20,
  dvdDriver: 20,
  rom: 10,
  ram: 20,
};

let results = Overheating(yourComputer, maxTemperatures);
console.log(results);
