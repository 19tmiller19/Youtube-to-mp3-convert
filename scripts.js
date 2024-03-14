const convertButton = document.getElementById('convert-button');
const convertInput = document.getElementById('convert-input');
const resultsDisplay =document.querySelector('.results');

convertButton.addEventListener("click",() =>{
    getAudio();
})

async function getAudio() {
    let link = convertInput.value;
    let parts = link.split("-");
    let videoId = "";

    if(parts.length === 2)
    videoId = parts[1];
    console.log(videoId);
        }

    else {
        console.log("Error! Invalid Youtube Link")

    }

    const url = 'https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhN5MBlGv2Ac';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23ffcbd8a0mshbc861**********************', //Rapid Api Key goes here
            'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
    const response = await fetch(url, options);
    const results = await response.json();

    resultsDisplay.innerHTML = `<p class="title">title:${results.title}</p>`;

    setTimeout(() =>{
        window.open(results.link,"_blank")
    }, 1000);

}
