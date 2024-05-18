
const carts = [
    {
        "idx": 1,
        "id": 10,
        "title": "Men1",
        "gender": "men",
        "img": "./images/m1.jpeg",
        "price": 190,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms1.jpeg",
        "discount": 50
    },
    {
        "idx": 2,
        "id": 20,
        "title": "Men2",
        "gender": "men",
        "img": "./images/m2.jpeg",
        "price": 10,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms2.jpeg",
        "discount": 10
    },
    {
        "idx": 3,
        "id": 30,
        "title": "Men3",
        "gender": "men",
        "img": "./images/m3.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms3.jpeg",
        "discount": 20
    },
    {
        "idx": 4,
        "id": 40,
        "title": "Men4",
        "gender": "men",
        "img": "./images/m4.jpeg",
        "price": 490,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms4.jpeg",
        "discount": 90
    },
    {
        "idx": 5,
        "id": 50,
        "title": "Men1",
        "gender": "men",
        "img": "./images/m5.jpeg",
        "price": 490,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms5.jpeg",
        "discount": 60
    },
    {
        "idx": 6,
        "id": 60,
        "title": "Women1",
        "gender": "women",
        "img": "./images/w1.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws1.jpeg",
        "discount": 35
    },
    {
        "idx": 7,
        "id": 70,
        "title": "Women2",
        "gender": "women",
        "img": "./images/w2.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws2.jpeg",
        "discount": 25
    },
    {
        "idx": 8,
        "id": 80,
        "title": "Women3",
        "gender": "women",
        "img": "./images/w3.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws3.jpeg",
        "discount": 15
    },
    {
        "idx": 9,
        "id": 90,
        "title": "Women4",
        "gender": "women",
        "img": "./images/w4.jpeg",
        "price": 170,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws4.jpeg",
        "discount": 95
    },
    {
        "idx": 10,
        "id": 100,
        "title": "Women5",
        "gender": "women",
        "img": "./images/w5.jpeg",
        "price": 150,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws5.jpeg",
        "discount": 35
    },
    {
        "idx": 11,
        "id": 110,
        "title": "Child1",
        "gender": "child",
        "img": "./images/c1.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs1.jpeg",
        "discount": 35
    },
    {
        "idx": 12,
        "id": 120,
        "title": "Child2",
        "gender": "child",
        "img": "./images/c2.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs2.jpeg",
        "discount": 5
    },
    {
        "idx": 13,
        "id": 130,
        "title": "Child3",
        "gender": "child",
        "img": "./images/c3.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs3.jpeg",
        "discount": 65
    },
    {
        "idx": 14,
        "id": 140,
        "title": "Child4",
        "gender": "child",
        "img": "./images/c4.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs4.jpeg",
        "discount": 35
    },
    {
        "idx": 15,
        "id": 150,
        "title": "Child5",
        "gender": "child",
        "img": "./images/c5.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs5.jpeg",
        "discount": 9
    },
    {
        "idx": 16,
        "id": 160,
        "title": "Tv 1",
        "gender": "tv",
        "img": "./images/t1.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts1.jpeg",
        "discount": 99
    },
    {
        "idx": 17,
        "id": 170,
        "title": "Tv 2",
        "gender": "tv",
        "img": "./images/t2.jpeg",
        "price": 1200,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts2.jpeg",
        "discount": 59
    },
    {
        "idx": 18,
        "id": 180,
        "title": "Tv 3",
        "gender": "tv",
        "img": "./images/t3.jpeg",
        "price": 10000,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts3.jpeg",
        "discount": 39
    },
    {
        "idx": 19,
        "id": 190,
        "title": "Tv 4",
        "gender": "tv",
        "img": "./images/t4.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts4.jpeg",
        "discount": 99
    },
    {
        "idx": 20,
        "id": 200,
        "title": "Tv 5",
        "gender": "tv",
        "img": "./images/t5.jpeg",
        "price": 19000,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts5.jpeg",
        "discount": 29
    },
    {
        "idx": 21,
        "id": 210,
        "title": "Mobile1",
        "gender": "mobile",
        "img": "./images/m1.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms1.jpeg",
        "discount": 39
    },
    {
        "idx": 22,
        "id": 220,
        "title": "Mobile2",
        "gender": "mobile",
        "img": "./images/m2.jpeg",
        "price": 120,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms2.jpeg",
        "discount": 19
    },
    {
        "idx": 23,
        "id": 230,
        "title": "Mobile3",
        "gender": "mobile",
        "img": "./images/m3.jpeg",
        "price": 1080,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms3.jpeg",
        "discount": 38
    },
    {
        "idx": 24,
        "id": 240,
        "title": "Mobile4",
        "gender": "mobile",
        "img": "./images/m4.jpeg",
        "price": 3100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms4.jpeg",
        "discount": 69
    },
    {
        "idx": 25,
        "id": 250,
        "title": "Mobile5",
        "gender": "mobile",
        "img": "./images/m5.jpeg",
        "price": 1050,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms5.jpeg",
        "discount": 59
    },
    {
        "idx": 26,
        "id": 260,
        "title": "HeadPhone1",
        "gender": "head",
        "img": "./images/h1.jpeg",
        "price": 2800,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs1.jpeg",
        "discount": 89
    },
    {
        "idx": 27,
        "id": 270,
        "title": "HeadPhone2",
        "gender": "head",
        "img": "./images/h2.jpeg",
        "price": 3800,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs2.jpeg",
        "discount": 89
    },
    {
        "idx": 28,
        "id": 280,
        "title": "HeadPhone3",
        "gender": "head",
        "img": "./images/h3.jpeg",
        "price": 4800,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs3.jpeg",
        "discount": 8
    },
    {
        "idx": 29,
        "id": 290,
        "title": "HeadPhone4",
        "gender": "head",
        "img": "./images/h4.jpeg",
        "price": 5800,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs4.jpeg",
        "discount": 89
    },
    {
        "idx": 30,
        "id": 300,
        "title": "HeadPhone5",
        "gender": "head",
        "img": "./images/h5.jpeg",
        "price": 200,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs5.jpeg",
        "discount": 90
    },
    {
        "idx": 31,
        "id": 310,
        "title": "Laptop1",
        "gender": "laptop",
        "img": "./images/l1.jpeg",
        "price": 1990,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls1.jpeg",
        "discount": 9
    },
    {
        "idx": 32,
        "id": 320,
        "title": "Laptop2",
        "gender": "laptop",
        "img": "./images/l2.jpeg",
        "price": 19990,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls2.jpeg",
        "discount": 29
    },
    {
        "idx": 33,
        "id": 330,
        "title": "Laptop3",
        "gender": "laptop",
        "img": "./images/l3.jpeg",
        "price": 198990,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls3.jpeg",
        "discount": 99
    },
    {
        "idx": 34,
        "id": 340,
        "title": "Laptop4",
        "gender": "laptop",
        "img": "./images/l4.jpeg",
        "price": 190990,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls4.jpeg",
        "discount": 9
    },
    {
        "idx": 35,
        "id": 350,
        "title": "Laptop5",
        "gender": "laptop",
        "img": "./images/l5.jpeg",
        "price": 194590,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls5.jpeg",
        "discount": 89
    }
]
var saleproduct = [
    {
        "idx": 111,
        "id": 1110,
        "title": "Men1",
        "gender": "men",
        "img": "./images/m1.jpeg",
        "price": 190,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms1.jpeg",
        "discount": 50
    },
    {
        "idx": 112,
        "id": 1120,
        "title": "Men2",
        "gender": "men",
        "img": "./images/m2.jpeg",
        "price": 10,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms2.jpeg",
        "discount": 10
    },
    {
        "idx": 113,
        "id": 1130,
        "title": "Women2",
        "gender": "women",
        "img": "./images/w2.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws2.jpeg",
        "discount": 25
    },
    {
        "idx": 114,
        "id": 1140,
        "title": "Women3",
        "gender": "women",
        "img": "./images/w3.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws3.jpeg",
        "discount": 15
    },

    {
        "idx": 115,
        "id": 1150,
        "title": "Child2",
        "gender": "child",
        "img": "./images/c2.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs2.jpeg",
        "discount": 5
    },
    {
        "idx": 116,
        "id": 1160,
        "title": "Child3",
        "gender": "child",
        "img": "./images/c3.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs3.jpeg",
        "discount": 65
    },
    {
        "idx": 117,
        "id": 1170,
        "title": "Tv 4",
        "gender": "tv",
        "img": "./images/t4.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts4.jpeg",
        "discount": 99
    },
    {
        "idx": 118,
        "id": 1180,
        "title": "Tv 5",
        "gender": "tv",
        "img": "./images/t5.jpeg",
        "price": 19000,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts5.jpeg",
        "discount": 29
    },
    {
        "idx": 119,
        "id": 1190,
        "title": "Mobile3",
        "gender": "mobile",
        "img": "./images/m3.jpeg",
        "price": 1080,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms3.jpeg",
        "discount": 38
    },
    {
        "idx": 120,
        "id": 1120,
        "title": "Mobile4",
        "gender": "mobile",
        "img": "./images/m4.jpeg",
        "price": 3100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms4.jpeg",
        "discount": 69
    },
    {
        "idx": 121,
        "id": 1210,
        "title": "HeadPhone1",
        "gender": "head",
        "img": "./images/h1.jpeg",
        "price": 2800,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs1.jpeg",
        "discount": 89
    },
    {
        "idx": 122,
        "id": 1220,
        "title": "HeadPhone2",
        "gender": "head",
        "img": "./images/h2.jpeg",
        "price": 3800,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs2.jpeg",
        "discount": 89
    },

    {
        "idx": 123,
        "id": 1230,
        "title": "Laptop2",
        "gender": "laptop",
        "img": "./images/l2.jpeg",
        "price": 19990,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls2.jpeg",
        "discount": 29
    },
    {
        "idx": 124,
        "id": 1240,
        "title": "Laptop3",
        "gender": "laptop",
        "img": "./images/l3.jpeg",
        "price": 198990,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls3.jpeg",
        "discount": 99
    },
]
var popularproduct =[
    {
        "idx": 1110,
        "id": 11110,
        "title": "Men1",
        "gender": "men",
        "img": "./images/m4.jpeg",
        "price": 190,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms1.jpeg",
        "discount": 50
    },
    {
        "idx": 1112,
        "id": 11120,
        "title": "Men2",
        "gender": "men",
        "img": "./images/m5.jpeg",
        "price": 10,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms2.jpeg",
        "discount": 10
    },
    {
        "idx": 1113,
        "id": 11130,
        "title": "Women2",
        "gender": "women",
        "img": "./images/w5.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws2.jpeg",
        "discount": 25
    },
    {
        "idx": 1114,
        "id": 11140,
        "title": "Women3",
        "gender": "women",
        "img": "./images/w4.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ws3.jpeg",
        "discount": 15
    },

    {
        "idx": 1115,
        "id": 11150,
        "title": "Child2",
        "gender": "child",
        "img": "./images/c5.jpeg",
        "price": 100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs2.jpeg",
        "discount": 5
    },
    {
        "idx": 1116,
        "id": 11160,
        "title": "Child3",
        "gender": "child",
        "img": "./images/c1.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/cs3.jpeg",
        "discount": 65
    },
    {
        "idx": 1117,
        "id": 11170,
        "title": "Tv 4",
        "gender": "tv",
        "img": "./images/t3.jpeg",
        "price": 1900,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts4.jpeg",
        "discount": 99
    },
    {
        "idx": 1118,
        "id": 11180,
        "title": "Tv 5",
        "gender": "tv",
        "img": "./images/t1.jpeg",
        "price": 19000,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ts5.jpeg",
        "discount": 29
    },
    {
        "idx": 1119,
        "id": 11190,
        "title": "Mobile3",
        "gender": "mobile",
        "img": "./images/m1.jpeg",
        "price": 1080,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms3.jpeg",
        "discount": 38
    },
    {
        "idx": 1120,
        "id": 11120,
        "title": "Mobile4",
        "gender": "mobile",
        "img": "./images/m1.jpeg",
        "price": 3100,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ms4.jpeg",
        "discount": 69
    },
    {
        "idx": 1121,
        "id": 11210,
        "title": "HeadPhone1",
        "gender": "head",
        "img": "./images/h2.jpeg",
        "price": 2800,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs1.jpeg",
        "discount": 89
    },
    {
        "idx": 1122,
        "id": 11220,
        "title": "HeadPhone2",
        "gender": "head",
        "img": "./images/h4.jpeg",
        "price": 3800,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/hs2.jpeg",
        "discount": 89
    },

    {
        "idx": 1123,
        "id": 11230,
        "title": "Laptop2",
        "gender": "laptop",
        "img": "./images/l1.jpeg",
        "price": 19990,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls2.jpeg",
        "discount": 29
    },
    {
        "idx": 1124,
        "id": 11240,
        "title": "Laptop3",
        "gender": "laptop",
        "img": "./images/l1.jpeg",
        "price": 198990,
        "dec": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "like": 0,
        "sideimg": "./images/ls3.jpeg",
        "discount": 99
    },
]
console.log(carts);
var th = 0
var hreadmorebtn = document.getElementById("hreadmorebtn")
hreadmorebtn.addEventListener("click",()=>{
    if(th===0){

        var hpopen = document.getElementById("hpopen").innerText="features that set new standards in the smartphone industry. One of the most notable advancements is the display technology."
        hreadmorebtn.innerText="ReadLess"
        th=1
    }
    else{
        var hpopen = document.getElementById("hpopen").innerText=""
        hreadmorebtn.innerText="ReadMore"
        th=0
    }
})


