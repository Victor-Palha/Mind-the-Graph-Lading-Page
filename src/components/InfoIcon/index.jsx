/**
 * @param {string} image - The image path
 * @param {string} title - The title of the icon
 * @param {string} description - The description of the icon
 */
export function InfoIcon({image, title, description}){
    return (
        <article className="max-w-[180px] flex flex-col gap-3 text-center items-center text-white">
            <img src={image}/>
            <p className="font-bold text-lg md:text-2xl">{title}</p>
            <span className="text-sm md:text-base">{description}</span>
        </article>
    )
}