
const search = () => {
    const searchInput = document.getElementById('searchMobile');
    const searchText = searchInput.value;
    console.log(searchText);
    searchInput.value = '';

    if (searchText == '') {
        const displayPic = document.getElementById("displayPicture")
        displayPic.innerHTML = '';
        const error = document.getElementById('error-massage');
        error.innerHTML = `
        <h1 class="text-center text-danger">Please enter input in searc bar !!</h1>
        
        `

    }


    //  get data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data))

}
const displaySearch = searchMobole => {
    console.log(searchMobole);
    const data = searchMobole.data;
    console.log(data)
    const card = document.getElementById('card')
    const displayPic = document.getElementById("displayPicture")
    displayPic.innerHTML = '';
    card.innerHTML = "";
    data.forEach(i => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        
        
        <div class="card h-50">
            <img src="${i.image}" class="card-img-top p-4 " alt="...">
            <div class="card-body">
                <h5 class="card-title">${i.phone_name}</h5>
                <p class="card-text">${i.slug}</p>
            </div>
            <div class="card-footer d-flex justify-content-center bg-primary">
                <button type="button" class="btn btn-outline-dark  bg-success">Dark</button>
            </div>
        </div>
        
        `
        card.appendChild(div);
    });

}

