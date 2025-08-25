let btns = document.querySelector("#btnss")
let info = document.querySelector("#info")
let userdata = document.querySelector("#username")
if (localStorage.getItem("firstname")) {
    btns.style.display = "none"
    info.style.display = "flex"
    userdata.innerHTML = localStorage.getItem("firstname").toLocaleUpperCase() + " " + localStorage.getItem("secname").toLocaleUpperCase()
}

let logout = document.querySelector(".btn")
logout.addEventListener('click', function (e) {
    e.preventDefault()
    let x=confirm("Are you sure to logout?")
    // console.log(x);
    if (x) {
        localStorage.clear()
        setTimeout(() => {
            window.location = "reg.html"
        }
            , 100)
    }
})

// let pro=localStorage.getItem("product")
// let totalproducts = document.querySelector(".cards")
// if(pro)
// {
//     let item=JSON.parse(pro)
//     draw(item)
// }
// function draw(items) {
//     let x = items.map((item) => {
//         return `
//         <div class="card1 c" onmouseenter="move(this,${item.id})" onmouseleave="origin(this,${item.id})">
//                 <div class="img">
//                     <img src="${item.img}" alt="">
//                 </div>
//                 <div class="details">
//                     <h2>${item.title}</h2>
//                     <p>price:<span>${item.price}</span></p>
//                     <p>category:${item.category}</p>
//                     <div class="iplusbtn">
//                         <i class="fas fa-heart love" onClick="addtofav(this,${item.id},${item.clicked})"></i>
//                         <button class="addto" 
//                         data-id="${item.id}"
//                         onClick="add(this,${item.id},${item.clicked})">
//                         Add To Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `
//     })
//     totalproducts.innerHTML = x;
// }
