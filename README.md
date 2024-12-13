# News Digest Bot

A simple Telegram bot that fetches the latest news articles using the NewsAPI and sends them to users. The bot allows users to subscribe to specific news categories and get the latest updates, as well as view full articles based on their choice.

## Features

- **/start** - Sends a welcome message and basic instructions.
- **/subscribe <category>** - Allows users to subscribe to a specific news category (e.g., technology, sports, business, general).
- **/news** - Fetches and sends the latest 2 news articles from the subscribed category.
- **/article <article_number>** - Fetches and sends the full article of the specified article number.

## Setup

### Prerequisites

- **Node.js** installed on your machine.
- A **Telegram Bot Token** from [BotFather](https://core.telegram.org/bots#botfather).
- An **API key** from [NewsAPI](https://newsapi.org/).

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
    ```

    Replace `your_telegram_bot_token` with the token you get from BotFather and `your_newsapi_key` with the API key you obtain from NewsAPI.

### Running the Bot

To start the bot, run the following command in your terminal:

```bash
node bot.js

