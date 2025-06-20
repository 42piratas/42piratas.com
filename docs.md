# **42piratas.com - Project Documentation**

## **Project Overview**

**Website**: https://42piratas.com  
**Owner**: Ânderson Q.  
**Purpose**: Personal portfolio website showcasing creative works, technical projects, and community initiatives  
**Deployment**: GitHub Pages  
**Domain**: Custom domain with SSL certificate

## **Technical Architecture**

### **Core Technologies**

* **HTML5** - Semantic structure with enhanced SEO markup
* **CSS3** - Custom styling with modern reset
* **JavaScript (ES6+)** - Interactive features and accessibility
* **Tailwind CSS** - Utility-first CSS framework (CDN)
* **Font Awesome 6.0** - Icon library (CDN)
* **Google Fonts** - Piazzolla serif font family with local fallbacks

### **File Structure**

```
42piratas.com/
├── CNAME                    # Custom domain configuration
├── archive/                 # Downloadable content (PDFs, EPUBs)
├── assets/
│   ├── css/
│   │   ├── main.css        # Custom styles and responsive design
│   │   └── reset.css       # Modern CSS reset/normalize
│   ├── cursor/             # Custom SVG cursor files
│   │   ├── cursor-click.svg     # Click state cursor
│   │   ├── cursor-default.svg   # Default cursor
│   │   └── cursor-write.svg     # Text input cursor
│   ├── fonts/
│   │   └── piazzolla/      # Local font files (TTF/WOFF2)
│   ├── icons/
│   │   └── fontawesome/    # Local Font Awesome files
│   ├── img/                # Images and graphics
│   ├── js/
│   │   └── main.js         # Interactive features and utilities
│   └── sounds/             # Audio files for interactions
├── index.html              # Main page
├── robots.txt              # Search engine crawling directives
├── safety.pig              # Security configuration
└── sitemap.xml             # Search engine sitemap
```

## **Design System**

### **Color Palette**

* **Primary Orange**: `#C0632E` - Links, hero text, selection background
* **Primary Teal**: `#2EB0C0` - Project box borders, underlines
* **Dark Teal**: `#1E8A9A` - Hover states for borders
* **Yellow Accent**: `#ffe132` - Link highlight background
* **Neutral Black**: `#000000` - Primary text
* **Neutral White**: `#ffffff` - Background
* **Gray Variants**: `#64748b`, `#4b5563` - Secondary text

### **Typography**

* **Font Family**: 'Piazzolla', serif with Google Fonts fallback
* **Hero Text**: 1.6rem (1.3rem mobile, 1.1rem small mobile)
* **Project Titles**: 14px, weight 500, monospace
* **Project Descriptions**: 13px, weight 400, monospace
* **Footer Text**: 0.9rem, weight 400

### **Components**

#### **Project Boxes**

* White background with teal border (`#2EB0C0`)
* 12px border radius
* 20px padding (16px on mobile)
* Hover effects: darker border, subtle shadow
* Monospace font family for content
* Flex layout for consistent height
* Click functionality via data-url attributes

#### **Hero Section**

* 25% image, 75% text layout
* Responsive: stacked on mobile
* Animated GIF background image
* Links with yellow highlight effect

#### **About Overlay**

* Full-screen modal with backdrop blur
* 70% text content, 30% photo layout
* Responsive grid system
* Smooth open/close animations
* Keyboard navigation support

## **SEO Implementation**

### **Enhanced Schema Markup**

* **Person Schema** - Complete profile with alternate names, credentials, and affiliations
* **ItemList Schema** - Structured project portfolio with proper categorization
* **FAQ Schema** - Common questions and answers for better SERP features
* **Creative Work Types** - Books, games, and software properly categorized

### **Technical SEO**

* **Semantic HTML** - Proper heading hierarchy and ARIA labels
* **Image Optimization** - Descriptive alt text with keyword integration
* **Sitemap Integration** - Complete XML sitemap with archive content
* **Robots.txt Optimization** - Strategic crawling directives
* **Meta Tags** - Comprehensive OpenGraph and Twitter Card implementation

