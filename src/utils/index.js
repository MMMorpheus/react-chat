import { isToday, formatDistanceToNow, format } from 'date-fns'
import { ru } from "date-fns/locale";
import { number } from 'yup';

export const formatTime = (created_at) => {
    if(isToday(created_at)){
        return formatDistanceToNow(created_at, { addSuffix: true, locale: ru })
    } else {
        return format(created_at, 'dd.MM.yy', {locale: ru})
    }
}

export const convertTime = (number) => {
    const mins = Math.floor(number / 60);
    const secs = (number % 60).toFixed();
    return `${ mins < 10 ? "0" : ""}${ mins }:${secs < 10 ? '0' : ""}${ secs }`
}