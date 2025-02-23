const users = [{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
},
{
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
},
{
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
},
{
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
},
{
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
}
];

const products = [{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [{
            userId: 'fg12cy',
            rate: 5
        },
        {
            userId: 'zwf8md',
            rate: 4.5
        }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{
        userId: 'fg12cy',
        rate: 5
    }],
    likes: ['fg12cy']
}
];
//===============================================

const USER_VALIDATION = {
    EXIST: 'exist',
    UNEXIST: 'unexist'
}

function userId() {
const charachters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let script = "";
for (let i = 97; i <= 122; i++) {
    charachters.push(String.fromCharCode(i));
}
for (let i = 0; i < 6; i++) {
    const randomNumber = Math.round(Math.random() * charachters.length);
    script = script.concat(charachters[randomNumber]);
}
return script;
}

function email() {
let email = prompt("Enter email address :");

while (!email.includes("@")) {
    email = prompt("Please enter a valid email address:");
}

return email;

}

function password() {
let userpassword = prompt("Please enter your password in numbers(Maximum limit 6nums)", "123456");
while (userpassword.length !== 6) {
    alert("Keep the message length to 6 num ")
    userpassword = prompt("Please enter your password in numbers(Maximum limit 6nums)", "123456");
}
return userpassword;
}

function dateOfCreated() {
const now = new Date('July 1, 1999, 07:00:00')
const year = now.getFullYear()
const monthWithOutZero = now.getMonth();

const month = monthWithOutZero.toString().length == 1 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;

const dateWithOutZero = now.getDate()


const date = monthWithOutZero.toString().length == 1 ? "0" + now.getDate() : now.getDate();

const hourWithOutZero = now.getHours()

const hours = monthWithOutZero.toString().length == 1 ? "0" + now.getHours() : now.getHours();

const minWithOutZero = now.getMinutes()

const minutes = monthWithOutZero.toString().length == 1 ? "0" + now.getMinutes() : now.getMinutes();

return `${year}-${month}-${date} ${hours}:${minutes}`;
}
let check = USER_VALIDATION.UNEXIST;
function userExists(users, userName) {
for (let user of users) {
    if (user.username === userName) {
        check = USER_VALIDATION.EXIST;
    }
}
return check;
}

function signUp(Name, id, userEmail, userPassword, createdAt) {
users.push({
    _id: id,
    username: Name,
    email: userEmail,
    password: userPassword,
    createdAt: createdAt,
    isLoggedIn: false
});
}

function signIn(username) {
for (let user of users) {
    if (user.username === username) {
        let passWord = prompt("Enter password :")
        while (user.password != passWord) {
            passWord = prompt("please enter valid password :")
        }
        console.log("SignIn Sucessfully");
        return user
    }
}

}
function rateProduct(existUser){
const userSelection =parseInt(prompt("Products Available to Rate\n1.mobile phone\n2.Laptop\n3.TV\nEnter Product Number To Rate:"))

switch(userSelection)
{
    case 1:
       const rate = parseInt((prompt(`Product Name :Mobile.\nModel :${products[0].description}.\nEnter Your Rating:`)));
       products[0].ratings.push({
        userId: existUser.username,
        rate: rate});
        break;
    case 2:
       const rate2 = parseInt((prompt(`Product Name :Laptop.\nModel :${products[1].description}.\nEnter Your Rating:`)));
       products[1].ratings.push({
        userId: existUser.username,
        rate: rate2});
        break;
    case 3:
       const rate3 = parseInt((prompt(`Product Name :Tv.\nModel :${products[2].description}.\nEnter Your Rating:`)));
       products[2].ratings.push({
        userId: existUser.username,
        rate: rate3});
        break;
    default:
            alert("Invalid choice.");
              

}


}
const userName = prompt("Enter User Name :");
const userCheck = userExists(users, userName);
if (userCheck === USER_VALIDATION.UNEXIST) {
    alert("User name not found Create new id exists");   
const id = userId();
const userEmail = email();
const userPassword = password();
const createdAt = dateOfCreated();
signUp(userName, id, userEmail, userPassword, createdAt);
alert("User successfully registered! Go for signIn");
const userNameLogin =  prompt("Enter User Name :");
const existUser =signIn(userNameLogin);
rateProduct(existUser);
} else {
alert("User name already exists");
const existUser =signIn(userName);
rateProduct(existUser);


};
console.log(users);
console.log(products)