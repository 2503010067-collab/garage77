const riyyanDataMobil = [
    {
        id: "corolla95",
        nama: "Toyota Great Corolla 1.6 SEG 1995",
        merek: "Toyota",
        tahun: 1995,
        transmisi: "Manual",
        harga: 68000000,
        hargaTeks: "Rp 68.000.000 (Cash Nego)",
        km: "185.000 km",
        plat: "Z (Tasikmalaya) - Pajak Hidup",
        status: "Ready Stock",
        foto: {
            eksterior: "https://unsplash.com",
            interior: "https://unsplash.com",
            mesin: "https://unsplash.com",
            minus: "https://unsplash.com"
        },
        inspeksi: "Mesin 4A-FE kering halus, AC dingin menggigil, kaki-kaki senyap baru peremajaan, bebas tabrak depan belakang.",
        minusInfo: "Baret halus pemakaian wajar di bumper pojok kiri bawah, cat kap mesin sudah pernah siram ulang rapi.",
        dokumen: [
            "BPKB Asli Ready di Showroom",
            "STNK & Pajak Tahunan Hidup (Plat Z Tasikmalaya)",
            "Faktur Pembelian Asli Tersimpan",
            "Nomor Rangka & Mesin Akur Sesuai Fisik"
        ]
    },
    {
        id: "swift08",
        nama: "Suzuki Swift ST 1.5 2008",
        merek: "Suzuki",
        tahun: 2008,
        transmisi: "Manual",
        harga: 87000000,
        hargaTeks: "Rp 87.000.000 (Cash Nego)",
        km: "132.000 km",
        plat: "D (Bandung) - Pajak Hidup",
        status: "Ready Stock",
        foto: {
            eksterior: "https://unsplash.com",
            interior: "https://unsplash.com",
            mesin: "https://unsplash.com",
            minus: "https://unsplash.com"
        },
        inspeksi: "Mesin M15A responsif irit BBM, kopling empuk, kelistrikan normal semua, kolong bebas karat dan bebas banjir.",
        minusInfo: "Karet wiper belakang sedikit getas dan velg kiri depan ada lecet tipis kena trotoar.",
        dokumen: [
            "BPKB Asli Ready di Showroom",
            "STNK Panjang & Kaleng Baru Diperpanjang",
            "Faktur & NIK Asli Lengkap",
            "Kunci Serep Tersedia"
        ]
    },
    {
        id: "hrvprestige",
        nama: "Honda HR-V 1.8 Prestige Sunroof 2016",
        merek: "Honda",
        tahun: 2016,
        transmisi: "Automatic",
        harga: 215000000,
        hargaTeks: "Rp 215.000.000 (Cash Nett/Nego Tipis)",
        km: "78.000 km",
        plat: "Z (Tasikmalaya) - Tangan Pertama",
        status: "Ready Stock",
        foto: {
            eksterior: "https://unsplash.com",
            interior: "https://unsplash.com",
            mesin: "https://unsplash.com",
            minus: "https://unsplash.com"
        },
        inspeksi: "Panoramic sunroof berfungsi lancar tanpa bocor, transmisi CVT halus responsif, jok kulit ori mulus, servis rutin bengkel resmi.",
        minusInfo: "Ban depan ketebalan 65% (masih sangat layak pakai), baret halus di handle pintu pengemudi.",
        dokumen: [
            "BPKB Tangan Pertama dari Baru",
            "STNK & Pajak Hidup Panjang",
            "Buku Servis & Manual Book Honda Ada",
            "Kunci Keyless 2 Set Lengkap"
        ]
    },
    {
        id: "civicfb",
        nama: "Honda Civic FB 2.0 AT 2013",
        merek: "Honda",
        tahun: 2013,
        transmisi: "Automatic",
        harga: 162000000,
        hargaTeks: "Rp 162.000.000 (Cash Nego)",
        km: "104.000 km",
        plat: "Z (Tasikmalaya) - Pajak Hidup",
        status: "Ready Stock",
        foto: {
            eksterior: "https://unsplash.com",
            interior: "https://unsplash.com",
            mesin: "https://unsplash.com",
            minus: "https://unsplash.com"
        },
        inspeksi: "Varian tertinggi 2.0L bertenaga, paddle shift normal, mesin R20A kering tanpa rembes, interior bersih bebas bau rokok.",
        minusInfo: "Spion lipat elektrik sebelah kiri kadang agak lambat menutup saat hujan deras.",
        dokumen: [
            "BPKB Asli Ready di Showroom",
            "STNK Hidup & Pajak Taat",
            "Faktur & Sertifikat NIK Lengkap",
            "Bebas Tabrak & Bebas Banjir 100%"
        ]
    },
    {
        id: "camryxv30",
        nama: "Toyota Camry 2.4 V XV30 2005",
        merek: "Toyota",
        tahun: 2005,
        transmisi: "Automatic",
        harga: 79000000,
        hargaTeks: "Rp 79.000.000 (Cash Nego)",
        km: "148.000 km",
        plat: "D (Bandung) - Pajak Hidup",
        status: "Ready Stock",
        foto: {
            eksterior: "https://unsplash.com",
            interior: "https://unsplash.com",
            mesin: "https://unsplash.com",
            minus: "https://unsplash.com"
        },
        inspeksi: "Kenyamanan sedan mewah, mesin 2AZ-FE halus bertenaga, matic responsif tidak jedug, AC dual zone dingin.",
        minusInfo: "Kerutan alami pada kulit jok pengemudi sesuai usia mobil, krey kaca belakang manual.",
        dokumen: [
            "BPKB Asli Ready di Showroom",
            "STNK & Pajak Tahunan Hidup",
            "Faktur Asli Tersimpan Rapi",
            "Surat Cek Fisik Samsat Ada"
        ]
    }
];

