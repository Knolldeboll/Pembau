import React, { useEffect, useRef, useState } from "react"

interface CarouselProps {
    images: string[];
}

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

    return (
        <div className="carousel">
            <div
                style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    height: "10%",
                    alignContent: "center"
                }}
                onClick={scrollLeft}
            >
                LEFT
            </div>
            <div
                style={{
                    position: "absolute",
                    right: "0",
                    top: "50%",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    height: "10%",
                    alignContent: "center"
                }}
                onClick={scrollRight}
            >
                RIGHT
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