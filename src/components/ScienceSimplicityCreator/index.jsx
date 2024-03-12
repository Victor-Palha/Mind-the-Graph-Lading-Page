import IconDrag from '../../assets/ico_drag.svg'
import IconPremade from '../../assets/ico_premade.svg'
import IconPlatform from '../../assets/ico_platform.svg'
import IconOdemand from '../../assets/ico_odemand.svg'
import IconMultiple from '../../assets/ico_multiple.svg'
import IconShare from '../../assets/ico_share.svg'
import { InfoIcon } from '../InfoIcon'
import { ButtonLink } from '../ButtonLink'

export function ScienceSimplicityCreator(){
    return (
        <section 
            className="
                mt-16 rounded-2xl bg-mgPurpleDark shadow-lg mx-2 px-2 py-20 text-center text-white mb-32
                md:mx-20 md:rounded-lg md:px-20
                lg:mx-40 lg:px-32
            "
        >
            <h2 className='font-bold text-2xl md:text-4xl mb-14'>Create effective science figures in minutes</h2>
            <p className='text-base md:text-lg mb-24'>We built Mind the Graph for simplicity. The platform is easy to use and just about anybody can use it to create great infographics and presentations - from beginners to professionals, individuals to groups and small labs to large organisations</p>
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
    )
}