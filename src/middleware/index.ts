import {
  corsHandler,
  bodyRequestParserHandler,
  compressionHandler,
} from "./common";

export default [corsHandler, bodyRequestParserHandler, compressionHandler];
