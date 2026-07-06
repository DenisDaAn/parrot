import { useEffect, useRef } from "react";

export default function AnimatedWaves() {
    const ref = useRef<SVGSVGElement | null>(null);
    const timeRef = useRef(0);

    useEffect(() => {
        let frame: number;

        const animate = () => {
            timeRef.current += 0.02;

            const svg = ref.current;
            if (!svg) {
                frame = requestAnimationFrame(animate);
                return;
            }

            const paths = svg.querySelectorAll("path");

            paths.forEach((path, index) => {
                const baseY = 70 + index * 8;
                const amplitude = 6 + index * 2;
                const speed = 1 + index * 0.3;

                let d = "";

                for (let x = 0; x <= 500; x += 8) {

                    const y =
                        baseY +
                        Math.sin(x * 0.02 + timeRef.current * speed) * amplitude +
                        Math.cos(x * 0.015 + timeRef.current * speed * 0.8) * (amplitude * 0.5);

                    d += `${x === 0 ? "M" : "L"} ${x} ${y} `;
                }

                path.setAttribute("d", d);
            });

            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <svg
            ref={ref}
            className="waves"
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
        >
            <path fill="none" stroke="currentColor" strokeWidth="2" opacity="0.16" />
            <path fill="none" stroke="currentColor" strokeWidth="2" opacity="0.10" />
            <path fill="none" stroke="currentColor" strokeWidth="2" opacity="0.06" />
        </svg>
    );
}