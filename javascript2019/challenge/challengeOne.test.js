{
    const input = responseLegado
    const expected = {
        'Rafael Paulo da Silva Queiroz' : 'green,blue,red',
        'Ale Santana dos Santos Reis': 'green,blue',
    }

    const result = // TODO: implementar

    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw Error('should return expected contract')
    } else {
        console.log('Success!')
    }
}