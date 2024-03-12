import './global.css'
import ExampleImage from './assets/head-02.png'
import ImageInfo1 from './assets/image_1.svg'
import ImageInfo2 from './assets/image_2.svg'
import ImageInfo3 from './assets/image_3.svg'
import IconDrag from './assets/ico_drag.svg'
import IconPremade from './assets/ico_premade.svg'
import IconPlatform from './assets/ico_platform.svg'
import IconOdemand from './assets/ico_odemand.svg'
import IconMultiple from './assets/ico_multiple.svg'
import IconShare from './assets/ico_share.svg'

import { Header } from './components/Header'
import { ButtonLink } from './components/ButtonLink'
import { InfoGroup } from './components/InfoGroup'
import { InfoIcon } from './components/InfoIcon'

export function App(){
  return (
    <>
      <main className='bg-gradient-to-r from-mgOrange to-mgPink'>
        <Header />
        <div className='flex justify-around'>

          <section className='flex pt-10 flex-col gap-2'>
            <p className='text-white text-3xl font-bold max-w-[312px]'>Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.</p>
            <div className='max-w-[230px] mt-7'>
              <ButtonLink content="Start creating now"/>
            </div>
          </section>

          <img
            className='transform -translate-y-[-30px]'
            src={ExampleImage} 
            alt="" 
          />
        </div>
      </main>
      <section className='flex flex-col justify-center items-center px-40 py-28'>
        <h2 className='font-bold text-2xl text-mgPurpleLight '>Visualize what Mind the Graph can do for you</h2>
        
        <div className='flex gap-20 mt-24'>
          <InfoGroup 
            image={ImageInfo2}
            title="Graphical Abstracts and Infographics"
            description="Improve your papers’ impact and visibility through quality visual communication"
            targetInfo="#"
          />
          <InfoGroup 
            image={ImageInfo3}
            title="Scientific Poster in a few clicks"
            description="Add visual impact to your posters with scientific  illustrations and graphics"
            targetInfo="#"
          />
          <InfoGroup 
            image={ImageInfo1}
            title="Make better Slide Presentation"
            description="Transform your lectures, meetings and classes into high-impact visual experiences"
            targetInfo="#"
          />
        </div>
      </section>

      <section className='mt-16 rounded-2xl bg-mgPurpleDark mx-40 px-32 py-20 text-center text-white mb-32'>
        <h2 className='font-bold text-4xl mb-14'>Create effective science figures in minutes</h2>
        <p className='text-lg mb-24'>We built Mind the Graph for simplicity. The platform is easy to use and just about anybody can use it to create great infographics and presentations - from beginners to professionals, individuals to groups and small labs to large organisations</p>
        <div className='flex justify-center gap-28 flex-wrap'>
          <InfoIcon image={IconDrag} title="Drag and Drop" description="Easily select and manage illustrations, text and templates"/>
          <InfoIcon image={IconPremade} title="Pre-Made Resources" description="Don’t waste time! Use our templates and just customize colours, text etc"/>
          <InfoIcon image={IconPlatform} title="Online Platform" description="Access your creations at any time and from anywhere"/>
          <InfoIcon image={IconOdemand} title="On-demand Illustrations" description="Don’t find exactly what you need? We will design it for you!"/>
          <InfoIcon image={IconMultiple} title="Multiple Sizing Options" description="Ready-to-go templates in all popular sizes"/>
          <InfoIcon image={IconShare} title="Share creations" description="Share your creations with your team or other users"/>
        </div>
        <div className='mt-14 w-full flex justify-center'>
          <ButtonLink
            content="EXPLORE MIND THE GRAPH" 
            backgroundColor="transparent"
          />
        </div>
      </section>
    </>
  )
}