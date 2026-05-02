# Image Processing API (BullMQ + Node.js + Sharp + Redis)

A lightweight **background image processing system** built using **BullMQ**, **Redis**, **Node.js**, **Express**, **Multer**, and **Sharp**.

This project demonstrates how to build a **real-world job queue system** where image uploads are processed asynchronously using a worker.

---

# 🚀 Features

- Image upload via REST API (Multer)
- Background job processing using BullMQ
- Redis-based queue system
- Image compression using Sharp
- Automatic storage of:
  - original images → `uploads/`
  - compressed images → `compressed/`
---

# Tech Stack

- Node.js
- Express.js
- BullMQ
- Redis
- Sharp
- Multer

---
# System Flow


Client (Postman)
→
Express API (Upload Route)
→
Multer (stores file in /uploads)
→
BullMQ Queue (Redis)
→
Worker (ImageWorker.js)
→
Sharp (compression)
→
/compressed folder

---
#  Setup Instructions

## 1. Install dependencies

```bash
npm install
```
## 2. Add environment variable

Create a .env file in the root directory:
```bash
REDIS_URL=your_redis_cloud_connection_url
```
## 3. Start Server (API)

Run this from project root:
```bash
node server.js
```
## 4. Start Worker (IMPORTANT)
Run in a separate terminal
Both terminals MUST stay in the SAME project root directory.

❌DO NOT do:
```bash
cd bullmq
node ImageWorker.js 
```
✅ Correct:
```bash
node bullmq/ImageWorker.js
```
## 5. API Endpoint
Upload Image: POST /uploads

Response:
```bash
{
  "message": "Image Added to the queue",
  "filename": "12345-image.jpg"
}
```
