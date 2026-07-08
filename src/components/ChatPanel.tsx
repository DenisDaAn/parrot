import { useEffect, useRef, useState } from "react";
import "@/styles/ChatPanel.css";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function ChatPanel({ open, onClose }: Props) {

    const [visible, setVisible] = useState(false);
    const [closing, setClosing] = useState(false);

    const sheetRef = useRef<HTMLDivElement | null>(null);

    const startY = useRef(0);
    const currentY = useRef(0);
    const dragging = useRef(false);

    /* ---------------- SYNC OPEN STATE ---------------- */

    useEffect(() => {

        if (open) {
            setVisible(true);
            setClosing(false);
        }

        if (!open && visible) {
            setClosing(true);

            const t = setTimeout(() => {
                setVisible(false);
                setClosing(false);
            }, 280);

            return () => clearTimeout(t);
        }

    }, [open, visible]);

    /* ---------------- DRAG ---------------- */

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        dragging.current = true;
        startY.current = e.clientY;
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragging.current || !sheetRef.current) return;

        currentY.current = e.clientY - startY.current;

        if (currentY.current < 0) currentY.current = 0;

        sheetRef.current.style.transform =
            `translateX(-50%) translateY(${currentY.current}px)`;
    };

    const onPointerUp = () => {
        if (!dragging.current || !sheetRef.current) return;

        dragging.current = false;

        if (currentY.current > 120) {
            onClose();
        } else {
            sheetRef.current.style.transform =
                `translateX(-50%) translateY(0px)`;
        }

        currentY.current = 0;
    };

    if (!visible) return null;

    return (
        <div className={`backdrop ${closing ? "closing" : ""}`} onClick={onClose}>

            <div className="chat-wrap">

                <div
                    ref={sheetRef}
                    className={`chat ${closing ? "closing" : "open"}`}
                    onClick={(e) => e.stopPropagation()}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                >

                    <div className="chat-handle" />

                    <div className="chat-header">
                        Chat
                        <button onClick={onClose}>×</button>
                    </div>

                    <div className="chat-body">
                        ...
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Введите сообщение..."
                        />

                        <button className="send-btn">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22 2L11 13"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M22 2L15 22L11 13L2 9L22 2Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}