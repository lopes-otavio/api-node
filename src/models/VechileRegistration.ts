export default class VechileRegistration {
	registration: string;
	state: string;
	city: string;

	constructor(registration: string, state: string, city: string) {
		this.registration = registration;
		this.state = state;
		this.city = city;
	}
}
