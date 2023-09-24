class Pyramid {
    height;
    upSquare;
    downSquare;
    constructor(height, upSquare, downSquare) {
        this.height = height;
        this.upSquare = upSquare;
        this.downSquare = downSquare;
    }
    getVolume(){
        return 1/3 * this.height * (this.upSquare + this.downSquare + Math.sqrt(this.upSquare*this.downSquare));
    };
}
export default Pyramid;