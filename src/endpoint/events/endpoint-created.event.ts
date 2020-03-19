export class EndpointCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly computerName: string,
  ) {}
}
