/**
 * VUE JS API MUSIC
 */

const app = new Vue({
    el: '#app',
    data: {
        albums: [],
        actualMusic: 'all'
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

          chooseTypeMusic(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
              .then(result => {
                let albumList = result.data.response;

                if (this.actualMusic !== 'all') {
                  albumList = albumList.filter( el => el.genre.toLowerCase() === this.actualMusic );
                }

                this.albums = albumList;
              })

              .catch(error => { console.log('errore:', error); })

          }
    }
});
