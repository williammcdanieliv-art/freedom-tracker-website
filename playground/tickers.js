/* ============================================================================
   Freedom Playground Lite — ticker dataset
   ----------------------------------------------------------------------------
   THIS IS SAMPLE DATA. The yields below are illustrative placeholders, NOT live
   market data. Run  build_tickers.py  (which reuses the app's yfinance code) to
   overwrite this file with current distribution rates before going live.

   Each entry: ticker -> { name, price, yield (annual %), freq (pay frequency) }
   "lastUpdated" drives the freshness note shown on the page.
   ============================================================================ */
window.FT_TICKERS = {
  lastUpdated: "SAMPLE — not live data",
  isSample: true,
  data: {
    "SCHD":  { name: "Schwab US Dividend Equity ETF", price: 27.0,  yield: 3.6,  freq: "Quarterly" },
    "VYM":   { name: "Vanguard High Dividend Yield ETF", price: 130.0, yield: 2.7, freq: "Quarterly" },
    "DGRO":  { name: "iShares Core Dividend Growth ETF", price: 62.0, yield: 2.2, freq: "Quarterly" },
    "O":     { name: "Realty Income Corp", price: 57.0,  yield: 5.5,  freq: "Monthly" },
    "JEPI":  { name: "JPMorgan Equity Premium Income ETF", price: 57.0, yield: 7.5, freq: "Monthly" },
    "JEPQ":  { name: "JPMorgan Nasdaq Equity Premium Income ETF", price: 53.0, yield: 9.5, freq: "Monthly" },
    "QYLD":  { name: "Global X Nasdaq 100 Covered Call ETF", price: 17.0, yield: 11.5, freq: "Monthly" },
    "RYLD":  { name: "Global X Russell 2000 Covered Call ETF", price: 16.0, yield: 12.0, freq: "Monthly" },
    "XYLD":  { name: "Global X S&P 500 Covered Call ETF", price: 40.0, yield: 9.5, freq: "Monthly" },
    "MAIN":  { name: "Main Street Capital Corp", price: 50.0, yield: 6.0, freq: "Monthly" },
    "ARCC":  { name: "Ares Capital Corp", price: 21.0, yield: 9.0, freq: "Quarterly" },
    "SPYI":  { name: "NEOS S&P 500 High Income ETF", price: 50.0, yield: 12.0, freq: "Monthly" },
    "DIVO":  { name: "Amplify CWP Enhanced Dividend Income ETF", price: 38.0, yield: 4.6, freq: "Monthly" },
    "VIG":   { name: "Vanguard Dividend Appreciation ETF", price: 195.0, yield: 1.7, freq: "Quarterly" },
    "HDV":   { name: "iShares Core High Dividend ETF", price: 113.0, yield: 3.4, freq: "Quarterly" },
    "SDIV":  { name: "Global X SuperDividend ETF", price: 22.0, yield: 11.0, freq: "Monthly" },
    "PFF":   { name: "iShares Preferred & Income Securities ETF", price: 31.0, yield: 6.5, freq: "Monthly" },
    "KO":    { name: "Coca-Cola Co", price: 62.0, yield: 3.1, freq: "Quarterly" },
    "PEP":   { name: "PepsiCo Inc", price: 145.0, yield: 3.6, freq: "Quarterly" },
    "JNJ":   { name: "Johnson & Johnson", price: 150.0, yield: 3.3, freq: "Quarterly" },
    "T":     { name: "AT&T Inc", price: 22.0, yield: 5.1, freq: "Quarterly" },
    "VZ":    { name: "Verizon Communications", price: 42.0, yield: 6.4, freq: "Quarterly" },
    "MO":    { name: "Altria Group Inc", price: 52.0, yield: 7.8, freq: "Quarterly" },
    "ABBV":  { name: "AbbVie Inc", price: 175.0, yield: 3.5, freq: "Quarterly" }
  }
};
