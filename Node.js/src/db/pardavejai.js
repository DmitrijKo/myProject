import { ObjectId } from "mongodb";
import { getDb } from "./db.js";
import { checkPermission } from "./sec.js";
import permissions from "../permissions.js";

async function getAll(userId) {
  await checkPermission(userId, permissions.pardavejaiRead);
  const db = await getDb();
  const rows = await db.collection("pardavejai").find({}, {
    sort: {
      pavadinimas: 1,
    },
  }).toArray();
  return rows;
}

async function getOne(userId, _id, nocheck) {
  if (nocheck) {
    await checkPermission(userId, permissions.pardavejaiRead);
  }
  const db = await getDb();
  if (!(_id instanceof ObjectId)) {
    _id = new ObjectId(_id);
  }
  const rows = await db.collection("pardavejai").find({ _id }).toArray();
  if (rows.length > 0) {
    return rows[0];
  }
  return null;
}

async function deleteOne(userId, _id) {
  await checkPermission(userId, permissions.pardavejaiDelete);
  const db = await getDb();
  if (!(_id instanceof ObjectId)) {
    _id = new ObjectId(_id);
  }
  const one = getOne(userId, _id);
  // TODO: ka daryti su egzistuojanciais tipais cekiuose ?
  if (one) {
    await db.collection("pardavejai").deleteOne({ _id });
    return one;
  }
  return null;
}

async function insertOne(userId, pavadinimas) {
  await checkPermission(userId, permissions.pardavejaiInsert);
  if (typeof pavadinimas !== "string" || pavadinimas.trim() === "") {
    return null;
  }
  const db = await getDb();
  const newRecord = {
    pavadinimas,
  };
  await db.collection("pardavejai").insertOne(newRecord);
  return newRecord;
}

async function updateOne(userId, _id, pavadinimas) {
  await checkPermission(userId, permissions.pardavejaiUpdate);
  if (typeof pavadinimas !== "string" || pavadinimas.trim() === "") {
    return null;
  }
  const db = await getDb();
  if (!(_id instanceof ObjectId)) {
    _id = new ObjectId(_id);
  }
  await db.collection("pardavejai").updateOne({ _id }, {
    $set: { pavadinimas },
  });
  return getOne(userId, _id);
}

export { deleteOne, getAll, getOne, insertOne, updateOne };
