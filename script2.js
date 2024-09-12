const btnaddPerson = document.querySelector('#btnAddPersonal')

btnaddPerson.addEventListener('click',function(){
    const tr = document.createElement('tr')
    const fullNamer = document.createElement('td')
    const rankr = document.createElement('td')
    const positionr = document.createElement('td')
    const platoomr = document.createElement('td')
    const statusr = document.createElement('td')
    const actionr = document.createElement('td')

    const id = genereId()

    const Remover = document.createElement('button')
    Remover.className = 'Remover' 
    Remover.textContent = 'remove'

    Remover.dataset.id = id
    Remover.onclick = () => removeRow(id)



    const Missionr = document.createElement('button')
    Missionr.className = 'Missionr' 
    Missionr.textContent = 'mission'

    Missionr.dataset.id = id
    Missionr.onclick = () => missionRow(id)


    const Editr = document.createElement('button')
    Editr.className = 'Editr' 
    Editr.textContent = 'edit'

    Editr.dataset.id = id
    Editr.onclick = () => openPopup(id)

    actionr.append(Editr)
    actionr.append(Missionr)
    actionr.append(Remover)

    tr.appendChild(fullNamer)
    tr.appendChild(rankr)
    tr.appendChild(positionr)
    tr.appendChild(platoomr)
    tr.appendChild(statusr)
    tr.appendChild(actionr)



})