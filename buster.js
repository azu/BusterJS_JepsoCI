var config = module.exports;

config["My tests"] = {
    environment: "browser",        // or "node"
    sources: [
        "src/*.js" // Paths are relative to config file
    ],
    tests: [
        "tests/*-test.js"
    ]
};