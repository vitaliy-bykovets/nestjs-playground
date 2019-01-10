import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationError } from 'node_modules/class-validator/validation/ValidationError';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {

    if (value instanceof Object && this.isEmpty(value)){
      throw new HttpException('Validation failed: No body submitted', HttpStatus.BAD_REQUEST)
    }

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors: ValidationError[] = await validate(object);

    if (errors.length > 0) {
      throw new HttpException(`Validation failed: ${this.formatErrors(errors)}`, HttpStatus.BAD_REQUEST);
    }

    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }

  private formatErrors(errors: ValidationError[]) {
    return errors.map((err: ValidationError) => {
      for (const property in err.constraints) {
        return err.constraints[property];
      }
    }).join(', ');
  }

  private isEmpty(value: any): boolean {
    if (Object.keys(value).length > 0) {
      return false;
    }

    return true;
  }
}