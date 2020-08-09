const { exec, fork, spawn, execSync, spawnSync } = require("child_process");
const fs = require("fs");
const uuid = require("uuid");

const handleJavaScript = (code, res) => {
  let user = uuid.v4();
  // create folder
  try {
    fs.mkdirSync(`./code/${user}`);
  } catch (err) {
    res.json({ err: "directory exists. Please try again..." });
  }
  // write code into temp.py file and ./code/python/docker file into docker file
  fs.writeFileSync(`./code/${user}/temp.js`, code);
  let docker = fs.readFileSync("./docker/javascript/dockerfile");
  fs.writeFileSync(`./code/${user}/dockerfile`, docker);

  let response = { err: "", stderr: "", stdout: "" };

  exec(`docker build -t ${user} ./code/${user}/`, (err, stdout, stderr) => {
    if (err) response.err = "Unable to build docker image...";
    else if (stderr) {
      response.stderr = stderr;
      console.log("no", err);
    } else {
      let runContainer = spawn(`docker run --name ${user} ${user}`, [], {
        shell: true,
      });

      runContainer.stdout.on("data", (data) => {
        response.stdout += data.toString();
        console.log(response);
      });

      runContainer.stderr.on("data", (data) => {
        response.stderr += data;
        console.log(data);
      });
      runContainer.on("exit", () => {
        console.log("exited");
        runContainer = undefined;

        res.json(response);
        execSync(`docker rmi ${user} -f`);
        // cleanup code remove folder structure
        fs.unlinkSync(`./code/${user}/dockerfile`);
        fs.unlinkSync(`./code/${user}/temp.js`);
        fs.rmdir(`./code/${user}`, (err) => {
          if (err) console.log(err);
        });
      });

      runContainer.on("error", (err) => {
        response.err = "Unable to start docker Image";
        console.log(err);
      });

      setTimeout(() => {
        if (runContainer) {
          runContainer.kill();
          // kill using container name
          execSync(`docker kill ${user}`);
          response.stdout =
            "<p>Process Time Out...\nProgram will run forever</p>";
        }
      }, 8000);
    }
  });
};

module.exports = handleJavaScript;
