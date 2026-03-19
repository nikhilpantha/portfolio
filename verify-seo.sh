#!/bin/bash
# SEO Verification Script for nikhilpantha.com.np

echo "🔍 Verifying SEO Setup for Nikhil Pantha Portfolio..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: robots.txt
echo -n "Checking robots.txt... "
if [ -f "public/robots.txt" ]; then
    echo -e "${GREEN}✅ EXISTS${NC}"
    echo "   Content preview:"
    head -5 public/robots.txt | sed 's/^/   /'
else
    echo -e "${RED}❌ MISSING${NC}"
fi
echo ""

# Check 2: sitemap.xml
echo -n "Checking sitemap.xml... "
if [ -f "public/sitemap.xml" ]; then
    echo -e "${GREEN}✅ EXISTS${NC}"
    grep -c "<url>" public/sitemap.xml | xargs -I {} echo "   URLs in sitemap: {}"
else
    echo -e "${RED}❌ MISSING${NC}"
fi
echo ""

# Check 3: metadata configuration
echo -n "Checking metadata.ts... "
if [ -f "src/config/metadata.ts" ]; then
    echo -e "${GREEN}✅ EXISTS${NC}"
    keywords_count=$(grep -c "\"" src/config/metadata.ts)
    echo "   Keywords configured: $(grep -o '\"' src/config/metadata.ts | wc -l)"
else
    echo -e "${RED}❌ MISSING${NC}"
fi
echo ""

# Check 4: jsonld configurations
echo -n "Checking jsonld.ts... "
if [ -f "src/app/jsonld.ts" ]; then
    echo -e "${GREEN}✅ EXISTS${NC}"
    schemas=$(grep -o "generateSchema" src/app/jsonld.ts | wc -l)
    echo "   Schema functions: $schemas"
else
    echo -e "${RED}❌ MISSING${NC}"
fi
echo ""

# Check 5: layout.tsx
echo -n "Checking layout.tsx for metadata... "
if grep -q "metadataBase" src/app/layout.tsx; then
    echo -e "${GREEN}✅ CONFIGURED${NC}"
else
    echo -e "${RED}❌ NOT CONFIGURED${NC}"
fi
echo ""

# Check 6: OG Images
echo -n "Checking Open Graph images... "
if [ -f "public/og-image.jpg" ]; then
    echo -e "${GREEN}✅ og-image.jpg EXISTS${NC}"
else
    echo -e "${YELLOW}⚠️  og-image.jpg MISSING (CREATE THIS!)${NC}"
fi

if [ -f "public/og-image-square.jpg" ]; then
    echo -e "${GREEN}✅ og-image-square.jpg EXISTS${NC}"
else
    echo -e "${YELLOW}⚠️  og-image-square.jpg MISSING (CREATE THIS!)${NC}"
fi
echo ""

# Check 7: Favicon
echo -n "Checking favicon... "
if [ -f "public/favicon.ico" ]; then
    echo -e "${GREEN}✅ EXISTS${NC}"
else
    echo -e "${YELLOW}⚠️  MISSING (recommended)${NC}"
fi
echo ""

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}SEO Setup Verification Complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Next Steps:"
echo "  1. Create og-image.jpg (1200x630px)"
echo "  2. Create og-image-square.jpg (500x500px)"
echo "  3. Submit to Google Search Console"
echo "  4. Update social media links in jsonld.ts"
echo "  5. Monitor rankings weekly"
echo ""
echo "🚀 Your portfolio is ready for SEO success!"
