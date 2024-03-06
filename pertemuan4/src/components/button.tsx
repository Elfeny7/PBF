export default function Tombol_1() {
    function handleClick() {
        alert('Tombol telah ditekan')
    }

    function handleMouseOver() {
        alert('Eits, mau pencet tombol ya?')
    }

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" onClick={handleClick} onMouseLeave={() => { alert('Loh, kok sudah pergi') }}>
            Ini tombol
        </button>
    );
}

export function Tombol_2({ isiPesan, namaTombol }: any) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>
    );
}

export function Tombol_3({ isiPesan, namaTombol }: any) {
    return (
        <button className="bg-green-500 hover:bg-green-700 text-white p-2 rounded"
        onClick={(e) => {e.stopPropagation(); alert(isiPesan)}}>
            {namaTombol}
        </button>
    );
}