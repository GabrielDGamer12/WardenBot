const { CommandInteraction, Client } = require("discord.js");
const express = require('express');
const app = express();
const https = require("https");
const currency = require('currency-converter-module');

module.exports = {
  name: "bitcoin",
  description: "Mostra o valor atual do Bitcoin",
  permissions: [],
    type: 'CHAT_INPUT',
    options: [
      {
        name: "quantia",
        description: "Quantos Bitcoins converter para Reais?",
        type: "NUMBER",
        required: false
      }
    ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const Amount = interaction.options.getNumber("quantia") || 1;
    const currency = require("node-currency");
    const axios = require("axios")
    const data = await currency.getCurrency("btc-usd");
    const dat = await currency.getCurrency("usd-brl");
    const data0 = parseFloat(dat.lastValue)
    const data1 = parseFloat(data.lastValue)
    const data2 = data1 * data0
    const final = (data2 * Amount).toFixed(2);
    const final1 = data2.toFixed(2)
    const Amountfixed = Amount.toFixed(2);

    await interaction.followUp({ content: `**₿${Amount}** Equivalem a **R$${final}**\n\n\`O Valor pode ter uma margem de erro de R$1000,00\`` })
  },
};
