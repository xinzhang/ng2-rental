import { PipeTransform, Pipe } from '@angular/core';
import { IGame } from './game';

@Pipe({
    name: 'gameOrderFilter'
})
export class GameOrderFilterPipe implements PipeTransform {

    transform(value: IGame[], args: string[]): IGame[] {

        let order: string = args[0] ? args[0] : null;

        if (order == null)
            return value;

        return value.sort(function (a, b) {
            var result = (a[order] < b[order]) ? -1 : (a[order] > b[order]) ? 1 : 0;
                        
            //return result * sortOrder;
            if (order == "quantity")
                return result * -1;
            else
                return result;
        });
    }
}