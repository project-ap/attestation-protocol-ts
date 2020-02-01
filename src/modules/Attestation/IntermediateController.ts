import { IRequest } from "@somedotone/ardor-ts";
import { AttestationResponse, CreateIntermediateAttestationParams, EntityType } from "../../types";
import CreationService from "./CreationService";


export default class IntermediateController {
    private readonly request: IRequest;


    constructor(request: IRequest) {
        this.request = request;
    }

    public async create (url: string, params: CreateIntermediateAttestationParams): Promise<AttestationResponse> {
        const creationService = new CreationService(this.request);
        const response = await creationService.create(url, params, EntityType.INTERMEDIATE);
        return { transactionId: response.fullHash };
    }

    // public async update (url: string, params: UpdateIntermediateAttestationParams): Promise<AttestationResponse> {
    //     // const response = await this.updateAttestation(url, params, EntityType.ROOT);
    //     // return { transactionId: response.fullHash };
    // }

    // public async revoke (url: string, params: UpdateIntermediateAttestationParams): Promise<AttestationResponse> {
    //     // const response = await this.updateAttestation(url, params, EntityType.ROOT);
    //     // return { transactionId: response.fullHash };
    // }
}