/**
 * @param {string} image - The image path
 * @param {string} title - The title of the icon
 * @param {string} description - The description of the icon
 * @param {string} targetInfo - The target Link of the button
 */
export function InfoGroup({image, title, description, targetInfo}){
    return(
        <article className="max-w-[310px] flex flex-col gap-3 justify-center items-center text-center">
            <img src={image}/>
            <p className="font-bold text-mgPurpleLight ">{title}</p>
            <span className="text-mgBlack font-medium ">{description}</span>

            <a
                className="mt-16 cursor-pointer text-mgPurpleDark font-bold text-sm uppercase" 
                href={targetInfo}
            > &gt; learn more</a>
        </article>
    )
}