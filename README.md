# 📰 **News Digest Bot**

A simple Telegram bot that fetches the latest news articles using the NewsAPI and sends them to users. The bot allows users to subscribe to specific news categories and get the latest updates, as well as view full articles based on their choice.

## 🧩 **Features**

- **/start** 👋 - Sends a welcome message and basic instructions.
- **/subscribe <category>** 📰 - Allows users to subscribe to a specific news category (e.g., technology, sports, business, general).
- **/news** 📰 - Fetches and sends the latest 2 news articles from the subscribed category.
- **/article <article_number>** 📖 - Fetches and sends the full article of the specified article number.

## 🔧 **Setup**

### Prerequisites

- **Node.js** 🖥️ installed on your machine.
- A **Telegram Bot Token** 🤖 from [BotFather](https://web.telegram.org/k/#@BotFather).
- An **API key** 🔑 from [NewsAPI](https://newsapi.org/).

### Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/sohit-mishra/newsdigestbot.git
    cd news-digest-bot
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project with the following content:
    ```env
    BOT_TOKEN=your_telegram_bot_token
    API_KEY=your_newsapi_key
    PORT=3000
    ```

    Replace `your_telegram_bot_token` with the token you get from BotFather and `your_newsapi_key` with the API key you obtain from NewsAPI.

### 🚀 **Running the Bot**

To start the bot, run the following command in your terminal:

```bash
npm start
```

# 💬 **Usage**

- Start a chat with your bot on Telegram.
- Use `/start` 👋 to get a welcome message.
- Use `/subscribe <category>` 📰 to subscribe to a specific news category (e.g., sports, business).
- Use `/news` 📰 to get the latest news from your subscribed category.
- Use `/article <article_number>` 📖 to get the full article.

## 📝 **Example Commands**
- `/subscribe technology` 📰
- `/news` 📰
- `/article 1` 📖

## 🌐 **Visit Link**
If you are using this project via the live bot, click here to visit:

**Name**: NewsDigestXBot  
🤖 [Bot Live Link](https://web.telegram.org/k/#@NewsDigestXBot) 🌍

---

## 🤝 **Like This Project? Connect With Me!**
If you like this project and want to create more Telegram bots, feel free to connect with me on LinkedIn:  
🔗 [Your LinkedIn Profile](https://www.linkedin.com/in/sohitmishra/) 💼🌟
