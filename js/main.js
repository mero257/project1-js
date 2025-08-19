let btns = document.querySelector("#btnss")
let info = document.querySelector("#info")
let userdata = document.querySelector("#username")
if (localStorage.getItem("firstname")) {
    btns.style.display = "none"
    info.style.display = "block"
    userdata.innerHTML = "Hello  " + localStorage.getItem("firstname")
}

let totalproducts = document.querySelector(".cards")
let details = [
    {
        id: 1,
        img: "img/حلق6.jpeg",
        title: "Silver stainless steel earrings",
        price: "$150",
        category: "Earrings"
    },
    {
        id: 2,
        img: "img/حلق2.jpeg",
        title: "Gold stainless steel earrings",
        price: "$150",
        category: "Earrings"
    },
    {
        id: 3,
        img: "img/سلسله2.jpeg",
        title: "Silver stainless steel necklace",
        price: "$200",
        category: "Necklace"
    },
    {
        id: 4,
        img: "img/سلسله1.jpeg",
        title: "Gold stainless steel necklace",
        price: "$300",
        category: "Necklace"
    },
    {
        id: 5,
        img: "img/img1s.jpeg",
        title: "Silver stainless steel ring",
        price: "$180",
        category: "Rings"
    },
    {
        id: 6,
        img: "img/images (2).jpeg",
        title: "Gold stainless steel bracelet",
        price: "$250",
        category: "Bracelet"
    },
    {
        id: 7,
        img: "img/imag2.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings"
    },
    {
        id: 8,
        img: "img/images (3).jpeg",
        title: "Gold stainless steel bracelet",
        price: "$250",
        category: "Bracelet"
    },
    {
        id: 9,
        img: "img/images.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings"
    },
    {
        id: 10,
        img: "img/سلسله4.jpeg",
        title: "Silver stainless steel necklace",
        price: "$200",
        category: "Necklace"
    },
    {
        id: 11,
        img: "img/حلق1.jpeg",
        title: "Gold stainless steel earrings",
        price: "$150",
        category: "Earrings"
    },
    {
        id: 12,
        img: "img/img1ans.jpeg",
        title: "Gold stainless steel bracelet",
        price: "$250",
        category: "Bracelet"
    },
    {
        id: 13,
        img: "img/img1.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings"
    },
    {
        id: 14,
        img: "img/جلق5.jpeg",
        title: "Crystal earrings",
        price: "$200",
        category: "Earrings"
    },
    {
        id: 15,
        img: "img/سلسله4.jpeg",
        title: "Silver stainless steel necklace",
        price: "$200",
        category: "Necklace"
    },
    {
        id: 16,
        img: "img/img3.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings"
    },
    {
        id: 17,
        img: "img/حلق3.jpeg",
        title: "Gold stainless steel earrings",
        price: "$150",
        category: "Earrings"
    },
    {
        id: 18,
        img: "img/img2ans.jpeg",
        title: "Gold stainless steel bracelet",
        price: "$250",
        category: "Bracelet"
    },
    {
        id: 19,
        img: "img/img2s.jpeg",
        title: "Silver stainless steel ring",
        price: "$180",
        category: "Rings"
    },
    {
        id: 20,
        img: "img/images (1).jpeg",
        title: "Gold bangles",
        price: "$600",
        category: "Bangles"
    },
    {
        id: 21,
        img: "img/حلق4.jpeg",
        title: "Gold stainless steel earrings",
        price: "$150",
        category: "Earrings"
    },
    {
        id: 22,
        img: "img/img3s.jpeg",
        title: "Silver stainless steel ring",
        price: "$180",
        category: "Rings"
    },
    {
        id: 23,
        img: "img/img4s.jpeg",
        title: "Silver stainless steel ring",
        price: "$180",
        category: "Rings"
    },
    {
        id: 24,
        img: "img/img4.jpeg",
        title: "Gold stainless steel ring",
        price: "$180",
        category: "Rings"
    },
]

function drawitems() {

    let x = details.map((item) => {
        return `
        <div class="card1 c">
                <div class="img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="details">
                    <h2>${item.title}</h2>
                    <p>price:${item.price}</p>
                    <p>category:${item.category}</p>
                    <div class="iplusbtn">
                        <i class="fas fa-heart love" onClick="addtofav(this,${item.id})"></i>
                        <button class="addto" onClick="add(this,${item.id})">add to cart</button>
                    </div>
                </div>
            </div>
        `
    })
    totalproducts.innerHTML = x.join("");
}
drawitems();
// let btn = document.querySelector(".addto")
// let love = document.querySelector(".love")
function add(button, id) {
    if (localStorage.getItem("email")) {
        button.style.width = "160px"
        button.style.background = " #C3ACD0"
        button.innerHTML = "Added ✔ "
    }
    else {
        setTimeout(() => {
            window.location = "reg.html"
        }, 100)
    }

    // عاوزه اغير حاجه لما يجي يضغط و يلاقي اني ضغطت قبل كده اصلا 
}
function addtofav(i, id) {
    if (localStorage.getItem("email")) {
        i.style.fontSize="23px"
        i.style.color="red"
    }
    else {
        setTimeout(() => {
            window.location = "reg.html"
        }, 100)
    }
}