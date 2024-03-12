import { Header } from './components/Header'
import ExampleImage from './assets/head-02.png'
import './global.css'
import { ButtonLink } from './components/ButtonLink'

export function App(){
  return (
    <>
      <main className='bg-gradient-to-r from-mgOrange to-mgPink'>
        <Header />
        <div className='flex justify-around'>

          <section className='flex pt-10 flex-col gap-2'>
            <p className='text-white text-3xl font-bold max-w-[312px]'>Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.</p>
            <div className='max-w-[230px] mt-7'>
              <ButtonLink content="Start creating now" backgroundColor="mgPurpleLight"/>
            </div>
          </section>

          <img
            src={ExampleImage} 
            alt="" 
          />
        </div>
      </main>
    </>
  )
}