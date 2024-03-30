const render = (parentElement, data) => {
    const table = document.createElement('table')
    let tr
    let td
    data.employees.forEach(employee => {
        tr = document.createElement('tr')
        Object.keys(employee).forEach(
            prop => {
                td = document.createElement('td')
                if (prop !== 'photo') {
                    td.innerText = employee[prop]
                } else {
                    let img = document.createElement('img')
                    img.src = employee[prop]
                    td.append(img)
                }
                if (prop == 'contacts') {
                    const obj = employee[prop]
                    ul = document.createElement('ul')
                    for (const [key,value] of Object.entries(obj)) {
                        li = document.createElement('li')
                        a = document.createElement('a')
                        li.innerHTML += `${key}: ` 
                        a.innerText = ` ${value}`                      
                        li.append(a)
                        ul.append(li)
                        td.append(ul)
                    }                   
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