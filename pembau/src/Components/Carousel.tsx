import React, { useEffect, useRef, useState } from "react"

interface CarouselProps {
    images: string[];
}


// TODO: Fetch parent's collapse state and render buttons based on that

export const Carousel = ({ images }: CarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Preload images
    useEffect(() => {
        for (let image of images) {
            const img = new Image();
            img.src = image;
        }
    }, [images]);

    const scrollLeft = () => {
        containerRef.current?.scrollBy({
            left: -containerRef.current.offsetWidth,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        containerRef.current?.scrollBy({
            left: containerRef.current.offsetWidth,
            behavior: "smooth"
        });
    };

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        setTouchEnd(e.changedTouches[0].clientX);
        handleSwipe();
    };

    const handleSwipe = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            scrollRight();
        } else if (isRightSwipe) {
            scrollLeft();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    // TODO: svg buttons.
    return (
        <div className="carousel">
            <div
                className="carousel-button"
                style={{
                    left: "2%",

                }}
                onClick={scrollLeft}
            >
                <svg width="100%" height="100%" viewBox="0 0 56 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 51.9614L55.5 -9.72702e-05L55.5 103.923L0 51.9614Z" fill="#C3D9FF" />
                </svg>


            </div>
            <div
                className="carousel-button"
                style={{
                    right: "2%",

                }}
                onClick={scrollRight}
            >
                <svg width="100%" height="100%" viewBox="0 0 56 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.5 51.9614L1.01328e-06 103.923L1.01328e-06 -9.82239e-05L55.5 51.9614Z" fill="#C3D9FF" />
                </svg>

            </div>

            <div
                className="group"
                ref={containerRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((image, index) => (
                    <div className="card" key={index}>
                        <img
                            src={image}
                            className="carousel-image"
                            alt={`slide-${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};