export default class Suitor {
	name: string;
	email: string;
	phone: string;
	involvementType: string;

	constructor(
		name: string,
		email: string,
		phone: string,
		involvementType: string
	) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.involvementType = involvementType;
	}
}
