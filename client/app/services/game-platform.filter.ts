import { PipeTransform, Pipe } from '@angular/core';
import { IGame } from './game';

@Pipe({
    name: 'gamePlatformFilter'
})
export class GamePlatformFilterPipe implements PipeTransform {

    transform(value: IGame[], args: string): IGame[] {
                
        let filter: string = args ? args.toLocaleLowerCase() : null;
        
        if (filter == null )
            return value;
                
        return filter ? value.filter((g: IGame) =>
            g.platform.toLocaleLowerCase().indexOf(filter) != -1) : value;            
    }
}