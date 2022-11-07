let sounds = []

function onSound(index) {
    const pathSound = sounds[index].path
     
    const sound = new  Audio(pathSound)

    sound.play()

    console.log(sound)
}

fetch('../sounds.json').then(response => response.json()).then(data => 
    {sounds = data
        
        const elementSound = document.querySelector('.sounds')

        sounds.map((sound, index) =>{
            const li = document.createElement('li')
            const button = document.createElement('button')

            const label = document.createElement('label')
            label.innerHTML = sound.label
            button.appendChild(label)

            const span = document.createElement('span')
            span.innerHTML = sound.hotkey
            button.appendChild(span)

            button.setAttribute('onclick', `onSound(${index})`)


            console.log(sound)    

         li.appendChild(button)

         elementSound.appendChild(li)



         } )     
    
    }

    )