import { createClient } from "microcms-js-sdk";

//.envファイルを無邪気に呼ぶと返ってくる型がstring | undefinedになる
//undifinedならerrorを呼ぶ処理を作ってstringを保証する
function getEnvVar(key: string) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not defined.`);
  }
  return value;
}

const myDomain = getEnvVar("MY_DOMAIN");
const apiKey = getEnvVar("API_KEY");

export const client = createClient({
  serviceDomain: myDomain,
  apiKey: apiKey,
});
