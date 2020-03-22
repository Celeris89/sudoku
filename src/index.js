module.exports = function solveSudoku(matrix) {
    if (solve(matrix) == true) {
        return matrix;
    }

    function checkTheSudoku(matrix, row, col, k) {
        for (let i = 0; i < 9; i++) {
            const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const n = 3 * Math.floor(col / 3) + i % 3;
            if (matrix[row][i] == k || matrix[i][col] == k || matrix[m][n] == k) {
                return false;
            }
        }
        return true;
    }


    function solve(matrix) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] === 0) {
                    for (let k = 1; k <= 9; k++) {
                        if (checkTheSudoku(matrix, i, j, k)) {
                            matrix[i][j] = `${k}`;
                            if (solve(matrix)) {
                                return true;
                            } else {
                                matrix[i][j] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
}