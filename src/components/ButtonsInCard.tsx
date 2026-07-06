import {
    ArrowUpRight,
} from "lucide-react";

import "../styles/serviceCards.css";
import AnimatedWaves from "../components/AnimatedWaves.tsx";
import {ChatIcon} from "../components/ChatIcon.tsx";
import {DocumentIcon} from "@/components/DocumentIcon.tsx";

type Props = {
    onChatOpen: () => void;
    onPriceOpen: () => void;
};

export default function ServiceCards({
                                         onChatOpen,
                                         onPriceOpen,
                                     }: Props) {
    return (
        <div className="service-cards">

            <button
                className="cta-card consultation"
                onClick={onChatOpen}
            >
                <div className="icon-wrap">
                    <ChatIcon/>
                </div>

                <div className="content">
                    <h3>Консультация</h3>

                    <p>
                        Получите консультацию от AI-эксперта
                        прямо сейчас
                    </p>
                </div>

                <div className="arrow">
                    <ArrowUpRight />
                </div>

                <AnimatedWaves />
            </button>

            <button
                className="cta-card price"
                onClick={onPriceOpen}
            >
                <div className="icon-wrap">
                    <DocumentIcon />
                </div>

                <div className="content">
                    <h3>Прайс-лист</h3>

                    <p>
                        Посмотрите актуальные цены
                        на все виды работ
                    </p>
                </div>

                <div className="arrow">
                    <ArrowUpRight />
                </div>

                <AnimatedWaves />
            </button>

        </div>
    );
}