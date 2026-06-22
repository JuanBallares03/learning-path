# Day 13 – JavaScript Project: "Exchange Rate Site"

## 📌 Description
This project is an exchange rate app that queries real-time currency data from external public APIs.  
It focuses on asynchronous programming in JavaScript: understanding synchronous vs asynchronous code, callbacks, promises with `.then()`, and modern `async/await` with error handling using `try/catch`.  
It’s the first project consuming real APIs from the internet.

## ✨ Features
- Parallel requests to 3 real APIs when the page loads:
  - `open.er-api.com` → USD to EUR exchange rate
  - `api.frankfurter.dev` → EUR to MXN exchange rate
  - `open.er-api.com` → ARS to USD exchange rate
- Loading GIF visible while awaiting responses, hidden once data arrives.
- Displays all three results on screen after all promises resolve.
- Functions separated by responsibility: fetch data, show labels, render results.

## 🛠 Technologies
- HTML5  
- CSS3  
- JavaScript (async/await)  
- Public REST APIs

## 🖼 Screenshots
### Loading State (GIF visible while awaiting responses)
![Loading](./07-assets/loading.png)

### Exchange Rate Results (after all promises resolve)
![Exchange Rates](./07-assets/exchange-rates.png)

## 📌 Visual Disclaimer
The main interface image was sourced from [Pexels](https://www.pexels.com/es-es/) for decorative purposes.  
It does not represent registered trademarks and is not associated with any real company.

## 🚀 How to Run
1. Clone the repository:
```bash
git clone https://github.com/JuanBallares03/ProyectosJavaScript.git
