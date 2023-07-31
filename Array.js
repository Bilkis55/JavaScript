//Question:-1.

console.log(" 1) Sum of array Element:write a function that takes an array of numbers as input and return the sum of elements in the array")

//creating array

let arr =[4,8,7,13,12];

//Function to find the sum of the array using recursion
function sumArray(arr, index)
{
    if(index==arr.length)
    {
        return 0;
    }
    return arr[index]+sumArray(arr, index+1);
}
console.log("Answer: "+" sum of array  is : " + sumArray(arr, 0));

//Question:-2.

console.log("2) Largest Number in Array :Write a function that finds and returns the largest number in an array of numbers");

let arr1=[5,10,20,3,98,95];
let largest=arr1[0];
function largestNumber(){
    for(let i=1;i<arr1.length;i++)
    {
        if(arr[i]>largest)
        largest=arr1[i];
    }
    console.log("Answer : " + largest + " is the largest element of the array");
}
largestNumber();

//Question:-3.

console.log("3) Array reversal:write a function to reverse  the element of array without using the built-in reverse()method");

let numbers=[1,2,3,4,5];
let reversedNum=[];
function reverse()
{
    for(let i=numbers.length-1;i>=0;i--)
    {
        reversedNum.push(numbers[i]);
    }
    console.log("Answer : "+"Reversed array element of 12345 is : " + reversedNum);
    
}
reverse();

//Question:-4.

console.log("4) Array Filtering:Write a function that takes an array of numbers and return a new array containg only the even numbers from the original array");

const arr2=[3,5,6,7,8,4,2,1,66,77];
function Evenarray()
{
const returnEvenArray=(arr2)=>{
    return arr2.filter(el =>{
        return el%2==0;
    })
};
console.log("Answer : "+ returnEvenArray(arr2));

}
Evenarray();

//Question:-5.

console.log("5) Array Rotation : write a function that rotates an array of elements to the By a given number of position.");

function rotate(arr,k)
{
    for(var i=0;i<k+1;i++)
{
    arr.push(arr.shift());
}
return arr;
}
//k works as an index array
console.log("Answer :");
console.log(rotate([1,2,7,4,5,6,7],3));//[5,6,7,1,2,7,4]
console.log(rotate([-1,-100,3,99],2)); //[99,-1,-100,3]

//Question:-6.

console.log("6)Array Flattening: write a function that takes a nested array and ");
console.log("return a flatArray version of it that is all elements should be at the top-level");

function flatArray()
{
    var flatten=function(a,shallow,r)
    {
        if(!r) {r=[]}
        
        if(shallow)
        {
            return r.concat.apply(r,a);
        }
        for(var i=0;i<a.length;i++)
        {
            if(a[i].constructor==Array)
            {
                flatten(a[i],shallow,r);
            }
            else{
                r.push(a[i]);
            }
        }
        return r;
    }
    console.log("Answer:");
    console.log(flatten([1,[2],[3,[[4]]],[5,6]]));
    console.log(flatten([1,[2],[3,[[4]]],[5,6]],true));
}
flatArray();

//Question:-7.

console.log("7) Array Intersection : write a function that takes two arrays and returns a new array containing the common elements found in both arrays");

function performIntersection(arr1,arr2)
{
    //converting into set
    const setA=new Set(arr1);
    const setB=new Set(arr2);
    let intersectionResult=[];
    for(let i of setB)
    {
        if(setA.has(i))
        {
            intersectionResult.push(i);
        }
    }
    return intersectionResult;
}
const array1=[1,2,3,5,9];
const array2=[1,3,5,8];

const result=performIntersection(array1,array2);
console.log("Answer:"+"common elements found in both arrays are : "+ result);

//Question:-8.

console.log("8) Array Sum Pair: write a function that finds all pairs of numbers in an array whose sum equals a given target number");
 
const sumArrayPair=((arr4,value)=>{
    let result=[];
    for(let i=0;i<arr4.length-1;i++)
    {
        if(arr4[i]>value)
        {
            continue;
        }
        if(arr4.includes(value-arr4[i]))
        {
                 result.push(arr4[i]);
                 result.push(value-arr4[i]);
                 break;
        }
    }
    return result;
});
let arr4=[20,10,40,50,60,70,30];
const value=100;
console.log("Answer:"+ sumArrayPair(arr4,value));

//Question:-9.

console.log("9)Array Unique Values: Write a function that takes an array and return a new array containing only the unique elements from the original array");

let arr3=["Apple","banana","strawberry","banana","mango","Apple","kiwi","plum","chery","mango"];
function arrUnique(arr3)
{
    let unique=arr3.reduce(function(acc,curr){
        if(!acc.includes(curr))
        acc.push(curr);
        return acc;
    },[]);
    return unique;
}
console.log("Answer: ");
console.log(arrUnique(arr3));

//Question:-10.
console.log("10) Array Chunking: write a function that takes an array and chunk size as input and returns an array of smaller arrays of length equal to the chunk size.");
function smallChunk(arr4,chunk){
    for(i=0;i<arr4.length;i+=chunk)
    {
        let tempArray;
        tempArray=arr4.slice(i,i+chunk);
        console.log(tempArray);
    }
}
const array=[1,2,3,4,5,6,7,8,9];
const chunk=2;
console.log("Answer: ");
smallChunk(array,chunk);

