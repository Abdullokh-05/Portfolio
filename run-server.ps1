# ============================================================
# run-server.ps1 — Local Web Server for Static Files
# Abdullokh Tashpulatov Portfolio
# ============================================================

$port = 3000
$url = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "===============================================" -ForegroundColor Green
    Write-Host "  Web Server is running on: $url" -ForegroundColor Green
    Write-Host "  Press Ctrl+C to stop the server." -ForegroundColor Yellow
    Write-Host "===============================================" -ForegroundColor Green

    # Try to open browser automatically
    Start-Process $url

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") { $urlPath = "/index.html" }

        # Remove leading slash for Join-Path
        $relPath = $urlPath.TrimStart('/')
        $localPath = Join-Path $PSScriptRoot $relPath

        if (Test-Path $localPath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($localPath)
            
            # Content Type Mapping
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = "application/octet-stream"
            
            switch ($ext) {
                ".html" { $contentType = "text/html; charset=utf-8" }
                ".css"  { $contentType = "text/css; charset=utf-8" }
                ".js"   { $contentType = "application/javascript; charset=utf-8" }
                ".json" { $contentType = "application/json; charset=utf-8" }
                ".jpg"  { $contentType = "image/jpeg" }
                ".jpeg" { $contentType = "image/jpeg" }
                ".png"  { $contentType = "image/png" }
                ".gif"  { $contentType = "image/gif" }
                ".svg"  { $contentType = "image/svg+xml" }
                ".ico"  { $contentType = "image/x-icon" }
                ".pdf"  { $contentType = "application/pdf" }
            }

            $response.ContentType = $contentType
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $errorMsg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
            $response.ContentLength64 = $errorMsg.Length
            $response.OutputStream.Write($errorMsg, 0, $errorMsg.Length)
        }
        $response.OutputStream.Close()
    }
}
catch {
    Write-Host "Error starting server: $_" -ForegroundColor Red
}
finally {
    $listener.Stop()
}
