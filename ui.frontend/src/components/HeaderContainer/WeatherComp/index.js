import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import cloud from '../../../assets/cloud.png'
import cloudy from '../../../assets/cloudy.png'
import raining from '../../../assets/raining.png'
import thunder from '../../../assets/thunder.png'
import storm from '../../../assets/storm.png'
import sun from '../../../assets/sun.png'


const CompWeather = ({color})=>{

    const[cityShow, setCity] = useState('Cidade')
    const[stateShow, setState] = useState('UF')
    const[temp, setTemp] = useState('XX')
    const[iconShow, setIcon] = useState(sun)

    const weather = () => {
        if (!localStorage.getItem("lat") || !localStorage.getItem("long")) {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              let long = position.coords.longitude;
              let lat = position.coords.latitude;
              long.toFixed(20)
              lat.toFixed(20)
              localStorage.setItem("lat", lat);
              localStorage.setItem("long", long);
              weatherShow()
            });
          }
        }else{
          weatherShow()
        }
        
      }
      
      const weatherShow = () => {
        let lat = localStorage.getItem("lat");
        let long = localStorage.getItem("long");
        const api = `https://api.weatherapi.com/v1/current.json?key=288ce9269f9c46699a1185755220202&q=${lat},${long}`;
        axios.get(api).then((response) => {
          const region = response.data.location.region;
          setState(regionShort(region))
          let icon = response.data.current.condition.icon;
          const id = response.data.current.condition.text;
          setIcon(weatherIcon(icon, id))
          let temperature = response.data.current.temp_c;
          temperature = temperature.toFixed(0);
          setTemp(temperature)
          const lat = localStorage.getItem("lat");
          const long = localStorage.getItem("long");
          location(lat, long);
        });
      }

      const location = (lat, lng) => {
        if (!localStorage.getItem("city")) {
          axios
            .get(
              "https://us1.locationiq.com/v1/reverse.php?key=pk.9866ca8f778fce5a705ef63d65b98bc8&lat=" +
                lat +
                "&lon=" +
                lng +
                "&format=json"
            )
            .then((reply) => {
              localStorage.setItem("city", reply.data.address.city);
              setCity(reply.data.address.city)
            });
        } else {
          setCity(localStorage.getItem("city"))
        }
      }

      const weatherIcon = (icon, id) => {
        if (id.includes("thunder") && id.includes("rain")) {
          icon = storm;
        } else if (id.includes("thunder")) {
          icon = thunder;
        } else if (id.includes("rain") || id.includes("drizzle")) {
          icon = raining;
        } else if (id.includes("Fog") || id.includes("Mist")) {
          icon = cloud;
        } else if (
          id.includes("Cloudy") ||
          id.includes("Overcast") ||
          id.includes("cloudy")
        ) {
          icon = cloudy;
        } else if (id.includes("Sunny") || id.includes('Clear')) {
          icon = sun;
        }
        return icon;
      }

      const regionShort = (region) => {
        let regionShow = "";
        switch (region) {
          case "Acre":
            regionShow = "AC";
            break;
          case "Alagoas":
            regionShow = "AL";
            break;
          case "Amapá":
            regionShow = "AP";
            break;
          case "Amazonas":
            regionShow = "AM";
            break;
          case "Bhaia":
            regionShow = "BA";
            break;
          case "Ceará":
            regionShow = "CE";
            break;
          case "Espírito Santo":
            regionShow = "ES";
            break;
          case "Goiás":
            regionShow = "GO";
            break;
          case "Maranhão":
            regionShow = "MA";
            break;
          case "Mato Grosso":
            regionShow = "MT";
            break;
          case "Mato Grosso do Sul":
            regionShow = "MS";
            break;
          case "Minas Gerais":
            regionShow = "MG";
            break;
          case "Pará":
            regionShow = "PA";
            break;
          case "Paraíba":
            regionShow = "PB";
            break;
          case "Paraná":
            regionShow = "PR";
            break;
          case "Pernambuco":
            regionShow = "PE";
            break;
          case "Piauí":
            regionShow = "PI";
            break;
          case "Rio de Janeiro":
            regionShow = "RJ";
            break;
          case "Rio Grande do Norte":
            regionShow = "RN";
            break;
          case "Rio Grande do Sul":
            regionShow = "RS";
            break;
          case "Rondônia":
            regionShow = "RO";
            break;
          case "Roraima":
            regionShow = "RR";
            break;
          case "Santa Catarina":
            regionShow = "SC";
            break;
          case "São Paulo":
            regionShow = "SP";
            break;
          case "Sergipe":
            regionShow = "SE";
            break;
          case "Tocantins":
            regionShow = "TO";
            break;
        }
        return regionShow;
      }

useEffect(() => {
    weather()
},[])

    return(
        <StyledWeather color={color}>
            <p>{cityShow} - {stateShow}</p>
            <span>
                <img draggable='false' src={iconShow} alt="Weather Icon" />
                <h2>{temp}°</h2>
            </span>
        </StyledWeather>
    )
}

const StyledWeather = styled.div`
color: ${props=>props.color};
margin-right: 10px;
span{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
h2{
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    color: ${props=>props.color};
}
p{
    font-size: 0.875rem;
    color: ${props=>props.color};
}
img{
    width: 30px;
    height: 30px;
}
`

export default CompWeather