const riyyanNoWA = "6281990601056";

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("riyyan_menu_btn");
    const navList = document.getElementById("riyyan_nav_list");
    if (menuBtn && navList) {
        menuBtn.addEventListener("click", function () {
            navList.classList.toggle("riyyan_show_nav");
        });
    }

    const homeSearchForm = document.getElementById("riyyan_home_search_form");
    if (homeSearchForm) {
        homeSearchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const kataKunci = document.getElementById("riyyan_home_keyword").value;
            localStorage.setItem("riyyan_cari_mobil", kataKunci);
            window.location.href = "katalog.html";
        });
    }

    const katalogContainer = document.getElementById("riyyan_katalog_list");
    if (katalogContainer) {
        const inputCari = document.getElementById("riyyan_filter_nama");
        const filterMerek = document.getElementById("riyyan_filter_merek");
        const filterTransmisi = document.getElementById("riyyan_filter_transmisi");
        const filterHarga = document.getElementById("riyyan_filter_harga");

        const savedKeyword = localStorage.getItem("riyyan_cari_mobil");
        if (savedKeyword && inputCari) {
            inputCari.value = savedKeyword;
            localStorage.removeItem("riyyan_cari_mobil");
        }

        function renderKatalog() {
            const kw = inputCari ? inputCari.value.toLowerCase() : "";
            const mrk = filterMerek ? filterMerek.value : "semua";
            const trs = filterTransmisi ? filterTransmisi.value : "semua";
            const hrg = filterHarga ? parseInt(filterHarga.value) : 999999999;

            const hasil = riyyanDataMobil.filter(function (m) {
                const cocokNama = m.nama.toLowerCase().includes(kw) || m.tahun.toString().includes(kw);
                const cocokMerek = mrk === "semua" || m.merek === mrk;
                const cocokTransmisi = trs === "semua" || m.transmisi === trs;
                const cocokHarga = m.harga <= hrg;
                return cocokNama && cocokMerek && cocokTransmisi && cocokHarga;
            });

            if (hasil.length === 0) {
                katalogContainer.innerHTML = "<p>Unit mobil dengan kriteria tersebut tidak ditemukan. Silakan ubah filter pencarian.</p>";
                return;
            }

            katalogContainer.innerHTML = hasil.map(function (m) {
                return `
                <div class="riyyan_card">
                    <img src="${m.foto.eksterior}" alt="${m.nama}" class="riyyan_card_img">
                    <div class="riyyan_card_body">
                        <div>
                            <span class="riyyan_badge">${m.status}</span>
                            <h3 class="riyyan_card_title">${m.nama}</h3>
                            <p class="riyyan_meta">${m.transmisi} • ${m.km} • ${m.plat}</p>
                        </div>
                        <div>
                            <p class="riyyan_price">${m.hargaTeks}</p>
                            <button class="riyyan_btn" onclick="bukaDetailMobil('${m.id}')">Lihat Detail & Inspeksi</button>
                        </div>
                    </div>
                </div>
                `;
            }).join("");
        }

        renderKatalog();
        if (inputCari) inputCari.addEventListener("input", renderKatalog);
if (filterMerek) filterMerek.addEventListener("change", renderKatalog);
if (filterTransmisi) filterTransmisi.addEventListener("change", renderKatalog);
if (filterHarga) filterHarga.addEventListener("change", renderKatalog);
}
const detailWrap = document.getElementById("riyyan_detail_container");
if (detailWrap) {
const selectedId = localStorage.getItem("riyyan_detail_id") || "corolla95";
let mobil = riyyanDataMobil;
for (let i = 0; i < riyyanDataMobil.length; i++) {
if (riyyanDataMobil[i].id === selectedId) {
mobil = riyyanDataMobil[i];
break;
}
}
document.getElementById("riyyan_det_nama").innerText = mobil.nama;
document.getElementById("riyyan_det_meta").innerText = mobil.merek + " • Tahun " + mobil.tahun + " • " + mobil.transmisi + " • " + mobil.km;
document.getElementById("riyyan_det_harga").innerText = mobil.hargaTeks;
document.getElementById("riyyan_det_inspeksi").innerText = mobil.inspeksi;
document.getElementById("riyyan_det_minus").innerText = mobil.minusInfo;
const imgUtama = document.getElementById("riyyan_det_foto");
imgUtama.src = mobil.foto.eksterior;
const listDok = document.getElementById("riyyan_det_dokumen");
listDok.innerHTML = mobil.dokumen.map(function (d) {
return "✓ " + d + "";
}).join("");
const pesanWA = encodeURIComponent("Halo Garage77 Tasikmalaya, saya tertarik nego tunai unit " + mobil.nama + " (" + mobil.hargaTeks + "). Apakah unit masih tersedia?");
document.getElementById("riyyan_btn_nego_wa").href = "wa.me" + riyyanNoWA + "?text=" + pesanWA;
document.getElementById("riyyan_btn_to_booking").addEventListener("click", function () {
localStorage.setItem("riyyan_booking_unit", mobil.nama);
window.location.href = "booking.html";
});
const tabBtns = document.querySelectorAll(".riyyan_tab_btn");
tabBtns.forEach(function (btn) {
btn.addEventListener("click", function () {
tabBtns.forEach(function (b) {
b.classList.remove("riyyan_tab_aktif");
});
this.classList.add("riyyan_tab_aktif");
const jenis = this.getAttribute("data-foto");
imgUtama.src = mobil.foto[jenis];
});
});
}
const bookingForm = document.getElementById("riyyan_booking_form");
if (bookingForm) {
const selectUnit = document.getElementById("riyyan_book_unit");
const savedUnit = localStorage.getItem("riyyan_booking_unit");
if (savedUnit && selectUnit) {
selectUnit.value = savedUnit;
localStorage.removeItem("riyyan_booking_unit");
}
bookingForm.addEventListener("submit", function (e) {
e.preventDefault();
const nama = document.getElementById("riyyan_book_nama").value;
const unit = selectUnit.value;
const tgl = document.getElementById("riyyan_book_tanggal").value;
const jam = document.getElementById("riyyan_book_jam").value;
const inspektor = document.getElementById("riyyan_book_inspektor").value;
const teksWA = encodeURIComponent("Halo Garage77, saya " + nama + " ingin menjadwalkan Test Drive & Cek Unit:\n- Unit: " + unit + "\n- Tanggal: " + tgl + "\n- Jam: " + jam + " WIB\n- Keterangan: " + inspektor);
window.open("wa.me" + riyyanNoWA + "?text=" + teksWA, "_blank");
});
}
const jualForm = document.getElementById("riyyan_jual_form");
if (jualForm) {
jualForm.addEventListener("submit", function (e) {
e.preventDefault();
const pemilik = document.getElementById("riyyan_jual_nama").value;
const mobil = document.getElementById("riyyan_jual_mobil").value;
const kondisi = document.getElementById("riyyan_jual_kondisi").value;
const harga = document.getElementById("riyyan_jual_harga").value;
const tipe = document.getElementById("riyyan_jual_tipe").value;
const teksWA = encodeURIComponent("Halo Garage77, saya " + pemilik + " ingin menawarkan mobil (" + tipe + "):\n- Mobil & Tahun: " + mobil + "\n- Kondisi & Pajak: " + kondisi + "\n- Harga Harapan: Rp " + harga);
window.open("wa.me" + riyyanNoWA + "?text=" + teksWA, "_blank");
});
}
const faqBtns = document.querySelectorAll(".riyyan_faq_q");
faqBtns.forEach(function (btn) {
btn.addEventListener("click", function () {
const jawaban = this.nextElementSibling;
const terbuka = jawaban.style.display === "block";
jawaban.style.display = terbuka ? "none" : "block";
});
});
const contactForm = document.getElementById("riyyan_contact_form");
if (contactForm) {
contactForm.addEventListener("submit", function (e) {
e.preventDefault();
const nama = document.getElementById("riyyan_cnt_nama").value;
const notif = document.getElementById("riyyan_cnt_notif");
notif.style.display = "block";
notif.innerText = "Terima kasih " + nama + ", pesan Anda telah terkirim ke admin Garage77 (aldiuyehopat@gmail.com).";
contactForm.reset();
});
}
});
function bukaDetailMobil(idMobil) {
localStorage.setItem("riyyan_detail_id", idMobil);
window.location.href = "detail.html";
}