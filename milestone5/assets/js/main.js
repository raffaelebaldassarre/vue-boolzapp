let app = new Vue ({
    el: "#app",
    data: {
        lastAccess: {
            date: ''
        },
        message:
        {
        date: '',
        text : '',
        status : 'sent'
        }
        ,
        activeContact : 0,
        search: '',
        contacts: [
        {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        text: 'Hai portato a spasso il cane?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        text: 'Ricordati di dargli da mangiare',
        status: 'sent'
        },
        {
        date: '10/01/2020 16:15:22',
        text: 'Tutto fatto!',
        status: 'received'
        }
        ],
        },
        {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
        {
        date: '20/03/2020 16:30:00',
        text: 'Ciao come stai?',
        status: 'sent'
        },
        {
        date: '20/03/2020 16:30:55',
        text: 'Bene grazie! Stasera ci vediamo?',
        status: 'received'
        },
        {
        date: '20/03/2020 16:35:00',
        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'sent'
        }
        ],
        },
        {name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
        {
        date: '28/03/2020 10:10:40',
        text: 'La Marianna va in campagna',
        status: 'received'
        },
        {
        date: '28/03/2020 10:20:10',
        text: 'Sicuro di non aver sbagliato chat?',
        status: 'sent'
        },
        {
        date: '28/03/2020 16:15:22',
        text: 'Ah scusa!',
        status: 'received'
        }
        ],
        },
        {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        text: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        text: 'Si, ma preferirei andare al cinema',
        status: 'received'
        }
        ],
        },
        {
        name: 'Andrea',
        avatar: '_5',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        text: 'oi ci sei?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        text: 'sei sveglio???',
        status: 'sent'
        },
        {
        date: '10/01/2020 16:15:22',
        text: 'Che vuoi?',
        status: 'received'
        }
        ],
        },
        {
        name: 'Federico',
        avatar: '_6',
        visible: true,
        messages: [
        {
        date: '20/03/2020 16:30:00',
        text: 'Ciao come stai?',
        status: 'sent'
        },
        {
        date: '20/03/2020 16:30:55',
        text: 'Bene grazie! Come sta andando il corso?',
        status: 'received'
        },
        {
        date: '20/03/2020 16:35:00',
        text: 'Bene bene, questo esercizio è una bomba',
        status: 'sent'
        }
        ],
        },
        {name: 'Angelo',
        avatar: '_7',
        visible: true,
        messages: [
        {
        date: '28/03/2020 10:10:40',
        text: 'Ciao, da quanto tempo!!!',
        status: 'received'
        },
        {
        date: '28/03/2020 10:20:10',
        text: 'eh si è vero, come stai?',
        status: 'sent'
        },
        {
        date: '28/03/2020 16:15:22',
        text: 'Bene, dobbiamo verdci uno di questi giorni.',
        status: 'received'
        }
        ],
        },
        {
        name: 'Marco',
        avatar: '_8',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        text: 'Hai sentito il discorso di Conte',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        text: 'Si, lasciamo perdere',
        status: 'received'
        }
        ],
        }
        ]
    },
    methods:{
        activeChat(index){
            this.lastAccess.date = "";
            this.activeContact = index;
            //console.log(index);
        },
        addMessageSent(){
            this.timeData();
            if (this.message.text.length > 0){
                this.contacts[this.activeContact].messages.push(this.message);
            };
            this.message = { date: '' , text : '',status : 'sent'};
            setTimeout(this.addMessageReceived, 1000);
        },
        addMessageReceived() {
            this.message = { date: '' ,text : 'ok',status : 'received'}
            this.timeData();
            this.contacts[this.activeContact].messages.push(this.message);
            this.message = { date: '',text : '',status : 'sent'};
            // visualizza ultimo accesso con set orologio diverso
            if(this.lastAccess.date == ''){
            this.lastTimeData();
            this.contacts[this.activeContact].date = this.lastAccess.date;
            //1 minuto per entrare in inattività
            setTimeout(this.lastAccessTimeout, 60000);
            }
        },
        addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          },
          //Funzione per stampare data di invio/ricezione messaggio
        timeData() {
            var currentDate = new Date();
            var LocaleDateString = this.addZero(currentDate.toLocaleDateString());
            var Hours = this.addZero(currentDate.getHours());
            var Minutes = this.addZero(currentDate.getMinutes());
            var Seconds = this.addZero(currentDate.getSeconds());
            var time = LocaleDateString + " " + Hours + ":" + Minutes + ":" + Seconds;
            this.message.date = time;
        },
        //Funzione per stampare ultimo accesso con formato diverso
        lastTimeData() {
            var currentDate = new Date();
            var Hours = this.addZero(currentDate.getHours());
            var Minutes = this.addZero(currentDate.getMinutes());
            var Seconds = this.addZero(currentDate.getSeconds());
            var lastTime = Hours + ":" + Minutes + ":" + Seconds;
            this.lastAccess.date = lastTime;

        },
        //Funzione per azzerare l'ultimo accesso dopo 1 minuto di inattività
        lastAccessTimeout(){
            this.lastAccess.date = '';
        }
    },
    computed : {
        filteredContact() {
            return this.contacts.filter(contactFilter => {
                return contactFilter.name.toLowerCase().includes(this.search.toLowerCase());
            });
         }
     }
})