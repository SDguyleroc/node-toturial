const os = require('os');


// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);
// method returns the system uptime in hours
const uptimeInhrs = Math.floor(os.uptime() / 60);
console.log(`The system Uptime is ${uptimeInhrs} hours`);

// uptime in days
const uptimeInDays = Math.floor(uptimeInhrs / 24);
console.log(`The system Uptime is ${uptimeInDays} days`);

// uptime in months
const uptimeInMonths = Math.floor(uptimeInDays / 30);
console.log(`The system Uptime is ${uptimeInMonths} months`);

// current OS info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)