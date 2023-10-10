class Pyramid {
<<<<<<< HEAD
    // Начало
    constructor(h, s1, s2) {
        this.h = h;
        this.s1 = s1;
        this.s2 = s2;
    }

    getVolume() {

    }
    // Конец
=======
	constructor(h, s1, s2) {
		this.h = h;
		this.s1 = s1;
		this.s2 = s2;
	}

	getVolume() {
		return (this.h * (this.s1 + this.s2 + Math.sqrt(this.s1 * this.s2))) / 3;
	}
>>>>>>> 0cc445e2c23a9942e877bb69b032102dabb177ae
}

export default Pyramid;
