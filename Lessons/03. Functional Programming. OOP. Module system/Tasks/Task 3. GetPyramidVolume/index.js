class Pyramid {
    // Начало
    constructor(h, s1, s2) {
        this.h = h;
        this.s1 = s1;
        this.s2 = s2;
    }

    getVolume() {
        return this.h/3 *(this.s1 + this.s2 + Math.sqrt(this.s1 * this.s2))
    }
    // Конец
}

export default Pyramid;