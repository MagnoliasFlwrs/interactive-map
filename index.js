const kamenka = document.querySelector('.kamenka');
const dzerz = document.querySelector('.dzerz');
const adressBox = document.querySelector('.adress_box')


let map = L.map('map').setView([53.909440, 27.557797],11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let markers = L.layerGroup().addTo(map);

const dealersCenters = [
    {
        title: 'VOYAH на Каменногорской, 11',
        adress : 'Минск, Каменногорская, 11',
        time: '09:00-20:00 Пн-Сб, Вс: выходной',
        contacts: '+375 (44) 7500600',
        lat: 53.918572 ,
        long: 27.415641,

    },
    {
        title: 'VOYAH на пр-т Дзержинского, 134',
        adress : 'г. Минск, пр-т Дзержинского, 134',
        time: '09:00-20:00 Пн-Сб, Вс: выходной',
        contacts: '+375 (44) 7500600',
        lat: 53.843489 ,
        long: 27.466093,
    } ,
    {
        title: 'VOYAH на свислочской',
        adress : 'г. Минск, свислочская 9',
        time: '09:00-20:00 Пн-Сб, Вс: выходной',
        contacts: '+375 (44) 7500600',
        lat: 53.843489 ,
        long: 27.636093,
    } ,

]

function renderDefaultDealers() {
    adressBox.innerHTML='';
    dealersCenters.forEach((elem) => {
        renderHtmlElem({...elem })
    })
}

document.addEventListener('DOMContentLoaded', renderDefaultDealers)

function renderHtmlElem ({title , adress , time , contacts , lat , long }) {
    const adressInner = document.createElement('li');
    adressInner.dataset.lat=lat;
    adressInner.dataset.long=long;
    adressInner.classList.add('adress');

    const dealerTitle = document.createElement('h3');
    dealerTitle.innerHTML = title;

    const adressInfo = document.createElement('div')
    adressInfo.classList.add('adress_info');
    const adressInfoImg = document.createElement('img');
    adressInfoImg.src = 'https://voyah.by/wp-content/uploads/2023/06/icons8-маркер-16.png';
    const adressText = document.createElement('p');
    adressText.innerHTML = adress;
    adressInfo.append(adressInfoImg , adressText);

    const adressContacts = document.createElement('div')
    adressContacts.classList.add('adress_info');
    const adressContactsImg = document.createElement('img');
    adressContactsImg.src = 'https://voyah.by/wp-content/uploads/2023/06/icons8-телефон-50.png';
    const contactText = document.createElement('p');
    contactText.innerHTML = contacts;
    adressContacts.append(adressContactsImg , contactText)

    const adressTime = document.createElement('div')
    adressTime.classList.add('adress_info');
    const timeImg = document.createElement('img');
    timeImg.src = 'https://voyah.by/wp-content/uploads/2023/06/icons8-часы-24.png';
    const timeText = document.createElement('p');
    timeText.innerHTML = time;
    adressTime.append(timeImg , timeText)


    adressInner.append(dealerTitle , adressInfo , adressContacts , adressTime);

    let marker = L.marker([lat, long]).addTo(markers);
    markers.addLayer(marker);

    adressInner.addEventListener('click' , () =>{
        map.flyTo([lat, long], 15);
        marker.bindPopup(adress).openPopup();
    })

    adressBox.appendChild(adressInner)
}



let input = document.getElementById("inputSearch");

function search() {
    console.log(markers)
    markers.clearLayers();
    let filter = input.value.toUpperCase();
    if (filter) {
        let newArr = dealersCenters.filter(el => el.adress.toUpperCase().includes(filter));
        adressBox.innerHTML='';
        newArr.forEach(el => {
            renderHtmlElem({...el})
        if(newArr.length === 1 ) {
            console.log(newArr[0])
            console.log(newArr[0].lat)
            console.log(newArr[0].long)
            map.flyTo([newArr[0].lat,newArr[0].long] , 15)
        }
    }) 
    } else {
        map.flyTo([53.909440, 27.557797],11);
        renderDefaultDealers();
    }
    
    
}
input.addEventListener('input', search);

// mobile


let mapMobile = L.map('map-mobile').setView([53.909440, 27.557797],11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapMobile);
let marker3 = L.marker([53.918572, 27.415641]).addTo(mapMobile);
let marker4 = L.marker([53.843489, 27.466093]).addTo(mapMobile);
marker3.bindPopup("Каменногорская, 11").openPopup();
marker4.bindPopup("пр-т Дзержинского, 134").openPopup();


// tab

const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab1Content = document.querySelector('.tab1-content');
const tab2Content = document.querySelector('.tab2-content')

tab1.addEventListener('click' , () => {
    tab1.classList.add('active-tab');
    tab1Content.classList.add('active')
    if (tab2.classList.contains('active-tab')) {
        tab2.classList.remove('active-tab');
        tab2Content.classList.remove('active')
    }
})
tab2.addEventListener('click' , () => {
    tab2.classList.add('active-tab');
    tab2Content.classList.add('active')
    if (tab1.classList.contains('active-tab')) {
        tab1.classList.remove('active-tab');
        tab1Content.classList.remove('active')
    }
})





// alert
const alertBtn = document.querySelector('.alert-btm')

alertBtn.addEventListener('click' , ()=>{
    Alert.render('dfkgbndjfgb')
})

function CustomAlert() {
    this.render = function(dialog) {
      let winW = window.innerWidth;
      let winH = window.innerHeight;
      let dialogoverlay = document.getElementById('dialogoverlay');
      let dialogbox = document.getElementById('dialogbox');
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH + "px";
      dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
      dialogbox.style.top = "100px";
      dialogbox.style.display = "block";
    //   document.getElementById('dialogboxhead').innerHTML = "Заголовок";
      document.getElementById('dialogboxbody').innerHTML = dialog;
      document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
    this.ok = function() {
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
    }
  }
  let Alert = new CustomAlert();





