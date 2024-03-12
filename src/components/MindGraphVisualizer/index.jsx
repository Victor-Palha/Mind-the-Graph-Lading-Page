import ImageInfo1 from '../../assets/image_1.svg'
import ImageInfo2 from '../../assets/image_2.svg'
import ImageInfo3 from '../../assets/image_3.svg'
import { InfoGroup } from '../InfoGroup'

export function MindGraphVisualizer(){
    return (
        <section className='flex flex-col justify-center items-center px-10 md:px-40 py-28'>
            <h2 className='font-bold text-xl md:text-2xl text-mgPurpleLight '>Visualize what Mind the Graph can do for you</h2>
            
            <div className='flex gap-20 justify-center items-center mt-24 flex-wrap md:flex-nowrap'>
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
    )
}