# **📖 Event Management AI 🤖**
🚀 **Event Management AI** is an AI-powered cross-platform application that helps users **plan, organize, and manage events effortlessly** using **OpenAI's ChatGPT**. The app provides **event planning suggestions, budgeting tools, reminders, and checklists** to ensure a seamless experience.

---

## **🌟 Features**
✅ **AI-Powered Event Suggestions** – Get tailored event planning ideas.  
✅ **Budget Calculator** – Manage event expenses effectively.  
✅ **Checklist & Reminders** – Stay organized and never forget a task.  
✅ **Interactive UI & Animations** – Engaging and dopamine-releasing UI for a smooth experience.  
✅ **Cross-Platform** – Works on both **iOS & Android (React Native + Expo)**.  
✅ **Secure API Integration** – Uses **OpenAI GPT-3.5/4** for real-time responses.  
✅ **Offline Support** – Save event details locally.  

---

## **📲 Installation & Setup**
Follow these steps to set up the project:

### **1️⃣ Prerequisites**
Ensure you have:
- **Node.js (LTS version)**
- **Expo CLI**
- **Git**

### **2️⃣ Clone the Repository**
```bash
git clone https://github.com/thekartikeyamishra/event-management-ai.git
cd event-management-ai
```

### **3️⃣ Install Dependencies**
```bash
npm install
```

### **4️⃣ Configure OpenAI API Key**
1. **Create a `.env` file** in the root folder.
2. Add your **OpenAI API Key**:
```env
EXPO_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
```

### **5️⃣ Start the App**
```bash
npx expo start
```
- **Press `w`** to run on the web.
- **Press `a`** to run on Android.
- **Press `i`** to run on iOS.

---

## **🛠️ Tech Stack**
🔹 **React Native + Expo** – Cross-platform mobile development  
🔹 **OpenAI API** – AI-powered event suggestions  
🔹 **React Navigation** – Seamless app navigation  
🔹 **AsyncStorage (localStorage alternative)** – Offline event storage  
🔹 **Styled Components & React Native UI** – Interactive and modern UI  

---

## **🚀 App Workflow**
1️⃣ **User enters event details** on the home screen.  
2️⃣ **AI generates event planning suggestions** based on input.  
3️⃣ **Users can calculate budgets**, create checklists, and set reminders.  
4️⃣ **Data is stored locally & AI provides real-time responses.**  

---

## **🛠️ API Integration**
The app connects with **OpenAI's ChatGPT** to provide **intelligent event suggestions**. Below is an example API call:

```javascript
export const generateResponse = async (prompt) => {
  try {
    const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
    if (!apiKey) throw new Error('Missing API Key!');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    return data.choices[0]?.message?.content.trim() || 'No response available.';
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
```

---

## **🎯 Contributing**
We welcome contributions! Follow these steps:
1. **Fork** the repo.
2. **Create a new branch** (`feature/new-feature`).
3. **Commit changes** (`git commit -m "Added new feature"`).
4. **Push to the branch** (`git push origin feature/new-feature`).
5. **Create a pull request**.

---

## **💡 Future Improvements**
📌 **Google Calendar & Email Reminders**  
📌 **Multi-language Support (Hindi, Tamil, etc.)**  
📌 **Social Media Sharing of Events**  

---

## **📜 License**
MIT License. Free to use, modify, and distribute.

---

## **📣🐦 Connect With Us**
📧 **Email:** workmailkartikeya@gmail.com  
💬 **LinkedIn:** [@thekartikeyamishra](https://www.linkedin.com/in/thekartikeyamishra/)  
📷 **Code explanation (YouTube) :** [@event_management_ai](https://instagram.com/event_management_ai)  

---
### **⭐ If you like this project, please give it a star on GitHub! ⭐**
---

