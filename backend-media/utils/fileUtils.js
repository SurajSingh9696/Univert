const path = require('path');
const { v4: uuidv4 } = require('uuid');

const generateOutputPath = (inputPath, outputFormat, outputDir) => {
    const baseName = path.basename(inputPath, path.extname(inputPath));
    const uniqueId = uuidv4().substring(0, 8);
    return path.join(outputDir, `${baseName}_${uniqueId}.${outputFormat}`);
};

module.exports = {
    generateOutputPath
};
