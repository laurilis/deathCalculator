// calculate date of death
const date = 1 + Math.floor(Math.random() * 29)
const month = 1 + Math.floor(Math.random() * 12)
const year = 2023 + Math.floor(Math.random() * 61)


// randomly pick cause of death
const causes = ['from Drowning', 'from a Heart Attack', 'from a Drug Overdose', 'in a Car Crash', 'in a Plane Crash',
 'by Murder', 'peacefully in your sleep', 'from Cancer', 'from a poisonous fruit while lost in the woods', 'in a bike accident', 
 'by Suicide', 'getting eaten alive by a wild animal'];

const randomCause = () => {let x = Math.floor(Math.random() * causes.length);
                return causes[x]};

// beneficial new hobbies
const hobbies = ['exercising regularly', 'doing Yoga', 'meditating', 'speaking the truth', 'a healthy diet', 'volunteering', 'dancing', 'taking Vitamin B12']

const randomHobby = () => {let x = Math.floor(Math.random() * hobbies.length);
    return hobbies[x]}

//Generated Message

console.log(`You will die on ${date}.${month}.${year} ${randomCause()}. Spend your remaining ${year - 2023} years wisely.
Higher forces recommend ${randomHobby()}.`);


//Connection to HTML
let eventTarget = document.querySelector('button');
let subhead = document.querySelector('h2');
eventTarget.onclick = function() {                 
    document.getElementById('message').innerHTML = `You will die on ${date}.${month}.${year} ${randomCause()}. Spend your remaining ${year - 2023} years wisely.
    Higher forces recommend ${randomHobby()}.`; document.body.removeChild(eventTarget); document.body.removeChild(subhead) }