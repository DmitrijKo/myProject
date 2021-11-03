import express from "express";
import {
  deleteOne,
  getAll,
  getOne,
  insertOne,
  updateOne,
} from "./db/islaiduTipai.js";
import { PermissionDenied } from "./db/PermissionDenied.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  res.set("Content-Type", "text/html; charset=utf8");
  try {
    const records = await getAll(req.session?.userId);
    res.render("islaiduTipai", {
      title: "Išlaidų tipai",
      tipai: records,
    });
  } catch (err) {
    if (err instanceof PermissionDenied) {
      // rodau klaida apie draudimus
      res.status(500).end(`Tau drauziama atlikti sita veiksma`);
    } else {
      // rodau klaida apie blogai veikiancia DB
      res.status(500).end(`Įvyko klaida: ${err.message}`);
    }
  }
});

router.get("/edit/:id?", async (req, res) => {
  res.set("Content-Type", "text/html; charset=utf8");
  if (req.params.id) {
    try {
      const tipas = await getOne(req.session?.userId, req.params.id);
      if (tipas) {
        res.render("islaiduTipas", {
          title: "Redaguojam išlaidų tipą",
          tipas,
        });
      } else {
        res.redirect("/islaiduTipai");
      }
    } catch (err) {
      res.status(500).end(`Įvyko klaida: ${err.message}`);
    }
  } else {
    res.render("islaiduTipas", {
      title: "Kuriam išlaidų tipą",
    });
  }
});

router.post("/save", async (req, res) => {
  res.set("Content-Type", "text/html; charset=utf8");
  try {
    let record;
    if (req.body.id) {
      record = await updateOne(req.session?.userId, req.body.id, req.body.pavadinimas);
    } else {
      record = await insertOne(req.session?.userId, req.body.pavadinimas);
    }
    res.redirect("/islaiduTipai");
  } catch (err) {
    res.status(500).end(`Įvyko klaida: ${err.message}`);
  }
});

router.get("/delete/:id", async (req, res) => {
  res.set("Content-Type", "text/html; charset=utf8");
  try {
    const record = await deleteOne(req.session?.userId, req.params.id);
    res.redirect("/islaiduTipai");
  } catch (err) {
    res.status(500).end(`Įvyko klaida: ${err.message}`);
  }
});
