//{"coord":{"lon":-53.512,"lat":-24.4055},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":289.59,"feels_like":288.75,"temp_min":289.59,"temp_max":289.59,"pressure":1016,"humidity":56,"sea_level":1016,"grnd_level":971},"visibility":10000,"wind":{"speed":1.95,"deg":113,"gust":1.44},"clouds":{"all":43},"dt":1720177898,"sys":{"country":"BR","sunrise":1720174700,"sunset":1720213123},"timezone":-10800,"id":3450214,"name":"Assis Chateaubriand","cod":200}

async function buscarTemperatura(){ 
   
    // chave api da openweather 
    const API_KEY = '5e3c54d7baf9b9a3103880702c1ce216';
    const cityInput =
    // obitendo previsãodo tempo 
    app.get ('/weather', async (req, res) => {
        const city = req.query.city;
        if (!city){
            return res.status(400).jason({error: 'o parâmetro "city" é obrigatório '}); 
        }
    }
    )
    try{
        urlcompleta="https://api.openweathermap.org/data/2.5/weather?q=assis%20chateaubriand&appid=5e3c54d7baf9b9a3103880702c1ce216";
        const response = await axios.get (urlcompleta);
    
        const {descreption} = response.data.weather[0];
        const {temp} = response.data.main;
        const result={
            city, 
            weather_descreption: descreption,
            temperature: temp, 
        };
        res.jason(result)
    }catch (error){
        console.log('servidor iniciado na porta ${PORT}');
    };
}

//na linha abaixo estáo erro


