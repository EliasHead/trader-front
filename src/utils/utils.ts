import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = (date: Date) => {
  return format(new Date(date), "dd 'de' MMM 'de' yyyy", {
    locale: ptBR,
  })
}
