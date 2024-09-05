const collectionNumber = [1, 2, 3, 4, 5, 6]
let newNumbers = collectionNumber.map(number => {
    return number * 3
})
console.log(newNumbers);

/**
 * Manipulasi array sederhana
 * Buat array baru berisi angka2 yg merupakan hasil perkalian 3 dari setiap element array collectionNumber
 */



const colors = ["blue", "black", "purple", "white", "pink"]
let newColors = colors.filter(color => {
    return color.length > 4
})
console.log(newColors);

/**
 * buat array baru yang isinya element yang hurufnya lebih dari 4 berdasarkan array colors
 */