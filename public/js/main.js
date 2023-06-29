const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_realdata = document.getElementById("temp_realdata");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");



const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const d = new Date();
let day = weekday[d.getDay()];
let date = d.getDate();
let mahina = month[d.getMonth()];

document.getElementById("day").innerText = day
document.getElementById("today_date").innerText = date
document.getElementById("month").innerText = mahina



const getInfo = async(event)=>{
    event.preventDefault();
    
    const cityval = cityName.value
    if(cityval === ""){
        city_name.innerText = "Plz write the name before search"
        datahide.classList.add('data_hide')
    }
    else{
        try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=ebd6fe4102d781dd34a10ebaa47f49a1`
        const response = await fetch(url)
        const data = await response.json()
        const arrdata = [data]

        city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`
        temp_realdata.innerText = arrdata[0].main.temp
         
        const tempmood = arrdata[0].weather[0].main

        if(tempmood=="Clear"){
            temp_status.innerHTML = `<i class="fa-solid fa-sun" style ='color: #eccc68;'></i>`
        }
        else if(tempmood=="Clouds"){
            temp_status.innerHTML = `<i class="fa-solid fa-cloud" style ='color: #f1f2f6;'></i>`
        }
        else if(tempmood=="Rain"){
            temp_status.innerHTML = `<i class="fa-solid fa-cloud-rain" style ='color: #a4b0be;'></i>`
        }
        else{
            temp_status.innerHTML = `<i class="fa-solid fa-sun" style ='color: #eccc68;'></i>`
        }

        datahide.classList.remove('data_hide')
        
        }catch{
            city_name.innerText = "Plz write proper city name"
            datahide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener('click',getInfo);