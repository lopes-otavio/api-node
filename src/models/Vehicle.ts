import VehicleRegistration from "./VehicleRegistration";

export default class Vehicle {
	fabricationYear: string;
	vehicleColor: string;
	vehicleBrand: string;
	vehicleType: string;
	vehicleRegistration: VehicleRegistration;

	constructor(
		fabricationYear: string,
		vehicleColor: string,
		vehicleBrand: string,
		vehicleType: string,
		vehicleRegistration: VehicleRegistration
	) {
		this.fabricationYear = fabricationYear;
		this.vehicleColor = vehicleColor;
		this.vehicleBrand = vehicleBrand;
		this.vehicleType = vehicleType;
		this.vehicleRegistration = vehicleRegistration;
	}
}
