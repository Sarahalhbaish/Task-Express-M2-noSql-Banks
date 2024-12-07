let accounts = require("../../accounts");
const Task = require("../../models/Task");

exports.accountCreate = async (req, res) => {
  const newAccount = await Task.create(req.body);
  res.status(201).json(newAccount);
};

exports.accountDelete = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = Task.findById(accountId);
    if (foundAccount) {
      await Task.deleteOne(foundAccount);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.accountUpdate = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = Task.findById(accountId);
    if (foundAccount) {
      await Task.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.accountsGet = async (req, res) => {
  const accounts = await Task.find();
  res.json(accounts);
};

exports.getAccountByUsername = (req, res) => {
  const { username } = req.params;
  const foundAccount = accounts.find(
    (account) => account.username === username
  );
  if (req.query.currency === "usd") {
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    res.status(201).json(accountInUsd);
  }
  res.status(201).json(foundAccount);
};
