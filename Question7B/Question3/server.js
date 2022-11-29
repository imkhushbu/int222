const http = require("http");
const PORT = 3001;

const server = http.createServer((req, res) => {
  console.log(`App is running on Port : ${PORT}`);
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Feedback Form</title>
    </head>
    <body>
    <form action="">
    <input placeholder="Enter your name" type="text" required/><br><br>
    <input placeholder="Enter your contact number" type="text" required/><br><br>
    <textarea rows="10" cols="35" placeholder="Enter your feedback"></textarea>
    <br><br>
    <button type="submit" id="sub">Submit</button>
    </form>
    <script>
        document.querySelector("form").addEventListener("submit", (event)=>{
        window.alert("Thank you for your feedback.");
        event.preventDefault();
    });
    </script>
    </body>
    </html>
    `);
});

server.listen(PORT);
