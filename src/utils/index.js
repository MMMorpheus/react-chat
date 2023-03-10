import { isToday, formatDistanceToNow, format } from 'date-fns'
import { ru } from "date-fns/locale";

export const formatTime = (created_at) => {
    if(isToday(created_at)){
        return formatDistanceToNow(created_at, { addSuffix: true, locale: ru })
    } else {
        return format(created_at, 'dd.MM.yy', {locale: ru})
    }
}