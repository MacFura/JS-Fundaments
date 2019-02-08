/*
for (i=0;i<10;i++) {
    console.log(i);
}
*/

/*


let a = [4, 6, 1, 18, 23, 45];
for ( i = 0; i < a.length; i++ ) {
    console.log(a[i]);
}



//wygenerowana z visual studio
let a = [4, 6, 1, 18, 23, 45];
for (let i = 0; i < a.length; i++) {
    const c = a[i];
    console.log(c);
}
*/


// prostrza forma
let x = 1;
while (x < 10) {
    console.log(x++);

    if ( x == 7 ) {
        break;
    }

   // if ( x == 7 ) break;    - taka forma jest ładniejsza 
}