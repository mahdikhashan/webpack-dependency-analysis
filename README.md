# webpack-dependency-analysis

This project provides tools to analyze and visualize the dependency graph of your JavaScript code.

## Installation

To install the necessary packages, run:

```bash
npm install
```

### Install Graphviz

This project requires Graphviz for generating visual representations of the graphs. Install Graphviz using the following instructions:

- **macOS**: 
  ```bash
  brew install graphviz
  ```

- **Windows**: Download and install from the [Graphviz website](https://graphviz.org/download/).

- **Linux**: 
  ```bash
  sudo apt-get install graphviz
  ```

## Usage

### Generate Project Dependency Graph

To generate a sample graph of the entire project, use:

```bash
npm run graph
```

### Generate Example Graph with Circular Dependency

To generate a sample graph of the example source code which has a circular dependency, use:

```bash
npm run example
```
