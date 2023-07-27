import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'lastLetters'
})
export class ShowLastLetters implements PipeTransform {
    transform(value: any) {
        if(value.length > 12) {
            return '...' + value.slice(-8)
        } else {
            return value;
        }
        
    }

}