### **Performance SEO**

* **Local Font Loading** - Preload strategies for critical fonts
* **Image Optimization** - Proper sizing and format selection
* **CSS/JS Optimization** - Minification and efficient loading
* **Core Web Vitals** - Optimized for Google's performance metrics

## **Features & Functionality**

### **Interactive Elements**

* **Custom SVG Cursor System** - Three cursor states with smooth animations
  * `cursor-default.svg` - Normal navigation
  * `cursor-click.svg` - Click/active state
  * `cursor-write.svg` - Text input areas
* **Sound Effects** - Hover and click audio feedback
* **Keyboard Navigation** - Full accessibility support
* **Smooth Animations** - CSS transitions and transforms

### **Accessibility Features**

* **ARIA Labels** - Screen reader support
* **Focus Management** - Visible focus indicators
* **Keyboard Navigation** - Tab, Enter, Space, Escape support
* **Semantic Structure** - Proper HTML5 elements
* **Alt Text** - Comprehensive image descriptions

### **Responsive Design**

* **Mobile-First** - Progressive enhancement approach
* **Breakpoints** - Desktop, tablet, mobile optimizations
* **Flexible Layouts** - CSS Grid and Flexbox
* **Touch-Friendly** - Appropriate target sizes

## **Development Guidelines**

### **Code Standards**

* **Semantic HTML5** - Proper element usage and structure
* **BEM-like CSS** - Consistent class naming conventions
* **ES6+ JavaScript** - Modern syntax and features
* **Accessibility-First** - WCAG compliance focus
* **Performance Optimization** - Efficient resource loading

### **Browser Support**

* **Modern Browsers** - Chrome, Firefox, Safari, Edge
* **Mobile Browsers** - iOS Safari, Chrome Mobile
* **Progressive Enhancement** - Graceful degradation for older browsers
* **Touch Device Support** - Automatic cursor system disabling

### **Performance Targets**

* **First Contentful Paint** < 1.5s
* **Largest Contentful Paint** < 2.5s
* **Cumulative Layout Shift** < 0.1
* **Time to Interactive** < 3s

## **Deployment Configuration**

### **GitHub Pages Setup**

* **Repository Structure** - Standard GitHub Pages configuration
* **Custom Domain** - DNS configuration for 42piratas.com
* **SSL Certificate** - Automatic HTTPS enforcement
* **Branch Strategy** - Main branch deployment

### **Domain Configuration**

* **DNS Records** - Proper A/CNAME record setup
* **SSL/TLS** - Certificate management
* **CDN Integration** - GitHub Pages built-in CDN
* **Monitoring** - Uptime and performance tracking

## **Maintenance Procedures**

### **Content Updates**

* **Project Addition** - Structured process for new work
* **Archive Management** - PDF/EPUB file organization
* **Image Optimization** - Compression and format standards
* **SEO Monitoring** - Search Console integration

### **Technical Maintenance**

* **Dependency Updates** - CDN resource monitoring
* **Performance Audits** - Regular Lighthouse assessments
* **Accessibility Testing** - WAVE and axe tool validation
* **Cross-Browser Testing** - Multi-platform verification

### **Security Considerations**

* **Content Security Policy** - Header configuration
* **File Permissions** - Proper access controls
* **Resource Integrity** - CDN security measures
* **Update Protocols** - Safe deployment practices

## **Analytics & Monitoring**

### **Performance Monitoring**

* **Core Web Vitals** - Google's performance metrics
* **Page Speed Insights** - Regular performance audits
* **Lighthouse Scores** - Comprehensive quality assessments
* **Real User Monitoring** - Actual user experience data

### **SEO Tracking**

* **Google Search Console** - Indexing and ranking monitoring
* **Schema Validation** - Structured data testing
* **Sitemap Submission** - Search engine registration
* **Keyword Performance** - Search query analysis

---

**Last Updated**: January 19, 2025  
**Version**: 2025.2  
**Status**: Production Ready