// Set the date we're counting down to
var countDownDate = new Date("May 31, 2024 15:37:25").getTime();

// Update the count down every 1 second
var countdownFunction = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements with id
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "SALE ENDED";
        document.getElementById("countdown").style.fontSize = "34"+px;
        document.getElementById("countdown").style.fontWeight = "750"+px;
        document.querySelector("#saleproduct").innerHTML = ""; 

    }
}, 1000);

var categoriessec = document.getElementById("categoriessec")
var ty = 0
var equl = document.getElementById("equl")
equl.addEventListener("click",()=>{
    if (ty===0){

        categoriessec.style.display="flex"
        ty=1
    }
    else{
        
        categoriessec.style.display="none"
        ty=0
    }
})


function displayProductSale(){
    var clu = "";
    saleproduct.forEach(item=>{
        clu+=`
        <div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[14rem] bg-zinc-200 rounded-xl"><img src="${item.img}" /></div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${item.title}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    
                    <h4 class="font-semibold mt-2">Rs. ${item.price}</h4>
                </div>
                <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                        class="ri-add-line"></i></button>
            </div><br>
            <button style="font-weight="750" class="w-40 h-10 rounded-full shader text-yellow-600">Check</button>
        </div>
    </div>
        `
    })
    var baaap = document.querySelector(".saleallproducts").innerHTML=clu;
}
function displayProductPopular(){
    var clutt = "";
    saleproduct.forEach(items=>{
        clutt+=`
        <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${items.img}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${items.title}</h1>
           
            <h4 class="mt-3 font-semibold text-zinc-500">Rs. ${items.price}</h4>
        </div>
    </div>
        `
    })
      document.querySelector("#bapp").innerHTML=clutt;
}








displayProductPopular()
displayProductSale()

