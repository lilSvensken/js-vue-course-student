<template>
    <div class="time-killer">
        <!--Начало-->
        <button @click="addTime" type="button" class="btn btn-warning">
            Добавить время!
        </button>
        <div class="times-container">
            <TimeElement v-for="time in times" 
                :key="time.id" 
                :time="time"
                @deleteTime="deleteTime"
            />
        </div>        
        <!--Конец-->
    </div>
</template>

<script>
import TimeElement from './TimeElement.vue';
export default {
    name: 'TimeKiller',
    // Начало
    components: {
        TimeElement
    },
    data() {
        return {
            times: [],
            id: 0,
        }
    },
    methods: {
        addTime() {
            this.id += 1
            this.times.push({
                id: this.id,
                time: new Date()
            });
        },
        deleteTime(timeId) {
            this.times = this.times.filter(({ id }) => id !== timeId);
        }
    },
    computed: {
    },

    // Конец
};
</script>

<style>
.time-killer {
    margin: 100px;
    display: flex;
}

.time-killer > button {
    margin-right: 20px;
    align-self: baseline;
}
</style>