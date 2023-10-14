<template>
    <div>
        <input @onKeyDown="onKeyDown" @input="changeInputValue">

        <p>Hello {{ count }}</p>
        <div> result: {{ count }}</div>
        <div> result:   {{ getResult }}</div>

        <a :href="href" @click.prevent="onClickLink">Reference on Google</a>

        <div class="container" @click="onClickContainer($event, '3')"></div>

        <!-- <button v-if="isActiveBtn">Send</button> -->
        <button class="btn" :class="{hide: !isActiveBtn}">Send</button>
        
        <ul>
            <li v-for="(userItem, index) in users" :key="userItem.id">
                {{ index + 1 }}: {{ userItem.name }}
            </li>
        </ul>
    </div>
</template>


<script>
const ARR_DATA = [
    {
        id: 1,
        name: 'long'
    }, 
    {
        id: 2,
        name: 'Masha'
    }, 
    {
        id: 3,
        name: 'Smith'
    }
]


export default {
    name: 'TestComponent', 
    data() {
        return {
            count: 0,
            href: 'https://google.com',
            isActiveBtn: false,
            users: ARR_DATA
        }
    },

    mounted() {
        // setInterval (() => {
        //     this.count++
        // }, 1000)
    }, 

    methods: {
        onClickContainer(event, int) {
            this.count++
        }, 

        onClickLink(event) {
        console.log('click')
        }, 

        onKeyDown(event) {
            console.log(event.key)
        },

        changeInputValue(event) {
            const value = event.target.value

            this.isActiveBtn = !!value

            // if (value) {
            //     this.isActiveBtn = true
            // } else {
            //     this.isActiveBtn = false
            // }
        }
    }, 

    computed: {
        getResult() {
            return this.count+ 10
        }
    }
}
</script>

<style>
.container{
    width: 400px;
    height: 400px;
    background-color: aqua;
}

.btn {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

.btn.hide {
    opacity: 0;
}

</style>