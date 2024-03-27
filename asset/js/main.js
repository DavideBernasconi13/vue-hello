const { createApp } = Vue;

createApp({
    data() {
        return {
            message: `<h1>Hello Vue!</h1>`,
            image: 'https://picsum.photos/id/1005/600/200',
            alt: 'mio testo alternativo'
        }
    }

}).mount('#app');