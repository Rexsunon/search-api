import {
  corsHandler,
  bodyRequestParserHandler,
  compressionHandler,
} from "./common";
import { handleApiDocs } from "./apiDocs";

export default [
  corsHandler,
  bodyRequestParserHandler,
  compressionHandler,
  handleApiDocs,
];
