<template>
    <div class="sun-container">
        <div class="sun-container__block sun-container__block--sun">
            <h3>Нажми на солнце</h3>
            <div class="sun-container__img">
                <!--Начало-->
                <img
                    src="/Lessons/12. Vue. Properties. Refs. Modal/Tasks/Task 1. SizeOfSun/assets/sun.svg"
                    class="sun-container__the-sun"
                    ref="sun"
                    @click="clickSun"
                />                
                <!--Конец-->
            </div>
        </div>
        <div class="sun-container__block">
            <!--Начало-->
            <h3>Год:</h3>
            <span>
                {{ year }}
            </span>
            <h3>Диаметр солнца:</h3>
            <span>
                {{ diameter }} км
            </span>
            <!--Конец-->
        </div>
    </div>
</template>

<script>

export default {
    name: 'TheSun',
    data() {
        return {
            diameter: 1392700,
            year: 2021,
            defaultWidth: 450,
            // Начало

            // Конец
        };
    },
    methods: {
        clickSun() {
            this.year += 500000;
            this.diameter = Math.round(this.diameter * 0.95);
            this.defaultWidth = Math.round(this.defaultWidth * 0.95);
            this.$refs.sun.style.width = `${this.defaultWidth}px`;
        }
    }
    // Начало

    // Конец
};
</script>

<style>
.sun-container,
.sun-container__block {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sun-container {
    margin: 30px;
    color: #f6f6f6;
}

.sun-container__block {
    margin-top: 20px;
}

.sun-container__block--sun {
    height: 500px;
}

.sun-container__img {
    height: 100%;
    vertical-align: middle;

}

.sun-container__block > h3 {
    margin-bottom: 15px;
}

.sun-container__block > span {
    font-size: 20px;
}

.sun-container__the-sun {
    width: 450px;
    height: 100%;
    cursor: pointer;
    transition: width 0.4s ease-in-out;
}
</style>