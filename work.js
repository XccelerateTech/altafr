const alphabet = 'abcdefghijklmnopqrstuvwxyz'; //declare alphabet 

const pairValues = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
}

function percentageOfUnliveableSpace (saleableArea, grossArea) {
        difference = grossArea - saleableArea
        console.log((grossArea/ 100)*difference)

}

percentageOfUnliveableSpace(75, 100);

percentageOfUnliveableSpace(160, 200);


// function sort(x,y,z){
//     if (x>y && x>z){
//         if (y>z){
//             console.log(x + ", " + y + ", " +z);
//         } else {
//             console.log(x + ", " + z + ", " +y);
//         }
// } else if (y>x && y >z) {
//         if (x>z){
//              console.log(y + ", " + x + ", " +z);
//         } else {
//              console.log(y + ", " + z + ", " +x);
//         }
// } else if (z>x && z>y) {
//         if (x>y) {
//             console.log(z + ", " + x + ", " +y);
//         } else {
//             console.log(z + ", " + y + ", " +x);
//         }
// }        
// }
// sort (0, -1, 4)

// function findMeBeer(beerStyle) {
//     switch (beerStyle) {
//         case "IPA":
//             console.log(`IPA means India Pale Ale, drink All-day-IPA from Founders or Big Wave Bay IPA from HK Beer co.`);
//         break;
//         case "Pilsner":
//             console.log(`Pilsners are clean lager beers, drink Tuatara Pilsner or Pilsner Urquell`);
//         break;
//         case "Stout":
//             console.log(`Stouts are darker beers, drink Murphys Irish Stout or Breakfast Stout by Founders`);
//         break;
//         case "Wheat":
//             console.log(`Wheat beers are made primarily of wheat, drink Hoegaarden or Tangerine Wheat by Lost Coast`);
//         break;
//         default:
//             console.log(`Is that even a beer?`)
    
//         }
// }

// findMeBeer("IPA")
// findMeBeer("Pilsner")
// findMeBeer("Stout")
// findMeBeer("Wheat")
// findMeBeer("Porter")

// function iterator(){
//     for(let i=0; i<=15; i++){
//         if(i === 0){
//             console.log(`${i} is even` );
//         } else if (i%2 === 0 ) {
//             console.log(`${i} is even`)
//         } else {
//             console.log(`${i} is odd`)
//         }
//     }
// }
// iterator()