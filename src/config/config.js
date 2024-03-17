const config = {
  appWriteUrl: String(import.meta.env.VITE_APP_APPWRITE_ENDPOINT),
  projectId: String(import.meta.env.VITE_APP_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_APP_DATABASE_ID),
  collectionId: String(import.meta.env.VITE_APP_COLLECTION_ID),
  buketId: String(import.meta.env.VITE_APP_BUKET_ID),
};

export default config;
