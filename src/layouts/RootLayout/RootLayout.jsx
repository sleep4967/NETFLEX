import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

function RootLayout({currentUser}) {
  return (
    <body className="m-0 text-white">
      <div className="bg-black min-h-[100vh]">
      <Header currentUser={currentUser}/>
      <Outlet/>
    </div>
    </body>
  )
}

export default RootLayout