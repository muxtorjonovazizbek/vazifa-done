// 47. Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.

// function swapElements(arr, k) {
//    arr.push(...arr.splice(k,1,arr.pop()))
//    return arr
// }

// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]



// 48. Berilgan massiv ichidagi barcha elementlarni n marta takrorlang va yangi massiv qaytaring.

// function repeatElements(arr, n) {
   
//     let repeatNums = arr.flatMap((val ,ind) => Array(ind === 0 ? 3 : 3).fill(val))
//     console.log(repeatNums);

// }

// console.log(repeatElements([1, 2, 3], 3)); // [1, 1, 1, 2, 2, 2, 3, 3, 3]



// 49. Berilgan massiv ichidagi juft indeksdagi elementlar yig'indisini toping.

// function sumEvenIndexedElements(arr) {
//     let total = 0
//     arr.forEach((val,ind) => {
//         if (ind % 2 == 0) {
//             total += val
//         }
//     });
//     console.log(total);
// }

// console.log(sumEvenIndexedElements([1, 2, 3, 4, 5, 6])); // 9 (1 + 3 + 5)



// 50. Berilgan massiv ichidagi barcha unikal (takrorlanmagan) elementlarni qaytaring.

// function uniqueElements(arr) {
//     let uniqueNum = arr.filter(val => arr.indexOf(val) == arr.lastIndexOf(val))
//     console.log(uniqueNum);
//  }
 
//  console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]


// 51. Berilgan massiv ichidagi barcha qatorlarni teskarisiga o'giring.

// function reverseStringsInArray(arr) {
//     let new_arr = []
//     for(let item of arr) {
//        let reverseStr = item.split("").reverse().join("")
//        new_arr.push(reverseStr)
//     }
//     console.log(new_arr);
// }

// console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']



// ↑ buni ikkinchi usuli (qoshimcha)

// function reverseStringsInArray(arr) {
//    let reverseArr = arr.map(val => {
//     return val.split("").reverse().join("")
//    })
   
//    return reverseArr
// }

// console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']


// 52. Berilgan massiv ichidagi elementlarni n qadamga chapga ko'chiring.

// function rotateArrayLeft(arr, n) {
//     for (let i = 0; i < n; i++) {
//         arr.push(arr.shift())  
//     }
//     return arr
// }
 
// console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]