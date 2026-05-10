import { createClient } from "tinacms/dist/client";
import { queries } from "./types.ts";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '63ce5c89e2c6bfbc7da575be186ba5ff2c27d542', queries,  });
export default client;
  