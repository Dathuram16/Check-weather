    //fetch()
    //url
    let lat;
    let long;
    async function getWeatherFun()
    {
        try{
            let city = document.getElementById("city").value
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c7713061c7c9fc287cf1e848288c05d&units=metric`;
            let res= await fetch(url);
            let data = await res.json();
            appendData(data);
            console.log("data:",data);

        }
        catch(err){
            console.log("err:",err);
        }
    }

    function appendData(data)
        {
            document.getElementById("leftcontainer").innerHTML= "";
            document.getElementById("rightcontainer").innerHTML= "";
            let divTag = document.createElement("div");

            let nameTag = document.createElement("h2");
            nameTag.innerText = "City Name:" +" "+ data.name;

            let tempdivTag =  document.createElement("div");
            tempdivTag.setAttribute("class","tempclass")


            let tempTag = document.createElement("h3");
            tempTag.innerText= "Temperature:" + " "+ data.main.temp;

            let minTempTag = document.createElement("p");
            minTempTag.innerText= "min-temp:" + " "+ data.main.temp_min

            let maxTempTag = document.createElement("p");
            maxTempTag.innerText= "max-temp:" + " "+ data.main.temp_max

            tempdivTag.append(tempTag,minTempTag,maxTempTag);

            let pressureTag = document.createElement("h3");
            pressureTag.innerText= "Pressure:" + " " +data.main.pressure;

            let humidityTag = document.createElement("h3");
            humidityTag.innerText= "Humidity:" + " " +data.main.humidity;

            let windTag = document.createElement("h3");
            windTag.innerText= "Wind:" + " " +data.wind.speed;

            let cloudTag = document.createElement("h3");
            cloudTag.innerText= "Clouds Description:" + " " +data.weather[0].description;

            let sunTag = document.createElement("div");
            sunTag.setAttribute("class","sun")

            let sunrisedivTag =  document.createElement("div");

            let riseTag = document.createElement("img");
            riseTag.setAttribute("src","data:image/jpeg;base64,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")
            riseTag.style.height= "50px";
            riseTag.style.width= "50px";

            let setTag = document.createElement("img");
            setTag.setAttribute("src","data:image/jpeg;base64,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")
            setTag.style.height= "50px";
            setTag.style.width= "50px";

            let sunriseTag = document.createElement("p");
            sunriseTag.innerText= "Sun-rise:" + " "+ new Date(data.sys.sunrise*1000);


            sunrisedivTag.append(riseTag,sunriseTag);


            let sunsetdivTag =  document.createElement("div");

            let sunsetTag = document.createElement("p");
            sunsetTag.innerText= "Sun-set:" + " "+ new Date(data.sys.sunset*1000);

            lat = data.coord.lat;
            long = data.coord.lon;

            sunsetdivTag.append(setTag,sunsetTag);

            sunTag.append(sunrisedivTag,sunsetdivTag)


            let mapTag = document.createElement("iframe");
            mapTag.src= `https://www.google.com/maps/embed/v1/place?key=AIzaSyDv3NfkuCBtm3NxE64QjpXlUWAquLYhbh0&q=${data.name}`
            mapTag.style.height="500px";
            mapTag.style.width= "500px";

            divTag.append(nameTag,tempdivTag,pressureTag,humidityTag,windTag,cloudTag,sunTag);

            document.getElementById("leftcontainer").append(divTag);

            document.getElementById("rightcontainer").append(mapTag)
            
        }


        async  function  getsevenFun()
        {
            try{
            let city = document.getElementById("city").value
            console.log(lat,long);
            let url1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=4c7713061c7c9fc287cf1e848288c05d&units=metric`;
            let response= await fetch(url1);
            let data1 = await response.json();
            appendSevenFun(data1.daily);
            console.log("data1:",data1);

        }
        catch(err){
            console.log("err:",err);
        }
        }

        function appendSevenFun(data1)
        {
            document.getElementById("forecast").innerHTML= "";
            data1.forEach(function(el){
                
                let divTag = document.createElement("div");

                let dateTag = document.createElement("h4");
                let datem= el.dt;
                dateTag.innerText= new Date(datem*1000).toLocaleString();

                let tempdivTag =  document.createElement("div");
                tempdivTag.setAttribute("class","tempclass")


                let tempTag = document.createElement("h3");
                tempTag.innerText= "Temperature:" + " "+ el.temp.day;

                let minTempTag = document.createElement("p");
                minTempTag.innerText= "min-temp:" + " "+  el.temp.min

                tempdivTag.append(tempTag,minTempTag);
                divTag.append(dateTag,tempdivTag)

                document.getElementById("forecast").append(divTag);
            })
        }