let user = {
    name: "Alex",
    age: 18,
    isConfirmMail: false,
    lastOnline: {
        hours: 10, 
        minutes: 29, 
        seconds: 30
    },
    setConfirmMail(){ 
        this.isConfirmMail = true
    },
    setAge(age) {
        this.age = age
    },
    getYearBirthday() {
        console.log(`Year of birth: ${2023-this.age}`)
    },
    getStrLastOnline() {
        console.log(`Last online: ${this.lastOnline.hours}:${this.lastOnline.minutes}:${this.lastOnline.seconds} `) // this - user
    }
}

const getCountUser = (users) => (users.length)
const getSumOrders = (user) => { 
    let sum = 0
    for(let i = 0; i < user.orders.length; i++) {
        sum += user.orders[i].price
    }
    console.log(`User: ${user.name} has ${sum} orders`)
}
const getSumForAll = (users) => {
    for (let i = 0; i < users.length; i++) {
        getSumOrders(users[i])
    }
}

let usersList = [ 
    {
        name: "Alex",
        age: 18,
        isConfirmMail: false,
        orders: [
            {
                product:"TV",
                price: 3000,
                count: 1
            },
            {
                product:"Phone",
                price: 2000,
                count: 2
            }
        ],
        lastOnline: {
            hours: 10, 
            minutes: 29, 
            seconds: 30
        },
    },
    {
        name: "John",
        age: 28,
        isConfirmMail: false,
        orders:[],
        lastOnline: {
            hours: 20, 
            minutes: 19, 
            seconds: 50
        },
    },
    {
        name:"Bob",
        age: 28,
        isConfirmMail: false,
        orders:[
            {
                product:"PS5",
                price: 30000,
                count: 1
            },
            {
                product:"Book",
                price: 400,
                count: 1
            },
            {
                product:"Suchi Set",
                price: 500,
                count: 3
            }
        ],
        lastOnline: {
            hours: 20, 
            minutes: 19, 
            seconds: 50
        },
    }
]

getSumForAll(usersList)
//Функція, що рахує суму усіх замовлень
const getTotalOrderSum = (users) => { 
    let totalSum = 0
    for(let i = 0; i < users.length; i++) {
        for(let j = 0; j < users[i].orders.length; j++) {
            totalSum += users[i].orders[j].price * users[i].orders[j].count
        }
    }
    console.log(`The total sum of all orders is ${totalSum}`)
}
getTotalOrderSum(usersList)