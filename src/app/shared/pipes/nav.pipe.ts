import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nav'})
export class NavPipe implements PipeTransform {

  transform(value: any): any {
    return !value ? '/' : `/${ value.toLowerCase().replace(' ', '-')}`;
  }

}
