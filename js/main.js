/**
 * VUE JS API
 */

const app = new Vue({
    el: '#app',
    data: {
        albums: [],

    },
    created(){

          axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
              this.albums = result.data.response
              console.log(albums);
            })
            .catch(error => { console.log('errore:', error); })

    },
    methods: {

   }
});
