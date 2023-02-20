import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = (date: Date) => {
  return format(new Date(date), 'dd/MM/yyyy', {
    locale: ptBR,
  })
}

export const formatDateString = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy', {
    locale: ptBR,
  })
}
