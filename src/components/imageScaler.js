/**
 * Scales your image (up or down) to the desired width or height
 * @param {[number, number]} sourceDimensions original dimensions [width, height]
 * @param {[number, number]} targetDimensions desired dimensions - leave width or height 0
 * @param {boolean} [scaleToWidth=true] choose to scale to width or height
 * @returns {[number, number]} scaled desired dimensions [width, height]
 */

export function imageScaler(
    sourceDimensions = [0, 0],
    targetDimensions = [0, 0],
    scaleToWidth = true
) {
    let calculatedDimensions;
    const ratio = ratioCalculator(
        sourceDimensions,
        targetDimensions,
        scaleToWidth
    );
    if (scaleToWidth) {
        calculatedDimensions = [
            targetDimensions[0],
            Number.parseInt(sourceDimensions[1] * ratio),
        ];
    } else {
        calculatedDimensions = [
            targetDimensions[1],
            Number.parseInt(sourceDimensions[0] * ratio),
        ];
    }

    return calculatedDimensions;
}

/**
 * Calculates new position based on ratio
 * @param {[number, number]} point point position [x, y]
 * @param {number} ratio ratio according to which position is calculated
 * @returns {[number, number]} new scaled position
 */
export function pointScaler(point, ratio) {
    return [
        Number.parseInt(point[0] * ratio),
        Number.parseInt(point[1] * ratio),
    ];
}

/**
 * Calculates ratio for the desired width or height
 * @param {[number, number]} sourceDimensions original dimensions [width, height]
 * @param {[number, number]} targetDimensions desired dimensions - leave width or height 0
 * @param {boolean} [scaleToWidth=true] choose to scale to width or height
 * @returns {number} calculated float ratio
 */

export function ratioCalculator(
    sourceDimensions = [0, 0],
    targetDimensions = [0, 0],
    scaleToWidth = true
) {
    if (scaleToWidth) {
        console.log("ratio", targetDimensions[0], sourceDimensions[0]);
        return targetDimensions[0] / sourceDimensions[0];
    } else {
        return targetDimensions[1] / sourceDimensions[1];
    }
}
