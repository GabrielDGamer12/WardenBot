const { CommandInteraction, Client } = require("discord.js");
const express = require('express');
const app = express();
const https = require("https");
const currency = require('currency-converter-module');

module.exports = {
  name: "euro",
  description: "Mostra o valor atual do Euro",
  permissions: [],
    type: 'CHAT_INPUT',
    options: [
      {
        name: "quantia",
        description: "Quantos Euros converter para Reais?",
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
    const data = await currency.getCurrency("eur-brl");
    const data1 = parseFloat(data.lastValue)
    const final = (data1 * Amount).toFixed(2);
    const final1 = data1.toFixed(2)
    const Amountfixed = Amount.toFixed(2);

    await interaction.followUp({ content: `**€${Amountfixed}** Equivalem a **R$${final}**` })
  },
};
