import Address from "./Address";
import Suitor from "./Suitor";
import Vechile from "./Vechile";

export default class AccidentReport {
	id: string;
	incidentDate: string;
	incidentPeriod: string;
	suitors: Suitor[];
	incidentLocal: Address;
	stolenVechile: Vechile;

	constructor(
		id: string,
		incidentDate: string,
		incidentPeriod: string,
		suitors: Suitor[],
		incidentLocal: Address,
		stolenVechile: Vechile
	) {
		this.id = id;
		this.incidentDate = incidentDate;
		this.incidentPeriod = incidentPeriod;
		this.suitors = suitors;
		this.incidentLocal = incidentLocal;
		this.stolenVechile = stolenVechile;
	}
}
