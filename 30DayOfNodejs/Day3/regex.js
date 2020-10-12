var str1 = 'rjbitdemo@gmail.com'
var str2 = 'rjbitdemogmail.com'
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = (text) => {
  var result = text.match(pattern);
  if (result) {
    console.log("Valid email address");
  } else {
    console.log("Please enter a valid email address");
  }
}
res(str1)
res(str2)