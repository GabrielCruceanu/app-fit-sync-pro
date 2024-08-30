"use server";
import {
  BUCKET_ID,
  APP_WRITE_DATABASE_ID,
  databases,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  storage,
  users,
  APP_WRITE_PROJECT_ID,
} from "@/lib/appwrite.config";
import { ID, Query } from "node-appwrite";
import { parseStringify } from "@/lib/utils";
import { InputFile } from "node-appwrite/file";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name,
    );

    return parseStringify(newUser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

// GET APPWRITE USER
export const getUser = async (userId: string) => {
  try {
    // Get user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#get
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error("An error occurred while fetching user:", error);
  }
};

// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;
    if (identificationDocument) {
      // Create new file -> https://appwrite.io/docs/references/1.5.x/server-nodejs/storage#create
      const inputFile = InputFile.fromBuffer(
        identificationDocument?.get("blobFile") as Blob,
        identificationDocument?.get("fileName") as string,
      );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    // Create new patient -> https://appwrite.io/docs/references/1.5.x/server-nodejs/database#createDocument
    const newPatient = await databases.createDocument(
      APP_WRITE_DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id || null,
        identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${APP_WRITE_PROJECT_ID}`,
        ...patient,
      },
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while registering a new patient:", error);
  }
};
