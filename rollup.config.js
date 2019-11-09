import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import typescript from "rollup-plugin-typescript";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "app/index.tsx",
  output: [
    {
      file: "public/bundle.js",
      format: "esm",
      name: "app",
      sourcemap: true
    }
  ],
  plugins: [
    nodeResolve({ mainFields: ["browser", "main", "module"] }),
    commonjs({
      include: "node_modules/**",
      namedExports: { react: ["Component"] }
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      )
    }),
    typescript()
  ]
};
