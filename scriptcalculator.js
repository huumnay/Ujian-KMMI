const calculatorScreen = document.querySelector('.calculator-screen'); // inisialisasi untuk tampilan kalkulator

const updateScreen = (number) => {
    calculatorScreen.value = number;
}; // inisialisasi fungsi update screen yang digunakan untuk memperbarui layar pada saat button angka ditekan
const numbers = document.querySelectorAll('.number'); // inisialisasi variabel numbers yang memuat parameter bahwa didalamnya hanya bisa diisi oleh tipe data number

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        updateScreen(event.target.value);
    });
}); // fungsi yang digunakan untuk memanggil number pada saat button di klik

let prevNumber = ''; // insialisasi variabel prevNumber yang digunakan untuk menyimpan angka yang sudah di klik sebelumnya
let calculationOperator = ''; // inisialisasi variabel calculationOperator yang digunakan untuk menyimpan operasi kalkulasi
let currentNumber = '0'; // inisialisasi variabel currentNumber yang digunakan untuk menyimpan angka setelah proses kalkulasi maupun yang pertama ditampilkan saat running program

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}; // inisialisasi fungsi inputNumber yang digunakan untuk menyimpan angka kedalam variabel currentNumber
// statement if yang kondisinya jika currentNumber bernilai 0 maka tidak ada angka yang ditambahkan hasilnya tetap 0, sedangkan jika ada yang ditambahkan akan masuk ke statement else yang berarti menambahkan angka yang sudah ditekan

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
}); // inisialisasi fungsi yang digunakan untuk memanggil variabel inputNumber berdasarkan button target yang sudah ditekan dan memanggil fungsi updateScreen yang digunakan untuk memperbarui tampilan pada layar dan menampilkan angka yang sudah disimpan pada currentNumber 


const operators = document.querySelectorAll('.operator'); // inisialisasi fungsi operators yang digunakan untuk operasi bilangan

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
    });
}); // inisialisasi fungsi yang digunakan untuk memanggil variabel inputOperator berdasarkan button target yang sudah ditekan

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
};// inisialisasi fungsi inputOperator yang digunakan untuk menyimpan operator kedalam variabel calculationOperator
// statement if yang kondisinya jika calculationOperator bernilai null maka prevNumber isinya sama dengan currentNumber dan variabel calculationOperator menyimpan data dari button operator yang sudah ditekan, kemudian inisialisasi currentNumber berubah lagi menjadi 0 dan siap diisi angka yang baru lagi


const equalSign = document.querySelector('.equal-sign'); // inisialisasi fungsi equalSign yang digunakan untuk operator sama dengan
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});// memanggil fungsi equalSign yang digunakan untuk kalkulasi dan menampilkan currentNumber ke layar

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber); // digunakan untuk operasi penjumlahan
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber); // digunakan untuk operasi pengurangan
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber); // digunakan untuk operasi perkalian
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber); // digunakan untuk operasi pembagian
            break;
        default:
            return; // mengembalikan ke result = null
    }
    currentNumber = result; // variabel currentNumber menyimpan nilai yang sudah dikalkulasi menggunakan operator
    calculationOperator = ''; // setelah proses operasi dan sudah ditampilkan maka variabel calculationOperator berubah menjadi null kembali dan siap diisi operator lagi
};
const clearBtn = document.querySelector('.all-clear'); // inisialisasi fungsi AC atau menghapus semua yang ada di layar

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
}); // memanggil fungsi clearBtn yang ketika ditekan button AC artinya menghapus semua yang ada di layar dan memanggil fungsi updateScreen untuk memperbarui tampilan layar dengan currentNumber

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '';
}; // inisialisasi fungsi clearAll yang digunakan untuk mengosongkan variabel prevNumber, calculationOperator, dan currentNumber

const decimal = document.querySelector('.decimal'); // inisialisasi fungsi yang digunakan untuk menambahkan kom, contoh = 0.5 (nol koma lima)

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
}); // memanggil fungsi decimal yang ketika ditekan button decimal maka menambahkan tanda koma pada angka

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}; // inisialisasi fungsi inputDecimal yang jika button ditekan maka currentNumber akan ditambahkan koma dibelakangnya