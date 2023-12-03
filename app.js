const {createApp} = Vue

createApp({
    data(){
        return {
            perspective: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    }, 
    computed: {
        boxStyle(){
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)`
            }
        }
    },
    methods: {
        reset(){
            this.perspective = 0
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        }, 
        copy(){
            let text = `transform: ${this.boxStyle.transform}`
            navigator.clipboard.writeText(text) // copy to clipboard
        }
    },
}).mount('#app')