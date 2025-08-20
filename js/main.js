let btns = document.querySelector("#btnss")
let info = document.querySelector("#info")
let userdata = document.querySelector("#username")
if (localStorage.getItem("firstname")) {
    btns.style.display = "none"
    info.style.display = "block"
    userdata.innerHTML = "Hello  " + localStorage.getItem("firstname")
}

let icon = document.querySelector(".icon-shopping")
let num = document.querySelector("#numOfAdded")
icon.addEventListener('mouseenter', function (e) {
    e.preventDefault()
    num.style.transform = "translate(9px,-20px)"
})
icon.addEventListener('mouseleave', function (e) {
    e.preventDefault()
    num.style.transform = "translate(9px,-13px)"
})

let totalproducts = document.querySelector(".cards")
let details = [
    {
        id: 1,
        img: "img/حلق6.jpeg",
        title: "Silver stainless steel earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 2,
        img: "img/حلق2.jpeg",
        title: "Gold stainless steel earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 3,
        img: "img/سلسله2.jpeg",
        title: "Silver stainless steel necklace",
        price: "$200",
        category: "Necklace",
        clicked: false
    },
    {
        id: 4,
        img: "img/سلسله1.jpeg",
        title: "Gold stainless steel necklace",
        price: "$300",
        category: "Necklace",
        clicked: false
    },
    {
        id: 5,
        img: "img/img1s.jpeg",
        title: "Silver stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 6,
        img: "img/images (2).jpeg",
        title: "Gold stainless steel bracelet",
        price: "$250",
        category: "Bracelet",
        clicked: false
    },
    {
        id: 7,
        img: "img/imag2.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 8,
        img: "img/images (3).jpeg",
        title: "Gold stainless steel bracelet",
        price: "$250",
        category: "Bracelet",
        clicked: false
    },
    {
        id: 9,
        img: "img/images.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 10,
        img: "img/سلسله4.jpeg",
        title: "Silver stainless steel necklace",
        price: "$200",
        category: "Necklace",
        clicked: false
    },
    {
        id: 11,
        img: "img/حلق1.jpeg",
        title: "Gold stainless steel earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 12,
        img: "img/img1ans.jpeg",
        title: "Gold stainless steel bracelet",
        price: "$250",
        category: "Bracelet",
        clicked: false
    },
    {
        id: 13,
        img: "img/img1.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 14,
        img: "img/جلق5.jpeg",
        title: "Crystal earrings",
        price: "$200",
        category: "Earrings",
        clicked: false
    },
    {
        id: 15,
        img: "img/سلسله4.jpeg",
        title: "Silver stainless steel necklace",
        price: "$200",
        category: "Necklace",
        clicked: false
    },
    {
        id: 16,
        img: "img/img3.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 17,
        img: "img/حلق3.jpeg",
        title: "Gold stainless steel earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 18,
        img: "img/img2ans.jpeg",
        title: "Gold stainless steel bracelet",
        price: "$250",
        category: "Bracelet",
        clicked: false
    },
    {
        id: 19,
        img: "img/img2s.jpeg",
        title: "Silver stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 20,
        img: "img/images (1).jpeg",
        title: "Gold bangles",
        price: "$600",
        category: "Bangles",
        clicked: false
    },
    {
        id: 21,
        img: "img/حلق4.jpeg",
        title: "Gold stainless steel earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 22,
        img: "img/img3s.jpeg",
        title: "Silver stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 23,
        img: "img/img4s.jpeg",
        title: "Silver stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 24,
        img: "img/img4.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
]


function drawitems(items = details) {
    let x = items.map((item) => {
        return `
        <div class="card1 c" onmouseenter="move(this,${item.id})" onmouseleave="origin(this,${item.id})">
                <div class="img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="details">
                    <h2>${item.title}</h2>
                    <p>price:${item.price}</p>
                    <p>category:${item.category}</p>
                    <div class="iplusbtn">
                        <i class="fas fa-heart love" onClick="addtofav(this,${item.id},${item.clicked})"></i>
                        <button class="addto" onClick="add(this,${item.id},${item.clicked})">Add To Cart</button>
                    </div>
                </div>
            </div>
        `
    })
    totalproducts.innerHTML = x.join("");
}
drawitems();
let select=document.querySelector("#select")
let search = document.querySelector(".search")
search.addEventListener('input', function (e) {
    e.preventDefault()
    let value = search.value.trim().toLowerCase()
    let x = value === "" ? details : details.filter((item) => {
        if(select.value.trim() === "Search by product name") {
            return item.title.toLowerCase().includes(value)
        }
        else if(select.value.trim() === "Search by category") {
            return item.category.toLowerCase().includes(value)
        }
    })
    if (x.length === 0) {
        totalproducts.innerHTML = `
        <div class="notFound">
        <h2 class="h-notFound">No items found</h2>
        <button class="try">try again..</button>
        </div>
        `;
        let tryagain = document.querySelector(".try")
        tryagain.addEventListener('click', function (e) {
            e.preventDefault()
            drawitems(details)
            document.querySelector(".search").value=""
        })
        return
    }
    drawitems(x)
    
})


function move(c, id) {
    c.style.transform = "translateY(-7px)"
}
function origin(c, id) {
    c.style.transform = "translateY(0px)"
}

function add(button, id, clicked) {
    if (localStorage.getItem("email")) {
        let item = details.find(el => el.id === id);
        if (!item.clicked) {
            num.innerHTML++
            button.style.width = "160px"
            button.style.background = " #ffffffff"
            button.style.color = "#7743DB"
            button.innerHTML = "Remove From Cart "
            button.style.border = "2px solid #7743DB"
            item.clicked = true;
        }
        else {
            num.innerHTML--
            button.style.width = "120px"
            button.style.background = "#7743DB"
            button.style.color = "#ffffff"
            button.innerHTML = "Add To Cart "
            button.style.border = "none"
            item.clicked = false;
        }
        let c = button.closest(".c")
        c.style.boxShadow = "none"
        c.style.transform = "translateY(-5px)"
        setTimeout(() => {
            c.style.boxShadow = "1px 4px 15px  rgba(0, 0, 0, .5)"
            c.style.transform = "translateY(-7px)"
        }, 200)
    }
    else {
        setTimeout(() => {
            window.location = "reg.html"
        }, 100)
    }
    // عاوزه اغير حاجه لما يجي يضغط و يلاقي اني ضغطت قبل كده اصلا 
}

function addtofav(i, id, clicked) {
    if (localStorage.getItem("email")) {
        let item = details.find(el => el.id === id)
        i.style.fontSize = "25px"
        i.style.color = "red"
        let c = i.closest(".c")
        c.style.boxShadow = "none"
        c.style.transform = "translateY(-5px)"
        setTimeout(() => {
            c.style.boxShadow = "1px 4px 15px  rgba(0, 0, 0, .5)"
            c.style.transform = "translateY(-7px)"
        }, 200)

    }
    else {
        setTimeout(() => {
            window.location = "reg.html"
        }, 100)
    }
}






