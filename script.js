let container = document.querySelector('.container')
let input = document.querySelector('.search_image input')

async function GetData(){
    let url = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&client_id=9r81YEv6wCjcWC32W96pndc4LkohiYJ9QtVSWGTCnAo`
    container.innerHTML = ''
    let data = await fetch(url)
    let json = await data.json()
    let imagesData = json.results
    console.log(imagesData)
}

input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        GetData()
    }
})





