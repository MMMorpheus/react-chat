import { isToday, formatDistanceToNow, format } from 'date-fns'
import { ru } from "date-fns/locale";
import tinycolor from 'tinycolor2';


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

const isValidRGB = number => {
    if(number > 255) {
        return 255
    }
    if(number < 0) {
        return 0
    }
    return number
}

export const colorGenerator = (hash) => {
    const [r, g, b] = hash.substring(0, 3).split('').map(char => isValidRGB(char.charCodeAt(0)));
    return {
        color: tinycolor({r, g, b}).lighten(10).saturate(30).toHexString(),
        lightColor: tinycolor({r, g, b}).lighten(40).saturate(30).toHexString(),
    }
        
}