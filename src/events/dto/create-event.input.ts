export class CreateEventInput {
  readonly name: string;
  readonly description: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly check_price: number;
  readonly all_stay: number;
  readonly create_at: Date;
}
