export type NestedHeaderMapping = {
	[key: string]: string;
};

export type ValueConverter = (value: string) => any;

export type TypeMapping = {
	[key: string]: ValueConverter;
};

export const defaultConverters: Record<string, ValueConverter> = {
	string: (value: string) => value,
	number: (value: string) => Number(value),
	boolean: (value: string) => value.toLowerCase() === "true",
	date: (value: string) => {
		const [day, month, year] = value.split("/");
		const date = new Date(`${year}-${month}-${day}`);
		const formattedDay = String(date.getDate()).padStart(2, "0");
		const formattedMonth = String(date.getMonth() + 1).padStart(2, "0");
		const formattedYear = date.getFullYear();
		return `${formattedDay}/${formattedMonth}/${formattedYear}`;
	},
};

export function createTypeMappingForAccidentReport(): TypeMapping {
	return {
		id: defaultConverters.string,
		incidentDate: defaultConverters.date,
		incidentPeriod: defaultConverters.string,
		street: defaultConverters.string,
		number: defaultConverters.string,
		neighborhood: defaultConverters.string,
		city: defaultConverters.string,
		state: defaultConverters.string,
		fabricationYear: defaultConverters.string,
		vehicleColor: defaultConverters.string,
		vehicleBrand: defaultConverters.string,
		vehicleType: defaultConverters.string,
		registration: defaultConverters.string,
		vehicleState: defaultConverters.string,
		vehicleCity: defaultConverters.string,
	};
}
