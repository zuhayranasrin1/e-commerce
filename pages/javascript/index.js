// VARIABLE (?)
    var nama= "Johan";
        nama= "Ali";

    console.log(nama);

    let nama= "Johan";
        nama= "Ali";

    console.log(nama);

    const nama= "Johan";
    // nama= "Ali";
    
    console.log(nama); 
    
    const nama= "Abu";
    delete nama;

    console.log(nama);

// tanya cg faiz/cg razman kenapa yg delete bawah ni tak jadi
    var objek ''{
        nama = "Johan";
        umur = "25";
};
    // delete objek.nama;
        objek.nama = null;
        console.log(objek.nama);
        console.log(objek.umur);

    var nama = "Zuhayra";
        nama = null;
    const namaKedua = "Nurin"

        console.log(nama);
        console.log(namaKedua);

// EXPRESSION : FUNCTION

    function tambah(a, b) {
        return a + b;
}
    const jumlah = tambah(2, 3);
        console.log(jumlah);

// EXPRESSION : COMPARISON
    let x=5;
    let y=30;
    const hasilPerbandingan=x > y;
        console.log(hasilPerbandingan);

// OPERATOR PENUGASAN (assignment)
    var x =6;
        x += 5;
        console.log(x);

    var x = 11;
        x = 5*11;
        // or x *= 5;
        console.log(x);

    var x = 11;
        x = 5 * x;
        console.log(x);

// Operator Perbandingan (COMPARISON)

    var nilaiPertama = 10; //number
    var nilaiKedua = "10"; //string(perkataan)
        console.log(nilaiPertama == nilaiKedua);
        console.log(nilaiPertama === nilaiKedua);

    var nilaiKetiga = 11;
        console.log(nilaiPertama != nilaiKetiga)
        console.log(42 === "42")

// Operator Logik
// Operator String

// interger + string
    var nama = "Zuhayra";
    var umur = 25;

    //" " ni untuk spacing
    var namaUmur = nama + " " + umur;
        console.log(namaUmur);

        //or

    var nama = "Zuhayra";
    var umur = 25;
    var namaUmur = nama + umur;
        console.log(namaUmur);

// ---Operator Baru---
// Ternary -guna ? dan :
    let hour= 10;
    let timeNow= 5;
    
    let itsTime= hour < timeNow ? "yes its time to party" : "tak boleh party";
        console.log(itsTime);

// nullish coalescing operator - guna ??
    let user = null; //or just taip let user;
    let name = user ?? "Anonymous";
    console.log(name); //strikethrough kat name tu takde apa2 pun

// If-else
    const umur = 42;

    if (umur < 18){
        console.log("TAK BOLEH MASUK");
    } else if (umur >= 18 && umur <= 41) {
        console.log("BOLEH MASUK");
    // else if ni boleh guna utk range la
    } else {
        console.log("ANDA TERLALU TUA");
    }
    // else guna selain dari if dan else if tu

 //switch

    const umur = 25;
    switch (umur) {
        case 1:
            console.log("umur 1");
        break;
        case 18:
            console.log("umur 18");
        break;
        case 78: 
            console.log("umur 78");
        break;
        default:
            console.log("umur lain");
        break;
    }

// For-loop
    for (var x = 0; x< 20; x++) {
        console.log(x);
    }
    
    for (var x = 0; x <10; x--) {
        console.log(x);
    } //guna ctrl+alt+m to stop code

    for (let i=10; i<Array; i--) {
        console.log(i);
    } //ni tak jadi, tanya fitry

    for (let i=0; i > 5; i--){
        console.log(i);
    }
    
    for (var i=0; i <=5; i++) {
        console.log(i);
    }

    for (var i=0; i<10; i++) {
        console.log(i++);
    }

    for (var i=0; i<3; ++i) {
        console.log(++i);
    }

    for (var i = 0; i<5; ++i) {
        console.log(++i);
    }

    var i= 0;
    console.log(i++);
    console.log(i++);
    i++;
    ++i;
    i++;
    console.log(++i);

// While-loop
    var abc = 5;

    while (abc <= 10) {
        console.log(abc);
        ++abc;
    }

    while (var abc = 5; abc <= 10; ++abc) {
        console.log(abc);
    } // tanya jismi, while mmg takleh letak var kat dlm eh? tapi for boleh plak
    
    //beza for & while
    // for loop - wajib ada ++abc
    // for loop guna utk kelauran nilai dlm sesuatu array lebih. orderly la. ada terminating dia selepas sekian2.

//Do-while loop
    var abc = 0;

    do {
        console.log(abc);
        abc++;
    } while (abc < 20)
    // tanya fitry, var abc = 0 ni declaration. anything dlm {} is blok kod. pastu while(abc<20) ni is condition kan?
    // tanya bila je guna while & do-while loop

//break

    for (var x = 0; x < 20; x++) {
        console.log(x);
        if (x == 11){
            break;
        }
    }
    console.log("YAY DAH KELUAR");
// tanya jismi/fitry kegunaan console.log "yay dah keluar" ni mcm mana plak
//tanya fitry- perlu ke faham bila nk guna continue..break..ni? ke nanti next class akan faham?

for (var x = 0; x < 20; x++) {
    if (x == 11){
        continue;
    } 
}   console.log(x);
// guna continue utk skip the current iteration.dlm kes ni 11 tu la.
//console.log("YAY DAH KELUAR");

//Object
    var kereta= {
        nama:'kereta api',
        warna: 'merah',
        jenis:'keretapi laju',
        bunyi: function(){
            console.log("choo choo");
        }
    }
    console.log(kereta.nama);
    console.log(kereta.warna);
    console.log(kereta.jenis);
    kereta.bunyi();

    const keretaSaya = kereta.nama;
    console.log(keretaSaya);

//Array cth: var Array = ["A","B"]
    var haiwanKatZoo = ["beruang", "monyet","oyen","capybara","kuda","kambing"];
        console.log("haiwan ke 5" +" "+haiwanKatZoo[4]);
    
    haiwanKatZoo[4] = "ayam";
    console.log("Haiwan baru ke 5" + " " + haiwanKatZoo[4]);

    haiwanKatZoo.push("gajah");
    console.log("Last animal " + haiwanKatZoo[haiwanKatZoo.length - 1]);

//nak tahu ada berapa banyak haiwan dalam zoo, buat mcm bawah ni
    console.log(haiwanKatZoo.length);

//Date&time
    const tarikh = new Date();

    const tahun = tarikh.getFullYear();
    const bulan = tarikh.getMonth() + 1; // +v1 sebab kalau tak buat, output dia jadi bulan 6.
    const hari = tarikh.getDate();

    const jam = tarikh.getHours();
    const minit = tarikh.getMinutes();

    console.log(hari + "/" + bulan + "/" + tahun);
    console.log(jam + ":" + minit);

    console.log(tarikh.toDateString());
    console.log(tarikh.toLocaleString());

//REGEX -regular expression
    var teks = "Harini ini hujan lebat";
    //.test

    var teksCari = /hujan/;
    var hasil = teksCari.test(teks);
    console.log(hasil); // true
            //or
    //var teks = "Harini ini hujan lebat";

    var teksCari = /itu/;
    var hasil = teksCari.test(teks);
    console.log(hasil);

    //.match

    var hasilKedua = teks.match(teksCari);
    console.log(hasilKedua);

    // .replace

    var hasilKetiga = teks.replace(teksCari, "sangat");
    console.log(hasilKetiga);





