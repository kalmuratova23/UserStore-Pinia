import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        isLoggedIn: false
    }),
    actions:{
        login(name){
            this.name = name
            this.isLoggedIn = true

        localStorage.setItem('userName', name);
        localStorage.setItem('isLoggedIn', 'true');
        },

        logout(){
            this.name = ''
            this.isLoggedIn = false

        localStorage.removeItem('userName')
        localStorage.removeItem('isLoggedIn')

        },

        loadFromStorage(){
            const savedName = localStorage.getItem('userName')
            const savedStatus = localStorage.getItem('isLoggedIn')

            if(savedName && savedStatus === 'true'){
                this.name = savedName
                this.isLoggedIn = true
            }
        }
    }
})