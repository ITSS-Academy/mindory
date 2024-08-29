import { Pipe, PipeTransform } from '@angular/core';
import { format, toZonedTime } from 'date-fns-tz';

@Pipe({
  name: 'localTime',
  standalone: true,
})
export class LocalTimePipe implements PipeTransform {
  transform(date: Date): string {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const zonedTime = toZonedTime(date, timeZone);
    return format(zonedTime, 'MM/dd/yyyy', { timeZone });
  }
}
