const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb4f93900emsh311ca38b83bd7e7p118e48jsnb02dd6c72535',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

const getWeather() = (city) =>{
    fetch('https://forecast9.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

SubmitEvent.addEventListener("click", (e)){
    e.preventDefault()
    getWeather(city.value)
}