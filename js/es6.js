/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'Joshua Ramos';
const email = 'joshua.m.ramos32@gmail.com';
const languages = ["HTML"];


users.push({
  name,
  email,
  languages
});
console.log(users);

let emails = [];
let names = [];


// users.forEach(function(user) {
//   return emails.push(user.email);
// });
users.forEach( user => names.push(user.email));
// users.forEach(function(user) {
//   return names.push(user.name);
// });
users.forEach( user => names.push(user.name));

let developers = [];
users.forEach((user) => {
  const {name, email, languages} = user;

  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;


  developers.push(`${name}\'s email is${email}${name} knows ${languages.join(', ')}.`);
});


let list = '<ul>';
for (let developer of developers){
  list += `<li>${developer}</li>`;
};
list += '</ul>';
