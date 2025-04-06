import { TotalSum,tempMobileNum, tempName, tempEmail, removeDuplicates,twoSum, palindrome, randomID ,findMostRepeated, findLeastRepeated } from "./index.js";


const fn1 = () =>{
    return 1 + 2 + 3 ;
}

const fn2 = () =>{
    return 1 + 2 + 3 ;
}

const fn3 = () =>{
    return 1 + 2 + 3 ;
}


const fn4 = () =>{
    return 1 + 2 + 3 ;
}

const fn5 = () =>{
    return 1 + 2 + 3 ;
}


console.assert( TotalSum([fn1 , fn2 , fn3 , fn4 , fn5]) == 30)
console.assert(removeDuplicates([1,2,2,3,3,4]) );
console.assert(findMostRepeated("123333456765") == "3");
console.assert(findLeastRepeated("123333456765") == "1");
console.assert(randomID());
console.assert(palindrome("racecar") == "Palindrome");
console.assert(twoSum([3,5,2,4,1] , 6));
console.assert(tempMobileNum());
console.assert(tempEmail());
console.assert(tempName());
