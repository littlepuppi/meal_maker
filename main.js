const menu = {
    _menu: '',
    _price: 0,

    set meal(mealToCheck){
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck;
        }
    },

        set price(priceToCheck) {
            if (typeof priceToCheck === 'number') {
                return this._price = priceToCheck;
            }
        }
},

get todaysSpecial(){
    if (this._meal && this._price) {
        return `Today's Meal is ${this._meal} for $${this._price}!`
    } else {
        return `Meal or price not set correctly!`
    }
}

};

menu.meal = 8;
menu.price = 'Pizza';
console.log(menu.todaysSpecial);
