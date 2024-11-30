export default class VehicleRegistration {
	registration: string;
	vehicleState: string;
	vehicleCity: string;

	constructor(registration: string, vehicleState: string, vehicleCity: string) {
		this.registration = registration;
		this.vehicleState = vehicleState;
		this.vehicleCity = vehicleCity;
	}
}
