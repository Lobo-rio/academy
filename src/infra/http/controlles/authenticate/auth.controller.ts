import {
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from '../../../../domain/authenticate/service/auth.service';
import { AuthTodoSwagger } from '../../../../helppers/swagger/response/authenticate/auth-todo.swagger';
import { AuthDto } from '../../../../domain/authenticate/dto/auth.dto';

import { BadRequestExceptionsSwagger } from '../../../../helppers/swagger/errors/bad-request-exception';
import { InternalServerErrorExceptionsSwagger } from '../../../../helppers/swagger/errors/internal-server-error-exception';

@Controller('api/authenticate')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'User Authentication' })
  @ApiResponse({ 
      status:  201, 
      description: 'User authentication, after successful authentication, you will receive an access token to endpoints',
      type: AuthTodoSwagger,
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
  async login(@Body() req: AuthDto) {
    return this.authService.login(req);
  }
}
