interface NpmScriptCommands {
  start: string;
  build: string;
  test: string;
  "start-prod": string;
}

declare function spawnNodeProcess(
  scriptName: keyof NpmScriptCommands = "start",
  args: string[] = [],
  nodeArgs: string[] = [],
): void;
