export default class Address {
	street: string;
	number: string;
	neighborhood: string;
	city: string;
	state: string;

	constructor(
		street: string,
		number: string,
		neighborhood: string,
		city: string,
		state: string
	) {
		this.street = street;
		this.number = number;
		this.neighborhood = neighborhood;
		this.city = city;
		this.state = state;
	}
}
