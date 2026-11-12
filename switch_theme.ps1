param (
    [Parameter(Mandatory=$true)]
    [ValidateSet('v1', 'v2', 'v3', 'v4', 'v5', 'v6')]
    [string]$Version
)

$targetFolder = ""

switch ($Version) {
    'v1' { $targetFolder = "v1_bland" }
    'v2' { $targetFolder = "v2_dark_luxe" }
    'v3' { $targetFolder = "v3_royal_italian" }
    'v4' { $targetFolder = "v4_marble_cream" }
    'v5' { $targetFolder = "v5_imperial_depth" }
    'v6' { $targetFolder = "v6_imperial_marble_bg" }
}

Write-Host "Switching active site to $targetFolder..." -ForegroundColor Cyan

# Copy the app and components folders from the backup to the active directory
Copy-Item -Path "$targetFolder\app\*" -Destination "app\" -Recurse -Force
Copy-Item -Path "$targetFolder\components\*" -Destination "components\" -Recurse -Force

Write-Host "Done! The Next.js development server should automatically hot-reload the new theme." -ForegroundColor Green
Write-Host "If it doesn't refresh automatically, just reload your browser at http://localhost:3000" -ForegroundColor Yellow
