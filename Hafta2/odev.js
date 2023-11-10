// Array Soruları

var dolap = ["Shirt", "Pant", "TShirt"];

/*

* 1. dolap arrayindeki son elemanı silip consola yazdırın

* 2. dolap arrayindeki ilk elamanı silip yerine “Hat” elemanını gönderip consola yazdırın

* 3. dolap değişkeninin array olup olmadığını kontrol edin ve sonucu bir değişkene eşitleyin

* 4. dolap arrayinde “Pant” elemanın olup olmadığını 3 farklı method ile kontrol edin

* 5. dolap arrayindeki elemanların karakter sayısını toplayıp geriye döndürecek fonksiyonu yazın

* 6. dolap arrayindki tüm elemanları büyük harfe çevirip yeni bir değişkene 3 farklı yöntemle atayın

* 7. dolap arrayini index sayıları key olacak şekilde objeye çeviriniz

* 8. slice ile splice farkı nedir

*/

//? 1

/* 
* dolap.pop();
* console.log(dolap); 

! OUTPUT: [ 'Shirt', 'Pant' ]

*/

//? 2

/* 

* dolap.shift();
* dolap.unshift("Hat");
* console.log(dolap);

! OUTPUT: [ 'Hat', 'Pant', 'TShirt' ]

*/

//? 3

/*

* const isArray = Array.isArray(dolap);
* console.log(isArray);

! OUTPUT: true

*/

//? 4

/*

* console.log(dolap.includes("Pant"));

! OUTPUT: true

* console.log(dolap.indexOf("Pant") !== -1); 

! OUTPUT: true

* console.log(dolap.find((item) => item === "Pant") !== undefined);

! OUTPUT: true

*/

//? 5

/*

* const toplam = dolap.reduce((degisken, eleman) => {
*   return degisken + eleman.length;
* }, 0);
* console.log(toplam); 

! OUTPUT: 15
*/

//? 6

/*

* const DOLAP = dolap.map((item) => item.toUpperCase());
* console.log(DOLAP);

! OUTPUT: [ 'SHIRT', 'PANT', 'TSHIRT' ]

* const DOLAP = [...dolap].toString().toUpperCase().split(",");
* console.log(DOLAP);

! OUTPUT: [ 'SHIRT', 'PANT', 'TSHIRT' ]

* const DOLAP = [];
* dolap.forEach((item) => {
*   DOLAP.push(item.toUpperCase());
* });
* console.log(DOLAP);

! OUTPUT: [ 'SHIRT', 'PANT', 'TSHIRT' ]
*/

//? 7

/*

* const dolapObject = {};
* dolap.forEach((elm, indeks) => {
*   dolapObject[indeks] = elm;
* });
* console.log(dolapObject);

* const dolapObject2 = Object.assign({}, dolap);
* console.log(dolapObject2)

! OUTPUT: { '0': 'Shirt', '1': 'Pant', '2': 'TShirt' }

*/

//? 8. sorunun cevabı odev.md dosyasındadır.

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
/*
 ? 1. arrayindeki yinelenen sayıları bulun
 * function yinelenenSayilariBul(dizi) {
 *   return dizi.filter((sayi, index) => dizi.indexOf(sayi) !== index);
 * }
 * 
 * const yinelenenler = yinelenenSayilariBul(arr);
 * console.log(yinelenenler); 


 ? 2. arrayindeki tüm yinelenen sayıları silip yeni bir arrayi 2 farklı method ile oluşturun
 
 * const newArr = [...new Set(arr)];
 * console.log(newArr);
 
 ? 3. arrayindeki en yüksek ve en düşük değeri 2 farklı methodla bulun

 * const sortedArr = arr.sort((a, b) => a - b);
 * console.log("Min:", sortedArr[0], "Max:", sortedArr.at(-1));
 
 
 * console.log("Min:", Math.min(...arr), "Max:", Math.max(...arr));
 
 */

/*
? Bu kodun çıktısı nedir neden

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}
let promise = job();
promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  }); 

  ! Output:
  ! Error 1
  ! Success 4

  * Çünkü Promise olarak tanımlanmış job fonksiyonu reject durumda yani hata mesajı ile tetiklenecek.
  * Yani hata işlemini yakalayacak o yüzden catch bloğunda ne var ise onu ilk döner
  * Bu işlemi tamamladıktan sonra promise sonlanır ve Success 4 basar
  
  */

//? Bu kodun çıktısı nedir neden

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
let promise = job(true);
promise
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success:", data.message);
  })
  .catch(function (data) {
    console.log("Error:", data.message);
  });

/*
 * 0: job(true) ile başlayarak bir promise oluşturulur ve başarı durumunda "success", aksi halde "error" ile sonuçlanır.
 * 1: promise değişkeni job(true) yani resolve olmuş bir fonksiyona eşitlenmiş ve .then() bloğunun içindeki data bilgisi success olduğundan success dönüyor
 * 2: Ardından bir önceki .then() bloğu içerisinde return edilen job(true) fonksiyonu success, bu data bilgisini victory ile !== kıyası yapılıyor, koşul sağlandığı için "Defeat" diye bir hata mesajı fırlatılıyor
 * 3: Fırlatılan hata mesajı 1. .catch() bloğunu tetikler.
 * 4: 1. .catch() bloğu içerisindeki fonksiyonun aldığı error parametresi boş değerdir ve bloğun içerisindeki return edilen job(false) fonksiyonu reject olur.
 * 5: reject olan ifade 2. .catch() bloğunu tetikler.
 * 6: 2. .catch() bloğunda fonksiyonun error parametresi "error" olduğu için console başta error yazdırır sonra "Error caught" yazısını döner
 * 7: sonrasındaki .then() bloğu içerisine data bilgisi almaz ve bir şey dönmez fakat return edilen yeni bir Error nesnesi "test" mesajı tutar
 * 8: Bu dönen Error nesnesi 3. yani sonuncu .catch() bloğunu tetikler.
 * 9: Fonksiyondaki data da tutulan bir önceki dönen Error nesnesinin "test" mesajı olduğundan "Error: test" diye yazdırır ve program sonlanır.
 */
