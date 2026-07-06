
export default function PriceModal({ open, onClose }) {
    if (!open) return null;

    return (
        <>
            <div className="backdrop" onClick={onClose} />

            <div className="price-modal">

                <div className="price-header">
                    <h2>Прайс-лист</h2>
                    <button onClick={onClose}>✕</button>
                </div>

                <div className="price-list">

                    <div>Диагностика — от 1500 ₽</div>
                    <div>Ремонт стартера — от 5000 ₽</div>
                    <div>Ремонт двигателя — от 25000 ₽</div>
                    <div>Ремонт КПП — от 18000 ₽</div>
                    <div>Гидравлика — от 7000 ₽</div>

                </div>

            </div>
        </>
    );
}