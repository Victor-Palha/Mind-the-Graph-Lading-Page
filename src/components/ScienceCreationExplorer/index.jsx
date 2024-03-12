import ExampleImage from '../../assets/head-02.png'
import { ButtonLink } from "../ButtonLink";
import { Header } from "../Header";

export function ScienceCreationExplorer(){
    return (
        <main className='bg-gradient-to-r from-mgOrange to-mgPink'>
            <Header />
            
            <div className='flex justify-around flex-wrap'>

                <section className='flex pt-10 flex-col gap-2'>
                    <p className='text-white text-3xl font-bold max-w-[312px]'>Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.</p>
                    <div className='max-w-[230px] mt-7'>
                    <ButtonLink content="Start creating now"/>
                    </div>
                </section>

                <img
                    className='transform -translate-y-[-30px] transition hover:scale-110 hover:shadow-lg'
                    src={ExampleImage} 
                    alt="" 
                />
            </div>
        </main>
    )
}