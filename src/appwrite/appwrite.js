import { Client, Storage, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("65f6c0197119093af2cf"); // Your project ID

export const storage = new Storage(client);
export const account = new Account(client);
