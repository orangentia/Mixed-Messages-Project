/*
Hello! It's (current date at current time)!
You should have been named (name)
Your lucky number is (1-13) and you will have a (type of day).
...so like, good luck.

*/

const typeOfDay = [
    "great", "wonderful", "decent", "fair", "sucky", "#$%@", "deadxx", "x0emo0x", "perfect",
]
const names = [
    "James B.", "Slim", "Mr. Chips", "Carol", "Big Sarah", "Granny Smoke", "Jonny Polarize",
]


function generateMessage() {
    // gets today's date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    // generates the random numbers for the message
    let luckyNum = Math.floor(Math.random() * 14);
    let dayNum = Math.floor(Math.random()* 9);
    let nameNum = Math.floor(Math.random()* 7);
    
    // picks the type of day and name based on the random number
    let yourDay = typeOfDay[dayNum];
    let yourName = names[nameNum];

    // the message to be printed
   
    let message = 
    `Hello! It's ${today}!
    You should have been named ${yourName}.
    Your lucky number is ${luckyNum}, and you will have a ${yourDay} day.
    ...so like, good luck.`;

    console.log(message);
}

generateMessage();