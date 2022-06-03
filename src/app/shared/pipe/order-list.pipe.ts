import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: TrackModel[], args: string | null = null): Array<any> {
    console.log(value);

    return value;
  }

}
