const makeAllCaps = (elements) => {
    return new Promise((resolve, reject) => {
        try {
            const result = elements.map(element => {
                return element.toUpperCase()
            });
            resolve(result)
        }
        catch (err) {
            reject(err)
        }
    })
}

const sortWords = (elements) => {
    return new Promise((resolve, reject) => {
        try {
            const result = elements.sort()
            resolve(result)
        } catch (err) {
            reject(err)
        }
    })
}

fruits = ["apel", "pisang", "melon", "jeruk"]

makeAllCaps(fruits)
    .then((data) => {
        sortWords(data)
            .then(result => console.log(result))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))