import { merge } from "webpack-merge"
import commonMod from "./rollup.node.common.config.mjs"


export default merge(commonMod, {
  input: 'app/src/xtring.ts',
  output: {
    file: 'app/dist/cjs/xtring.js',
    format: 'cjs'
  },
})