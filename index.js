const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs')

//2nd task function
//Fucntion to calculate the sum of elements of array
function sumOfArrayElements(arr) {
  if(!Array.isArray(arr)){
    throw new Error('Input must be an array!');
  }
  if(arr.length === 0){
    throw new Error('Array must contain atleast one element!');
  }
  let sum = 0;
  for(const num of arr){
    if(typeof num !== 'number' || Number.isNaN(num)){
      throw new Error('Array can contain only valid numbers!');
    }
    sum+=sum;
  }
  return sum;
}

//3rd task
// Function to count the number of words in a given text
function countWords(text) {
  return text.split(/\s+/).filter(word => word !== '').length;
}


//parse incoming json data
app.use(express.json);


//1st task
//hello world in '/' path
app.get('/', (req,res) =>{
  res.send('Hello, World!');
});

//2nd task 
//sum of elements of given array
app.post('/sum', (req,res)=>{
  try {
    //taking input from body
    const inputArr = req.body;
    //calling function for sum of inputs
    const result = sumOfArrayElements(inputArr);
    //response as json of the sum of elements
    res.json({sum: result});
  } catch (err) {
    //graceful error handling with json error response
    res.status(400).json({error: err.message})
  }
});

//3rd task
// Asynchronous file handling to read and count words in "data.txt"
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err.message);
  } else {
    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
  }
});


//1st task listen on port 3000
app.listen(port, () =>{
  console.log(`Server listening on port ${port}`)
});


