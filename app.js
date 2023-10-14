// for (let i = 1; i <101; i++){

//     if (i % 2 == 0&& i % 7 == 0){
//         console.log(i)
//     }
// } 


// let name = prompt("ten la gi");
// console.log("ten b la " + name);

// let name1 = prompt("ten la gi");
// console.log("ten b la " + name1);

// let name2 = prompt("ten la gi");
// console.log("ten b la " + name2);

// let name3 = prompt("ten la gi");
// console.log("ten b la " + name3);

// let name4 = prompt("ten la gi");
// console.log("ten b la " + name4);



// let list_name = [name , name1 , name2 , name3 , name4 ];
// console.log(list_name);


// let box = document.querySelector(".box");
// box.style.backgroundColor = "red";
// box.style.width = "200px";
// box.style.height = "200px";
// box.style.position = "absolute"


// let btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//     console.log("phamkhanhan");
//     if (box.style.borderRadius == "50%") {
//         box.style.borderRadius = "0%";
//     } else { box.style.borderRadius = "50%"; }

// })


// let input_top = document.getElementById("top")
// let input_left = document.getElementById("left");
// let btn2 = document.querySelector(".btn2");

// btn2.addEventListener("click", function () {
//     console.log(input_left.value);
//     box.style.left = input_left.value + "px"
//     box.style.top = input_top.value + "px"
// })


let thoitiet = document.getElementsByClassName("thoitiet")
let diadiem = document.getElementById("diadiem")
let btn = document.getElementById("btn")
let nhietdo = document.getElementById("nhietdo")
let imgdiv = document.querySelector(".image_temperature");
let img = document.createElement("img");
let date = document.getElementById("current_date")
let time_clock = document.getElementById("current_clock")

img.scr = "";
imgdiv.appendChild(img);
btn.addEventListener("click", function () {
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${diadiem.value}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results[0].latitude);
      console.log(data.results[0].longitude);

      let latitude = data.results[0].latitude;
      let longitude = data.results[0].longitude;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data_weather) {
          console.log(data_weather);
          // console.log(data_weather.current_weather.weathercode);
          // console.log(data_weather.current_weather.temperature);
          nhietdo.innerText = data_weather.current_weather.temperature;

          let weather_code = data_weather.current_weather.weathercode;
          console.log(weather_code);
          if (weather_code >= 0 && weather_code <= 3) {
            img.src = "troinang.jpg";
          } else if (weather_code >= 45 && weather_code < 77) {
            img.src = "troimua.jpg";
          } else if (weather_code >= 77 && weather_code < 99) {
            img.src = "troisam.jpg";
          }



          let time = data_weather.current_weather.time;
          let data_date = time.split("T");
          console.log(data_date);
          date.innerText = data_date[0]
          time_clock.innerText = data_date[1]
          let hour = data_date[1].split(":")
          console.log(hour);
          if (hour[0]<16 ) {
            thoitiet[0].style.background= "yellow"
          }else{
            thoitiet[0].style.background= "#333"

          }


          console.log(data_weather.current_weather.temperature);

        });

    });


})
 
// let input_search_address = document.getElementById("search_weather");
// let search_button = document.querySelector("button");
// let temperature = document.getElementById("temperature");
// let img = document.querySelector(".image_temperature img");

// search_button.addEventListener("click", function () {
//   fetch(
//     `https://geocoding-api.open-meteo.com/v1/search?name=${input_search_address.value}`
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // console.log(data);
//       // console.log(data.results[0].latitude);
//       // console.log(data.results[0].longitude);

//       let latitude = data.results[0].latitude;
//       let longitude = data.results[0].longitude;

//       fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       )
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data_weather) {
//           console.log(data_weather);
//           let weather_code = data_weather.current_weather.weathercode;
//           console.log(weather_code);
//           if (weather_code >= 0 && weather_code <= 3) {
//             img.src = "./sun.png";
//           } else if (weather_code >= 45 && weather_code < 77) {
//             img.src = "./rain.png";
//           } else if (weather_code >= 77 && weather_code < 99) {
//             img.src = "./thunder.png";
//           }

//           temperature.innerText = data_weather.current_weather.temperature;
//           console.log(data_weather.current_weather.temperature);
//         });
//     });
// });












