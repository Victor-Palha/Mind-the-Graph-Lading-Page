/**
 * @param {string} backgroundColor - The background color of the button, by default is mgPurpleLight
 * @param {string} content - The content of the button
 * @param {string} target - The target Link of the button
 */


export function ButtonLink({backgroundColor = "mgPurpleLight", content, target = "#"}){
    console.log(backgroundColor)
    return (
        <a href={target} 
            className={
                backgroundColor == "transparent" ? 
                "flex items-center max-w-[300px] border-[1px] border-white px-7 py-3 rounded-3xl" :
                `flex items-center max-w-[300px] bg-mgPurpleLight px-7 py-3 rounded-3xl`
        }>
            <span className="w-full text-white font-bold text-center">
                {content}
            </span>
        </a>
    )
}