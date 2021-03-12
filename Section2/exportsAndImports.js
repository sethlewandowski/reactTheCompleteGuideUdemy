// default exports
const person = {
  name: "Seth",
}
export default person
import whateverYouWantToCallIt from "./filename"

// named export
export const clean = () => {}
export const baseData = 10

// must use exact name or import {clean as cln} from...
import { clean } from "./filename"

// or import * as bundled from ./filename.js
// then bundled.data or bundled.clean
