/*--------------------
Get Piramidal Index
--------------------*/

import { Event, Object3D } from "three"

// Returns an array of decreasing index values in a pyramid shape, starting from the specified index with the highest value. These indices are often used to create overlapping effects among elements.
export const getPiramidalIndex = (
    array: Array<Object3D<Event>>,
    index: number
) =>
    array.map((_, i) =>
        index === i ? array.length : array.length - Math.abs(index - i)
    )

export default getPiramidalIndex
