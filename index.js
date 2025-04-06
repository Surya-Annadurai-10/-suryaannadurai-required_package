const TotalSum = (input) => {
  let arr = [];

  input.forEach((ele) => {
    let num = ele();
    arr.push(num);
  });

  let total = arr.reduce((acc, curr) => {
    return acc + curr;
  });

  return total;
};

const removeDuplicates = (input) => {
  let current = -Infinity;
  let resArr = [];
  let n = input.length;

  for (let i = 0; i < n; i++) {
    if (input[i] != current) {
      resArr.push(input[i]);
      current = input[i];
    }
  }

  return resArr;
};

const randomID = (length = 10) => {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";

  let charArr = [upper, lower, num];
  let rand = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * 3);
    let index = 26;

    if (random == 2) {
      index = 10;
    }
    let randomChar = Math.floor(Math.random() * index);
    let char = charArr[random].charAt(randomChar);
    rand += char;
  }

  return (rand);
};

const tempEmail = (length = 15) =>{
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
  
    let charArr = [upper, lower, num];
    let rand = "";
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * 3);
      let index = 26;
  
      if (random == 2) {
        index = 10;
      }
      let randomChar = Math.floor(Math.random() * index);
      let char = charArr[random].charAt(randomChar);
      rand += char;
    }
  
    return (rand + "@gmail.com");
}

const tempName = () =>{
    const names = [
        "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Krishna", "Ishaan",
        "Shaurya", "Atharv", "Dhruv", "Kabir", "Rohan", "Ansh", "Aryan", "Kian", "Om", "Rudra",
        "Neel", "Yuvaan", "Parth", "Dev", "Aarush", "Tanmay", "Harsh", "Manav", "Tanish", "Jai",
        "Samarth", "Tejas", "Anirudh", "Ritvik", "Siddharth", "Laksh", "Kartik", "Uday", "Ivaan", "Advik",
        "Mihir", "Ayaan", "Pranav", "Vihaas", "Yash", "Ayansh", "Nishant", "Rayan", "Ved", "Varun",
        "Ayush", "Hrithik", "Raj", "Zayan", "Aryav", "Bhavya", "Chirag", "Darsh", "Ekansh", "Faiz",
        "Gaurav", "Hardik", "Imran", "Jayden", "Kunal", "Lavith", "Mehul", "Nakul", "Omkar", "Pratyush",
        "Quadir", "Ritesh", "Samar", "Tushar", "Utkarsh", "Vikram", "Waris", "Xavier", "Yuvraj", "Zeeshan",
        "Ahaan", "Bhuvan", "Chinmay", "Devansh", "Eshan", "Farhan", "Girish", "Himansh", "Ishwar", "Jatin",
        "Keshav", "Luv", "Mayank", "Nirvaan", "Onkar", "Pranay", "Rahul", "Sidd", "Tanush", "Vedant"
      ];

      const index = Math.floor(Math.random() * 100);
      return names[index]
}

const tempMobileNum = () =>{
    const first = "9876"
    const rest = "1234567890"
    let restStr = ""
    const firstRandom = Math.floor(Math.random() * 4);
    for(let i = 0; i < 9; i++){
        const restRandom = Math.floor(Math.random() * 10);
        restStr += rest.charAt(restRandom)
    }

 return parseInt(first.charAt(firstRandom) + restStr)
}

const findMostRepeated = (str) => {
  let map = new Map();

  str.split("").forEach((ele) => {
    if (map.has(ele)) {
      let freq = map.get(ele);
      map.set(ele, freq + 1);
    } else {
      map.set(ele, 1);
    }
  });

  let count = -Infinity;
  let val = "";

  map.forEach((value, key) => {
    if (value > count) {
      count = value;
      val = key
    }
  });

  if(!val){
    return "invalid input"
}


  return val;
};

const findLeastRepeated = (str) => {
    let map = new Map();
  
    str.split("").forEach((ele) => {
      if (map.has(ele)) {
        let freq = map.get(ele);
        map.set(ele, freq + 1);
      } else {
        map.set(ele, 1);
      }
    });
  
    let count = Infinity;
    let val = "";
  
    map.forEach((value, key) => {
      if (value < count) {
        count = value;
        val = key
      }
    });

    if(!val){
        return "invalid input"
    }
  
    return val;
  };

  const palindrome = (str) =>{{

    let i = 0;
    let j = str.length - 1;

    while(i < j){
        if(str[i] != str[j]){
            return "Not a Palindrome"
        }else{
            i++;
            j--
        }
    }

    return "Palindrome"
  }}

  const twoSum = (arr,tar) =>{
    arr.sort();

    let i = 0;
    let j = arr.length - 1;
    let resArr =[]
    while( i < j){
        let sum = arr[i] + arr[j];

        if(sum == tar){
            let res = []
         res.push(arr[i]);
         res.push(arr[j]);
          resArr.push(res);
          i++;
          j--;
        }else if(sum > tar){
            j--;
        }else if(sum < tar){
            i++;
        }

    }

    return resArr;
  }


// console.log(randomID());
// console.log(palindrome("racecar"));
// console.log(twoSum([3,5,2,4,1] , 6));
// console.log(tempMobileNum());


export { TotalSum,tempMobileNum, tempName, tempEmail, removeDuplicates,twoSum, palindrome, randomID ,findMostRepeated, findLeastRepeated };
