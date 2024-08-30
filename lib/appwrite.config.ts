import * as sdk from "node-appwrite";

export const {
  APP_WRITE_PROJECT_ID,
  APP_WRITE_API_KEY,
  APP_WRITE_DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client()
  .setEndpoint(ENDPOINT!) // Your API Endpoint
  .setProject(APP_WRITE_PROJECT_ID!) // Your project ID
  .setKey(APP_WRITE_API_KEY!); // Your secret API key

// client.setEndpoint(ENDPOINT!).setProject(APP_WRITE_PROJECT_ID!).setKey(APP_WRITE_API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
