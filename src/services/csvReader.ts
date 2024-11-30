import { readFileSync } from "fs";
import { resolve } from "path";

export default function readCSVFile(filePath: string): string {
	try {
		const absolutePath = resolve(filePath);
		return readFileSync(absolutePath, "utf-8");
	} catch (error) {
		console.error(`Error reading file: ${error}`);
		throw error;
	}
}
