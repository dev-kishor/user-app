import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserPasswordDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password:string
}