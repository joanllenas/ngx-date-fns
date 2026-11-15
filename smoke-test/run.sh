#!/usr/bin/env bash
# Creates a new Angular app with SSR, installs the packed library from
# dist/ngx-date-fns, and checks the HTML that the build prerenders.
# Usage: smoke-test/run.sh [angular-version] [date-fns-version]
# Both versions default to "latest". Run `npm run build` first.
# Expects the file layout of Angular 20 or newer (src/app/app.ts).
set -euo pipefail

angular_version="${1:-latest}"
date_fns_version="${2:-latest}"
repo_dir="$(cd "$(dirname "$0")/.." && pwd)"
work_dir="$(mktemp -d)"
export NG_CLI_ANALYTICS=false

echo "Working directory: $work_dir"
npm pack "$repo_dir/dist/ngx-date-fns" --pack-destination "$work_dir"

cd "$work_dir"
npx --yes "@angular/cli@$angular_version" new smoke \
  --defaults --interactive=false --ssr --skip-git --skip-tests --style=css

cd smoke
npm install --save "$work_dir"/ngx-date-fns-*.tgz "date-fns@$date_fns_version"
cp "$repo_dir/smoke-test/app.ts" src/app/app.ts
npx ng build
npm ls @angular/core date-fns ngx-date-fns

html=dist/smoke/browser/index.html
failures=0
expect_text() {
  local id="$1"
  local expected="$2"
  local actual
  actual="$(sed -n -E "s/.*<p id=\"$id\">([^<]*)<\/p>.*/\1/p" "$html" | sed -E 's/^ +| +$//g')"
  if [ "$actual" = "$expected" ]; then
    echo "OK: #$id is \"$actual\""
  else
    echo "FAIL: #$id is \"$actual\", expected \"$expected\""
    failures=$((failures + 1))
  fi
}

expect_text standalone-impure 'domingo 15 noviembre 2026'
expect_text standalone-pure '2026-11-18'
expect_text string-input 'ene 2026'
expect_text date-fns-module '14 días'

if [ "$failures" -gt 0 ]; then
  echo "Smoke test failed. Prerendered HTML: $work_dir/smoke/$html"
  exit 1
fi
echo "Smoke test passed."
