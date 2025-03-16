import { IController, IResponse } from "../interfaces/IController";

export class ListLeadsController implements IController {
    async handle(): Promise<IResponse> {
        return {
            statusCode: 200,
            body: {
                leads: [
                    { id: '1', name: 'Matheus' },
                    { id: '1', name: 'João' },
                    { id: '1', name: 'Júlia' },
                ]
            }
        }
    }
}
