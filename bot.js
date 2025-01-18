const express = require('express');
const app = express();

require('dotenv').config();
const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;

const fetchNews = async (category = 'general') => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        apiKey: process.env.API_KEY,
        category: category,
        language: 'en',
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};


bot.start((ctx) => {
  ctx.reply('👋 Welcome to the News Digest Bot! 📰 Use /subscribe <category> to subscribe to news categories.');
});


bot.command('subscribe', async (ctx) => {
  const category = ctx.message.text.split(' ')[1];

  if (['technology', 'sports', 'business', 'general'].includes(category)) {
    ctx.reply(`🎉 You have subscribed to ${category} news! 📰 Use /news to get the latest updates.`);
  } else {
    ctx.reply('❌ Invalid category. Please choose from: technology, sports, business, general.');
  }
});


bot.command('news', async (ctx) => {
  const category = 'technology'; 

  const news = await fetchNews(category);
  if (news.length === 0) {
    ctx.reply('😔 Sorry, no news available at the moment.');
  } else {
    let newsText = '📰 Here are the latest headlines:\n\n';
    const articlesToSend = news.slice(0, 2);
    articlesToSend.forEach((article, index) => {
      newsText += `${index + 1}. 📝 ${article.title}\n🔗 ${article.url}\n\n`;
    });
    ctx.reply(newsText);
  }
});


bot.command('article', async (ctx) => {
  const articleNumber = parseInt(ctx.message.text.split(' ')[1], 10) - 1;

  const news = await fetchNews('technology');
  if (news[articleNumber]) {
    const article = news[articleNumber];
    ctx.reply(`📖 Here's the full article: \n📰 ${article.title}\n🔗 ${article.url}`);
  } else {
    ctx.reply('❌ Invalid article number.');
  }
});

bot.launch();


app.get('/', (req, res) => {
  res.send('🌐 News Digest Bot API is running! Use /news or /article to interact with the bot.');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}...`);
});
