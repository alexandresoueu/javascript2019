function check() {
    var data = new Date()
    var year = data.getFullYear()
    var formYear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')

    if(formYear.value.length == 0 || Number(formYear.value) > year) {
        alert("Anything wrong......")
    } else {
        var formSex = document.getElementsByName('radsex')
        var age = year - Number(formYear.value)
        var gener = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'photo')

        if(formSex[0].checked) {
            gener = 'Man'
            if(age >=0 && age < 10){
                img.setAttribute('src', 'img/baby-dog.jpg')
            } else if (age < 21) {
                img.setAttribute('src', 'img/youth-dog.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'img/adult-dog.jpg')
            } else {
                img.setAttribute('src', 'img/old-dog.jpg')
            }
        } else if (formSex[1].checked) {
            gener = 'Woman'
            if(age >=0 && age < 10){
                img.setAttribute('src', 'img/baby-girl.jpg')
            } else if (age < 21) {
                img.setAttribute('src', 'img/youth-woman.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'img/adult-woman.jpg')
            } else {
                img.setAttribute('src', 'img/old-woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `You ${gener} is ${age} years`
        res.appendChild(img)
    }
}