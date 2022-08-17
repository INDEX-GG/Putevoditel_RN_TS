import React from "react";
import { decode, encode } from "base-64";

const DecodeInit = () => {
  if (!global.btoa) {
    global.btoa = encode;
  }

  if (!global.atob) {
    global.atob = decode;
  }

  return null;
};

export default DecodeInit;
