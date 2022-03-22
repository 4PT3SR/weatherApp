
 const form = document.querySelector('form');
 const section = document.querySelector('section');

 form.addEventListener('submit', (e)=> {
     e.preventDefault();
    //  getWeather('manchester').then((err,data)=> {
    //      section.textContent = data;
    //  }).catch((err) => {
    //     section.textContent = err;
    //  })
    section.classList.remove('ghost')
    section.innerHTML = `
    <div class='loader'>
    <img src='Loader.gif'>
    </div>`
     getWeather(form.location.value)
     .then((data) => {
         if(data.error) {
          return  section.innerHTML =`
        <div class='error>
        <img src=''>
        <p>${data.error}</p>
        </div>
     `
         }
         section.innerHTML = `        
         
         
     <div class="atmosphere">
         ${data.atmosphere}
     </div>
     <div class="location">
         ${data.location},${data.country}
     </div>
 
     <div class="temperature">
         <h1>${data.temp}&#176C</h1>
     </div>`;
     })
     .catch(err => console.log(err) );
     

 })
 
 async function getWeather(location) {
     let response = await fetch(`/weather?search=${location}`);
    let data = await response.json();
    return data
 }

 
 