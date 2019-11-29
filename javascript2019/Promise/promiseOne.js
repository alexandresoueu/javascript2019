function speakeLater(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}

speakeLater(2, "Nemoooooooooo")
    .then(phrase => phrase.concat('####'))
    .then(otherPhrase => console.log(otherPhrase))
    .catch(e => console.log(e))