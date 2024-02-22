window.addEventListener('DOMContentLoaded', function(){
    const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list'),
    bntDelete = document.querySelector('.btn-danger');

    btn.addEventListener('click', function(event){
        event.preventDefault()

        if(title.value == '' && author.value == '' && year.value == ''){
            alert("Iltimos ma'lumotlarni to'liq kiriting")
        } else if(title.value == '' || author.value == ''){
            alert("kitob nomi va muallifni to'liq kiriting")
        }else{
            const newRow = document.createElement('tr')

            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)


            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            const dataYear = document.createElement('th')
            dataYear.innerHTML = year.value
            newRow.appendChild(dataYear)

            bookList.appendChild(newRow)

            bntDelete.addEventListener('click', function(){
                bookList.style.display = 'none'
            })

            bookList.appendChild(newRow)
        }
    })
})