# FitLog

A modern and responsive workout library web application built with Next.js and TypeScript. FitLog helps users discover workouts, view workout details, create a daily workout plan, and save workouts for later.

## ✨ Features

* 🏋️ Browse a collection of workouts from the workout library
* 📋 View detailed information about each workout
* ➕ Add workouts to Today's Plan
* 🔖 Save workouts for later
* 📊 View total exercises, minutes, and calories in the plan
* ✅ Mark workouts as done
* ❌ Remove workouts from Today's Plan or Saved list
* 🔄 Sort workouts by duration, calories, and rating
* 🔔 Toast notifications for user actions
* ⏳ Loading state while workout data is being fetched
* 🚫 Custom 404 page for unavailable routes
* 📱 Fully responsive for mobile, tablet, and desktop

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Icons
* React Toastify
* REST API

## 🔌 API

Workout data is fetched from the FitLog API.

```tsx id="r7n2kp"
const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
);

if (!res.ok) {
    notFound();
}

const workout = await res.json();
```

## 📦 State Management

Context API is used to manage Today's Plan and Saved workouts.

```tsx id="m4x8qa"
const [plan, setPlan] = useState<FitLogType[]>([]);
const [saved, setSaved] = useState<FitLogType[]>([]);
```

## 📁 Project Structure

The project follows the Next.js App Router structure and uses reusable components for different sections of the application.

* `app/` — Pages and routes
* `components/` — Reusable UI components
* `context/` — Global workout state
* `workout/[id]/` — Dynamic workout details page
* `my-plan/` — User's workout plan
* `loading.tsx` — Loading state
* `not-found.tsx` — Custom 404 page
* `public/` — Static assets and data

## 🎯 Project Goal

The goal of FitLog is to provide a simple and focused way to discover workouts and organize a daily workout routine.
