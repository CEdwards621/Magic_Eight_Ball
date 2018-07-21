const userName = 'Chris';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log('What is your question?');

let userQuestion = 'Will I get married?';

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'Cannot predict now';
    break;
  case 2:
    eightBall = 'Signs point to yes';
    break;
  case 3:
    eightBall = 'My sources say no';
    break;
  case 4:
    eightBall = 'Reply hazy try again';
    break;
  case 5:
    eightBall = 'Outlook not so good';
    break;
  case 6:
    eightBall = 'Do not count on it';
    break;
  case 7:
    eightBall = 'It is decidedly so';
    break;
}

console.log(eightBall);
