import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "..", "db.json");
const data = await fs.readFile(filePath, "utf-8");
export const jsonData = JSON.parse(data);
export async function readFile() {
  try {
    const data = await fs.readFile("db.json", "utf-8"); // db.json dosya adınıza göre güncelleyin
    return JSON.parse(data);
  } catch (error) {
    console.error("Dosya okuma hatası:", error);
    throw error;
  }
}
export const writeFile = async (dbName) => {
  await fs.writeFile(filePath, JSON.stringify(dbName, null, 2), "utf-8");
};
