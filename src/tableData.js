/**
 * Created by Stas on 10.09.2018.
 */
export default [
    {   id: "electricity",
        service: "Електроенергія",
        price: "0.9~1.68",
        current: 2505,
        previous: 2404,
        used() {
            return (this.current > this.previous && this.previous > 0) ? this.current - this.previous : 0},
        rowTotal() {
            const prices = this.price.split('~'),
                firstPrice = prices[0],
                secondPrice = prices[1];
            if (firstPrice > 0 && this.used() <= 100) {
                return (firstPrice * this.used()).toFixed(2);
            } else if (secondPrice > 0 && this.used() > 100) {
                const diff = this.used() - 100;
                return ((firstPrice * 100) + (secondPrice * diff)).toFixed(2);
            }
        }
    },
    {
        id: "water",
        service: "Водопостачання (хол.)",
        price: "21.26",
        current: 748,
        previous: 740,
        used() {
            return ((this.current > this.previous) && (this.previous > 0)) ? this.current - this.previous : 0
        },
        rowTotal() {
            return ((this.price > 0) && (this.price > 0)) ? (this.price * this.used()).toFixed(2) : 0
        }
    },
    {
        id: "gas",
        service: "Газопостачання",
        price: "6.96",
        current: 1766,
        previous: 1737,
        used() {
            return (this.current > this.previous && this.previous > 0) ? this.current - this.previous : 0
        },
        rowTotal() {
            return ((this.price > 0) && (this.price > 0)) ? (this.price * this.used()).toFixed(2) : 0
        }
    },
    {
        id: "heating",
        service: "Опалення",
        price: "1278.75",
        current: "",
        previous: "",
        used: 0.907069,
        rowTotal() {
            return ((this.used > 0) && (this.price > 0)) ? (this.used * this.price).toFixed(2) : 0
        }
    },
    {
        id: "rent",
        service: "Квартплата",
        price: "3.143939",
        current: "",
        previous: "",
        used: 46.39,
        rowTotal() {
            return ((this.used > 0) && (this.price > 0)) ? (this.used * this.price).toFixed(2) : 0
        }
    },
    {
        id: "elevator",
        service: "Ліфт",
        price: 15.00,
        current: "",
        previous: "",
        used: 1,
        rowTotal() {
            return ((this.used > 0) && (this.price > 0)) ? (this.used * this.price).toFixed(2) : 0
        }
    },
    {
        id: "phone",
        service: "Телефон",
        price: 12,
        current: "",
        previous: "",
        used: 1,
        rowTotal() {
            return ((this.used > 0) && (this.price > 0)) ? (this.used * this.price).toFixed(2) : 0
        }
    }
]