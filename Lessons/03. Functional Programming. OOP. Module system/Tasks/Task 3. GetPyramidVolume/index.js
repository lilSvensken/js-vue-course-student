class Pyramid {
<<<<<<< HEAD
	constructor(h, s1, s2) {
		this.h = h;
		this.s1 = s1;
		this.s2 = s2;
	}

	getVolume() {
		return (this.h * (this.s1 + this.s2 + Math.sqrt(this.s1 * this.s2))) / 3;
	}
=======
    height;
    upSquare;
    downSquare;
    constructor(height, upSquare, downSquare){
        this.height = height
        this.upSquare = upSquare
        this.downSquare = downSquare
    }

    getVolume(){
        return 1/3 * this.height * (this.upSquare + Math.sqrt(this.upSquare * this.downSquare) + this.downSquare)
    }
>>>>>>> 8042429 (homework)
}

export default Pyramid;
