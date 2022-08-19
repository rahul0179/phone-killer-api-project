
const search = () => {
    // input text value 
    const searchInput = document.getElementById('searchMobile');
    const searchText = searchInput.value;
    console.log(searchText);
    searchInput.value = '';
    const error = document.getElementById('error-massage');
    // error massage handle 
    if (searchText == '') {
        const displayPic = document.getElementById("displayPicture")
        displayPic.innerHTML = '';

        error.innerHTML = `
        <h1 class="text-center text-danger">Please enter input in searc bar !!</h1>
        
        `

    }


    else {
        error.innerHTML = '';
        //  get data 
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearch(data))
    }


}


const displaySearch = (searchMobole) => {
    // get data and select data 
    console.log(searchMobole);
    const data = searchMobole.data;
    console.log(data)
    const card = document.getElementById('card')
    const displayPic = document.getElementById("displayPicture")
    // clear display 
    displayPic.innerHTML = '';
    card.innerHTML = "";

    //  data  loop 
    for (const i of data) {
        const div = document.createElement('div')
        div.classList.add('col')

        div.innerHTML = `
        
        
        <div class="card h-100">
            <img  src="${i.image}" class="card-img-top p-4 img-fluid " alt="...">
            <div class="card-body">
                <h5 class="card-title">${i.phone_name}</h5>
                <p class="card-text">${i.slug}</p>
            </div>
            <div  class="card-footer d-flex justify-content-center bg-primary">
                <button  onclick="mobile('${i.slug}')" type="button" class="btn btn-outline-dark  bg-success">Details</button>
            </div>
        </div>
        `

        card.appendChild(div);
    };

}



const mobile = id => {
    console.log(id)
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => mobileDetailShow(data))
}

const mobileDetailShow = d => {
    // get data and select data 

    const data = d.data;
    const card = document.getElementById('card')
    const card2 = document.getElementById('card2')
    const displayPic = document.getElementById("displayPicture")

    // clear display 
    displayPic.innerHTML = '';
    card.innerHTML = "";
    console.log(d);
    console.log(data);
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 p-4">
            <img src="${data.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body pt-5">
                <h5 class="card-title">${data.brand}</h5>
                <p class="card-text">${data.name}</p>
                <p class="card-text">${data.slug}<br><small class="text-muted">${data.releaseDate}</small></p>
            </div>
        </div>
    </div>

</div>
    
    
    `
    const div2 = document.createElement('div');
    div2.innerHTML = `
    <table class="table">
    <thead>
      <tr>
        
        <th scope="col">Features</th>
        <th scope="col">About this item</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>       
        <td> Name</td>
        <td>${data.name}</td>      
      </tr>
      <tr>       
        <td>Storage</td>
        <td>${data.mainFeatures.storage}</td>      
      </tr>
      <tr>       
        <td>Display size</td>
        <td>${data.mainFeatures.displaySize}</td>      
      </tr>
      <tr>       
        <td>Chipset</td>
        <td>${data.mainFeatures.chipset} </td>      
      </tr>
      <tr>       
        <td>Bluetooth</td>
        <td>${data.others.Bluetooth}</td>      
      </tr>
      <tr>       
        <td>Gps</td>
        <td>${data.others.GPS}</td>      
      </tr>
      <tr>       
        <td>NFC</td>
        <td>${data.others.NFC}</td>      
      </tr>
      <tr>       
        <td>USB</td>
        <td>${data.others.USB}</td>      
      </tr>
      <tr>       
        <td>WLAN</td>
        <td>${data.others.WLAN}</td>      
      </tr>
      <tr>       
        <td>Radio</td>
        <td>${data.others.Radio}</td>      
      </tr>
      <tr>       
        <td>Colour</td>
        <td>black,silvwe,white</td>      
             
      </tr>
      <tr>       
        <td>Release Date</td>
        <td>${data.releaseDate}</td>      
      </tr>
      
      
    </tbody>
  </table>

    
    
    
    `





    card2.appendChild(div);
    card2.appendChild(div2)



}

