const axios = require("axios");
const { apiKey, shopifyApiUrl } = require("../../config/apiConfig");

//Dapatkan Orderan dengan mengambil id customer
getOrders = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ error: "Customer ID is required" });

  const url = `${shopifyApiUrl}customers/${id}/orders.json?status=any&fulfillment_status=any&financial_status=any`;
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Shopify-Access-Token": apiKey,
        "Content-Type": "application/json",
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Mengambil gambar product
getImages = async (req, res) => {
  const { id_product } = req.params;
  if (!id_product)
    return res.status(400).json({ error: "Product ID is required" });
  const url = `${shopifyApiUrl}products/${id_product}/images.json`;
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Shopify-Access-Token": apiKey,
        "Content-Type": "application/json",
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }

};

module.exports = { getOrders , getImages};
