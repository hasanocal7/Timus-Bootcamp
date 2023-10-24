
**TIMUS FULLSTACK BOOTCAMP ÖDEV NOTLARIM - Hafta 1**


**Javascript nedir? Javascript'in Tarihsel Gelişimi**

JavaScript, [Brendan Eich](https://www.google.com/search?sca_esv=575755605&q=Brendan+Eich&si=ALGXSlYh1-GEPndq7qMo--O-TPixQtNN4JMroSxgItz5kq0stOtk3MR2PK1MW62c_g68umDUwPYvdjOu-VvCYdLZJnFkjEjhy4bfTWACvLEAemSbmrJuid5V53UdEX9AvBbdn-mpOeMNg8oEwFy8Nr889gJMfpqOylZiuUJHPb2eisHJawQ7A1k-vI2ESyFsFBMoAfLdm3bZ&sa=X&ved=2ahUKEwiFr4vLhYyCAxVHX_EDHTpiAjgQmxMoAXoECEsQAw) tarafından tasarlanan,  HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan programlama dilidir. Web sitelerinin %97'sinden fazlası, web sayfası hareketleri için istemci tarafında JavaScript kullanırlar ve kullanılan kodlar genellikle üçüncü taraf kitaplıkları içerir.

JavaScript'in tarihi, 1990 ların sonlarına dayanır ve o zamandan bu yana büyük bir gelişme göstermiştir. İşte JavaScript'in tarihi ve önemli kilometre taşları:

   1995: İlk JavaScript Sürümü - Netscape Communications, web tarayıcıları için JavaScript'i geliştirmeye başladı ve ilk sürümü Navigator 2.0'da tanıttı.

   1996: JavaScript Standartlaştırması - JavaScript, ECMAScript adı altında bir standart haline geldi. ECMAScript, dilin tanımını ve özelliklerini belirler.

   2000: ECMAScript 3.0 - ECMAScript 3, JavaScript'in yaygın olarak kullanılan bir versiyonu haline geldi ve tarayıcılar bu sürümü desteklemeye başladı.

   2005: AJAX'ın Yükselişi - Asenkron JavaScript ve XML (AJAX), web uygulamalarının daha dinamik ve etkileşimli hale gelmesini sağlayan bir teknoloji olarak popüler hale geldi.

   2009: ECMAScript 5.1 - Bu sürümle birlikte JavaScript diline birçok yeni özellik eklendi ve eksiklikler giderildi.

   2015: ECMAScript 6 (ES6) / ECMAScript 2015 - Bu büyük güncellemeyle birçok yeni dil özelliği ve sözdizimi güncellemeleri tanıtıldı. Bu sürüm, daha önceki sürümlere göre çok daha modern ve gelişmiş bir JavaScript dilini standartlaştırıldı.

   2016 ve Sonrası: Yıllık Güncellemeler - ECMAScript artık yıllık güncellemelerle geliyor. Her yıl yeni özellikler ekleniyor ve dil sürekli olarak gelişiyor.

   2017: Async/Await - ECMAScript 2017 ile async/await sözdizimi tanıtıldı, bu da asenkron işlemlerin yönetimini kolaylaştırdı.

   2019: ECMAScript 2019 - Bu sürümle birlikte Array.flat(), Array.flatMap() gibi yeni yöntemler ve özellikler eklendi.

   2020 ve Sonrası: Güncellemeler Devam Ediyor - ECMAScript, her yıl yeni özelliklerle güncellenmeye devam ediyor. Modülerlik, performans ve güvenlik iyileştirmeleri de bu güncellemelerin bir parçası olmuştur.

   2021: ECMAScript 2021 - Bu sürümle birlikte yeni özellikler eklenmiştir, özellikle String.prototype.replaceAll() ve Promise.any() gibi.

JavaScript'in gelişimi sadece dilin kendisi ile sınırlı değildir; tarayıcılar, sunucu tarafı uygulamalar ve çeşitli çerçeveler (frameworks) ve kütüphaneler de JavaScript ekosistemini büyük ölçüde etkileyerek daha güçlü ve kullanıcı dostu uygulamaların geliştirilmesine olanak tanımıştır. Bu nedenle, JavaScript'in evrimi sürekli devam etmektedir.

**Javascript Veri Türleri**

JavaScript'te veriler iki temel kategoriye ayrılabilir: primitive (ilkel) veriler ve complex (karmaşık) veriler.

1. **Primitive (İlkel) Veriler:**
   1. Primitive veriler, basit ve tek bir değeri temsil eder. Bunlar JavaScript'in temel veri tipleridir. İşte bazı örnekler:
      1. **String**: Metin verilerini temsil eder. Örnek: "Merhaba, Dünya".
      1. **Number**: Sayıları temsil eder. Örnek: 42, 3.14.
      1. **Boolean**: true veya false gibi mantıksal değerleri temsil eder.
      1. **Undefined**: Değer atanmamış bir değişkeni temsil eder. Örneğin, let x; ifadesiyle tanımlanan x değişkeni undefined olarak kabul edilir.
      1. **Null**: Boş bir değeri temsil eder.
      1. **Symbol**: Benzersiz ve değiştirilemez değerler oluşturmak için kullanılır.

1. **Complex (Karmaşık) Veriler:**
   1. Complex veriler, daha karmaşık yapıları temsil eder ve birden çok değeri içerebilir. Bunlar ilkel verilerin aksine referans tipleridir, yani bellekte bir referansla saklanır ve bu referanslar üzerinden erişilir. İşte bazı örnekler:
      1. **Object**: Nesneler, anahtar-değer çiftlerinden oluşan veri yapılarıdır. Özellikle JSON formatı nesneleri temsil etmek için yaygın olarak kullanılır.
      1. **Array**: Dizi, sıralı verileri depolamak için kullanılır ve birden çok değeri içerebilir.
      1. **Function**: Fonksiyonlar da bir tür karmaşık veridir ve işlevselliği tanımlarlar. JavaScript'te fonksiyonlar birer nesne olarak kabul edilir.
      1. **Date**: Tarih ve saat bilgilerini temsil etmek için kullanılır.
      1. **RegExp (Regular Expression)**: Düzenli ifadeleri temsil etmek için kullanılır.

İlkel veriler, değerlerini doğrudan kopyalar ve kendi bellek yönetimine sahiptir. Yani, bir ilkel verinin kopyalanması sadece değeri kopyalar ve orijinal veriyi etkilemez. Öte yandan, karmaşık veriler referans tipleri olduğundan, bir değişkenin başka bir değişkene atanması sadece referansı kopyalar, bu nedenle orijinal veri üzerinde değişiklik yapılırsa diğer değişkenler de etkilenir.



**Değişken Tanımlama Anahtar Kelimeleri**

var, let, ve const JavaScript dilinde kullanılan üç farklı değişken tanımlama anahtar kelimeleridir ve her biri farklı özelliklere sahiptir. İşte bu üç değişken tanımlama anahtar kelimesinin farkları:

**var:**

      var, eski JavaScript sürümlerinde yaygın olarak kullanılan bir değişken tanımlama anahtar kelimesidir.

      var ile tanımlanan değişkenler işlev (function) kapsamı içinde yer alır. Yani, bir değişken bir işlevin içinde tanımlandığında, sadece bu işlev içinde erişilebilir.

      Değişken var ile tanımlandığında, değişken yukarıdaki kapsamda "kaldırılır" (hoisted) ve deklarasyonundan önce kullanılabilir, ancak değeri undefined olarak kabul edilir.

      var ile aynı isimde birden fazla değişken tanımlanabilir ve son tanımlanan değeri alır.

   **let:**

      let, ECMAScript 2015 (ES6) ile tanıtılan ve modern JavaScript kodlamasında yaygın olarak kullanılan bir değişken tanımlama anahtar kelimesidir.

      let ile tanımlanan değişkenler blok kapsamına sahiptir. Yani, bir değişken bir bloğun içinde tanımlandığında, sadece bu blok içinde erişilebilir.

      let ile tanımlanan değişkenler de hoisted olur, ancak başlangıç değerleri undefined yerine başka bir değer alır.

      Aynı isimde bir değişken birden fazla kez aynı kapsamda tanımlanamaz.

   **const:**

      const, yine ES6 ile tanıtılan bir değişken tanımlama anahtar kelimesidir.

      const ile tanımlanan değişkenler, let gibi blok kapsamına sahiptir.

      Ancak, const ile tanımlanan değişkenlerin değeri bir kez atanır ve daha sonra değiştirilemez (immutable). Yani, bir kez bir değer atandığında, bu değer değiştirilemez.

      const ile aynı isimde bir değişken birden fazla kez aynı kapsamda tanımlanamaz.

Hangi değişken tanımlama anahtar kelimesini kullanmanız gerektiği, değişkeninin ömrü ve kullanım gereksinimleri size bağlıdır. Genel bir kural olarak, const kullanmayı tercih etmelisiniz, çünkü bu, değerlerin yanlışlıkla değiştirilmesini önler ve kodunuzu daha güvenli hale getirir. Ancak, bir değişkenin değerinin ilerleyen zamanlarda değişmesi gerekiyorsa veya değişkenin kapsamı sınırlıysa, let veya var kullanabilirsiniz.







##
## <a name="_w3i0nnoug06x"></a><a name="_uc5aw7hfda52"></a>**DİZİ(ARRAY) METODLARI**
## <a name="_7w803qdhc29g"></a>**Bölüm 1. Dizi özellikleri**
- [length](https://www.javascripttutorial.net/javascript-array-length/) – bir dizinin uzunluk özelliğini etkili bir şekilde nasıl kullanacağınızı gösterir.

```javascript
let arr = [1, 2, 3]
console.log(arr.length)
// Output: 3
```

## <a name="_ktso73vwvph"></a>**Bölüm 2. Elemanların eklenmesi/silinmesi**
- [push()](https://www-javascripttutorial-net.translate.goog/javascript-array-push/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir dizinin sonuna bir veya daha fazla öğe ekler.

```javascript
let arr = [1, 2, 3]
arr.push(4)
console.log(arr)
// Output: [ 1, 2, 3, 4 ]
```

- [unshift()](https://www-javascripttutorial-net.translate.goog/javascript-array-unshift/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizinin başına bir veya daha fazla öğe ekler.

```javascript
let arr = [1, 2, 3]
arr.unshift(0)
console.log(arr)
// Output: [ 0, 1, 2, 3 ]
```

- [pop()](https://www-javascripttutorial-net.translate.goog/javascript-array-pop/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizinin sonundaki bir öğeyi kaldırır.

```javascript
let arr = [1, 2, 3]
arr.pop()
console.log(arr)
// Output: [ 1, 2 ]
```

- [shift()](https://www-javascripttutorial-net.translate.goog/javascript-array-shift/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizideki ilk öğeyi kaldırır.

```javascript
let arr = [1, 2, 3]
arr.shift()
console.log(arr)
// Output: [ 2, 3 ]
```

- [splice()](https://www-javascripttutorial-net.translate.goog/javascript-array-splice/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – öğeleri silmek, eklemek ve değiştirmek gibi bir dizideki öğeleri kırpar.

```javascript
let arr = [1, 2, 3, 4, 5]
arr.splice(1, 3)
console.log(arr)
// Output: [ 1, 5 ]
```

- [slice()](https://www-javascripttutorial-net.translate.goog/javascript-array-slice/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir dizinin öğelerini kopyalar.

```javascript
let arr = [1, 2, 3]
console.log(arr.slice(1, 3))
// Output: 3
```


## <a name="_aj144yg8yyxs"></a>**Bölüm 3. Elemanların bulunması**
- [indexOf()](https://www-javascripttutorial-net.translate.goog/javascript-array-indexof/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizideki bir öğeyi bulur.

```javascript
let arr = [1, 2, 3]
console.log(arr.indexOf(2))
// Output: 1
```

- [includes()](https://www-javascripttutorial-net.translate.goog/es-next/javascript-array-includes/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir öğenin dizide olup olmadığını kontrol eder.

```javascript
let arr = [1, 2, 3]
console.log(arr.includes(2))
// Output: true
```

- [find()](https://www-javascripttutorial-net.translate.goog/es6/javascript-array-find/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizideki bir öğeyi bulur.

```javascript
let arr = [1, 2, 3]
console.log(arr.find(elm => elm % 2 == 0))
// Output: 2
```

- [findIndex()](https://www-javascripttutorial-net.translate.goog/es6/javascript-array-findindex/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir dizideki bir öğenin indeksini bulur.

```javascript
let arr = [1, 2, 3]
console.log(arr.findIndex(elm => elm % 2 == 0))
// Output: 1
```


## <a name="_ir5i2svjwtdd"></a>**Bölüm 4. Yüksek seviyeli metodlar**
- [map()](https://www-javascripttutorial-net.translate.goog/javascript-array-map/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizi elemanlarını dönüştürür.

```javascript
let arr = [1, 2, 3]
console.log(arr.map((elm) => elm ** 2))
// Output: [ 1, 4, 9 ]
```

- [filter()](https://www-javascripttutorial-net.translate.goog/javascript-array-filter/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir dizideki öğeleri filtreler

```javascript
let arr = [1, 2, 3]
console.log(arr.filter((elm) => elm % 2 == 1))
// Output: [ 1, 3 ]
```

- [reduce()](https://www-javascripttutorial-net.translate.goog/javascript-array-reduce/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir dizinin öğelerini bir değere arttırır veya azaltır.

```javascript
let arr = [1, 2, 3]
console.log(arr.reduce((elm, sonrakiElm) => elm + sonrakiElm))
// Output: 6
```

- [every()](https://www-javascripttutorial-net.translate.goog/javascript-every/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizideki her öğenin bir testi geçip geçmediğini kontrol edin.

```javascript
let arr = [2, 4, 6, 8]
console.log(arr.every((elm) => elm % 2 == 0)) // Bir false tüm testi etkiler.
// Output: true
```

- [some()](https://www-javascripttutorial-net.translate.goog/javascript-array-some/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizideki en az bir öğenin testi geçip geçmediğini kontrol edin.

```javascript
let arr = [1, 2, 3, 5, 7]
console.log(arr.some((elm) => elm % 2 == 0))
// Output: true
```

- [sort()](https://www-javascripttutorial-net.translate.goog/javascript-array-sort/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir dizideki öğeleri sıralar.

```javascript
let arr = [3, 7, 5, 1, 2]
console.log(arr.sort())
// Output: [ 1, 2, 3, 5, 7 ]
```

- [forEach()](https://www-javascripttutorial-net.translate.goog/javascript-array-foreach/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizi öğeleri arasında döngü yapar.

```javascript
let arr = [3, 7, 5, 1, 2]
let toplam = 0;
arr.forEach((eleman) => {
   toplam = toplam + eleman
})
console.log(toplam / arr.length)
// Output: 3.6
```

##
##
## <a name="_h2j56tc7di19"></a><a name="_34ayrrtnrl3o"></a><a name="_vuts4thwjttz"></a>**Bölüm 5. Dizileri Değiştirmek**
- [concat()](https://www.javascripttutorial.net/javascript-array-concat/) – iki diziyi bir dizide birleştirir.

```javascript
let arr1 = [3, 7, 5, 1, 2]
let arr2 = [13, 4, 8, 6, 9]
console.log(arr1.concat(arr2))
// Output: [ 3, 7, 5, 1, 2, 13, 4, 8, 6, 9 ]
```


## <a name="_q3zukj2jc66d"></a>**Bölüm 6. Dizi Oluşturma**
- [of()](https://www-javascripttutorial-net.translate.goog/es6/array-of/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizi oluşturmayı iyileştirir.

```javascript
let arr = Array.of(7, 3, 4, 9, 8, 1, 6)
console.log(arr)
// Output: [ 7, 3, 4, 9, 8, 1, 6 ]
```

- [from()](https://www-javascripttutorial-net.translate.goog/es6/array-from/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – dizi benzeri veya yinelenebilir nesnelerden diziler oluşturur.

```javascript
function multiplicationBy3() {
   return Array.from(arguments, x => x * 3)
}
console.log(multiplicationBy3(7, 3, 1, 9))
// Output: [ 21, 9, 3, 27 ]
```

## <a name="_jvu8jpvfldtv"></a>**Bölüm 7. Flattening arrays**
- [flat()](https://www-javascripttutorial-net.translate.goog/es-next/javascript-array-flat/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir diziyi belirli bir derinliğe kadar yinelemeli olarak düzleştirir.

```javascript
let arr = [[7, 3, 1, 9],[8, 4, 6, 2]]
console.log(arr.flat())
// Output: [ 7, 3, 1, 9, 8, 4, 6, 2 ]
```

- [flatMap()](https://www-javascripttutorial-net.translate.goog/es-next/javascript-array-flatmap/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – her öğe üzerinde bir eşleme işlevi yürütün ve sonucu düzleştirin.

```javascript
let arr = [1, 4, 2, 5]
arr = arr.flatMap((elm) => elm % 2 == 0 ? [elm * 2, elm * 3] : elm)
console.log(arr)
// Output: [ 1, 8, 12, 4, 6, 5 ]
```

## <a name="_w3nbnllxc2w0"></a>**Bölüm 8. Dizilerden Dizelere**
- [join()](https://www-javascripttutorial-net.translate.goog/javascript-array-join/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir dizinin tüm öğelerini ayırıcıyla ayrılmış bir dizede birleştirir.

```javascript
let arr = ["Hi!", "I", "am", "Hasan"]
const str = arr.join(' ')
console.log(str)
// Output: Hi! I am Hasan
```

## <a name="_v5sc4gixk9ry"></a>**Bölüm 9. Gelişmiş İşlemler**
- [Destructuring](https://www-javascripttutorial-net.translate.goog/es6/destructuring/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – bir dizinin öğelerini değişkenlere nasıl atayacağınızı gösterir.

```javascript
function message() {
   return ["Hi!", "I", "am", "Hasan"]
}
let arr = message()
console.log(arr[0], arr[arr.length-1])
// Output: Hi! Hasan
```

- [Spread operator](https://www-javascripttutorial-net.translate.goog/es6/javascript-spread/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – yayılma operatörünün etkili bir şekilde nasıl kullanılacağını öğrenin.

```javascript
let body = ["Hasan", "Öcal"]
let user = [...body, "Antalya"]
console.log(user)
// Output: [ 'Hasan', 'Öcal', 'Antalya' ]
```

## <a name="_hgko5lm114sr"></a>**Bölüm 10. Erişim elemanları**
- [at()](https://www-javascripttutorial-net.translate.goog/javascript-array-at/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – hem pozitif hem de negatif indeksleri kullanarak dizi öğelerine erişin.

```javascript
let arr = [1, 6, 8, 4]
console.log(arr.at(-1))
// Output: 4
```

## <a name="_8dfrxrpkal32"></a>**Bölüm 11. Çok Boyutlu Dizi**
- [Multidimensional Array](https://www-javascripttutorial-net.translate.goog/javascript-multidimensional-array/?_x_tr_sl=auto&_x_tr_tl=tr&_x_tr_hl=tr) – JavaScript'te çok boyutlu dizilerle nasıl çalıştığını öğrenin.

```javascript
let arr = [["Hasan", "Backend"], ["Mert", "Backend"], ["Aysu", "Frontend"]]
console.table(arr)
// OUTPUT:
//┌─────────┬─────────┬────────────┐
//│ (index) │    0    │     1      │
//├─────────┼─────────┼────────────┤
//│    0    │ 'Hasan' │ 'Backend'  │
//│    1    │ 'Mert'  │ 'Backend'  │
//│    2    │ 'Aysu'  │ 'Frontend' │
//└─────────┴─────────┴────────────┘
```

## do..while ##

**JavaScript’te do...while döngüsü, döngü işlemlerinin önce bir kez gerçekleştirilmesini sağlar ve ardından belirli bir koşulu kontrol eder. Eğer koşul doğruysa, işlem tekrarlanır. Bu, döngünün en az bir kez çalışmasını garanti eder, çünkü koşul kontrolü döngünün sonunda yapılır. do...while döngüsünün temel sözdizimi şu şekildedir:**

```javascript
do {
   // Döngü işlemleri
} while (koşul);
```

- **İlk olarak, işlem yapılacak kod bloğu do anahtar kelimesi ile başlar.**
- **Ardından, işlem koşulu bir while ifadesi ile tanımlanır.**
- **İşlem koşulu while ifadesinin ardından gelir ve bir şartı belirtir. Eğer bu koşul doğru (true) ise, döngü tekrar eder. Eğer koşul yanlış (false) ise, döngü sona erer.**

**İşte bir örnek:**

```javascript
let sayac = 0;
do {
  console.log("Sayac: " + sayac);
  sayac++;
} while (sayac < 5);
```

**Bu örnek, "Sayac: 0" dan başlayarak "Sayac: 4" e kadar sayacı artırarak çalışır. Daha sonra sayac 5 olduğunda koşul kontrolü false olduğu için döngü sona erer.**

**do...while döngüsü, özellikle bir işlemi en az bir kez gerçekleştirmeniz gerektiğinde veya döngünün sonunda bir koşulu kontrol etmeniz gerektiğinde kullanışlıdır. Ancak diğer döngü türleri olan for ve while gibi, bu döngü de sonsuz döngülere neden olabilir, bu nedenle koşulu dikkatli bir şekilde kontrol etmek önemlidir.**

## for - foreach Arasındaki Fark ##

for ve forEach, JavaScript'te döngü işlemlerini gerçekleştirmek için kullanılan iki farklı yöntemdir ve aralarında bazı önemli farklar vardır. İşte bu iki döngü yöntemi arasındaki temel farklar:

1. **Sözdizimi ve Kullanım:**
   1. **for:** Klasik bir döngüdür ve genellikle sayacı artırarak belirli bir sayıda tekrar yapmak için kullanılır. Genellikle şu şekilde kullanılır:
      ```javascript
      for (let i = 0; i < array.length; i++) {

         // Döngü işlemleri
      }
      ```
   1. **forEach:** Bu, özel bir dizi yöntemidir ve bir dizi üzerinde dolaşmak için kullanılır. İşte bir örnek:
      ```javascript
      array.forEach(function (element) {
         // Döngü işlemleri
      });
      ```

1. **Gerçekleştirdiği Görev:**
   1. **for:** Klasik for döngüsü, belirli bir koşul doğru olduğu sürece döngüyü çalıştırır. Genellikle dizilerin veya nesnelerin elemanlarını tek tek işlemek için kullanılır. Veriyi endeks (index) üzerinden işlemek mümkündür.
   1. **forEach:** forEach ise bir dizinin her elemanını sırayla işlemek için kullanılır. Dizinin her elemanı üzerinde bir işlem yapmak istediğinizde kullanışlıdır. Ancak endeks bilgisine doğrudan erişmek zor olabilir.
1. **Dönüş Değeri:**
   1. **for:** for döngüsü herhangi bir dönüş değeri üretmez. Döngü, belirli bir işi gerçekleştirmek için kullanılır ve sonucu bir değişkene atamak gerekir.
   1. **forEach:** forEach işlevi, dizi üzerinde her öğe için belirtilen işlemi gerçekleştirir, ancak herhangi bir değer döndürmez.
1. **Break ve Continue Kullanımı:**
   1. **for** döngüsünde break ve continue ifadeleri kullanılabilir, bu sayede döngü işlemleri kontrol edilebilir.
   1. **forEach** ile bu tür kontrol ifadeleri kullanılamaz. forEach işlevi, işlemleri otomatik olarak her öğe için sırayla gerçekleştirir.

Hangi döngü yönteminin kullanılacağı, özellikle işlevin gereksinimlerine ve kodun okunabilirliğine bağlıdır. Genel olarak, bir dizinin her öğesini dolaşmak ve her öğe üzerinde aynı işlemi yapmak istediğinizde forEach kullanmak daha uygun olabilir. Ancak belirli bir koşul altında tekrar sayısını belirlemek ve endekse erişim gerekiyorsa, geleneksel for döngüsü daha uygun olabilir.

## reduce() Kullanımı

```javascript
let sepet = [];

if(sepet.length === 0) console.log('Ürün yok')

else if (sepet.length === 1) console.log('Satın aldın')

else {
   let toplam = 0
   sepet.forEach((eleman)=>{
   toplam = toplam + eleman
})

console.log(toplam)
}
```
# reduce versiyonu ödev
```javascript

let sepet = [10, 20, 30];

if(sepet.length === 0) console.log('Ürün yok')

else if (sepet.length === 1) console.log('Satın aldın')

else {
   const toplam = sepet.reduce((akumulator, mevcutEleman)=>{
   return akumulator + mevcutEleman
})

console.log(toplam)
}
```



