import { Field, Int, ObjectType, } from '@nestjs/graphql';

@ObjectType()
export class Faction {
  @Field(() => Int)
  factionId: number;

  @Field()
  factionName: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => Int)
  sizeFactor: number;

  @Field(() => Int)
  stationCount: number;

  @Field(() => Int)
  stationSystemCount: number;
}
