export class CreateEndpointCommand {
  constructor(
    public readonly Id: string,
    public readonly computerName: string,
  ) {}
}
