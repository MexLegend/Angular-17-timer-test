import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
  standalone: true,
})
export class TimerPipe implements PipeTransform {
  transform(time: number | null): string {
    if (!time) return '00:00:00';
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${this.addZeros(hours)}:${this.addZeros(minutes)}:${this.addZeros(
      seconds
    )}`;
  }

  addZeros(number: number): string {
    return number < 10 ? '0' + number : number.toString();
  }
}
