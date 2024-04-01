const search = (e) => {
    let phrase = e.target.value
    data.employees = data.employees.filter(employee => {
        return employee.name.startsWith(phrase)
    })
    render(content, data)
    console.log(phrase)
    console.log(data)
}

const render = (parentElement, data) => {
    parentElement.innerHTML = ''
    const table = document.createElement('table')
    let tr
    let td

    // column Headers
    tr = document.createElement('tr')
    data.fields.forEach(item => {
        td = document.createElement('th')
        td.innerText = item
        tr.append(td)
    })
    table.append(tr)

    // search form
    tr = document.createElement('tr')
    td = document.createElement('td')
    td.colSpan = 6

    let form = document.createElement('form')
    let input = document.createElement('input')
    input.placeholder = 'search here...'
    input.addEventListener('keyup', (e) => {
        search(e, data)
    })
    form.append(input)
    td.append(form)
    tr.append(td)

    table.append(tr)

    // employee rows
    data.employees.forEach(employee => {
        tr = document.createElement('tr')
        Object.keys(employee).forEach(
            prop => {
                td = document.createElement('td')
                if (prop == 'contacts') {
                    ul = document.createElement('ul')
                    for (const [key, value] of Object.entries(employee[prop])) {
                        li = document.createElement('li')
                        a = document.createElement('a')
                        li.innerHTML += `${key}: `
                        a.innerText = ` ${value}`
                        li.append(a)
                        ul.append(li)
                        td.append(ul)
                    }
                } else if (prop !== 'photo') {
                    td.innerText = employee[prop]
                } else {
                    let img = document.createElement('img')
                    img.src = employee[prop]
                    td.append(img)
                }              
                tr.append(td)
            })
        table.append(tr)
    })
    //HW 1b: render contacts as a list inside the same TD: ul => li => a

    parentElement.append(table)
}


const content = document.getElementById("content")
render(content, data)