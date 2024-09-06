const makeAllCaps = (elements) => {
    return new Promise((resolve, reject) => {
        try {
            const result = elements.map(element => {
                if (typeof element !== 'string') {
                    reject("Element must be a string!")
                }
                return element.toUpperCase()
            });
            resolve(result)
        }
        catch (err) {
            reject(err.message)
        }
    })
}

const sortWords = (elements) => {
    return new Promise((resolve, reject) => {
        try {
            const result = elements.sort()
            resolve(result)
        } catch (err) {
            reject(err.message)
        }
    })
}

const arrayOfWords = ["cucumber", "tomatos", "avocado"]
const complicatedArray = ["cucumber", 44, true]

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(err => console.log(err))

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(err => console.log(err))