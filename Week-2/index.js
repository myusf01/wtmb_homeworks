console.log("Hello, World!")

const add = (num1, num2) => num1 + num2

// Const ve let arasındaki fark =>  Const değiştirilemez, Let değiştirilebilir değerler için.
// Genelde const kullanılır, mümkünse her zaman const ile başlarız daha sonradan gerekli görüyorsak let kullanırız.

// var? => const ve let çıkmadan önce kullanılırdı.

const toplam = add(2, 56)

// console.log(sum(1,5))

const mult = (num1, num2) => num1 * num2

const carp = mult(toplam, 2)

console.log(carp)