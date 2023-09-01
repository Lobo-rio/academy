import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateMemberDto } from '../../../../domain/members/dto/create-member.dto';
import { UpdateMemberDto } from '../../../../domain/members/dto/update-member.dto';
import { MembersService } from '../../../../domain/members/service/members.service';

import { CreateTodoSwagger } from '../../../../helppers/swagger/response/members/create-todo.swagger';
import { FindTodoSwagger } from '../../../../helppers/swagger/response/members/find-todo.swagger';

import { BadRequestExceptionsSwagger } from '../../../../helppers/swagger/errors/bad-request-exception';
import { InternalServerErrorExceptionsSwagger } from '../../../../helppers/swagger/errors/internal-server-error-exception';
import { NotFoundExceptionsSwagger } from '../../../../helppers/swagger/errors/not-found-exception';

@Controller('api/members')
@ApiTags('Members')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ApiOperation({ summary: 'Create member' })
  @ApiResponse({ 
      status:  201, 
      description: 'New member successfully created',
      type: CreateTodoSwagger,
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: BadRequestExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  @ApiOperation({ summary: 'List members' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a list of all registered members',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return member' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a registered member, with the identifier that was informed',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.membersService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update member' })
  @ApiResponse({ 
      status:  200, 
      description: 'Update member information',
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(id, updateMemberDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete member' })
  @ApiResponse({ 
      status:  200, 
      description: 'Remove member information',
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.membersService.remove(id);
  }
}
