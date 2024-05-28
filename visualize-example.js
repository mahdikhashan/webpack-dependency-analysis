const madge = require('madge');
const fs = require('fs');
const path = require('path');

const projectPath = './example';

// Path where the output file will be saved
const GRAPH_PATH = "./example";
const OUTPUT = 'graph.png';

if (!fs.existsSync(GRAPH_PATH)) {
  fs.mkdirSync(GRAPH_PATH, { recursive: true });
}

(() => {
  madge(projectPath)
  .then((res) => res.image(path.join(GRAPH_PATH, OUTPUT)))
  .then((imgPath) => {
    console.log(imgPath);
  })
})()
