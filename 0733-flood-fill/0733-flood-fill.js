/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const startColor = image[sr][sc];

    if (startColor === color) return image
    function coloring( x, y ) {
        if (x < 0 || x >= image.length || y < 0 || y >= image[0].length || image[x][y] !== startColor) {
            return;
        }
        image[x][y] = color;

        coloring(x + 1, y)
        coloring(x - 1, y)
        coloring(x, y + 1)
        coloring(x, y - 1)
    }

    coloring(sr, sc)
    return image
};