alert('Hello from Mission Info')
const container = document.querySelector("main");
const element = document.getElementById("myBtn");
let textVal = document.getElementById("textareaData");
let apiData = []
const getApiData = async function () {
  try {
    const res = await fetch(
      "https://api.coinpaprika.com/v1/coins"
    );
    const data = await res.json();
    apiData = data
    let filteredCitiesHtml = data.map((item) => {
      return `
          <div class="card col-6" style="width: 33%;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${item.symbol}</h6>
              <p class="card-text">
              <span style="color: orange;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>
              </span>(${item.rank})
              </p>
             </div>
          </div>
          `;
    }).join('');
    container.innerHTML = filteredCitiesHtml
  } catch (err) {
    console.log(err);
  }
};

element.addEventListener("click", function() {
  document.getElementById("result").innerHTML = textVal.value;
});


let findData = (e) =>{
  return apiData.find(element=> element.symbol == e.split('/')[1])?.name
}
element.addEventListener("click", function() {
  let text = textVal.value.split(' ').map(e=> e.includes('Name/') ? findData(e) : e).join(' ').replace(/{{ .*?/g, '').replace(/ }}.*?/g, '')
  document.getElementById("result").innerHTML = text;
});
const init = function () {
  getApiData()
};

init();


