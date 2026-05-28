$ErrorActionPreference = "Stop"

Write-Host "Checking latest Node.js LTS from nodejs.org..."
$index = Invoke-RestMethod -Uri "https://nodejs.org/dist/index.json"
$latestLts = $index |
  Where-Object { $_.lts -ne $false -and $_.files -contains "win-x64-msi" } |
  Select-Object -First 1

if (-not $latestLts) {
  throw "No Windows x64 LTS installer was found."
}

$version = $latestLts.version
$msiName = "node-$version-x64.msi"
$url = "https://nodejs.org/dist/$version/$msiName"
$downloadPath = Join-Path $env:TEMP $msiName

Write-Host "Downloading $url"
Invoke-WebRequest -Uri $url -OutFile $downloadPath

Write-Host "Installing Node.js $version. Administrator permission may be required."
Start-Process msiexec.exe -ArgumentList @("/i", $downloadPath, "/qn", "/norestart") -Wait

Write-Host "Done. Close and reopen PowerShell, then run:"
Write-Host "  node -v"
Write-Host "  npm -v"
