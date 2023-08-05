export const matchMediaScreen = {
    large: "(min-width: 1024px)",
    small: "(max-width: 1023px)",
}

export const stDefaultOptions = (
    element: HTMLElement | string,
    markers = false,
    start = "top",
    end = "bottom"
) => {
    return {
        trigger: element,
        scrub: 0.6,
        markers: markers,
        start: () => start,
        end: () => end,
        invalidateOnRefresh: true,
        preventOverlaps: true,
        fastScrollEnd: true,
    }
}

export const stAutoOptions = (
    element: HTMLElement | string | null,
    start = "top+=50% bottom",
    end = "bottom top",
    markers = false
) => {
    return {
        trigger: element,
        markers: markers,
        start: () => start,
        end: () => end,
        invalidateOnRefresh: true,
        preventOverlaps: true,
        fastScrollEnd: true,
    }
}

export const tlDefaults = {
    ease: "power1.out",
    duration: 1.25,
}

export const tlAuto = {
    ease: "power1.inOut",
    duration: 0.5,
}
