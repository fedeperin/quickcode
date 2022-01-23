let characters = 'abcdefghijklmnopqrstuvwxyz'
characters = characters.split('')

const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

export const newId = () => {
    let id = ''

    for(let i = 0; i <= 5; i++) {
        id += characters[generateRandom(0, characters.length)]
    }

    return id
}