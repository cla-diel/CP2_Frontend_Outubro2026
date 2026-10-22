function Card({ titulo, children }) {
    return (
        <article className="flex flex-col items-start gap-7">
            <h2 className="text-2xl font-bold text-letra">{titulo}</h2>
            <div>{children}</div>
        </article>
    )
}
export default Card; 
