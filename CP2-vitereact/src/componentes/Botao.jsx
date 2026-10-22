import { useState } from "react";

function Botao() {
    const [curtido, setCurtido] = useState(false);
    return (
        <button
            type="button"
            aria-pressed={curtido}
            onClick={() => setCurtido(!curtido)}
            className={`inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-full border border-marca px-5 py-2 font-semibold transition-colors active:scale-95 active:bg-marca-escura active:text-white ${curtido
                ? "bg-marca text-white"
                : "text-marca hover:bg-marca/10"
                }`}
        >
            <span aria-hidden="true">{curtido ? "♥" : "♡"} </span> Votar
        </button>
    );
}
export default Botao;
