import ServiceCards from "@/components/ButtonsInCard.tsx";

type Props = {
    chatOpen: boolean;
    setChatOpen: (v: boolean) => void;
    priceOpen: boolean;
    setPriceOpen: (v: boolean) => void;
};

export default function InfoHomePage({

                                         setChatOpen,

                                         setPriceOpen,
                                     }: Props) {
    return (
        <section className="hero">

            <div className="hero-content">
                <h1>
                    Ремонт тракторов<br />
                    любой сложности
                </h1>

                <p>
                    Определяем неисправности, считаем стоимость ремонта,
                    подбираем запчасти и даём рекомендации в реальном времени.
                </p>

                <ServiceCards
                    onChatOpen={() => setChatOpen(true)}
                    onPriceOpen={() => setPriceOpen(true)}
                />

            </div>

            <div className="glow" />

        </section>
    );
}