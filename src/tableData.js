/**
 * Created by Stas on 10.09.2018.
 */
export default [
    {
        id: "electricity",
        service: "Електроенергія",
        units: "кВт.год",
        price: "0.9~1.68",
        current: 2505,
        previous: 2404,
        used() {
            return (this.current > this.previous) ? this.current - this.previous : 0
        },
        rowTotal() {
            const prices = this.price.split('~')
            const firstPrice = prices[0],
                secondPrice = prices[1]

            if (firstPrice > 0 && this.used() <= 100) {
                return (firstPrice * this.used()).toFixed(2);
            } else if (secondPrice > 0 && this.used() > 100) {
                const diff = this.used() - 100;
                return ((firstPrice * 100) + (secondPrice * diff)).toFixed(2);
            } else {
                return 0
            }

        }
    },
    {
        id: "water",
        service: "Водопостачання",
        units: "куб.м",
        price: 24.972,
        current: 748,
        previous: 740,
        used() {
            return (this.current > this.previous) ? this.current - this.previous : 0
        },
        rowTotal() {
            return ((this.price > 0) && (this.price > 0)) ? (this.price * this.used()).toFixed(2) : 0
        }
    },
    {
        id: "gas",
        service: "Газопостачання",
        units: "куб.м",
        price: 8.54892,
        current: 1766,
        previous: 1737,
        used() {
            return (this.current > this.previous) ? this.current - this.previous : 0
        },
        rowTotal() {
            return ((this.price > 0) && (this.price > 0)) ? (this.price * this.used()).toFixed(2) : 0
        }
    },
    {
        id: "heating",
        service: "Опалення",
        units: "Гкал",
        price: 1407.20,
        current: "",
        previous: "",
        used: 0.907069,
        rowTotal() {
            return ((this.used > 0) && (this.price > 0)) ? (this.used * this.price).toFixed(2) : 0.00
        }
    },
    {
        id: "rent",
        service: "Квартплата",
        price: "3.0966",
        units: "кв.м",
        current: "",
        previous: "",
        used: 47,
        rowTotal() {
            return ((this.used > 0) && (this.price > 0)) ? (this.used * this.price).toFixed(2) : 0.00
        }
    },
    {
        id: "elevator",
        service: "Ліфт",
        units: "кв.м",
        price: 0.90,
        current: "",
        previous: "",
        used: 47,
        rowTotal() {
            return ((this.used > 0) && (this.price > 0)) ? (this.used * this.price).toFixed(2) : 0.00
        }
    },
    {
        id: "phone",
        service: "Телефон",
        units: "міс.",
        price: 74.00,
        current: "",
        previous: "",
        used: 1,
        rowTotal() {
            return ((this.used > 0) && (this.price > 0)) ? (this.used * this.price).toFixed(2) : 0.00
        }
    }
]