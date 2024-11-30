import { NestedHeaderMapping, TypeMapping } from "../types/types";
import readCSVFile from "./csvReader";
import parseCSV from "./csvParser";
import { createTypeMappingForAccidentReport } from "../types/types";
import AccidentReport from "../models/AccidentReport";
import Address from "../models/Address";
import VehicleRegistration from "../models/VehicleRegistration";
import Vehicle from "../models/Vehicle";
import { headerMapping } from "../mock/headerMapping";

function parseCSVFile<T>(
	filePath: string,
	headerMapping: NestedHeaderMapping,
	typeMapping: TypeMapping
): T[] {
	const csvContent = readCSVFile(filePath);
	return parseCSV(csvContent, headerMapping, typeMapping);
}

const typeMapping = createTypeMappingForAccidentReport();

const parsedData = parseCSVFile<any>("furtos.csv", headerMapping, typeMapping);

export async function getCsvParsedData(): Promise<AccidentReport[]> {
	const accidentReports = parsedData.map((data) => {
		const address = new Address(
			data.street,
			data.number,
			data.neighborhood,
			data.city,
			data.state
		);

		const vehicleRegistration = new VehicleRegistration(
			data.registration,
			data.vehicleState,
			data.vehicleCity
		);

		const vehicle = new Vehicle(
			data.fabricationYear,
			data.vehicleColor,
			data.vehicleBrand,
			data.vehicleType,
			vehicleRegistration
		);

		return new AccidentReport(
			data.id,
			data.incidentDate,
			data.incidentPeriod,
			address,
			vehicle,
			[]
		);
	});

	return accidentReports;
}
