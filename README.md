# MiPiBoy Blog  

یک وبلاگ مدرن و واکنش‌گرا ساخته شده با **Next.js 15**، **Fumadocs MDX** و **Tailwind CSS**. رابط کاربری زیبا برای نمایش مقالات، آموزش‌ها و بینش‌هایی درباره React و توسعه وب مدرن.  

## ✨ ویژگی‌ها  

- 🎨 **طراحی مدرن** - رابط کاربری تمیز و واکنش‌گرا  
- 📝 **پشتیبانی از MDX** - نوشتن پست‌های وبلاگ در MDX با پشتیبانی کامل از کامپوننت‌ها  
- 🌙 **حالت تاریک/روشن** - سوئیچ داخلی برای تغییر تم  
- 🏷️ **برچسب‌ها و دسته‌بندی‌ها** - سازماندهی محتوا با برچسب‌ها  
- ⭐ **پست‌های ویژه** - برجسته‌سازی بهترین مقالات  
- 📱 **واکنش‌گرایی موبایل** - نمایش عالی در همه دستگاه‌ها  
- 🚀 **عملکرد سریع** - بهینه‌سازی شده با Next.js 15  

## 🚀 شروع کار  

```bash
# کلون کردن مخزن
git clone <repo-url>
cd blog-template

# نصب وابستگی‌ها
pnpm install

# اجرای سرور توسعه
pnpm dev

# ساخت برای محیط تولید
pnpm build
```

## ✍️ افزودن پست‌های وبلاگ  

یک فایل MDX جدید در مسیر `blog/content/` با فرمت `your-post-title.mdx` ایجاد کنید:  

````mdx
---
title: "عنوان پست وبلاگ شما"
description: "توضیح کوتاه درباره پست شما"
date: "2024-12-01"
tags: ["React", "Next.js", "Tutorial"]
featured: true
readTime: "10 دقیقه مطالعه"
author: "نام شما"
---

محتوای پست وبلاگ شما اینجا قرار می‌گیرد...

## پشتیبانی از Markdown

شما می‌توانید از تمام قابلیت‌های استاندارد Markdown به همراه کامپوننت‌های MDX استفاده کنید.

```tsx
// هایلایت کد به‌خوبی کار می‌کند!
export default function Component() {
  return <div>Hello World!</div>;
}
```
````

## 🎨 سفارشی‌سازی  

### افزودن برچسب‌ها/دسته‌بندی‌های جدید  
کافیست آن‌ها را به بخش frontmatter پست وبلاگ اضافه کنید. سیستم به‌طور خودکار صفحات برچسب ایجاد می‌کند.  

### پست‌های ویژه  
برای برجسته‌سازی یک پست در صفحه اصلی، مقدار `featured: true` را در frontmatter قرار دهید (می‌توانید یک بخش ویژه در صفحه اصلی بسازید).  

### استایل‌دهی  
پروژه از **Tailwind CSS** با یک سیستم طراحی سفارشی استفاده می‌کند. برای تغییر استایل‌ها:  

- `app/globals.css` - استایل‌های عمومی  
- فایل‌های کامپوننت - استایل‌های مخصوص هر کامپوننت  

### برای نویسندگان  
جزئیات نویسندگان را در فایل `lib/authors.ts` اضافه کنید:  

```tsx
// lib/authors.ts
export const authors: Record<string, Author> = {
  dillion: {
    name: "Dillion Verma",
    position: "مهندس نرم‌افزار",
    avatar: "/authors/dillion.png",
  },
  arghya: {
    name: "Arghya Das",
    position: "مهندس سیستم طراحی",
    avatar: "/authors/arghya.png",
  },
  // جزئیات نویسنده خود را اینجا اضافه کنید
  yourname: {
    name: "نام کامل شما",
    position: "سمت/عنوان شما",
    avatar: "/authors/your-avatar.png",
  },
} as const;
```

سپس در پست‌های وبلاگ، کلید نویسنده را در frontmatter وارد کنید (مثلاً `author: "yourname"`).  

## 📖 فناوری‌های استفاده‌شده  

- **Next.js 15** - فریم‌ورک React با App Router  
- **Fumadocs MDX** - پردازش و کامپوننت‌های MDX  
- **Tailwind CSS** - فریم‌ورک CSS مبتنی بر utility  
- **TypeScript** - جاوااسکریپت تایپ‌سیف  
- **Geist Font** - تایپوگرافی مدرن  

## 🤝 مشارکت  

مشارکت‌ها خوش‌آمد هستند! لطفاً آزادانه Pull Request ارسال کنید.  

## 📄 مجوز  

این پروژه متن‌باز بوده و تحت [MIT License](LICENSE). در دسترس است.  


---

# MiPiBoy Blog

A modern, responsive blog built with Next.js 15, Fumadocs MDX, and Tailwind CSS. Beautiful interface for displaying articles, tutorials, and insights about React and modern web development.

## ✨ Features

- 🎨 **Modern Design** - Clean, responsive interface
- 📝 **MDX Support** - Write blog posts in MDX with full component support
- 🌙 **Dark Mode** - Built-in dark/light theme toggle
- 🏷️ **Tags & Categories** - Organize content with tags
- ⭐ **Featured Posts** - Highlight your best articles
- 📱 **Mobile Responsive** - Perfect on all devices
- 🚀 **Fast Performance** - Optimized with Next.js 15

## 🚀 Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd blog-template

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## ✍️ Adding Blog Posts

Create a new MDX file in `blog/content/` with format `your-post-title.mdx`:

````mdx
---
title: "Your Blog Post Title"
description: "A brief description of your post"
date: "2024-12-01"
tags: ["React", "Next.js", "Tutorial"]
featured: true
readTime: "10 min read"
author: "Your Name"
---

Your blog post content here...

## Markdown Support

You can use all standard Markdown features plus MDX components.

```tsx
// Code syntax highlighting works great!
export default function Component() {
  return <div>Hello World!</div>;
}
```
````

## 🎨 Customization

### Adding New Tags/Categories

Simply add them to your blog post frontmatter. The system automatically generates tag pages.

### Featured Posts

Set `featured: true` in your blog post frontmatter to highlight it on the homepage (you can create a dedicated feature section in the home page).

### Styling

The project uses Tailwind CSS with a custom design system. Modify styles in:

- `app/globals.css` - Global styles
- Individual component files - Component-specific styles

### For Authors

Add your author details to the `lib/authors.ts` file.

```tsx
// lib/authors.ts
export const authors: Record<string, Author> = {
  dillion: {
    name: "Dillion Verma",
    position: "Software Engineer",
    avatar: "/authors/dillion.png",
  },
  arghya: {
    name: "Arghya Das",
    position: "Design System Engineer",
    avatar: "/authors/arghya.png",
  },
  // Add your author details here
  yourname: {
    name: "Your Full Name",
    position: "Your Position/Title",
    avatar: "/authors/your-avatar.png",
  },
} as const;
```

Then reference your author in blog posts using the key (e.g., `author: "yourname"`).

## 📖 Technologies Used

- **Next.js 15** - React framework with App Router
- **Fumadocs MDX** - MDX processing and components
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Geist Font** - Modern typography

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

