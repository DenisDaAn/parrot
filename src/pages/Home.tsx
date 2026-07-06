import { useState } from "react";
import ChatPanel from "@/components/ChatPanel.tsx";
import "@/styles/home.css";
import { NavigationBar } from "@/components/Navbar.tsx";
import InfoHomePage from "../components/InfoHomePage.tsx";

export default function Home() {

    const [chatOpen, setChatOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);

    return (
        <div className="page">

            <NavigationBar />
            <InfoHomePage
                chatOpen={chatOpen}
                setChatOpen={setChatOpen}
                priceOpen={priceOpen}
                setPriceOpen={setPriceOpen}
            />

            <ChatPanel
                open={chatOpen}
                onClose={() => setChatOpen(false)}
            />

        </div>
    );
}