export function ChatIcon() {
    return (
        <svg viewBox="0 0 24 24" className="icon-svg chat-svg">
            <path
                d="M4 5.5C4 4.12 5.12 3 6.5 3h11C18.88 3 20 4.12 20 5.5v7c0 1.38-1.12 2.5-2.5 2.5H10l-4.5 3v-3H6.5C5.12 15 4 13.88 4 12.5v-7Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />

            <circle className="dot dot1" cx="9" cy="10" r="1.2" />
            <circle className="dot dot2" cx="12" cy="10" r="1.2" />
            <circle className="dot dot3" cx="15" cy="10" r="1.2" />
        </svg>
    );
}