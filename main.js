let { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Lista della spesa: ',
            items: [
                {
                    name: 'Zucchine',
                    done: true,

                },
                {
                    name: 'Melanzane',
                    done: false,

                },
                {
                    name: 'Cipolle',
                    done: true,

                },
                {
                    name: 'Carote',
                    done: false,

                },
            ],
        };
    },
    methods: {

    },
    mounted() {
        console.log();
    },
});

app.mount('#app');