function runGobLang() {
  const code = document.getElementById("code").value;
  const outputDiv = document.getElementById("output");

  try {
    const lines = code.split("\n");
    const output = [];
    const variables = {};

    for (let line of lines) {
      line = line.trim();

      if (!line) {
        continue;
      }

      if (line.includes("=")) {
        const [rawVarName, rawValue] = line.split("=");
        const varName = rawVarName.trim();
        const value = rawValue.trim();
        variables[varName] = Number.isNaN(Number(value))
          ? value.replace(/["']/g, "")
          : Number(value);
      } else if (line.startsWith("shout")) {
        const message = line.replace("shout", "").trim();
        if (Object.hasOwn(variables, message)) {
          output.push(String(variables[message]));
        } else {
          output.push(message.replace(/["']/g, ""));
        }
      }
    }

    outputDiv.innerHTML = `<strong>Output:</strong><br>${output.join("<br>")}`;
  } catch (error) {
    outputDiv.textContent = `Error: ${error.message}`;
  }
}

document.getElementById("run").addEventListener("click", runGobLang);
