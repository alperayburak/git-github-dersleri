function bol() {
    const sayi1 = document.getElementById('sayi1');
    const sayi2 = document.getElementById('sayi2');
    const sonuc = document.getElementById('sonuc');
    const sayi2Value = Number(sayi2.value);
    if (sayi2Value !== 0) {
        sonuc.innerHTML = Number(sayi1.value) / sayi2Value;
    } else {
        sonuc.innerHTML = 'Bölen 0 olamaz!';
    }
}

