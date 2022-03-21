//冒泡排序
// var a=['2','4','1','10','6','3']
// function A (array){
//     for (let index = 0; index < array.length; index++) {
//        for (let j = 0; j < array.length - 1; j++) {
//            if(Number(array[j]) > Number(array[j+1])){
//                let item = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = item;
//            }        
//        }
//     }
//     return array;
// }
// console.log(A(a));

//选择排序
// var a=['2','4','1','10','6','3']
// function A (array){
//        for (let j = 0; j < array.length-1; j++) {
//            let numIndex = j;
//             for(let i = j; i<array.length;i++)   {
//                 if(Number(array[i]) < Number(array[numIndex])){
//                     numIndex = (i);
//                 }
//             }
//             if(array[j] != array[numIndex]){
//                 // const item = array[j];
//                 // array[j] = array[numIndex];
//                 // array[numIndex] = item;
//                 [array[j],array[numIndex]] = [array[numIndex],array[j]]
//             }
//        }

//     return array;
// }
// console.log(A(a));

//插入排序
// var a=['2','4','1','10','6','3']
// function A (array){
//        for (let j = 1; j < array.length; j++) {
//           let item = array[j]
//           let i =j;
//           while( i>0 && array[i-1] > item){
//             array[i] = array[i-1];
//             i--;
//           }
//           array[i] = item;
//        }

//     return array;
// }
// console.log(A(a));

//归并排序
// var a = [2, 4,15, 1, 10, 6, 3,5,7,8,9,14]
// function A(array) {
//     if (array.length > 1) {
//         let newArray = [];
//         let r = 0;
//         let l = 0;
//         const position = Math.floor(array.length / 2);

//         let larr = A(array.slice(0, position));
//         let rarr = A(array.slice(position));
//         while (r < rarr.length && l < larr.length) {
//             newArray.push(larr[l] < rarr[r] ? larr[l++] : rarr[r++])
//         }=
//         array = newArray.concat(l < larr.length ? larr.slice(l) : rarr.slice(r))
//     }
//     return array
// }
// console.log(A(a));

//快速排序
// var a = [16,2, 4, 15, 1, 10, 6, 3, 5, 7, 8, 9, 14]
// function A(array) {
//     return fn(array, 0, array.length - 1);
// }
// function fn(array, left, right) {
//     let index;
//     if (array.length > 1) {

//         index = part(array, left, right);

//         if (left < index - 1) {
//             fn(array, left, index - 1);
//         }
//         if (index < right) {
//             fn(array, index, right);
//         }
//     }
//     return array
// }
// function part(array, left, right) {
//     let r = right;
//     let l = left;
//     const position = Math.floor((left + right) / 2);

//     while (l <= r) {
//         while (array[l] < array[position]) {
//             l++;
//         }
//         while (array[r] > array[position]) {
//             r--;
//         }
//         if (l <= r) {
//             const item = array[l];
//             array[l] = array[r];
//             array[r] = item;
//             l++;
//             r--;
//         }
//     }
//     return l;
// }
// console.log(A(a));

//计数排序
// var a = [16, 2, 4, 15, 1, 10, 6, 17, 3, 5, 7, 8, 9, 14]

// function A(array) {
//     if (array.length < 2) {
//         return array
//     }
//     const maxValue = findMax(array)
//     const counts = new Array(maxValue + 1)
//     array.forEach((e) => {
//         if (!counts[e]) {
//             counts[e] = 0;
//         }
//         counts[e]++;
//     })
//     let sortindex = 0;
//     counts.forEach((e, i) => {
//         console.log(e, i)
//         while (e > 0) {
//             array[sortindex++] = i;
//             e--;
//         }

//     })
//     return array;

// }
// function findMax(array) {
//     let max = array[0];
//     array.forEach(element => {
//         if (max < element) {
//             max = element;
//         }
//     });
//     return max;
// }
// console.log(A(a));

//桶排序
// var a = [16, 2, 4, 15, 1, 10, 6, 17, 3, 5, 7, 8, 9, 14]
// function fn(array,bucketSize){
//     if(array.length<2){
//         return array
//     }
//     const buckets = createBuckets(array,bucketSize)
//     console.log(buckets)

//     return sortBuckets(buckets);
// }
// function createBuckets(array,bucketSize){
//     let minValue = array[0];
//     let maxValue = array[0];
//     array.forEach((element,i) => {
//         if(minValue > element){
//             minValue = element;
//         }else if(maxValue < element){
//             maxValue = element;
//         }
//     });
//     const backetCount = Math.floor((maxValue-minValue)/bucketSize) + 1;
//     const buckets = [];
//     for( let i =0;i<backetCount;i++){
//         buckets[i] = [];
//     }
//     for( let i =0;i<array.length;i++){
//         const bucketIndex =  Math.floor((array[i]-minValue)/bucketSize);
//         buckets[bucketIndex].push(array[i]);
//     }
//     return buckets;
// }
// function sortBuckets(buckets){
//     const sortedArray =[];
//     for(let i in buckets){
//         A(buckets[i]);
//         sortedArray.push(...buckets[i]);
//     }
//     return sortedArray;
// }
// function A (array){
//        for (let j = 1; j < array.length; j++) {
//           let item = array[j]
//           let i =j;
//           while( i>0 && array[i-1] > item){
//             array[i] = array[i-1];
//             i--;
//           }
//           array[i] = item;
//        }
// }
// console.log(fn(a,5))

