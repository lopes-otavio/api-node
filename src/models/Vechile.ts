import VechileRegistration from "./VechileRegistration";

export default class Vechile {
	fabricationYear: string;
	color: string;
	brand: string;
	type: string;
	vechileRegistration: VechileRegistration;

	constructor(
		fabricationYear: string,
		color: string,
		brand: string,
		type: string,
		vechileRegistration: VechileRegistration
	) {
		this.fabricationYear = fabricationYear;
		this.color = color;
		this.brand = brand;
		this.type = type;
		this.vechileRegistration = vechileRegistration;
	}
}
