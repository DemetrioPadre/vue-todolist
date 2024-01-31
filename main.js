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
            newItem: {
                name: '',
                done: false,
            },
        };
    },
    methods: {
        printNewItem() {
            const newItemCopy = { ...this.newItem };
            if (!newItemCopy.name) {
                alert('Hai dimenticato di digitare, stupido');
                return;
            }
            this.items.push(newItemCopy);
        },

    },
    mounted() {
        console.log();
    },
});

app.mount('#app');