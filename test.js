// function getUser(userId) {
//     const userData = fetch(`https://api.com/api/user/${userId}`)
//       .then(response => response.json())
//       .then(data => console.log(data.name))
//    }
   
// getUser(1);

var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
console.log(result);
console.log(re);