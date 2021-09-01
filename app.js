let friends = ['Jeff', 'Joe', 'Aaron', 'Jose', 'Greg'];

for (let i = 0; i < friends.length; i++) {
    for (let j = 100; j > 1, j--;) {
        if (j > 1)  {console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + (friends[i]) + ' strikes one out, clears it all out, ' + [j - 1] + ' lines of code in the file')} else  {
            console.log('1 line of code in the file, 1 line of code; ' + (friends[i]) +  ' strikes one out, clears it all out, no more lines of code in the file');
        }
    };
}; 

// for (let j = 100; j > 2, j--;) {
//     if (j > 1)  {console.log([j] + ' bottles of beer on the wall, take one down, pass it around ' + [j - 1] + ' bottles of beer on the wall!')} else  {
//         console.log('1 bottle of beer on the wall, 1 bottle of beer, strikes out, clears it all out, no more bottles of beer')
//     }
// };