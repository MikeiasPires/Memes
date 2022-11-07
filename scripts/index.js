let sounds = []


let soundsCache = new Map()


function onSound(index) {
    const pathSound = sounds[index].path
     
    let sound = soundsCache.get(index)

    if(!sound){
        sound = new Audio(pathSound)
        soundsCache.set(index, sound)
    }

    sound.currentTime = 0   
    sound.play()

    console.log(sound)
}

document.addEventListener('keydown', ({key}) => {
   const soundIndex =   sounds.findIndex(sounds => sounds.hotkey == key)   

   console.log(soundIndex)

   if(soundIndex == -1){
    return
   }

   onSound(soundIndex)
})

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