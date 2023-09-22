class Pyramid {
    // Начало
    h;
    s1;
    s2;
    constructor(h, s1, s2) {
        this.h = h;
        this.s1 = s1;
        this.s2 = s2;
    }

    getVolume() {
        return (this.h * (this.s1 + this.s2 + Math.sqrt(this.s1 * this.s2))) / 3;
    }
    // Конец
}

export default Pyramid;