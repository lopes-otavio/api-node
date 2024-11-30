import {
	NestedHeaderMapping,
	TypeMapping,
	ValueConverter,
} from "../types/types";

export default function parseCSV(
	csvContent: string,
	headerMapping: NestedHeaderMapping,
	typeMapping: TypeMapping
): any[] {
	const lines = csvContent.trim().split("\n");
	const headers = lines[0].split("\t");

	const result: any[] = [];

	for (let i = 1; i < lines.length; i++) {
		const currentLine = lines[i].split("\t");
		if (currentLine.length !== headers.length) continue;

		const obj: any = {};
		parseNestedObject(obj, headerMapping, typeMapping, headers, currentLine);
		result.push(obj);
	}

	return result;
}

function parseNestedObject(
	obj: any,
	headerMapping: NestedHeaderMapping,
	typeMapping: TypeMapping,
	headers: string[],
	values: string[]
) {
	for (const key in headerMapping) {
		const headerKey = headerMapping[key];
		const headerIndex = headers.indexOf(headerKey);

		if (headerIndex !== -1) {
			const value = values[headerIndex];
			const converter = typeMapping[key];
			if (typeof converter === "function") {
				obj[key] = converter(value);
			} else {
				console.warn(`No converter found for key: ${key}. Using raw value.`);
				obj[key] = value;
			}
		}
	}
}
