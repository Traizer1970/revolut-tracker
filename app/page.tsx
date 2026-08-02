import { supabase } from '../lib/supabase'

export default async function Home() {
  const { data: transactions } = await supabase
    .from('transactions')
    .select('*')
    .order('date', { ascending: false })

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8 text-black">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">O Meu Tracker</h1>
        
        <div className="space-y-4">
          {transactions?.map((t) => (
            <div key={t.id} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">{t.description}</p>
                <p className="text-sm text-gray-400">{t.category}</p>
              </div>
              <p className="font-bold text-red-500">
                -{t.amount} {t.currency}
              </p>
            </div>
          ))}

          {transactions?.length === 0 && (
            <p className="text-center text-gray-400 mt-10">Nenhuma transação encontrada.</p>
          )}
        </div>
      </div>
    </main>
  )
}