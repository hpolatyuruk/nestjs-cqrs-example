import { IsNotEmpty } from 'class-validator';

export class CreateEndpointDTO {
  @IsNotEmpty()
  Id: string;
  @IsNotEmpty()
  computerName: string;
}
