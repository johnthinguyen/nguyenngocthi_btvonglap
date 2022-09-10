/**bai1 */
/**
 * n = 10000
snd = 0
tong = 0
tong <= 10000
neu tong nho hon 10000 thi tiep tuc tang snd
snd ++
tong = tong + snd

 */
var sND = 0;
var tong = 0;
while (tong <= 10000) {
    tong += sND;
    sND++;
}
document.getElementById('ketQua1').innerHTML = 'so nguyen duong nho nhat la: ' + sND;

//bai 2
document.getElementById('btnTinhTong').onclick = function () {
    var soX = document.getElementById('nhapSoX').value * 1;
    var soN = document.getElementById('nhapSoN').value * 1;

    var tinhTong = vongLap(soX, soN);
    document.getElementById('ketQua2').innerHTML = tinhTong;
}
//function

function vongLap(a, b) {
    var count = 1;
    var sum = 0;
    while (count <= b) {
        sum += Math.pow(a, count);
        count++;
    }
    return sum;
}
//bai 3
document.querySelector('#btnTinhGiaiThua').onclick = function () {
    var nhapSo = document.getElementById('nhapSo').value * 1;
    var demSo = 1;
    var giaiThua = 1;
    while (demSo <= nhapSo) {
        giaiThua *= demSo;
        demSo++;
    }
    document.getElementById('thongBao3').innerHTML = giaiThua;
}
//bai 4
document.getElementById('btnTaoDiv').onclick = function () {
    var inPut = document.getElementById('inPut').value * 1;
    var taoDiv = '';
    var demDiv = 1;
    while (demDiv <= inPut) {
        if (demDiv % 2 == 0) {
            taoDiv += '<p class="bg-danger">Hello Mentor Dep Troai</p>';
        } else if (demDiv % 2 !== 0) {
            taoDiv += '<p class="bg-primary">Hello Mentor Dep Troai</p>';
        }
        demDiv++;
    }
    document.getElementById('taoDiv').innerHTML = taoDiv;
}