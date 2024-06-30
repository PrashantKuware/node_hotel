const express = require('express');
const router = express.Router();
const MenuItem = require('./../mode/menuitems'); // Ensure this path is correct
const { message } = require("statuses");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const tasteType = req.params.taste;
    if (["sweet", "sour", "bitter", "spicy"].includes(tasteType)) {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("Response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const updatedMenuData = req.body;
    const response = await MenuItem.findByIdAndUpdate(menuItemId, updatedMenuData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    console.log('Data updated');
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuItemId);
    if (!response) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    console.log('Data deleted');
    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
