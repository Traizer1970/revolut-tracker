import { supabase } from '../lib/supabase'

export default async function Home() {
  const { data: transactions } = await supabase
    .from('transactions')
    .select('*')
    .order('date', { ascending: false })

  return (
    
      
        O Meu Tracker
        
        
          {transactions?.map((t) => (
            
              
                {t.description}
                {t.category}
              
              
                -{t.amount} {t.currency}
              
            
          ))}

          {transactions?.length === 0 && (
            Nenhuma transação encontrada.
          )}
        
      
    
  )
}