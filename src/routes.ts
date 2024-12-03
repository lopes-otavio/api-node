import { FastifyInstance } from "fastify";
import { getCsvParsedData } from "./services/csvService";
import AccidentReport from "./models/AccidentReport";

let controlArray: AccidentReport[] = [];

export async function routes(fastify: FastifyInstance) {
	controlArray = await getCsvParsedData();

	fastify.get("/accident-reports", async (request, resp) => {
		return resp.send(controlArray);
	});

	fastify.get<{ Params: { id: string } }>(
		"/accident-reports/:id",
		async (request, resp) => {
			const { id } = request.params;
			const report = controlArray.find((report) => report.id === id);
			if (!report) {
				return resp.code(404).send({ error: "Accident report not found" });
			}
			return resp.code(200).send(report);
		}
	);

	fastify.post<{ Body: AccidentReport }>(
		"/accident-reports",
		async (request, resp) => {
			const newReport = request.body;
			controlArray.unshift(newReport);
			return resp.code(201).send(newReport);
		}
	);

	fastify.put<{ Params: { id: string }; Body: AccidentReport }>(
		"/accident-reports/:id",
		async (request, resp) => {
			const { id } = request.params;
			const updatedReport = request.body;
			const index = controlArray.findIndex((report) => report.id === id);

			if (index === -1) {
				return resp.code(404).send({ error: "Accident report not found" });
			}

			controlArray[index] = { ...controlArray[index], ...updatedReport };
			return resp.code(200).send(controlArray[index]);
		}
	);

	fastify.delete<{ Params: { id: string } }>(
		"/accident-reports/:id",
		async (request, resp) => {
			const { id } = request.params;
			const index = controlArray.findIndex((report) => report.id === id);

			if (index === -1) {
				return resp.code(404).send({ error: "Accident report not found" });
			}

			const removedReport = controlArray.splice(index, 1)[0];
			return resp.code(200).send(removedReport);
		}
	);
}
