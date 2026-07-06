export function DocumentIcon() {
    return (
        <svg viewBox="0 0 24 24" className="icon-svg doc-svg">

            <path
                d="M7 3h7l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2  Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />

            <path
                d="M14 3v4h4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />

            <line className="line line1" x1="8" y1="10" x2="16" y2="10" />
            <line className="line line2" x1="8" y1="13" x2="16" y2="13" />
            <line className="line line3" x1="8" y1="16" x2="14" y2="16" />
        </svg>
    );
}