import path, { dirname } from "path";
import { fileURLToPath } from "url";

export default {
  mode: "development",
  entry: "./src/index.ts",
  devtool: false,
  output: {
    path: path.resolve(dirname(fileURLToPath(import.meta.url)), "dist"),
    filename: "index_bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  target: ["web", "es7"],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          projectReferences: true,
        },
      },
    ],
  },
};
