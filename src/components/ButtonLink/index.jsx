/**
 * @param {string} color
 * @param {string} backgroundColor  
 * @param {string} content
 * @param {string} target
 */


export function ButtonLink({backgroundColor = "transparent", content, target = "#"}){
    return (
        <a href={target} 
            className={backgroundColor != "transparent" ? 
                `flex items-center bg-${backgroundColor} px-5 py-3 rounded-3xl` : 
                "flex items-center border-[1px] border-white px-5 py-3 rounded-3xl"
        }>
            <span className="w-full text-white font-bold text-center">
                {content}
            </span>
        </a>
    )
}