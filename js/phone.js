
const search = () => {
    const searchInput = document.getElementById('searchMobile');
    const searchText = searchInput.value;
    console.log(searchText);
    searchInput.value = '';

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
    data.forEach(i => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        
        
        <div class="card h-100">
            <img src="${i.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${i.phone_name}</h5>
                <p class="card-text">${i.slug}</p>
            </div>
            <div class="card-footer align-content-center">
                <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>
        </div>
        
        `
        card.appendChild(div);
    });

}

