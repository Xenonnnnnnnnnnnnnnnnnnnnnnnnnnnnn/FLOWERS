const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // You can change the port number if needed

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
