import { Client, Storage, Account } from "appwrite";
import config from "../config/config";

const client = new Client();

export const storage = new Storage(client);
export const account = new Account(client);
client
  .setEndpoint(config.appWriteUrl) // Your API Endpoint
  .setProject(config.projectId); // Your project ID
