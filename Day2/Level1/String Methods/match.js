let example =" i am krishnan and i love javascript so I need to strong on java";

let match =/i/gi;

console.log(example.match(match))//[ 'i', 'i', 'i', 'i', 'I' ]

let example2 ="In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge";



let match2 =/\d+/gi;

console.log(example2.match(match2))//[ '2019', '30', '2020' ]
