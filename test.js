function Item(title, price) {
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price} 원 입니다.`);
    }

}

const item1 = new Item("mike",3000);
const item2 = Item("mek",3000);

console.log(item1,item2);

item1.showPrice();