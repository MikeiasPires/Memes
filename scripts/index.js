let sounds = []

fetch('../sounds.json').then(response => response.json()).then(data => 
    {sounds = data
        sounds.map(sound => 
        console.log(sound)    
        )     
    
    }

    )