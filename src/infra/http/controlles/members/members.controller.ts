import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateMemberDto } from '../../../../domain/members/dto/create-member.dto';
import { UpdateMemberDto } from '../../../../domain/members/dto/update-member.dto';
import { MembersService } from '../../../../domain/members/service/members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
