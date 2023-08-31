import Datatables from '@/components/datatables';
import Linegrid from '@/components/linegrid';
import GetData from '@/utils/generateData';


function Home() {
  // Initialization for ES Users
  const arraydata = GetData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-10">
          <Datatables data={arraydata}></Datatables>
          <Linegrid data={arraydata}></Linegrid>
    </main>
  )
}


export default Home