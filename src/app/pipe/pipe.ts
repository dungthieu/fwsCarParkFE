import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PipeComponent {

    convertDate(data: any) {
        return new Date((data).replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    }

    addDateTime(date: any, time: any) {
        date = this.convertDate(date)
        var year = date.getFullYear();
        var month = date.getMonth() + 1; // Jan is 0, dec is 11
        var day = date.getDate();
        var dateString = '' + year + '-' + month + '-' + day;
        var combined = new Date(dateString + ' ' + time);
        return combined;

    }

    validateEmail(email: any) {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
    }

    validateDate(data: any) {
        const rex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return (rex.test(data))
    }
    
    validateTime(data: any) {
        const rex = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
        return rex.test(data)
    }
}