const kitap_form = document.getElementById("kitap_form");
const kitap_adi = document.getElementById("kitap_adi");
const kitap_drop = document.getElementById("kitap_drop");
const kitap_sayfa = document.getElementById("kitap_sayfa");
const kitap_yazar = document.getElementById("kitap_yazar");
const kitap_yayin = document.getElementById("kitap_yayin");
const kitap_basim = document.getElementById("kitap_basim");

var data_test;

kitap_form.addEventListener("submit", take_data);

async function take_data(e){
    e.preventDefault();

    let ktp_ad = kitap_adi.value;
    let ktp_drop = kitap_drop.value;
    let ktp_sayfa = kitap_sayfa.value;
    let ktp_yazar = kitap_yazar.value;
    let ktp_basim = kitap_basim.value;
    let ktp_yayin = kitap_yayin.value;

    const server = await fetch('http://localhost:3000/kitaplar',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            kit_ad:ktp_ad,
            kit_drop:ktp_drop,
            kit_sayfa:ktp_sayfa,
            kit_yazari:ktp_yazar,
            kit_yayin:ktp_yayin,
            kit_basim:ktp_basim
        })
    });

    data_test = await server.json();

    // document.getElementById("demo").innerHTML = data_test;

    alert("data is push !");
}

const kitaplarTablo = document.getElementById('kitaplar_div');

		function kitaplariYazdir(kitaplar) {
			// tabloyu temizleyin
			kitaplarTablo.innerHTML = '';

			// kitaplar dizisindeki her kitap için bir satır oluşturun ve tabloya ekleyin
			kitaplar.forEach(kitap => {
				const card = document.createElement('div');
                card.classList.add("grid", "grid-cols-6", "gap-8", "text-center", "border", "p-2");

				const kitapAdi = document.createElement('h1');
				kitapAdi.textContent = kitap.kit_ad;
				card.appendChild(kitapAdi);

				const kitapTuru = document.createElement('h2');
				kitapTuru.textContent = kitap.kit_drop;
				card.appendChild(kitapTuru);

				const sayfaSayisi = document.createElement('h2');
				sayfaSayisi.textContent = kitap.kit_sayfa;
				card.appendChild(sayfaSayisi);

				const yazarAdi = document.createElement('h2');
				yazarAdi.textContent = kitap.kit_yazari;
				card.appendChild(yazarAdi);

				const yayinevi = document.createElement('h2');
				yayinevi.textContent = kitap.kit_yayin;
				card.appendChild(yayinevi);

				const baskiYili = document.createElement('h2');
				baskiYili.textContent = kitap.kit_basim;
				card.appendChild(baskiYili);

				kitaplarTablo.appendChild(card);
			});
		}

		// sayfa yüklendiğinde ve herhangi bir kitap eklendiğinde kitap listesini yeniden oluşturun
		window.addEventListener('load', async () => {
			const response = await fetch('http://localhost:3000/kitaplar');
			const kitaplar = await response.json();
			kitaplariYazdir(kitaplar);
		});

// const kitaplarTablo = document.getElementById('kitaplar-tablo');

// 		function kitaplariYazdir(kitaplar) {
// 			// tabloyu temizleyin
// 			kitaplarTablo.innerHTML = '';

// 			// kitaplar dizisindeki her kitap için bir satır oluşturun ve tabloya ekleyin
// 			kitaplar.forEach(kitap => {
// 				const satir = document.createElement('tr');

// 				const kitapAdi = document.createElement('td');
// 				kitapAdi.textContent = kitap.kit_ad;
// 				satir.appendChild(kitapAdi);

// 				const kitapTuru = document.createElement('td');
// 				kitapTuru.textContent = kitap.kit_drop;
// 				satir.appendChild(kitapTuru);

// 				const sayfaSayisi = document.createElement('td');
// 				sayfaSayisi.textContent = kitap.kit_sayfa;
// 				satir.appendChild(sayfaSayisi);

// 				const yazarAdi = document.createElement('td');
// 				yazarAdi.textContent = kitap.kit_yazari;
// 				satir.appendChild(yazarAdi);

// 				const yayinevi = document.createElement('td');
// 				yayinevi.textContent = kitap.kit_yayin;
// 				satir.appendChild(yayinevi);

// 				const baskiYili = document.createElement('td');
// 				baskiYili.textContent = kitap.kit_basim;
// 				satir.appendChild(baskiYili);

// 				kitaplarTablo.appendChild(satir);
// 			});
// 		}

// 		// sayfa yüklendiğinde ve herhangi bir kitap eklendiğinde kitap listesini yeniden oluşturun
// 		window.addEventListener('load', async () => {
// 			const response = await fetch('http://localhost:3000/kitaplar');
// 			const kitaplar = await response.json();
// 			kitaplariYazdir(kitaplar);
// 		});
