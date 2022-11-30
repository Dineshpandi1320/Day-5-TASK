// Print odd numbers in an array
var arr =[11,12,13,14,15,16,17,18];
var result=[];
var odd =function(arr){
   for(var i=0; i<8; i++)
    {
        if(arr[i]%2!=0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr));
// output 
// [11, 13, 15, 17]

// Convert all the strings to title caps in a string array
var string = "love is part of the life".split(" ")
var s=[];
var title =function(string)
{
    for(var i=0; i<string.length; i++)
    {
        s[i]=string[i][0].toUpperCase()+string[i].slice(1);
        s.push(string[i])
    }
    return s.join(" ");
}
console.log(title(string));

// output
// Love Is Part Of The Life life

// Sum of all numbers in an array
var arr2=[12,23,16,17,18,19,25]
 
 result=[];
 var sum=function(arr2)
 {
    var sum=0;
    for(var i=0;i<arr2.length; i++)
    {
        sum=sum+arr2[i]
    }
    result.push(sum)
    return result;
 }
 console.log(sum(arr2));

//  output
//  [130]

//  Return all the prime numbers in an array
  var num=[3,4,5,6,7,8,9,10,11,13,17,19,23]

var prime=function(num) {
    result=[];
  for(var i=0; i<num.length;i++)
     {   let count =0;
         for(var j=1;j<=num[i];j++){
            if(num[i] % j == 0)
             {
                count++;
             }
            
         }
   
        if(count==2)
        {
            result.push(num[i]);
        }
    }
    return result;
} 
 console.log(prime(num))
// output
// [3, 5, 7, 11, 13, 17, 19, 23]

 
//     PalinArray or not
var arr = [122,321,399,343,121,232,2332];

let palin1=function (arr)
    {
        result=[];
        for (let i = 0  ; i <arr.length; i++)
        {
            let temp=arr[i];
            let s=0;
            while(temp!=0)
            {
                let t=temp%10;
                s=(s*10)+t;
                temp=Math.floor(temp/10);

            }

            if(s==arr[i])
            {   
               result.push(s);
            }
            
        }return result;
    }
    console.log(palin1(arr))
//     output
//     (4) [343, 121, 232, 2332]
       


// remove duplicate elements in the array
var arr= [1,2,3,4,2,5,6,3,7,1] 
var result = [];
var duplicate =function(arr)
{
    for(var i=0; i<arr.length; i++)
    {
        if (!result.includes(arr[i]))
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(duplicate(arr))
// output
//  [1, 2, 3, 4, 5, 6, 7]


// Rotate an array by k times
var arr=[1,2,3,4,5,6]
var k=3;
var rotate = function(arr)
{
    for(var i=1; i<=k; i++)
    {
        var first=arr[0];
        for(var j=0;j<arr.length-1; j++)
        {
            arr[j]=arr[j+1];
        }
        arr[arr.length-1]=first;
    }
    return arr;
}
console.log(rotate(arr));

// output
// (6) [4, 5, 6, 1, 2, 3]



// IIFE FUNCTION
//Print odd numbers in an array
(function odd(arr)
{
    var result=[];
    for(var i=0;i<arr.length; i++)
    {
        if(arr[i]%2 !=0)
        {
            result.push(arr[i]);
        }
    }
    console.log(result)
}
)([11,12,13,34,25,28,19,37])

//output
// 11
// 13
// 25
// 19
// 37

//Sum of all numbers in an array
(function sum(arr)
 {
    var sum=0;
    result=[];
    for(var i=0;i<arr.length; i++)
    {
        sum=sum+arr[i]
    }
    result.push(sum)
    console.log(result);
 }
 )([12,23,16,17,18,19,25])
// //output
// //[130]


// Convert all the strings to title caps in a string array
(function title(string)
{
    var s=[];
    for(var i=0; i<string.length; i++)
    {
        s[i]=string[i][0].toUpperCase()+string[i].slice(1);
        s.push(string[i])
    }
    console.log (s.join(" "));
}
)(["love" ,"care","friendship","good","bad"])

// output
// Love Care Friendship Good Bad 


//remove duplicate elements in the array
(function duplicate(arr)
{
    var result = [];
    for(var i=0; i<arr.length; i++)
    {
        if (!result.includes(arr[i]))
        {
            result.push(arr[i]);
        }
    }
    console.log(result);
}
)([1,2,3,4,2,5,6,3,7,1] )

//output
 //[1, 2, 3, 4, 5, 6, 7]

// PalinArray or not
(function palin (arr)
    {
        result=[];
        for (let i = 0  ; i <arr.length; i++)
        {
            let temp=arr[i];
            let s=0;
            while(temp!=0)
            {
                let t=temp%10;
                s=(s*10)+t;
                temp=Math.floor(temp/10);

            }

            if(s==arr[i])
            {   
               result.push(s);
            }
            
        }console.log(result);
    }
)([122,321,399,343,121,232,2332])

//output
//(4) [343, 121, 232, 2332]

//Return all the prime numbers in an array
(function prime(num) 
{
    result=[];
    for(var i=0; i<num.length;i++)
    {   let count =0;
        for(var j=1;j<=num[i];j++)
        {
            if(num[i] % j == 0)
            {
                count++;
            }
        }
        if(count==2)
        {
            result.push(num[i]);
        }
    }
    console.log(result);
} 
)([3,4,5,6,7,8,9,10,11,13,17,19,23])
//output
//[3, 5, 7, 11, 13, 17, 19, 23]


//Rotate an array by k times
(function rotate(arr)
{
    var k=3;
    for(var i=1; i<=k; i++)
    {
        var first=arr[0];
        for(var j=0;j<arr.length-1; j++)
        {
            arr[j]=arr[j+1];
        }
        arr[arr.length-1]=first;
    }
    console.log(arr);
}
)([1,2,3,4,5,6])

//output
//(6) [4, 5, 6, 1, 2, 3]


//ARROW FUNCTION:
//Print odd numbers in an array
var odd =(arr)=>{
    var result=[];
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2!=0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd([11,12,13,14,15,16,17,18]));
//output 
//[11, 13, 15, 17]

//Sum of all numbers in an array
 var sum=(arr2)=>
 {
    result=[];
    var sum=0;
    for(var i=0;i<arr2.length; i++)
    {
        sum=sum+arr2[i]
    }
    result.push(sum)
    return result;
 }
 console.log(sum([12,23,16,17,18,19,25]));

//  //output
 //[130]

 //Convert all the strings to title caps in a string array
var title=(string)=>
{
    var s=[];
    for(var i=0; i<string.length; i++)
    {
        s[i]=string[i][0].toUpperCase()+string[i].slice(1);
        s.push(string[i])
    }
    return (s.join(" "));
}
console.log(title(["love" ,"care","friendship","good","bad"]));

//output
//Love Care Friendship Good Bad 

//Return all the prime numbers in an array
var prime=(num)=> {
  result=[];
for(var i=0; i<num.length;i++)
   {   let count =0;
       for(var j=1;j<=num[i];j++){
          if(num[i] % j == 0)
           {
              count++;
           }
          
       }
 
      if(count==2)
      {
          result.push(num[i]);
      }
  }
  return result;
} 
console.log(prime([3,4,5,6,7,8,9,10,11,13,17,19,23]))
// output
// [3, 5, 7, 11, 13, 17, 19, 23]


// PalinArray or not
let palin=(arr)=>
    {
        result=[];
        for (let i = 0  ; i <arr.length; i++)
        {
            let temp=arr[i];
            let s=0;
            while(temp!=0)
            {
                let t=temp%10;
                s=(s*10)+t;
                temp=Math.floor(temp/10);

            }

            if(s==arr[i])
            {   
               result.push(s);
            }
            
        }return result;
    }
    console.log(palin([122,321,399,343,121,232,2332]))

//     output
//     (4) [343, 121, 232, 2332]
       
