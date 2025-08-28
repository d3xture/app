let prompt = require('prompt-sync')();

let n = Number(prompt("Enter the number: "))

// for (let i =1; i <=n; i++){
//     for(let j = 1; j <= n - i +1; j++){
//         process.stdout.write(" ")
//     }
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ")
//     }

//     console.log();

// }

//Task num 1
// *****
// *****
// *****
// *****
// *****


// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         process.stdout.write("*")
//     }
//     console.log();

// }


//Task 2
// *
// **
// ***
// ****
// *****

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("*")
//     }
//     console.log();

// }

// TAsk 3

// *****
// ****
// ***
// **
// *

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i +1; j++){
//         process.stdout.write("*")
//     }
//     console.log();

// }

// Task 4

//     *
//    ***
//   *****
//  *******
// *********

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i; j++){
//         process.stdout.write(" ")
//     }

//     for(let j = 1; j <= i; j++){
//         process.stdout.write("*")
//     }
//     for(let j = 1; j <= i -1; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// Task 5
// *********
//  *******
//   *****
//    ***
//     *

// Huzaifa's version
// for(let i = 1; i <= n; i++){
//     for(let j = n; j > n-i +1 ; j--){
//         process.stdout.write(" ")
//     }
//     for(let j = n; j >= i; j--){
//         process.stdout.write("*")
//     }
//     for(let j = 1; j <= n-i; j++){
//         process.stdout.write("*")
//     }
//     console.log();
//     }

//Amna's version
// for(let i = 1; i <= n; i++){
//                    // 2 <= 1
//     for(let j = 1; j <= i-1  ; j++){ 
//         process.stdout.write(" ")
//     }          
//                 //2 < = 4 
//     for(let j = 1; j <= n-i+1; j++){
//         process.stdout.write("*") 
//     }
//                 // 1 <= 3
//     for(let j = 1; j <= n-i; j++){
//         process.stdout.write("*")
//     }
//     console.log();
//     }

//first chunk
// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= n-i; j++){
//         process.stdout.write(" ")
//     }
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("*")
//     }
//     console.log();

// }

// second chunk
// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i - 1; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

//third chunk

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i -1 ; j++){
//         process.stdout.write(" ")
//     }
//     for(let j =1; j <= n - i; j++){
//         process.stdout.write("*")
//     }
//     console.log();

// }

//fourth chunk
// for(let i = 1; i<= n; i++){
//     for (let j = 1; j <= n- i -1 ; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// Diamond shape
//first half
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")
//     }

//     for (let j = 1; j <= i - 1; j++) {
//         process.stdout.write("*")
//     }

//     console.log();
// }


//second half
// for (let i = 1; i <= n - 1; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write("*")
//     }

//     for (let j = 1; j <= n - i - 1; j++) {
//         process.stdout.write("*")
//     }

//     console.log();

// }



// Amna's version
// for(let k=1; k<=n; k++){
//     for(let j=1; j<=n-k; j++){
//         process.stdout.write(" ")
//     }
//     for(let j=1 ; j<=k ; j++){
//          process.stdout.write("*")
//     }
//     for(let j=1 ; j<=k-1 ; j++){
//          process.stdout.write("*")
//     }
//     console.log()
// }

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(" ")
//     }
//     for(let j=1 ; j<=n-i ; j++){
//          process.stdout.write("*")
//     }
//     for(let j=1 ; j<=n-i-1 ; j++){
//          process.stdout.write("*")
//     }
//     console.log()
// }








// 🔹 11. Hollow Pyramid

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n ; j++) {
//         if (i + j == n + 1) {
//             process.stdout.write("*");
//             if(i == n){
//                 for(let j =1; j <= n*2-2; j++){
//                     process.stdout.write("*");
                    
//                 }
//             }
//             break
//         } 
        
//         else {
//             process.stdout.write(" ");

//         }

//     }

//     console.log();

// }



// Amna's version 
for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n - i; j++){
      process.stdout.write(" ")
    }
     for (let j = 1; j <= 1; j++){
        if( i != n){
            process.stdout.write("*")
        }
      
    }

    if(i == n){
     for (let j = 1; j <= n *2 -1; j++){
      process.stdout.write("*")
    }

    for(let j =1; j <=n; j++){
        if(j - i == n - 1){
            process.stdout.write("*")
        }
       
    }
    
}
    console.log();
    
}


