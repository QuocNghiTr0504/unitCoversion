// spaces.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaces'
})
export class Spaces implements PipeTransform {
  transform(value: string | number): string {
    const stringValue = value.toString();
    return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
