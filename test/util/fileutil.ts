import * as fs from "fs";

export function readJson(filePath: string) {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

export function readTestCaseDataFromJSOnFile(filePath: string, testcaseName: string  ) {
    const testData = readJson(filePath);
    return testData[testcaseName];
}