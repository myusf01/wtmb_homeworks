// Classes

//     Restaurant
//     Driver
//     Customer
//     Food

// Interactions

//     a Restaurant has a lot of Food that the Customer can order
//     a Customer can order Food
//     the Driver picks up the Food’s from the Restaurant and delivers it to the Customer




restaurant = class {
    constructor(name){
        this.name = name
        this.cash = 0
        this.foodsList = []
        this.drivers = []
    }

    add_food = food => this.foodsList.push(food)
    add_driver = driver => this.drivers.push(driver)
    
    selectDriver(){
        const random = Math.floor(Math.random() * this.drivers.length)
        // console.log(this.drivers[random])
        return this.drivers[random] 

    }
    
}

customer = class {
    constructor(name, age, money){
        this.name = name
        this.age = age
        this.money = money
    }
    
    orderFood(food, restaurant){
        this.money -=  food.price
        restaurant.cash += food.price
        restaurant.selectDriver().money += (food.price / 20) 
        
    }


}

driver = class {
    constructor(name, age){
        this.name = name
        this.age = age
        this.money = 123
    }
}

food = class {
    constructor(name,price){
        this.name = name
        this.price = price
    }
}

yusuf = new customer("Yusuf", 23, 150)
huzur = new restaurant("Huzur")
ahmet = new driver("Ahmet", 34)
mehmet = new driver("Mehmet", 45)
lahmacun = new food("Lahmacun",10)
huzur.add_driver(ahmet)
huzur.add_driver(mehmet)
huzur.add_food(lahmacun)
yusuf.orderFood(lahmacun,huzur)
// console.log(huzur.drivers)

