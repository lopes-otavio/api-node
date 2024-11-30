import Address from "./Address";
import Suitor from "./Suitor";
import Vehicle from "./Vehicle";

export default class AccidentReport {
	id: string;
	incidentDate: string;
	incidentPeriod: string;
	incidentLocal: Address;
	stolenVechile: Vehicle;
	suitors?: Suitor[];

	constructor(
		id: string,
		incidentDate: string,
		incidentPeriod: string,
		incidentLocal: Address,
		stolenVechile: Vehicle,
		suitors?: Suitor[]
	) {
		this.id = id;
		this.incidentDate = incidentDate;
		this.incidentPeriod = incidentPeriod;
		this.suitors = suitors;
		this.incidentLocal = incidentLocal;
		this.stolenVechile = stolenVechile;
	}
}
