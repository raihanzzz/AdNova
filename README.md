# 🚀 AdNova — AI-Powered In-Context Advertising Platform  

> Transform product photos into **studio-grade ads & cinematic videos** using Generative AI.  

🔗 **Created by:** [Md Raihan](https://linkedin.com/in/md-raihan-9809592aa)

---

## 🌟 Overview

**AdNova** is a Full-Stack Generative AI SaaS platform designed to automate professional marketing content creation.

Instead of hiring photographers, models, and booking studios — users simply upload:

- A **product image**
- A **model image**

AdNova generates:

- 📸 Hyper-realistic, studio-quality marketing photos  
- 🎬 Cinematic short-form AI videos  

It solves a real-world problem: **reducing the high cost of product photography for e-commerce and social media marketing.**

---

## ✨ Core Features

### 🧠 AI Image Blending
- Merges product + model into a realistic single composition  
- Automatically matches lighting, shadows, scale, and perspective  
- Produces studio-grade advertising visuals  

### 🎥 AI Video Generation
- Converts generated images into cinematic short-form videos  
- Supports:
  - 9:16 (TikTok / Reels)
  - 16:9 (YouTube / Web)

### 💳 Credit-Based System
- 5 Credits → Image Generation  
- 10 Credits → Video Generation  
- New users receive **20 free credits**  
- Fully managed usage tracking  

### 🎨 Customization
- Aspect ratio selection  
- Custom narration prompts  
- AI scene control  

### 🌍 Community Showcase
- Multi-user public gallery  
- Publish and explore ads  

### 📂 Project Dashboard
- Track past generations  
- View credit usage  
- Delete projects  
- Manage published ads  

---

# 🛠 Technology Stack

## 🖥 Frontend

- React 19 + Vite  
- TailwindCSS 4  
- Framer Motion + Lenis  
- Clerk Authentication  
- Lucide React  
- React Hot Toast  

## ⚙ Backend

- Node.js + TypeScript  
- Express 5  
- PostgreSQL  
- Prisma ORM  
- Cloudinary (Media Storage & CDN)  
- Sentry (Error Monitoring)  

---

# 🤖 AI Models

- **Google Gemini (gemini-3-pro-image)** → Image synthesis & blending  
- **Google Veo (veo-3.1-generate)** → Image-to-Video generation  

---

# 🔌 Key Integrations

| Category        | Tool / SDK Used |
|----------------|-----------------|
| AI SDK         | @google/genai |
| Authentication | @clerk/clerk-react & @clerk/express |
| Database       | Prisma + pg (PostgreSQL) |
| Uploads        | Multer |
| CDN / Storage  | Cloudinary SDK |
| Networking     | Axios |

---

# 🏗 Architecture Flow

User Upload → Express API → Google AI (Gemini / Veo)  
↓  
Cloudinary Storage  
↓  
PostgreSQL (Prisma ORM)  
↓  
React Frontend  

---

# 🎯 Why AdNova Stands Out

- Full-Stack AI SaaS Application  
- Real-world business solution  
- Credit-based monetization logic  
- Multi-user architecture  
- Modern production-ready tech stack  
- Integrated with latest Generative AI models  

---

# 🚀 Future Enhancements

- Stripe credit purchase system  
- AI voice narration  
- Brand/team accounts  
- Analytics dashboard  
- Public API access  

---

# 👨‍💻 Author

**Md Raihan**  
B.Tech CSE | Full-Stack Developer | AI Builder  

🔗 LinkedIn:  
https://linkedin.com/in/md-raihan-9809592aa

---

⭐ If you found this project interesting, consider starring the repository!
