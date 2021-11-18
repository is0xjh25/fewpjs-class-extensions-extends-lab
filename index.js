class Polygon {
	constructor(arr) {
		this.arr = arr;
	}

	get countSides() {
		return this.arr.length;
	}

	get perimeter() {
		return this.arr.reduce((pre, next) => pre + next);
	}
}

class Triangle extends Polygon {
	get isValid() {
		if (this.countSides != 3) return false;
		if (this.arr[0] + this.arr[1] <= this.arr[2] || 
			this.arr[0] + this.arr[2] <= this.arr[1] || 
			this.arr[1] + this.arr[2] <= this.arr[0]) {
        	return false;
		} else {
        	return true;
		} 
	}
}

class Square extends Polygon {
	get isValid() {
		if (this.countSides != 4) return false;
		return (this.arr.every((ele) => {
			return ele === this.perimeter / 4;
			})
		)
	}

	get area() {
		return this.arr[0] * this.arr[0];
	}
}