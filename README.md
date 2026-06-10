# Temperature Converter Web Application

A full-stack Temperature Converter built using HTML, CSS, JavaScript, and Node.js. This application allows users to convert temperatures between multiple units including Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur through a clean and responsive user interface.

## Features

* Convert temperature from any supported unit
* Supports:

  * Celsius (°C)
  * Fahrenheit (°F)
  * Kelvin (K)
  * Rankine (°R)
  * Réaumur (°Ré)
* Instant conversion to all other units
* Responsive and user-friendly interface
* Lightweight Node.js backend using Express
* Easy to deploy and customize

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Node.js
* Express.js

## Project Structure

```text
temperature-converter/
│
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/temperature-converter.git
```

2. Navigate to the project directory

```bash
cd temperature-converter
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node server.js
```

5. Open your browser and visit

```text
http://localhost:3000
```

## Temperature Conversion Formulas

### Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Fahrenheit to Celsius

```text
°C = (°F − 32) × 5/9
```

### Celsius to Kelvin

```text
K = °C + 273.15
```

### Celsius to Rankine

```text
°R = (°C + 273.15) × 9/5
```

### Celsius to Réaumur

```text
°Ré = °C × 0.8
```

## Future Enhancements

* Dark Mode
* Conversion History
* Unit Swap Feature
* API Integration
* Progressive Web App (PWA) Support

## Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## License

This project is open source and available under the MIT License.
