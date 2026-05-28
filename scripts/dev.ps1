$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$workspaceRoot = Split-Path -Parent $projectRoot
$nodeRoot = Join-Path $workspaceRoot ".tools\node"
$nodeBin = Get-ChildItem -Path $nodeRoot -Directory -Filter "node-*-win-x64" |
  Sort-Object Name -Descending |
  Select-Object -First 1

if (-not $nodeBin) {
  throw "Portable Node.js was not found. Run .\scripts\install-node-lts.ps1 first."
}

$env:Path = "$($nodeBin.FullName);$env:Path"
Set-Location $projectRoot
npm run dev
