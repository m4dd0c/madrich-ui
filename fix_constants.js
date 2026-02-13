const fs = require("fs");
let c = fs.readFileSync("d:/madrich/madrich-ui/lib/constants.ts", "utf8");

// Find all occurrences of double-backslash before backtick or dollar
// In the file, the literal characters are: \ \ ` and \ \ $
// We want: \ ` and \ $
const oldChars = [
  { old: String.fromCharCode(92, 92, 96), rep: String.fromCharCode(92, 96) }, // \\` -> \`
  { old: String.fromCharCode(92, 92, 36), rep: String.fromCharCode(92, 36) }, // \\$ -> \$
];

for (const { old, rep } of oldChars) {
  const count = c.split(old).length - 1;
  console.log(`Found ${count} occurrences of ${JSON.stringify(old)}`);
  c = c.split(old).join(rep);
}

fs.writeFileSync("d:/madrich/madrich-ui/lib/constants.ts", c);
console.log("Done");

// Verify
const verify = fs.readFileSync(
  "d:/madrich/madrich-ui/lib/constants.ts",
  "utf8",
);
const lines = verify.split("\n");
for (let i = 1148; i < 1185; i++) {
  if (lines[i] && (lines[i].includes("value") || lines[i].includes("`"))) {
    console.log(i + 1 + ": " + JSON.stringify(lines[i]));
  }
}
