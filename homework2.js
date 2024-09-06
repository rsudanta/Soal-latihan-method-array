const makeAllCaps = (elements) => {
    return new Promise((resolve, reject) => {
        const result = elements.map(element => {
            if (typeof element !== 'string') {
                reject({ message: "Element must be a string!" })
            }
            return element.toUpperCase()
        });
        resolve(result)
    })
}

const sortWords = (elements) => new Promise((resolve) => resolve(elements.sort()))

const arrayOfWords = ["cucumber", "tomatos", "avocado"]
const complicatedArray = ["cucumber", 44, true]

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(err => console.log(err.message))

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(err => console.log(err.message))