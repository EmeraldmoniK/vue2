const app = {
    data(){
        return {
            title:'Выбери игру',
            game:'',
            text:'',
            players: [
                {id:1 , game: 'VALORANT', gamer: []},
                {id:2 , game: 'CSGO', gamer: []},
                {id:3 , game: 'DYING LIGHT', gamer: []}
            ],
        }
    },
    methods: {
        addPlayer(){
            if(this.text.length > 0){
                if(this.game == 'VALORANT'){
                    this.players[0].gamer.push(this.text)
                }else if(this.game == 'CSGO'){
                    this.players[1].gamer.push(this.text)
                }else if(this.game == 'DYING LIGHT'){
                    this.players[2].gamer.push(this.text)
                }
            }
            this.text = ''
        }
    }
}

Vue.createApp(app).mount('#app')