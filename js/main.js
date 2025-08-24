let btns = document.querySelector("#btnss")
let info = document.querySelector("#info")
let userdata = document.querySelector("#username")
if (localStorage.getItem("firstname")) {
    btns.style.display = "none"
    info.style.display = "flex"
    userdata.innerHTML = localStorage.getItem("firstname").toLocaleUpperCase() + " " + localStorage.getItem("secname").toLocaleUpperCase()
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

icon.addEventListener('click', function (e) {
    e.preventDefault()
    let carts = document.querySelector(".carts_products")
    if (carts.style.display === "flex") {
        carts.style.display = "none"
        carts.style.animation = "fadeOut 0.5s"
        carts.style.transition = "all 0.5s ease-in-out"
    }
    else {
        carts.style.display = "flex"
        carts.style.animation = "fadeIn 0.5s"
        carts.style.transition = "all 0.5s ease-in-out"
    }
})

let totalproducts = document.querySelector(".cards")
let details = [
    {
        id: 1,
        img: "img/حلق6.jpeg",
        title: "Silver earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 2,
        img: "img/حلق2.jpeg",
        title: "Gold earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 3,
        img: "img/سلسله2.jpeg",
        title: "Silver necklace",
        price: "$200",
        category: "Necklace",
        clicked: false
    },
    {
        id: 4,
        img: "img/سلسله1.jpeg",
        title: "Gold necklace",
        price: "$300",
        category: "Necklace",
        clicked: false
    },
    {
        id: 5,
        img: "img/img1s.jpeg",
        title: "Silver ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 6,
        img: "img/images (2).jpeg",
        title: "Gold bracelet",
        price: "$250",
        category: "Bracelet",
        clicked: false
    },
    {
        id: 7,
        img: "img/imag2.jpeg",
        title: "Gold ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 8,
        img: "img/images (3).jpeg",
        title: "Gold bracelet",
        price: "$250",
        category: "Bracelet",
        clicked: false
    },
    {
        id: 9,
        img: "img/images.jpeg",
        title: "Gold ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 10,
        img: "img/سلسله4.jpeg",
        title: "Silver necklace",
        price: "$200",
        category: "Necklace",
        clicked: false
    },
    {
        id: 11,
        img: "img/حلق1.jpeg",
        title: "Gold earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 12,
        img: "img/img1ans.jpeg",
        title: "Gold bracelet",
        price: "$250",
        category: "Bracelet",
        clicked: false
    },
    {
        id: 13,
        img: "img/img1.jpeg",
        title: "Gold ring",
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
        title: "Silver necklace",
        price: "$200",
        category: "Necklace",
        clicked: false
    },
    {
        id: 16,
        img: "img/img3.jpeg",
        title: "Gold ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 17,
        img: "img/حلق3.jpeg",
        title: "Gold earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 18,
        img: "img/img2ans.jpeg",
        title: "Gold bracelet",
        price: "$250",
        category: "Bracelet",
        clicked: false
    },
    {
        id: 19,
        img: "img/img2s.jpeg",
        title: "Silver ring",
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
        title: "Gold earrings",
        price: "$150",
        category: "Earrings",
        clicked: false
    },
    {
        id: 22,
        img: "img/img3s.jpeg",
        title: "Silver ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 23,
        img: "img/img4s.jpeg",
        title: "Silver ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
    {
        id: 24,
        img: "img/img4.jpeg",
        title: "Gold ring",
        price: "$180",
        category: "Rings",
        clicked: false
    },
]




///////////////////////////////////////////////////////////////////////////// display items///////////////////////////////////////////////////////////

function drawitems(items = details) {
    let x = items.map((item) => {
        return `
        <div class="card1 c" onmouseenter="move(this,${item.id})" onmouseleave="origin(this,${item.id})">
                <div class="img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="details">
                    <h2>${item.title}</h2>
                    <p>price:<span>${item.price}</span></p>
                    <p>category:${item.category}</p>
                    <div class="iplusbtn">
                        <i class="fas fa-heart love" onClick="addtofav(this,${item.id},${item.clicked})"></i>
                        <button class="addto" 
                        data-id="${item.id}"
                        onClick="add(this,${item.id},${item.clicked})">
                        Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        `
    })
    totalproducts.innerHTML = x.join("");
}
drawitems();
///////////////////////////////////////////////////////////////////////////// display items///////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////search and move cards///////////////////////////////////////////////////////////
let select = document.querySelector("#select")
let search = document.querySelector(".search")
search.addEventListener('input', function (e) {
    e.preventDefault()
    let value = search.value.trim().toLowerCase()
    let x = value === "" ? details : details.filter((item) => {
        if (select.value.trim() === "Search by product name") {
            return item.title.toLowerCase().includes(value)
        }
        else if (select.value.trim() === "Search by category") {
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
            document.querySelector(".search").value = ""
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
/////////////////////////////////////////////////////////////////////////////search and move cards///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////// add to cart and fav///////////////////////////////////////////////////////////
let allProducts = document.querySelector(".showc")
function showcart(id) {
    let choice = details.find((el) => el.id === id)
    let div = document.querySelector(".noitems")
    if (allProducts.innerHTML.trim() === "") {
        div.style.display = "block"
    }
    else {

        div.style.display = "none"
    }

    allProducts.innerHTML += `
    <div class="showProduct " data-id="${choice.id}">
    <div class="nameandprice">
    <p>${choice.title}</p>
    <p>price:<span>${choice.price}</span></p>
    </div>
    <div class="iconsandnum">
    <i class="fas fa-plus icn" onClick="pls(this,${choice.id},${choice.clicked})"></i>
    <span>1</span>
    <i class="fas fa-minus icn" onClick="mins(this,${choice.id},${choice.clicked})"></i>
    </div>
    </div>
    `
}

let div = document.querySelector(".noitems")
if (num.innerHTML.trim() === "0") {
    div.style.display = "block"
}
else {

    div.style.display = "none"
}

function add(button, id, clicked) {
    if (localStorage.getItem("email")) {
        let item = details.find(el => el.id === id);
        let c = button.closest(".c")
        if (!item.clicked) {
            num.innerHTML++
            button.style.width = "160px"
            button.style.background = " #ffffffff"
            button.style.color = "#7743DB"
            button.innerHTML = "Remove From Cart "
            button.style.border = "2px solid #7743DB"
            item.clicked = true;
            showcart(id)
        }
        else {
            num.innerHTML--
            let div = document.querySelector(".noitems")
            if (num.innerHTML.trim() === "0") {
                div.style.display = "block"
            }
            else {
                div.style.display = "none"
            }
            button.style.width = "120px"
            button.style.background = "#7743DB"
            button.style.color = "#ffffff"
            button.innerHTML = "Add To Cart "
            button.style.border = "none"
            item.clicked = false;
            let prods = document.querySelectorAll(".showProduct")
            prods.forEach((prod) => {
                let id = parseInt(prod.getAttribute("data-id"))
                if (id === item.id) {
                    let num = document.querySelector("#numOfAdded")
                    let span = prod.querySelector(".iconsandnum span")
                    if (parseInt(num.innerHTML) > 0)
                        num.innerHTML -= parseInt(span.innerHTML) - 1
                    let div = document.querySelector(".noitems")
                    if (num.innerHTML.trim() === "0") {
                        div.style.display = "block"
                    }
                    else {
                        div.style.display = "none"
                    }
                    prod.remove()
                }
            })
        }
        c.style.boxShadow = "none"
        //   
        c.style.transform = "translateY(-5px)"
        setTimeout(() => {
            if (document.body.classList.contains("dark")) {
                c.style.boxShadow = "1px 4px 15px rgba(255, 255, 255, .3)"
            }
            else {
                c.style.boxShadow = "1px 4px 15px rgba(0, 0, 0, .1)"
            }
            // c.style.boxShadow = "1px 4px 15px  rgba(0, 0, 0, .1)"
            c.style.transform = "translateY(-7px)"
        }, 90)
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
            if (document.body.classList.contains("dark")) {
                c.style.boxShadow = "1px 4px 15px rgba(255, 255, 255, .3)"
            }
            else {
                c.style.boxShadow = "1px 4px 15px rgba(0, 0, 0, .1)"
            } c.style.transform = "translateY(-7px)"
        }, 90)
    }
    else {
        setTimeout(() => {
            window.location = "reg.html"
        }, 100)
    }
}

///////////////////////////////////////////////////////////////////////////// add to cart and fav///////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////decreas and increas///////////////////////////////////////////////////////////
let plus = document.querySelectorAll(".fa-plus")
let minus = document.querySelectorAll(".fa-minus")
function pls(i, id, clicked) {
    let num = i.nextElementSibling
    let n = parseInt(num.innerHTML)
    n++
    num.innerHTML = n
    let item = details.find(el => el.id === id);
    let price = item.price;
    let p = parseInt(price.replace("$", ""))
    let total = n * p
    let span = i.closest(".showProduct").querySelector(".nameandprice p:nth-child(2) span")
    span.innerHTML = "$" + total
    let numcarts = document.querySelector("#numOfAdded")
    numcarts.innerHTML++

}
function mins(i, id, clicked) {
    let span = i.previousElementSibling
    let n = parseInt(span.innerHTML)
    if (n > 1) {
        n--
        span.innerHTML = n
        let item = details.find(el => el.id === id);
        let price = item.price;
        let p = parseInt(price.replace("$", ""))
        let total = n * p
        let priceSpan = i.closest(".showProduct").querySelector(".nameandprice p:nth-child(2) span")
        priceSpan.innerHTML = "$" + total
        let numcarts = document.querySelector("#numOfAdded")
        numcarts.innerHTML--
        let div = document.querySelector(".noitems")
        if (num.innerHTML.trim() === "0") {
            div.style.display = "block"
        }
        else {
            div.style.display = "none"
        }
    }
    else {
        i.closest(".showProduct").remove()
        let numcarts = document.querySelector("#numOfAdded")
        numcarts.innerHTML--
        let div = document.querySelector(".noitems")
        if (num.innerHTML.trim() === "0") {
            div.style.display = "block"
        }
        else {
            div.style.display = "none"
        }
        let item = details.find(el => el.id === id);
        item.clicked = false;
        let button = document.querySelector(`.addto[data-id='${id}']`);
        button.style.width = "120px"
        button.style.background = "#7743DB"
        button.style.color = "#ffffff"
        button.innerHTML = "Add To Cart "
        button.style.border = "none"
    }
}
/////////////////////////////////////////////////////////////////////////////decreas and increas///////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////mood and scroll///////////////////////////////////////////////////////////
let h = document.querySelector(".header")
let logoimg = document.querySelector(".logoimg")
let mood = document.querySelector(".mood")
let arrow = document.querySelector(".arrow")
let name = document.querySelector("#username")
let c = document.querySelectorAll(".c")
let btn = document.querySelectorAll("button")

mood.addEventListener('click', function (e) {
    e.preventDefault()
    let div = document.querySelector(".carts_products")
    let divin = document.querySelectorAll(".showProduct")
    let icn = document.querySelectorAll(".icn")
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        logoimg.src = "img/logodark.webp"
        h.style.background = "#343230"
        div.style.background = "#222"
        div.style.boxShadow = "0 2px 20px rgba(255, 255, 255, .3)"
        div.style.color = "white"
        divin.forEach((b) => {
            b.style.transition = "all 0.5s ease-in-out"
            b.style.background = "#343230"
            // b.style.boxShadow="0 2px 20px rgba(255, 255, 255, .2)"
        })
        icn.forEach((i) => {
            i.style.boxShadow = "0 2px 20px rgba(255, 255, 255, .2)"
        })
        h.style.boxShadow = "0 2px 20px rgba(255, 255, 255, .4)"
        name.style.color = "white"
        arrow.style.boxShadow = "0 2px 15px rgba(255, 255, 255, .5)"
        mood.style.boxShadow = "0 2px 15px rgba(255, 255, 255, .5)"
        c.forEach((el) => {
            el.style.boxShadow = "1px 4px 15px rgba(255, 255, 255, .3)"
        })
        btn.forEach((b) => {
            b.style.boxShadow = "0 2px 10px rgba(255, 255, 255, .3)"
        })
    }
    else {
        logoimg.src = "img/images.png"
        h.style.background = "#FCF5EF"
        div.style.background = "#fff"
        div.style.color = "black"
        div.style.boxShadow = "0 2px 10px rgba(0, 0, 0, .1)"
        divin.forEach((b) => {
            b.style.transition = "all 0.5s ease-in-out"
            b.style.background = "#eee"
            // b.style.boxShadow="1px 2px 10px rgba(0, 0, 0, .1)"
        })
        icn.forEach((i) => {
            i.style.boxShadow = " 1px 4px 8px rgba(0, 0, 0, 0.2)"
        })
        h.style.boxShadow = "1 2px 10px rgba(0, 0, 0, .1)"
        name.style.color = "black"
        arrow.style.boxShadow = "0 2px 10px rgba(0, 0, 0, .1)"
        mood.style.boxShadow = "0 2px 10px rgba(0, 0, 0, .1)"
        c.forEach((el) => {
            el.style.boxShadow = "1px 4px 15px rgba(0, 0, 0, .1)"
        })
        btn.forEach((b) => {
            b.style.boxShadow = "0 2px 10px rgba(0, 0, 0, .1)"
        })
    }
    mood.classList.toggle("fa-sun")
    mood.classList.toggle("fa-moon")
})
arrow.addEventListener('click', function (e) {
    e.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
window.addEventListener('scroll', function () {
    if (window.scrollY >= 300) {
        arrow.style.display = "block"
        arrow.style.animation = "fadeIn 1s"
        arrow.style.transition = "all 4s ease-in-out"
    }
    else {
        arrow.style.display = "none"
        arrow.style.transition = "all 4s ease-in-out"
    }
})


/////////////////////////////////////////////////////////////////////////////mood and scroll///////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////logout////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////logout////////////////////////////////////////////////////////////////