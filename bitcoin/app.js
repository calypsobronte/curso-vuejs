new Vue({
    el: "#app",
    data: () => ({
        name: 'Bitcoin',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        priceFile: 'https://img1.pnghut.com/17/6/7/CWC3PNsgxT/symbol-price-tag-share-icon-text-brand.jpg',
        changePercent: 10,
        //prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
        pricesWithDays: [
            { day: 'Lunes', value: 8400 },
            { day: 'Martes', value: 7900 },
            { day: 'Miercoles', value: 8200 },
            { day: 'Jueves', value: 9000 },
            { day: 'Viernes', value: 9400 },
            { day: 'Sabado', value: 10000 },
            { day: 'Domingo', value: 10200 },
        ],
        showPrices: false,
        price: 8400,
    }),
    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
        }

    }

})